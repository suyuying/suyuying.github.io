---
title: Install mysql in aws linux ami
description: 因為在安裝 mysql 到 aws 的 linux ami 上,遇到一些問題,這邊紀錄整個安裝過程！以及要改my.cnf搬移data位置要做的設定！
authors: suyuying
image: https://github.com/suyuying.png
tags: [SQL]
---

因為在安裝 mysql 到 aws 的 linux ami 上,遇到一些問題,這邊紀錄整個安裝過程！

## 安裝過程

1. 在[官網這頁](https://dev.mysql.com/downloads/repo/yum/)挑你要的安裝檔並下載,這邊我直接列出我的版本跟指令,注意你這邊選項跟你 centos 之類版本有關！

```
wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
```

2. install the MySQL Yum repository configuration package, and /etc/yum.repos.d/ would show new config of mysql.

```
rpm -ivh mysql57-community-release-el7-11.noarch.rpm
```

3. 從 mysql 的 RPM repo 那邊把 GPG key 拉下來,這會用於之後 package manager 安裝 mysql 驗證所安裝版本的數位簽章是否是官方發行,請執行以下指令

```
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
```

如果沒有執行會報錯

```
warning: /var/cache/yum/x86_64/2/mysql57-community/packages/mysql-community-libs-compat-5.7.37-1.el7.x86_64.rpm: Header V4 RSA/SHA256 Signature, key ID 3a79bd29: NOKEY
Retrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql


The GPG keys listed for the "MySQL 5.7 Community Server" repository are already installed but they are not correct for this package.
Check that the correct key URLs are configured for this repository.


 Failing package is: mysql-community-libs-compat-5.7.37-1.el7.x86_64
 GPG Keys are configured as: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
```

4. 透過 packet manager 安裝 mysql server

```
yum install mysql-community-server -y
```

5. 到這部基本上就完成了,你接著要去查密碼！基本上 5.7 的服務臨時密碼,會在`/var/log/mysqld.log`

```
cat /var/log/mysqld.log | grep "temporary password" | awk '{print $NF}'
```

6.  DONe

### 要換 data 存放位置到你新建立的 EBS

因為很常會對 mysql 的硬碟做備份,並另外 mount 硬碟給他,所以也要知道如何搬運！

這邊假設我新 mount 一個硬碟在/data 資料夾底下！然後想把資料搬過來

1. 修改 my.cnf

```jsx title="/etc/my.cnf"
[mysqld]
datadir=/data/mysql
socket=/var/lib/mysql/mysql.sock

# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
#skip-grant-tables
```

2. 停服務

```
systemctl stop mysqld
```

3. 複製文件過去到/data,rsync -a 表示以遞歸方式同步目錄，保留文件屬性（如權限、時間戳）等，-v 表示顯示詳細的輸出信息。

```
rsync -av /var/lib/mysql /data
```

4. DONe,起服務！

```
systemctl start mysqld
```

### 假如你今天忘記 mysql 密碼(5.7)

1. vim /etc/my.cnf 加入在最下面`skip-grant-tables`
2. `systemctl stop mysqld`
3. 登陸 mysql, `mysql`
4. 執行以下指令,這邊密碼會是`[$Password]`

```
USE mysql;
UPDATE user SET authentication_string = password ('[$Password]') WHERE User = 'root';
flush privileges;
quit
```

5. 把`skip-grant-tables`拿掉
6. `systemctl restart mysqld`
