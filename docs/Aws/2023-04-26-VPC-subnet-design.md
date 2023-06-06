---
title: aws VPC , subnet,security group design
description: 簡單講一下網路規劃,但規劃 VPC 沒有個一定的答案,如果是為了開發上的方便,可能只會有一個 public subnet 放 nginx,其他 private subnet 雖然有以產品區分網段,但是 security group 是 VPC 內完全互通,並開放特定 port 連入這樣,再之後上正式環境可能就變成用 vpc 切分產品,總言之,這就要看對環境的要求！
authors: suyuying
tags: [AWS]
---

## 網路規劃

### VPC 規劃

在一個或多個 VPC 底下依據產品劃分 CIDR,各產品 server 在 private,nginx 在 public,主要透過 nginx 做轉導,public subnet 主要是 route 出外網會設定到 IgW,且裡面的 server 有對外 ip,那在 private 那邊的 route 在出外網時都透過 NAT.甚至不會出外網！

這邊就看公司對於各環境的規劃！

### subnet 規劃

產片就依據 VPC 的 CIDR,每個 Region 的 VPC 會依照用途或者功能規劃數個 Subnet，主要以 Public Subnet, Private Subnet 切分,例如,影音產品的 private 在 10.0.0.0/24,public 在 10.0.168.0/24,電玩產品 private 在 10.0.1.0/24,public 在 10.0.169.0/24,如果大一點公司會分品牌,那區分規則可能會變成用 VPC 直接區分.

public 通常放 web server,AD 等,private subnet 會放後端邏輯 .

### security group 規劃

如果機器不多的情況下,就不會特別用 NACL 去規劃子 subnet 的網路流量進出,而是透過 security group 規劃,這時候 sg 規劃通常都會用堆疊的,主要是都規範 ingress(inbound rules)其語法是 允許 ip 網段到我的 server 的哪個 port(ex.3306 TCP 125.227.142.21/32 這樣設定代表允許 ip125.227.142.21 到我這台 server 的 3306 port!),這個是有狀態的,也就是說允許進來,在 response 時也直接允許到達該 ip！

- `default` - 主要負責`ssh`連入以及普遍性的監控軟體連入,ex.Zabbix,prometheus.

```
# 允許 外面哪些ip連入
77.56.156.77/32	TCP SSH
177.56.156.77/32 TCP SSH
```

- `container or xx service` - 程式邏輯,主要用在後端程式間要互通,可以再進一步分細部網段

```
10.0.0.0/16	TCP xxx port
```

- `redis/pika` - redis-client 端連入 redis-server 的 inbound rule,會掛在 redis server 那邊

```
10.0.0.0/16	 TCP 6050
```

- `mysql`- mysql-client 端連入 mysql-server 的 inbound rule,會掛在 mysql server 那邊

```
177.227.142.71/32	TCP 3306
```

- `nginx` - 開啟 nginx inbound 的 rule,對外允許所有 ip 到 443 or 80,對內允許所有內部 ip 跟 port 過來

```
0.0.0.0/0 TCP 443
0.0.0.0/0 TCP 80
10.0.0.0/16 all traffic
```

### 命名規劃

可以基於服務功能,環境,地理位置或服務名稱等做規劃

1. 服務功能 ex. `backend-servers-sg`
2. 環境區分 ex. `prod-backend-servers-sg`
3. 地理位置區分 ex. `sg-us-east-backend`
4. 基於應用名稱 ex. `myapp-backend-sg`

### 小結

規劃 VPC 沒有個一定的答案,如果是為了開發上的方便,可能只會有一個 public subnet 放 nginx,其他 private subnet 雖然有以產品區分網段,但是 security group 是 VPC 內完全互通,並開放特定 port 連入這樣.而之後上正式環境可能就變成用 vpc 切分產品,總言之,這就要看對環境的要求！

:::info
參考資料

1. [vpc 規劃](https://rickhw.github.io/2017/07/07/AWS/Plan-And-Deisgn-Multiple-VPCs-in-Different-Regions/)

:::
