---
title: aws book study note
description: 記錄筆記
authors: suyuying
tags: [AWS]
---

## IAM

```jsx title="基本權限流程"
使用者-> AWS辨認身份->確認權限->授權操作
```

root 權限過大問題，透過設定不同權限帳號切割，在 aws 就是透過多個用戶群組切分權限，跟 linux 管理類似。

### IAM 組成

```
法條->身份
```

透過法條規範身份。

#### 法條(policy)組成

法條建立規則簡稱 EPCAR

Effect + Principal + Condition + Action + Resource
允許/拒絕 + 主體(IAM user,or \*) + 啥條件(ip or MFA) + 執行動作 + 對哪項資源(s3,rds...)

#### 身份組成

主要有兩類

1. 授權 policy 的 group，跟依附在 group 底下有長期憑證的 IAM user。
2. 使用短期 credential 的 IAM role，外部系統帳號（Federating Exist User. 例如: github action,google 登入)等，公司本地帳號，其他 aws 帳號，aws 資源間溝通，都可以透過連結的本 aws 帳號 IAM role 做資源操作。

::: info
外部使用者跟本地 sso 驗證過程

```
客戶端應用程式:A-> 你的Identity Provider(ldP)主機 ex google,github等-> google,github等的LDAP database 驗證 -> 回傳SAML驗證給客戶端A->A呼叫AWS STS(Security Token Service)驗證->AWS 回應暫時憑證->客戶端A透過憑證取到aws資源
```

:::
