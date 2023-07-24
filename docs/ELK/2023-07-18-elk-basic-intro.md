---
title: ELK創建跟使用
description: 132
authors: suyuying
image: https://github.com/suyuying.png
tags: [ELK]
draft: true
---

1. 管理資料源- 7版之後在推使用elastic agent配合fleet做beats設定檔的集群管理,優點是可以用多個模板給機器,不需要裝很多beat就有各個beat的功能,不用一個個進去做filebeat.yml,不過這個優點對於很喜歡用跳板機的公司然後網路開通申請超麻煩的公司而言會很難用,要說資安疑慮可能就會是你的ELK系統會從原本的只負責接收資料,變成會透過fleet跟你的elastic agent主機做互動. 統一配置的問題點會在要亂搞配置很快.

2. elk建立index邏輯-filebeat往elk送日誌,elk收到後根據設定建立index,細節在於filebeat建立日誌的邏輯,他是否會發送重複日誌的可能性？filebeat透過把曾經讀取並發送的日誌,以log記錄在registry資料夾,裡面會紀錄offset,所以你會有個json檔敘述之前讀到哪個位置,所以即使之後filebeat掛掉或重啟,他都會來這隻檔案確認offset位置,並依照這個位置繼續向下方送,所以即使elk的index會每天因日期而生成不同index,他裡面的資料理論上不會有包含昨天的！如果elk掛了,那資料就會先queue在filebeat這邊,等到正常以後才會繼續發送,不過因為這樣資料會先放在ram裏面,所以要注意filebeat得設定！

3. index lifecycle management設定
有3個phase, hot warn cold,可以在上面設定很多參數
Hot phase

    - Rollover:當index達到設定的大小或天數，會產生新的index.
    - Force merge:請裡已刪除文檔,並減少shrad裡面的segment數量,是個很吃資源的動作
    - Shrink: 把primary shard由多個減少,優點是可以節省一些不同node溝通的效能.
    - Downsample:把日誌做統整,減少佔用空間
    - Read only：不建立新資訊,可以增加查詢性能
warn phase:
多replica數量:可以減少保存的副本數！

4. primary shread 跟 replica shread關係？
寫入的請情會透過主分片處理,完成操作後會把操作內容複製到replica,而執行查詢動作時,主分片跟副本分片都會被用來查詢 如此一來可以提昇查詢速度

此外 副本分片提供高可用跟故障回覆,當主分片故障會把副本提升為主分片.所以他同時作為查詢跟提升可用性

5. 