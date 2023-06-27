---
title: prometheus基本安裝跟使用
description: 123
authors: suyuying
image: https://github.com/suyuying.png
tags: [Promeheus, Grafana]
draft: true
---

## 基本介紹

<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./architecture.png").default}
      alt="architecture png"
    />
  </div>
</>
Prometheus 是一款基於時序數據庫的開源監控告警系統,可以作為微服務架構監控系統的解決方案跟VM系統監控,Prometheus 生態系統包含了幾個關鍵的組件：Prometheus server、Pushgateway、Alertmanager、Web UI (可以用grafana代替)等,主要做到資料收集和資料儲存,資料查詢跟可視化，告警以及webhook促發後續對應事件等！

### 資料收集邏輯

相比於 zabbix agent 有主動跟被動兩種送資料給 server 模式,在 prometheus 裏 server 只會去 exporter 或 pustgateway 等 prometheus target 拉資料,在 exporter 就是透過 exporter 去機器收資料,在 push gateway 則是客戶端主動把資料給 gateway.

#### 使用 exporter 收集資料

- 對目標服務做數據收集
- 數據轉換：轉換為 prometheus 的數據格式要求
- 數據暴露：通過指定 port 讓 prometheus 可以過來抓資料

#### 短期 job,使用 Pushgateway

Pushgateway 主要用於收集一些短期的 jobs，由於這類 jobs 存在時間較短，可能在 Prometheus 來 Pull 之前就消失了。所以先短期放在 pushgateway,之後 prometheus 會來拉！

#### 在 k8s 或者ＶＭ上部署跟拿資料邏輯跟方式

基本邏輯都是要有 exporter 這個服務去拿資料,prometheus 去拿資料.

在 VM 上,可以透過

- docker 起 exporter

- 背景服務
- cron

在 k8s 上,可以透過

- sidecar container: 把 exporter 作為 sidecar container 放在同一個 pod 裏面,簡化配置
- daemonset: 用於監控節點級別的狀況
- CRD: 動態部署 exporter

### service discovery(how to find prometheus target)

prometheus server 要怎麼找到 exporter?

- 靜態配置：把 exporter 的位置寫死
- 文件發現：定期讀取目標文件,更新監控目標列表
- k8s 服務發現:配合 k8s 的 API 去發現跟監控服務跟 pod.

### 數據存放

各個 Prometheus target 拿來的資訊,透過 pull metrics 方式把資料放到時序資料庫

#### 時序數據庫跟語法

相對於 zabbix 之類會把資料放在 mysql 這類關聯資料庫,prometheus
是把資料放在時間序列資料庫(TSDB),會以時間為索引建立表格,再以時間範圍做查詢時相對於關聯數據庫能更高效查詢資料,使用 PromQL 語法,透過 UI 或者 API 做查詢.

### Data visualization and export

可以透過 prometheys web UI, Grafana 做資料匯出(使用 PromQL 查詢)跟 UI 呈現,也可以使用 api 做查詢

### 告警(alerting)and 通知(webhook)

alert manager 是 prometheus 的其中一個 block,可以設定當達到設定的閾值時向你的 webhook 服務發送 POST,當 webhook 收到請求之後會做對應的通知 ex.telegran, 或者會觸發另外的腳本執行特定任務！

## installation

demo 安裝 exporter push gateway 資料庫 pmm granfa 可視化 service discovery 有空就接去 gke

### install prometheus server

