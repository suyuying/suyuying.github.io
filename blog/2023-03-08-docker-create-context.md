---
title: docker context指令
description: docker 支援多個不同remote docker deamon管理
authors: suyuying
tags: [docker]
---

`docker create context` 是用來建立一個新的 context，以指向一個 remote Docker daemon，用於管理 Docker 主機和 Docker registry 的機制。

可以使用 `docker context use` 指令來切換 context，切換完成後即可使用 docker 指令操作 remote Docker daemon。如果使用雲端 container，例如 azure web container service，就可以用這個指令去管理雲端 container。包含新建 刪除都可以使用，所以不要太開心一次起一大堆雲端 container 這樣會被 charging 到爆。
:::info
如果有用到 docker buildx 可能會把 docker context 跟 docker buildx create --name 搞混，
兩個是不同的，[可以看這裡](./docker-muiltiplatform%20copy#docker-buildx-create---name-my-node-%E6%98%AF%E5%BB%BA%E7%AB%8B%E7%AF%80%E9%BB%9E%E5%97%8E])
:::

以下是 `docker create context` 指令的教學：

使用 `docker create context` 指令可以建立一個新的 context，用來指向一個 remote Docker daemon。以下是指令的詳細說明：

```
docker context create CONTEXT_NAME --docker "host=REMOTE_DOCKER_HOST" --description "CONTEXT_DESCRIPTION"
```

- `CONTEXT_NAME`: 指定新建立的 context 的名稱。
- `REMOTE_DOCKER_HOST`: 指定 remote Docker daemon 的位置，可以是一個 IP 或是一個 domain name。
- `CONTEXT_DESCRIPTION`: 可以加入對 context 的描述，方便管理。

例如，以下指令建立一個名為 `mycontext` 的 context，指向一個 remote Docker daemon，並加入描述：

```
docker context create mycontext --docker "host=myremotehost:2376" --description "My remote Docker daemon"
```

建立完成後，可以使用 `docker context use` 指令來切換 context：

```
docker context use mycontext
```
