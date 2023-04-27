---
title: aws EC2 and ELB setting introduction
description: 基本EC2連入管理,堡壘機跟web server設定.並使用ELB作為反向代理以web server
authors: suyuying
image: https://github.com/suyuying.png
tags: [AWS]
draft: true
---

這邊接續[AWS 網路篇](/docs/Aws/2023-04-11-aws-vpc-setting)的 lab.

目標:Region 內建立 VPC,並使用 elb 將流量導到兩個不同 AZ 中的 web server,避免因為單一 AZ 故障導致的服務中斷.日常管理透過堡壘機進入 web server 做管理.

:::tip
基本上 EC2 跟 ELB 設定相關依序:

1. [建立 KeyPair 公私鑰](#建立-vpc)
2. [建立 EC2 for web server and bastion server](#建立-subnet)
3. [設定跳板機 ssh 連線](#建立-internet-gateway)
4. [建立 target group](#建立-nat-gateway)
5. [建立 ELB](#建立-route-table)(設定是否連內網 local,連外 Igw,NAT gateway,VPN gateway,peering 等) 以及要給哪個 subnet 用,一個 route table 可以給多個 subnet 用
6. [啟 HTTP 伺服器](#設定-security-group) 對服務開啟 ip and port
7. 網路到這邊,去設定服務囉！

:::

## AWS EC2 introduction

堡壘機的建立用來管控跟紀錄使用者操作,透過本機的私有金鑰以及對應放在堡壘機的公有金鑰連線,連線到堡壘機後,再透過放在堡壘機的私鑰連線到對應在內部資源的公鑰做機台管理,另外,也可以透過 multi-hop 方式,在私鑰只放在本機的情況下,透過堡壘機跳到目標管理機器中.

本篇會將 bastion server 放在 public subnet 底下,會有對外 ip,不過其實也可以改成透過 ELB 把 ssh 連線導進 private subnet,再透過他連入 web server,差別是後者就沒有對外 ip,可以減少不小心暴露真實 ip,被攻擊者攻擊的風險.

:::info
mac,linux,windows 10 以上主要支援的金鑰檔案格式為\*.pem.

windows 9 以前是支援 ppk 格式.
:::

## AWS ELB introduction

## lab

### generating keys

如果不小心把載到本機的.pem 檔私鑰刪除,先前使用的舊金鑰就都要作廢了ＱＱ 沒有恢復方法！

#### generate keys 建立步驟

```
EC2 service -> Network & Security -> Key Pairs ->Create Key Pairs-> choose RSA , .pem(For use with OpenSSH) ->download .pem file
```

### create bastion server

```
EC2 ->instances -> launch instances ->Name(product-resource-purpose-region)ex. ford-ec2-bastion-uw1 -> app and os image(my ami or aws market ,or community AMIs) -> instance type(choose cpu ,memory) ->choose key pair for login-> choose ur vpc(public subnet), enable auto-assign public ip -> select security group(default and bastion)-> DONe
```

### use ssh to client

指令如下,可以用-i 指定私鑰檔案位置

```
ssh -i "ford.pem" ec2-user@77.77.77.77
```

也可以到~/.ssh/config 裡面修改資料(可以用 v 開啟視覺化模式,移動光標選擇欲複製的範圍。按下 y 複製選取的文字。移動光標到欲貼上的位置。按下 p 貼上複製的文字。)

```
Host            ford-bastion
HostName        77.77.77.77
Port            22
User            ec2-user
IdentityFile    ~/.ssh/ford.pem
```

以上設定好之後,第一次連線會出現以下訊息.

```
ED25519 key fingerprint is SHA256:7PkkXMF4y2j71d4HTy4qxVRWm77eBQtT73mf8Mf5MH4.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

這是因為 ssh client 第一次連線 ssh server 時,他會需要使用者去確認是不是要連這台 server,如果 yes,ssh client 端就會把 ssh server 的公鑰用 加到本地~/.ssh/known_hosts 裡面,下次連線會去該檔案驗證是否是已知的 hosts 及公鑰是否符合,如此一來就可以避免中間人攻擊等安全問題.

```jsx title="~/.ssh/known_hosts"
54.151.73.235 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBHX9fQvFIXuJg3LF8777+51qzM7FymrnPoDrYX1Ezr083gutn/5NZkkslRs8mL+nSEOwcwJQfy/s4t7RK1dYQu4=
```

### create web server

可以依據情境決定用 EC2 或者適用 serverless computing.

<details>
  <summary>serverless computing</summary>
  <div>
    <div>AWS Serverless Computing Service 是指基於事件觸發的無伺服器運算服務，可以自動化擴展並且無需管理基礎架構. AWS Lambda 可以執行寫成 Function 的任何程式碼，只要是支援的語言（如 Node.js、Python、Java、Go 等等），並且可以透過 HTTP、事件觸發、定時等等方式來觸發。如果你是要使用Docker Image,可以使用 AWS Fargate 服務來執行 Docker Image。AWS Fargate 可以將 Docker Image 作為容器部署到 AWS 上，無需管理 EC2 實例或基礎架構.</div>

  </div>
</details>

這邊設計上是規劃把 web server 放在 private subnet,使用者連入透過 elb 轉進來.

web server 也可以放在 public subnet,讓使用者直接透過 EIP 進來,不過如果遇到 ddos 攻擊,很容易 web server 就掛了,所以最好前面要有 elb 或者 cdn 這一層.最後,如果 web server 不對外,只靠 elb 之類轉進來,遇到雲服務廠商的 elb 掛掉,就會要花比較多時間把 web server 放回去對外就是.

規劃用 elb 連到內部兩台 web server,兩台 subnet 都用 private subnet

```
EC2 ->instances -> launch instances ->Name(product-resource-purpose-region)ex. ford-ec2-bastion-uw1 -> app and os image(my ami or aws market ,or community AMIs) -> instance type(choose cpu ,memory) -> key pair(login)-> choose ur vpc,and use public subnet, enable auto-assign public ip -> select security group-> DONe
```

:::tip
注意事項:我自己在設定過程中有時候按一按就會忘掉 Network Settings 那部份,所以提醒開 EC2 跟線上問題排除一樣要注意

1. 硬體狀態(cpu,記憶體,硬碟)
2. 網路狀態(防火牆,及網路互通狀況)

:::

## connect to web server

因為這邊 web server 是架在 private subnet,設計上不會開對外 port 且路由表也只知道 10.0.0.0/16 要怎麼去 ,所以要連入只能靠有 public router table 的 subnet,可以透過 Igw 到外部網路 0.0.0.0/0 為 destination, 且需要有對外 ip 的 server,也就是堡壘機(要檢查有對外 ip 跟位於 public subnet 底下).

要透過堡壘機連入有兩個方法

1. 把下載下來的私鑰放到堡壘機上,再透過 ssh 進去堡壘機,再 ssh 連到 web server
2. 透過 multi-hop 做連線

<details>
  <summary>.ssh config</summary>

```jsx title="~/.ssh/config"
Host            ford-bastion
HostName        77.77.77.77
Port            22
User            ec2-user
IdentityFile    ~/.ssh/ford.pem

Host web01
Hostname 10.0.42.235 # (網頁伺服器 1 的私有 IP)
User ec2-user
IdentityFile ~/.ssh/ford.pem
ProxyCommand ssh ford-bastion -W %h:%p

Host web02
Hostname 10.0.56.218 # (網頁伺服器 2 的私有 IP)
User ec2-user
IdentityFile ~/.ssh/ford.pem
ProxyCommand ssh ford-bastion -W %h:%p
```

</details>

連線

```
ssh web01
```

## create Load Balancer

    使用負載平衡器將有幾個優點

1. 分散 request
2. 處理 SSL 加密
3. 修復請求錯誤

不過這幾件事情其實 Nginx 都做得到,另外為避免 Nginx 暴露 IP 被打爆,前面通常也會接其他家 CDN,這樣相比之下用 Nginx+CDN 也是個不錯選項.

因此 Nginx+CDN 跟雲服務商的 load balancer 如何選擇？ 使用雲服務商提供的 Load Balancer 的可用性是較高的,且可以應付流量大小變化,個人覺得適用在搶票系統以及其他流量會瞬間暴衝的公司,如果公司流量穩定的話,使用 Nginx+CDN 會是比較好的選項.

### aws 提供的 load balancer

aws 提供的 load balancer 是由 Elastic Load Balancing(ELB)所提供,至 2023/4/22 共有 4 種 ELB,這邊提供[官方把較連結](https://aws.amazon.com/elasticloadbalancing/features/)

- Application Load Balancer(ALB)
- Network Load Balancer(NLB)
- Classic Load Balancer(CLB)
- Gateway Load Balancer(GLB)

會設定的內容:

- Availability Zone:可設定 AZ 僅限於前面 subnet 有建立的地方,且該 subnet 需要有 Igw.
- target group: 主要有

1. load balancer 設定: 例如要接受 HTTP or HTTPS
2. target group 設定: 有關把 request 分散到哪個 server 上,一個 elb 可以只頂多個 target group.

#### Application Load Balancer(ALB)

第 7 層 Load Balancer,主要轉導 protocol: HTTP, HTTPS,基本上就跟 Nginx 差不多,目前了解,差別在沒有偵測來源 IP 城市(nginx geoip)

#### Network Load Balancer(NLB)

第 4 層 Load Balancer,主要轉導 TCP, UDP, TLS

#### Classic Load Balancer(CLB)

舊款的 load balancer,目前基本上沒在用.

#### Gateway Load Balancer(GLB)

Layer 3 Gateway + Layer 4 Load Balancing,因為目前這塊接觸較少,看官網簡介對他功能主要是支援在安全性部分,如果公司有需要加入 Network Virtual Appliance(NVA)以實現進階網路功能,例如: 對流量做自己的防毒,封包檢查監控,可以透過 GLB 實現 bump-in-the-wire 技術(插入到現有的系統中，以提高通訊的完整性、機密性或可靠性,且不影響現在系統運作.).

### load balancer lab

因為是會面向網路的 web server,需要 VPC 及 security group 支援.

封包傳遞過程(到 EC2 為例):

request: Client -> Internet -> Elb -> Igw -> public subnet(查 route table) -> Target Group -> EC2

response: EC2 -> public subnet(查 route table) ->Igw -> Internet -> Client

:::tip

1. security group 預設 inbound 是所有流量 全部 全部,出去也是 All All 0.0.0.0/0,請把 default 改成只允許 VPC 內所有資訊,因為我 CIDR 是 10.0.0.0/16,所以這邊也設定 10.0.0.0/16 了(inbound 跟 outbound 都是),後來想想當初 VPC 範圍切太大了,之後會來檢討一下.
2. 要換 security group,記得要確保它在創建時是在你要的 VPC 上.(之前有一次看半天想說為啥都不能選,原來 VPC 設定到別的地方 QQ)

:::

以上面過程知道,要透過 elb 連到 private group 裡的 EC2,中間需要符合幾格條件

1. public subnet- subnet 需要有 Igw 讓封包可以進來,且 route table 有 desination 0.0.0.0/0 透過 Igw 轉導,並可以識別 local
2. security group- 機器的 security group 要可以讓外界連入,把流量從 Internet 經 ELB 到 Igw -> public subnet,再透過 public subnet 的 router table 查詢到 private subnet 中的 web server.

本章用 web server,只用 HTTP/HTTPS 協議,所以用 ALB 就行,另外 ELB 是有分 Region 的.

```
search EC2 -> Load Balancers -> create load Balancer -> Application Load Balancer ->
```

linux 啟簡單 HTTP server

```
python3 -m http.server 3000
```

發現沒有 round robin 多半這個元因 設定模式要在 tg 查詢.
Cache-Control: no-cache
