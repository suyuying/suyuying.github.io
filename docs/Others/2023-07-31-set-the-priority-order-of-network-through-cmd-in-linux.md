---
title: set the priority order of the network services through linux cmd
description: 使用networksetup指令調整網卡使用的優先順序！
image: https://github.com/suyuying.png
authors: suyuying
tags: [networksetup]
---
## 使用場景

因為電腦切內外網的情況下,有時候會需要去切換網卡使用的優先順序,相比於去系統設定做調整,使用cmd也可以做到同樣事情且更方便！

2023/8/16新增調整路由的解法！

## mac調整路由
另外一個思路是調整到某個網段,例如,10.0.0.0/8網段就會透過指定網關出去,其他走default.

`netstat -nr`:這個指令可以看目前路由情況,包含ipv4 and ipv6!
`route add -net 10.0.0.0/8  10.14.33.254` 透過10.14.33.254網關到10.0.0.0/8網段

最後確認手段,透過`route -n get 10.160.0.3`測試他!這邊應該會看到走不同gateway


## mac修改

整個流程會是先列出目前順序->調整順序->(optional)建立alias以便之後調整->長久生效化

列出目前順序

```bash
networksetup -listnetworkserviceorder
```

結果會像以下

```text
An asterisk (*) denotes that a network service is disabled.
(1) Ethernet
(Hardware Port: Ethernet, Device: en0)

(2) Wi-Fi
(Hardware Port: Wi-Fi, Device: en1)

(3) iPhone USB
(Hardware Port: iPhone USB, Device: en4)

(4) Thunderbolt Bridge
(Hardware Port: Thunderbolt Bridge, Device: bridge0)
```

調整順序,這邊把wifi往前調整成為首位

```bash
sudo networksetup -ordernetworkservices "Wi-Fi" "Ethernet" "iPhone USB" "Thunderbolt Bridge"
```

確認結果

```bash
networksetup -listnetworkserviceorder
```

調整後結果如下

```text
An asterisk (*) denotes that a network service is disabled.
(1) Wi-Fi
(Hardware Port: Wi-Fi, Device: en1)

(2) Ethernet
(Hardware Port: Ethernet, Device: en0)

(3) iPhone USB
(Hardware Port: iPhone USB, Device: en4)

(4) Thunderbolt Bridge
(Hardware Port: Thunderbolt Bridge, Device: bridge0)
```

建立alias

```bash
alias insetnet='sudo networksetup -ordernetworkservices "Ethernet" "Wi-Fi"  "iPhone USB" "Thunderbolt Bridge"'
alias outsetnet='sudo networksetup -ordernetworkservices "Wi-Fi" "Ethernet" "iPhone USB" "Thunderbolt Bridge"'
```

如果是用mac可以把上面那段加入到`~/.zshrc`的文尾.重新載入!

```bash
source ~/.zshrc
```

這邊建立兩個指令`insetnet` and `outsetnet`,用以切換網路使用順序！
