---
title: select的資料型態
description: SQL如果欄位型態跟query的形態不同,例如欄位型態是date,可以用string型態查詢嗎？
authors: suyuying
image: https://github.com/suyuying.png
tags: [SQL]
---

Ｑ.SQL 資料型態眾多,如果查詢的欄位型態不同會影響啥嗎?
A: 在一般 mysql 資料欄位的查詢的欄位型態不同,不會影響啥,在 aws athena 會報錯.

建表語法,以下有時間型態跟其他型態,ex 字串

```
CREATE TABLE my_table (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    date_column DATE
);
```

插入隨機值

```
INSERT INTO my_table (id, name, date_column)
VALUES
(1, 'John', '2022-01-01'),
(2, 'Jane', '2022-02-15'),
(3, 'Mike', '2022-03-10'),
(4, 'Emily', '2022-04-20'),
(5, 'David', '2022-05-05'),
(6, 'Sarah', '2022-06-18'),
(7, 'Tom', '2022-07-12'),
(8, 'Amy', '2022-08-30'),
(9, 'Mark', '2022-09-25'),
(10, 'Lisa', '2022-10-08');
```

用 string 查詢

```
SELECT *
FROM my_table
WHERE date_column = '2022-01-01';
```

用日期查詢

```
SELECT *
FROM my_table
WHERE date_column = DATE '2022-01-01';
```

這兩個查詢在一般 mysql 都查詢得到,這邊要另外提一點是因為在 aws athena 查詢中欄位型態錯誤就直接報錯了!
