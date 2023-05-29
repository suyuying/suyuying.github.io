---
title: create k8s cluster
description: 列出centos建立k8s cluster過程及遇到的報錯解法RI v1 runtime API is not implemented for endpoint以及docker跟podman安裝衝突解法
authors: suyuying
image: https://github.com/suyuying.png
tags: [k8s, docker]
---

## 安裝 kubeadm 遇到的問題

kubeadm 用於建立和管理叢集的基礎結構，而 kubectl 用於操作和管理叢集中的資源。這兩個工具在 Kubernetes 的部署和管理中扮演著不同的角色,[安裝的官網介紹](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/),

1. 先安裝 docker(這邊是參考官網,也可以用其他種 container)

:::info
因為原本 centos 是內建 podman,但這邊為了符合 k8s 網站的教學所以使用 docker,我自己在安裝 docker 過程會遇到跟 podman 的衝突,像這樣

```
Docker CE Stable - x86_64                                                                                                                    133 kB/s | 3.5 kB     00:00
错误：
 问题 1: problem with installed package podman-docker-3:4.3.1-2.module_el8.8.0+1254+78119b6e.noarch
  - package docker-ce-3:24.0.2-1.el8.x86_64 conflicts with docker provided by podman-docker-3:4.3.1-2.module_el8.8.0+1254+78119b6e.noarch
  - package docker-ce-3:24.0.2-1.el8.x86_64 conflicts with docker provided by podman-docker-3.1.0-0.13.module_el8.5.0+733+9bb5dffa.noarch
  - package docker-ce-3:24.0.2-1.el8.x86_64 conflicts with docker provided by podman-docker-3.3.0-0.15.module_el8.5.0+870+f792de72.noarch
  - package docker-ce-3:24.0.2-1.el8.x86_64 conflicts with docker provided by podman-docker-3.3.0-0.17.module_el8.5.0+874+6db8bee3.noarch
  - package docker-ce-3:24.0.2-1.el8.x86_64 conflicts with docker provided by podman-docker-3.3.0-2.module_el8.5.0+877+1c30e0c9.noarch
```

