---
title: Use systemctl to manage service properly and safely
description: 主要邏輯就是會先:`建立系統帳號` -> `限制資料夾權限及owner` -> `建立service設定檔` -> `透過systemctl託管該service`.另外,之前在設定service時候都是設定`Type=simple`,不過自從在rsync設定daemon服務踢到鐵板就知道必須了解差異,如果程式執行的模式是父process產生子process之後就關閉父process,例如:`rsync` daemon程式會產生子process作為主要執行process(同理還有nginx這類服務),就必須用`Type=forking`,否則`systemctl`會把它當作主程式退出,之後就會hang住然後回報failure狀態. `rsync server`的service設定檔如下...

authors: suyuying
tags: [systemctl,linux]
---
以下資訊是當前查詢資訊並比對其他人的做法,列出覺得不錯的設定方式,之後如果發現錯誤或更好的方式會滾動修改!

主要邏輯就是會先: `建立系統帳號` -> `限制資料夾權限及owner` -> `建立service設定檔` -> `透過systemctl託管該service`.

- 建立系統帳號,並不給家目錄且不能登terminal
  
```bash
useradd --no-create-home --shell /bin/false your_target_user
```

- 修改指定資料夾owner給該user,且注意是否要給予可寫權限(這邊以promethues需要寫入的資料庫為例),然後要知道安裝東西後會產生哪些東西,再去分配,如果是用`yum`,`apt`安裝會幫你安排好並設定,如果是上網自己下載的檔案包就需要再自己去分配位置,以及權限!

```bash
chown -R prometheus:prometheus  /var/lib/prometheus
```

- 建立service設定檔

```text title="/usr/lib/systemd/system/prometheus.service"
[Unit]
Description=Monitoring system and time series database
Documentation=https://prometheus.io/docs/introduction/overview/ man:prometheus(1)
After=time-sync.target

[Service]
Type=simple
Restart=on-failure
User=prometheus
Group=prometheus

EnvironmentFile=/etc/default/prometheus
ExecStart=ExecStart=/usr/local/bin/prometheus \
--config.file /etc/prometheus/prometheus.yml \
--storage.tsdb.path /var/lib/prometheus/ \
--web.console.templates=/etc/prometheus/consoles \
--web.console.libraries=/etc/prometheus/console_libraries \
--web.enable-admin-api \
--storage.tsdb.retention.time=30d \
--web.enable-lifecycle \
ExecReload=/bin/kill -HUP $MAINPID
TimeoutStopSec=20s
SendSIGKILL=no
[Install]
WantedBy=multi-user.target 
```

`Type`預設simple,由ExecStart 接的指令啟動服務並常駐在記憶體！

:::tip
之前在設定service時候都是設定`Type=simple`,不過自從在rsync設定daemon服務踢到鐵板就知道必須了解差異,如果程式執行的模式是父process產生子process之後就關閉父process,例如: `rsync` daemon程式會產生子process作為主要執行process(同理還有nginx這類服務),就必須用`Type=forking`,否則`systemctl`會把它當作主程式退出,之後就會hang住然後回報failure狀態. `rsync server`的service設定檔如下.

```text title="/usr/lib/systemd/system/rsyncd.service"
[Unit]
Description=rsyncd Server
After=network.target

[Service]
Type=forking

ExecStart=/bin/rsync  --daemon --config=/etc/rsyncd.conf
TimeoutStopSec=20s


[Install]
WantedBy=multi-user.target
```

至於為啥會try出這段,是因為在把它改為forking就成功了,仔細看服務會發現

```text
    Process: 2740 ExecStart=/usr/bin/rsync --daemon --config=/etc/rsyncd.conf (code=exited, status=0/SUCCE>
   Main PID: 2741 (rsync)
```

也就是PID不同的部分,所以要用`forking`.

:::

`Restart`此選項決定當服務遭遇錯誤或崩潰時是否自動重新啟動服務。根據設定不同，Systemd 會在不同情況下執行重新啟動。例如，如果設定為 `on-failure`，表示只有在服務失敗時才會自動重啟。

`User` `Group`這個選項確定服務以哪個使用者及群處身份運行。當設定為 `prometheus` 時，服務將以 `prometheus` 使用者的身份運行。

`EnvironmentFile`這個選項用來指定環境變數的設定檔位置。設定檔內包含多個環境變數的定義，這些變數將在服務運行時生效。可以拿來放$ARGS

`ExecStart`這個選項確定啟動服務所需的命令和參數。當 Systemd 啟動這個服務時，會執行指定的命令。

`ExecReload`此選項定義重新載入服務所需的命令。當 Systemd 收到重新載入的信號（通常是 `systemctl reload` 命令），會執行指定的命令。因為prometheus提供熱加載可以透過`kill HUP PID`,但不代表其他service有～

`TimeoutStopSec`若這個服務在啟動或者是關閉時，因為某些緣故導致無法順利『正常啟動或正常結束』的情況下，則我們要等多久才會使用SIGKILL信號殺掉剩下進程！

`SendSIGKILL`這個選項確定停止服務時是否嘗試使用 SIGKILL 信號。如果設定為 `no`，Systemd 將儘可能避免使用 SIGKILL 信號，以允許服務有時間進行清理操作。


:::info
參考資料：

1. [鳥哥-認識系統服務](https://linux.vbird.org/linux_basic/centos7/0560daemons.php#systemd_cfg)
2. [systemd 的一些小技巧](https://www.jianshu.com/p/1a066df2bc19)

:::