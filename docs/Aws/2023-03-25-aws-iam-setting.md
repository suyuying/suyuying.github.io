---
title: aws iam setting introduction
description: 官方建議大多情況都會適用 IAM role，使用 IMA role 的優點是他是使用暫時性憑證(可設定到期時間)，而 IAM 使用者用的都是長期的 aws_secret_access_key(因此官方會建議定時換，不過一般來說沒人那麼勤勞 ZZZ)。
authors: suyuying
image: https://github.com/suyuying.png
tags: [AWS]
sidebar_position: 1
---

## what is aws IAM

[什麼是 IAM](https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/service_code_examples.html) aws 官網的資訊一般都寫得滿棒的，本文出處主要是參考官網資訊做整理，因為管理上經驗只限於自己的環境用的 s3,CI 等等，所以打算趁這個機會檢視之前設定的 iAM 有沒有問題，當然，我相信這只是過程，隨著看過的資訊跟事情越多，會得到不同或者多個答案，總之，就先從這一步開始吧！

AWS Identity and Access Management (IAM) 用途：安全地控制對 Amazon Web Services (AWS) 和帳戶資源的存取。使用 IAM 為使用者和角色等身分提供您的帳戶中資源的存取權。

<!--truncate-->

以下是 IAM 安全架構參考網路資源，主要組成如圖

<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./iam-structure.png").default}
      alt="malta_street png"
    />
    
  </div>
  <div className="text-center"><a href="https://hackmd.io/@study-group-aws-book/HkhQ2BlRP" target="_blank" >本圖參考讀書會-大話AWS雲端結構
</a></div>
</>

## typical composition

```
Policy -> IAM identities(IAM group or Role)
```

### Policy

格式: 祈使＋主詞([IAM identities](#iam-identities))＋條件＋動詞(optional)＋資源受詞 (對應：允許 Don 奧丁破關一百次時 吃 麥當勞)

對應 Aws Json(把上面舉例更換而已)

```
Effect : "允許"
Principal: "Don"
Condition:"奧丁破關一百次時"
Action: "吃"
Resource :"麥當勞"
```

正式版 Aws Json

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::myresume-for-zaxx/*"
        }
    ]
}
```

### IAM identities

共有根使用者、IAM 使用者、IAM 使用者群組、IAM 角色、暫時性憑證

#### 根使用者

Root 可以存取所有 aws 資源,且權限最高,aws 建議日常工作事項都用一般使用者,除非是以下工作:

- 管理一般使用者權限
- 停用 AWS 帳戶
- 帳戶花費管理

更多資料可以看[官網這篇](https://docs.aws.amazon.com/accounts/latest/reference/root-user-tasks.html)

#### IAM 使用者

具備單一人員或應用程式的特定許可，AWS 建議人員金鑰長期憑證者要定期更換，而相比長期憑證更建議用暫時性憑證.

#### IAM 使用者群組

使用者集合的身份，透過 IAM 使用者群組管理 IAM 使用者

#### IAM 角色

它類似 IAM 使用者，但不與特定的人員相關聯。角色的目的是讓需要它的任何人可代入，理解上就像是個具有權限的有時效性 token，可以給 code 或使用者或資源使用。

#### 暫時性憑證

[最佳實務](https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/best-practices.html)它類似 IAM 使用者，但不與特定的人員相關聯

#### 何時使用 IAM Identity Center 使用者？

[官方回覆](https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/id.html#id_temp-creds)

看起來是可以透過單一登入，去取得在所有帳戶中所授的權限

#### 何時建立 IAM 使用者 (而不是角色)

建議您僅將 IAM 使用者用於聯合身分使用者不支援的使用案例。聯合身分使用者(federating exist user)是透過外部資源去連 AWS 上時，透過 IAM role 分配資源取得權限，配合跟 ldP(external identity provider)ex.FB,google 驗證，讓使用者可以取的短期憑證。

#### 何時建立 IAM 角色 (而不是使用者)

程式端向 aws 資源請求、aws 服務間串接、以及公司的 single sign on(系統有採用 SAML 2.0 或建立並使用自訂代理伺服器，將使用者身分從企業轉換為提供暫時 AWS 安全憑證的 IAM 角色)

### Brief summary

官方建議大多情況都會適用 IAM role，使用 IMA role 的優點是他是使用暫時性憑證(可設定到期時間)，而 IAM 使用者用的都是長期的 aws_secret_access_key(因此官方會建議定時換，不過一般來說沒人那麼勤勞 ZZZ)。

官網提工暫時性憑證的優點

1. 不必隨應用程式散發或內嵌長期 AWS 安全憑證:舉例來說，公司有個腳本拿來是拿來更新前端資源的，如果使用 IAM 使用者，那他的私 key 就會跟著這隻腳本到處跑，但用 role 的話不用。

2. 可以提供 AWS 資源存取給使用者，而不必為其定義 AWS 身分。暫時憑證是[角色和聯合身分](https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/id_roles.html)的基礎。

3. 暫時性安全憑證的存留期有限，因此當不再需要時，您不需要輪換它們或明確予以撤銷

不過每個公司都有各自文化。習慣之後再去看自己公司那套的優缺點～
