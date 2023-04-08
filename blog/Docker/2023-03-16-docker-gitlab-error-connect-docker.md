---
title: docker gitlab runner error during connect Post "http://docker:2375/v1.24/auth" dial tcp lookup docker on 1.1.1.1:53 no such host
description: 執行這個修改，volumes 改為 ["/var/run/docker.sock:/var/run/docker.sock", "/cache"]，讓 Runner Executor 使用主機外部的 Docker Engine。所以推測，這可能是 gitlab runner 跟 gitlab server 上面驗證的機制，如果沒有這樣加，dind 就找不到 gitlab server 的驗證那關，所以就會失敗
authors: suyuying
image: https://github.com/suyuying.png
tags: [docker]
---

## 遇到問題的情境

CICD 步驟裡面，每當開發人員把 code 寫完之後，會進行測試並把 code build 成 image 後推到 image registry
，之後到環境執行 deploy。

在 gitlab 裡面會用 gitlab runner，並在.gitlab-ci.yml 設計促發的情境下，執行.gitlab-ci.yml 內容，要在 gitlab runner 內 build image 通常會用到 docker:dind，它是具有 docker 引擎的 container！一般的 image 內通常都不會去安裝 docker 引擎，這段有點難懂，但你可以想想有 nginx,mysql 等等的 image，基本上只會有自己預設功能，不需要 docker 引擎，對於 docker 而言，裡面要可以用 docker 指令的， docker:dind 是一個選項。

在 build 版執行的 yml 如下。
主要功能就是登入在 gitlab 上面的公司的 image registry,之後在 gitlab runner 執行 build image 並推到 gitlab image registry.

```jsx title=".gitlab-ci.yml"
stages:
    - build

variables:
    IMAGE_NAME: hahaha
    CI_IMAGE: $CI_REGISTRY_IMAGE/$IMAGE_NAME:$CI_COMMIT_SHORT_SHA

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


```

```jsx title="Dockerfile"
FROM node:16

COPY /node /node
WORKDIR /node
RUN npm install;npm install gulp -g;gulp build;
EXPOSE 4000
CMD [ "npm", "run", "start" ]
```

執行過程到這一步`- docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY`遇到報錯，
`error during connect: Post "http://docker:2375/v1.24/auth": dial tcp: lookup docker on 1.1.1.1:53: no such host`。

### 解法:

在你掛到 gitlab runner 中 /etc/gitlab-runner 裡面的 config.toml，請先用 docker inspect 觀察 volume 掛載位置，如果你是用官網 local volume 掛載方法，那就是在 VM 上去 vim /srv/gitlab-runner/config/config.toml，去修改
`volumes = ["/cache"]` 變成
`volumes = ["/var/run/docker.sock:/var/run/docker.sock","/cache"]`。

並執行`docker restart gitlab-runner`!

### 可能原因：

執行這個修改，volumes 改為 ["/var/run/docker.sock:/var/run/docker.sock", "/cache"]，讓 Runner Executor 使用主機外部的 Docker Engine。

所以推測，這可能是 gitlab runner 跟 gitlab server 上面驗證的機制，如果沒有這樣加，dind 就找不到 gitlab server 的驗證那關，所以就會失敗
