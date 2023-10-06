---
title: Useful coding method and module
description: 紀錄一些常用的coding技巧,同時紀錄一些實用模組,目前有1.virustotal的module vt的使用介紹,2.如何取出物件底下所有屬性跟其值
image: https://github.com/suyuying.png
authors: suyuying
tags: [Python]
---

這邊會記錄一些實用的 coding 方法

## coding 部分

### False 跟 None 使用時機

False 主要做條件判斷,None 則用於表示缺少值,或變量沒有被給值的請況.
舉例來說,今天 request 想要取得資料放入變數 stock_info, 如果判斷取出來資料不合預期,或者報錯,那就適合用 None.
那 False 就是拿來表達條件成不成立的情況,例如判斷股票是否上漲,可以這樣定義變數,`is_price_up`,`True`代表上漲,`False`代表下跌.

```
# 使用 None 表示缺少值或變量尚未被賦予任何值
name = None
if name is None:
    print("名字尚未被賦值")

# None 作為函式的返回值
def divide(a, b):
    if b == 0:
        return None
    return a / b

result = divide(10, 0)
if result is None:
    print("無效的操作")

# 使用 False 進行條件判斷
flag = False
if flag:
    print("這個條件不成立")
else:
    print("這個條件成立")

```

### 請求 api 失敗後 retry

有時候對方 server 不知道啥問題,會出現報錯,過一下又好了,這邊用 while 配合數字開關,去執行 retry,不過要記得 try,except 只存在於當下文檔,不會跨文檔接 Error.

```
max_retries = 3
retries = 0
while retries<max_retries:
    try:
        request....
        return sth
    except Exception as err:
        retries += 1
        time.sleep(1)# 延遲一秒後再重新執行
        if retries==max_retries:
            telegram_bot_sendtext(f"sth wrong, go cheeck")
            print(err)
    return  None
```

或者配合嘗試不同 key,同時做連線 retry

<!--truncate-->

```
max_retries = 3
retries = 0
skip_while=False
client = None
try:
    while retries < max_retries and not skip_while:
        for i in range(len(api_keys) - 1, -1, -1):
            # 建立 VirusTotal 的客戶端連線，使用提供的 API 金鑰
            api_key = api_keys[i]
            print(api_key)

            try:
                client = vt.Client(api_key)
                # 嘗試從 VirusTotal 獲取檔案物件
                virustotal_scan_file = client.get_object(f"/files/{sha256_hash}")
                if virustotal_scan_file is not None:
                    print(f"本次檢查{file_tg}成功")
                    print(f"取得{file_tg}掃描結果{virustotal_scan_file.last_analysis_stats}")
                    skip_while=True
                    break
            except Exception as e:
                retries += 1
                if e.args == ('QuotaExceededError', 'Quota exceeded'):
                    print("API key quota exceeded. Changing to next key.")
                    api_keys.pop(i)
                    continue
```

### 如何取出物件底下所有屬性跟其值

```
file_attributes = dir(file)

for attribute in file_attributes:
    attribute_value = getattr(file, attribute)
    print(f"{attribute}: {attribute_value}")

```

`dir()`函式列出物件的所有屬性名稱,return list[str],使用 for 打開並用 getattr(物件,屬性)去取得對應的值,最後就會得到屬性跟對應 value.

## 字串處理

1. 確認list裡面的每個字尾三碼符合crt or cer,使用列表生成式讀出每個元素字串的末三個字(切片值-3),匹配多個選項,使用`['crt','cer']`做or匹配

```python3
certs_possible_list=['gigi.cer', 'nono.txt', 'hihi.crt']
certs_lists=[cert for cert in certs_possible_list if cert[-3::] in ["crt","cer"]]
print(certs_lists)
```
也可以用endwith的寫法

```python3
certs_possible_list=['gigi.cer', 'nono.txt', 'hihi.crt']
certs_lists = [cert for cert in certs_possible_list if cert.endswith((".crt", ".cer"))]
print(certs_lists)
```

:::danger
這是不正確的方式，因為 "crt" 和 "cer" 都會被視為True

