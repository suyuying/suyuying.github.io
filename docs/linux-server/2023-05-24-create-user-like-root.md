---
title: how to create user like root
description: 從有關鍵字為 QOO 那一行到以}為開頭的那一行(^代表正則開頭字元),sed -n "/QOO/,/^}/p" common.js.
authors: suyuying
image: https://github.com/suyuying.png
tags: [linux]
---

以往常常用 root 連到機器操作,那最近在 lab 機踢到鐵板了,關於不要用 root 登入操作討論很多,這邊就不說原因了！

用 root 執行`minikube start`會遇到報錯

```
❌  Exiting due to DRV_AS_ROOT: The "docker" driver should not be used with root privileges.
```

這邊看到很明顯他不讓你用 root 執行該指令.good！！

## 創建 ec2-user 並給予權限

執行以下命令以創建新使用者：

```
adduser ec2-user
```

設定使用者密碼

```
passwd ec2-user
```

將使用者新增至 wheel 群組，以獲得 sudo 權限：

```
usermod -aG wheel ec2-user
```

在 CentOS 系統中，wheel 群組通常被配置為具有特殊權限的群組，允許其成員使用 sudo 命令獲得 root 權限。通常，系統管理員可以將自己或其他需要具有管理權限的使用者新增至 wheel 群組，以便執行需要 root 權限的任務。
具有 wheel 群組成員身份的使用者可以使用 sudo 命令執行以 root 權限運行的命令。在上述命令中，-aG 選項指示 usermod 命令將使用者新增至指定的群組中而不移除已有的群組設定。

確認 sudoers 文件中的設定允許 wheel 群組的成員執行 sudo 指令。執行以下命令以編輯 sudoers 文件：

```
visudo
```

在打開的文件中，尋找以下行：

```
## Allows people in group wheel to run all commands
# %wheel        ALL=(ALL)       ALL
```

取消註釋（刪除前面的 # 符號）並保存文件,這給在 wheel 群組內的使用者可以用 sudo 執行任何權限

## 將 ec2-user 加到 docker 群組

將 ec2-user 加到 docker 群組

```
usermod -aG docker ec2-user
```

執行以下命令來使群組更改生效：

```
newgrp docker
```

加入 'docker' 群組後，您可以在不使用 sudo 的情況下執行 Docker 命令

## 如何確認有加入群組

看/etc/group 會看到有新增使用者

```
vi /etc/group
```

```
ssh_keys:x:997:
sshd:x:74:
postdrop:x:90:
postfix:x:89:
docker:x:996:ec2-user
cgred:x:995:
mysql:x:27:
apache:x:48:
nginx:x:994:
zabbix:x:993:
tss:x:59:
stapusr:x:156:
stapsys:x:157:
stapdev:x:158:
saslauth:x:76:
mongod:x:992:
ec2-user:x:1000:
```

## 如何連線到 ec-user

1. 確認有生成公私鑰,如無則執行以下指令生成

```
ssh-keygen -t rsa -b 4096
```

確認生成的公鑰位置在`~/.ssh/id_rsa.pub`

2. 使用 ssh-copy-id 指令將公鑰添加到遠程 ec2-user 使用者的帳戶中。remote_host 記得換成 你的 ip(ｅｘ.我的 ip 是 192.168.185.72),記得你的私鑰(~/.ssh/id_rsa)基本上不會給別人

```
ssh-copy-id -i ~/.ssh/id_rsa.pub ec2-user@<remote_host>
```

3. 測試連入

```
ssh 'ec2-user@192.168.185.72'
```

3. 設定~/.ssh/config,像這樣,

```jsx title="~/.ssh/config"
Host            agent-ec2user
HostName        192.168.185.72
Port            22
User            ec2-user
IdentityFile    ~/.ssh/id_rsa
```

4. 設定 ssh 的通用配置

```
Host *
  ServerAliveInterval 10
  HostKeyAlgorithms +ssh-rsa
  PubkeyAcceptedKeyTypes +ssh-rsa
```

- Host \*: 這是一個通配符，表示適用於所有的主機。在下面的設定中，這個通配符將應用於所有的主機設定。

- ServerAliveInterval 10: 此選項指定了 SSH 客戶端和伺服器之間的連線活著檢查時間間隔。在此例中，設定為 10 秒，表示每 10 秒發送一次保持連線的訊號。這有助於保持連線的穩定性。

- HostKeyAlgorithms +ssh-rsa: 此選項指定了客戶端支援的主機金鑰驗證演算法。+ssh-rsa 表示除了預設的驗證演算法外，還允許使用 ssh-rsa 演算法進行主機金鑰驗證。

- PubkeyAcceptedKeyTypes +ssh-rsa: 此選項指定了客戶端支援的用於公鑰驗證的金鑰類型。+ssh-rsa 表示除了預設的金鑰類型外，還接受使用 ssh-rsa 金鑰進行公鑰驗證。
