---
title: Basic introduction of cloudwatch and  cloudtrail
description: 以下內文會提供的資訊：- cloudwatch and cloudtrail 是什麼,- 什麼時候會用到 cloudwatch and cloudtrail？,- 基本建立 cloudwatch 監控 ec2 CPU
authors: suyuying
image: https://github.com/suyuying.png
tags: [AWS, cloudwatch, cloudtrail]
sidebar_position: 6
---

以下內文會提供的資訊：

- cloudwatch and cloudtrail 是什麼
- 什麼時候會用到 cloudwatch and cloudtrail？
- 基本建立 cloudwatch 監控 ec2 CPU

## cloudwatch

CloudWatch 提供了即時的監控功能，可以監視 AWS 資源的狀態和性能指標,例如 CPU 使用率、網路流量和存儲使用量等。此外，CloudWatch 還可以設定警報，當資源的指標達到預先設定的閾值時，它可以發送通知。CloudWatch 還提供了日誌記錄的功能，以收集、監視和分析應用程式和資源的日誌。

### 什麼時候會用到 cloudwatch

一般公司會使用 Zabbix,Prometheus,這類工具做到即時監控資源功能,而日誌分析部分,可以用的工具也很多,例如 ELK

- 那為啥要使用 cloudwatch?

個人以為考量的點是建制以上服務的時間成本,當你這台在 AWS 機器可能只會開個一段時間,且網路不通到監控機台或者公司剛成立監控還沒做,以上這些情況會讓你考慮用到 cloudwatch, 一般要長期監控的伺服器還是會用 Zabbix,Prometheus 等

<!--truncate-->

### 基本建立 cloudwatch 監控 ec2

#### 建立監控

1. 登入 AWS 管理控制台。
2. 前往 CloudWatch 服務。用 search bar 尋找 cloudwatch.
3. 在 CloudWatch 控制台的左側導覽窗格中，選擇「Dashboards」,並點擊 Create dashboard,名字打好新增後,在 add widget 那邊選擇圖表型態。
4. 如果是要展示 CPU 狀態變化,通常會選擇 Line 這個樣式,點入後選擇 Metrics（指標)
5. 在 Metrics 頁面上，找到並展開「EC2」選項。您將看到可用於監控 EC2 實例的不同指標，例如 CPU 使用率、網路流量等。注意,這邊會 show 出你所有的資源,但如果找不到,建議用 instanceID 去搜尋會比較好！
6. 選擇您想要監控的 EC2 實例指標。您可以選擇單個指標或多個指標。這邊示範就選 CPUUtilization 就好.
7. 選擇要監視的指標粒度,在 Graphed metrics 那邊可以選擇以 1 分鐘或 5 分鐘為單位的監控粒度,另外在 Options 部分可以制定 x,y 軸上下限等

#### 建立 alarm

1. 登入 AWS 管理控制台。
2. 前往 CloudWatch 服務。您可以在 AWS 控制台的服務選單中找到 CloudWatch，通常位於「管理與監控」或「管理工具」類別中。
3. 在 CloudWatch 控制台的左側導覽窗格中，選擇「Alarms」(警報)-> All alarms。
4. 點擊「Create alarm」(建立警報)按鈕。
5. 選擇要監視的指標。您可以從可用的指標列表中選擇，例如 CPU 使用率、網路流量等。
6. 選擇要監視的 EC2 實例。您可以通過選擇特定實例 ID 或選擇特定標籤（例如 Name）來篩選實例。
7. 設定警報條件。您可以指定警報的閾值、比較運算符和持續時間等。
8. 設定警報動作。您可以指定警報觸發時的動作，例如發送通知到 SNS 主題,執行自動擴展,或對 EC2 執行重新開機,關機等操作。
9. 確認警報設定並點擊「Create alarm」(建立警報)按鈕以創建警報。

### cloudwatch 小結

以上設定可以發現,CloudWatch 提供了直接設定警報的功能,而常見監控工具 ex.zabbix 是通過設定 Item（項目）的觸發器（Trigger）來定義警報。項目（Item）是用於監測特定資源的指標，例如 CPU 使用率、磁碟空間等。通過設定項目的觸發器，當數據收集的條件滿足時會觸發警報 alarm.

cloudwatch 除了以上硬體資源監控,還有 CloudWatch Logs 用於集中存儲和監控應用程式和系統日誌,幫助集中管理和分析應用程式和系統的日誌數據.

## cloudtrail

他主要是記錄和監控您 AWS 帳戶中的 API 活動.

### 什麼時候會用到 cloudtrail？

使用情境,拿來看 user 在帳戶中執行的操作紀錄,另外,也可以使用 cloudtrail 去追蹤 user 常用的權限,去定義 IAM Policy,這個功能在開發告一段落,服務要上線會用得到,因為開發時候常常權限開很大,到正式上線就要透過分析操作去給予 IAM 設定,主要是為了做到 least-privilege permissions.
