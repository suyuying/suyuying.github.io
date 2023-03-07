---
title: 將遠端分枝退版方法
description: 在local端發現build完東西fail，但是已經推到main branch了，所以執行遠端registry退版
authors: suyuying
tags: [git]
---

需要使用 git push --force,基本上 main branch 都會是保護的，
也可以考慮用 pull request 先進行測試(不能自己發 pull request 自己審)，過了再 merge。

<!--truncate-->

```
git checkout master
git reset --hard e3f1e37
git push --force origin master
# Then to prove it (it won't print any diff)
git diff master..origin/master
```

```
pull request
settings -> branches->Branch protection rules
// if you just want to try merger just choose
Require status checks to pass before merging
// if you choose Require a pull request before merging
// will get error Pull request authors cannot approve their own pull requests!

```

[參考網址](https://stackoverflow.com/questions/17667023/git-how-to-reset-origin-master-to-a-commit)
