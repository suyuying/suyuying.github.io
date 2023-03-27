---
title: aws iam setting introduction
description: hh
authors: suyuying
tags: [AWS]
sidebar_position: 1
---

## what is aws IAM

[什麼是 IAM](<[https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/service_code_examples.html](https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/service_code_examples.html)>) aws 官網的資訊一般都寫得滿棒的，本文出處主要是參考官網資訊做整理，因為管理上經驗只限於自己的環境用的 s3,CI 等等，所以打算趁這個機會檢視之前設定的 iAM 有沒有問題，當然，我相信這只是過程，隨著看過的資訊跟事情越多，會得到不同或者多個答案，總之，就先從這一步開始吧！

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

## lab: Provide CI access to write to S3 resources

目標: 設定 github action 在 code 更新以後會把 build 好的資料由 build 資料夾底下東西發到 S3.

名詞定義：

STS: AWS Security Token Service API,提供信任的使用者暫時安全憑證，控制對於 AWS 資源的存取。

OIDC: OpenID Connect,Google 或 Salesforce。如果想要在 OIDC 相容的 IdP 和您的 AWS 帳戶 之間建立信任，請使用 IAM OIDC 身分提供者。

IdP: Identity Provider 身分識別資訊提供者

SAML: Security Assertion Markup Language（安全斷言標記式語言）的縮寫，是指在身分識別資訊提供者（IdP）與服務提供者（Service Provider，SP）之間傳送驗證以及授權資料的一種公開標準。

### lab 1.用 IAM role 配合 ODIC 執行 CI

這邊示範用 ODIC，讓 aws 認可的 IdP 作身份驗證並連線到 AWS 存取並更新 S3.

在建立 IAM OIDC 身分提供者之後，必須建立一個或多個 IAM 角色。角色是 AWS 中的一個身分，並不擁有自己的憑證 (與 IAM 使用者不同)。在此情況中，角色以動態指派給聯合身分使用者，而該使用者由您組織的身分提供者 (IdP) 進行驗證。

```
順序:
建立Identity Providers->建立角色->自訂信任政策->連結許可政策->複製建立的角色ARN->設定github CI/CD的secret->建立yml檔
```

#### 建立 Identity Providers

1. AWS console 查詢 IAM，左方 nav 欄位選供應商類型後, 選 OpenID Connect.
2. 供應商 URL, 輸入 https://token.actions.githubusercontent.com
3. 按"取得指紋"
4. 對象, 輸入 sts.amazonaws.com
   以上建立之後，arn:aws:iam::930209118237:oidc-provider/token.actions.githubusercontent.com
5. 把 ARN 複製準備建立 role.

#### 建立角色

```
自訂信任政策->連結許可
```

授權 聯合使用者主體，給 github repo 是 USERNAME/YOUR_REPO 的 pull or main 可以用此角色，以下記得替換成你的 repo 名稱歐！

```jsx title="信任政策(關係)"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::9302XXX18237:oidc-provider/token.actions.githubusercontent.com"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringEquals": {
                    "token.actions.githubusercontent.com:sub": [
                        "repo:USERNAME/YOUR_REPO:pull_request",
                        "repo:USERNAME/YOUR_REPO:ref:refs/heads/main"
                    ],
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}
```

因為 S3 許可設定真的太多了，這邊主要就勾選 list 跟幾個會用到的 delete/get/put object，許可設定參考[官網這篇](https://docs.github.com/zh/enterprise-server@3.8/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage#%E4%BD%BF%E7%94%A8%E8%AE%BF%E9%97%AE%E5%AF%86%E9%92%A5%E9%80%9A%E8%BF%87-amazon-s3-%E5%AD%98%E5%82%A8%E5%90%AF%E7%94%A8-github-actions)。在看許可過程中有看到 AWS cloudtrail 提供的 IAM 紀錄解析，幫你分析之前的操作並用最小權限去設定(這個情境官網有舉例: 開發時可能會把權限全開，但實際上 PROD 環境就要限制權限，可以透過 cloudtrail 去分析之前所有對 S3 操作有用到的權限，並設定之)，但因為還沒實作，所以就先這樣。

```jsx title="許可政策for S3 CI/CD"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:ListBucketMultipartUploads",
                "s3:ListMultipartUploadParts",
                "s3:AbortMultipartUpload",
                "s3:DeleteObject",
                "s3:ListBucket"
            ],
            "Resource": "*"
        }
    ]
}
```

github 設定檔，以下會執行 build，驗證 aws,把編譯後資料推到 s3。

:::info
permissions 一定要設定成 write，這樣設定是要設寫入權限才能請求 OpenID Connect JWT 令牌。沒設定就會跑出以下報錯
Error: Credentials could not be loaded, please check your action inputs: Could not load credentials from any providers
:::

```jsx title=".github/workflows/deploy.yml" {10-11}
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

permissions:
  id-token: write
jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: yarn

      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Build website
        run: yarn build
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-region: ap-northeast-3
          role-to-assume: ${{ secrets.PROD_DEPLOY_ROLE }}
          role-session-name: OIDCSession
      - name: Deploy to S3 bucket
        run: aws s3 sync ./build/ s3://yours3 --delete

```

:::info
參考資訊

1. [Enabling GitHub Actions with Amazon S3 storage](https://docs.github.com/zh/enterprise-server@3.8/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage)

2. [Secure AWS deploys from GitHub Actions with OIDC](https://www.eliasbrange.dev/posts/secure-aws-deploys-from-github-actions-with-oidc/#2-add-github-as-an-identity-provider)

:::
