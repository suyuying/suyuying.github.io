---
title: Basic introduction of ansible
description: 123
authors: suyuying
image: https://github.com/suyuying.png
tags: [dns, Domain Hijacking, DNS Poisoning]
---

這邊放學習經驗,未來工作中如果發現有其他做法,或者發現觀念有錯，都會滾動式修改,請多多見諒～

## what is ansible

ansible 是組態管理工具 Configuration management Tool ,含有自動化工具,配置系統、部署軟件和編排更高級的 IT 任務，例如持續部署或零停機滾動更新.

使用 OpenSSH 去管理機器.支援 Kerberos、LDAP 和其他集中式身份驗證管理系統.

Ansible 是 Python 陣營的組態管理工具,不用幫每台機器 (instance) 預載 agent ，只要有 SSH 和 Python 就可以執行.

官網的資訊很多,對於初學者來說,最重要的是[Getting started with Ansible](https://docs.ansible.com/ansible/latest/getting_started/index.html)以及其底下到小章節,這邊主要是講基礎觀念！

## Ansible concepts

:::tip
基本上,RD 的習慣會是需要的工具先上網找輪子,找不到的自己寫,IT 人員的習慣就是找輪子,並透過輪子寫好的的設定檔去管理任何事情,所以要習慣查官網資料才行,也要了解一隻程式總共有哪些設定檔,及設定檔可能出現的位置！
:::

### 環境需求

基本環境需要要有以下幾點

- 控制節點 (Control node)：Ansible 控制主機端,安裝有 Ansible 的系統。您可以在控制節點上執行 Ansible 指令，例如 ansible 或 ansible-inventory,主要透過 openssh 到 Managed node.

- 被管理節點 (Managed node)：Ansible 客戶端,由 Ansible 控制主機端所控制的遠端系統或主機,透過 Control node 以 SSH 方式近來這台機器。

### 操作文檔

- 庫存清單 (Inventory)：一個按邏輯分類的被管理節點列表。您在控制節點上建立庫存清單，以便描述主機部署情況給 Ansible,舉例來說,你的一個服務可能由多台機器組成,Inventory 方便你一次操作這群機器們.

- Playbooks: 一個 playbook 可以由一到多個 plays 組成,將管理節點（主機）對應至任務。Playbooks 包含變數、角色和任務的有序列表，

  - Plays: Plays 是 Ansible 執行的主要上下文，這個 playbook 物件將被管理的節點（主機）對應至任務。Play 包含變數、角色和任務的有序列表，可以重複執行。

  - Roles: Roles 是一種有限的可重複使用的 Ansible 工具,可以給多個 playbook 重複用

  - Tasks: 會套用於被管理主機的"操作"。

- Handlers: Handler 是 Task 的一種特殊形式，只有在先前的 Task 發出"changed"狀態的通知時才會執行。

- Modules: Ansible 提供的 function

- Plugins: 插件是擴展 Ansible 核心功能的代碼片段，它們可以控制如何連接到受管節點（連接插件），操作數據（過濾插件）甚至控制控制台中顯示的內容（回調插件）

- Collections:一種以 Playbook、角色、模組和插件等形式分發 Ansible 內容的格式。您可以通過 Ansible Galaxy 安裝和使用集合。

- AAP: Ansible 自動化平台的簡稱。這是一種包含企業級功能的產品，並整合了 Ansible 生態系統中的許多工具：ansible-core、awx、galaxyNG 等等。

### installation

這邊以 centos 為例,預設設定檔的取得方式參考他的[官網](https://github.com/ansible/ansible/blob/devel/examples/ansible.cfg),詳細安裝資訊[看這](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)

```
# Download and install pip3
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py --user

# Install Ansible via pip3 for current user.
pip3 install --user ansible

# Create the directory for Ansible configuration
mkdir -p /etc/ansible

# Initialize the Ansible configuration file with all default settings
ansible-config init --disabled > /etc/ansible/ansible.cfg

# List the current Ansible configuration settings
ansible-config list

```

### Config

1. 主要的程式設定檔`ansible.cfg`: 他的設定檔位置很謎的可以存在很多位置,以下是他檢查設定檔位置的[優先順序](https://docs.ansible.com/ansible/latest/reference_appendices/config.html#the-configuration-file).

- ANSIBLE_CONFIG (environment variable if set)
- ansible.cfg (in the current directory)
- ~/.ansible.cfg (in the home directory)
- /etc/ansible/ansible.cfg

因為 linux 給設定檔規範基本上是建議在/etc/底下,所以這邊會使用排序最後面的/etc/ansible/ansible.cfg,然後透過 ec2-user 做管理跟使用 ansible.如果使用 pip 安裝,基本上一開始是沒有這隻檔案的,所以可以用
`ansible-config init --disabled | sudo tee /etc/ansible/ansible.cfg`把資料倒進去.

可以使用`ansible-config list`去看你目前有哪些設定值！

2. 設定你有哪些主機集群(inventory):這邊是透過 `ansible.cfg`的設定去找對應資料,預設是

```
# (pathlist) Comma separated list of Ansible inventory sources
;inventory=/etc/ansible/hosts
```

預設找`/etc/ansible/hosts`,格式如下

```
[myvirtualmachines]
192.0.2.50
192.0.2.51
192.0.2.52

```

用 ansible 當然是要來管理一堆產品，全部放在一隻檔案是不可能滴！所以這時候可以依據`ansible.cfg`設定要新納入的資料夾位置,設定檔名要命名成 xxx.yml(xxx 可以換掉,yml 保留).

機器位置可以用 IP 或者雲服務商的 FQDN 也可以！以下是定義我的 demo-web 產品的機器位置~

```
## 修改ansible.cfg
inventory=/etc/ansible/hosts,/etc/ansible/demo-web

##
cd /etc/ansible/demo-web

## sudo vim inventory.yml
virtualmachines:
  hosts:
    vm01:
      ansible_host: 10.0.42.235
    vm02:
      ansible_host: 10.0.56.218
## list all instances
ansible all --list-hosts
```

其他設定檔還有專門放變數檔案的等等！

### Best practices

Ansible 每一版都可能會更新 Best practices 指導,所以如果[這個連結](https://docs.ansible.com/ansible/2.8/user_guide/playbooks_best_practices.html)404 了,自己 google`ansible best practices`吧.

### ansible 建議結構 1

```
production                # inventory file for production servers
staging                   # inventory file for staging environment

group_vars/
   group1.yml             # here we assign variables to particular groups
   group2.yml
host_vars/
   hostname1.yml          # here we assign variables to particular systems
   hostname2.yml

library/                  # if any custom modules, put them here (optional)
module_utils/             # if any custom module_utils to support modules, put them here (optional)
filter_plugins/           # if any custom filter plugins, put them here (optional)

site.yml                  # master playbook
webservers.yml            # playbook for webserver tier
dbservers.yml             # playbook for dbserver tier

roles/
    common/               # this hierarchy represents a "role"
        tasks/            #
            main.yml      #  <-- tasks file can include smaller files if warranted
        handlers/         #
            main.yml      #  <-- handlers file
        templates/        #  <-- files for use with the template resource
            ntp.conf.j2   #  <------- templates end in .j2
        files/            #
            bar.txt       #  <-- files for use with the copy resource
            foo.sh        #  <-- script files for use with the script resource
        vars/             #
            main.yml      #  <-- variables associated with this role
        defaults/         #
            main.yml      #  <-- default lower priority variables for this role
        meta/             #
            main.yml      #  <-- role dependencies
        library/          # roles can also include custom modules
        module_utils/     # roles can also include custom module_utils
        lookup_plugins/   # or other types of plugins, like lookup in this case

    webtier/              # same kind of structure as "common" was above, done for the webtier role
    monitoring/           # ""
    fooapp/               # ""

```

### ansible 建議結構 2

```
inventories/
   production/
      hosts               # inventory file for production servers
      group_vars/
         group1.yml       # here we assign variables to particular groups
         group2.yml
      host_vars/
         hostname1.yml    # here we assign variables to particular systems
         hostname2.yml

   staging/
      hosts               # inventory file for staging environment
      group_vars/
         group1.yml       # here we assign variables to particular groups
         group2.yml
      host_vars/
         stagehost1.yml   # here we assign variables to particular systems
         stagehost2.yml

library/
module_utils/
filter_plugins/

site.yml
webservers.yml
dbservers.yml

roles/
    common/
    webtier/
    monitoring/
    fooapp/

```

## Lab

### 基本 Lab1

:::info
這邊的 lab 都是建立在 aws EC2 的管理,透過 ansible server(同時也是堡壘機）到各台機器操作(VPC,route table 要有通),基本上 aws 一年免費方案裡面給你使用 EC2 的時間足夠了,只要每次做完 lab 就把機器關掉,錢不會爆掉,所以這邊不會用到 Vagrant 之類在你的筆電建立 VM 的方法. 直接操作雲端平台的另一個好處是學 IaC 不可能只作 ansible,後面一定會做 terraform 之類去創建、更改和版本控制基礎設施資源.

[AWS 建立機器及網路設定等可以去看這裡](/docs/category/aws)
:::

一台 bastion server,兩台在不同 AZ 的 web server,以下是使用的 ip,跟私鑰位置.

```jsx title="~/.ssh/config"
Host            ford-bastion
HostName        54.215.120.65
Port            22
User            ec2-user
IdentityFile    ~/.ssh/ford.pem


Host web01
Hostname 10.0.42.235 # (網頁伺服器 1 的私有 IP)
User ec2-user
IdentityFile ~/.ssh/ford.pem

Host web02
Hostname 10.0.56.218 # (網頁伺服器 2 的私有 IP)
User ec2-user
IdentityFile ~/.ssh/ford.pem
```

1. 設定 ssh(使用 ec2-user)

   要透過 ssh 進到機器裡面,一定要告訴機器如何做到這件事 `ssh username@IPorFQDN`
   所以理所當然,設定檔裡面一定有要設定以下東西的地方,以下都是修改 ansible.cfg.[設定檔參數定義看這邊](https://docs.ansible.com/ansible/latest/reference_appendices/config.html#common-options)

   `vim ansible.cfg`

- 私鑰設定檔 default `private_key_file = ~/.ssh/id_rsa`
- 使用 user 預設情況下，Ansible 會使用執行 ansible 指令的當前用戶
- 修改 inventory=/etc/ansible/product .
  (這意味著 Ansible 配置文件將 /etc/ansible/product 設置為其庫存（inventory）文件的路徑。當您使用 Ansible 執行 playbook 或 ad-hoc 命令時，它將從此路徑讀取目標主機信息。)

2. product 資料夾 加 inventory.yml

```jsx title="/etc/ansible/product/inventory.yml"
virtualmachines:
  hosts:
    vm01:
      ansible_host: 10.0.42.235
    vm02:
      ansible_host: 10.0.56.218
```

3. 測試

```
   ansible virtualmachines -m ping -i /etc/ansible/product/inventory.yml

   vm02 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
vm01 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
```

:::info

1. 以下告警是因為沒有指定要使用的 python 版本,不指定的影響是會 warning 是因問很多 Ansible 模塊依賴於 Python,板塊執行可能會受版本影響.

```
[WARNING]: Platform linux on host vm01 is using the discovered Python interpreter at /usr/bin/python3.9, but future installation
of another Python interpreter could change the meaning of that path. See https://docs.ansible.com/ansible-
core/2.14/reference_appendices/interpreter_discovery.html for more information.
```

:::

4. 開始 playbook

   `sudo vim playbook.yml`內容放以下,注意這邊如果 hosts 沒有對應到`inventory.yml`的 virtualmachines 會出現`skipping: no hosts matched`

```
- name: My first play
  hosts: virtualmachines
  tasks:
   - name: Ping my hosts
     ansible.builtin.ping:
   - name: Print message
     ansible.builtin.debug:
       msg: Hello world
```

```
[ec2-user@ip-10-0-3-15 product]$ ansible-playbook -i inventory.yml playbook.yml

PLAY [My first play] *************************************************************************************************************

TASK [Gathering Facts] ***********************************************************************************************************
ok: [vm01]
ok: [vm02]

TASK [Ping my hosts] *************************************************************************************************************
ok: [vm01]
ok: [vm02]

TASK [Print message] *************************************************************************************************************
ok: [vm01] => {
    "msg": "Hello world"
}
ok: [vm02] => {
    "msg": "Hello world"
}

PLAY RECAP ***********************************************************************************************************************
vm01                       : ok=3    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
vm02                       : ok=3    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
```

過程：
這是一個 Ansible playbook 的執行結果，該 playbook 包含三個 task：

- Gathering Facts：收集目標主機的系統資訊,是 Ansible 的一個內置模組，是 Ansible 的一個內置模組，任何使用 Ansible 的 Playbook 過程中，都需要先執行 Gathering Facts 來收集主機的系統資訊.
- Ping my hosts：對目標主機進行 ping 測試，以確保主機可連線。
- Print message：在每台目標主機上輸出 "Hello world" 訊息。

  這三個 task 均成功完成，最後的 PLAY RECAP 顯示了每台主機上 task 的成功/失敗情況，其中 ok 表示成功完成的 task 數量，changed 表示有改變的 task 數量，unreachable 表示無法連線的主機數量，failed 表示失敗的 task 數量，skipped 表示被略過的 task 數量，rescued 表示已修復的 task 數量，ignored 表示被忽略的 task 數量。在這個例子中，所有 task 都成功完成，因此這些欄位均為 0。

### lab2 在 web server 裝 nginx

這邊只修改 playbook.yml,而 ansible.cfg 不會動.

```jsx title="/etc/ansible/product/playbook.yml"
- name: My first play
  hosts: virtualmachines
  tasks:
   - name: Ping my hosts
     ansible.builtin.ping:
   - name: Print message
     ansible.builtin.debug:
       msg: Hello worl

- name: Install and configure NGINX web server
  hosts: virtualmachines
  become: true
  tasks:
    - name: Install EPEL repository (RHEL/CentOS)
      yum:
        name: epel-release
        state: present
      when: "'centos' in ansible_os_family or 'redhat' in ansible_os_family"

    - name: Install NGINX web server
      package:
        name: nginx
        state: present

    - name: Start and enable NGINX service
      service:
        name: nginx
        state: started
        enabled: true

    - name: Configure NGINX virtual host
      template:
        src: ./nginx_vhost.conf.j2
        dest: /etc/nginx/conf.d/vhost.conf
      notify:
        - Reload NGINX

  handlers:
    - name: Reload NGINX
      service:
        name: nginx
        state: reloaded
```

說明:

- name: Playbook 的名稱，用於描述 Playbook 的目的。
- hosts: 要在其上運行此 Playbook 的目標主機組。在此示例中，目標主機組名為 "virtualmachines",要對應 inventory.yml 的設定。
- become: 使用 true 以提升權限，使 Playbook 以 root 權限運行。
- tasks: 包含要在目標主機上執行的任務列表。

各 Task 做的事:

- Install EPEL repository (RHEL/CentOS): 在 RHEL/CentOS 系統上安裝 EPEL 倉庫。這是因為 NGINX 軟件包在這些系統的默認倉庫中可能不可用。這個任務只在系統是 RHEL 或 CentOS 時執行，使用 when 關鍵字來實現條件執行。
- Install NGINX web server: 使用 package 模組安裝 NGINX。這將在 Debian/Ubuntu 和 RHEL/CentOS 系統上選擇合適的包管理器（apt 或 yum）。
- Start and enable NGINX service: 使用 service 模組啟動並啟用 NGINX 服務，以便在系統啟動時自動運行。
- Configure NGINX virtual host: 使用 template 模組將源文件 ./nginx_vhost.conf.j2（用相對位置也行）複製到目標文件 /etc/nginx/conf.d/vhost.conf，並在需要時替換模板變量。template 模組會自動檢查源模板文件和目標文件,如果模板文件中的內容與目標文件不同，則 template 模組將更新目標文件並標記任務為"changed"。如果此任務發生 changed，則觸發名為 "Reload NGINX" 的 handler。

最後，有一個 handlers 部分，其中包含在特定情況下執行的任務。在此示例中，只有一個 handler.

- handler
  - Reload NGINX: 使用 service 模組重新加載 NGINX，使對配置的更改生效。這個 handler 只在 "Configure NGINX virtual host" 任務發生變更時執行。

確保您的 inventory 文件包含一個名為 "virtualmachines" 的主機組，並且您已經創建了適當的 NGINX 虛擬主機配置模板（nginx_vhost.conf.j2）。

```jsx title="/etc/ansible/product/nginx_vhost.conf.j2"
server {
    listen 3000;
    server_name modontou.don69.store;
    root /var/www/html;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

:::info
網路掛掉,它任務會 hang 在那邊,這時要想看看你的網路設定是不是設定錯！
:::

## 結論

Ansible 官網基本入門到這邊,接下來會去探討進階情境.

:::info

這邊的[基本資訊會來自官網](https://docs.ansible.com/ansible/latest/index.html).

參考資料:

1. [官網](https://docs.ansible.com/ansible/latest/index.html)
2. [現代 IT 人一定要知道的 Ansible 自動化組態技巧 系列](https://ithelp.ithome.com.tw/users/20031776/ironman/1022)
3. [30 天入門 Ansible 及 Jenkins](https://ithelp.ithome.com.tw/users/20103346/ironman/1473)

:::

to be continue: 進階 lab. 部署東東
進進階 lab,使用 terraform 開機器
然後用 ansible 部署程式