- 到[官網](https://prometheus.io/download)下載安裝檔案

```
wget https://github.com/prometheus/prometheus/releases/download/v2.44.0/prometheus-2.44.0.linux-amd64.tar.gz
tar xvfz prometheus-*.tar.gz
```

2. 執行 prometheus server

```
cd prometheus-2.44.0.linux-amd64/
./prometheus --config.file=prometheus.yml
```

3. (optional)也可以用 docker 起
   官網對於用哪個起的意見是他們都整合很好,都可以用！

```
docker run -d -p 9090:9090 prom/prometheus
```

如果要掛載 config

```
docker run \
    -p 9090:9090 \
    -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml \
    prom/prometheus
```

```
# 可以用docker inspect看`Args`的value,裡面會寫預設掛的config位置
"Args": [
    "--config.file=/etc/prometheus/prometheus.yml",
    "--storage.tsdb.path=/prometheus",
    "--web.console.libraries=/usr/share/prometheus/console_libraries",
    "--web.console.templates=/usr/share/prometheus/consoles"
],
```

### install grafana

主要看[官網這篇](https://grafana.com/docs/grafana/latest/setup-grafana/installation/debian/),這是 for ubuntu

```
# To install required packages and download the Grafana repository signing key, run the following commands:
sudo apt-get install -y apt-transport-https
sudo apt-get install -y software-properties-common wget
sudo wget -q -O /usr/share/keyrings/grafana.key https://apt.grafana.com/gpg.key

# To add a repository for stable releases, run the following command:
echo "deb [signed-by=/usr/share/keyrings/grafana.key] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list

# To add a repository for beta releases, run the following command:
echo "deb [signed-by=/usr/share/keyrings/grafana.key] https://apt.grafana.com beta main" | sudo tee -a /etc/apt/sources.list.d/grafana.list

# After you add the repository, run the following commands to install the OSS or Enterprise release:
# Update the list of available packages
sudo apt-get update

# Install the latest OSS release:
sudo apt-get install grafana

# Install the latest Enterprise release:
sudo apt-get install grafana-enterprise
```

- (optional)用 docker 起

```
docker run -d -p 3000:3000 grafana/grafana
```

### 小結

以上都是簡易安裝的方式,進階比較安全建立要區分起服務的使用者等,可以參考[digtial ocean 的這篇](https://www.digitalocean.com/community/tutorials/how-to-install-prometheus-on-ubuntu-16-04)

## prometheus server 資料夾結構

```
.
├── LICENSE
├── NOTICE
├── console_libraries
│   ├── menu.lib
│   └── prom.lib
├── consoles
│   ├── index.html.example
│   ├── node-cpu.html
│   ├── node-disk.html
│   ├── node-overview.html
│   ├── node.html
│   ├── prometheus-overview.html
│   └── prometheus.html
├── data
│   ├── 01H3440QX5TEVMAPKS03Q0MZPC
│   │   ├── chunks
│   │   │   └── 000001
│   │   ├── index
│   │   ├── meta.json
│   │   └── tombstones #data內容省略
├── prometheus
├── prometheus.yml
└── promtool
```

- console 系列放 web template 相關

```
├── console_libraries
│   ├── menu.lib
│   └── prom.lib
├── consoles
│   ├── index.html.example
│   ├── node-cpu.html
│   ├── node-disk.html
│   ├── node-overview.html
│   ├── node.html
│   ├── prometheus-overview.html
│   └── prometheus.html
```

- data 就是 tsdb 存放的資料的地方,pull 來的資料會在這
- prometheus.yml 是設定檔
- prometheus 程式執行檔案
- promtool 設定進階項目

## 資料模型

prometheus 的資料是以時間序列的形式保存,每個時間序列會由以下元素作組成: Metrics Name(指標), Labels(標籤).

你可以用內建的 Metrics 也可以自建的 Metrics,內建的 metrics, 像是你要查詢某機器的硬碟狀態,可以用 node exporter 去收集資料別做資料格式轉換及匯出,透過 node exporter 提供的 metric(ex.看記憶體的 node_filesystem_avail_bytes)去看機器記憶體跟其他硬體狀態.

那 labels 是啥？ 它可以用來表示時間序列的不同維度,好,這句話很難懂,但你可以把它當作是 function 的不同參數,透過提供參數就可以拿到不同的結果,例如.你要查/var 掛載的硬碟跟/掛載的硬碟(假設這兩者 mount 硬碟不同),這樣當你用 node_filesystem_avail_bytes 這個去查詢時就要註明 ex.
node_filesystem_avail_bytes{mountpoint="/",fstype!="rootfs"} 去敘述你要抓的硬碟！

不同維度組合齊來就對得到樣本,所以 lables 越多,你會有越多可查詢的樣本

以下統整前述：
`Metrics`:一個指標,要如何取值需要配合 labels
`lables`:是時間序列的不同維度,也可以說是 Metrics 的參數
`樣本`: Metrics 會有很多參數,各個參數會組成不同維度，所以時間序列會有許多不同維度資料,而樣本就是這些 labes 排列組合後的東西！ex. `http_request_total{method="Get"}`這樣就是一個樣本
`格式`: `<metric name>{<label name>=<label value>,...}`

### 資料查詢 promQL 語法

查詢格式
`<metric name>{<label name>=<label value>, ...}`

## prometheus 設定

[官網設定檔教學](https://prometheus.io/docs/prometheus/latest/configuration/configuration/),主要要知道的項目是

1. 有使用 command-line 去設定例如：data 存放位置,佔用硬碟跟記憶體量等.
2. config 檔案設定所有抓取的機器跟設定,要指定 config 位置要帶
   `--config.file`這個 flag.

### Recording rules

快速檢查設定檔案格式是否有錯

```
promtool check rules /path/to/example.rules.yml
```

而錄製規則（Recording rules）允許您預先計算頻繁需要或計算成本高昂的表達式，並將其結果保存為一組新的時間序列。

### Alerting rules

格式範例

```
groups:
- name: example
  rules:
  - alert: HighRequestLatency
    expr: job:request_latency_seconds:mean5m{job="myjob"} > 0.5
    for: 10m
    labels:
      severity: page
    annotations:
      summary: High request latency
```

要建立告警要透過設定 alerting rules,以上的設定是做名為 myjob 的作業,當平均延遲在 5 分鐘內達到 0.5 秒以上,且維持 10 分鐘,就會報 page 等級告警,並提示 high request latency

## exporter 設定

即以 Client Library 開發的 HTTP server,但是屬於已經開發有很多內建插件,例如:監控硬體效能,網路連線品質等！

### 常用 exporter

[node_exporter](https://github.com/prometheus/node_exporter)預設 9100 port 是 prometheus 裡最常使用的,具有很多種 collector 用以提供各 metrics.

#### how to install node exporter

```
curl -OL  https://github.com/prometheus/node_exporter/releases/download/v1.6.0/node_exporter-1.6.0.linux-amd64.tar.gz
tar xvfz node_exporter-*.*-amd64.tar.gz
cd node_exporter-*.*-amd64
./node_exporter
```

test

```
curl http://localhost:9100/metrics
```

#### how to start of disable some collector by flag

```
# To see all available configuration flags:
./node_exporter -h
# start or disable some flag, command look like this
./node_exporter <flags>
# how to start collector with disables flag
node_exporter --no-collector.ENTER-THE-NAME-OF-COLLECTOR
# verify the exporter is running by checking metrics endpoint to see exported metrics. like
curl http://urhostnameORip:9100/metrics
```

### 自建 exporter

如果要監控的資料不在官方已提供的 exporter,就需要自己用 client library 寫監控項目,例如:如果要監控你後端路由的連入次數,就需要把監控次數的 code 給你原本 api server 的 code 寫在一起！[官網範例](https://prometheus.io/docs/tutorials/instrumenting_http_server_in_go/)

## grafana 基本 dashboard 設定

他有提供內建的 dashboard,裡面會有一堆寫好的內建 query 項目,可以自己去改適合的圖表呈現形式.

Q.目前問題在不知道怎麼用 group 跟 hostname 做查詢設定?
這個應該看 variable 設定以及 prometheus 設定檔案就會比較好理解！

### 如何接到自定義 exporter?

Q.因為內建的 exporter 優點在會幫你把 query 寫好,所以使用自訂義的,理論上就要定義數值然後做 query?

/etc/systemd/system/node_exporter.service
/etc/sysconfig/
/home/prometheus/

```jsx title="cert-dockerfile"
# 使用 Python 官方镜像作为基础镜像
FROM python:3.10-slim

# 设置工作目录
WORKDIR /app

# 复制 Pipfile 和 Pipfile.lock 到工作目录
COPY ./requirements.txt /app/requirements.txt

# 安装依赖项
RUN  pip3 install -r requirements.txt
RUN groupadd  appgroup && useradd app -G appgroup && \
    chown -R app:appgroup /app
# 复制应用程序代码到工作目录
COPY . .

# 暴露端口
EXPOSE 9101

# 运行应用程序
CMD ["python3","main.py"]
```

run 的時候把憑證資料夾掛到指定位置. Q:這樣新放的應該也會自動抓吧

```
docker run -d -p 9101:9101   -v /home/devops/certs/:/app/http_certs-main/ urimage:vx
```

### alertmanager 設定

[參考這篇](https://grafana.com/blog/2020/02/25/step-by-step-guide-to-setting-up-prometheus-alertmanager-with-slack-pagerduty-and-gmail/)
