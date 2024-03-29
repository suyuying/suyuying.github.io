---
title: demo basic  github action
description: GitHub Action 是 continuous integration and continuous delivery (CI/CD)平台，除了一般的 build test deploy 他另外有給專案管理的各種小功能，例如給 pull request 打標籤。提供免費的 runner 幫你執行任務，也接受self-hosted runner。
authors: suyuying
tags: [github action, CICD]
sidebar_position: 2
---

## 基本介紹

GitHub Action 是 continuous integration and continuous delivery (CI/CD)平台，
除了一般的 build test deploy 他另外有給專案管理的各種小功能，例如給 pull request 打標籤。
提供免費的 runner 幫你執行任務，也接受 self-hosted runner。

<!--truncate-->

## GitHub Actions 基本元素

```
Workflow-> Event -> Job-> Steps
```

### Workflow

一個 repository 可以有多個 workflow,每個 workflow 做的事定義在 yml，且規定在.github/workflows 底下，workflow 包含一次要運行的整個過程，可以用手動觸發或者 yml 檔內制定條件觸發。
舉例：可以用一條 workflow 做 build and test,另一個 workflow 做 deploy

### Events

觸發 Workflow 的事件稱為 Events。

### Jobs

由多個 steps 組成，每個 step 可以是一個 shell script 或者 action，step 會依序在同一個 runner 執行，並可以共享 data，
舉例來說，build 完後的檔案，可以傳給下一個 test step 測試 build 結果。

一個 workflow 可以有多個 job,job 間彼此預設是平行執行，也可以設定 dependencies 等待另一個 job，
舉例來說，一包 code 裡面要 build 多個檔案，每個 build 過程可以是一個 job 彼此平行，等到都 build 結束，在執行統一到 packaging 工作。

### Actions

動作是執行複雜但經常重複任務， GitHub Action 平台提供自定義應用程序的上傳，簡單說就是把某些會重複出現的 step 做成 module 並使用，因為這格原因，所以也可以引用別人寫好得，或自建得，就像是寫程式用的 package 一樣。

