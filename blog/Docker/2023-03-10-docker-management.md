---
title: docker manage logs in Docker to prevent service failure caused by excessively large container logs
description: 當遇到container log太大 造成服務掛掉的排查方向，以及如何避免。因為 docker 運行過程本身 log 也會佔用硬碟資源，為了不讓這個 log 過度膨脹，可以用以下方式限制
authors: suyuying
image: https://github.com/suyuying.png
tags: [docker]
---

## volume of docker

以前都在弄自己的小專案，只要東西跑得起來就好，沒想過會遇過因為硬碟吃滿導致 container 服務掛掉的問題。

docker 掛載 volume 會有三種方式，綁定掛載（Bind Mount），命名卷（Named Volume），匿名卷（Anonymous Volume），前兩種在 container 被刪除時不會被刪，會永久保存，docker 內沒被掛載或使用 Anonymous Volume 則都會被刪除。

:::tip

1. docker logs 資料包含哪些？

Docker 會捕捉所有容器的標准輸出（和標准錯誤），並以 JSON 格式將其寫入文件中。 JSON 格式將每行注釋為其源（stdout 或 stderr）和其時間戳。 每個日誌文件僅包含有關一個容器的信息。

2. docker logs 什麼時候會被刪除?
   當 container 被 rm -f 掉的時候 (單純 restart 還會在)!如果要刪除 container 又想保留 docker log,請用`docker logs CONTAINER_ID > container.log` .

   如果是一般非 docker log,要把打掛載出來

```
    # Copy the logs out to the host
docker copy CONTAINER_ID:/path/to/your/log_file /host/path/to/store

# Mount a directory for them
docker run -d \
-v /host/path/to/store/logs:/container/path/stored/logs \
your-image
```

:::

### 如何減少不必要的硬體佔用

因為 docker 運行過程本身 log 也會佔用硬碟資源，為了不讓這個 log 過度膨脹，可以用以下方式限制

1. 修改 docker 設定檔

```jsx title="/etc/docker/daemon.json"
{
  "log-driver":"json-file",
  "log-opts": {"max-size":"500m", "max-file":"3"}
}

`systemctl daemon-reload`
`systemctl restart docker
`
```

2. 修改 docker-compose.yml

```
services:
  hellow:
    build: .
    container_name: mattermost
    restart: always
    logging:
      driver: "json-file"
      options:
          max-size: "100m"
          max-file: "10"
```

並使用以下指令重啟，一般 restart 不會吃新 config

```
docker-compose -f docker-compose.yml up -d --force-recreate mm
```

:::danger
下這個指令前務必想好是否重要資訊有用 Bind Mount or Named Volume 掛載出來！
:::

3. docker 指令

```
docker run -d --log-opt max-size=1g nginx
```

[官網 log 管理](https://docs.docker.com/config/containers/logging/json-file/)，管理 docker log 方式很多，預設都適用 json-file，設定可已透過修改/etc/docker/daemon.json 並重啟達成。

預設是在同一份檔案，無限大小寫入，透過以上方法，可以限定檔案大小跟可產生檔案數量，當 log 容量到達上限時，Docker 程序將停止寫入該日誌文件，並開始使用新名稱啟動新的日誌文件。默認情況下，新日誌文件將具有與舊日誌文件相同的名稱，但會在末尾添加連續號（例如，access.log.1、access.log.2 等）。

Docker 保留的日誌文件數量由`max-file`選項決定。默認情況下，Docker 將保留最多 1 個日誌文件(要配置`max-size`才會生效)。當達到最大日誌文件數量時，Docker 將開始使用新的日誌數據覆蓋最舊的日誌文件。

（ps:資訊以此[連結](https://docs.docker.com/config/containers/logging/json-file/)為準，設定可能會改變的）

## what should do when you find / or /var are full

:::info
預設 docker 的東西都放在/var/lib/docker 底下

```jsx title="/var/lib/docker"
builder  buildkit  containers  image  network  overlay2  plugins  runtimes  swarm  tmp  trust  volumes
```

可以在該資料夾底下用`du -sh ./*`確認哪個地方吃得異常兇，
並用`docker system df`看資料佔用，如果不用的 image 很多可以清除

`docker image prune --all`

他會刪除所有沒有被 container 使用的 image，警示如下：

WARNING! This will remove all images without at least one container associated to them.
:::

1.  如果當初沒有做任何預防，導致/var 真的爆了，可以優先檢查以下幾項

### 檢查 docker logs 是否佔太兇

其實就是去/var/lib/docker/containers，執行`du -sh ./* `看哪個 container 佔最多資源，然後去看裡面那隻放 docker logs 的檔名為 container-id-json.log 的檔案是否長太大，確認後可以砍掉。

### 檢查 named volume 中存放資訊

其實就是去/var/lib/docker/volumes 底下，看有沒有某個 volume 佔太多資源，然後裡面放的東西可能不重要(例如 nginx log)

### 檢查 image 跟沒用的 container

image 指令:刪除沒有被活動的 container 使用的 image
`docker image prune --all`

container 指令：刪除停止的 container
`docker container prune`

:::info

[Prune unused Docker objects](https://docs.docker.com/config/pruning/)
[限制 Docker 日志大小](https://blog.csdn.net/fishinhouse/article/details/105310948)
:::
