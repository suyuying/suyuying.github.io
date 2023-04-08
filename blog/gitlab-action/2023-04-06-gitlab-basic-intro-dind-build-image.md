---
title: CI:gitlab basic intro about  CI/CD, build image and push to git-lab container
description: 介紹官網資料,並提供gitlab ci使用範例,補充alpine/git:latest要用script要用到的entrypoint[""]
authors: suyuying
image: https://github.com/suyuying.png
tags: [gitlab action, CICD]
---

## basic tutorial

[以下出自官網](https://docs.gitlab.com/ee/ci/#concepts). 主要介紹幾個大方向.

### Concepts

- Pipelines: CI/CD 透過 pipeline 建立。
- CI/CD variables: 有 GitLab 預設變數（可以在 script 用 export 取得）、自定義環境變數和秘密變數。
- Environments: 要把應用部署在不同環境要使用。
- Job artifacts: 程式過程中執行的產物（例如 xxx.csv）檔案的輸出以及其他 job 使用等。
- Cache dependencies: 使用 cache 關鍵字可以幫助減少 pipeline 的運行時間，提高 CI/CD 效率。通過緩存依賴項，可以避免在每次運行 pipeline 時都從頭開始安裝相同的依賴項。
- GitLab Runner: 設定執行這個 pipeline 的計算機。
- Pipeline efficiency: 在 pipeline 過程中也會遇到一些煩人的問題，例如運行了一分鐘才失敗，需要多次查看等。如何提高效率呢？可以使用緩存、縮減要拉的映像檔大小、使用規則以及 `only`/`except` 關鍵字來控制作業在何時和何處運行。
- Test cases: 在測試平台上建立測試情境。

<!--truncate-->

### Configuration

可以設定的內容.

- Schedule pipelines: 排程
- Custom path for .gitlab-ci.yml: 客製化路徑
- Git submodules for CI/CD: 如果你要用其他 repo 資料可以用這個
- SSH keys for CI/CD: 如果你要在目標 server 上面部署程式，在使用 gitlab runner 是 docker containers 情況下，需要建立 SSH 公私鑰，以便 container 透過 ssh 連線並部署。
- Pipeline triggers: 需要用 webhook 方式呼喚 pipline 時使用
- Merge request pipelines: 如果是要在發出 merge 請求時跑的 pipline 要另外設定
- Integrate with Kubernetes clusters：連 k8s 要用的設定
- Optimize GitLab and GitLab Runner for large repositories: 優化 pipline 原則
- .gitlab-ci.yml full reference：.gitlab-ci.yml 裡面有一大堆可以用的[設定關鍵字](https://docs.gitlab.com/ee/ci/yaml/index.html)

### .gitlab-ci.yml 配置参数

[stages](https://docs.gitlab.com/ee/ci/yaml/index.html#stages)- 默認有 build、test、deploy 三階端,如果有工作未標記 stage 則使用 test，相同 stage 並行運行，默認上一個 stage 完成才會接下一個 stage，且前一階段 stage 的失敗的話，下一階段不會執行，且標記該 commit 是 failed.

`stage`- 描述 stages 中定義的 stage，依序執行，同 stage 會併發執行.

`only`- 確定了哪些分支或標籤(branches and tags)的工作會運行

`except`- 確定了哪些分支或標籤(branches and tags)的工作不會運行

`only` `except`-可以同時定義，有衝突以 only 為主，支援正則，有以下 key word 可以使用

| Value                  | Description                                                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| api                    | For pipelines triggered by the pipelines API.                                                                                                  |
| branches               | When the Git reference for a pipeline is a branch.                                                                                             |
| chat                   | For pipelines created by using a GitLab ChatOps command.                                                                                       |
| external               | When you use CI services other than GitLab.                                                                                                    |
| external_pull_requests | When an external pull request on GitHub is created or updated (See Pipelines for external pull requests).                                      |
| merge_requests         | For pipelines created when a merge request is created or updated. Enables merge request pipelines, merged results pipelines, and merge trains. |
| pipelines              | For multi-project pipelines created by using the API with CI_JOB_TOKEN, or the trigger keyword.                                                |
| pushes                 | For pipelines triggered by a git push event, including for branches and tags.                                                                  |
| schedules              | For scheduled pipelines.                                                                                                                       |
| tags                   | When the Git reference for a pipeline is a tag.                                                                                                |
| triggers               | For pipelines created by using a trigger token.                                                                                                |
| web                    | For pipelines created by selecting Run pipeline in the GitLab UI, from the project’s CI/CD > Pipelines section.                                |

```jsx title=正則範例
job:
  # use regexp
  only:
    - /^issue-.*$/
  # use special keyword
  except:
    - branches

```

`when`-當作業 fail 或故障時運行
`environment`- 用於將您的應用程序部署到特定的環境中。透過執行腳本等功能達成

```
deploy:
  stage: deploy
  script:
    - deploy_to_production.sh
  environment:
    name: production
    url: https://example.com
  only:
    - master
```

`artifacts`- 指定將哪些文件附加到作業中
`dependencies` - 傳遞產生的 artifacts

以上是一些常用的 key word.

## basic example

以下是範例應用,CI 建立 image 並推倒 container registry

```jsx title=".gitlab-ci.yml"
stages:
  - build-moni


# 構建 moni
build-moni:
  # 定義 job 所在的階段
  stage: build
  # 定義 job 所使用的 Docker 鏡像
  image: docker:dind
  # 定義 Runner 標籤,沒有對應到runner tag會報錯
  tags:
    - docker
  # 在執行 job 之前要執行的命令
  before_script:
    # 使用內建變數登入 GitLab 容器倉庫,拿到最外層會因為沒有docker 指令而報錯
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
  # 定義 job 的實際執行內容
  script:
    # 使用 Docker 構建您的應用程序，並將其命名為 $CI_IMAGE
    - docker build . -t $CI_IMAGE
    # 將 Docker 鏡像推送到 GitLab 的容器倉庫
    - docker push $CI_IMAGE
    # 刪除本地機器上的 Docker 鏡像
    - docker rmi $CI_IMAGE
  # 定義不執行該 job 的情況
  except:
    # 不在預定的任務和標籤提交時執行
    - schedules
    - tags

```

以下是範例應用,把程式執行後產生的檔案，以執行當下時間打 tag 並推倒 git repo

```
stages:
  - runCode  # 運行代碼的階段
  - addFinalCsvToGit  # 將結果提交到 Git 階段

# 定義運行作業前要運行的任何腳本
before_script:
  - export COMMIT_TIME=$(date  +'%Y-%-m-%-d-%H-%M')  # 建立環境變數以定義git提交的時間

# 定義一個作業，它在 `runCode` 階段運行
runCodeToTg:
  stage: runCode  # 設定作業所處的階段
  image:  # 設定作業使用的 Docker 映像檔
    name: python:3.11-slim
  only:  # 設定作業在哪些情況下運行
    changes:  # 只有當指定目錄中的文件發生變化時才運行
      - nginx-log/*
  # except:  # 如果希望排除某些情況下不運行，可以使用 except 字段
  #   - schedules
  #   - tags
  tags:  # 使用 Docker 標籤限制作業在哪些 Runner 上運行,沒有對應的runner就不會執行
    - docker
  script:  # 定義作業所需運行的命令
    - pip install --no-cache-dir -r ./requirment.txt  # 安裝依賴庫
    - python3 main.py  # 執行代碼
    - ls  # 查看當前目錄
    - pwd  # 查看當前工作目錄
  artifacts:  # 定義作業要保存的產物
    paths:
      - history/  # 保存 history 目錄

# 定義一個作業，它在 `addFinalCsvToGit` 階段運行
addGitFile:
  stage: addFinalCsvToGit  # 設定作業所處的階段
  image:  # 設定作業使用的 Docker 映像檔
    name: alpine/git:latest
    entrypoint: [""]  # 設定image run 起來執行的程式碼
  only:  # 設定作業在哪些情況下運行
    changes:  # 只有當指定目錄中的文件發生變化時才運行
      - nginx-log/*
  # except:  # 如果希望排除某些情況下不運行，可以使用 except 字段
  #   - schedules
  #   - tags
  tags:  # 使用 Docker 標籤限制作業在哪些 Runner 上運行
    - docker
  script:
    - ls  # 列出當前目錄的內容
    - export  # 查看所有的環境變量
    - pwd  # 查看當前工作目錄的路徑
    - git config --global user.name "ford"  # 設置 Git 全局用戶名
    - git config --global user.email "ford"  # 設置 Git 全局用戶郵箱
    - git add .  # 添加當前目錄中的所有更改到 Git 倉庫
    - git commit -m 'test' || echo "No changes, nothing to commit!"  # 提交更改
    - git tag $COMMIT_TIME  # 為提交打標籤
    - git push https://${ciname}:${cicode}@gitlab.go2cloudten.com/it/nginx-log-session-clear.git $COMMIT_TIME  # 推送更改到 Git 倉庫
    - echo 'add file done'  # 顯示任務執行完成的消息
# 從runCodeToTg那邊取得history資料夾到當下git 目錄
  dependencies:
    - runCodeToTg
```

補充:

1. entrypoint: [""] 這是個神奇的 issue 設定 image run 起來後面要執行 script 要這樣加,不這樣加會遇到報錯 git: 'sh' is not a git command. See 'git --help',相關[issue](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/4027)

2. repo 通常指 Git 版本控制系統中的存儲庫,registry 是一個存儲 image 的地方,兩者有差別歐！

:::info
參考資料

- [官網](https://docs.gitlab.com/ee/ci/yaml/index.html)
- [GitLab CI 流水线配置文件.gitlab-ci.yml 详解](https://meigit.readthedocs.io/en/latest/gitlab_ci_.gitlab-ci.yml_detail.html#gitlab-ci-gitlab-ci-yml)

:::
