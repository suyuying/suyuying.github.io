---
title: Introduction to Azure container service, and deploy my backend server in azure
description: 使用azure雲端資源，並部署服務
authors: suyuying
tags: [cloud]
---

:::tip
如果提供的資訊有錯，請用 comment 系統告知～
:::

## Basic demand

:::info
需求： 1.免費的 server 跟 db，單純掛流量很小，沒有運算密集跟吃記憶體的程式。 2.使用 CICD 配合 container 部署 簡化布版流程

:::

server 部分免費滿多的，但都 12 個月試用居多，最後就先挑了 azure，之後會補上 gcp 、 AWS。

db 基本上就沒有了，免費的有 heroku clear db 不過他只有 5MB 可以用...... 所以目前還是乖乖用 squlite 吧

<!--truncate-->

資料收集:

1.三家知名的雲服務廠商都有提供免費額度，這邊提供 azure 方面資訊
https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree

2.因為目的只是要單獨要做 api server，所以在 web app, VM,container-based app 之間做選擇。
因為無其他用途，所以不考慮 VM，而又要用到 container 所以最後挑 Deploy and run a container-based app 裡面
提供的三種服務 Azure Kubernetes Service(AKS)、Azure Container Instances(ACI)、Azure Container Apps
再做選擇。
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./azure-quick-start.png").default}
      alt="azure-quick-start.png"
    />
  </div>
</>

Azure 官網也有提供一個[判斷樹](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree)
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./compute-choices.png").default}
      alt="azure-quick-start.png"
    />
  </div>
</>

## Azure container service

基本上 Azure 雲服務，跟 container 有關的就是 Azure Container Instances,Azure Kubernetes Service,
Azure Container Apps

### Azure Kubernetes Service(AKS)

AKS 基本上就是跟 azure 租多台 VM(看你的 node 樹），然後使用 mastet node 管理 node cluster，做到提高 HA，也達到提高機器效能使用率

:::info
以小型的後端程式為例，整套需要 mysql,redis,api 服務，後台統計服務 為背景
:::

#### K8s 元件說明

Container、Pod、Node。

what is container?
通常一個功能一個 container（當然你要全硬塞同個也可以，不過不建議），如果你不用 cloud db，那麼以上面 info 的背景情況，會有 4 個 container。

What is pod in Kubernetes?
是 k8s 最小執行單位，舉例來說，你的整套服務共四個 container 下來算是一個 pod。

what is node in Kubernetes? 一個 node 代表一台 VM
由 Worker Node 跟 Control Plane 組成。
Worker Node(部署 pod 的 vm，內部還可細分為 kubelet、kube-proxy 及 Container Runtime 3 個元件。)
Control Plane 負責各個 Worker Node 的管理

what is Kubernetes cluster?
因為高可用性跟擴展會有多個 node，所以就有了 cluster。
由 control panels 跟 nodes 組成。

Azure k8s?
直接幫你做好免費的控制平面了。但是要付 VM 的錢，透過 control plane 管理 k8s cluster。
control plane 不用付錢，但會吃 node 的資源。

### Azure Container Instances(ACI)

ACI 就是個雲端 container，拿來執行爬蟲之類的程式，他不支援擴展，附載平衡及憑證驗證。
基本上創完，Azure 會給你一組的連入 ip

### Azure Container Apps

相較於 ACI，提供了 AutoScale,Https 入口，憑證代管，多 container 內部網路溝通等，
[詳細功用連結](https://learn.microsoft.com/en-us/azure/container-apps/overview)

### MyChoice

基本上，只有一個不需要效能的服務，AKS 可以直接砍掉。因為是 api server，且傳的資訊有些需要保密資訊，所以選用
Azure Container Apps。

## Deployment

### 教學網站

[官網教學](https://learn.microsoft.com/en-us/azure/app-service/quickstart-custom-container?pivots=container-linux-vscode&WT.mc_id=UI-AQC&tabs=dotnet)

執行的過程都是依據教學，但 Azure 官網教學好像是有名的照著做做不出來。所以記錄一下遇到的問題。

### 遇到的問題

1. Container xxx didn't respond to HTTP pings on port: 8000, failing site start. See container logs for debugging.

網上查可能原因：

1. Use the EXPOSE instruction in your Dockerfile to expose port 3000.(not useful, azure will scan internally)
2. Use the WEBSITES_PORT app setting with a value of "3000" to expose that port.

以上都不行ＱＡＱ

最後發現是機器的 CPU 架構問題，因為是 m1 底下寫的 code，docker 會用 arm build 版，但一 🥚 部署環境是 azure 的 x86，底層不同服務起不來

解決方法：
將原本 Dockerfile

```
FROM  python:3.11
WORKDIR /code
COPY ./requirment.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
RUN uname -a > /os.txt
COPY ./sql_app /code/app
ENV PORT 80
EXPOSE 80


ENTRYPOINT ["uvicorn", "app.maingog:app", "--host", "0.0.0.0", "--port", "80"]
```

修改成

```
FROM --platform=$TARGETPLATFORM  python:3.11
WORKDIR /code
COPY ./requirment.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
RUN uname -a > /os.txt
COPY ./sql_app /code/app
ENV PORT 80
EXPOSE 80


ENTRYPOINT ["uvicorn", "app.maingog:app", "--host", "0.0.0.0", "--port", "80"]

```

然後再用以下指令推到 azure cotainer registry(請換成自己 acr 的樣子)

```
docker buildx build . --platform linux/arm64,linux/amd64 -t fastapiserver.azurecr.io/fordserver/v1.9 --push
```

之後使用這個 image 時，docker 內建就會幫你判斷是哪個系統，並起服務！

至於，buildx 跟--use 跟 context 這幾個 docker 指令也是第一次遇到，完全不熟，所以之後會再補上
