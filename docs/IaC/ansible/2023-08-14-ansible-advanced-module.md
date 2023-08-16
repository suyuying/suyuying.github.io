---
title: Advanced module of ansible
description: To install Filebeat through Ansible, you can follow these steps,Set up your Ansible environment->Create an Ansible playbook->Define the inventory->Write the pllaybook tasks->Check the changes is proper or not ->Run the playbook.
authors: suyuying
tags: [Ansible, IaC]
---

在日常運用上,一定會用到很多變數,迴圈,基本上會希望程式語言能做到的事情,在ansible裡也有同樣的實現！

## keyword
以下會羅列常用關鍵字:

- with_items:相當於for迴圈打開list
- loop:相當於for迴圈打開list(Ansible 2.5 開始已被推薦使用)

```yml
- name: Looping using loop (recommended approach)
  debug:
    msg: "Item: {{ item }}"
  loop:
    - item1
    - item2
    - item3
```

- loop_control:loop可以配合loop_control做進一步設定,例如設定起始點,取index等動作！

```yml
- name: Loop control example
  hosts: localhost
  vars:
    services:
      - service1
      - service2
      - service3
  tasks:
    - name: Looping over services with custom loop variable name and index
      debug:
        msg: "Service: {{ custom_service_var }}, Index: {{ my_index }}"
      loop: "{{ services }}"
      loop_control:
        loop_var: custom_service_var
        index_var: my_index
```

- when: 也就是if的用法

```yml
- name: Run a task based on a comparison
  command: echo "This task will run if variable is greater than 10"
  when: my_variable > 10
```

- include 或 include_tasks：用於引用其他的任務文件。
- import_tasks：用於導入其他的任務文件。
- tags:用於標記任務,執行ansible-playboook可以指定tags
- notify:配合handlers在狀態為change時作操作
- become：用於指定是否切換到超級用戶（root）權限執行任務。
- become_user: 由root切到哪個user執行,通常配合become一起！

## module
以下包含建立變數,做特定事項

- set_fact: 用於建立變數
```yml
- name: Set systemd version fact
  set_fact:
    node_exporter_systemd_version: "{{ __systemd_version.stdout_lines[0] | regex_replace('^systemd\\s(\\d+).*$', '\\1') }}"
```

- register:用於捕獲命令的標準輸出及錯誤輸出然後放到某變數內！

```yml
- name: Get systemd version
  command: systemctl --version
  changed_when: false
  check_mode: false
  register: __systemd_version
  tags:
    - skip_ansible_lint
```

- assert: 當條件符合會拋錯並終止playbook執行

```yml
- name: Check if a variable is greater than 10
  assert:
    that: my_variable > 10
    fail_msg: "my_variable should be greater than 10"
```

- file 模組：用於處理文件和目錄，例如創建、刪除、修改權限等操作。
- find 模組：用於在遠程主機上搜索文件並返回結果。
- sysctl 模組：用於設置系統內核參數，並在需要時重新載入。
- stat 模組：用於檢查文件或目錄的狀態，確定它們是否存在以及相關屬性。
- debug 模組：用於在執行期間輸出訊息，用於調試和檢查變數。
- block 模組：用於定義一個區塊，其中一part失敗會全部失敗,可以搭配 rescue 和 always 來執行相應操作。