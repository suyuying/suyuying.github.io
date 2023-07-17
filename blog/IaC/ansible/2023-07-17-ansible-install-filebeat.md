---
title: Install filebeat through filebeat
description: To install Filebeat through Ansible, you can follow these steps,Set up your Ansible environment->Create an Ansible playbook->Define the inventory->Write the pllaybook tasks->Check the changes is proper or not ->Run the playbook.
authors: suyuying
tags: [Ansible, IaC]
---

## Define the inventory

```bash
[filebeat]
10.199.14.[4:8]  #change to your ips
```

## playbook

```bash title="file_beat_install.yml"
---
- name: Install Filebeat
  hosts: filebeat
  become: yes
  tasks:
    - name: Import Elastic GPG key
      rpm_key:
        state: present
        key: https://packages.elastic.co/GPG-KEY-elasticsearch

    - name: Add Elastic repository
      yum_repository:
        name: elastic-8.x
        description: Elastic repository for 8.x packages
        baseurl: https://artifacts.elastic.co/packages/8.x/yum
        gpgcheck: yes
        gpgkey: https://artifacts.elastic.co/GPG-KEY-elasticsearch
        enabled: yes

    - name: Install filebeat
      yum:
        name: filebeat
        state: present

    - name: Enable filebeat service
      systemd:
        name: filebeat
        enabled: yes
    - name: Write content to /etc/filebeat/ca.crt
      ansible.builtin.copy:
        dest: /etc/filebeat/ca.crt
        content: |
          Bag Attributes
            friendlyName: ca
            localKeyID: "urlocal ID"
          subject=/CN=Elasticsearch HTTP CA
          issuer=/CN=Elasticsearch HTTP CA
          -----BEGIN CERTIFICATE-----
            your ca
          -----END CERTIFICATE-----
        owner: root
        group: root
        mode: '0644'
```

## playbook command

check the changes,Make sure these chagnes is ok!

```bash
ansible-playbook -i hosts file_beat_install.yml --diff --check
```

Exucutate the command

```bash
ansible-playbook -i hosts file_beat_install.yml --diff
```

## 小結

以上是直接透過file_beat_install.yml帶入指定hosts,對機器做安裝filebeat.

## 改成用roles執行

如果是roles配合用site.yml作為接入口,site,yaml如下

```yaml title="/root/Ansible_DG/site.yaml"
- hosts: filebeat
  gather_facts: True
  become: yes
  become_user: root
  become_method: su
  become_exe: sudo su
  roles:
    - filebeat_install
```

roles資料夾底下整個結構會變這樣

```bash
filebeat_install/       # 角色名
    tasks/             # 任务目录
        main.yml       # 任务定义文件

```

然後main.yml格式不能照前面的,要改成以下

```yaml title="/root/Ansible_DG/roles/filebeat_install/tasks/main.yml"
---
- name: Install necessary packages
  apt:
    name:
      - apt-transport-https
      - wget
    state: present

- name: Add Elastic GPG key
  apt_key:
    url: https://artifacts.elastic.co/GPG-KEY-elasticsearch
    state: present

- name: Add Elastic repository
  apt_repository:
    repo: "deb https://artifacts.elastic.co/packages/8.x/apt stable main"
    state: present
    filename: elastic-8.x

- name: Update apt and install filebeat
  apt:
    name: filebeat
    update_cache: yes
    state: present

- name: Enable filebeat service
  systemd:
    name: filebeat
    enabled: yes

- name: Write content to /etc/filebeat/ca.crt
    ansible.builtin.copy:
    dest: /etc/filebeat/ca.crt
    content: |
        Bag Attributes
        friendlyName: ca
        localKeyID: "urlocal ID"
        subject=/CN=Elasticsearch HTTP CA
        issuer=/CN=Elasticsearch HTTP CA
        -----BEGIN CERTIFICATE-----
        your ca
        -----END CERTIFICATE-----
    owner: root
    group: root
    mode: '0644'
```

並執行指令

```bash
ansible-playbook site.yaml -i hosts --limit filebeat
```

:::info
定義hosts有很多方式,在gcp部分因為GCP會自动為每个機器生成这样的内部DNS名稱,ex:[機器名稱].asia-east2-a.c.baseservice-he.internal.所以他在定義ansible那邊其實會比較易懂,可以直接用機器名稱解到IP.
:::
