---
title: multi-thead introduction in python3
description: 如果你有一個套件,他是 I/O 密集的套件,例如 python 的 request,會對對方 server 請求,且這個時候會 block 住 thread,在這種情況下,你無法使用異步(因為同一 thread 會被 block 住),這時候就可以考慮用 multithread 做加速,concurrent.這邊用python內建套件futures.ThreadPoolExecutor()做示範,也就是用並行執行方式提速,以下就是我自己在應用的其中一段 code,這樣用也要注意速率限制就是！

image: https://github.com/suyuying.png
authors: suyuying
tags: [Python]
---

## 應用情境介紹

如果你有一個套件,他是 I/O 密集的套件,例如 python 的 request,會對對方 server 請求,且這個時候會 block 住 thread,在這種情況下,你無法使用異步(因為同一 thread 會被 block 住),這時候就可以考慮用 multithread 做加速,也就是用並行執行方式提速,以下就是我自己在應用的其中一段 code,這樣用也要注意速率限制就是！

```
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        futures = [executor.submit(get_file_do_scan, file_tg=file, api_keys=copy.deepcopy(my_api_keys)) for file in
                   just_compress_files]
    for future in concurrent.futures.as_completed(futures):
        future_result = future.result()
        if future_result == "dangerous" or future_result is None:
            continue
        print(future_result)
        print("以上檔案是安全的")

```

## thread pool vs process pool

這邊都是以內建的`concurrent.futures`套件為例！主要用在並行執行程式.

- thread 是 os 系統裡進行運算的最小單位,一個 process 可以有多個 thread(看你設計,也可以只有單個),thread 間會共享記憶體空間.
- process 是 os 系統做資源分配跟調度的基本單位,每個 process 會有獨立記憶體空間.

在 python 世界裡,thread pool 跟 process pool 是兩樣不同東西,以下講結論

- thread pool 適用於 i/o 密集工作,例如 同時對 api server 做請求！
- process poo 適用於運算密集的工作！

### thread pool

`thread pool` 的部分,受限於官方 python 的 CPython 記憶體管理問題,需要透過 GIL(Global Interpreter Lock)去做到單 process 中的多 thread 管理,當一個 process 運行多 thread 時,在 python 世界裡其實一次只會運行一個 thread,這時候會對 process 做 lock,當該 thread 遇到 I/O 密集工作(例如:查詢網站)時,就會釋放 GIL,讓另一個 thread 可以執行.

在使用 thread pool 時要注意,Python 中的 thread 會共享同一進程的記憶體空間，因此它們能夠訪問並修改全局變數。如果多個 thread 同時修改同一個全局變數，可能會導致不可預期的結果。所以全局變數的修改就要注意,避免去影響其他 thread.例如以下程式碼:`my_api_keys`是一個 list,如果你執行過程中會刪除該 list 內的元素,為了要避免影響其他 thread 就建議改成用 deep.copy 方式,每個 thread 放獨立的`my_api_keys`.

```
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        futures = [executor.submit(get_file_do_scan, file_tg=file, api_keys=copy.deepcopy(my_api_keys)) for file in
                   just_compress_files]
```

### process pool

`process pool`部分,使用它就會是應用多 cpu 的狀況,它會透過 process pool 利用多核 CPU 進行真正的並行計算(thread pool 有點假並行的感覺,因為它實際上會等另一個 thread),但 process pool 間通信成本高.

## 教學內容

以下都是講`thread pool`.

:::info
我當初是看這篇學習的

