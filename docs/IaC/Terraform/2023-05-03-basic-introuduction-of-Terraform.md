---
title: Basic introduction of Terraform
description: HashiCorp 公司打造的 IaC 工具,使用者透過可閱讀的設定檔以達到版控,重複使用,共享設定,管理本地端(on-premises resources)跟雲端(cloud resources)由低階組件,例如:計算、存儲、網路資源,到高層級組件,例如 DNS record,SAAS 功能等的管理.
authors: suyuying
image: https://github.com/suyuying.png
tags: [Terraform, IaC]
draft: true
---

## What is Terraform?

HashiCorp 公司打造的 IaC 工具,使用者透過可閱讀的設定檔以達到版控,重複使用,共享設定,管理本地端(on-premises resources)跟雲端(cloud resources)由低階組件,例如:計算、存儲、網路資源,到高層級組件,例如 DNS record,SAAS 功能等的管理.

## How does Terraform work?

Terraform 透過跟目標資源的 API 串接,目前有串接的[廠商](https://registry.terraform.io/?ajs_aid=1d4239c3-d98b-48ab-8b88-05d685bb976d&product_intent=terraform)包含 Amazon Web Services (AWS), Azure, Google Cloud Platform (GCP), Kubernetes, Helm, GitHub, Splunk, DataDog.

他可以做到 track real infrastructure,也就是去 follow 你資源最新變動,他是用[state](https://developer.hashicorp.com/terraform/language/state)這個東西去溝通的,這個後面 lab 實作會比較好懂！

Terraform 將基礎設施的各個單元(ex.compute instances,private networkds)定義為資源(resources),透過將不同廠商的不同資源定義為 modules 以作為設定檔使用.Terraform 的設定檔描述基礎架構的最終狀態,並會依據該狀態按正確順序創建或銷毀它們！

### workflow of Terraform

<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./terraform-workrflow.png").default}
      alt="terraform-workrflow.png"
    />
  </div>
</>

- Write: 建立 config,透過 config 定義多個雲端供應商和服務的資源!例如，創建一個配置，並在虛擬機器中部署應用程序，使用安全性群組和負載平衡器來設置 Virtual Private Cloud (VPC) 網路。
- Plan: 基於你設定得 config,Terraform 會對基礎架構進行創建、更新、刪除等計畫
- Apply: 如果確認執行,Terraform 會按正確順序執行操作,例如，如果更新 VPC 的屬性並改變該 VPC 中的虛擬機器數量，Terraform 將在調整虛擬機器大小之前重新創建 VPC。

### let's started

getting started 這邊主要講建立 ec2 跟介紹雲端託管平台,以及一點指令,應用上十分的基礎,看完這邊你會學到
基本的 HCL 格式,建立,改變,銷毀,透過變數帶入設定,查詢並輸出參數,

```
terraform init: 初始化Terraform工作區，下載和安裝所需的插件和提供者，並設置狀態存儲。
terraform plan: 檢查配置文件，並列出要創建、修改或刪除的資源。
terraform apply: 創建、修改或刪除Terraform配置文件中定義的資源。在創建、修改或刪除資源之前，Terraform會先執行 terraform plan。
terraform destroy: 刪除Terraform配置文件中定義的資源。
terraform state: 顯示或修改Terraform配置文件中定義的資源的狀態。
terraform validate: 驗證Terraform配置文件的語法。
terraform fmt: 格式化Terraform配置文件的佈局。
```

接著到 Tutorials 裡面,把 cli 跟 module...快速做完.

這邊目的是要寫下怎麼透過管網學會比較順,在實戰部分會參考其他資料.

1. cli 初始化配置
   他告訴你 terraform 會透過 versions.tf 裡面的 provider 定義的 terraform block 定義類似軟體套件管理(pip,npm)的區塊,這樣當 main.tf 使用的 module 寫出來後(會指定 module),使用 init 指令就會載套件,這個動作會產出 lock file,之後的操作會以這邊為主,就算有改版本號,要執行 update 才行,不然一綠用 lock-file 的,module 的東西會在.terraform 裡
2. 創建
   terraform plan -out tfplan（給機器)
   terraform show -json tfplan | jq > tfplan.json (給人),tfplan 會有機密 不能進版控.
   jq '.resource_changes[] | select( .address == "docker_image.nginx")' tfplan.json
   這邊是寫前後改變計劃
   影用
   terraform apply tfplan
   terraform.tfvars,variables.tf 的資訊會過來

3. 應用
   當您應用此配置時，Terraform 將：

鎖定項目的狀態，這樣 Terraform 的其他實例就不會嘗試修改您的狀態或將更改應用於您的資源。如果 Terraform 檢測到現有的鎖定文件 ( .terraform.tfstate.lock.info)，它將報告錯誤並退出。
制定計劃，等待您批准。或者，您可以提供使用命令創建的已保存推測計劃 terraform plan，在這種情況下，Terraform 不會提示批准。
使用您在初始化配置時安裝的提供程序執行計劃中定義的步驟。Terraform 在可能的情況下並行執行步驟，並在一種資源依賴於另一種資源時順序執行。(依賴資源先建立後,後續建立完成,剩下階段會併發執行)
使用資源當前狀態的快照更新項目的狀態文件。
解鎖狀態文件。
打印出它所做更改的報告，以及在您的配置中定義的任何輸出值。

```
provider "docker" {}

provider "random" {}

provider "time" {}

resource "docker_image" "nginx" {
  name         = "nginx:latest"
  keep_locally = true
}

resource "random_pet" "nginx" {
  length = 2
}

resource "docker_container" "nginx" {
  count = 4
  image = docker_image.nginx.latest
  name  = "nginx-${random_pet.nginx.id}-${count.index}"

  ports {
    internal = 80
    external = 8000 + count.index
  }
}

```

The docker_container.nginx resources depend on the random_pet.nginx and docker_image.nginx resources. When you apply this configuration, Terraform will create the image and random_pet resources first, followed by the containers.

terraform graph 會看資源相互關係

當 Terraform 在應用步驟中遇到錯誤時，它：

記錄錯誤並將其報告給控制台。
使用對資源的任何更改更新狀態文件。
解鎖狀態文件。
退出。

這邊有舉一個創建過程中,先拉 redis image 然後起服務的 tf 檔.為了模擬可能失敗情況,過程會 sleep 等到 image 被刪除之後再建立 container 就會報錯.重點是,terraform.tfstate 這邊會紀錄有 image,因為報錯是在之後建立 container 產生.
應用錯誤的常見原因包括：

對 Terraform 控制之外的資源的更改。
網絡或其他暫時性錯誤。
來自上游 API 的預期錯誤，例如資源名稱重複或達到資源限制。
來自上游 API 的意外錯誤，例如內部服務器錯誤。
Terraform 提供程序代碼或 Terraform 本身中的錯誤。

```
[root@72slaves learn-terraform-apply]# terraform show
The state file is empty. No resources are represented.

有執行apply會產生state file,terraform.tfstate
```

terraform.tfstate 是不需要進版控的，因為它是 Terraform 建置過程中動態生成的檔案，包含了當前基礎架構的狀態。因為此檔案會隨著基礎架構狀態的改變而不斷變動，進版控會增加檔案冲突的風險，也可能導致版本控制不當而丟失更新的基礎架構狀態。

1. terraform 指令發生啥事,HCL 語言,版本管理,terraform init -upgrade 啥時用,可以指定資源？ import reosrce 方法,如何刷新 state,基本排錯判斷流程！保護敏敢資訊？動態語言跟資源參考,常用函示 foreach,count,如何用 locals 簡化?
   terraform console 是啥,他可以幫助你什麼？
   https://developer.hashicorp.com/terraform/tutorials/state/resource-lifecycle (如何先建立後拆除,如何保護不被拆,如何 ignore 細小改變,ex.改 tag)
   https://developer.hashicorp.com/terraform/tutorials/modules
   為和藥用 module? 環境變多,設定變多,會增加自己跟別人維護難易度！ 優點: 重複,穩定性高,A Terraform module is a set of Terraform configuration files in a single directory. your configuration can use module blocks to call modules in other directories.
   https://developer.hashicorp.com/terraform/tutorials/modules/pattern-module-creation

   了解玩以上基本知識之後,就可以去看別人實戰遇到的事！之後建立 lab.

1. https://developer.hashicorp.com/terraform/tutorials/configuration-language/data-sources
   https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/availability_zones?ajs_aid=1d4239c3-d98b-48ab-8b88-05d685bb976d&product_intent=terraform&utm_source=tf_registry&utm_content=sidebar 有提供 attributes

1. https://developer.hashicorp.com/terraform/tutorials/configuration-language/count
1. https://developer.hashicorp.com/terraform/tutorials/configuration-language/for-each
   https://developer.hashicorp.com/terraform/tutorials/modules/module

   這邊要建立 QA!

### Import Terraform Configuration

[官網以這篇為主](https://developer.hashicorp.com/terraform/tutorials/cli/state-import)
把服務起在雲或地都可以透過 terraform 做`terraform import`把相關設定匯入產生 terrform.state 檔案,但首先要先產生 define an empty docker_container resource in your docker.tf file,但要實際操作該資源需要生出設定檔，當然可以直接複製貼上做出設定檔,但會有很多多餘項目,而且會遇到一些狀況,例如 terraform 匯出的 docker 設定檔,就有很多是 docker 內部管理,不能透過 terraform 做設定,所以會報錯

Terraform 導入使用 Terraform 提供商報告的基礎設施的當前狀態。它無法確定：

基礎設施的健康狀況。
基礎設施的意圖。
對不受 Terraform 控制的基礎設施所做的更改，例如 Docker 容器文件系統的狀態

將變數定義放在 variable.tf 文件中，然後在 terraform.tfvars 文件中為這些變數賦值，可以更好地組織和管理您的 Terraform 項目。 不同環境也可以用歐！

優質好文：詳細說明如何用[terraformer](https://betterprogramming.pub/terraformer-converting-infrastructure-into-reusable-terraform-code-afe543ad0b15),以及東西拉下來以後如何管理比較好

1. 為了要 reuse,要把會可能變動的值改用變數方式送進來(var)
2. 把需要重複用的模組化,這邊因為你前面把資料挖空放變數,所以很好用

```
resource "aws_s3_bucket" "s3_bucket" {
  bucket = var.bucket_name

  tags = var.tags
}

resource "aws_s3_bucket_website_configuration" "s3_bucket" {
  bucket = aws_s3_bucket.s3_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_acl" "s3_bucket" {
  bucket = aws_s3_bucket.s3_bucket.id

  acl = "public-read"
}

resource "aws_s3_bucket_policy" "s3_bucket" {
  bucket = aws_s3_bucket.s3_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource = [
          aws_s3_bucket.s3_bucket.arn,
          "${aws_s3_bucket.s3_bucket.arn}/*",
        ]
      },
    ]
  })
}
```

用 module,其實就是帶入變數,另外可以用模組實例都有一個獨特的名稱（s3_bucket_1 和 s3_bucket_2），這可以幫助你辨識每個實例所代表的資源。

```
module "s3_bucket_1" {
  source      = "./modules/s3_bucket"
  bucket_name = "my-custom-bucket-name-1"
}

module "s3_bucket_2" {
  source      = "./modules/s3_bucket"
  bucket_name = "my-custom-bucket-name-2"
}


```

變數範例

```
# String
variable "instance_type" {
  description = "The type of instance to start."
  type        = string
  default     = "t2.micro"
}

# List
variable "subnet_ids" {
  description = "A list of subnet IDs to associate with the EC2 instance"
  type        = list(string)
  default     = ["subnet-abcde012", "subnet-bcde012a", "subnet-fghi345a"]
}

# Map
variable "tags" {
  description = "A map of tags to add to all resources"
  type        = map(string)
  default     = {
    Environment = "Test"
    Owner       = "DevOps Team"
  }
}

# Number
variable "max_size" {
  description = "The maximum size of the autoscale group"
  type        = number
  default     = 5
}

# Boolean
variable "enable_public_ip" {
  description = "Enable/Disable public IP on the instance"
  type        = bool
  default     = false
}

```

https://github.com/GoogleCloudPlatform/terraformer

:::info
參考資料

1. [Terraform 官網](https://developer.hashicorp.com/terraform/intro)

:::
