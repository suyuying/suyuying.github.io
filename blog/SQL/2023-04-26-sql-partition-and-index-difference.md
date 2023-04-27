---
title: mysql partition跟 index 區別
description: 透過建立partition跟 index的lab,來看檔案變化,分 partition 後,會出現 par 跟 ibd 子表,而建立 index 會在表前面加個地圖索引的感覺,所以容量會多很多.這是因為 Index 實際上是另一個結構，用來儲存欄位值和指向相應資料行的指標。並回答為什麼使用 athena 需要先建立 partition,再執行查詢?
authors: suyuying
image: https://github.com/suyuying.png
tags: [SQL]
---

## 目標

前言,工作中遇到 aws athena 查詢 S3 log 過程中需要先建立 partition,這時候腦中浮現幾個問題.

1. partition 是什麼?
2. partition 跟 index 區別?
3. 什麼時候會需要用到 partition?
4. 為什麼使用 athena 需要先建立 partition,再執行查詢?

背景須知:

- .frm 檔案是 MySQL 資料表的結構定義檔案，它存放了資料表的欄位資訊、索引、主鍵、外鍵等等的相關設定。

- .ibd 檔案是 InnoDB 存儲引擎使用的資料檔案，存放著實際的資料內容。
  新建一個表會依據表名出現{表名}.frm,{表名}.ibd.

### partition 是什麼?

Partition 則是透過將表分割成多個小的子表（partition），然後將資料分散儲存在不同的 partition 中，以提高查詢效率。通常數據到百萬級別可以考慮用 Partition 區分,例如,你原本一張表裡面放 1~12 月的數據(有日期欄位區分),透過 Partition 將該表分成 1~12 月的 Partition,資料本身仍然存儲在原始表中。Partition 只是一種邏輯上的分類方式，用來提高查詢效率和管理大型資料表

### lab

建表指令

```
CREATE TABLE customer_expenses (
    customer_name VARCHAR(50) NOT NULL,
    expense_amount DECIMAL(10, 2) NOT NULL,
    expense_item VARCHAR(100) NOT NULL,
    expense_date DATE NOT NULL
);
```

切表前檔案長相

```
-rw-rw---- 1 mysql mysql   691 4月  27 11:33 customer_expenses.frm
-rw-rw---- 1 mysql mysql 65536 4月  27 11:33 customer_expenses.ibd
```

切表指令

```
ALTER TABLE customer_expenses PARTITION BY RANGE (MONTH(expense_date)) (
PARTITION p1 VALUES LESS THAN (2),
PARTITION p2 VALUES LESS THAN (3),
PARTITION p3 VALUES LESS THAN (4),
PARTITION p4 VALUES LESS THAN (5),
PARTITION p5 VALUES LESS THAN (6),
PARTITION p6 VALUES LESS THAN (7),
PARTITION p7 VALUES LESS THAN (8),
PARTITION p8 VALUES LESS THAN (9),
PARTITION p9 VALUES LESS THAN (10),
PARTITION p10 VALUES LESS THAN (11),
PARTITION p11 VALUES LESS THAN (12),
PARTITION p12 VALUES LESS THAN MAXVALUE
);

```

切表後檔案長相,會多一個 par 底下有 12 個子表 ibd

```
-rw-rw---- 1 mysql mysql  1404 4月  27 11:36 customer_expenses.frm
-rw-rw---- 1 mysql mysql   116 4月  27 11:36 customer_expenses.par
-rw-rw---- 1 mysql mysql 65536 4月  27 11:36 customer_expenses#P#p10.ibd
-rw-rw---- 1 mysql mysql 65536 4月  27 11:36 customer_expenses#P#p11.ibd
-rw-rw---- 1 mysql mysql 65536 4月  27 11:36 customer_expenses#P#p12.ibd
-rw-rw---- 1 mysql mysql 65536 4月  27 11:36 customer_expenses#P#p1.ibd
-rw-rw---- 1 mysql mysql 65536 4月  27 11:36 customer_expenses#P#p2.ibd
-rw-rw---- 1 mysql mysql 65536 4月  27 11:36 customer_expenses#P#p3.ibd
-rw-rw---- 1 mysql mysql 65536 4月  27 11:36 customer_expenses#P#p4.ibd
-rw-rw---- 1 mysql mysql 65536 4月  27 11:36 customer_expenses#P#p5.ibd
-rw-rw---- 1 mysql mysql 65536 4月  27 11:36 customer_expenses#P#p6.ibd
-rw-rw---- 1 mysql mysql 65536 4月  27 11:36 customer_expenses#P#p7.ibd
-rw-rw---- 1 mysql mysql 65536 4月  27 11:36 customer_expenses#P#p8.ibd
-rw-rw---- 1 mysql mysql 65536 4月  27 11:36 customer_expenses#P#p9.ibd
```

隨機插入數據指令

```
INSERT INTO customer_expenses (customer_name, expense_amount, expense_item, expense_date)
SELECT CONCAT('customer', t.n), ROUND(RAND()*1000), CONCAT('item', t.n), DATE('2023-01-01') + INTERVAL ROUND(RAND()*364) DAY
FROM (
    SELECT ones.n + 10*tens.n + 100*hundreds.n + 1000*thousands.n + 1 AS n
    FROM (SELECT 0 AS n UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) AS ones
    CROSS JOIN (SELECT 0 AS n UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) AS tens
    CROSS JOIN (SELECT 0 AS n UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) AS hundreds
    CROSS JOIN (SELECT 0 AS n UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) AS thousands
) t
LIMIT 100;
```

