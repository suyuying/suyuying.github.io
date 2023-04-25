---
title: aws internet setting introduction
description: 基本上網路部分會圍繞著VPC 設定,依序:建立 VPC ->建立 public subnet & private subnet(需連結 VPC) ->建立 Internet gateway(需連結 VPC) ->建立 NAT gateway(需連結 subnet,配置 eip) -> 建立 route table(設定是否連內網 local,連外 Igw,NAT gateway,VPN gateway,peering 等) 以及要給哪個 subnet 用,一個 route table 可以給多個 subnet 用 -> 設定 Security group 對服務開啟 ip and port -> 網路到這邊,去設定服務囉！
authors: suyuying
image: https://github.com/suyuying.png
tags: [AWS]
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

- 目標:Region 內建立 VPC,並使用 elb 將流量導到兩個不同 AZ 中的 web server,避免因為單一 AZ 故障導致的服務中斷.日常管理透過堡壘機進入 web server 做管理.本篇主要講網路設定部分,而 elb,EC2 等服務設定會留到下一篇.

- CIDR 規劃:VPC 用 10.0.0.0/16.這邊預計只用 4 個 subnet,不過為了保險所以會切出 16 個(2 的 4 次方)所以子網段 CIDR 會是 20,每個 subnet 扣掉 aws 預留的 5 個 ip 還會有 4091 個 ip 可用.

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

因為有兩個 web server 各自要出去要透過各自的 NAT Gateway,這邊的 NAT Gateway 是建立在 public subnet 中歐！

操作:

VPC(verify AZ first) -> NAT Gateways -> Create NAT Gateway -> bind EIP to NAT Gateway -> done and wait for status become available ->associate NAT Gateway with public subnet -> private route table add destination 0.0.0.0/0 to NAT Gateway.

### 建立 route table

#### route table 語法

如果你的 <highlight color="#25c2a0">目的地是 10.0.0.0/16</highlight>,要透過<highlight color="#25c2a0">下一站目標 ex. 10.0.0.1 or local(Aws)</highlight> 幫你送資料出去.

如果你的 <highlight color="#25c2a0">目的地是 0.0.0.0/0</highlight>,要透過<highlight color="#25c2a0">下一站目標 Igw</highlight> 幫你送資料出去.

#### route table 設定

前面規劃共 2 個 public subnet,2 個 private subnet.public subnet 可以共用一個給 public subnet 使用的 route table,而 private subnet 要兩個 for private subnet 的 route table(差別在 NAT gateway 不同),因此共會建立 3 個 route table.

- public subnet: 設定 destination 0.0.0.0/0 target 過 IGW,destination 到 10.0.0.0/16,target 是 local(本地端).

- private subnet1: destination 0.0.0.0/0 而 Target ngw-01.destination 10.0.0.0/16 而 Target local.
- private subnet2: destination 0.0.0.0/0 而 Target ngw-02 ,destination 10.0.0.0/16 而 Target local.

操作:

VPC(verify AZ first) -> Route tables -> create route table -> done -> edit routes(加 target and destination)->subnet associations

### 設定 Security group

default：

- inbound rules: allow Port range:All, Protocol:All Source:10.0.0.0/16

- Outbound rules: Port range:All, Protocol:All Source:0.0.0.0/0(為了可以把對外資訊透過 NAT 出去), Port range:All, Protocol:All Source:10.0.0.0/16(可以到內部其他 subnet)

forBastion(堡壘機):允許 ssh

- inbound rules: allow Protocol:ssh Source:YourIp

forElb:允許 HTTP and HTTPS

- inbound rules: allow 0.0.0.0/0 HTTP,HTTPS 進來.

## 小結

網路基本設定在這邊,下一篇是有關 EC2 跟 ELB.
