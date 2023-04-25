---
title: aws internet setting introduction
description: 基本上網路部分會圍繞著VPC 設定,依序:建立 VPC ->建立 public subnet & private subnet(需連結 VPC) ->建立 Internet gateway(需連結 VPC) ->建立 NAT gateway(需連結 subnet,配置 eip) -> 建立 route table(設定是否連內網 local,連外 Igw,NAT gateway,VPN gateway,peering 等) 以及要給哪個 subnet 用,一個 route table 可以給多個 subnet 用 -> 設定 Security group 對服務開啟 ip and port -> 網路到這邊,去設定服務囉！
authors: suyuying
image: https://github.com/suyuying.png
tags: [AWS]
draft: true
---

:::tip
基本上 Internet 設定相關依序:

1. [建立 VPC](#建立-vpc)
2. [建立 public subnet & private subnet(需連結 VPC)](#建立-subnet)
3. [建立 Internet gateway(需連結 VPC)](#建立-internet-gateway)
4. [(optional)建立 NAT gateway](#建立-nat-gateway)(optional,需連結 subnet,配置 eip,前提是 private subnet 需要連外時)
5. [建立 route table](#建立-route-table)(設定是否連內網 local,連外 Igw,NAT gateway,VPN gateway,peering 等) 以及要給哪個 subnet 用,一個 route table 可以給多個 subnet 用
6. [設定 Security group](#設定-security-group) 對服務開啟 ip and port
7. 網路到這邊,去設定服務囉！

:::

## aws internet setting introduction

一般地端要讓網路進到 server,結構簡單的長這樣

```
internet -> Router -> Switch -> server
```

要建立同樣的網路運行環境,在 aws 要透過 Amazon Virtual Private Cloud(VPC),而資源的建立會圍繞 VPC 進行.

### VPC

VPC 是 AWS 提供虛擬化網路環境的服務,資源的建立會圍繞 VPC 進行.

VPC 設定注意事項:

- 多個 VPC 的 CIDR 要確保不重疊:VPC 在 aws 雲上扮演一個網段的角色,所以在創建 VPC 的過程中，需要為 VPC 和子網選擇適當的 IP 範圍.

- VPC 是綁 region 的: 不同地區的 application 需要綁各自的 VPC.

- VPC 有 AZ 概念: 設計 VPC 和子網時，請考慮可用區域和容錯能力,在兩個不同 AZ 建立同樣服務,即使其中一個 AZ 的 APP 故障,也可以靠另外一個 AZ 的 APP 提供服務.

- VPC 間 CIDR 重疊: 如果 CIDR 部分有重疊可能會造成 peering connection 設定上報錯.

### subnet

Classless Inter-Domain Routing(CIDR) 將 IP 地址劃分為網絡前綴和主機地址,可以表示一定範圍的 IP(subnet)或者指定特定 IP.

可以將 VPC CIDR 的 IP 地址空間劃分為多個 subnet，每個 subnet 為包含一段連續的 IP 地址的邏輯網絡分區.

私有 IP 範圍級別有三種,從中挑選即可,不過要注意的是 aws 有限制無論哪種級別,一個 VPC 最多就只能有 65536(2 的 16 次方)個 ip.

- Class A: 10.0.0.0/8,包含 10.0.0.0~10.255.255.255
- Class B: 172.16.0.0/12,包含 172.16.0.0 ~ 172.31.255.255
- Class C:192.168.0.0/16,包含 192.168.0.0 ~ 192.168.255.255

因此結合 AWS 限制還有 CIDR 切分,在 aws 配置 VPC 時,用 Class A 每個子網最多有 65536 個 ip,可以切分出最多 256 個 subnet.

如果有一個 192.168.0.0/16 的 B 級網段,需要將一個 IP 地址段分成 8 個子網，可以使用子網掩碼 /19（即 255.255.255.192），這個子網掩碼可以將一個 IP 地址段分成 2^3=8 個子網，每個子網可以分配 2^13=8192 個 IP,但須減去保留網路地址跟廣播地址所以共 8190 個主機 IP 地址（因為要保留網路地址和廣播地址,注意如果在 aws 要保留 5 個,也就是 8187 個 ip 可使用. [詳細計算可以看這篇](https://snoopy30485.github.io/2020/04/10/%E6%88%91%E7%9A%84%E7%B6%B2%E8%B7%AF%E7%AD%86%E8%A8%98%E5%A4%96%E5%82%B3-%E5%AD%90%E7%B6%B2%E8%B7%AF%E5%88%87%E5%89%B2%E5%BF%AB%E9%80%9F%E8%A8%88%E7%AE%97%E6%B3%95/)。

#### public subnet & private subnet

elb 這類對外的服務會需要連結在 public subnet（至少 route table 要有 Igw）, database server 這類不需要對外的就會是在 private subnet(route table 不會有 Igw,頂多透過 NAT gateway 連外).

而 Nginx 這類 web server,則依據需求可以放在 public subnet 或者 private subnet,如果前面有用 elb 配合 target group 轉封包進來,放在 private subnet 也可以,但如果不打算用 elb 的話,就需要配置 eip 然後放在 public subnet.

### Internet gateway(IGW)

網際網路閘道(IGW) 主要功能是讓服務能跟 internet 通訊,外部網路封包會透過 IGW 跟 VPC 內的資源溝通,這邊 IGW 就像是一台連外的 router,但是外部服務要透過 IGW 進來要找得到機器,機器必需有對外 IP 作為在 internet 上的路由溝通,這個對外 IP 可以選自己綁定的 eip 或則是 aws 隨機派發的外部 ip(每次開機都會變).

但問題來了,要透過 IGW 上網,機器就必須要有對外 ip,內部 server 開啟對外 ip 然後臨時開通連接 IGW,這個過程複雜又不合當初區分內外網設定,因此是 Network Address Translation(NAT)上場的時候了!

### Network Address Translation(NAT) gateway

NAT 需要有 eip 綁定,他做的事就是把內部出來的封包,記錄他們的 ip 跟 port 號之後,轉成 eip 跟隨機 port,然後再對外網服務連線,得到 response 後,再依據紀錄表上的資訊做 ip 跟 port 轉換.

這樣做可以使私有子網內的內部資源訪問公網時保持安全和隱私，同時還可以有效地防止來自 Internet 的攻擊。
:::danger
NAT gateway 是要付費的! 項目包含 elastic IP 跟 NAT gateway.
:::

### route table

用於管理子網流量路由的組件。每個 VPC 都有一個主路由表，用於管理其所有子網的流量路由。這就像你在陌生的城市,要透過 google map 去看路牌的標示,才知道路要怎麼走一樣,如果 route table 是空的,那基本上資訊也無法傳遞!

### security group & Network Access Control List

- security group 是 instance 級別的虛擬防火牆,用於控制進出的各種協議的各種流量.
- Network Access Control List 是 subnet 級別防火牆,也是拿來管流量.

兩者除了級別以外的區別:

- NACL 是無狀態的(stateless),不跟蹤狀態,也就是要規定 7.7.7.7 能進來(inbound),同時也要規定能出去(outbound),才會放行跟 7.7.7.7 有關的流量.
- Security group 是有狀態的(stateful),這代表會自動允許出站(outbound)或入站(inbound)的返回流量,舉例來說:如果對外可以連接 7.7.7.7:80,那 7.7.7.7:80 回來的流量也會自動允許. 要注意！7.7.7.7:80 不能自己進來.

## lab

1. [建立 VPC](#建立-vpc)
2. [建立 public subnet & private subnet(需連結 VPC)](#建立-subnet)
3. [建立 Internet gateway(需連結 VPC)](#建立-internet-gateway)
4. [(optional)建立 NAT gateway](#建立-nat-gateway)(optional,需連結 subnet,配置 eip,前提是 private subnet 需要連外時)
5. [建立 route table](#建立-route-table)(設定是否連內網 local,連外 Igw,NAT gateway,VPN gateway,peering 等) 以及要給哪個 subnet 用,一個 route table 可以給多個 subnet 用
6. [設定 Security group](#設定-security-group) 對服務開啟 ip and port
7. 網路到這邊,去設定服務囉！

### CIDR 規劃

VPC 用 10.0.0.0/16.
因為前面 VPC 用 10.0.0.0/16,這邊預計只用 4 個 subnet,不過為了保險所以會切出 16 個(2 的 4 次方)所以子網段 CIDR 會是 20,每個 subnet 扣掉 aws 預留的 5 個 ip 還會有 4091 個 ip 可用.

|              | 欄位              | 設定值                | 說明                                  |
| ------------ | ----------------- | --------------------- | ------------------------------------- |
|              | VPC ID            | ford-test-vpc         | 欲建立子網路的 VPC，此例為 sample-vpc |
| 對外子網路 1 | 子網路名稱        | ford-subnet-public01  | 自訂子網路的名稱                      |
|              | Availability Zone | ap-northeast-1a       | 選擇子網路所在的 Availability Zone    |
|              | IPv4 CIDR 區塊    | 10.0.0.0/20           | 如前面的介紹                          |
| 對外子網路 2 | 子網路名稱        | ford-subnet-public02  | 同上                                  |
|              | Availability Zone | ap-northeast-1c       |                                       |
|              | IPv4 CIDR 區塊    | 10.0.16.0/20          |                                       |
| 內部子網路 1 | 子網路名稱        | ford-subnet-private01 | 同上                                  |
|              | Availability Zone | ap-northeast-1a       |                                       |
|              | Pv4 CIDR 區塊     | 10.0.32.0/20          |                                       |
| 內部子網路 2 | 子網路名稱        | ford-subnet-private02 |                                       |
|              | Availability Zone | ap-northeast-1c       |                                       |
|              | Pv4 CIDR 區塊     | 10.0.48.0/20          |                                       |

### 建立 VPC

操作:

VPC -> create VPC -> IPv4 選 manual input -> IPv4 CIDR 10.0.0.0/16 ->無 IPv6 CIDR 區塊.

### 建立 subnet

操作:

VPC -> Create subnet -> choose VPC ID -> choose AZ -> fill in CIDR of subnet ->done

這邊要依據前面 CIDR 規劃圖要做四個 subnet(兩個 public 兩個 private,CIDR 照上面)

### 建立 Internet gateway

操作:

VPC -> Internet Gateway ->click on the "Attach to VPC" option in the "Actions" menu. -> select the VPC to attach the Internet Gateway ->done

### 建立 NAT gateway

操作:

VPC(verify AZ first) -> NAT Gateways -> Create NAT Gateway -> bind EIP to NAT Gateway -> done and wait for status become available ->associate NAT Gateway with public subnet -> private route table add destination 0.0.0.0/0 to NAT Gateway.

### 建立 route table

共 2 個 public subnet,2 個 private subnet,public 可以共用這個 route table,private 要兩個到各自的 subnet(共 3 個),要有各自 route table.

public subnet: 設定 destination 0.0.0.0/0 target 過 IGW,destination 到 10.0.0.0/16,target 是 local(本地端).

private subnet: destination 0.0.0.0/0 而 Target ngw-01 ,destination 10.0.0.0/16 而 Target local.
destination 0.0.0.0/0 而 Target ngw-02 ,destination 10.0.0.0/16 而 Target local.

操作:

VPC(verify AZ first) -> Route tables -> create route table -> done -> edit routes(加 target and destination)->subnet associations

### 設定 Security group

default：

- inbound rules: allow Port range:All Protocol:All Source:10.0.0.0/16

- Outbound rules: Port range:All Protocol:All Source:0.0.0.0/0(為了可以把對外資訊透過 NAT 出去) Port range:All Protocol:All Source:10.0.0.0/16(可以到內部其他 subnet)

ssh:

- inbound rules: allow Protocol:ssh Source:urIP

elb:

- inbound rules: 放 HTTP,HTTPS 進來.

### router table

要讓 public subnet 跟 private subnet 溝通需要有 router table 指引,設定語法基本上是

如果你的 <highlight color="#25c2a0">目的地是 10.0.0.0/16</highlight>,要透過<highlight color="#25c2a0">下一站目標 ex. 10.0.0.1 or local(Aws)</highlight> 幫你送資料出去.

如果你的 <highlight color="#25c2a0">目的地是 0.0.0.0/0</highlight>,要透過<highlight color="#25c2a0">下一站目標 Igw</highlight> 幫你送資料出去.

- 目的地(Destination)可以是 CIDR 指定的一個範圍,也可以是特定 IP
- 下一站目標(Target),依據想要存取的資源不同區分為以下幾種

每個 subnet 都要有自己的 router table,但同一張 router table 可以給多個 subnet 是沒問題的.

建立流程:
create rt -> choose VPC to be used on the router table -> click save -> Actions -> Edit routes
-> 0.0.0.0 為 destination, igw 為 Target -> click save -> subnet associations -> connect to VPC

### security group

透過管控 port 跟 ip 存取資源,連線方式是有狀態的.基本上每台 EC2 都要套用一次 security group

設定項目有: 名稱, 連接的 VPC, Inbound rules, Outbound rules(預設是 0.0.0.0,主要透過)

實務上,web acl 是對 security group 的遺漏進行保險設定.

## bastion server

堡壘機的建立用來管控跟紀錄使用者操作,透過本機的私有金鑰以及對應放在堡壘機的公有金鑰連線,連線到堡壘機,再透過放在堡壘機的各機台私鑰連線到對應在內部資源的公鑰做機台管理.

mac,linux,window 10 以上主要支援的金鑰檔案格式為\*.pem.

### generating keys

如果不小心把載到本機的.pem 檔私鑰刪除,先前使用的舊金鑰就都要作廢了ＱＱ 沒有恢復方法！

#### generate keys 建立步驟

```
EC2 service -> Network & Security -> Key Pairs ->Create Key Pairs-> choose RSA , .pem(For use with OpenSSH) ->download .pem file
```

### create bastion server

```
EC2 ->instances -> launch instances ->Name(product-resource-purpose-region)ex. ford-ec2-bastion-uw1 -> app and os image(my ami or aws market ,or community AMIs) -> instance type(choose cpu ,memory) -> key pair(login)-> choose ur vpc,and use public subnet, enable auto-assign public ip -> select security group-> DONe
```

:::info
當公司某些服務需要連外開放,例如. 網頁,Mail Server,FTP Server 等,就會在外部防火牆後面新增內部防火牆,將網頁,Mail Server,FTP Server 等放在這之間,用以控制可能由 DMZ 區進入內部網路(db 等)的流量.

:::

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
