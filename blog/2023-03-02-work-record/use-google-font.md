---
title: 在docusaurus使用google font的方法
description: 整理網路提供的使用google font方法，最後是採用一般css import的方法
authors: suyuying
tags: [css, google font]
---

## 一、一般 css import

### 1.在 html head import

```

<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
<style>
body {
  font-family: "Sofia", sans-serif;
}
</style>
</head>
```

### 2.在 css import

```jsx title="scr/css/custom.css"
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");
// css選擇器選使用範圍
  nav .navbar__items {
    font-size: 30px;
    font-family: Caveat;
  }

//如果多個font import
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");

// css 選擇標示用逗號分隔
html {
  font-family: Noto Sans TC, sans-serif;
}
```

## 二、在 docusaurus 使用

### 1.在 html head import

這個方法相當於一般 css 使用在 head 打 link，只是寫在設定檔內，會於<highlight color="#1877F2">編譯後</highlight>產生在 index.html 的 head 裡面

```
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&amp;display=swap">
```

```jsx title="docusaurus.config.js"
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700;900&display=swap",
    },
  ],
```

### 2.在 css import

做法同一般 css import

```jsx title="scr/css/custom.css"
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");
// css選擇器選使用範圍
  nav .navbar__items {
    font-size: 30px;
    font-family: Caveat;
  }

//如果多個font import
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");

// css 選擇標示用逗號分隔
html {
  font-family: Noto Sans TC, sans-serif;
}
```

## 三、比較兩種方法差異

<>

<p>一般css import</p>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./incss.png").default}
      alt="malta_street png"
    />
  </div>
</>
<>

<p>link import</p>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./inlink1.png").default}
      alt="malta_street png"
    />
  </div>
</>

:::tip

寫法上來說，直接在 custom css import 比較方便的，傳送的大小跟時間也是沒啥差，
所以目前都用 css import 的方法。有寫錯麻煩指正～

:::

## 四、 參考資料

:::info

參考資料：

1.[以正確的姿勢使用 Google Fonts](https://ouch1978.github.io/docs/docusaurus/customization/use-google-fonts-with-correct-way)

2.[背景圖案及字體設定](https://from8to8.com/diary/lastestposts-font/)

3.[How to customize the styling of the Docusaurus Classic Theme](https://theochu.com/docusaurus/styling/#custom-fonts)
:::
