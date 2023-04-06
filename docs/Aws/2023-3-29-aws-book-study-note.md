---
title: aws book study note
description: 記錄筆記
authors: suyuying
tags: [AWS]
---

## 名詞解釋

IAAS: 雲端業者提供硬體設施、網路。不包含作業系統(Linux or Windows),中介軟體(MySql,Pika)，以及應用程式。

PAAS: 雲端業者提供硬體設施、網路、作業系統、中介軟體，因次伺服器故障跟備份資料庫等工作可以由雲端業者負責。

SAAS: 雲端業者提供硬體設施、網路、作業系統、中介軟體、應用程式。Gmail 就屬這類型.

Region: aws 基礎設施的一個單位，每個區域都是獨立數據中心群集，由多個 Availability Zone 組成，所以像新加坡區，aws 目前就 3 個可用區域。

Availability Zone: 具有獨立的電源、網絡和冷卻系統，以及與其他可用區域之間高帶寬、低延遲的網絡連接。每個可用區域都是一個獨立的數據中心群集，具有高度的冗餘性和可靠性，並且可以通過低延遲的連接實現可用區域之間的容錯和負載平衡。

VPC(Virtual Private Cloud): VPC 只能限在單個 region 內，但可以跨同一格 region 內的多個 Availability Zone

<!--truncate-->

Network Access Control List(NACL):子網路層級的安全性管理，主要用於管理 OSI 模型中的 3、4 層，也就是可以管理連入 IP 跟 Port 號限制以及協議限制。舉例: 可以只讓自己家 ip 66.66.66.66 進來，允許所有 port，但禁止 Ping(ICMP 協議)。

Security Group: EC2 實例層級的安全性管理，您可以定義允許通過群組的網路流量，例如 TCP 或 UDP 連線。當使用安全群組和 NACL 時，安全群組的流量規則優先於 NACL 的規則。

IGW: 互聯網閘道器，主要用於外網跟內網的訊號路由。

Metadata: 執行個體中繼資料，可以用來管理執行個體，包含主機名稱跟 IP 等

Placement Group: 一群 EC2 的啟動策略，分為叢集、分區、分散

Serverless 應用程式: 開發人員開發程式後，都會遇到要開多少規格的問題，在 Serverless 解決方案下，雲端廠商提供設定自動擴展或者提高性能等服務，適合突發性高附載的服務，如:售票系統.Serverless 背後使用的是 lambda 服務。

機器學習: 需要高性能電腦進行資料訓練，建模，並部署應用程式.

IoT:利用感測器等小型設備建立物聯網系統

Data Lake House: 為滿足各種資料分析需求的分析選擇.

AWS Resources: 指用 AWS 各服務所建立而成的實體(instance)

## IAM

IAM 全名是「Identity and Access Management」，為 AWS 身份和訪問管理服務。

透過法條規範身份。

```
法條->身份
```

### 法條(policy)

法條建立規則簡稱 EPCAR

Effect + Principal + Condition + Action + Resource

允許/拒絕 + 主體(IAM user,or \* ...) + 啥條件(ip or MFA...) + 執行動作 + 對哪項資源(s3,rds...)

### 身份

主要有兩類

1. 授權 policy 的 group，依附在 group 底下有長期憑證的 IAM user。
2. 使用短期 credential 的 IAM role，外部系統帳號（Federating Exist User. 例如: github action,google 登入)等，公司本地帳號，其他 aws 帳號，aws 資源間溝通，都可以透過連結的本 aws 帳號 IAM role 做資源操作。

:::info
外部使用者跟本地 sso 驗證過程

```
客戶端應用程式:A-> 你的Identity Provider(ldP)主機 ex google,github等-> google,github等的LDAP database 驗證 -> 回傳SAML驗證給客戶端A->A呼叫AWS STS(Security Token Service)驗證->AWS 回應暫時憑證->客戶端A透過憑證取到aws資源
```

:::

### IAM 權限確認流程

```jsx title="基本aws確認權限流程"
使用者-> AWS辨認身份->確認權限->授權操作
```

### IAM 權限管理

root 權限過大問題，透過設定不同權限帳號切割，在 aws 就是透過多個用戶群組切分權限，跟 linux 管理類似。

## VPC

### aws 網路環境組成

```
封包->IGW->Route Table ->NACL->Public Subnet->Instance
```

### VPC 服務對接方式

1. NAT Gateway 讓私有網路連外
2. 以內網方式操作資源-VPC Endpoint
3. VPC 串接 VPC
4. VPC 串本地-VPN Connection

## EC2

相關服務順序跟地端對照:

軟體市場-> 作業系統->硬體規格->軟體安裝，程式部署->硬碟擴充->標記資產->建立防火牆-> 連線

