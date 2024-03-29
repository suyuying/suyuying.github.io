---
title: github action basic introduction
description: github action在設計上提供許多表示式，內建函示，上下文，這邊將整理官網教學知識，以及使用心得。
authors: suyuying
tags: [github action, CICD]
sidebar_position: 1
---

## 前言

一開始是跳著學，直接 google 怎麼用 github action 做到 CI 建立 image 並推到 github container，不過這關過完後，在 deploy 到 azure web container 就卡關了，這邊貼卡關的[部分](https://docs.github.com/en/actions/deployment/deploying-to-your-cloud-provider/deploying-to-azure/deploying-docker-to-azure-app-service)

<!--truncate-->

```
  deploy:
    runs-on: ubuntu-latest

    needs: build

    environment:
      name: 'production'
      url: ${{ steps.deploy-to-webapp.outputs.webapp-url }}

    steps:
      - name: Lowercase the repo name
        run: echo "REPO=${GITHUB_REPOSITORY,,}" >>${GITHUB_ENV}

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: ${{ env.AZURE_WEBAPP_NAME }}
          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
          images: 'ghcr.io/${{ env.REPO }}:${{ github.sha }}'
```

如果沒看過官網教學，看到`${{ steps.deploy-to-webapp.outputs.webapp-url }}` `${{ env.AZURE_WEBAPP_NAME }}` `${{ github.sha }}` `${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}`
這些東西自然會傻住，然後回去 google，會發現官網給了一大堆 context 介紹，簡言之，還是腳踏實地來
[Understanding GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)吧！

下面資訊再回來看，`${{ steps.deploy-to-webapp.outputs.webapp-url }}` 這段意思會 refer 到 id: deploy-to-webapp 的這個 step，至於 webapp-url 是啥？這是 action 的 azure/webapps-deploy 的 output。
至於 output 跟 input 是啥，這會留到之後了解 actions 時在來了解～
${GITHUB_REPOSITORY} 是內建變數，${{ github.sha }}是 github 上下文的內建變數，${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}使用設定在 configuration 的值，使用的是 sercrets 上下文。

<details>
  <summary> Create and publish a Docker image to github container registry and deploy to azure web container</summary>
  <a href="https://docs.github.com/en/actions/deployment/deploying-to-your-cloud-provider/deploying-to-azure/deploying-docker-to-azure-app-service">github : Deploying Docker to Azure App Service
</a>
  <div>
    <br />

```

name: Create and publish a Docker image to github container registry and deploy to azure web container

env:
  AZURE_WEBAPP_NAME: ford-amd   # set this to your application's name
on:
  push:
    branches: ['main']
permissions:
  contents: 'read'
  packages: 'write'

jobs:
  build:
    environment:
      name: prod
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    env:
      Greeting: Hello

    steps:

      - name: Checkout repository
        uses: actions/checkout@v3
      - name: 'Create env file'
        run: |
          touch sql_app/.env
          echo "${{ secrets.ENV_FILE }}" > sql_app/.env
      - name: Set up QEMU
        uses: docker/setup-qemu-action@v2
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2

      - name: Log in to the Container registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - name: Lowercase the repo name
        run: echo "REPO=${GITHUB_REPOSITORY,,}" >>${GITHUB_ENV}
      - name: Build and push container image to registry
        uses: docker/build-push-action@v4
        with:
          push: true
          context: .
          platforms: linux/amd64,linux/arm64
          tags: ghcr.io/${{ env.REPO }}:${{ github.sha }}
          file: ./Dockerfile
  deploy:
    runs-on: ubuntu-latest

    needs: build

    environment:
      name: prod
      url: ${{ steps.deploy-to-webapp.outputs.webapp-url }}

    steps:
      - name: Lowercase the repo name
        run: echo "REPO=${GITHUB_REPOSITORY,,}" >>${GITHUB_ENV}

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: ${{ env.AZURE_WEBAPP_NAME }}
          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
          images: 'ghcr.io/${{ env.REPO }}:${{ github.sha }}'




```

  </div>
</details>

## 基本功

回顧一下 github action basic demo，github action 是由 git 根目錄同層的
.github/workflows 中的 xxxx.yml 組成，workflow 的結構通常是

```

Event 觸發 -> Job -> steps

```

Event: 描述觸發該 pipline 條件

Job: 定義 runner, 環境變數後，在這個條件下執行多個 step ，舉例： 編譯檔案 可以當一個 job，單元測試也可以當一個 job。 要注意的是，job 間是平行執行，所以要在單元測試過關在執行編譯的話，要額外寫 depends。job 間可以透過 artifacts 把 job 產出檔案，傳給別的 job 用。

steps: 定義多個指令，也可以使用別人提供的套件 actions，也可以是某隻 shell script

### Expressions

如果你有一個 job 要執行，但想設定執行前提是某個環境參數 為 true，要怎麼執行？
這邊有幾個觀念

1. 環境參數:

在 github action 所有系統內建變數，環境變數，加密的變數，設定在 configuration 的變數這些東西都被當作<highlight color="blue">Contexts</highlight> 管理。

2. 表達式

結構都長這樣`${{ <expression> }}`,

支援的數據類型 `boolen` `null` `number` `string`，寫法如下

```

env:
myNull: ${{ null }}
myBoolean: ${{ false }}
myIntegerNumber: ${{ 711 }}
myFloatNumber: ${{ -9.2 }}
myHexNumber: ${{ 0xff }}
myExponentialNumber: ${{ -2.99e-2 }}
myString: Mona the Octocat
myStringInBraces: ${{ 'It''s open source!' }}

```

運算子如下

```

( ) Logical grouping
[ ] Index
. Property de-reference
! Not
< Less than
<= Less than or equal

>     Greater than
>
> = Greater than or equal
> == Equal
> != Not equal
> && And
> || Or

```

if 判斷寫法

```

prod-check:
if: ${{ github.ref == 'refs/heads/main' }}
runs-on: ubuntu-latest
steps:

```

此外 github action 也提供很多內建 function，例如：

`contains( search, item )` ，如果 search 含有 item，這個函數將返回 true。如果 search 是數組中。如果 item 是一個 search 的元素，這個函數將返回 true，如果項目是搜索的子字符串。這個函數不區分大小寫。它將值轉換為字符串進行比較。

contains('Hello world', 'llo') returns true.

contains(github.event.issue.labels.\*.name, 'bug') returns true if the issue related to the event has a label "bug".

還有很多內建方法，可以[參考官網](https://docs.github.com/en/actions/learn-github-actions/expressions)

### Contexts

你運行的 workflow 中的資訊，可以透過 Contexts 取的，每個 Context 都是一個物件，它帶有的屬性可以是 strings 或 物件。

要使用 contexts 需要按照這個格式`${{ <context> }}`

Context 種類超多，這邊會大致講他的作用

`github`- 當前 workflow 的 branch,觸發模式，repo 名字，owner 名字等等。

`env` - 在 workflow or job or steps 裡面設定得環境變數

`vars` - 在 repo 或 組織 或 environment 階段，設定在 Variable 的 key value(就是 setting 的 variable 相關東西)

`job` - 跟現在正在 run 的 job 有關事項，例如現在跑的 runner 的 id,跑成功或失敗。

`jobs` - 僅在可重用工作流中可用，並且只能用於設置可重用工作流的輸出。

`steps` - 定義 steps 階段輸出的成品，以及此 steps 運作結果（成功 失敗 取消 跳過）

`runner` - Information about the runner that is running the current job

`sercets` - 在 repo 或 組織 或 environment 階段設定在 secrect 的 key value

`strategy` - 策略，主要用於在 matrix 矩陣情況環境下的 job 狀態描述

`matrix` - 矩陣輸入，如果你的 job 裡面的測試系統要測試你的 code 在 mac 跟 windows 執行都沒問題，爾且也要確保在 node 14 跟 node16 運行都正常。

```

name: Test matrix
on: push

jobs:
  build:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node: [14, 16]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node }}
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test

```

`needs`- 當前作業的依賴項，要用 id 指定

<details>
  <summary>needs demo</summary>
  <div>
    <div>This is the detailed content</div>
    <br />

```

name: Build and deploy
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      build_id: ${{ steps.build_step.outputs.build_id }}
    steps:
      - uses: actions/checkout@v3
      - name: Build
        id: build_step
        run: |
          ./build
          echo "build_id=$BUILD_ID" >> $GITHUB_OUTPUT
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: ./deploy --build ${{ needs.build.outputs.build_id }}
  debug:
    needs: [build, deploy]
    runs-on: ubuntu-latest
    if: ${{ failure() }}
    steps:
      - uses: actions/checkout@v3
      - run: ./debug

```

  </div>
</details>

`inputs`- 看不懂，之後有用到再補

### Variables

基本上是 Contexts 的延伸，變量以是否跨 workflow 做區分。

1. 沒有跨 workflow 的 Variable 定義方法，在 workflow,job,step 定義 key value

<details>
  <summary>demo</summary>
  <div>
    <div>This is the detailed content</div>
    <br />

```
name: Greeting on variable day

on:
  workflow_dispatch

env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona

```

  </div>
</details>

run: env：您可以通過在步驟中使用然後檢查步驟的輸出來列出可用於工作流步驟的整組環境變量。

2. 跨 workflow 的 variable 定義方法

在上下文中自動可用 vars，使用方式${{ vars.ＸＸＸＸ }}，有多種定義方式
存儲庫、環境創建配置變量、組織創建配置變量

<details>
  <summary>demo</summary>
  <div>
    <div>This is the detailed content</div>
    <br />

```
on:
  workflow_dispatch:
env:
  # Setting an environment variable with the value of a configuration variable
  env_var: ${{ vars.ENV_CONTEXT_VAR }}

jobs:
  display-variables:
    name: ${{ vars.JOB_NAME }}
    # You can use configuration variables with the `vars` context for dynamic jobs
    if: ${{ vars.USE_VARIABLES == 'true' }}
    runs-on: ${{ vars.RUNNER }}
    environment: ${{ vars.ENVIRONMENT_STAGE }}
    steps:
    - name: Use variables
      run: |
        echo "repository variable : ${{ vars.REPOSITORY_VAR }}"
        echo "organization variable : ${{ vars.ORGANIZATION_VAR }}"
        echo "overridden variable : ${{ vars.OVERRIDE_VAR }}"
        echo "variable from shell environment : $env_var"

    - name: ${{ vars.HELLO_WORLD_STEP }}
      if: ${{ vars.HELLO_WORLD_ENABLED == 'true' }}
      uses: actions/hello-world-javascript-action@main
      with:
        who-to-greet: ${{ vars.GREET_NAME }}


```

  </div>
</details>

:::tip
在 github action 使用變量時，要考慮這個變量執行時是否在 runner 內執行！

在 runner 內執行預設是可以用$Greeting(linux) or $env:NAME(windows)去取得變量，

在 runner 外執行的例子，要使用`${{ env.DAY_OF_WEEK == 'Monday' }}`這樣的表達式，使用情境例如要先判斷 workflow 環境變量，再決定是否跑這個 step 的過程。
範例：

<details>
  <summary>demo</summary>
  <div>
    <br />

```
env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Monday' }}
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona

```

  </div>
</details>
:::

### Default environment variables

The default environment variables that GitHub sets are available to every step in a workflow.
[內建環境變量](https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables)

因為很多，所以挑幾個記錄一下

1. GITHUB_SHA - The commit SHA that triggered the workflow.

2. RUNNER_ARCH - 底層架構，The architecture of the runner executing the job. Possible values are X86, X64, ARM, or ARM64.

3. GITHUB_REPOSITORY_OWNER - The repository owner's name. For example, octocat.

4. GITHUB_REF_TYPE- The type of ref that triggered the workflow run. Valid values are branch or tag.

5. GITHUB_REF- The fully-formed ref of the branch or tag that triggered the workflow run.

6. GITHUB_JOB - The job_id of the current job. For example, greeting_job.
   以下 job_id 分別為 My first job 、My second job

```

jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job

```

7. GITHUB_EVENT_NAME- The name of the event that triggered the workflow. For example, workflow_dispatch.

8. GITHUB_ACTOR - The name of the person or app that initiated the workflow. For example, octocat.

9. GITHUB_ACTION_REPOSITORY - For a step executing an action, this is the owner and repository name of the action. For example, actions/checkout.

10. GITHUB_ACTION - 當前運行的操作的名稱，或 id 步驟的名稱,id 是 A unique identifier for the step. You can use the id to reference the step in contexts.

11. GITHUB_REPOSITORY - The owner and repository name. For example, octocat/Hello-World.

:::info
[參考的管網資料-contexts](https://docs.github.com/en/actions/learn-github-actions/contexts#matrix-context)
[參考的管網資料-expression](https://docs.github.com/en/actions/learn-github-actions/expressions)

[參考的管網資料-variables](https://docs.github.com/en/actions/learn-github-actions/variables)
:::
