---
title: environment variable and  secrets variable config in github
description: 使用 CI 跟寫程式都會遇到要從 env 拿取變數值的時候，在 github 管理方式如下，主要判斷是這個變數是否要給多個 workflow 使用。如果您不確定，也可以從存儲庫密鑰開始為所有東西創建密鑰。如果之後有引入需要不同密鑰的不同環境，例如 prod,dev,test 等，則可以將存儲庫密鑰移動到特定環境。然後在特定環境用特定變數值。
authors: suyuying
image: https://github.com/suyuying.png
tags: [github action, CICD]
---

## workflow 區分 env 設定模式

使用 CI 跟寫程式都會遇到要從 env 拿取變數值的時候，在 github 管理方式如下，主要判斷是這個變數是否要給多個 workflow 使用。

### 單 workflow 使用

非密碼類型，在 workflow 中定義 env 即可。

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

不同層次的環境變數可以繼承並覆蓋較高層次的環境變數。例如，如果您在頂級工作流程文件中設置了一個環境變數，並且在作業中使用相同的變數名稱定義了另一個值，那麼在該作業中使用的值將覆蓋頂級值。

密碼類型，就需要用到會跨多個 workflow 的 secrets 去管理。

### 多 workflow 使用

需在 github UI 設定變數。這些變數可以跨多個工作流程使用。
位置
<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./github-env-repo-variable.png").default}
      alt="github-env-repo-variable.png"
    />
  </div>
</>

主要三層級:

1. 組織
2. 存儲庫
3. 環境

   上面圖有 repo 跟 env 的，使用順序部分：Environment > Repository > Organization。
   如果有相同變數，優先用 Environment , than Repository, than：Organization。

## 使用情境

這邊提供參考

如果您不確定，也可以從存儲庫密鑰開始為所有東西創建密鑰。如果之後有引入需要不同密鑰的不同環境，例如 prod,dev,test 等，則可以將存儲庫密鑰移動到特定環境。然後在特定環境用特定變數值。

## 使用方法

### 設定在 sercrets

要用要這樣用`${{ secrets.YOURKEY }}`
為啥格式長這樣要看[secrets 上下文](https://docs.github.com/en/actions/learn-github-actions/contexts#secrets-context)

### 設定在 variables

要用要這樣用`${{ vars.YOURKEY }}`
為啥格式長這樣要看[vars 上下文](https://docs.github.com/en/actions/learn-github-actions/contexts#vars-context)

### 設定在 workflow 裡的 env

如果是在機器底下，可以用`$KEY`(linux).

設定在機器外面(job 以上層級)要用[env 上下文](https://docs.github.com/en/actions/learn-github-actions/contexts#env-context)，`${{ env.mascot }}`

:::info

[參考的官網資料-variables 管理](https://docs.github.com/en/actions/learn-github-actions/variables)
:::
