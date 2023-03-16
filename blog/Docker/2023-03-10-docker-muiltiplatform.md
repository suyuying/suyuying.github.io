---
title: multiplatform build - docker buildx指令
description: docker 支援多平台image的build指令,Docker Buildx 是 Docker 官方提供的一個命令行工具，用於通過 Dockerfile 构建 Docker 映像。它的主要特點是可以跨平臺構建 Docker 映像，並支持多種 CPU 架構（如 x86、ARM、IBM Power 等），是一個用來建立和管理 multi-arch Docker image 的工具。
authors: suyuying
tags: [docker]
---

## 基本介紹

:::danger
如果不支援多平台，就會出現在 arm build，然後在 amd deploy 失敗，上網查不到原因的問題。
:::

Docker Buildx 是 Docker 官方提供的一個命令行工具，用於通過 Dockerfile 构建 Docker 映像。它的主要特點是可以跨平臺構建 Docker 映像，並支持多種 CPU 架構（如 x86、ARM、IBM Power 等），是一個用來建立和管理 multi-arch Docker image 的工具。

:::info
docker buildx 的單位是 node，跟 docker context 不同，前者是建立影像的主機，可以使用多個節點來加速 Docker 映像的建立過程，後者則是用來管理 Docker 主機和 Docker registry 的機制，定義了一個或多個 Docker 主機和 Docker registry 的設定。

:::

以下是使用 Docker Buildx 構建 Docker 映像的基本步驟：

## 1. 啟用 multi-arch 支援

要使用 `docker buildx` 建立 multi-arch Docker image，必須先啟用 multi-arch 支援(Docker Desktop 預配置了 binfmt_misc 對其他平台的支持，可以忽略此指令)。可以使用以下指令啟用 multi-arch 支援：

```
docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
```

## 2. 建立 builder(node)

要使用 `docker buildx` 建立 multi-arch Docker image，必須先建立一個 builder。使用以下指令建立 builder：

```
docker buildx create --name mybuilder
```

## 3. 設定 builder

建立 builder 後，必須將 builder 設定為目前使用的 builder。使用以下指令設定 builder：

```
docker buildx use mybuilder
```

## 4. 建立 Dockerfile

接下來，建立一個 Dockerfile，並在其中指定要建立的 Docker image。例如，在 Dockerfile 中可以指定要建立的 image 為 `ubuntu:latest`，並在其中安裝一些軟體套件：

```
FROM --platform=$TARGETPLATFORM ubuntu:latest

RUN apt-get update && \\
    apt-get install -y software-properties-common && \\
    add-apt-repository -y ppa:nginx/stable && \\
    apt-get update && \\
    apt-get install -y nginx
```

## 5. 建立 multi-arch Docker image

建立 Dockerfile 後，可以使用以下指令建立 multi-arch Docker image：

```
docker buildx build --platform linux/arm/v7 -t myimage:latest --load .
```

在上面的命令中，`--platform` 參數指定了要構建的 CPU 架構，`-t` 參數指定了映像的標籤，`.` 表示當前目錄是 Dockerfile 所在的目錄。

--load 相當於`--output=type=docker` 沒有指定會出現 warning

```
WARN[0000] No output specified for docker-container driver. Build result will only remain in the build cache. To push result image into registry use --push or to load image into docker use --load
```

--push 遠端 registry 相當於`--output=type=registry`

:::info
https://github.com/docker/buildx/issues/59
2023/3/9 使用--platform 配合--load，不能支援多平台，一次一個平台，否則會報錯
--push 支援一次多平台 image

```
error: docker exporter does not currently support exporting manifest lists
```

:::

建立完成後，可以使用以下指令查看建立的 Docker image：

```
docker images myimage
```

推送 Docker 映像：

```
$ docker push myimage:latest
```

以上就是使用 Docker Buildx 構建 Docker 映像的基本步驟。使用 Docker Buildx 可以讓我們更方便地構建跨平臺的 Docker 映像，提高了開發效率。

:::info
`docker buildx rm docker-test` 刪除

`docker buildx use docker-test`切換
:::

## docker buildx create --name my-node 是建立節點嗎？

是的，`docker buildx create --name my-node` 指令會建立一個名為 `my-node` 的節點。節點是用來建立 Docker 映像的主機，可以使用多個節點來加速 Docker 映像的建立過程，或者建立不同平台的 Docker 映像。

建立節點時，可以使用 `--driver` 選項指定節點的驅動程式，例如 `docker-container` 或 `docker`。驅動程式還可以是其他第三方平台，例如 AWS、Azure 或 Google Cloud。

在建立節點時，可以指定節點的名稱、驅動程式、驅動程式選項、Docker 映像等資訊。例如，以下是建立一個名為 `my-node` 的節點，使用 Docker 容器作為驅動程式，使用 `moby/buildkit:v0.8.1` 作為 Docker 映像的示範指令：

```
docker buildx create --name my-node --driver docker-container --driver-opt image=moby/buildkit:v0.8.1

```

建立節點後，可以使用 `docker buildx ls` 指令列出所有節點。建立 Docker 映像時，可以使用 `--builder` 選項指定要使用的節點。例如：

```
docker buildx build --builder my-node --platform linux/amd64 -t myimage:latest .

```

可以使用名為 my-node 的節點建立 Docker 映像，並指定要建立的平台為 linux/amd64。
