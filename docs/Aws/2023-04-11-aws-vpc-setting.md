---
title: aws vpc setting introduction
description: 官方建議大多情況都會適用 IAM role，使用 IMA role 的優點是他是使用暫時性憑證(可設定到期時間)，而 IAM 使用者用的都是長期的 aws_secret_access_key(因此官方會建議定時換，不過一般來說沒人那麼勤勞 ZZZ)。
authors: suyuying
image: https://github.com/suyuying.png
tags: [AWS]
sidebar_position: 3
---

## VPC 基本介紹

一般地端要讓網路進到 server,結構簡單的長這樣

```
internet -> Router -> Switch -> server or database
```

要建立同樣的網路運行環境在 aws 要透過 Amazon Virtual Private Cloud(VPC)

### 配置 VPC

有 subnet、Internet gateway、NAT gateway
