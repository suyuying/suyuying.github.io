---
title: The importance of IaC
description: 域名,憑證,網路及伺服器環境(防火牆、subnet 切分、路由表、gateway、CDN、security group 等等),應用程式部署,監控程式,日誌管理這些在IaC過程都會用到,IaC 精神就是把這整個過程的建置,用程式的方式建立,也就是發生了什麼事情,怎麼建立的,都是用程式去控制,如果某段掛掉或被看你不順眼的工程師砍掉,可以迅速地用程式執行備援方案把這段掛掉的補上. 以下的小節,會去討論每階段 IaC 有哪些工具可以使用.
authors: suyuying
tags: [IaC]
---

基本上我學新的工具都會先做幾件事情

1. 中文 google 搜尋看有哪些資源
2. 乖乖把官網教學文章看過一遍,以及官網的一些重要的基礎文章看完

基本上都會先看官網文件,如果官網怎麼看都不懂,會用中文的教學文件輔助,還好,terraform 的教學文件很不錯～
當基本資料學完之後,以我的資質一定還是很不熟,所以接著會做幾件事情

1. 寫篇文件把基本型態,跟常用方式整理一下(像這篇)
2. 參考別人的實戰教學
3. 實作

這邊,每件都很重要,把你懂的事情記錄下來有很多好處

- 你未來遇到事情可以複習
- 如果以前觀念錯誤可以改正
- 要找人討論事情或求教,他可以透過文章先了解你的程度

參考別人實戰經驗可以減少自己踩坑機率！

最後,學東西就是要實作,不實作或導入,那有學跟沒學一樣!

## IaC 常見管理項目

一個網路服務的提供,中間會經過許多關卡,這邊大致整理以下:

1. 軟體開發或者更新
2. 測試環境部署並測試
3. 正式環境上線
4. 監控環境

看幾來步驟很少,但實際上細節很多,而且隨著公司技術程度越高,這些過程會被切得越複雜.

軟體開發或者更新的過程,會被切割成,依據 github flow(每家邏輯不同)對各需求,建立不同分支,RD 的 code 推上來之後,要確保品質會經過測試階段,最後合 code,接下來就是把 code 部署到測試環境部署並測試,測試沒問題就會部署到正式環境.

code 的穩定性那段由 CI 管理,部署過程是 CD,而部署有許多方法,但討論 CD 如何做需要從根本『環境』開使談起,要怎麼選擇你的運算資源這個問題很常見,aws 官方提供的講解如以下

<!--truncate-->

