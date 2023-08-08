---
title: acme.sh + Cloudflare 申請憑證
description: 講解acme使用方式,另外順便複習一下他給的資訊以及憑證組成！
image: https://github.com/suyuying.png
authors: suyuying
tags: [ssl,acme.sh]
---

## 安裝

- 安裝acme.sh

```bash
curl https://get.acme.sh | sh
```

安裝完之後會在 root 目錄下產生一個 .acme.sh 資料夾,也可以從官方git hub 把東西拉下來.

- set email

```bash
cp /root/acme.sh /sbin/
acme.sh --register-account -m uremail@gmail.com
```

- 設定cloudflare token
基本上acme支援很多家api申請,一般來說就用既有的就好.以cloudflare來說,需要產出的token是需要有能編輯dns紀錄的.
  - 先到[該連結](https://dash.cloudflare.com/profile/api-tokens)
  - 選`建立token`
  - 選`編輯區域dns`,`客戶端 IP 位址篩選`這邊可以限定可操作ip,`區域資源`可以選指定域名,注意權限需選`DNS`並授予`編輯`,`token`效期依據公司規範
  - 全部設定玩按下一步,然後複製token , ex `R4O6rqd3hvGzXXXXXXXXXX`

- 回到主機使用一下指令產出憑證,如果你是用global key要用`CF_Key`用token則用`CF_Token`,建議用token限縮權限！

```bash
export  CF_Token="R4O6rqd3hvGzXXXXXXXXXX"
acme.sh --issue --dns dns_cf -d  "*.948787.store"  -d "948787.store"
```

如果你沒有用argument指令指定憑證產生的位置,他預設會跟著你acme.sh的位置產在同一層資料夾.這邊提供指定位置的指令！

```bash
/root/.acme.sh/acme.sh --issue --dns dns_cf -d "*.YourDomainName.com" -d "YourDomainName.com" --log \
--cert-file /etc/nginx/ssl/cert.crt \              # 複製憑證到指定的目錄下面
--key-file /etc/nginx/ssl/key.key \                # 複製憑證到指定的目錄下面
--fullchain-file /etc/nginx/ssl/fullchain.crt \    # 複製憑證到指定的目錄下面
--ca-file /etc/nginx/ssl/ca.crt \                  # 複製憑證到指定的目錄下面
--reloadcmd "systemctl reload nginx"               # 如果是用 Apache 請自己修改
```

- 以我為例,就會拿到'*.948787.store_ecc'這個folder,folder結構如下

```bash
*.948787.store_ecc
├── *.948787.store.cer
├── *.948787.store.conf
├── *.948787.store.csr
├── *.948787.store.csr.conf
├── *.948787.store.key
├── ca.cer
└── fullchain.cer
```

1. `*.948787.store.cer`是放我這個域名的公鑰
2. `*.948787.store.conf`放acme.sh之後來renew的conf
3. `*.948787.store.csr`加密文件,用以向CA申請憑證的申請單
4. `*.948787.store.key`你的憑證的private key.
5. `ca.cer`打開來裡面可能會有一個以上的憑證,分別是你的中繼憑證以及根憑證或者只有根憑證,這要依據簽署單位！
6. `fullchain.cer`打開來裡面會至少有兩個以上憑證,分別是你憑證以及根憑證,或者也會有中繼憑證憑證,這要依據簽署單位！簡單來說,所有簽發過程都會放在這！

## 結論

透過acme.sh可以節省憑證申請的費用跟工時,近一步使用案例及指令可以參考以下資源！

:::info
參考資料來源:

1. [acme.sh + Cloudflare 自動更新 Let's Encrypt 服務](https://xn--wiki-k24c.freedomstu.com/books/%E7%B6%B2%E7%AB%99%E6%9E%B6%E8%A8%AD%E8%A8%98%E9%8C%84/page/acmesh-cloudflare-%E8%87%AA%E5%8B%95%E6%9B%B4%E6%96%B0-lets-encrypt-%E6%9C%8D%E5%8B%99)
2. [How to issue Let’s Encrypt wildcard certificate with acme.sh and Cloudflare DNS](https://www.cyberciti.biz/faq/issue-lets-encrypt-wildcard-certificate-with-acme-sh-and-cloudflare-dns/)

:::
