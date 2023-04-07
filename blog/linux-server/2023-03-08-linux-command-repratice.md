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

### grep -r vs grep -R

先說結論: 兩者差別在-R 可以抓到軟連結資料連結到的物理檔案，而-r 不行，所以-R 功能比較強大。

#### 軟連結(soft link) vs 硬連結(hard link)

硬連結建立方式`ln file.txt hardlink.txt` 軟連結建立方式`ln -s file.txt softlink.txt`,硬連結產生的 inode 數字會與 file.txt 相同，軟連結則會產生一個新的 inode.在使用上原始檔案 file.txt 被移除時,hardlink.txt 依舊可以顯示 file.txt 內容，而 softlink.txt 會失效，除非移除所有 hardlink.txt 才會移除掉原本的物理檔案.

#### inode

inode 是 Unix 風格的檔案系統中的一種資料結構,會連結到檔案系統物件,每個 inode 儲存了物件資料的屬性和磁碟區塊位置,例如元資料、擁有者、權限、大小等.inode 號碼是檔案系統內 inode 的唯一識別碼.

## awk
