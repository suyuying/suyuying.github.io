---
title: YAML語法結構介紹
description: yaml 相對於 Json 來說,對我個人而言,在表達複雜資料結構上,例如多層次的陣列,更好了解一些,主要使用縮排和簡潔的語法來表示結構和層次.基本語法重點:1.有---開頭,通常就是 yml 格式,但沒強制要加,2.使用縮排表示層級,使用空格做縮排,建議使用 2 或 4 個空格,不建議用 tab,3.字符串不用加引號,在可能產生歧義時,需加單引號 or 雙引號.(單引號包圍字符串時，會將特殊符號保留。雙引號包圍字符串時，反斜線需要額外進行轉義。)4.支持多種數據類型，包括字典、列表、布爾值、整數、浮點數等。5.用# 註解.
authors: suyuying
tags: [yml, config]
---

## yaml and json

Yaml 跟 Json 都是用於日常進行資料處理,Json 相信大家很熟了,前後端資料溝通最常用到的就是 Json,因為他跟 python 的 dict 格式超像,所以熟悉 json 也很快,差別在前者是 python 物件,後者是有固定格式且方便機器解析的純文字的數據交換格式,規則是名稱寫在雙引號內，值可以是字符串、數字、對象、數組、布爾值或 null。

```jsx title="json基本範例"
{
    "name": "John",
    "age": 30,
    "city": "New York",
    "hobbies": ["reading", "music", "sports"],
    "isMarried": false,
    "spouse": null
}
```

Yaml 相對於 Json 來說,對我個人而言,在表達複雜資料結構上,例如多層次的陣列,更好了解一些,主要使用縮排和簡潔的語法來表示結構和層次.

基本語法重點:

- 有---開頭,通常就是 yml 格式,但沒強制要加
- 使用縮排表示層級
- 使用空格做縮排,,建議使用 2 或 4 個空格,不建議用 tab
- 字符串不用加引號,在可能產生歧義時,需加單引號 or 雙引號.(單引號包圍字符串時，會將特殊符號保留。雙引號包圍字符串時，反斜線需要額外進行轉義。)

```
## 以下key3等於key4,注意使用單引號跟雙引號差別
- key3: '\.php$'
- key4: "\\.php$"
```

- 支持多種數據類型，包括字典、列表、布爾值、整數、浮點數等。
- 用# 註解

關於歧義這點,近一步說明:
使用 ":" 字符時，可能會被解析成 key-value 的形式，需要加引號來避免歧義。
字符串包含 "-" 字符時，可能被解析成列表中的項目，需要加引號來避免歧義。
字符串包含 "#" 字符時，可能被解析成注釋，需要加引號來避免歧義。

```
# 不用引號
key: value

# 需要加引號避免歧義
key: "value:with:colon"

# 需要加引號避免歧義
key: "value-with-dash"

# 不用引號(但是為了避免麻煩,遇到#都習慣加引號吧)
key: "#no-comments"

# 需要加引號避免歧義
key: "# comments"
```

### yaml 數據結構

yml 支持多種數據類型，包括字典、列表、布爾值、整數、浮點數等.

這邊建議可以安裝 yq 把 yml 解析成 json,方便習慣用 json 得人了解 yml.

```
pip3 install yq
```

接下來會了解字典、列表、Boolean、整數、浮點數如何表達,以下的 yml 用法跟出現的 json 是相同意思的！

#### 字典

以下二者相等

```jsx title="yaml dict"
name: Helloworld;
```

```jsx title="json dict"
{
  "name": "junmajinlong"
}
```

#### 列表

```jsx title="yaml list"
---
- lang1: Shell
- lang2: JS
- lang3: Python

```

```jsx title="json list"
[{ mylang: "Shell" }, { mylang2: "JS" }, { mylang3: "Python" }];
```

#### boolean

```jsx title="yaml boolean"
is_published: true;
is_featured: false;
```

```jsx title="json boolean"
{
  "is_active": true,
  "is_admin": false
}
```

#### yml 的 dict 跟 list 混合表達

這個格式在 docker 跟 ansible 之類很常見,其實他是這樣滴！

```jsx title="yaml dict and list"
---
# 值是純list,有三個-,所以有三個元素.
languages:
  - Shell
  - JS
  - Python

# 值是dict in list,因為只有一個-,代表只有一個元素,該元素type為dict.
services:
  - name: nginx
    status: running
```

```jsx title="json dict and list"
{
  "languages": [
    "Shell",
    "JS",
    "Python"
  ]
}
{
  "services": [
    {
      "name": "nginx",
      "status": "running"
    }
  ]
}
```

到這邊,基本上對 yml 就有一定熟悉度,在寫 config 時,腦袋也跟著跑出 json 的檔案範例.

<!--truncate-->

## 進階使用解析

以這個 ansible(自動化工具)的 config 當作練習

```
- hosts: all
  vars:
    server:
      name: server1
      ip: 192.168.1.1
      ports:
        - 22
        - 80
      services:
        - name: nginx
          status: running
        - name: mysql
          status: stopped
    is_production: true
    max_connections: 1000
  tasks:
    - name: Display server information
      debug:
        var: server

    - name: Check if environment is production
      debug:
        msg: "This is a production environment."
      when: is_production

    - name: Increase max connections
      sysctl:
        name: net.core.somaxconn
        value: "{{ max_connections }}"
        state: present
```

以上相當於以下 json.

```
[
  {
    "hosts": "all",
    "vars": {
      "server": {
        "name": "server1",
        "ip": "192.168.1.1",
        "ports": [
          22,
          80
        ],
        "services": [
          {
            "name": "nginx",
            "status": "running"
          },
          {
            "name": "mysql",
            "status": "stopped"
          }
        ]
      },
      "is_production": true,
      "max_connections": 1000
    },
    "tasks": [
      {
        "name": "Display server information",
        "debug": {
          "var": "server"
        }
      },
      {
        "name": "Check if environment is production",
        "debug": {
          "msg": "This is a production environment."
        },
        "when": "is_production"
      },
      {
        "name": "Increase max connections",
        "sysctl": {
          "name": "net.core.somaxconn",
          "value": "{{ max_connections }}",
          "state": "present"
        }
      }
    ]
  }
]
```

總共有三個 key,hosts、vars、tasks.

- hosts 的值是字串 all
- var 的值是多個 dict 組成(server,is_production,max_connections),其中 server 的 value 是 dict 結構(開頭沒有-),包含了 name,ip,ports,service 這幾個 key ,其中 ports 的 value 是一個 list([22,80]),services 則是 dict in list 結構.
- tasks 部分,對應的值是 list,裡面有三個 type 是 dict 的元素,分別對應 3 個 ansible 希望遠端機器執行的任務.

### 總結

yaml 看起來對複雜結構好懂一些,很多程式的 config 檔都會用到它,所以要好好熟悉一下！

:::info
參考資料:

1. [4. 嘿，瞧瞧 Ansible 的灵魂：playbook](https://www.junmajinlong.com/ansible/4_ansible_soul_playbook/)

:::