1. [How do you select your compute solution?](https://wa.aws.amazon.com/wat.question.PERF_2.en.html)
2. [運算選項：虛擬機器、容器或是無伺服器？](https://aws.amazon.com/tw/startups/start-building/how-to-choose-compute-option/)
3. [運算資源分類](https://aws.amazon.com/products/compute/)

這邊紀錄第二項,關於運算選項：虛擬機器、容器或是無伺服器？他給了三個應用案例

1. AWS Lambda:想將專注力放在商業邏輯,且執行的任務沒有密集型運算或執行時間過長(超過 15min),又懶得管負載平衡、彈性擴展、聯網或編寫連接代碼 (例如用於使用者身分驗證、記錄日誌、擷取例外情況等) 之類的基礎設施問題,可以用 AWS Lambda,配合 S3,CloudFront,API Gateway,Amazon Cognito 和 AWS AppSync.

2. ECS or EKS: 單項任務需要密集型運算，或者執行時間超過 15 分鐘。它還可能需要跨越雲端和其他環境,可以考慮用 ECS,EKS.而 ECS 跟 EKS 怎麼選擇？如果您已經擁有 Kubernetes 的現有技能和偏好設定，則 EKS 是最好的選擇,如果不熟 EKS,就乖乖先用 ECS.

3. EC2: 巨型應用程式,願意完全存取底層基礎架構，以進行診斷和調整之類的操作,也熟悉 nginx 類,可以從 AWS Elastic Beanstalk 上大獲裨益，其將透過協助部署和佈建資源 (例如負載平衡、Auto Scaling 和運作狀態監控) 來加速在 EC2 上建立 Web 應用程式.

基本上,對於工程師來說,你可能使用 VM,container(docker),k8s, 而要學哪一種,跟如何做到該環境的 CD 的這個問題,我的想法是先全學,之後工作遇到的時候比較好回答,要進一步了解也更快.

接著,來想一下一個封包怎麼由使用者端進到你的環境！這邊用一般 TLS 網路服務有使用憑證跟買網域的正常情況.

使用者 request 域名->DNS 解析域名對應的 IP-> request 經過 CDN 到目的 ip ->防火牆允許封包通過-> Server 跟 client 做 TCP 三項交握 -> TLS 憑證驗證交握,驗證 TLS 憑證的有效性 -> web server 對封包加解密 -> 應用程式處理封包中的請求->紀錄 log -> 將回應封包加密後再通過 TLS 協議傳送回 client -> 使用者 get response

簡單整理,IaC 常會需要管理以及設定以下東西:

1. [域名](#域名)
2. [憑證](#憑證)
3. [網路及伺服器環境(防火牆,subnet 切分,路由表,gateway,CDN,security group 等等)](#網路及伺服器環境)
4. [應用程式部署](#應用程式部署方式)
5. [監控程式](#監控程式)
6. [日誌管理](#日誌管理)

而 IaC 精神就是把這整個過程的建置,用程式的方式建立,也就是發生了什麼事情,怎麼建立的,都是用程式去控制,如果某段掛掉或被看你不順眼的工程師砍掉,可以迅速地用程式執行備援方案把這段掛掉的補上. 以下的小節,會去討論每階段 IaC 有哪些工具可以使用.

### 域名

DNS 記錄管理

- Terraform：Terraform 是一個基礎設施即代碼工具，支持管理多種域名註冊商和 DNS 解析服務商，例如 AWS Route 53、Cloudflare、GoDaddy 等。

- Ansible：Ansible 是一個自動化 IT 工具，可以透過各種模組管理 DNS 記錄，支持的服務商包括 AWS Route 53、Cloudflare 等。

- OctoDNS：OctoDNS 是一個由 GitHub 開發的開源 DNS 工具，支持自動化管理多種 DNS 解析服務商，例如 AWS Route 53、Cloudflare、Dyn、Google Cloud DNS 等。

### 憑證

將憑證的管理納入到設施即代碼 (Infrastructure as Code, IaC) 中。這樣做的好處是可以讓憑證的管理自動化、可追蹤，同時也可以確保憑證的使用符合政策和安全要求

1. AWS Certificate Manager:如果你的服務有過 cloudfront,你的網站的憑證可以用 ACM 申請憑證,然後掛到 cloudfront 上面去,這樣你就可以用 https 連線,且 aws 會定期幫你 renew 憑證.
2. Certbot：Certbot 是一個由 Let's Encrypt 提供的自動化憑證管理工具，支持自動化生成和更新 TLS/SSL 憑證。可以在你的 nginx 上面使用該套件省去換憑證困擾.

### 網路及伺服器環境

1. AWS CloudFormation：AWS 提供的官方 IaC 工具，可用於創建和管理 AWS 資源，包括 VPC、子網、路由表、安全組等。

2. Terraform：是一款跨雲平台的 IaC 工具，支持多個雲端提供商和各種不同的資源類型。可以用來定義並管理 VPC、子網、路由表、安全組,開機器等。

雖然 Ansible 可以做到類似的事情,不過因為它主要用於在多台主機之間進行配置、軟體安裝,的工具,跟 Terraform 比較的話 ,Terraform 的設定文件格式比較直觀，而且它可以幫助管理資源狀態，從而實現基礎設施的可靠性和可維護性

### 應用程式部署

自動化部署應用程式到目標伺服器或容器，並確保應用程式配置和運行環境一致。主要有四大套件 Puppet、SaltStack、Chef 和 Ansible.

因為看 104 裡面最常會問的就是 ansible,所以建議先從 Ansible 看．

Ansible：

- 使用 YAML 編寫，具有高可讀性和易於學習。
- 以推送模式工作，無需安裝代理程序。
- 適用於各種規模的基礎設施，易於上手。
- 與其他工具集成良好，廣泛應用於自動化部署和持續集成/持續交付（CI/CD）。

### 監控程式

在監控 VM 上面的數據,用 Zabbix 或 Prometheus 可以達到同功能,不過在監控 Kubernetes 和 Docker，會比較推薦使用 Prometheus.

在使用 Zabbix 時,因為他圖不太好看,所以會搭配其他套軟體,ex.Grafana 可以將 zabbix 資料匯入他的介面,做圖表美化.

### 日誌管理

使用 IaC 工具，可以配置和整合日誌管理工具，如 Amazon CloudWatch Logs 或 ELK Stack（Elasticsearch、Logstash、Kibana），以收集、分析和儲存應用程式和基礎設施的日誌。

## 為什麼要學 IaC

現實問題是,不管是面試 DevOps 還是 SRE,每家公司去面試都會先問你用過的 IaC 工具,在找工作被問到不會就是扣分,有些人的第一間公司就把這些工具用遍了,有些人則不是,所以如果自認沒有比別人有更多的幸運,天份或背景,那能做的就是比別人有更多的耐心跟努力.