共 4500 筆,看行數

```
SELECT COUNT(*) FROM customer_expenses;
+----------+
| COUNT(*) |
+----------+
|     4500 |
+----------+
1 row in set (0.002 sec)
```

這時候檔案長相

```
-rw-rw---- 1 mysql mysql  1404 4月  27 11:36 customer_expenses.frm
-rw-rw---- 1 mysql mysql   116 4月  27 11:36 customer_expenses.par
-rw-rw---- 1 mysql mysql 98304 4月  27 11:43 customer_expenses#P#p10.ibd
-rw-rw---- 1 mysql mysql 98304 4月  27 11:43 customer_expenses#P#p11.ibd
-rw-rw---- 1 mysql mysql 98304 4月  27 11:43 customer_expenses#P#p12.ibd
-rw-rw---- 1 mysql mysql 98304 4月  27 11:43 customer_expenses#P#p1.ibd
-rw-rw---- 1 mysql mysql 98304 4月  27 11:43 customer_expenses#P#p2.ibd
-rw-rw---- 1 mysql mysql 98304 4月  27 11:43 customer_expenses#P#p3.ibd
-rw-rw---- 1 mysql mysql 98304 4月  27 11:43 customer_expenses#P#p4.ibd
-rw-rw---- 1 mysql mysql 98304 4月  27 11:43 customer_expenses#P#p5.ibd
-rw-rw---- 1 mysql mysql 98304 4月  27 11:43 customer_expenses#P#p6.ibd
-rw-rw---- 1 mysql mysql 98304 4月  27 11:43 customer_expenses#P#p7.ibd
-rw-rw---- 1 mysql mysql 98304 4月  27 11:43 customer_expenses#P#p8.ibd
-rw-rw---- 1 mysql mysql 98304 4月  27 11:43 customer_expenses#P#p9.ibd
```

對 customer_name 建立 index

```
 ALTER TABLE customer_expenses ADD INDEX idx_customer_name (customer_name);
```

這時候檔案長相

```
总用量 1736
-rw-rw---- 1 mysql mysql   1896 4月  27 11:44 customer_expenses.frm
-rw-rw---- 1 mysql mysql    116 4月  27 11:44 customer_expenses.par
-rw-rw---- 1 mysql mysql 147456 4月  27 11:44 customer_expenses#P#p10.ibd
-rw-rw---- 1 mysql mysql 147456 4月  27 11:44 customer_expenses#P#p11.ibd
-rw-rw---- 1 mysql mysql 147456 4月  27 11:44 customer_expenses#P#p12.ibd
-rw-rw---- 1 mysql mysql 147456 4月  27 11:44 customer_expenses#P#p1.ibd
-rw-rw---- 1 mysql mysql 147456 4月  27 11:44 customer_expenses#P#p2.ibd
-rw-rw---- 1 mysql mysql 147456 4月  27 11:44 customer_expenses#P#p3.ibd
-rw-rw---- 1 mysql mysql 147456 4月  27 11:44 customer_expenses#P#p4.ibd
-rw-rw---- 1 mysql mysql 147456 4月  27 11:44 customer_expenses#P#p5.ibd
-rw-rw---- 1 mysql mysql 147456 4月  27 11:44 customer_expenses#P#p6.ibd
-rw-rw---- 1 mysql mysql 147456 4月  27 11:44 customer_expenses#P#p7.ibd
-rw-rw---- 1 mysql mysql 147456 4月  27 11:44 customer_expenses#P#p8.ibd
-rw-rw---- 1 mysql mysql 147456 4月  27 11:44 customer_expenses#P#p9.ibd

```

### partition 跟 index 區別?

Partition 通常是用來將表拆分成更小的邏輯部分，例如按照時間區間、地理位置等劃分，以方便管理和提高效率。而 index 通常是用來對某些欄位建立索引，以提高查詢效率。例如，對一個大的用戶表建立使用者名稱的索引，可以讓查詢使用者更快速。

兩者可以根據具體情況相互補充，以達到更好的性能優化效果。

### 什麼時候會需要用到 partition?

當表過大時，查詢和維護都會變得很慢。使用 partition 可以把一個大表分成多個小表，每個小表的查詢和維護速度都會比大表快，進而提高效能。

### 為什麼使用 athena 需要先建立 partition,再執行查詢?

因會 athena 建立 partition 不用錢,執行查詢則是用運轉時間計費,透過表建立 partition 可以減少之後查詢的時間,進而達到減少成本效果

## 小結

以上可以看出,分 partition 後,會出現 par 跟 ibd 子表,而建立 index 會在表前面加個地圖索引的感覺,所以容量會多很多.因為 Index 實際上是另一個結構，用來儲存欄位值和指向相應資料行的指標。

athena 建立 partition 不用錢,執行查詢則是用運轉時間計費,透過表建立 partition 可以減少之後查詢的時間,進而達到減少成本效果.
