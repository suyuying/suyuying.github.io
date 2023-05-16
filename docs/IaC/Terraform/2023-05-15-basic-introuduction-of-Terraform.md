---
title: Basic introduction of Terraform
description: HashiCorp 公司打造的 IaC 工具,使用者透過可閱讀的設定檔以達到版控,重複使用,共享設定,管理本地端(on-premises resources)跟雲端(cloud resources)由低階組件,例如:計算、存儲、網路資源,到高層級組件,例如 DNS record,SAAS 功能等的管理.
authors: suyuying
image: https://github.com/suyuying.png
tags: [Terraform, IaC]
---

使用 Terraform 首要注意事項

1. <highlight color="#1877F2">
   apply 之後看到 destroy 有件數,請立刻停手，並按下中斷,然後去找其他人討論
   </highlight>

## What is Terraform?

HashiCorp 公司打造的 IaC 工具,使用者透過可閱讀的設定檔以達到版控,重複使用,共享設定,管理本地端(on-premises resources)跟雲端(cloud resources)由低階組件,例如:計算、存儲、網路資源,到高層級組件,例如 DNS record,SAAS 功能等的管理.

基本上,常用的雲服務,他都可以操作,地端機器也可以透過 terraform 管理！他有自己的 config 語言(\*tf),透過 tf 檔跟各廠商的 api 做串接,也就是說原本你要創建 instance,要自己去翻 aws 的指令,現在只要知道怎麼設定 tf 檔就好,當 terraform 幫你把東西建立好,會把 response 的資訊寫在一隻 state 檔案！

### installation

