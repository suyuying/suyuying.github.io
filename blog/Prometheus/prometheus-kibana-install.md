---
title: Prometheus跟kibana建置,以及基礎介紹
description: Prometheus及串接kibana基礎介紹跟使用之後的感想.
authors: suyuying
image: https://github.com/suyuying.png
tags: [Prometheus, Grafana]
---
## prometheus

相較於Zabbix系統使用mysql之類的關聯式資料庫,prometheus使用是的TSDB時序資料庫,因其主要功能聚焦在看log跟分析數據,並不需要對不同表格做關聯.採用tsdb的prometheus最最直觀的差別就是

1. 使用 TSDB，它對系統資源的需求相對較低，這避免了 MySQL 等關聯式資料庫可能對系統資源的大量消耗
2. 由於 TSDB 專為時間序列數據設計，它可以更有效地索引和查詢此類數據，使 Prometheus 的查詢速度比使用傳統關聯式資料庫的系統更快
在我自己的測試環境,用一台free tier的機器運行prometheus,也可以跑很順！

### prometheus設定

相對於Zabbix把一些權限設定跟通知群組這些設定藏在UI藏得到處都是(ex.Zabbix那篇設定telegram),讓新手或者久沒操作的人很難找,如果之後有需要建一台新的zabbix,那也是很神奇的折磨,那用Prometheus的優點,就在於它所有東西都在設定檔內,無論設定使用者,設定告警轉發這些都是在設定檔內的,個人認為在管理上方便管理！

### prometheus安裝

建立使用者

```bash
useradd --no-create-home --shell /bin/false prometheus
```

建立之料夾並授予使用者

```bash
mkdir -p /etc/prometheus /var/lib/prometheus
chown -R prometheus:prometheus /etc/prometheus /var/lib/prometheus
```

下載prometheus

```bash
wget https://github.com/prometheus/prometheus/releases/download/v2.44.0/prometheus-2.44.0.linux-amd64.tar.gz
tar xvfz prometheus-*.tar.gz

mv prometheus-2.44.0.linux-amd64 prometheuspackage
chown -R prometheus:prometheus prometheuspackage
```

搬移資料到目的

```bash
mv prometheuspackage/{console_libraries,consoles,prometheus.yml} /etc/prometheus/
mv prometheuspackage/{prometheus,promtool} /usr/local/bin
```

建立開機service

```bash
cat << EOF | sudo tee /usr/lib/systemd/system/prometheus.service
[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
ExecStart=/usr/local/bin/prometheus \
--config.file /etc/prometheus/prometheus.yml \
--storage.tsdb.path /var/lib/prometheus/ \
--web.console.templates=/etc/prometheus/consoles \
--web.console.libraries=/etc/prometheus/console_libraries \
--web.enable-admin-api \
--storage.tsdb.retention.time=30d \
--web.enable-lifecycle \

[Install]
WantedBy=multi-user.target
EOF

systemctl start prometheus
systemctl enable prometheus
```

完整版

```bash
#!/bin/bash
useradd --no-create-home --shell /bin/false prometheus
mkdir -p /etc/prometheus
mkdir -p /var/lib/prometheus
chown prometheus:prometheus /var/lib/prometheus
chown prometheus:prometheus /etc/prometheus
wget https://github.com/prometheus/prometheus/releases/download/v2.44.0/prometheus-2.44.0.linux-amd64.tar.gz
tar xvfz prometheus-*.tar.gz

mv prometheus-2.44.0.linux-amd64 prometheuspackage
chown -R prometheus:prometheus prometheuspackage/
cd prometheuspackage
mv console_libraries/ /etc/prometheus/
mv consoles/ /etc/prometheus/
mv prometheus.yml /etc/prometheus/
mv prometheus /usr/local/bin
mv promtool /usr/local/bin
cat << EOF | sudo tee /usr/lib/systemd/system/prometheus.service
[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
ExecStart=/usr/local/bin/prometheus \
--config.file /etc/prometheus/prometheus.yml \
--storage.tsdb.path /var/lib/prometheus/ \
--web.console.templates=/etc/prometheus/consoles \
--web.console.libraries=/etc/prometheus/console_libraries \
--web.enable-admin-api \
--storage.tsdb.retention.time=30d \
--web.enable-lifecycle \

[Install]
WantedBy=multi-user.target
EOF

systemctl start prometheus
systemctl enable prometheus
```

### 安裝node_exporter

相較於Zabbix有推拉模式,在Prometheus世界裡面基本上都是prometheus server主動去找prometheus target拉資料,也就是zabbix的主動模式！
那他到底怎麼拉資料？ prometheus target透過官方exporter,或者自建的exporter 安裝在自己身上,並開啟特定port讓prometheus server來撈資料.
其中最常用的是node_exporter! 就是收集ram,cpu,disk這些最基本！

```bash
#!/bin/bash
# 安装Node Exporter
sudo useradd -rs /bin/false node_exporter
curl -LO https://github.com/prometheus/node_exporter/releases/download/v1.2.0/node_exporter-1.2.0.linux-amd64.tar.gz
tar xvf node_exporter-1.2.0.linux-amd64.tar.gz
sudo cp node_exporter-1.2.0.linux-amd64/node_exporter /usr/local/bin/
sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter
rm -rf node_exporter-1.2.0.linux-amd64.tar.gz node_exporter-1.2.0.linux-amd64

# 创建Node Exporter服务文件
cat << EOF | sudo tee /etc/systemd/system/node_exporter.service
[Unit]
Description=Node Exporter
After=network.target

[Service]
User=node_exporter
ExecStart=/usr/local/bin/node_exporter

[Install]
WantedBy=default.target
EOF

# 启动Node Exporter服务
sudo systemctl daemon-reload
sudo systemctl start node_exporter
sudo systemctl enable node_exporter
```

## kibana