解法是先移除 podman,並優先使用 docker 的 repo.[安裝在 centos 可以看這篇](https://docs.docker.com/engine/install/centos/)

1. 移除 podman

```
yum remove podman
```

2. 擴展工具集

```
yum install -y yum-utils
```

3. 添加軟體庫

```
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

4. 修改權限,把`/etc/yum.repos.d/docker-ce.repo`加上 priority=10,這樣就不會跟`/etc/yum.repos.d/CentOS-Stream-AppStream.repo`衝突！

```jsx title="/etc/yum.repos.d/docker-ce.repo"
[docker-ce-stable]
name=Docker CE Stable - $basearch
baseurl=https://download.docker.com/linux/centos/8/$basearch/stable
enabled=1
gpgcheck=1
gpgkey=https://download.docker.com/linux/centos/gpg
priority=10
```

5.安裝 docker

```
yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

6.起服務

```
systemctl start docker
```

:::

2. 安裝 kubelet kubeadm kubectl

```
cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-\$basearch
enabled=1
gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
exclude=kubelet kubeadm kubectl
EOF

# Set SELinux in permissive mode (effectively disabling it)
sudo setenforce 0
sudo sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config

sudo yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes

sudo systemctl enable --now kubelet
```

基本上這邊會發現 kubelet 服務報錯無法起來,接著是講解法！

3.  使用`kubeadm init`依然會報錯,這個指令目的是建立 master node(也就是 control plane)，包括 API Server、Controller Manager 和 Scheduler。當您運行 kubeadm init 時，它將生成初始化控制平面所需的配置文件、證書和其他資源。`kubeadm init`報錯如下

```
	[ERROR CRI]: container runtime is not running: output: time="2023-05-29T16:13:25+08:00" level=fatal msg="validate service connection: CRI v1 runtime API is not implemented for endpoint \"unix:///var/run/containerd/containerd.sock\": rpc error: code = Unimplemented desc = unknown service runtime.v1.RuntimeService"
```

以上報錯如何解決

這個問題是因為`/etc/containerd/config.toml`設定有問題的關係
,解法有兩種

- 最簡單解法把/etc/containerd/config.toml 刪掉(可以先備份),這會讓 k8s 使用預設資料

```
rm /etc/containerd/config.toml
```

- 比較複雜解法就要了解 /etc/containerd/config.toml 如何設定,預設是 disabled_plugins

```
disabled_plugins = ["cri"]
```

要改成 enabled_plugins,表示啟用 CRI 插件，因為 k8s 預設使用 CRI(Container Runtime Interface)來管理跟運行容器,如果禁用 CRI 插件或没有指定有效的容器配置，Kubernetes 將會報錯！

```
enabled_plugins = ["cri"]
[plugins."io.containerd.grpc.v1.cri".containerd]
  endpoint = "unix:///var/run/containerd/containerd.sock"
```

3. allow user to use this cluster

```
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config
```

4. Setup Your Pod Network

- 建立檔案`network.yml`

<details>
  <summary>network.yml在這!</summary>
<div>

```js title="network.yml"
---
kind: Namespace
apiVersion: v1
metadata:
  name: kube-flannel
  labels:
    k8s-app: flannel
    pod-security.kubernetes.io/enforce: privileged
---
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  labels:
    k8s-app: flannel
  name: flannel
rules:
- apiGroups:
  - ""
  resources:
  - pods
  verbs:
  - get
- apiGroups:
  - ""
  resources:
  - nodes
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - ""
  resources:
  - nodes/status
  verbs:
  - patch
- apiGroups:
  - networking.k8s.io
  resources:
  - clustercidrs
  verbs:
  - list
  - watch
---
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  labels:
    k8s-app: flannel
  name: flannel
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: flannel
subjects:
- kind: ServiceAccount
  name: flannel
  namespace: kube-flannel
---
apiVersion: v1
kind: ServiceAccount
metadata:
  labels:
    k8s-app: flannel
  name: flannel
  namespace: kube-flannel
---
kind: ConfigMap
apiVersion: v1
metadata:
  name: kube-flannel-cfg
  namespace: kube-flannel
  labels:
    tier: node
    k8s-app: flannel
    app: flannel
data:
  cni-conf.json: |
    {
      "name": "cbr0",
      "cniVersion": "0.3.1",
      "plugins": [
        {
          "type": "flannel",
          "delegate": {
            "hairpinMode": true,
            "isDefaultGateway": true
          }
        },
        {
          "type": "portmap",
          "capabilities": {
            "portMappings": true
          }
        }
      ]
    }
  net-conf.json: |
    {
      "Network": "10.244.0.0/16",
      "Backend": {
        "Type": "vxlan"
      }
    }
---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: kube-flannel-ds
  namespace: kube-flannel
  labels:
    tier: node
    app: flannel
    k8s-app: flannel
spec:
  selector:
    matchLabels:
      app: flannel
  template:
    metadata:
      labels:
        tier: node
        app: flannel
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: kubernetes.io/os
                operator: In
                values:
                - linux
      hostNetwork: true
      priorityClassName: system-node-critical
      tolerations:
      - operator: Exists
        effect: NoSchedule
      serviceAccountName: flannel
      initContainers:
      - name: install-cni-plugin
        image: docker.io/flannel/flannel-cni-plugin:v1.1.2
       #image: docker.io/rancher/mirrored-flannelcni-flannel-cni-plugin:v1.1.2
        command:
        - cp
        args:
        - -f
        - /flannel
        - /opt/cni/bin/flannel
        volumeMounts:
        - name: cni-plugin
          mountPath: /opt/cni/bin
      - name: install-cni
        image: docker.io/flannel/flannel:v0.22.0
       #image: docker.io/rancher/mirrored-flannelcni-flannel:v0.22.0
        command:
        - cp
        args:
        - -f
        - /etc/kube-flannel/cni-conf.json
        - /etc/cni/net.d/10-flannel.conflist
        volumeMounts:
        - name: cni
          mountPath: /etc/cni/net.d
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      containers:
      - name: kube-flannel
        image: docker.io/flannel/flannel:v0.22.0
       #image: docker.io/rancher/mirrored-flannelcni-flannel:v0.22.0
        command:
        - /opt/bin/flanneld
        args:
        - --ip-masq
        - --kube-subnet-mgr
        resources:
          requests:
            cpu: "100m"
            memory: "50Mi"
        securityContext:
          privileged: false
          capabilities:
            add: ["NET_ADMIN", "NET_RAW"]
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        - name: EVENT_QUEUE_DEPTH
          value: "5000"
        volumeMounts:
        - name: run
          mountPath: /run/flannel
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
        - name: xtables-lock
          mountPath: /run/xtables.lock
      volumes:
      - name: run
        hostPath:
          path: /run/flannel
      - name: cni-plugin
        hostPath:
          path: /opt/cni/bin
      - name: cni
        hostPath:
          path: /etc/cni/net.d
      - name: flannel-cfg
        configMap:
          name: kube-flannel-cfg
      - name: xtables-lock
        hostPath:
          path: /run/xtables.lock
          type: FileOrCreate
```

  </div>
</details>

- 套用設定檔

```
kubectl apply -f network.yml
```

會出現以下代表成功

```
namespace/kube-flannel created
clusterrole.rbac.authorization.k8s.io/flannel created
clusterrolebinding.rbac.authorization.k8s.io/flannel created
serviceaccount/flannel created
configmap/kube-flannel-cfg created
daemonset.apps/kube-flannel-ds created
```

檢查確認是否 control plane 是 ready.

```
kubectl get nodes #確認是否為ready

NAME     STATUS   ROLES           AGE    VERSION
73gogo   Ready    control-plane   3h9m   v1.27.2
```
