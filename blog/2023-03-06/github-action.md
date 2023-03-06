---
title: github action demo,deploy to s3
description: use github action to deploy a react structured page to s3
authors: suyuying
tags: [cloud]
---

## 基本介紹

GitHub Action 是 continuous integration and continuous delivery (CI/CD)平台，
除了一般的 build test deploy 他另外有給專案管理的各種小功能，例如給 pull request 打標籤。
提供免費的 runner 幫你執行任務，也接受 self-hosted runner。

## GitHub Actions 基本元素

```
Workflow-> Job->Step->Action
```

### Workflow

一個 repository 可以有多個 workflow,每個 workflow 做的事定義在 yml， 包含一次要運行的整個過程，可以用手動觸發或者 yml 檔內制定條件觸發。
舉例：可以用一條 workflow 做 build and test,另一個 workflow 做 deploy

### Events

觸發 Workflow 的事件稱為 Events。

### Jobs

由多個 steps 組成，每個 step 可以是一個 shell script 或者 action，step 會依序在同一個 runner 執行，並可以共享 data，
舉例來說，build 完後的檔案，可以傳給下一個 test step 測試 build 結果。

一個 workflow 可以有多個 job,job 間彼此預設是平行執行，也可以設定 dependencies 等待另一個 job，
舉例來說，一包 code 裡面要 build 多個檔案，每個 build 過程可以是一個 job 彼此平行，等到都 build 結束，在執行統一到 packaging 工作。

### Actions

動作是執行複雜但經常重複任務的 GitHub Action 平台的自定義應用程序，簡單說就是把某些會重複出現的 step 做成 module 並使用，因為這格原因，所以也可以引用別人寫好得，或自建得，就像是寫程式用的 package 一樣。

### Runners

執行 workflow 的機器。

## Demo

### 官網 understand github actions

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

:::info

1.[實作開源小工具，與 Github Actions 的第一次相遇！](https://medium.com/starbugs/%E5%AF%A6%E4%BD%9C%E9%96%8B%E6%BA%90%E5%B0%8F%E5%B7%A5%E5%85%B7-%E8%88%87-github-actions-%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9B%B8%E9%81%87-3dd2d70eeb)

2. [github action quick start 官網](https://docs.github.com/en/actions/quickstart)
   :::
