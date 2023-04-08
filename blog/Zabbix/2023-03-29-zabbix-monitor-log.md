---
title: Zabbix Sender monitor key word in log, and show data in grafana
description: 定時抓取某log file其中的特定關鍵字，用zabbix-sender傳送資訊給zabbix server，並把資料設定報警到telegram，資訊會用grafana的log顯示。
authors: suyuying
image: https://github.com/suyuying.png
tags: [Zabbix, Grafana]
---

## 前提

這邊假設已經設定好 host，且 zabbix 有接上 grafana 情況後，繼續往下描述.

目的: 定時抓取某 log file 其中的特定關鍵字，用 zabbix-sender 傳送資訊給 zabbix server，並把資料設定報警到 telegram，資訊會用 grafana 的 log 顯示。

### step1. 設定 item

正常 zabbix 設定機器流程：

建立 Hosts groups-> 建立 Templates->往 Template 內設定要監控的 item->再把 templates 連結到 Hosts Groups 上面->最後把主機也就是 Host 添加到指定的 Host groups 上面。

這邊因為特別需求關係(只有這一台機器需要），因此直接在該 Host 上面設定 item.

選 Hosts
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./2023-03-29-zabbix-monitor-log-png-folder/zabbix-side-bar.png").default}
      style={{ maxHeight: "300px" }}
      alt="zabbix-side-bar"
    />
  </div>
</>

因為是用 zabbix-sender 所以這邊 type 用 zabbix trapper，要注意機器上面都用 Key 跟 zabbix server 溝通，Name 是該 Item 的名字，兩個設定常常會搞混。
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./2023-03-29-zabbix-monitor-log-png-folder/zabbix-traper.png").default}
      style={{ maxHeight: "300px" }}
      alt="zabbix-side-bar"
    />
  </div>
</>

### step2. 安裝 zabbix-sender 並傳資料

機器上腳本設定 zabbix_sender 傳送資料，用 key 跟 output 做傳送

```
# 安裝zabbix-sender
yum install zabbix-sender
# 傳資訊給zabbix server
zabbix_sender -z 10.121.0.9  -s yourHostName -k test -o "$(cat /tmp/Lost_connection_to_db_server_${range2}_${range1}.log)"
```

確認 zabbix 是否有收到資料
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./2023-03-29-zabbix-monitor-log-png-folder/zabbix-get-last-data.png").default}
      style={{ maxHeight: "300px" }}
      alt="zabbix-side-bar"
    />
  </div>
</>

### step3. 設定 grafana 抓取資料

確認有收到資料後，在 grafana 新建 panel
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./2023-03-29-zabbix-monitor-log-png-folder/grafana-add-new-panel.png").default}
      style={{ maxHeight: "300px" }}
      alt="zabbix-side-bar"
    />
  </div>
</>

設定資料原，注意這邊的 Query Mode 是設定 Text，有很多種型態，選錯會找不到資料
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./2023-03-29-zabbix-monitor-log-png-folder/grafana-set-data-source.png").default}
      style={{ maxHeight: "300px" }}
      alt="zabbix-side-bar"
    />
  </div>
</>

Grafana 模式記得要選 log，也可以使用其他模式玩玩看，因為這邊沒啥雷，就不特別截圖說明

### (optional)step4. zabbix 告警 tg

先設定 Trigger，Problem expression 也就是當傳送資訊符合設定的條件就會引發告警，Recovery experssion 也就是當資訊符合哪些條件就會解除告警。
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./2023-03-29-zabbix-monitor-log-png-folder/zabbix-sender-b-log.png").default}
      alt="zabbix-side-bar"
    />
  </div>
</>

確定完的確會告警跟回復後，就可以設定 TG 告警。先去 Administration->Media type 複製 Telegram 那格。
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./2023-03-29-zabbix-monitor-log-png-folder/zabbix-clone-telegrana.png").default}
      alt="zabbix-side-bar"
    />
  </div>
</>

在 Token 位置加入你 TG Token
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./2023-03-29-zabbix-monitor-log-png-folder/zabbix-add-token.png").default}
      alt="zabbix-side-bar"
    />
  </div>
</>

建立新 User Group
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./2023-03-29-zabbix-monitor-log-png-folder/zabbix-add-zabbix-group.png").default}
      style={{ maxHeight: "300px" }}
      alt="zabbix-side-bar"
    />
  </div>
</>

設定該 User Group 對哪些 Host Group 有監控權限。
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./2023-03-29-zabbix-monitor-log-png-folder/zabbix-group-permission.png").default}
      style={{ maxHeight: "300px" }}
      alt="zabbix-side-bar"
    />
  </div>
</>

建立 User，並把該 User 加到 Group 內部，並設定當哪些狀態發生就往 TG 送資料
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./2023-03-29-zabbix-monitor-log-png-folder/zabbix-user-media.png").default}
      style={{ maxHeight: "300px" }}
      alt="zabbix-side-bar"
    />
  </div>
</>

以上都 OK，可以會到前面 media type 那邊測試是否可以傳資料到ＴＧ

如果要將 Trigger 的資料送到 TG，一定要設定 Actions，這邊是一個坑，前面設定完了但都沒有送到 TG，結果發現這格沒有設定ＺＺＺ

<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./2023-03-29-zabbix-monitor-log-png-folder/zabbix-trigger-actions-to-tg.png").default}
      style={{ maxHeight: "300px" }}
      alt="zabbix-side-bar"
    />
  </div>
</>