- [steam 教學網](https://steam.oxxostudio.tw/category/python/library/threading.html#:~:text=%E4%BD%BF%E7%94%A8threading%20%E5%BB%BA%E7%AB%8B%E5%9F%B7%E8%A1%8C%E7%B7%92,%E7%AD%89%E5%88%B0%E8%A7%A3%E9%8E%96%E6%89%8D%E8%83%BD%E5%A4%A0%E5%9F%B7%E8%A1%8C%E3%80%82)

:::

主要會用的就是`submit()`跟`map()`這兩種方法,使用`submit()`會配合`as_completed`去動態收集結果.

主要講一下,`submit()`的情況,當執行`[executor.submit(fetch_yahoo_homepage, url) for url in url_will_request]`時,會產生 future 物件組成的列表,同時即刻開始並行執行程式,接著這個 list 執行完之後.可以用`as_completed`去取得程式執行的結果,像以下這樣

```
with ThreadPoolExecutor() as executor:
    # 使用 list comprehension 創建一個 Future 對象的列表
    # 每個 Future 對象代表一個即將完成的操作（在這裡，操作是 fetch_yahoo_homepage 函數的調用）
    # executor.submit 函數的參數是要調用的函數和該函數的參數
    # 当你使用executor.submit()提交任务给线程池时，任务会立即开始执行。executor.submit()会立即返回一个concurrent.futures.Future对象
    futures = [executor.submit(fetch_yahoo_homepage, url) for url in url_will_request]
for future in as_completed(futures):
    # 使用 Future 對象的 result 方法來獲取操作的結果（在這裡，結果是 HTML 字串）
    # 通过调用future.result()获取任务的执行结果
    html = future.result()
```

而`map`就有點像是把以上兩件事`submit`跟`as_completed`直接結合,他返回的是迭代器,可以迭代取得執行完畢結果,像這樣

```
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as e:
# Executors 的相關方法，map(func, *iterables)，執行可迭代物件 ex list tuple named tuple
# 其實就是把可迭代物件的元素一個個拆開喂給Executor，提升程式執行速度
    for hostinfo in e.map(lambda x: get_certificate(x[0], x[1]), HOSTS):
        if hostinfo is None:
            continue
        print_basic_info(hostinfo)
```

看起來`submit()`跟`map()`很像,使用`submit`允許你檢查任務狀態,而使用`map`則是能夠簡潔的並行執行！

以下是我學習的過程,主要是用 request 網站來做 demo.
基本會用到的 function 跟套件,跟變數:list-`url_will_request=["https://www.google.com",'https://www.yahoo.com'," https://www.youtube.com","https://www.nba.com"]`

```
import urllib.request
import ssl
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
ssl._create_default_https_context = ssl._create_unverified_context
url_will_request=["https://www.google.com",'https://www.yahoo.com'," https://www.youtube.com","https://www.nba.com"]

def fetch_yahoo_homepage(url):
    try:
        response = urllib.request.urlopen(url)
        html = response.read().decode('utf-8')
        return html
    except urllib.error.URLError as e:
        print(f'Error: {e}')
        return None
```

### 單 thread 一般版本

```
#single_thead
start_time_single_thead=time.time()
for i in url_will_request:
    html=fetch_yahoo_homepage(i)
    print(html[:100])
end_time_single_thead=time.time()
all_time_single_thead=end_time_single_thead-start_time_single_thead

```

### multi-thead use map

```
start_time=time.time()
# 使用示例ex
with ThreadPoolExecutor() as executor:
    for html in ecutor.map(fetch_yahoo_homepage,url_will_request ):
        print(html[:100])
end_time=time.time()
all_time=end_time-start_time`
```

### multi-thead and use submit

```
start_time_multi_thread_submit=time.time()

# 使用 ThreadPoolExecutor 作為上下文管理器
# 當離開這個區塊時，將自動清理並關閉所有線程
with ThreadPoolExecutor() as executor:
    # 使用 list comprehension 創建一個 Future 對象的列表
    # 每個 Future 對象代表一個即將完成的操作（在這裡，操作是 fetch_yahoo_homepage 函數的調用）
    # executor.submit 函數的參數是要調用的函數和該函數的參數
    # 当你使用executor.submit()提交任务给线程池时，任务会立即开始执行。executor.submit()会立即返回一个concurrent.futures.Future对象
    futures = [executor.submit(fetch_yahoo_homepage, url) for url in url_will_request]

    # 使用as_completed()函数来迭代这些Future对象，并在future中有程式完成时获取结果到future。
    for future in as_completed(futures):
        # 使用 Future 對象的 result 方法來獲取操作的結果（在這裡，結果是 HTML 字串）
        # 通过调用future.result()获取任务的执行结果
        html = future.result()

        # 如果 HTML 不為空（也就是說，操作成功返回了 HTML），則打印 HTML 的前 100 個字符
        if html:
            print(html[:100])
end_time_multi_thread_submit=time.time()
all_time_multi_thread_submit=end_time_multi_thread_submit-start_time_multi_thread_submit

```

以上的 time 做時間比較

```
print(f"all_time_single_thead is {all_time_single_thead}")
print(f"all map time is {all_time}")
print(f"all_time_single_thead_submit is {all_time_multi_thread_submit}")
```

- all_time_single_thead is 2.3154239654541016
- all map time is 1.4191679954528809
- all_time_single_thead_submit is 1.0428180694580078

可以看出用 multi_thread 運行還是比較快的！

## 小結

- `excutor.map(fetch_yahoo_homepage,url_will_request )`當使用 map 方法時,第一個參數需要是可調用的對象(一個 function,或帶有`__call__`方法的物件),第二個參數則是可迭代物件(ex.string,set,list,str,dict)基本上只要實現`__iter__`就是.

- `executor.submit()`:一樣第一個參數需要是可調用的對象,第二個參數是可迭代物件

至於使用上可以參考上面的方法
