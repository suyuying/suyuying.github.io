---
title: githug action 學習筆記
description: 整理網路提供的github  action教學，將自己的code做到CICD部署
authors: suyuying
tags: [github action]
---

需求：
免費的 server 跟 db
server 部分免費滿多的，以下提供：

db 基本上就沒有了，都 12 個月試用居多，再找找看，不行就先用 squlite 頂著

規劃：
1 台 api server(fastapi) + db 前端用 github page 託管頁面打 api server

目標：
code 更新以後，透過 CICD(git hub action)部署 api server and github page，然後測試