[官網安裝](https://developer.hashicorp.com/terraform/downloads)cover 所有用例,以下提供我的 lab 環境的安裝方式,linux centos

```jsx
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo
sudo yum -y install terraform
```

因為我這邊 lab 都會用 aws,所以要另外設定 IAM 的相關資訊,請人幫你把你的 key 生出來吧

1. set the AWS_ACCESS_KEY_ID

```
export AWS_ACCESS_KEY_ID=
```

2. set your secret key.

```
export AWS_SECRET_ACCESS_KEY=
```

### 基本資料型態

HCL 是 terraform 公司為了提升 config 閱讀性,所開發的配置語言,檔名是\*.tf, 專門用於配置和描述基礎設施的狀態跟資源！

常用的有以下幾種型態的變數,<highlight color="#1877F2">String,List,Map(dict),Number,Boolean.</highlight>,對寫過程式的人而言,就跟 python 基本型態差不多,以下是他們在 variables.tf 中常用定義方式,為免去大家跟我踩過同樣的坑,強調幾點:

1. <highlight color="#1877F2">
   HCL語法String的值無論如何都要加雙引號
   </highlight> ,我自己在用 terraform cloud 就有勾 HCL 格式但沒有加雙引號,卡了一個小時Ｑ

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
# 如果你需要將屬性組織成一個具有特定類型和約束的實體，則可以使用對象object。如果你需要將鍵映射到值，而不需要特定的屬性約束，則可以使用映射Map。
# Map
variable "tags" {
  description = "A map of tags to add to all resources"
  type        = map(string)
  default     = {
    Environment = "Test"
    Owner       = "DevOps Team"
  }
}
# object
variable "person" {
  type = object({
    name    = string
    age     = number
    address = string
  })
  default = {
    name    = "John Doe"
    age     = 30
    address = "123 Main St"
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

### 常見基礎結構

- main.tf：主要的 Terraform 設定檔。通常包含定義基礎設施的 Terraform 資源配置。
- variables.tf：變數定義檔案。這裡定義了 Terraform 使用的變數，例如 AWS 密鑰、資源命名等。這些變數可以在其他檔案中使用，以提供更靈活的配置選項。
- outputs.tf：輸出定義檔案。這裡由使用者定義要 Terraform 輸出的值，例如 IP 位址、URL 或其他資源屬性。這些值可以供其他系統或模組使用,是選擇性的！
- terraform.tfvars：變數值檔案。在這裡可以指定變數的具體值，以供 Terraform 使用。這是一個可選的檔案，可以方便地管理變數的值，避免硬編碼敏感資訊。
- provider.tf：提供者配置檔案。這裡指定了 Terraform 使用的提供者，例如 AWS、Azure、Google Cloud 等。可以在這裡配置提供者的相關認證和設定。
- modules/：模組目錄。這個目錄用於存放自定義的 Terraform 模組。模組是可重用的程式碼塊，用於建立和管理特定類型的基礎設施資源。
- environments/：環境目錄。這個目錄通常用於區分不同環境（例如 dev、staging、prod）的 Terraform 設定。每個環境目錄中可以有自己的 main.tf、variables.tf 和其他相關檔案。
- terraform.state：這個檔案不要做版控,也不要亂 VIM,也不是由使用者產生！主要是 apply 時會產生由 terraform 套件產生！會去比對 \*.tf 跟該檔案的區別去建立預計更新規劃。

### 建立 EC2 的小 LAB

這邊的 lab 會建立 vpc,切割 subnet,並建立一台 ec2,並把建立後資訊透過 output.tf 印出,基本上就是[官網教學簡化版](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/infrastructure-as-code).

建立資料夾

```
mkdir -p learn-terraform-aws-instance
cd learn-terraform-aws-instance
```

建立以下檔案

```jsx title="provider.tf"
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}


```

provider.tf 會定義使用的 provider 來源跟版本.這邊指定了使用 hashicorp/aws 提供者的版本 ~> 4.16,代表不能使用 4.17 或任何非 4.16 版本.另外必要的 Terraform 版本為 >= 1.2.0，這意味著需要至少 1.2.0 版本的 Terraform。

```jsx title="main.tf"
provider "aws" {
  region  = "us-west-1"
}
data "aws_ami" "latest_ami" {
  most_recent = true

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  filter {
    name   = "root-device-type"
    values = ["ebs"]
  }

  owners = ["amazon"]

}

resource "aws_vpc" "example" {
  cidr_block = "10.0.0.0/16"
}
resource "aws_subnet" "example_subnet" {
  vpc_id            = aws_vpc.example.id
  availability_zone = "us-west-1a"
  cidr_block        = "10.0.0.0/24"
}


resource "aws_instance" "app_server" {
  ami           = data.aws_ami.latest_ami.id
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.example_subnet.id
  tags = {
    Name = "ExampleAppServerInstance"
  }
}
```

main.tf 會定義資源狀態,這邊值的帶入可以用變數也可以用固定寫死的,以下講解各 block 做的事！

1. provider 區塊:與特定基礎設施平台（如 AWS、Azure、GCP）進行交互的插件,首先以 provider "aws"定義 aws 資源建立區域.
2. data 區塊:查訊資料用,因為懶得上網查詢 us-west-1 的 linux 版 ami,所以使用 data 去區塊查詢最新 ami.
3. resource 區塊:定義資源

   3.1 因為 instance 建置時要選定網段,所以透過 resource "aws_vpc" "example"指定 VPC 網段

   3.2 由 vpc 中進行網段切割,這邊因為是 demo 就不分 public 跟 private 了.public 跟 private 區別在於 public 網段會有 Igw,並透過 aws 發的隨機 public ip 或自己的 Eip 去跟外界做連線,通常用於需要對外連接的資源，例如 Web 伺服器或公開可訪問的應用程式,而 private subnet 則是不會有對外 ip,要連外都是透過 NAT,而跟內部資源會互通,通常用於內部應用程式、資料庫伺服器等不需要直接對外公開的資源。

   3.3 有了網段,就可以用查詢到的 ami_id 跟 subnet 去建立 instance

terraform.tfvars 用來定義變數的值！

```jsx title="outputs.tf"
output "latest_ami_id" {
  value = data.aws_ami.latest_ami.id
}
```

outputs.tf 做的事情,要去理解它可能等你 apply 會比較清楚,基本上整個過程會許有多值是使用預設,有些則是查詢出來,有些則是你寫的變數. output 可以把值輸出.

以下的設定檔是拿來定義變數的,請等 output 出來之後,把 data 槓掉,然後改用變數跟值帶入.不過你也可以試著先帶,但在`terraform init`會報錯

```
The Terraform configuration must be valid before initialization so that
Terraform can determine which modules and providers need to be installed.
╷
│ Error: Variables not allowed
│
│   on variables.tf line 2, in variable "ami_id":
│    2:   default = data.aws_ami.latest_ami.id
│
│ Variables may not be used here.
```

#### 執行指令

在上面設定檔完成後,請依序執行

```
terraform init
```

init 功能是安裝 module,因為是首次建立 module,所以會發現資料夾多了.terraform 資料夾(放 module) 跟.terraform.lock.hcl(鎖定使用的 module 版號),如果之後有改動版本,要用`terraform init -upgrade`去更新,不然始終會用同版本！在執行 terraform init -upgrade 之前，請確保已備份您的 Terraform 配置文件和相關的狀態文件

```
terraform fmt
```

fmt : 按規定幫你重新派列格式檔格式

```
terraform validate
```

幫你驗證是否 config 有明顯錯誤,但不代表 vaildate 過了 apply 會過

```
terraform apply
```

在 apply 過程會對設定檔產生 global lock,避免冲突和競爭狀態.接著讀取已產生的 state 檔案(如無就不用比較),並讀取\*.tf 檔,比較兩者差異生成一個計劃，顯示要進行的操作和預期的變更。然後，它會要求使用者確認執行計劃。如確認,則會執行資源新增,並把結果狀態存在 terraform.state.
然後,你就會發現你建立三個資源,vpc,subnet,ec2~ 十分方便對吧～要刪除只要執行`terraform destroy`即可！

執行完之後,會長這樣

```jsx

Apply complete! Resources: 3 added, 0 changed, 0 destroyed.

Outputs:

latest_ami_id = "ami-0ee3e1e65adeef858"
```

把查到到 ami_id 做成變數,variables.tf 是拿來定義你有哪些變數,該變數的型態及預設值！

```jsx title="variables.tf"
variable "ami_id" {
  default = "ami-0ee3e1e65adeef858"
}
```

因為已經查到 ami_id,接著就到 main.tf 把 data 區塊拿掉, ami_id 改用變數帶入,也就是 var.ami_id

```jsx title="main.tf"
provider "aws" {
  region  = "us-west-1"
}

resource "aws_vpc" "example" {
  cidr_block = "10.0.0.0/16"
}
resource "aws_subnet" "example_subnet" {
  vpc_id            = aws_vpc.example.id
  availability_zone = "us-west-1a"
  cidr_block        = "10.0.0.0/24"
}


resource "aws_instance" "app_server" {
  ami           = var.ami_id
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.example_subnet.id
  tags = {
    Name = "ExampleAppServerInstance"
  }
}
```

記得 outputs.tf 也要改

```jsx title="outputs.tf"
output "latest_instance_id" {
  value = aws_instance.app_server.id
}
```

```jsx title="terraform.tfvars"
# 之後要換值,就改這邊,用ami_id = "ami-xxxxxxxxxxxxxx"放進來！
```

最後,你寫的 output 區塊,查到的值實際上會被放到 terraform.state 保存,你可以透過 key 並以下方式查詢你在 output 的值.

```
terraform output latest_instance_id
```

### 常用指令

- `terraform init`: 初始化 Terraform 工作目錄，下載所需的提供者插件並設定工作目錄,會產生.terraform 資料夾,底下會放 module 資料,另外會產生.terraform.lock.hcl 去鎖定你執行的 module 版本.

- `terraform plan`: 檢視 Terraform 的執行計劃，查看預期的變更。

```
terraform plan -out=tfplan # 執行 terraform plan 並將計畫保存到一個檔案中
terraform show -json tfplan > plan.json #使用 terraform show -json 命令將計畫檔案轉換為 JSON 格式
```

- `terraform apply`: 執行 Terraform 的執行計劃，建立或修改基礎設施。
- `terraform plan --refresh-only`- 讓你可以先檢視目前真實的資源狀態,跟你的 terraform.state 狀態檔差異,並決定是否 renew 狀態檔
- `terraform apply --refresh-only`-讓你可以先檢視目前真實的資源狀態,跟你的 terraform.state 狀態檔差異,並決定是否 renew 狀態檔
- `terraform refresh`:請少用！他會直接更新你的 state 狀態檔,風險在於你根本不知道改變了什麼,建議用 `terraform apply --refresh-only`
  :::info
  如果想看`terraform refresh`跟`terraform apply --refresh-only`詳細差異,要看[官網這篇](https://developer.hashicorp.com/terraform/tutorials/state/refresh),官網是建議用`terraform apply --refresh-only`
  :::
- `terraform destroy`: 刪除 Terraform 建立的基礎設施。
- `terraform validate`: 驗證 Terraform 配置文件的正確性。
- `terraform fmt`: 格式化 Terraform 配置文件，使其符合慣例。
- `terraform state list`: 列出 Terraform 管理的資源狀態,就是 resource 有哪些拉。
- `terraform state show`: 顯示特定資源的詳細狀態。
- `terraform import`: 將現有的基礎設施資源導入 Terraform 管理。
- `terraform output`: 顯示 Terraform 輸出的變數值。
- `terraform workspace new`: 建立新的 Terraform 工作區,workspace 主要是用來區分 "dev"、"test" 和 "prod" 的工作區.
- `terraform workspace select`: 切換到指定的 Terraform 工作區
- `terraform workspace list`: 列出所有可用的 Terraform 工作區
- `terraform workspace show` 查詢現在工作區,預設為 default

### 很重要的.tfstate

當資源被刪除後會看到空的格式

```
{
  "version": 4,
  "terraform_version": "1.4.6",
  "serial": 9,
  "lineage": "117a2911-77fe-3d31-2511-d1819cceb839",
  "outputs": {},
  "resources": [],
  "check_results": null
}
```

有以下 key

```
[
  "check_results",
  "lineage",
  "outputs",
  "resources",
  "serial",
  "terraform_version",
  "version"
]
```

apply 之後,資源產出,會把 value 填進去.其中 resources 是紀錄 .tf 檔案產生的資源,就是現階段遠端資源狀態.

#### Terraform State

State（狀態）在 Terraform 中是一個核心概念和架構,是個抽象層,代表了 Terraform 管理的基礎設施的當前狀態，包括已創建的資源、屬性值、相依關係等.terraform 支援許多不同的 State 實作(雲端各廠,地端)，不同實作的機制不同，但都能滿足上面描述的 State 概念.

主要以下幾個功用

- Mapping to the Real World: Terraform 是透過.state 裡面的 metadata 去對應現實資源.
- Metadata: 除了 mapping 必須資料外，State 也外存放 Terraform runtime 需要的資料
- Performance: 預設下,每次 apply 都會先打ＡＰＩ同步遠端架構,在小架構如果每次執行確認 state 是沒問題的,但大公司就會遇到設施太多可能超過 API 限速,所以會透過-refresh=false 直接用目前 state 檔案當作遠端狀態！
- Syncing: 在多人協作場合下,建議用[Remote state](https://developer.hashicorp.com/terraform/language/state/remote)做管理,可以做到遠端鎖定\*.tf 避免執行過程中被編輯.

基本上 backend 分成 local 跟 remote,前者是把 state 維護在地端,後者是把 state 維護在遠端,並可以對遠端產生 lock,多人協作(公司)是建議用 remote 做管理！

### local backend 管理 state

<highlight color="#1877F2">在個人專案下</highlight>,使用 Local Backend 來管理 Terraform State 就好,也就是會產生 terraform.tfstate 檔案 .換句話說用遠端版本控管不會產生這個檔案！如果多人協作下,只有單純用 local backend,將 State 存儲在本地，然後透過 git 同步版控 State ，過程會很麻煩,當你修改完 tf 檔要 commit,在執行 plan 或 apply 會隨即更新 state,這個 state 也要 commit,很容易漏掉！另外,你使用的機密資料也會寫在 state !

### remote backend 管理 state

<highlight color="#1877F2">當在多人協作或具有分佈式團隊的情況下</highlight>，建議使用遠端的 State 存儲後端，例如 Terraform Cloud、AWS S3、Azure Blob Storage 等.

這些遠端後端提供了更好的版本控制,協作和安全性，可以更好地管理 Terraform State.
每個雲廠商,都會提供管理 state 的方式,例如 aws 用 s3 保存 state,用 dynamo db 作設定檔 lock,不過因為眾多原因,這邊會用 terraform cloud 做我的 remote backend.

1. 先到 terraform cloud 建立帳號,並建立 organization(專案),workspace(就環境,會分 dev,test,prod)
2. 修改 provider.tf

```jsx title="provider.tf"
terraform {
    cloud {
    organization = "ford-org"
    workspaces {
      name = "dev"
    }
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}
```

3. 執行`terraform init`,會跑出讓你確認,這邊主要就是告訴你會轉移 state 到雲端.

```
Initializing Terraform Cloud...
Do you wish to proceed?
  As part of migrating to Terraform Cloud, Terraform can optionally copy your
  current workspace state to the configured Terraform Cloud workspace.

  Answer "yes" to copy the latest state snapshot to the configured
  Terraform Cloud workspace......
 Should Terraform migrate your existing state?

  Enter a value:
```

4. 把 terraform.tfstate 刪去(因為現在 state 會維持在雲端,不在地端)

```
rm terraform.tfstate
```

5. In terraform cloud,add your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY as Environment Variables

6. Terraform cloud 的 overview 那邊,可以設定很多模式

:::info

- Execution Mode 可以設定成 Remote or Local,Remote 就需要在 terraform cloud 那邊去執行你要做的 apply,refresh 等等,如果是 Local 那就只是在地端下指令,然後把 state 維護在雲端.

- Apply Method 也很重要,你選 auto 會變成不需要人 approve,manual 就是要有人 approve 去再確認才會執行！

:::

### 小結

用 IaC 最重要的是多人協作,如果做不到多人協作,version control,嚴謹的控管原則,那就建議不要導入！除非單純就拿來開資源.

透過以上,應該要了解

- terraform 操作第一大準則
- terraform init,plan,apply 指令會發生啥事？
- HCL 語言是啥,有哪些資料型態？
- terraform init -upgrade 啥時用,可以指定資源？
- terraform 規劃檔案的內容放置方式? 常用區塊有哪些？
- 如果有人跑去用 UI 改資訊,如何刷新 state 去 follow 新資訊?
- state 是啥？
- backend 是啥? 他有分哪兩大類? 多人合作有選哪種？

接下來,會著重在實作上,包括拉取資源,module,function 等.

:::info
參考資料

1. [Terraform 官網](https://developer.hashicorp.com/terraform/intro)
2. [terraform-30-days](https://github.com/chechiachang/terraform-30-days/blob/main/lecture/zh/01-introduction.md)
3. [Terraformer: Converting Infrastructure Into Reusable Terraform Code](https://betterprogramming.pub/terraformer-converting-infrastructure-into-reusable-terraform-code-afe543ad0b15)

:::
