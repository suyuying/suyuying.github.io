---
title: aws VPC and subnet design
description: 123
authors: suyuying
image: https://github.com/suyuying.png
tags: [AWS]
draft: true
---

以測試為例,在一個 VPC 底下依據產品劃分 CIDR,各產品 server 在 private,nginx 在 public,主要會通

這邊要討論公司 VPC 規劃,不同 VPC 彼此要怎麼串.
建議使用 24-bit block: 10.0.0.0 - 10.255.255.255 規劃
規劃不同的 AWS Account、用途 (Prodution, Test, Development)，各個 CIDR Space
每個 Region 的 VPC 都要先規劃好 CIDR Block
不同 Region 不同帳號 可以透過 VPC Peering ，不同 AWS Account 也可以
每個 Region 的 VPC 我會依照用途或者功能規劃數個 Subnet，主要以 Public Subnet, Private Subnet 切分.
Public Subnet
Public Subnet 通常會規劃幾個給以下用途
Infra Service: AD, Proxy,
有多個 VPC 串接後，Route Table 會多以下：

VPC Peering
VGW: 到辦公室的, 如果是使用 Dynamic (BGP), 在 Route Table 可以打開 Proganation 選項，會自動交換 Route Table
Site to Site VPN
AWS Internet-Facing: ALB / ELB, NAT Gateway / Instance
Private Subnets
Application: Web Server, DB, Batch, Storage …

- 跨 vpc 會用 vpc peering connection
-

1. https://rickhw.github.io/2017/07/07/AWS/Plan-And-Deisgn-Multiple-VPCs-in-Different-Regions/
