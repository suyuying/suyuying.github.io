---
title: s3 set iam permissions for Github Actions to achieve CIBuild an AWS s3 static website
description: 建立aws靜態網站接上cloudfront，最後設定 github action 在 code 更新以後會把 build 好的資料由 build 資料夾底下東西發到 S3.
authors: suyuying
image: https://github.com/suyuying.png
tags: [AWS, github action, CICD]
---

## S3 靜態網站設定

:::info
如果有打算限制能近來的域名，就請不要用靜態網站，就用預設的 RestApi 模式，接 cloudfront 透過 header 去限定。
:::
[官網教學很詳細！](https://docs.aws.amazon.com/zh_tw/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)
要在 Amazon S3 上設定靜態網站，如果是使用 UI 的話，請按照以下步驟進行操作：

1. UI: 建立新的 S3 Bucket 或選擇一個現有的 Bucket。(Cli:`aws s3 mb s3://me-profile --profile ford --region us-west-1` 在 us-west-1 建立 s3 bucket,bucket 名稱是 me-profile,使用的 user 是 ford)
2. UI:在 Bucket 屬性中啟用靜態網站主機。
3. UI:指定要使用的索引文件(index.html)和錯誤文件。(Cli:`aws s3 website s3://bucket-name --index-document index.html --error-document error.html`)
4. UI :將必要的文件添加到 Bucket 中。(可以用 也可以用 cli
   Cli:`aws s3 sync ./dist/ s3://fordserver-front --delete --profile ford`)
5. UI :配置 Bucket 策略以允許公開訪問文件，預設會全擋。
6. UI :新增儲存貯體政策，將儲存貯體內容設為可供大眾讀取，把這個 json 複製貼上

```jsx {11-12}
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::Bucket-Name/*"
            ]
        }
    ]
}
```

Resource 更新為您的儲存貯體名稱!

<!--truncate-->

7. (可選)如果要配置自己買的域名， 把 cname 設置以指向 S3 網站端點。

按照這些步驟，您可以使用 Amazon S3 建立簡單且具成本效益的靜態網站。

## 接 clourfront

建立一個靜態網站之後，去建立 cloudfront，把流量導到 s3。

以下是建立 CloudFront 分發的步驟：

1. 登入 AWS Management Console 並前往 CloudFront 控制台頁面。
2. 點擊「建立 distribution」按鈕。
3. 在「建立 distribution」頁面中，您可以從下拉式清單選擇「Web」或「RTMP」分發的類型。
4. 對於 Web 分發，在 Origin 欄位中，從下拉式清單選擇您的 S3 桶的 REST API 端點或輸入您的 S3 桶的網站端點。[網站端點和 REST API 端點之間的主要差異](https://docs.aws.amazon.com/zh_tw/AmazonS3/latest/userguide/WebsiteEndpoints.html#WebsiteRestEndpointDiff)
5. 在預設快取行為中，為 Viewer 協議原則選擇 HTTP 和 HTTPS 或重新導向 HTTP 到 HTTPS。
   注意：選擇僅使用 HTTPS 會封鎖所有 HTTP 請求。
6. 如果您沒有使用 CloudFront 的替代域名 (CNAME)，則選擇「建立分發」以完成流程。如果您正在使用 CNAME，則在創建分發之前請按照以下額外步驟進行操作：
   - 對於替代域名 (CNAME)，請選擇「新增項目」，然後輸入您的替代域名。
   - 對於自訂 SSL 憑證，從下拉式清單中選擇涵蓋您的 CNAME 的自訂 SSL 憑證，以將其指派給分發。(這裡可以用 aws 的自簽憑證會很方便!)

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

另外因為需要執行 cloudfront purge,也請給該 Role: CloudFrontFullAccess 的權限.

github 設定檔，以下會執行 build，驗證 aws,把編譯後資料推到 s3,並 purge cloudfront。

:::info
permissions 一定要設定成 write，這樣設定是要設寫入權限才能請求 OpenID Connect JWT 令牌。沒設定就會跑出以下報錯
Error: Credentials could not be loaded, please check your action inputs: Could not load credentials from any providers
:::

```jsx title=".github/workflows/deploy.yml" {10-11}
name: Deploy to S3 and purge cloudfront

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
      - name: Purge cloudfront
        run: aws cloudfront create-invalidation --distribution-id yourCloudFrontID(ex.E2HL0T0J5GSDCG) --paths /*

```

:::info
參考資訊

1. [Enabling GitHub Actions with Amazon S3 storage](https://docs.github.com/zh/enterprise-server@3.8/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage)

2. [Secure AWS deploys from GitHub Actions with OIDC](https://www.eliasbrange.dev/posts/secure-aws-deploys-from-github-actions-with-oidc/#2-add-github-as-an-identity-provider)

:::
