---
title: Delete log file than recreate log file, will log still write into it? Besides,compare with logrotate
description: 在logging紀錄log方式下,程式本身應該是認inode的.你把日誌刪除後,即使新增同樣檔名的空白檔,一樣不會寫入日誌！linux管理日誌系統避免其大小過大,並進行適當rotation的工具是`logrotate`,他也會遇到日誌檔名的修改問題！那是怎麽做到輪詢這件事？

authors: suyuying
tags: [file system]
---

## 基礎linux文件管理

inode(index node)是linux系統的一種資料結構，儲存了檔案系統的屬性跟磁碟位置.檔案系統的屬性有以下元數據訊息:

- 文件類型
- 文件權限
- 文件所有者跟所屬組
- 時間戳記
- 文件大小
- 硬鏈接數
- 數據塊指針(文件系統內部機制)

可以用`stat`指令查詢.

```bash
stat output.xdddd

  File: output.xdddd
  Size: 0          Blocks: 0          IO Block: 4096   regular empty file
Device: ca01h/51713d Inode: 17058       Links: 1
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2023-08-09 02:11:13.675880181 +0000
Modify: 2023-08-08 11:10:17.005957501 +0000
Change: 2023-08-08 11:10:17.005957501 +0000
 Birth: 2023-08-08 11:10:17.005957501 +0000

```

其中權限這邊,0644,開頭的0代表特殊權限,分別有0(無特別),1(Sticky Bit,只有文件所有者才能刪除文件),2(Setuid,以文件所有者權限執行),4(Setgid,共享群組相關),而後面的644代表分别表示文件所有者、所属组和其他用户的權限,分別是owner可讀可寫,所屬組可讀,其他人可讀.

ps. root 用戶擁有系統的最高權限，它基本上可以繞過文件權限限制，訪問和修改任何文件,除非特殊狀況如加密,selinux,特殊權限immtable

```bash
~# chattr  -i output.xdddd # 加注不能刪

~# lsattr output.xdddd
----i---------e------- output.xdddd
```

`file`指令看文件型態

```bash
~# file testpy.tar.gz
testpy.tar.gz: gzip compressed data, from Unix, original size modulo 2^32 10240
```

:::note
用戶在操作文件和目錄時，使用的是文件名，而文件系統則使用inode來跟踪和管理這些文件和目錄.
:::

## lab

這邊會測試把log刪除後新增同檔名的空白檔案,後續日誌是否會寫入！原因是因為之前遇到過不小心刪掉log,導致服務需重啟才能繼續寫入日誌的慘劇

1. 以下指令會創建log,並每秒定時寫入,執行它

```python
import time
import logging

# 配置日志记录
logging.basicConfig(filename="output.log", level=logging.INFO, format="%(asctime)s - %(message)s")

while True:
    current_time = time.strftime("%Y-%m-%d %H:%M:%S")
    line = f"This is a line of text at {current_time}"
    logging.info(line)
    time.sleep(1)
```

2. 觀察進程開啟檔案狀態,這邊看到pid是46136,這邊會看到有描述符號指向/root/out.log

```bash
root@ip-10-0-0-83:~# ps -ef  |grep python3
root         432       1  0 Aug08 ?        00:00:00 /usr/bin/python3 /usr/bin/networkd-dispatcher --run-startup-triggers
root         541       1  0 Aug08 ?        00:00:00 /usr/bin/python3 /usr/share/unattended-upgrades/unattended-upgrade-shutdown --wait-for-signal
root       46136   45975  0 02:46 pts/1    00:00:00 python3 test.py
root       46224   46204  0 02:46 pts/3    00:00:00 grep --color=auto python3
```

```bash
root@ip-10-0-0-83:~# cd /proc/46136/fd/
root@ip-10-0-0-83:/proc/46136/fd# ll
total 0
dr-x------ 2 root root  0 Aug  9 02:47 ./
dr-xr-xr-x 9 root root  0 Aug  9 02:46 ../
lrwx------ 1 root root 64 Aug  9 02:47 0 -> /dev/pts/1
lrwx------ 1 root root 64 Aug  9 02:47 1 -> /dev/pts/1
lrwx------ 1 root root 64 Aug  9 02:47 2 -> /dev/pts/1
l-wx------ 1 root root 64 Aug  9 02:47 3 -> /root/output.log
```

