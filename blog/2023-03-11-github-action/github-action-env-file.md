---
title: how to input env file to github action
description: 因為是使用.env file管理環境變數，所以推到github上一定會排除.env，然後再試CICD時候就想說為啥本地build的image跑起來沒問題，一到CI build出來的image就掛了，試了半天才想到是.evn沒給。這邊會demo如何在github action使用.env資料。
authors: suyuying
tags: [github action, CICD]
---

## .env 傳入方法

[參考自這篇 stack overflow](https://stackoverflow.com/questions/60176044/how-do-i-use-an-env-file-with-github-actions)

兩種方式，這依據你的.env 裡面到底有多少個變數。但共同點都是在 github worlflow 過程使用 secrets 上下文，例如${{ secrets.XXX }}，去把存放在 github registry 裡面的環境變數，存放到指定位置的.env 檔。

### single vaiable

如果只有一個變數，就把該變數放到 github registry 裡面，取上下文來用就好

```
    - name: 'Create env file'
    run: |
        touch .env
        echo API_ENDPOINT="https://xxx.execute-api.us-west-2.amazonaws.com" >> .env
        echo API_KEY=${{ secrets.API_KEY }} >> .env
        cat .env
```

### Better method for multiple variables

如果有很多個變數在.env 檔，就把.env 檔整份 copy 到 github registry 裡面

例如：

```jsx title=".env"
ALGORITHM="HS256"
ACCESS_TOKEN_EXPIRE_MINUTES=60
# 對password加鹽的物件
# sql連線網址
SQLALCHEMY_DATABASE_URL="sqlite:///./sql_app.db"
TOKENURL="token"
ARTICLE_CATEGORY='[\"PythonBasic\",\"Fastapi\",\"DataScience\",\"PythonModule\",\"LinuxShellScript\",\"JavaScriptBasic\",\"React\"]'
```

就把他整份裡面的值 copy 到 config 裡面就好，假設 key 叫做 ENV_FILE，然後 yml 檔這樣寫

```
     - name: 'Create env file'
        run: |
          echo "${{ secrets.ENV_FILE }}" > .env
```

他就會把你所有 value 送到.env 檔了。

:::info
記錄一下我遇到的狀況，因為這個真的卡頗久，也試不出來一個方法，所以就先記錄吧，也歡迎提供解答
python dotenv 在.env 檔裡面寫入 list ，要用以下方法表述
ARTICLE_CATEGORY='["PythonBasic","Fastapi","DataScience","PythonModule","LinuxShellScript","JavaScriptBasic","React"]'，配合 `json.loads(os.environ.get('ARTICLE_CATEGORY'))`去拿資料。

但是在使用 action 遇到一個問題，`echo ${{ secrets.ENV_FILE }} > .env` 會輸入空值進去，`echo "${{ secrets.ENV_FILE }}" > .env` 這樣才會有值，但問題在使用""包住會把 ARTICLE_CATEGORY='["PythonBasic","Fastapi","DataScience","PythonModule","LinuxShellScript","JavaScriptBasic","React"]'轉成
`ARTICLE_CATEGORY='[PythonBasic,Fastapi,DataScience,PythonModule,LinuxShellScript,JavaScriptBasic,React]'
` 這個格式在讀 json.loads(os.environ.get('ARTICLE_CATEGORY'))就會遇到問題，會報 error 因為這個格式他不行。

目前在處理 list 部分，都先用`ARTICLE_CATEGORY='[\"PythonBasic\",\"Fastapi\",\"DataScience\",\"PythonModule\",\"LinuxShellScript\",\"JavaScriptBasic\",\"React\"]'` 送資料。然後用`json.loads(os.environ.get('ARTICLE_CATEGORY'))`去拿資料

:::
