---
title: Quick sort algorithm in Python
description: 這個程式碼主要拿來排序序列,目前理解就是序列 ex.[1, 2, 4, 6, 6, 7] 會被先進行二分(mid=n//2),並取[:mid]跟[mid:]做處理,而首先,[:mid]遞迴多次這個過程,直到拆解到無法拆解,所以可以想見這時候拆成很多個小 list,之後他會使用 merge 一層層往上組,直到[:mid]排序完成.
image: https://github.com/suyuying.png
authors: suyuying
tags: [Python, algorithm]
---

## code

平常寫 code 時候,不會去想序列排列底層的事情,因緣際會下,就學一學吧,以下 code 是跟 AI 學習的,能用 python 這樣在同一個 function 內執行同一個 function,這個事情是真的沒想過,另外整個程式執行過程,他執行的順序,也是很大學習重點!

<!--truncate-->

```
## 快速排列演算法練習
import logging

# 設定 logger 物件的名稱、等級、訊息格式
logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')


# 設定輸出到控制台的 handler
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)
console_handler.setFormatter(formatter)
logger.addHandler(console_handler)

#二分法往下排序
def merge_sort(arr):
    logger.info(f"此次處理陣列為{arr}")
    n = len(arr)
    if n == 1:
        return arr, 0
    else:
        mid = n // 2
        logger.info("left 解析開始")
        left, inv_left = merge_sort(arr[:mid])
        logger.info(f"{left}{inv_left}左邊結果")
        logger.info("right 解析開始")
        right, inv_right = merge_sort(arr[mid:])
        logger.info(f"{arr[mid:]}切割右側,合併,反轉{inv_right}次右邊結果{right}")
        logger.info(f"{left} {right} 左右合併開始")
        merged, inv_merge = merge(left, right)
        logger.info(f"合併完成,{left}{right}合成{merged}經過 {inv_merge}次反轉合併,中間經過{inv_left + inv_right}次反轉")
        return merged, (inv_left + inv_right + inv_merge)

# 左右合併底層
def merge(left, right):
    i, j, inversions = 0, 0, 0
    merged = []
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1
            inversions += len(left) - i
    merged += left[i:]
    merged += right[j:]
    return merged, inversions
#
def solution(A):
    merged, inversions = merge_sort(A)
    if inversions > 1000000000:
        return -1
    return merged

print(solution([1, 4,6,6,7,2]))
```

## result

運算結果

```
2023-04-23 10:31:15,067 - __main__ - INFO - 此次處理陣列為[1, 4, 6, 6, 7, 2]
2023-04-23 10:31:15,068 - __main__ - INFO - left 解析開始
2023-04-23 10:31:15,068 - __main__ - INFO - 此次處理陣列為[1, 4, 6]
2023-04-23 10:31:15,068 - __main__ - INFO - left 解析開始
2023-04-23 10:31:15,068 - __main__ - INFO - 此次處理陣列為[1]
2023-04-23 10:31:15,068 - __main__ - INFO - [1]0左邊結果
2023-04-23 10:31:15,068 - __main__ - INFO - right 解析開始
2023-04-23 10:31:15,068 - __main__ - INFO - 此次處理陣列為[4, 6]
2023-04-23 10:31:15,068 - __main__ - INFO - left 解析開始
2023-04-23 10:31:15,068 - __main__ - INFO - 此次處理陣列為[4]
2023-04-23 10:31:15,068 - __main__ - INFO - [4]0左邊結果
2023-04-23 10:31:15,068 - __main__ - INFO - right 解析開始
2023-04-23 10:31:15,068 - __main__ - INFO - 此次處理陣列為[6]
2023-04-23 10:31:15,068 - __main__ - INFO - [6]切割右側,合併,反轉0次右邊結果[6]
2023-04-23 10:31:15,068 - __main__ - INFO - [4] [6] 左右合併開始
2023-04-23 10:31:15,068 - __main__ - INFO - 合併完成,[4][6]合成[4, 6]經過 0次反轉合併,中間經過0次反轉
2023-04-23 10:31:15,068 - __main__ - INFO - [4, 6]切割右側,合併,反轉0次右邊結果[4, 6]
2023-04-23 10:31:15,068 - __main__ - INFO - [1] [4, 6] 左右合併開始
2023-04-23 10:31:15,068 - __main__ - INFO - 合併完成,[1][4, 6]合成[1, 4, 6]經過 0次反轉合併,中間經過0次反轉
2023-04-23 10:31:15,068 - __main__ - INFO - [1, 4, 6]0左邊結果
2023-04-23 10:31:15,068 - __main__ - INFO - right 解析開始
2023-04-23 10:31:15,068 - __main__ - INFO - 此次處理陣列為[6, 7, 2]
2023-04-23 10:31:15,068 - __main__ - INFO - left 解析開始
2023-04-23 10:31:15,068 - __main__ - INFO - 此次處理陣列為[6]
2023-04-23 10:31:15,068 - __main__ - INFO - [6]0左邊結果
2023-04-23 10:31:15,068 - __main__ - INFO - right 解析開始
2023-04-23 10:31:15,068 - __main__ - INFO - 此次處理陣列為[7, 2]
2023-04-23 10:31:15,068 - __main__ - INFO - left 解析開始
2023-04-23 10:31:15,068 - __main__ - INFO - 此次處理陣列為[7]
2023-04-23 10:31:15,068 - __main__ - INFO - [7]0左邊結果
2023-04-23 10:31:15,068 - __main__ - INFO - right 解析開始
2023-04-23 10:31:15,069 - __main__ - INFO - 此次處理陣列為[2]
2023-04-23 10:31:15,069 - __main__ - INFO - [2]切割右側,合併,反轉0次右邊結果[2]
2023-04-23 10:31:15,069 - __main__ - INFO - [7] [2] 左右合併開始
2023-04-23 10:31:15,069 - __main__ - INFO - 合併完成,[7][2]合成[2, 7]經過 1次反轉合併,中間經過0次反轉
2023-04-23 10:31:15,069 - __main__ - INFO - [7, 2]切割右側,合併,反轉1次右邊結果[2, 7]
2023-04-23 10:31:15,069 - __main__ - INFO - [6] [2, 7] 左右合併開始
2023-04-23 10:31:15,069 - __main__ - INFO - 合併完成,[6][2, 7]合成[2, 6, 7]經過 1次反轉合併,中間經過1次反轉
2023-04-23 10:31:15,069 - __main__ - INFO - [6, 7, 2]切割右側,合併,反轉2次右邊結果[2, 6, 7]
2023-04-23 10:31:15,069 - __main__ - INFO - [1, 4, 6] [2, 6, 7] 左右合併開始
2023-04-23 10:31:15,069 - __main__ - INFO - 合併完成,[1, 4, 6][2, 6, 7]合成[1, 2, 4, 6, 6, 7]經過 2次反轉合併,中間經過2次反轉
[1, 2, 4, 6, 6, 7]

```

## understanding

這個程式碼主要拿來排序序列,目前理解就是序列 ex.[1, 2, 4, 6, 6, 7] 會被先進行二分(mid=n//2),並取[:mid]跟[mid:]做處理,而首先,[:mid]遞迴多次這個過程,直到拆解到無法拆解,所以可以想見這時候拆成很多個小 list,之後他會使用 merge 一層層往上組,直到[:mid]排序完成.

merge 過程,是要數字由小到大.所以它使用兩個指針 i 和 j 分別遍歷左右兩個子數組。如果左子數組的當前元素小於或等於右子數組的當前元素，它就將左子數組的當前元素添加到新數組中，並將指針 i 向右移動一位；否則，它將右子數組的當前元素添加到新數組中，並將指針 j 向右移動一位，並且將逆序對的計數增加左子數組中剩餘元素的數量。最終，它將剩餘的元素添加到新數組中。

:::info
[hackerearth algorithm](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/)

:::
