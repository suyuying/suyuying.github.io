---
title: Do Internet gateways and modem need to be used together?
description: 簡言之，如果你家使用撥接或有線電視提供的網路，就會需要數據機，如果你家用光纖、DSL、電纜等，就可以不用轉換訊號，直接透過 Igw 將訊號 routing 到外部網路。

authors: suyuying
tags: [curl]
---

## Device basic introduction

### internet gateway

互聯網閘道器（Internet Gateway）是一種網路設備，用於連接位於本地網路（例如公司或家庭網路）內的設備與互聯網間的通訊，扮演網路中介，將本地網路封包轉到外網，再把外網封包轉回本地網路，所以需要有 router 功能

### Modem

數據機(Moden)，主要功用是將數字訊號轉換成模擬訊號。

### 數字訊號

數字信號是一種離散的信號，它由一系列離散的數字或二進制碼表示。這些二進制碼只能取 0 或 1 的值。

### 模擬訊號

模擬信號是一種連續的信號，它是由一個連續的波形表示的。模擬信號可以取無限個值，因為它們是基於物理量（如電壓、電流、聲音波形等）的連續變化。模擬信號常用於聲音和視頻等模擬設備中，如收音機、電視和手機等

## Do Internet gateways and modems need to be used together?

不一定，這依據情形而定。

1. 撥號: 需要將計算機的數字訊號轉成模擬訊號，並透過電話線傳遞訊號到互聯網。
2. 電視網路: 同上，一些有線電視網路提供的網路服務一樣要先做訊號轉換，再透過有線電視網路傳輸。

簡言之，如果你家使用撥接或有線電視提供的網路，就會需要數據機

如果你家用光纖、DSL、電纜等，就可以不用轉換訊號，直接透過 Igw 將數字訊號 routing 到外部網路。
