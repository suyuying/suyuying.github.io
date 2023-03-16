---
title: little curl problem about ide跟本機terminal使用的curl版本不同問題
description: 前陣子因為需要檢查域名設定，測試過程中發現在 pycharm 運行 curl 指令，運行結果跟 iterm2 的運行結果不同，以下是 demo 指令，最後使用which curl發現兩邊curl有差別，進一步檢查發現兩者檔案 size 也有差，使用的相關套件也有差。心得：基本上連自己電腦環境都可能用髒了，之後排查類似的bug順序會先檢查彼此使用指令的版本，確認沒差太多，在開始往其他方向排查。

authors: suyuying
tags: [curl]
---

## 同 pc 的 curl 結果不同

前陣子因為需要檢查域名設定，測試過程中發現在 pycharm 運行 curl 指令，運行結果跟 iterm2 的運行結果不同，以下是 demo 指令

```
curl -XPOST 'https://www.boce.com/apiHtml/login' \
  -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36" \
  -H 'Content-Type: application/json' \
  -d '{
    "email_or_phone":"thisIsSecret",
    "password":"thisIsSecret"
  }'
```

## curl 指令基本介紹

Curl 是一種在命令列介面下使用的開放原始碼檔案傳輸工具，常用於 HTTP、HTTPS、FTP 等協定的傳輸
因為`curl`選項太多，可以用`curl --help all`看所有選項，
常用選項有以下

1. -H 帶 header
2. -A 帶 useragent
3. -i 看回應 header(可以拿來查回應 token)
4. -d 使用 post 方法要帶入 data
5. -X 使用的方法 ex. POST PUT DELETE GET
6. -c cookie 相關操作
   以下為例，登入網站並把回應 cookie 存在 cookie.txt

```
curl -c cookie.txt -XPOST 'https://www.boce.com/apiHtml/login' \
  -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36" \
  -H 'Content-Type: application/json' \
  -d '{
    "email_or_phone":"thisIsSecret",
    "password":"thisIsSecret"
  }'
```

後續可以用`curl -b cookie.txt`在請求時把 cookie 帶入到 request 中

7. -v 詳細模式
8. `-o file名稱 網址` 下載圖片使用，檔名自己命名 Write to file instead of stdout
9. `-O 網址` 下載資料使用，檔名同遠端網址檔名 Write output to a file named as the remote file
10. -L 跟隨 301 302 跳轉
11. Basic Authentication，可以攜帶 --user username:password 來通過驗證。

### step1. 問題排查 curl -v 看過程

比較後發現，ide 跟 terminal 帶的 header 跟 useragent 這些都有帶，問題不在這邊。

### step2. 檢查使用的 curl 是否有差

檢查`which crul`輸出

ide: /usr/bin/curl (curl 7.79.1 (x86_64-apple-darwin21.0) libcurl/7.79.1 (SecureTransport) LibreSSL/3.3.6 zlib/1.2.11 nghttp2/1.45.1
Release-Date: 2021-09-22)

terminal: /Users/ford/opt/anaconda3/bin/curl (curl 7.82.0 (x86_64-apple-darwin13.4.0) libcurl/7.82.0 OpenSSL/1.1.1n zlib/1.2.12 libssh2/1.10.0 nghttp2/1.46.0
Release-Date: 2022-03-05)

發現有差別，進一步檢查發現兩者檔案 size 也有差，使用的相關套件也有差。

解法： 直接指定 curl 位置,/usr/bin/curl 。

## 心得

基本上連自己電腦環境都可能用髒了，之後排查類似的 bug 順序會先檢查彼此使用指令的版本，確認沒差太多，在開始往其他方向排查。
