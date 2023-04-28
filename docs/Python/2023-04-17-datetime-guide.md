---
title: Python datetime guide
description: 處理資料很常會用到datetime,這邊紀錄一下使用上面會用過的方法,之後等資料齊全再彙整.
image: https://github.com/suyuying.png
authors: suyuying
tags: [Python, datetime]
---

## 常見 datetime 應用

### 日期介於幾天之間

#### 範例一.日期介於昨日到七天前

資料`ticket_detail['result']['close_time']`他的字串值是`2023-04-17 02:36:55`這類,是否屆於昨日到七天前,是就 print yes

```
format=datetime.now() #<class 'datetime.datetime'>

today = datetime.now().date() #<class 'datetime.date'>

yesterday = today - timedelta(days=1) #<class 'datetime.date'>

seven_days_ago = today - timedelta(days=7) #<class 'datetime.date'>

date_format = "%Y-%m-%d %H:%M:%S" #把字串為2023-04-17 02:36:55依據格式換成datetime.datetime物件

# 使用datetime.strptime方法把字串依據格式換成 datetime.datetime物件,使用date方法變成datetime.date物件進行比較
if seven_days_ago<= datetime.strptime("2023-04-17 02:36:55",date_format).date() <= yesterday:
    print("yes")
```

:::info

- datetime.strptime 是把字串換成 datetime.datetime 物件
- datetime.strftime()是把 datetime.datetime 物件換成格式化字串

  [官方 strftime() and strptime() 格式轉換](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior)

:::

#### 範例二:timedelta 物件運用,憑證是否在今天到 30 天之間到期

```
# 將到期日期字串轉換為 datetime 格式
vaild_date = datetime.strptime("2023-04-17 02:36:55", date_format)

# 取得當前時間
now_time = datetime.now() #2023-04-17 20:33:01.577635

# 計算到期日期與當前時間的時間差,注意這邊是timedelta物件囉！
vaild_days = vaild_date - now_time

# 印出時間差和時間差的資料型態
print(vaild_days) #-1 day, 6:11:15.206948
print(type(vaild_days)) #<class 'datetime.timedelta'>

# 判斷時間差是否在 當下到 30 天之間到期
if vaild_days > timedelta(days=0) and vaild_days < timedelta(days=30):
    print(vaild_days)
    print("ok")

```

:::tip
注意～

以上面為例,到期時間為"2023-04-17 02:36:55",當下時間為 2023-04-17 20:25:39.793060,這種情況下很明顯到期時間是小於當下時間的,相減結果會是-1 day, 6:03:53.422373.

由此可知,只要前時間小於後時間,剪出來的 day 都會是負數,也就是你的憑證到期了！

:::

另外,如果是 datetime.date 之類物件減去 timedelta 物件,是不會變成 timedelta 物件！

```
vaild_date=datetime.strptime("2023-04-17 02:36:55",date_format).date()
print(type(vaild_date-timedelta(days=1))) # <class 'datetime.date'>
```

如果是 datetime.date 之類物件減去 datetime.date 物件,是會變成 timedelta 物件的！

```
vaild_date=datetime.strptime("2023-04-17 02:36:55",date_format).date()
print(type(datetime.now().date()-vaild_date)) #<class 'datetime.timedelta'>
```

但如果是 datetime.datetime 之類物件減去 datetime.date 物件會報錯
`TypeError: unsupported operand type(s) for -: 'datetime.date' and 'datetime.datetime'
`
:::tip
datetime.datetime 同類別可以相減

datetime.date 同類別可以相減

datetime.datetime 之類減去 datetime.date 會報錯

datetime.datetime 跟 datetime.date 都可以減去 timedelta

:::
