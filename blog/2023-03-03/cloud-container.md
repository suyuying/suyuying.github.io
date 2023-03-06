---
title: deploy my backend server
description: 整理網路提供雲端資源，部署服務，並將自己的code做到CICD部署
authors: suyuying
tags: [cloud]
---

<!--
需求：
免費的 server 跟 db，
server 部分免費滿多的，但都 12 個月試用居多：
db 基本上就沒有了，再找找看，不行就先用 squlite 頂著
免費的有 heroku clear db 不過他只有 5MB 可以用...... 所以目前還是乖乖用 squlite 吧
規劃：
1 台 api server(fastapi) + db 前端用 github page 託管頁面打 api server

資料收集: 1.三家知名的雲服務廠商都有提供免費額度，這邊先提供 azure 方面資訊
https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree 2.因為目的只是要單獨要做 api server，所以選項變很多了，以下圖為例。
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./azure-quick-start.png").default}
      alt="azure-quick-start.png"
    />
  </div>
</>
選擇 Azure 計算服務時，請務必考慮您正在運行的工作負載類型以及支持它所需的資源。 例如，如果您正在運行 Web 應用程序，那麼 Azure App Service 可能是最佳選擇。這邊的web app指的是像flask or django這類使用server side render建立的網站，因為我只是要部署fastapi的api server所以這個對我來說功能太多。 如果你需要更好地控制你的環境，那麼 Azure 虛擬機可能是更好的選擇，因為只是要運行api server沒要拿來做其他事，所以管理VM也不考慮，這時候就跑去查了FaaS的Serverless APIs with Azure Functions，不過他需要依據Azure規定格式去建立restful api,所以先pass以後再研究。 接著研究使用運行容器化應用程序，那麼 Azure Kubernetes 服務或 Azure 容器實例可能是最佳選擇！使用container優點是在可以把服務部署簡單化，不用在那邊git更版然後起服務，讓部署更迅速。那使用k8s的優點就是，可以透過集群管理node，在流量衝高或附載到達設定值時，自動在不同node間擴展，可以有效利用node資源，簡言之，如果你公司很有錢，那就用ＶＭ切分服務就好，如果開始想省成本了，那用k8s去把多個友遊戲做成不同pod然後透過k8s管理跟監控，極大化的運用VM的硬體資源。所以，容器化應用程序配合k8s管理跟cicd部署，是最符合懶又想省成本的人用的，那Azure Kubernetes Service (AKS)跟 Azure Container Instances (ACI)如何決定，對於大多數生產工作負載，Azure Kubernetes 服務 (AKS) 通常優於 Azure 容器實例 (ACI)。 AKS 提供了一個託管的 Kubernetes 環境，使您可以快速部署和管理容器化應用程序，而 ACI 是一個無服務器環境，最適合短期、無狀態的工作負載。 AKS 提供了比 ACI 更多的功能和靈活性，包括根據需求向上或向下擴展的能力、自動修補和升級，以及在單個 pod 中運行多個容器的能力。 此外，AKS 還提供了 ACI 所不具備的內置監控和日誌記錄功能。以上，是的，可以使用 Azure Kubernetes 服務 (AKS) 構建 RESTful API 服務器。 AKS 提供可用於部署和管理容器化應用程序的託管 Kubernetes 環境。 這使其成為構建和部署 RESTful API 服務器的理想平台。 此外，AKS 還提供自動縮放、監視和日誌記錄等功能，可幫助確保 API 服務器的性能和可靠性。

最後，如果您需要運行高性能計算工作負載，那麼 Azure Batch 或 Azure CycleCloud 可能是最佳選擇。
目標：
code 更新以後，透過 CICD(git hub action or azure devops)部署 api server and github page，然後測試

部署流程： 1.先來做 AKS 教學吧，之後再用自己的 app 在實作一次
what is Azure Resource group?
Azure Resource groups are a way to manage and organize related Azure resources. They allow you to group related resources such as virtual machines, storage accounts, databases, and other services into a single unit. This makes it easier to manage, monitor, and deploy resources in Azure. Resource groups also provide a way to control access to the resources within them.

Kubernetes 是一個快速發展中的平台，以容器為基礎，使用 Kubernetes 來協調和管理這些應用程式元件的可用性。

K8s 元件說明︱Container、Pod、Node，以後端程式整套需要 mysql,redis,api 服務，專門， mysql 數據的後台統計 服務 為背景
what is container?
通常一個功能一個 container（當然你要全硬塞同個也可以，不過不建議），如果你不用 cloud db，那麼上面的背景情況，會有 4 個 container。
What is pod in Kubernetes?
是 k8s 最小執行單位，舉例來說，你的整套服務共四個 container 下來算是一個 pod。
what is node in Kubernetes?
一個 node 代表一台 VM
由 Worker Node 跟 Control Plane 組成
1.Worker Node(部署 pod 的 vm，內部還可細分為 kubelet、kube-proxy 及 Container Runtime 3 個元件。) 2.Control Plane 負責各個 Worker Node 的管理

what is Kubernetes cluster?
因為高可用性跟擴展所以會有多個 nodes，所以就有了 cluster。
由 control panels 跟 nodes 組成。
Azure k8s?
直接幫你做好免費的控制平面了。透過 control plane 管理 k8s cluster。
control plane 不用付錢，但會吃 node 的資源。

官網 lab web app service:
基本上造著官網做沒遇到問題，但自己的 code 會一直遇到
didn't respond to HTTP pings on port: 8080, failing site start. See container logs for debugging.
詳細看其他人的解釋後，也不懂為啥 Dokcerfile 有寫 expose 然後設定也有設定 WEBSITES_PORT，還是依樣不會過，因為這個坑暫時解不了就先用其他東西試試吧
https://www.cnblogs.com/lulight/p/15257746.html

<!-- Kubernetes 著重於應用程式工作負載，而不是基礎結構元件。
核心 Kubernetes 基礎結構元件：
控制平面：提供核心 Kubernetes 服務和應用程式工作負載的協調流程。（此控制平面會免費以受控 Azure 資源的形式提供，使用者無需加以管理。 您只需支付連結至 AKS 叢集的節點費用）
與控制平面之間的互動可透過 Kubernetes API 進行，例如 kubectl 或 Kubernetes 儀表板。
節點：執行您的應用程式工作負載。（可以定義節點的數目和大小，而 Azure 平台會設定控制平面與節點之間的安全通訊）
節點是可執行 Kubernetes 節點元件和容器執行階段的 Azure 虛擬機器 (VM)。
節點的 Azure VM 大小會定義 CPU、記憶體、大小，以及可用的儲存體類型 (，例如高效能 SSD 或一般 HDD)
您叢集節點的 VM 映射是以 Ubuntu Linux
AKS 會使用節點資源來協助節點作為叢集的一部分運作。 此使用量可能會讓節點的總資源與 AKS 中可配置的資源不一致。 設定使用者部署 Pod 的要求和限制時，請記住這項資訊。
節點集區。 -->

<!-- 工作負載資源：
Pod
deployments
集合

A pod is the smallest execution unit in Kubernetes. A pod encapsulates one or more applications. Pods are ephemeral by nature, if a pod (or the node it executes on) fails, Kubernetes can automatically create a new replica of that pod to continue operations. --> -->
