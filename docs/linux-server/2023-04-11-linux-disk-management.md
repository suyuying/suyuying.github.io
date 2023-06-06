---
title: linux disk management command used commonly
description: 在管理上會去檢視硬碟使用量,資料夾資料大小,如果掛硬碟跟卸下硬碟也會有專用 command,雖然各家申請硬碟方式不一樣,但是 linux command 是可以共用的！並說明掛載硬碟跟卸載硬碟方法
authors: suyuying
tags: [linux, disk command, aws]
---

## disk management command

在管理上會去檢視硬碟使用量,資料夾資料大小,如果掛硬碟跟卸下硬碟也會有專用 command

`df -h`: 列出所有已掛載的硬盤的分區信息以及剩餘空間大小,結果長這樣

```
Filesystem      Size  Used Avail Use% Mounted on
devtmpfs        7.6G     0  7.6G   0% /dev
tmpfs           7.7G     0  7.7G   0% /dev/shm
tmpfs           7.7G  801M  6.9G  11% /run
tmpfs           7.7G     0  7.7G   0% /sys/fs/cgroup
/dev/nvme0n1p1  100G  6.0G   95G   6% /
/dev/nvme1n1    300G  7.1G  293G   3% /var/gogo
tmpfs           1.6G     0  1.6G   0% /run/user/1000
```

<!--truncate-->

`du -sh *`: 列出當前目錄下所有文件和子目錄的大小

```
[root@72slaves ~]# du -sh *
0	123
4.0K	123.sh
4.0K	anaconda-ks.cfg
60K	app
156K	async-fastapi-mongo
2.8M	cf-workers-status-page-v1
36K	docker
......
```

`lsblk -f`:檢視是否有任何磁碟區已在啟動時映射，但尚未格式化和掛載。 以下是一般都有掛載時.

```
NAME            FSTYPE      LABEL           UUID                                   MOUNTPOINT
sr0             iso9660     CentOS 7 x86_64 2020-04-22-00-54-00-00
vda
├─vda1          xfs                         68c17843-072c-45ce-b3ea-c48a6eb5317c   /boot
└─vda2          LVM2_member                 4GHWpr-dPQk-Dn22-Uhou-uxN4-4ZbT-r9OY0H
  ├─centos-root xfs                         ff74c584-efb1-40b3-b607-c0f0b5d37fa1   /
  ├─centos-swap swap                        8d866b90-7445-4ee7-ae20-f3742e5971ec   [SWAP]
  └─centos-home xfs                         0119a471-e11b-4803-9c19-42e637ed372a   /home
```

:::danger
如果您要掛載的磁碟區已有資料 (例如，從快照建立的磁碟區)，請不要使用此命令。

`mkfs -t xfs /dev/urdisk`:格式化硬碟並指定檔案系統.

:::

`mkdir -p /data`:先建立好/data 資料夾

`mount /dev/urdisk /data`:把硬碟掛載到/data 資料夾(請先建立好/data 資料夾)

`umount /data`:由/data 卸載硬碟

### how to mount disk in aws

以 aws 為例,要申請硬碟並在 instance 上用機器掛載

1. 開啟 AWS EC2 控制台
2. 選擇要掛載硬碟的實例，並在左側選單點擊「Volumes」
3. 在「Volumes」頁面點擊「Create Volume」
4. 設定硬碟大小、AZ、類型等資訊，並點擊「Create Volume」
5. 等待硬碟創建完成,沒有完成你 attach volume 做
6. 在「Volumes」頁面勾選剛剛創建的硬碟，點擊「Actions」，選擇「Attach Volume」
7. 在「Attach Volume」彈出框中選擇要掛載硬碟的 EC2 實例，以及設定掛載路徑和裝置名稱
8. 點擊「Attach」
9. 登入 EC2 實例，執行指令 `lsblk -f` 確認硬碟是否掛載成功,去找那個沒有<highlight color="#1877F2"> FSTYPE 的 NAME,EX:xvdf</highlight>,:

```
NAME		FSTYPE	LABEL	UUID						MOUNTPOINT
xvda
├─xvda1   xfs          /     d0c265c4-6ea1-4060-b815-520e1c2aae05    5.8G    26% /
├─xvda127
└─xvda128 vfat   FAT16       606C-CF35
xvdf
```

10. 如果硬碟還沒有格式化，執行指令 sudo mkfs -t xfs /dev/xvdf 格式化硬碟（假設硬碟裝置名稱是 /dev/xvdf）
11. 建立要掛載硬碟的目錄，例如 sudo mkdir /data
12. 將硬碟掛載到目錄上，例如 sudo mount /dev/xvdf /data
13. 確認掛載成功，執行指令 df -h 查看！
14. 用 `lsblk -f` 去看 UUID

```
[root@ford-ec2-bastion-uw1 ~]# lsblk -f
NAME      FSTYPE FSVER LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
xvda
├─xvda1   xfs          /     d0c265c4-6ea1-4060-b815-520e1c2aae05    5.8G    26% /
├─xvda127
└─xvda128 vfat   FAT16       606C-CF35
xvdf      xfs                8dbb60fe-5653-4668-8a7f-7cdeba1e7839
```

15. 若要在每次系統開機時掛載連接的 EBS 磁碟區,先用 lsblk -f 看 UUID,並 vim /etc/fstab 加入以下(UUID 換成自己的).

```jsx title="/etc/fstab"
UUID=8dbb60fe-5653-4668-8a7f-7cdeba1e7839  /data  xfs  defaults  0  0
```

:::info
在以上範例中，將 UUID aebf131c-6957-451e-8d34-ec978d9581ae 的裝置掛載至掛載點 /data，並使用 xfs 檔案系統.

第四欄是檔案系統參數,可以上網查個選項！

第五欄是 dump,dump 會根據這個設定決定是否需要備份，一般為 0, 即不備份；1 為每日備份；2 為隔日備份,dump 僅支援 EXT 家族，若使用 xfs 檔案系統，則不用考慮 dump 項目。因此直接輸入 0 即可。

第六欄： fsck ，早期開機的流程中，會有一段時間去檢驗本機的檔案系統，看看檔案系統是否完整 (clean)。 不過這個方式使用的主要是透過 fsck 去做的，我們現在用的 xfs 檔案系統就沒有辦法適用，因為 xfs 會自己進行檢驗，不需要額外進行這個動作！所以直接填 0 就好了。(以上四五六項內容參考自[鳥哥](https://linux.vbird.org/linux_basic_train/centos7/unit06.php#6.2))
:::

16. 檢查是否有掛載成功

```
# Verify mount disk successfully
umount /data
mount -a
```

### how to umount disk in aws

0. 先做好備份，如果做錯了，該怎麼還原要先想好
1. 檢查該 300G 是否有被啟動的服務使用到 指令 ex.`lsof /dev/vda1`
2. 停掉相關有使用的服務
3. 將該 300G 的硬碟 umount 掉 ex.`umount /data`
4. 檢查/etc/fstab 上有無設定掛載那 300G 硬碟
5. 將/etc/fstab 有設定的那 300G 註解掉
6. 下 mount -a 檢查有沒有確實拿掉，這樣在下次重開機就不會在吃到的
7. 從 AWS 上直接把那顆硬碟做刪除

### Brief summary

各家申請硬碟方式不一樣,但是 linux command 是可以共用的！
