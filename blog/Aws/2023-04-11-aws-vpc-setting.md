---
title: aws setting introduction
description: 本章會以跳板機跟web server的建立為例,從頭到尾由大方向的VPC跟router table,elb,到EC2上使用的key pair,security group,最後到dns跟cloudwatch使用全部demo一次,這個lab做完就會對傳統的架構運作有了解,接著就是往serverless,CI/CD服務邁進！
authors: suyuying
image: https://github.com/suyuying.png
tags: [AWS]
draft: true
---

## VPC 基本介紹

一般地端要讓網路進到 server,結構簡單的長這樣

```
internet -> Router -> Switch -> server
```

要建立同樣的網路運行環境在 aws 要透過 Amazon Virtual Private Cloud(VPC)

基本上 VPC 設定有 subnet、Internet gateway、NAT gateway 等要做,在 aws 雲上扮演類似 router 角色.

### subnet 計算 ip 位址

CIDR 將 IP 地址劃分為網絡前綴和主機地址

私有 IP 範圍級別有三種,從中挑選即可,不過要注意的是 aws 有限制無論哪種級別,一個 VPC 最多就只能有 65536(2 的 16 次方)個 ip.

- Class A: 10.0.0.0/8,包含 10.0.0.0~10.255.255.255
- Class B: 172.16.0.0/12,包含 172.16.0.0 ~ 172.31.255.255
- Class C:192.168.0.0/16,包含 192.168.0.0 ~ 192.168.255.255

因此結合 AWS 限制還有 CIDR 切分,在 aws 配置 VPC 時,用 Class A 每個子網最有 65536 個 ip 下,可以切分出最多 255 個 subnet.

ex.如果有一個 192.168.0.0/16 的 B 級網段,需要將一個 IP 地址段分成 8 個子網，可以使用子網掩碼 /19（即 255.255.255.192），這個子網掩碼可以將一個 IP 地址段分成 2^3=8 個子網，每個子網可以分配 2^13=8192 個 IP,但須減去保留網路地址跟廣播地址所以共 8190 個主機 IP 地址（因為要保留網路地址和廣播地址）,[詳細計算可以看這篇](https://snoopy30485.github.io/2020/04/10/%E6%88%91%E7%9A%84%E7%B6%B2%E8%B7%AF%E7%AD%86%E8%A8%98%E5%A4%96%E5%82%B3-%E5%AD%90%E7%B6%B2%E8%B7%AF%E5%88%87%E5%89%B2%E5%BF%AB%E9%80%9F%E8%A8%88%E7%AE%97%E6%B3%95/)。

### VPC

:::tip
要簡便的登入可以到 aws 裡面的 IAM 服務找 Sign-in URL for IAM users in this account,複製他給的網址然後加到書籤內歐！
複製網址都會長類似這樣: https://878783396812.signin.aws.amazon.com/console
:::

VPC 是綁 region 的, 因此不同地區的 application 需要綁各自的 VPC.

VPC 有 AZ 概念,如果 VPC 故障即使底下資源都沒掛,但依然無法使用,所以在同一個 Region 的多 AZ 建立 subnet 就能降低風險,這邊 lab 會用 1 個 VPC 分別在同一 region 不同 AZ 做 subnet.

### subnet

nginx,elb 這類就對外會需要 public subnet, database server 就會是在 private subnet.接在前面兩個 VPC,各需要兩個 subnet 所以總共會要 4 個 subnet 分布在兩個 AZ.

### Internet gateway(IGW)

IGW 主要功能是讓網路跟 internet 通訊,外部網路封包會透過 IGW 跟 VPC 溝通

### CIDR 規劃

因為前面 VPC 用 10.0.0.0/16,這邊預計只用 4 個 subnet,不過為了保險所以會切出 16 個(2 的 4 次方)所以子網段 CIDR 會是 20,每個 subnet 扣掉 aws 預留的 5 個 ip 還會有 4091 個 ip 可用.

|              | 欄位              | 設定值                | 說明                                  |
| ------------ | ----------------- | --------------------- | ------------------------------------- |
| 對外子網路 1 | VPC ID            | ford-test-vpc         | 欲建立子網路的 VPC，此例為 sample-vpc |
|              | 子網路名稱        | ford-subnet-public01  | 自訂子網路的名稱                      |
|              | Availability Zone | ap-northeast-1a       | 選擇子網路所在的 Availability Zone    |
|              | IPv4 CIDR 區塊    | 10.0.0.0/20           | 如前面的介紹                          |
| 對外子網路 2 | VPC ID            | ford-test-vpc         |                                       |
|              | 子網路名稱        | ford-subnet-public02  | 同上                                  |
|              | Availability Zone | ap-northeast-1c       |                                       |
|              | IPv4 CIDR 區塊    | 10.0.16.0/20          |                                       |
| 內部子網路 1 | VPC ID            | sample-vpc            |                                       |
|              | 子網路名稱        | ford-subnet-private01 | 同上                                  |
|              | Availability Zone | ap-northeast-1a       |                                       |
|              | Pv4 CIDR 區塊     | 10.0.32.0/20          |                                       |
| 內部子網路 2 | VPC ID            | sample-vpc            | 同上                                  |
|              | 子網路名稱        | ford-subnet-private02 |                                       |
|              | Availability Zone | ap-northeast-1c       |                                       |
|              | Pv4 CIDR 區塊     | 10.0.48.0/20          |                                       |

### lab

1. 建立 vpc
2. 建立 subnet
3. 建立 Internet gateway(IGW)
4. 連接 IGW 到 VPC,讓 vpc 網路可以跟 internet 通訊.
5. private subnet 建立 NAT gateway.
   click NAT gateway->連線類型是 public->自動分配 EIP(這個之後要自己手動刪！ 不會跟 NAT 一起做連集刪除)
   (optional)public subnet 建立 NAT 並讓 private subnet 透過他聯網單方面拿到網路,可以使用 Network address translation(NAT),透過 NAT gateway 那關做內部 ip 跟 port 號映射.
6. 建立 router table 把 destination 跟 Target 加入,讓封包知道怎麼走.

```
private subnet -> NAT gateway -> Internet Gateway ->Internet
```

:::danger
NAT gateway 是要付費的! 項目包含 elastic IP 跟 gateway.
:::

6. 建立 router table

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

需要 VPC,security group.因為是會面向網路的 web serve,所以透過連到 VPC 中有聯外功能的 public subnet 中(subnet 需要有 Igw 讓封包可以進來,且 route table 有 desination 0.0.0.0/0 透過 Igw 轉導,並可以識別 local),機器的 security group 要可以連外,把流量從 Internet 透過 ELB 到 ->Igw -> public subnet,再透過 public subnet 的 router table 查詢到 private subnet 中的 web server.

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
