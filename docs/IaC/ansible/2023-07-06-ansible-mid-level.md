---
title: Advanced Lab of ansible
description: 主要描述在正式環境使用上,使用的資料夾結構跟各個資料夾放的檔案功能,例如roles底下的files,handlers,tasks,templates,vars資料夾,以及host_vars,group_vars這幾個定義變數地方的用法.另外講檢查指令ansible-inventory -i hosts --list,跟ansible-playbook playbook.yml --check --diff這兩個選項,ansible-inventory -i hosts --list可以檢查ansible有吃到哪些變數,--check --diff可以先preview看ansible執行後會做的動作並看文檔異動狀況！
authors: suyuying
tags: [Ansible, IaC]
---

:::info
變數定義方式:

1. [ansible變數詳解](https://blog.51cto.com/u_15127516/3557527#132-%E4%BD%BF%E7%94%A8host_vars%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F)

2. [官網變數優先排序](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_variables.html#understanding-variable-precedence)
:::

## 資料夾結構

[github位置](https://github.com/suyuying/ansible_pratice)

```bash
.
├── README.md
├── ansible.cfg
├── ansible.log
├── callback_plugins
│   ├── __pycache__
│   │   ├── profile_tasks.cpython-310.pyc
│   │   └── profile_tasks.cpython-39.pyc
│   ├── profile_tasks.py
│   └── profile_tasks.pyc
├── group_vars
│   └── CentOS7.yaml
├── host_vars
│   ├── Centos8.yaml
│   ├── localhost.yaml
│   └── prometheus_server
├── hosts
├── roles
│   ├── docker
│   │   ├── tasks
│   │   │   └── main.yaml
│   │   └── vars
│   │       └── main.yaml
│   ├── nginx
│   │   ├── tasks
│   │   │   └── main.yaml
│   │   └── vars
│   │       └── main.yaml
│   └── ubuntu_base
│       ├── files
│       │   ├── ansible.pub
│       │   └── kaka.pub
│       ├── handlers
│       │   └── main.yml
│       ├── tasks
│       │   └── main.yaml
│       ├── templates
│       │   └── sshd_config.j2
│       └── vars
│           └── main.yaml
├── site.yaml
└── test.yaml
```

- 因為檔案太多了,讀的順序會是入口點`site.yaml`看是使用哪個role
- 到`roles`資料夾底下看對應role,ex `ubuntu_base`,他底下也有一堆資料夾
- `ubuntu_base`資料夾底下看`tasks`裡面的main.yaml,基本上該role會做的各指令就會在上面
  - `tasks`裡面會用到的變數要看`vars`資料夾 or `host_vars` or `group_vars`等資料夾,變數有很多層級會依據優先序去拿值！
  - `files`資料夾會放要複製過去的文件,ex.這邊放的是公鑰,也可以放更新的憑證等
  - `templates`資料夾也是放要複製到目標主機的文件,跟`file`資料夾差別是`templates`裡面放的文件可以透過挖變數把值放入,例如我要設定目標主機的sshd_config,做到吃變數以改ssh port這類操作
  - `handlers`資料夾裡面放的是當某條件達成後會執行的指令,常常用在設定檔有改動,才會重啟服務的操作.
- `roles`結束後,會確認目標主機,這邊是放在`hosts`文件內(有很多放法,可以參考官方建議best pratices).

執行指令

```bash
ansible-playbook -i /path/to/your/inventory site.yml --limit 'yourInstancesGroup'
```

之後示範是先用這個指令,指定主機跟劇本！

```bash
ansible-playbook -i ./hosts site.yaml --limit 'Ubuntu22'
```

## 詳細各檔案內容

會以ubuntu為例,之後會寫判斷主機系統！

### site.yml

第一個 play 針對 Ubuntu22 主機群組執行。gather_facts: True 表示在運行 play 之前搜集主機的事實。roles 中指定了 ubuntu_base 角色,其他意思差不多，預設情況下，Ansible 會在對應的roles資料夾的 tasks 資料夾中尋找並執行 main.yml 檔案。

```yaml title="site.yml"
---
- hosts: Ubuntu22
  gather_facts: True
  roles:
    - ubuntu_base

- hosts: Docker
  gather_facts: False
  roles:
    - docker

- hosts: Nginx
  gather_facts: True
  roles:
    - nginx
```

### roles/ubuntu_base

這邊會用ubuntu_base資料夾做目標,底下tasks做的事情是對系統的基礎操作.ansible_distribution 是 Ansible 的系統事實 (system fact) 之一，它是 Ansible 在目標主機上執行時自動收集的系統相關資訊之一。

```yaml title="roles/ubuntu_base/tasks/main.yaml"
# Disable SELinux
- name: diskable SELinux
  selinux:
    state: disabled
  when: ansible_distribution == 'CentOS'


- name: Check if Service Exists
  shell: "systemctl -a|grep {{ need_to_stopped_service}}|wc -l"
  register: service_exists

- name: Stop service firewalld, if started
  ansible.builtin.service:
    name: "{{ need_to_stopped_service }}"
    state: stopped
    enabled: false
  when: service_exists|int > 0

- name: Set a hostname
  ansible.builtin.hostname:
    name: "{{ hostname }}"
  become: true

- name: install Base package
  apt:
    name: "{{ item }}"
    state: latest
  loop: "{{ base_packages }}"
  become: true
# set the TimeZone
- name: Set timezone to Asia/Manila
  community.general.timezone:
    name: "{{ time_zone }}"
  become: true


- name: Set sysctl file limits
  #pam_limits: domain='*' limit_type=`item`.`limit_type` limit_item=`item`.`limit_item` value=`item`.`value`
  become: true
  pam_limits:
      dest: "{{ item.dest }}"
      domain: '*'
      limit_type: "{{ item.limit_type }}"
      limit_item: "{{ item.limit_item }}"
      value: "{{ item.value }}"
  with_items:
      - { dest: '/etc/security/limits.conf',limit_type: 'soft',limit_item: 'nofile', value: '655350' }
      - { dest: '/etc/security/limits.conf',limit_type: 'hard',limit_item: 'nofile', value: '655350'}
      - { dest: '/etc/security/limits.conf',limit_type: 'soft',limit_item: 'nproc', value: '102400' }
      - { dest: '/etc/security/limits.conf',limit_type: 'hard',limit_item: 'nproc', value: '102400' }
      - { dest: '/etc/security/limits.conf',limit_type: 'soft',limit_item: 'sigpending', value: '255377' }
      - { dest: '/etc/security/limits.conf',limit_type: 'hard',limit_item: 'sigpending', value: '255377' }
      - { dest: '/etc/security/limits.d/90-nproc.conf', limit_type: 'soft',limit_item: 'nproc', value: '262144' }
      - { dest: '/etc/security/limits.d/90-nproc.conf', limit_type: 'hard',limit_item: 'nproc', value: '262144' }
  tags:
      - setlimits

# add ops group
- name: Ensure group "ops" exists
  become: true
  ansible.builtin.group:
    name: ops
    state: present

# add ops user
- name: Add the user 'ops' with a bash shell, appending the group ops
  become: true
  ansible.builtin.user:
    name: ops
    shell: /bin/bash
    groups: ops
    append: yes

# add sudo previleges to the ops user
- name: Config /etc/sudoers
  become: true
  lineinfile: dest=/etc/sudoers state=present  line='{{item}}' validate='visudo -cf %s'
  with_items:
    - "ops ALL=(ALL) NOPASSWD: ALL"
    - "Defaults: ops !requiretty"

- name: Set up multiple authorized keys
  become: true
  authorized_key:
    user: ops
    state: present
    key: '{{ item }}'
  with_file: "{{ ssh_pub_key }}"


# config ssh config
- name: Update sshd configuration safely, avoid locking yourself out
  become: true
  ansible.builtin.template:
    src: sshd_config.j2
    dest: /etc/ssh/sshd_config
    owner: root
    group: root
    mode: '0600'
    validate: /usr/sbin/sshd -t -f %s
    backup: yes
  notify:
    - (Handler) Restart SSHD Service
  tags:
    - ssd_config
```

- 開頭的條件判斷,ansible_distribution 是用於條件判斷的一部分，以確定 SELinux 禁用任務僅在 CentOS 發行版上執行,在ubuntu不需要操作！

- 中間的檔案限制, /etc/security/limits.conf 中的 nofile 限制是限制每個進程允許打開的檔案數量./etc/security/limits.conf 中的 nproc 限制是設定單個使用者可啟動的最大進程數量./etc/security/limits.conf 中的 sigpending 限制是設定單個使用者可以等待處理的信號(作業系統和程式互相溝通的機制)數量上限./etc/security/limits.d/90-nproc.conf 中的 nproc 限制也是限制是設定單個使用者可啟動的最大進程數量.會以90-nproc.conf優先,簡言之就是限制以下這幾件事.

  1. 開啟檔案數量
  2. 可以開啟的進程數
  3. 可等待處理的信號數

- 文尾是告訴他怎麼複製sshd檔案到對面主機,而當一個任務包含了 notify 指令，那麼只有當這個任務的結果是「改變」（change）的時候，對應的 handler 才會被觸發。並且，無論有多少個任務觸發了同一個 handler，在整個 playbook 的運行過程中，那個 handler 都只會被運行一次，並且是在所有的任務都運行完成後。這種模式非常適合於管理那些只需要在配置改變時才需要運行的任務，比如服務的重啟。

```yaml title="roles/ubuntu_base/vars/main.yaml"
base_packages:
  # - epel-release
  - vim
  - git
  - tree
  - lrzsz
  - lsof
  - net-tools
    # - openssl-devel
  - wget
    #  - nc

time_zone: Asia/Manila

ssh_config:
  port: 22
  disalbe_root_login: False
  disalbe_password_login: False


ssh_pub_key:
  - files/test.pub

need_to_stopped_service: firewalld
```

定義挖空的變數,基本上變數順序很多,常用的優先序如下

1. `tasks/var`
2. `host_vars`
3. `group_vars`

他有很多順序,詳細看[官網這邊](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_variables.html#understanding-variable-precedence)

<details>
  <summary>roles/ubuntu_base/templates/sshd_config.j2</summary>

```bash
# $OpenBSD: sshd_config,v 1.100 2016/08/15 12:32:04 naddy Exp $

# This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

# This sshd was compiled with PATH=/usr/local/bin:/usr/bin

# The strategy used for options in the default sshd_config shipped with
# OpenSSH is to specify options with their default value where
# possible, but leave them commented.  Uncommented options override the
# default value.

# If you want to change the port on a SELinux system, you have to tell
# SELinux about this change.
# semanage port -a -t ssh_port_t -p tcp #PORTNUMBER
#
Port {{ ssh_config.port }}
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::

HostKey /etc/ssh/ssh_host_rsa_key
#HostKey /etc/ssh/ssh_host_dsa_key
HostKey /etc/ssh/ssh_host_ecdsa_key
HostKey /etc/ssh/ssh_host_ed25519_key

# Ciphers and keying
#RekeyLimit default none

# Logging
#SyslogFacility AUTH
SyslogFacility AUTHPRIV
#LogLevel INFO

# Authentication:

#LoginGraceTime 2m


{% if ssh_config.disalbe_root_login %}
PermitRootLogin no
{% else %}
PermitRootLogin yes
{% endif %}

#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10

#PubkeyAuthentication yes

# The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2
# but this is overridden so installations will only check .ssh/authorized_keys
AuthorizedKeysFile .ssh/authorized_keys

#AuthorizedPrincipalsFile none

#AuthorizedKeysCommand none
#AuthorizedKeysCommandUser nobody

# For this to work you will also need host keys in /etc/ssh/ssh_known_hosts
#HostbasedAuthentication no
# Change to yes if you don't trust ~/.ssh/known_hosts for
# HostbasedAuthentication
#IgnoreUserKnownHosts no
# Don't read the user's ~/.rhosts and ~/.shosts files
#IgnoreRhosts yes

# To disable tunneled clear text passwords, change to no here!

{% if ssh_config.disalbe_password_login %}
PasswordAuthentication no
{% else %}
PasswordAuthentication yes
{% endif %}




#PermitEmptyPasswords no

# Change to no to disable s/key passwords
#ChallengeResponseAuthentication yes
ChallengeResponseAuthentication no

# Kerberos options
#KerberosAuthentication no
#KerberosOrLocalPasswd yes
#KerberosTicketCleanup yes
#KerberosGetAFSToken no
#KerberosUseKuserok yes

# GSSAPI options
GSSAPIAuthentication yes
GSSAPICleanupCredentials no
#GSSAPIStrictAcceptorCheck yes
#GSSAPIKeyExchange no
#GSSAPIEnablek5users no

# Set this to 'yes' to enable PAM authentication, account processing,
# and session processing. If this is enabled, PAM authentication will
# be allowed through the ChallengeResponseAuthentication and
# PasswordAuthentication.  Depending on your PAM configuration,
# PAM authentication via ChallengeResponseAuthentication may bypass
# the setting of "PermitRootLogin without-password".
# If you just want the PAM account and session checks to run without
# PAM authentication, then enable this but set PasswordAuthentication
# and ChallengeResponseAuthentication to 'no'.
# WARNING: 'UsePAM no' is not supported in Red Hat Enterprise Linux and may cause several
# problems.
UsePAM yes

#AllowAgentForwarding yes
#AllowTcpForwarding yes
#GatewayPorts no
X11Forwarding yes
#X11DisplayOffset 10
#X11UseLocalhost yes
#PermitTTY yes
#PrintMotd yes
#PrintLastLog yes
#TCPKeepAlive yes
#UseLogin no
#UsePrivilegeSeparation sandbox
#PermitUserEnvironment no
#Compression delayed
#ClientAliveInterval 0
#ClientAliveCountMax 3
#ShowPatchLevel no
#UseDNS yes
#PidFile /var/run/sshd.pid
#MaxStartups 10:30:100
#PermitTunnel no
#ChrootDirectory none
#VersionAddendum none

# no default banner path
#Banner none

# Accept locale-related environment variables
AcceptEnv LANG LC_CTYPE LC_NUMERIC LC_TIME LC_COLLATE LC_MONETARY LC_MESSAGES
AcceptEnv LC_PAPER LC_NAME LC_ADDRESS LC_TELEPHONE LC_MEASUREMENT
AcceptEnv LC_IDENTIFICATION LC_ALL LANGUAGE
AcceptEnv XMODIFIERS

# override default of no subsystems
Subsystem sftp /usr/lib/openssh/sftp-server

# Example of overriding settings on a per-user basis
#Match User anoncvs
# X11Forwarding no
# AllowTcpForwarding no
# PermitTTY no
# ForceCommand cvs server
```

</details>

這邊就是sshd的config,會把變數填入補空！如果相同則不會change!

```yaml title="roles/ubuntu_base/handlers/main.yaml"
- name: (Handler) Restart SSHD Service
  become: true
  service:
    name: sshd
    state: restarted
    enabled: yes
```

handels底下的yaml會對應tasks裡面某個有設定notify的task,當狀態為change會觸發handler操作,主要用途是用於修改設定檔後的服務重啟,如果設定沒改變就當然不用重啟了.

### hosts

```text title="hosts"
[Ubuntu22]
prometheus_server ansible_host=10.0.0.112

[Ubuntu22:vars]
ansible_user=ubuntu


[CentOS7]
localhost
Centos8

[Docker]
localhost
Centos8

[Nginx]
localhost
Centos8
```

因為我這邊主要示範對ubnutu部署,所以來看`[Ubuntu22]`,這邊定義主機寫法`prometheus_server ansible_host=10.0.0.112`是因為方邊辨認,直接用ip看不出來是server用途.要注意的是,如果想要對host直接定義變數值,就需要在host_vars底下做一個對應的prometheus_server文件,這個很重要！`[Ubuntu22:vars]ansible_user=ubuntu`這個是定義ansible連進去的使用者,因為預設會連到root,但有些ssh config是限制root不能連入！

### vars

```yaml title="host_vars/prometheus_server"
---
test1: value1
ansible_ssh_port: 22
hostname: backend1
```

這就是前面說的,很重要!要針對特定主機設定變數,你的檔名一定要跟你定義在hosts的相同！ex.`host_vars/prometheus_server`就會對應到`hosts`文件內的那行`prometheus_server ansible_host=10.0.0.112`,如果沒有對到就會沒變數！

```yaml title="group_vars/CentOS7.yaml"
---
version: CentOS7
```

group_vars也是要對應到`[group]`這樣,跟hosts_vars很像！

## 檢查指令

你設定完之後,除了直接對主機執行等他跑完看結果,還有其他方式做檢查嗎？

以下指令可以檢查各台主機有吃到的變數

```bash
ansible-inventory -i hosts --list
```

檢查預計改變狀況,同時如果文件有異動,顯示異動情況,帶--check跟--diff

```bash
 ansible-playbook -i ./hosts site.yaml --limit 'Ubuntu22' --diff --check
```
