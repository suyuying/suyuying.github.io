---
title: linux command(sed grep awk)
description: 從有關鍵字為 QOO 那一行到以}為開頭的那一行(^代表正則開頭字元),sed -n "/QOO/,/^}/p" common.js.
authors: suyuying
tags: [linux, sed]
---

## sed

一般打印
印 5~7 行 其他行數 silence

```
cat -n xxxx.md | sed -n '5,7p'

```

<!--truncate-->

印出指定字樣範圍
從有關鍵字為 QOO 那一行到以}為開頭的那一行(^代表正則開頭字元)

```
sed -n "/QOO/,/^}/p" common.js
```

## grep

sort 排列
uniq 去掉重複，要計數可以用 uniq -c

```
grep -r "bin" * | grep -Eo "code\":[0-9]{0,}" |sort | uniq
```

## awk
