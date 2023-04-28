---
title: aws EC2 and ELB setting introduction
description: 基本EC2連入管理,堡壘機跟web server設定.並使用ELB作為反向代理以web server.ELB 設定部分,一開始的 listener 只有基本的 rule,目前只有一條 If (all match)Request is not otherwise routed to target group.正常使用情況會是,你自己的域名(ex. modontou.don69.store)設定到該 ELB,再透過 ELB 依據請求的設定,把請求轉到 Target Group.
authors: suyuying
image: https://github.com/suyuying.png
tags: [AWS]
---

這邊接續[AWS 網路篇](/docs/Aws/2023-04-11-aws-vpc-setting)的 lab.

目標:Region 內建立 VPC,並使用 elb 將流量導到兩個不同 AZ 中的 web server,避免因為單一 AZ 故障導致的服務中斷.日常管理透過堡壘機進入 web server 做管理.

:::tip
基本上 EC2 跟 ELB 設定相關依序:

1. [建立 KeyPair 公私鑰](#建立-keypair-公私鑰)
2. [建立 EC2 for web server and bastion server](#ec2-for-web-server-and-bastion-server)
3. [設定跳板機 ssh 連線](#設定跳板機-ssh-連線)
4. [建立 target group](#建立-target-group)
5. [建立 ELB](#建立-elb)
6. [啟 HTTP 伺服器](#啟-http-伺服器)
7. [設定-forward-操作](#設定-forward-操作)
8. [設定 HTTPS 做 listener](#設定-https-做-listener)
9. DONe！

:::

## AWS EC2 introduction

是 Amazon Web Services（AWS）提供的一種基礎架構即服務（IaaS），它允許用戶在 AWS 雲中啟動和管理虛擬機器（VM），稱為 EC2 實例。使用 EC2，用戶可以獲得可調整的計算資源，包括虛擬機器、存儲、網路帶寬和安全性。

### Bastion server

堡壘機的建立用來管控跟紀錄使用者操作,透過本機的私有金鑰以及對應放在堡壘機的公有金鑰連線,連線到堡壘機後,再透過放在堡壘機的私鑰連線到對應在內部資源的公鑰做機台管理,另外,也可以透過 multi-hop 方式,在私鑰只放在本機的情況下,透過堡壘機跳到目標管理機器中.

本篇會將 bastion server 放在 public subnet 底下,會有對外 ip,透過 Igw 跟外界溝通.

:::info
mac,linux,windows 10 以上主要支援的金鑰檔案格式為\*.pem.

windows 9 以前是支援 ppk 格式.
:::

## AWS ELB introduction

主要負責流量的反向代理,將流量依據使用者設定導到各台伺服器(Target group),功用整理如下:

1. 分散眾多 request
2. 處理 SSL 加密連線
3. 修復請求錯誤(應付 400 Bad request 等)

不過這幾件事情其實 Nginx 都做得到,另外為避免 Nginx 暴露 IP 被打爆,前面通常也會接其他家 CDN,這樣相比之下用 Nginx+CDN 也是個不錯選項.

因此 Nginx+CDN 跟雲服務商的 load balancer 如何選擇？ 使用雲服務商提供的 Load Balancer 的可用性是較高的,且可以應付流量大小變化,個人覺得適用在搶票系統以及其他流量會瞬間暴衝的公司,如果公司流量穩定的話,使用 Nginx+CDN 會是比較好的選項.

### AWS 提供 ELB 的選項

aws 提供的 load balancer 由 Elastic Load Balancing(ELB)所提供,至 2023/4/22 共有 4 種 ELB,這邊提供[官方把較連結](https://aws.amazon.com/elasticloadbalancing/features/)

- Application Load Balancer(ALB):主要用於處理 HTTP/HTTPS 流量(Layer 7)
- Network Load Balancer(NLB):主要用於處理 TCP、TLS 和 UDP 流量(Layer 4)
- Classic Load Balancer(CLB):舊版,很少用到
- Gateway Load Balancer(GLB): 主要用於處理 NAT 和防火牆等網絡服務，能夠將進入 VPC 的流量分發到多個目的地(Layer 3 Gateway + Layer 4 Load Balancing )

ALB 主要用於第 7 層 Load Balancer,主要轉導 protocol: HTTP, HTTPS,基本上就跟 Nginx 差不多,目前了解,差別在沒有偵測來源 IP 城市(nginx geoip)

會設定的內容:

- Availability Zone:指定的 VPC Region 跟 ELB 需為同一 Region,該 Region 底下 AZ 的都可用,選擇的 subnet 需要有連接 Igw(route tale 也要有),不然會失效.
- target group: 主要有對內跟對外兩種設定,如果指定了 VPC 中的目標，那麼就是對內的設定；如果指定了 Public IP 或 DNS，那麼就是對外的設定。對內要設定 listener 選擇接收協議,以及 request 怎麼分散到各 web server.

## lab

1. [建立 KeyPair 公私鑰](#建立-keypair-公私鑰)
2. [建立 EC2 for web server and bastion server](#ec2-for-web-server-and-bastion-server)
3. [設定跳板機 ssh 連線](#設定跳板機-ssh-連線)
4. [建立 target group](#建立-target-group)
5. [建立 ELB](#建立-elb)
6. [啟 HTTP 伺服器](#啟-http-伺服器)
7. [設定-forward-操作](#設定-forward-操作)
8. [設定 HTTPS 做 listener](#設定-https-做-listener)
9. DONe！

### 建立 KeyPair 公私鑰

```
EC2 service -> Network & Security -> Key Pairs ->Create Key Pairs-> choose RSA , .pem(For use with OpenSSH) ->download .pem file
```

如果不小心把載到本機的.pem 檔私鑰刪除,先前使用的舊金鑰就都要作廢了ＱＱ 沒有恢復方法！

### EC2 for web server and bastion server

bastion server 建立在 public subnet,web server 建立在 private subnet 上.

web server 其實也可以放在 public subnet,讓使用者直接透過 EIP 進來,不過如果遇到 ddos 攻擊,很容易 web server 就掛了,所以最好前面要有 elb 或者 cdn 這一層.最後,如果 web server 不對外,只靠 elb 之類轉進來,遇到雲服務廠商的 elb 掛掉,就會要花比較多時間把 web server 放回去對外就是.

security group 部分,注意他 associate 在 VPC 上,VPC 是分 Region 的,所以找不到你先前建立的 security group 的時候,去確認 Region 跟 VPC 是否有選對位置.

bastion server 至少需要允許你的 ip 可以 ssh 連入,且 outbound 可以到所有內網需管控機器(10.0.0.0/16),且要有對外 IP.

web server 因為規劃放在 private subnet 網段,只要 inbound 讓所有內網可以連入(10.0.0.0/16)就好,outbound 則考慮之後會串後端,可以用(10.0.0.0/16),基本上範圍可以在限縮.

規劃用 elb 連到內部兩台 web server,兩台 subnet 都用 private subnet

操作：

EC2 ->instances -> launch instances ->Name(product-resource-purpose-region)ex. ford-ec2-bastion-uw1 -> app and os image(my ami or aws market ,or community AMIs) -> instance type(choose cpu ,memory) ->choose key pair for login-> choose ur vpc,subnet, enable auto-assign public ip -> select security group(default and bastion)-> DONe

:::tip
注意事項:我自己在設定過程中有時候按一按就會忘掉 Network Settings 那部份,所以提醒開 EC2 跟線上問題排除一樣要注意

1. 硬體狀態(cpu,記憶體,硬碟)
2. 網路狀態(防火牆,及網路互通狀況)

:::

### 設定跳板機 ssh 連線

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

multi-hop 設定檔,用以把透過 bastion server,連到 private subnet 的 web server.

```
Host            ford-bastion
HostName        13.52.247.248
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

### 建立 target group

操作:

EC2 -> Load Balancing -> Target Groups -> 這邊適用 EC2 起的服務所以選 instance -> input group name -> input HTTP and 3000 port -> choose VPC -> choose instance ID(Ports for the selected instances)把流量導到指定位置的 3000 port.

這邊設定意思是把 ELB 把 443 流量解密後送到 port 3000 上得 web server,然後依據流量到這兩台 EC2.

### 建立 ELB

因為是會面向網路的 web server,需要 VPC 及 security group 支援,要做 load balance 需要兩個 AZ 以上.

封包傳遞過程(到 EC2 為例):

request: Client -> Internet -> Elb -> Igw -> public subnet(查 route table) -> Target Group -> EC2

response: EC2 -> public subnet(查 route table) ->Igw -> Internet -> Client

以上面過程知道,要透過 elb 連到 private group 裡的 EC2,中間需要符合幾格條件

1. public subnet- subnet 需要有 Igw 讓封包可以進來,且 route table 有 desination 0.0.0.0/0 透過 Igw 轉導,並可以識別 local
2. security group- 機器的 security group 要可以讓外界連入,把流量從 Internet 經 ELB 到 Igw -> public subnet,再透過 public subnet 的 router table 查詢到 private subnet 中的 web server.

本章用 web server,只用 HTTP/HTTPS 協議,所以用 ALB 就行,另外 ELB 是有分 Region 的.

操作:

EC2 -> Load Balancing -> Load Balancers -> input Load balancer name -> scheme: choose internet-facing-> IPV4->choose VPC -> choose Mappings of Two AZ in same Region-> choose security group ->choose Listener and target.

:::info

1. scheme 部分有兩個選項:

- Internet-facing：如果我們要從外網請求的話就要選擇這個選項，記得要到 public subnet,這樣 ELB 才能透過外網的 Igw 近來
- Internal：這會讓這個 alb 只能在內網使用，就無所謂用 public subnet 還是 private subnet 了。

2. Listener 部分:可以選 HTTP or HTTPS,如果選 HTTPS 就要選你的憑證要用 AWS Certificate Manager(ACM),IAM,匯入憑證等方式

:::

### 啟 HTTP 伺服器

在連入的目錄底下建立 index.html,並用以下指令起服務.

```
python3 -m http.server 3000
```

### 設定 forward 操作

ELB 設定後 listener 只有基本的 rule,目前只有一條 If (all match)Request is not otherwise routed to target group.

正常使用情況會是: 你自己的域名(ex. modontou.don69.store)設定到該 ELB,再透過 ELB 依據請求的設定,把請求轉到 Target Group.

可以做的設定:

- 主機標頭（Host header）：域名
- 路徑（Path）：域名後面帶的路徑，ex. /channelHandle
- HTTP 標頭（Http header）：就 http header
- Http 請求方法（Http request methed）：GET、POST…….
- 查詢字串（Query string）：域名帶進去的參數，ex. /?test=123
- 來源 IP（Source IP）：Client 端的 IP

Action 部分有三個:

1. Forward to: 轉寄,會把符合條件的請求導向設定的 target group，可以設定多個 target group 並且可以設定權重
2. Redirect to: 重導向,符合條件的域名轉導到設定的域名(HTTP status code: 301,302)
3. Return fixed response: 固定回傳,符合條件的域名都回覆設定的 http code 或是設定的內文

Group-level stickiness: 意思是在 load balance 過程中,啟用會話保持機制,主要是讓同一 client 透過在 client's browser 端設定 cookie 給 ELB 做辨別,讓 client 端可以持續跟同一台 backend server 做互動.cookie 預設一天到期.

操作:

EC2 -> Load Balancing -> yourLoadBalancer -> Listeners -> click 1 rule(基本上這時候你只有一個 rule)-> Manage rules -> Edit rules ->選 Host Header 加入域名,Add action 部分用 Forward to 你的 Target group.

### 設定 HTTPS 做 listener

這個要在 ELB 加上 HTTPS 的 listener. 另外 ACM 那邊要加個 wild card 憑證綁你的域名.

:::tip
ACM 申請要用 wildcard certificate 在申請時一定要用\*
\*.don7.store

因為加解密發生在 ELB,所以 target group 那邊 listen 的 port 就是你前端起服務的 port 就搞定！不用另外設定成 HTTPS.
:::

## 小結

基本的 EC2 跟 AWS internet 相關設定到這邊,接下來是 RDS,然後把後端程式透過 IaC 方式部署,不要再透過 UI 點擊.
