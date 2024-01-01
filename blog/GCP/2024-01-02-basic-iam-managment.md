---
title: GCP設定IAM相關
description: IAM setting of IAM
authors: suyuying
tags: [GCP, IAM]
---

## How Gcp IAM works

透過授予主體(principal)相關 role(對特定 resource 有操作權限)來執行操作(開 VM,調安全組規則等),而以上的 role binding 綁定關係被稱為 Policy.
在 GCP 實體如以下

- Google Account: 例如examplefordtest@gmail.com
- Service account: 給程式用的,要額外驗證
- Google group: 透過群組管理多個 google account,方便管理用,但不能驗證個人訊息.
- Google Workspace account:指組織或企業使用 Google Workspace 的帳戶。每個 Google Workspace 帳戶都與組織的域名相關聯
- Cloud Identity domain:組織 sso 用來做驗證成員身份用
- All authenticated users
- All users

跟 aws 差別在於 aws 沒有特別結合 gmail,然後 gcp 設計的管理架構是 organization-> Folder->Project->resources, 在每一個 Project 的 IAM 全限對 resource 是獨立的,在 aws 部分,則是透過 tag 或者正則表示法在 policy 那邊限制使用者對特定資源的操作.

## 參考資料

[GCP 官網 IAM 介紹](https://cloud.google.com/iam/docs/overview)
