---
title: aws s3 basic introduction and attach iam role to operate s3
description: 簡單整理，S3類型一般使用 standard,如果可能是幾小時拿一次用IA系列,不擔心東西掛掉就放在one-zone省錢,如果是長期封存資料就考慮用Glacier系列.
authors: suyuying
image: https://github.com/suyuying.png
tags: [AWS, S3]
sidebar_position: 5
---

## basic introduction

S3(simple storage service)負責檔案儲存跟管理,你可以當他是個 NAS,只是不用管理作業系統,跟監控他的機器狀況.
相比於 EBS(Elastic Block Store)需要跟 EC2 一起使用,S3 只需要做到資料管理部分！

### 儲存形式

- standard storage:默認儲存類型,提供高持久性、高可用性和低延遲的存儲,適合各種使用案例
- intelligent-tiering:根據數據的訪問模式自動將數據分類到適合的儲存層級，以實現成本效益和性能優化
- Glacier:適用於需要長期保存的數據，但對訪問速度要求不高
- Standard-IA:IA 適用於不常存取但需要在必要時進行快速存取的資料,非常適合長期儲存、備份和做為災難復原檔案的資料
- one Zone IA: IA 適用於不常存取但需要在必要時進行快速存取的資料。它會將資料存放到單一 AZ 中，而且成本較 S3 標準 – IA 減少 20%。
- Glacier-deep-Archieve:這是一種封存儲存類別，可提供最低成本的儲存和毫秒級擷取。針對不需要立即存取但需要靈活且免費擷取大型資料集的封存資料，例如備份或災難復原使用案例,資料擷取時間為 12-48 小時。
- S3 Glacier Instant Retrieval:封存儲存類別，可為很少存取且需要在幾毫秒內擷取的長期資料提供最低成本的儲存。當您的資料每季度存取一次時，請使用 S3 Glacier Instant Retrieval

簡單整理，S3 選擇一般使用就用 standard,如果可能是幾小時拿一次用 IA 系列,不擔心東西資源掛掉就放在 one-zone 省錢,如果是長期封存資料就考慮用 Glacier 系列.

### S3 vs VPC

因為 S3 都是在 VPC 外建立,存取 S3 有兩種方式

- 從網際網路存取 S3(透過 url 拿東西,這邊就不介紹)
- 從 VPC 當中伺服器存取 S3 檔案

### 從 VPC 當中伺服器存取 S3 檔案

透過建立 IAM role,並將適當的 IAM policy 賦給該 IAM Role,並經該 role 指派給 ec2,就可以讓 EC2 透過暫時性的安全憑證向 S3 或其他 AWS 資源做請求！

#### EC2 透過 VPC endpoint 連結 S3

[官網](https://docs.aws.amazon.com/zh_tw/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) ,主要優勢在於可以使用 VPC Endpoint 將 EC2 實例連接到 S3 資源，使其可以在 VPC 內部訪問 S3 而無需通過 Internet。這樣可以提高安全性並降低流量的出口。

#### 如何設定 role 給 ec2

- 打開 IAM 控制台並選擇「角色」。
- 點擊「創建角色」。
- 在選擇您的使用案例下，選擇「EC2」。
- 在「權限」頁面上，選擇您希望為 EC2 實例提供的權限，或創建自定義的 IAM 策略來指定您需要的權限。
- 在「標籤」頁面上，根據需要添加標籤，然後點擊「下一步」。
- 在「回顧」頁面上，為角色指定一個名稱，並選擇「創建角色」。
  現在，您已經創建了一個 IAM 角色，接下來您需要將該角色附加到 EC2 實例上：

打開 EC2 控制台並選擇您的實例：

- Actions ->Security ->modify iam role
- 選擇您創建的 IAM 角色，然後點擊「保存」。
- 基本上,等 s3 bucket 創建好以後就大功告成拉,實務上可以把開機要執行的腳本,透過拉取 s3 資源並使用！

### S3 設定

主要有三關會設定,這邊先不討論設定 CORS 那些設定

1. 公開存取設定: 這個其實是單純防呆設定,預設是完全禁止公開,所以通常是網頁資源就需要打開,單純給ＥＣ 2 拿東西可以不用公開
2. ACL of S3: 對各類使用者給予 List or Write or Read 等權限,不過預設是會有 bucket owner enforced 屬性,讓對 bucket 的存取單純由 Bucket policy 規範
3. Bucket Policy: 這個就是類似 IAM policy 制定規則方式,透過 EPCAR 去規範資源存取.

#### 建立 bucket

1. 登入 AWS 管理控制台，並打開 S3 服務。

2. 在 S3 控制台的首頁上，點擊「創建存儲桶」。

3. 在「名稱和區域設置」頁面上，為存儲桶指定一個唯一的名稱。請注意，存儲桶的名稱在全球範圍內必須是唯一的，且符合命名規則。您還可以選擇存儲桶所在的區域,在「設置選項」部分，您可以選擇適當的選項，如版本控制、加密和存儲桶日誌等。根據您的需求選擇相應的設置。

4. 在「權限設置」部分，您可以為存儲桶指定存取權限。根據需求，可以選擇公共存取設置、存取控制清單（ACL）或存取策略。主要理解為啥會有三個要設定,存取策略是啥～

5. 確認您的設置並點擊「創建存儲桶」。如果要改存檔類型,要點到指定文件-> actions -> Edit storage class ->看到一堆類型囉！