```python
certs_possible_list=['gigi.cer', 'nono.txt', 'hihi.crt']
certs_lists=[cert for cert in certs_possible_list if cert[-3::] in "crt" or "cer"]
print(certs_lists)
```

:::

## 使用 virustotal 的 api 掃描檔案是否有病毒

[官方文檔套件文檔](https://virustotal.github.io/vt-py/howtoinstall.html)

這邊使用是把壓縮檔 hash,之後對檔案 hash 然後上傳 virustotal,並確認該檔案是否有毒!使用者可以把那兩個 function `is_compressed_file`跟`hash_compressed_file`拿掉,單純傳檔案進去就好！
這裡面使用了上傳跟讀檔,注意的是使用了 try,except 跟 finally 來關掉連線的用法！要注意,一般來說你要掃描的檔案,在 virustotal 資料庫不一定有,如果沒有要用`vt.scan`去上傳資料給他掃描,並用`vt.get_object`配合檔案 sha 值去檢視結果.

```
from functools import partial, wraps
import vt #官方提供的python套件,用pip install vt-py安裝
import os
import hashlib

api_key_global = "XXXXXXinputYourApiKey"

def is_compressed_file(filename):
    compressed_extensions = ['.zip', '.rar', '.tar', '.gz', '.7z']  # 定義常見的壓縮檔案副檔名
    extension = os.path.splitext(filename)[1].lower()  # 取得檔案的副檔名並轉為小寫
    return extension in compressed_extensions


def hash_compressed_file(compressed_file):
    # 檢查是否為壓縮檔
    if is_compressed_file(compressed_file):
        with open(compressed_file, 'rb') as file:
            sha256_hash = hashlib.sha256()
            # 為了大檔案把記憶體用光,用以下寫法
            for chunk in iter(lambda: file.read(4096), b''):
                sha256_hash.update(chunk)
            # # 計算壓縮檔案的SHA256哈希值
            sha256_hash = sha256_hash.hexdigest()
        return sha256_hash
    else:
        return None


def partial_decorator1(func=None, *, api_key=api_key_global):
    def actual_decorator(func, api_key):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # 執行原始函式，獲取壓縮檔案
            compressed_file = func(*args, **kwargs)

            # 計算壓縮檔案的 SHA256 哈希值
            sha256_hash = hash_compressed_file(compressed_file)
            # 如果非壓縮檔，返回原始檔案
            if sha256_hash is None:
                return compressed_file

            # 建立 VirusTotal 的客戶端連線，使用提供的 API 金鑰
            client = vt.Client(api_key)
            file = None

            try:
                # 嘗試從 VirusTotal 獲取檔案物件
                file = client.get_object(f"/files/{sha256_hash}")
            except Exception as e:
                print(e)
                # 如果檔案不存在於 VirusTotal，則上傳並掃描檔案
                with open(compressed_file, "rb") as f:
                    print("Start file scan...")
                    analysis = client.scan_file(f, wait_for_completion=True)
                    print(f"The file was submitted successfully: {analysis.id}")

            try:
                if file is None:
                    # 再次嘗試從 VirusTotal 獲取檔案物件
                    file = client.get_object(f"/files/{sha256_hash}")

                if file.last_analysis_stats.get('malicious', 0) > 0:
                    # 如果檔案有惡意分數，視為危險
                    print(file.last_analysis_stats)
                    print("Dangerous")
                    return "dangerous"
                else:
                    print("safe")
                    # 檔案無惡意分數，視為安全
                    return compressed_file
            except Exception as e:
                return f"sth wrong {e}"
            finally:
                # 關閉 VirusTotal 的客戶端連線
                client.close()
            # 關閉 VirusTotal 的客戶端連線

        return wrapper

    if func:
        return actual_decorator(func, api_key)
    else:
        return partial(actual_decorator, api_key=api_key)



@partial_decorator1
def my_function1(file_path):
    # 在这里执行你的逻辑并返回一个哈希值
    return file_path


my_function1("test.mp4")
```