[官方的 action 庫](https://github.com/marketplace?category=chat&type=actions&query=)

[如何建立自己的 github action 的 actions](https://docs.github.com/zh/actions/creating-actions/about-custom-actions)

### Runners

執行 workflow 的機器。

## Demo

### demo github actions

```
name: learn-github-actions
run-name: ${{ github.actor }} is learning GitHub Actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

`name`: All wolkflows 隨便挑一個點進去看到到 workflow 名字，工作流程的名稱 learn-github-actions

`run-name`: github 點進去 Actions 裡面看到 All wolkflows 眾多的名稱，為工作流程運行時的名稱，${{ github.actor }} 內建變數。

`on`:此 workflow 的觸發條件，設定 push 是推送或者發 pull request 就會觸發，進階版請洽官網提供的
[更精細設定](https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)

`jobs`:組合多個 work or action，目前有一格作業叫做 check-bats-version 的 work

`check-bats-version`: 一個名爲 check-bats-version 的作業，子鍵定義作業屬性，可以換成其他符合該 work 工作的名字，命名風格是-相連

`runs-on`: 使用 github 託管的 runner，作業運行的操作系統，爲 ubuntu-latest。

`steps`: 定義作業執行步驟，可以包含多個 指令、shell script、action（一堆指令組合的 module）

`uses`: 運作某客製化 action，action 就是個指令集合

- `actions/checkout@v3`：使用 v3 版本的 `actions/checkout` Action，從代碼庫中檢出代碼。
- `actions/setup-node@v3`：使用 v3 版本的 `actions/setup-node` Action，安裝 Node.js 環境。
  with: 帶參數到 action 裡面

`run`: 在 runner 上運行的指令

- `run: npm install -g bats`：運行命令 `npm install -g bats`，安裝 Bats 測試框架。
- `run: bats -v`：運行命令 `bats -v`，顯示 Bats 的版本號。

`name`: 定義該 run 的名字，不定義就只用 Run + 後面執行 run 得指令

### 補充 actions 寫法

actions/checkout@v3 是 GitHub Action 中一個常用的 action，用於將程式碼倉庫的程式碼檢出到工作區。v3 是這個 action 的版本號。這個 action 的代碼倉庫中，有一個 action.yml 文件，定義了這個 action 的輸入和輸出參數。具體如下：

```jsx title="actions/checkout@v3"
name: 'Checkout'
description: 'Checkout a Git repository'
inputs:
  ref:
    description: 'The branch, tag or SHA to checkout'
  repository:
    description: 'The name of the repository to checkout'
    required: false
    default: ${{ github.repository }}
  submodules:
    description: 'Whether to checkout submodules'
    required: false
    default: 'false'
  ssh-key:
    description: 'SSH key used for fetching the repository. The key should have access to the repository or be able to authenticate for the repository URL.'
    required: false
  persist-credentials:
    description: 'Whether to persist GITHUB_TOKEN and SSH_AUTH_SOCK environment variables when persisting the workspace'
    required: false
    default: 'true'
  fetch-depth:
    description: 'Depth of commits to fetch. Defaults to all commits.'
    required: false
    default: '0'
  lfs:
    description: 'Whether to download Git LFS files'
    required: false
    default: 'false'
  clean:
    description: "Whether to run 'git clean' before checkout"
    required: false
    default: 'false'
  workspace:
    description: 'Directory to which checkout the repository'
    required: false
    default: '.'
outputs:
  path:
    description: 'The path of the checked-out repository'
    value: ${{ steps.checkout.outputs.path }}
runs:
  using: 'composite'
  steps:
    - name: Checkout
      shell: bash
      run: echo "Error: No checkout implementation found."

```

這個文件中，定義了這個 action 的輸入參數包括 ref、repository、submodules、ssh-key、persist-credentials、fetch-depth、lfs、clean 和 workspace。
GitHub Action `actions/checkout@v3` 下面是它的輸入參數定義：
<highlight color="#25c2a0">actions/checkout@v3 參數篇</highlight>

- `ref`：要檢出的分支、標籤或提交 ID。
- `repository`：要檢出的儲存庫名稱。
- `submodules`：是否檢出子模組。
- `ssh-key`：用於從儲存庫獲取程式碼的 SSH 金鑰。
- `persist-credentials`：是否在持久化工作區時保存 GITHUB_TOKEN 和 SSH_AUTH_SOCK 環境變數。
- `fetch-depth`：要檢出的提交數量。
- `lfs`：是否下載 Git LFS 文件。
- `clean`：是否在檢出前運行 `git clean`。
- `workspace`：檢出的儲存庫的目錄。

其中，ref 是必需的參數，其他參數均為可選參數。

輸出參數只有一個，即 path，表示程式碼倉庫的路徑。

最後，這個 action 在運行時，會執行一個名爲 Checkout 的子步驟，該子步驟會調用不同平臺的命令行工具，將程式碼倉庫檢出到指定的工作區。

<highlight color="#1877F2"> actions/setup-node@v3 參數篇</highlight>

- `node-version`：要安裝的 Node.js 版本，默認是最新的穩定版。
- `registry-url`：Node.js 的包管理器使用的預設倉庫地址，默認是 npm 的官方地址。
- `scope`：Node.js 的包管理器使用的預設作用域，默認是空。
- `token`：用於訪問私有項目的 GitHub 權杖，默認是空。
- `always-auth`：是否總是使用授權信息訪問項目，默認是 false。
- `check-latest`：是否檢查是否安裝了最新的版本，默認是 false。
- `debug`：是否啓用 Debug 模式，默認是 false。

總的來說，actions/setup-node@v3 可以方便地安裝 Node.js 環境，並支持許多自定義參數，用戶可以根據自己的需要進行配置。

:::tip
在 github action 要帶入參數到 actions 裡面請使用 with

```
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '14'
```

:::

:::info

1.[實作開源小工具，與 Github Actions 的第一次相遇！](https://medium.com/starbugs/%E5%AF%A6%E4%BD%9C%E9%96%8B%E6%BA%90%E5%B0%8F%E5%B7%A5%E5%85%B7-%E8%88%87-github-actions-%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9B%B8%E9%81%87-3dd2d70eeb)

2. [github action quick start 官網](https://docs.github.com/en/actions/quickstart)
   :::
