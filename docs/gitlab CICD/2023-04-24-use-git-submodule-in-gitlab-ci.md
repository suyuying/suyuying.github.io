---
title: use git submodule in gitlab CI to do ssl-check
description: 提供檢查證書到期的程式,以及相關gitlab CI設定.在自己另外寫檢查證書到期的程式時,就想辦法去改善這個可讀性的問題,因此發現 git submodule 是一個不錯的處理方式.過程想法如下1. 透過 gitlab CI,在檢測程式的 repo,透過 git submodule 抓取主 repo 的域名檔案,並用程式檢查.
authors: suyuying
image: https://github.com/suyuying.png
tags: [gitlab CI/CD, CICD, git submodule, ssl-check]
---

## what is git submodule

將一個 Git 存儲庫作為另一個存儲庫的子模組進行管理。也就是說可以在一個 git repo 底下,同時管理多個 git repo,可以在主代碼庫中輕鬆地管理和更新子模組. 詳細的介紹可以看- [Git - submodule 使用教學](https://blog.kennycoder.io/2020/06/14/Git-submodule-%E4%BD%BF%E7%94%A8%E6%95%99%E5%AD%B8/) ！

### when to use

我在工作上遇到的情況是有一個日常維護的主 repo,其中有一隻管理域名的檔案需要程式定期去 review 看域名跟憑證多久到期.目前方法是透過建立一個 git repo 內含有檢查域名的程式,建立 build image 的 CI,每當程市有改動會把程式打包做成 image.然後在主 repo 那邊則會拉取該 image 去做域名的檢查.過程如下:

1. 子 repo 更新程式並 CI 建立 image
2. 使用步驟 1 建立的新 image,於主 repo 透過 CI 定時使用最新的 image 執行程式檢查.

這個方式沒啥問題,只是對於一些新人或初次看到這個架構的人而言,會覺得串這兩層很複雜.

所以後來我在自己另外寫檢查證書到期的程式時,就想辦法去改善這個可讀性的問題,因此發現 git submodule 是一個不錯的處理方式.
過程想法如下

1. 透過 CI,在檢測程式的 repo,透過 git submodule 抓取主 repo 的域名檔案,並用程式檢查.

<!--truncate-->

## steps

### 1. 在程式 repo 先 git submodule 抓 主檔案 repo

```
#git submodule add <remote repository> <local path>
git submodule add git@gitlab.dongg.com:it/office_sop.git
```

### 2. 修改.gitmodules,改用相對位置

不改會報錯 Docker: error cannot run ssh: No such file or directory,因為用相對位置,這邊也提供我 repo 網址方便比對.網址: git@gitlab.dongg.com:ford/domanininfocheck.git

```jsx title=.gitmodules"
[submodule "office_sop"]
	path = office_sop
	url = ../../it/office_sop.git
```

### 3. 建立 CI

```jsx title=".gitlab-ci.yml"
stages:
  - deploy
variables:
  TZ: Asia/Taipei

runCodeToTg:
  stage: deploy
  image:
    name: python:3.9-slim
  variables:
    GIT_SUBMODULE_FORCE_HTTPS: "true"
    GIT_SUBMODULE_UPDATE_FLAGS: --remote
    GIT_SUBMODULE_STRATEGY: recursive
    GIT_SUBMODULE_DEPTH: 1
  only:
    - schedules
    - web
  tags:
    - docker
  script:
    - pip install --no-cache-dir -r ./requirement.txt
    - python3 main.py
    - ls office_sop
    - cd office_sop
# 這是我程式段執行錯誤會報錯的log,透過artifacts可以拿到資料.
  artifacts:
    paths:
      - domain.err.log

```

這裡面最重要的是這四個變數

- GIT_SUBMODULE_FORCE_HTTPS: "true" ,將子模組的 URL 強制設置為 HTTPS
- GIT_SUBMODULE_UPDATE_FLAGS: --remote,使用遠程跟踪分支更新子模組。這將會拉取遠程存儲庫中子模組的最新版本,不加這段你會發現你拉到的都是當初 git submodule add 的 commit 號
- GIT_SUBMODULE_STRATEGY: recursive,當更新子模組時，使用遞歸策略，即遞歸地更新所有子模組的子模組。
- GIT_SUBMODULE_DEPTH: 1,限制子模組更新的深度。

主要是注意 <highlight color="#25c2a0">GIT_SUBMODULE_UPDATE_FLAGS</highlight> 最好要設定,不加這段你會發現你拉到的都是當初 git commit 號.

### 4.git push,DONe.

## 檢查證書到期主程式碼

檢測證書到期的程式碼,參考自[gdamjan](https://gist.github.com/gdamjan/55a8b9eec6cf7b771f92021d93b87b2c)

<details>
  <summary>檢測證書到期的程式碼</summary>
  <div>

```jsx title="main.py"
# -*- encoding: utf-8 -*-
# requires a recent enough python with idna support in socket
# pyopenssl, cryptography and idna
import time

import requests
from loguru import logger
from datetime import datetime
from datetime import timedelta
from OpenSSL import SSL
from cryptography import x509
from cryptography.x509.oid import NameOID
import idna
import concurrent.futures
from socket import socket
from collections import namedtuple
import re
import sys
# 主程式是執行get_certificate 取得domain相關資訊，之後把資訊印出（串print_basic_info）
# print_basic_info會去執行get_alt_names (SAN: ['*.don99.com', 'don87.com'])
# 執行get_common_name 取得 commonName: *.don99.com
# 執行get_issuer取得憑證發行商
# 憑證有關資訊的取得，都是透過get_certificate使用idna socket SSL
# （這邊function跟區域變數命名是採用 _區隔，全癒採用駝峰，然後function的params被帶入時，前面return有對到
# 已知報錯，如果沒有二級域名 ex. .don3nm.com 會報錯 idna.core.IDNAError: Empty Label(idna編碼錯誤）
# 如果網址沒有dns record，socket連接會報錯 socket.gaierror: [Errno 8] nodename nor servname provided, or not known
# 做named tuple
HostInfo = namedtuple(field_names='cert hostname peername', typename='HostInfo')


def verify_cert(cert, hostname):
    # verify notAfter/notBefore, CA trusted, servername/sni/hostname
    cert.has_expired()
    # service_identity.pyopenssl.verify_hostname(client_ssl, hostname)
    # issuer
def get_certificate(hostname, port):
    try:
        hostname_idna = idna.encode(hostname)
        sock = socket()
        sock.connect((hostname, port))
        peername = sock.getpeername()
        ctx = SSL.Context(SSL.SSLv23_METHOD)  # most compatible
        ctx.check_hostname = False
        ctx.verify_mode = SSL.VERIFY_NONE

        sock_ssl = SSL.Connection(ctx, sock)
        sock_ssl.set_connect_state()
        sock_ssl.set_tlsext_host_name(hostname_idna)
        sock_ssl.do_handshake()
        cert = sock_ssl.get_peer_certificate()
        crypto_cert = cert.to_cryptography()
        sock_ssl.close()
        sock.close()
        return HostInfo(cert=crypto_cert, peername=peername, hostname=hostname)
    except Exception as err:
        telegram_bot_sendtext(f"{hostname} wrong with the form or DNS Record, go cheeck")
        logger.exception(err)

    # 用dict也可以，不過named tuple可以讓固定資料（你的key早固定了）存取的場景下，讓code更易讀

def get_alt_names(cert):
    try:
        ext = cert.extensions.get_extension_for_class(x509.SubjectAlternativeName)
        return ext.value.get_values_for_type(x509.DNSName)
    except x509.ExtensionNotFound as e:
        logger.exception(e)
        return None

def get_common_name(cert):
    try:
        names = cert.subject.get_attributes_for_oid(NameOID.COMMON_NAME)
        # [<NameAttribute(oid=<ObjectIdentifier(oid=2.5.4.3, name=commonName)>, value='ls.don3bn.com')>]
        return names[0].value
    except x509.ExtensionNotFound as e:
        logger.exception(e)
        return None

def get_issuer(cert):
    try:
        names = cert.issuer.get_attributes_for_oid(NameOID.COMMON_NAME)
        # [<NameAttribute(oid=<ObjectIdentifier(oid=2.5.4.3, name=commonName)>, value='R3')>]
        return names[0].value
    except x509.ExtensionNotFound as e:
        logger.exception(e)
        return None
@logger.catch
def print_basic_info(hostinfo):
    vaild_days = hostinfo.cert.not_valid_after - datetime.today()
    print(vaild_days)
    if vaild_days > timedelta(days=0) and vaild_days < timedelta(days=10):
        print(f"{hostinfo.hostname} Need check")
        logger.info(f"{hostinfo.hostname} Need check, left {vaild_days}")
        hostname=hostinfo.hostname
        peername=hostinfo.peername
        SAN=get_alt_names(hostinfo.cert)
        # f"{hostinfo.hostname} Need check, left {vaild_days}"
        s=f"» {hostname} « … {peername} SAN: {SAN} {hostinfo.hostname} Need check, left {vaild_days}"
        logger.info(s)
        telegram_bot_sendtext(s)

def check_it_out(hostname, port):
    hostinfo = get_certificate(hostname, port)
    print_basic_info(hostinfo)


def only_level(level):
    def is_level(record):
        return record['level'].name == level

    return is_level


def open_domain_info():
    try:
        with open("./office_sop/domains-info.md", "r", encoding="utf-8") as f:
            domain_info = f.readlines()
        return domain_info
    except Exception as e:
        print(e)
        return None
def telegram_bot_sendtext(bot_message):
    bot_token = 'secret'
    bot_chatid = 'secret'
    apiURL = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    try:
        response = requests.post(apiURL, json={'chat_id': bot_chatid, 'text': bot_message},timeout=(61, 61))
        time.sleep(1)
    except Exception as e:
        logger.exception(e)
        print(e)
    return response.json()

if __name__ == '__main__':
    logger.add('domain.err.log', level='ERROR', filter=only_level('ERROR'), compression="gz", rotation="500MB")
    logger.add('domain.out.log', level='INFO', filter=only_level('INFO'), compression="gz", rotation="500MB")
    patten = re.compile(r"((?=[a-z0-9-]{1,63}\.)[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}", flags=re.M)
    domain_info_lines = open_domain_info()
    try:
        telegram_bot_sendtext("check domain_info start")
        logger.info('"check domain_info start"')
        for each_line in domain_info_lines:
            # 每行以|區分，又做成list
            word_seperate_list: list = each_line.split('|')
            # 因為會有很多空行會只有一個元素\n，要篩出表格理論上元素要有4個以上
            if len(word_seperate_list) > 4 and patten.search(word_seperate_list[2]):
                domain = word_seperate_list[2].strip()
                # 如果available是空的就跳過，這邊用strip() 是因為有\t在不會是False
                if not word_seperate_list[3].strip():
                    continue
                HOSTS = [(f"{c.strip()}.{domain}", 443) for c in word_seperate_list[3].split(',') if c.strip()]
                print(HOSTS)
                # concurrent.futures.ThreadPoolExecutor 是python 多執行序實作，會用worker數量產生Executor
                with concurrent.futures.ThreadPoolExecutor(max_workers=4) as e:
                    # Executors 的相關方法，map(func, *iterables)，執行可迭代物件 ex list tuple named tuple
                    # 其實就是把可迭代物件的元素一個個拆開喂給Executor，提升程式執行速度
                    for hostinfo in e.map(lambda x: get_certificate(x[0], x[1]), HOSTS):
                        print_basic_info(hostinfo)
        telegram_bot_sendtext("check domain_info DONe")
        logger.info('check domain_info DONe')
    except Exception as err:
        logger.exception(err)
        telegram_bot_sendtext('there are something unexcept wrong, go cheeck error logs')


```

  </div>
</details>

:::info
參考資料:

- [gdamjan ssl-check.py](https://gist.github.com/gdamjan/55a8b9eec6cf7b771f92021d93b87b2c)
- [Git - submodule 使用教學](https://blog.kennycoder.io/2020/06/14/Git-submodule-%E4%BD%BF%E7%94%A8%E6%95%99%E5%AD%B8/)

:::