3. 接著我把檔案`output.log`刪除,並觀察進程開啟檔案狀態,發現狀態變deleted

```bash
root@ip-10-0-0-83:/proc/46136/fd# rm -f /root/output.log
root@ip-10-0-0-83:/proc/46136/fd# ll
total 0
dr-x------ 2 root root  0 Aug  9 02:47 ./
dr-xr-xr-x 9 root root  0 Aug  9 02:46 ../
lrwx------ 1 root root 64 Aug  9 02:47 0 -> /dev/pts/1
lrwx------ 1 root root 64 Aug  9 02:47 1 -> /dev/pts/1
lrwx------ 1 root root 64 Aug  9 02:47 2 -> /dev/pts/1
l-wx------ 1 root root 64 Aug  9 02:47 3 -> '/root/output.log (deleted)'
```

4. 新增同檔名的空白檔,狀態依舊是deleted

```bash
root@ip-10-0-0-83:/proc/46136/fd# touch /root/output.log
root@ip-10-0-0-83:/proc/46136/fd# ll
total 0
dr-x------ 2 root root  0 Aug  9 02:47 ./
dr-xr-xr-x 9 root root  0 Aug  9 02:46 ../
lrwx------ 1 root root 64 Aug  9 02:47 0 -> /dev/pts/1
lrwx------ 1 root root 64 Aug  9 02:47 1 -> /dev/pts/1
lrwx------ 1 root root 64 Aug  9 02:47 2 -> /dev/pts/1
l-wx------ 1 root root 64 Aug  9 02:47 3 -> '/root/output.log (deleted)'
```

由以上得知,在logging紀錄log方式下,程式本身應該是認inode的.你把日誌刪除後,即使新增同樣檔名的空白檔,一樣不會寫入日誌！

## logrotate

linux管理日誌系統避免其大小過大,並進行適當rotation的工具是`logrotate`,他也會遇到日誌檔名的修改問題！那是怎麽做到輪詢這件事？

當一個進程（例如 logrotate）對一個日誌文件進行輪轉時，通常會執行以下步驟，以確保新的日誌條目被寫入新的 inode 中：

1. 關閉舊的文件描述符：在開始輪轉過程之前，進程會關閉舊的日誌文件的文件描述符。這確保進程不會繼續往舊文件中寫入新的日誌條目。

2. 重命名或移動舊文件：進程會將舊的日誌文件重命名或移動到備份位置，以便創建一個新的空白文件用於寫入新的日誌。

3. 創建新的文件：進程會創建一個新的空白文件，這個新文件將具有一個新的 inode。

4. 打開新文件描述符：進程會打開新創建的文件的文件描述符，以便將新的日誌條目寫入其中。

5. 寫入新的日誌條目：進程開始將新的日誌條目寫入新的文件描述符所指向的新文件（新 inode）中。

以下是lab測試過程

1. 確認目前log inode值

```bash
root@ip-10-0-0-83:/var/log/nginx# ls -i
309494 access.log  309495 error.log
```

2. 強制執行logrotate

```bash
root@ip-10-0-0-83:/var/log/nginx# logrotate -f  /etc/logrotate.d/nginx
```

3. 確認同檔名error.log的inode值已改變(由309495->341209)

```bash
root@ip-10-0-0-83:/var/log/nginx# ls -i
309494 access.log  341209 error.log  309495 error.log.1
```

4. 測試確認是否可以寫入log,這邊確認可以寫入

```bash
root@ip-10-0-0-83:/var/log/nginx# nginx
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Unknown error)
nginx: [emerg] bind() to [::]:80 failed (98: Unknown error)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Unknown error)
nginx: [emerg] bind() to [::]:80 failed (98: Unknown error)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Unknown error)
nginx: [emerg] bind() to [::]:80 failed (98: Unknown error)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Unknown error)
nginx: [emerg] bind() to [::]:80 failed (98: Unknown error)
root@ip-10-0-0-83:/var/log/nginx# ll
total 16
drwxr-xr-x  2 root     adm    4096 Aug  9 03:21 ./
drwxrwxr-x 12 root     syslog 4096 Aug  9 03:17 ../
-rw-r-----  1 www-data adm       0 Aug  9 03:17 access.log
-rw-r-----  1 www-data adm     700 Aug  9 03:23 error.log
-rw-r-----  1 www-data adm     603 Aug  9 03:17 error.log.1
```
