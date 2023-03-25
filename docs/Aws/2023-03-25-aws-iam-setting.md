---
title: aws iam setting introduction
description: hh
authors: suyuying
tags: [AWS]
sidebar_position: 1
---

## 什麼是 IAM

[什麼是 IAM](<[https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/service_code_examples.html](https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/service_code_examples.html)>) aws 官網的資訊一般都寫得滿棒的，本文出處主要是參考官網資訊做整理，因為管理上經驗只限於自己的環境用的 s3,CI 等等，所以打算趁這個機會檢視之前設定的 iAM 有沒有問題，當然，我相信這只是過程，隨著看過的資訊跟事情越多，會得到不同或者多個答案，總之，就先從這一步開始吧！

AWS Identity and Access Management (IAM) 讓您能夠安全地控制對 Amazon Web Services (AWS) 和帳戶資源的存取。使用 IAM 為使用者和角色等身分提供您的帳戶中資源的存取權。

另外，在查資料過程中，有看到 IAM Identity Center 這個服務，可以管理組織內跨 AWS accounts 的資訊，因為在某些公司可能會因為各種因素會有多帳號，可以考慮配合 AWS Organization,aws 官方 建議所有人類使用者使用 IAM Identity Center 來存取 AWS 資源

### 最低權限許可

使用 最低權限許可 是 IAM 的最佳實務建議。最低權限許可的概念是指僅授與使用者執行任務所需的許可。

### IAM 身份

共有根使用者、IAM 使用者、IAM 使用者群組、IAM 角色、暫時性憑證

#### 根使用者

#### IAM 使用者

具備單一人員或應用程式的特定許可，AWS 建議人員金鑰長期憑證者要定期更換，而相比長期憑證更建議用暫時性憑證

#### IAM 使用者群組

使用者集合的身份，透過 IAM 使用者群組管理 IAM 使用者

#### IAM 角色

它類似 IAM 使用者，但不與特定的人員相關聯，理解上就像是個具有權限的 token，可以給 code 或使用者或資源使用。

#### 暫時性憑證

[最佳實務](https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/best-practices.html)它類似 IAM 使用者，但不與特定的人員相關聯

### 何時使用 IAM Identity Center 使用者？

[官方回覆](https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/id.html#id_temp-creds)

看起來是可以透過單一登入，去取得在所有帳戶中所授的權限

### 何時建立 IAM 使用者 (而不是角色)

建議您僅將 IAM 使用者用於聯合身分使用者不支援的使用案例。聯合身分使用者(federating exist user)是透過外部資源去連 AWS 上時，透過 IAM role 分配資源取得權限，配合跟 ldP(external identity provider)ex.FB,google 驗證，讓使用者可以取的短期憑證。

### 何時建立 IAM 角色 (而不是使用者)

程式端向 aws 資源請求、aws 服務間串接、以及公司的 single sign on(系統有採用 SAML 2.0 或建立並使用自訂代理伺服器，將使用者身分從企業轉換為提供暫時 AWS 安全憑證的 IAM 角色)

### 小結

官方建議情況大多都會適用 IAM role，實際上依情況不同去設定，每個公司都有各自文化

## lab 設定給 CI 使用 S3 資源
