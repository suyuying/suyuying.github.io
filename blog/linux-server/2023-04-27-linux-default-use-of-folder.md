---
title: Common folder and their uses in Linux
description: 介紹linux系統規劃各資料夾要放置哪需檔案,透過本篇,你可以知道假如你要找你的mysql資料夾(透過yum安裝),你應該去哪找.1. 用 yum 安裝 mysql 之後,請問他的數據位置會在哪個資料夾? 設定檔會在哪?數據文件會放在/var/lib 底下,以 mariadb 為例,到/var/lib/mysql 底下會看到各數據庫的數據(每個 database 一個 folder)還有 crash recovery 時用於儲存 metadata 的 log 檔案等,這是因為/var 規劃是放數據文件跟日誌文件.設定檔在/etc 底下,依據系統,centos 可能在/etc/my.cnf 或/etc/mysql/my.cnf,不過基本上都會在/etc,因為/etc 規劃放系統或應用程序的 config 的,注意 my.cnf 會用!includedir /etc/my.cnf.d 去進一步包設定檔,需要 cnf 為結尾.
authors: suyuying
image: https://github.com/suyuying.png
tags: [linux]
---

## purpose of each folder

- /（根目錄）：Linux 文件系統的起點，所有的目錄和文件都是以根目錄作為參照點。
- /bin：包含一些常用的系統二進位執行檔（executable），如 ls、cp 等等。
- /boot：系統啟動時使用的核心檔案和啟動載入器（bootloader）。
- /dev：包含一些裝置檔案（device files），如硬盤、鍵盤、滑鼠等等。
- /etc：系統全局的配置文件目錄，包含系統和應用程序的配置文件。
- /home：用戶的家目錄，即每個用戶的個人資料目錄。
- /lib：庫文件目錄，包含系統和應用程序所需的庫文件。
- /mnt：用戶暫時掛載的文件系統目錄，通常用於掛載外部儲存設備，如 USB 隨身碟、CD-ROM 等等。
- /opt：存放可選的應用程序目錄，通常包含第三方應用程序和軟件。
- /proc：虛擬文件系統目錄，允許操作系統內核和進程的運行狀態。
- /root：root 用戶的家目錄。
- /run：系統啟動後，某些程序運行時使用的暫存目錄，包括 PID 文件、掛載點等等。
- /sbin：包含一些系統管理用途的二進位執行檔，僅限 root 用戶使用。
- /srv：存放網路服務（如 FTP、HTTP）的數據目錄。
- /sys：系統文件系統，包含系統硬件和設備的信息。
- /tmp：用於存放臨時文件的目錄，一般文件都會在系統重新啟動後自動清除。
- /usr：用於存放共享的、只讀的和不經常變動的文件，包括程序和庫文件等等。
- /var：存放經常變動的文件，包括日誌文件、緩存和臨時文件,某些應用程序和服務的數據庫以及其他各種程式運行時產生的數據文件等。

### Basic concepts

單純看上面的各資料夾用處一定還是會覺得很陌生,以下用常見例子幫助了解

1. 用 yum 安裝 mysql 之後,請問他的數據位置會在哪個資料夾? 設定檔會在哪? 其他？

- 數據文件會放在/var/lib 底下,以 mariadb 為例,到/var/lib/mysql 底下會看到各數據庫的數據(每個 database 一個 folder)還有 crash recovery 時用於儲存 metadata 的 log 檔案等,這是因為/var 規劃是放數據文件跟日誌文件
- 設定檔在/etc 底下,依據系統,centos 可能在/etc/my.cnf 或/etc/mysql/my.cnf,不過基本上都會在/etc,因為/etc 規劃放系統或應用程序的 config 的,注意 my.cnf 會用!includedir /etc/my.cnf.d 去進一步包設定檔,需要 cnf 為結尾.
- pid 文件一般位于 /var/run/mysqld/mysqld.pid 或 /var/lib/mysql/{hostname}.pid
- 日誌會在/var/log/mysql 底下.
- 共用文件在 /usr/share/mysql/ 中存放的是 MySQL 的一些共用文件，其中包括：
  1. 公用的語言文件和字符集文件。
  2. 公用的系統表空間文件。
  3. 公用的插件庫文件。
  4. 公用的文檔和示例文件。

2. docker 數據文件跟設定檔？

- 數據文件會在/var/lib/docker 底下,依照 container ID 放置(另外用 bind mount 掛的不算,複習一下 bind mount 建立指令`docker run -d --name my_container \ -v /path/on/host:/path/in/container \my_image`)
- 設定檔在/etc/docker 底下,預設只有一隻 key.json,也可以加入其他設定,例如/etc/docker/daemon.json 可以對 log 格式的 size 跟輪詢做設定.