AMI Marketplace->AMI->Instance->Userdata->EBS->Tag->Security Group->KeyPair

用 AMI 建立主機，用 Userdata 部署，EBS 擴充硬碟，Tag 方便管理機器，可以用來看成本跟權限，Security Group 限制連入 IP 跟 prot，KeyPair 連入機器。

Amazon Machine Image:AMI,虛擬映像檔，屬於 Region 級別，不能跨 Region，也就是香港區不能拿日本的 AMI 建立機器。

所以如果要跨區使用 AMI，就跟 Immutable 原則有關，必須先把舊的 AMI 複製到其他區，並在其他 Region 起機器，也就是 AMI->snapshot->複製 AMI->起機器。

### instance 分類

以 t2.micro 為例，t 應用場景，2 虛擬化技術版本，micro 機器規格

## 硬碟

兩大方案分為 1. EBS Volume 2.Instance Store

### EBS Volume

EBS Volume 跟 EC2 是不同伺服器，機器跟硬碟兩者透過網路相連，
EBS Volume 在機器關機後資料不會消失。 所以要長期保存的資料要用 EBS 保存。

### Instance Store

Instance Store 跟 EC2 在同一台 server 上。
Instance Store 關機後資料會消失。重新開機資料不會消失。所以只適合放緩衝跟暫時性資料。

## Snapshot

AWS 快照服務有多種,以下列出常用的:

1. EBS 快照: 對 EBS 硬碟的快照
2. RDS 快照: RDS 資料庫快照
3. EC2 映像: 對機器當下狀態的快照，要注意當會生出一個 EBS 快照跟一個 AMIs

## Elastic Network Interface 網路卡

EC2 透過 Elastic Network Interface(ENI)連接網路，要固定使用的 IP 要綁定 Elastic IP,綁定後開關機不會改變對外 IP.

## SSH KeyPair

透過把某台 server 的公鑰放入 EC2，用 ssh 方式進入 EC2

## S3

### 核心組成

Bucket and Object,你的資料就是 Object，會被放在 Bucket 內保存，每個物件都有 https 連結，但沒特別設定權限會遇到 Access denied.

### 存取權限控管

權限控管管理機制主要有三種:

1. Block Public Access:這個算是防呆機制，就很簡單的直接決定檔案是否公開
2. Access Control List: 分為對 Bucket 跟 Object 的 ACL,可以設定讀取，寫入，列舉，權限擁有者等。
3. Bucket Policy: 要做最精細設定要透過 Bucket Policy 去用 json 格式做規範，可以規範的東西有存取權限(IAM user or Role)，路徑，條件(日期 ip bucket 名稱)

### 存取監控紀錄

對 Bucket 跟 Object 都有監控紀錄

### Access Point Policy

Access Point 可以匡列 Bucket 中一系列 object，針對這些 Object 設計新的一套 Access Point Policy.

## RDS

Amazon Relational Database Service (RDS)是一項托管關聯式數據庫服務.
在使用 RDS 時，會自動開機器來完成任務，有開機器就要探討是在哪個網段開機器，因此要先設定 subnet group,RDS 會在 group 內挑選合適的 subnet 放置機器

### 與自建資料庫差別

在 EC2 建立資料庫需要管理 VM ，且可以連入機器做參數調整.

而 RDS 主要協助

1. 資料備援: 資料遺失可以有效回復
2. 系統高可用性: 故障轉移和擴展等功能

### RDS 性能調校

AWS 提供 Parameter Group 功能，讓資料庫所使用的參數能匯入,硬體部分可以將 EBS Volume 改成 Provision iops 類型的 EBS Volume.

### RDS 高可用與備援

#### 備援

可以對資料庫(一般用主庫)做 snapshot,又分為自己手動備份跟 aws 定期備份，差別在未來刪除資料庫時，aws 定期備份會被刪到剩最終備份，而用戶手動備份不會被 AWS 刪除。

另外，儲存體磁碟區快照在單一 AZ 中建立會導致 I/O 短暫停用！異地同步備份 I/O 不會受此 I/O 影響，因為是在待命狀態下進行備份。

#### 高可用

為紓緩主資料庫流量，RDS 提供唯獨副本服務，把主庫資料異步複製到另外一個 AZ 的 ReadOnly DB(Read Replica) 單純用來查詢。

:::info
Read Replica 跟 slave DB 相似，差別在前者可以做到跨 Region ，且可以轉成 standalone DB instance.

:::

另外，為避免主庫失效，也可以使用 Multi-AZ 服務啟用備用資料庫(Standby)，平時主庫資料會同步複製到 standby，唯獨副本跟快照備份工作都交給 Standby，當主庫不小心掛了就會切換用備用資料庫。
