---
title: difference between read_repository and read_registry in gitlab
description: 在gitlab裡,read_repository 主要是讓你只能抓 image 下來,read_repository 則是可以檢查 repo 裡面所有分支,commit 等,並可以 clone repository,但不能 push!
authors: suyuying
tags: [gitlab action, CICD]
---

## gitlab 權限管理

gitlab 有一堆權限管理東東,[詳情](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#personal-access-token-scopes),透過適當的設計來安全權限給予.

這邊說一下之前遇到的問題,read_repository and read_registry 差別在哪裡!官方解釋對個別解釋如下:

`read_repository`-Grants read-only (pull) access to a Container Registry images if a project is private and authorization is required. Available only when the Container Registry is enabled.

`read_repository`-Grants read-only access to repositories on private projects using Git-over-HTTP or the Repository Files API.

小結:read_repository 主要是讓你只能抓 image 下來,read_repository 則是可以檢查 repo 裡面所有分支,commit 等,並可以 clone repository,但不能 push!
