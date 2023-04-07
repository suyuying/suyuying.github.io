---
title: CI:gitlab basic intro about  CI/CD, build image and push to git-lab container
description: basic intro
authors: suyuying
tags: [gitlab action, CICD]
---

## basic example

以下是一個使用 docker:dind 做 build image 並 push 到 container registry 的 CI 範例

```jsx title=".gitlab-ci.yml"
stages:
  - build-moni

before_script:
  - export COMMIT_TIME=$(date  +'%Y-%-m-%-d-%H-%M')


# Build moni
build-moni:
  stage: build
  image: docker:dind
  tags:
      - docker
  before_script:
      - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
  script:
      - docker build . -t $CI_IMAGE
      - docker push $CI_IMAGE
      - docker rmi $CI_IMAGE

  except:
      - schedules
      - tags
```

以下是在預設工作區域底下，執行 pip install 並執行主程式後，把產出在 history 的檔案放到 artifact 裡面，傳給下一階端的 addFinalCsvToGit,有限定 nginx-log/\*文件變動,且非 schedule 或 tags 情況才會執行 git 打 tag.後來在寫這篇文發現 except 可以不用加,加了反而會誤導.

```
stages:
  - runCode
  - addFinalCsvToGit

before_script:
  - export COMMIT_TIME=$(date  +'%Y-%-m-%-d-%H-%M')

runCodeToTg:
  stage: runCode
  image:
    name: python:3.11-slim
  only:
    changes:
      - nginx-log/*
  <!-- except:
    - schedules
    - tags -->

  tags:
    - docker

  script:
    - pip install --no-cache-dir -r ./requirment.txt
    - python3 main.py
    - ls history
    - ls
    - pwd
  artifacts:
    paths:
      - history/

addGitFile:
  stage: addFinalCsvToGit
  image:
    name: alpine/git:latest
    entrypoint: [""]
  only:
    changes:
      - nginx-log/*
  <!-- except:
      - schedules
      - tags -->
  tags:
    - docker
  script:
    - ls
    - export
    - pwd
    - git config --global user.name "ford"
    - git config --global user.email "ford"
    - git add .
    - git commit -m 'test' || echo "No changes, nothing to commit!"
    - git tag $COMMIT_TIME
    - git push https://${ciname}:${cicode}@gitlab.go2cloudten.com/it/nginx-log-session-clear.git $COMMIT_TIME
    - echo 'add file done'

  dependencies:
    - runCodeToTg

```

以上是工作過程中有使用到的範例,後面會補充上面的用法,如果有寫錯或可以改善的地方也會一起修改,並附上原因.

## basic tutorial
