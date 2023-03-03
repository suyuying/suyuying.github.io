---
title: markdown語法紀錄
description: demo在Docusaurus官網看到的md格式使用範例，給不熟悉md語法的使用者查詢格式用
authors: suyuying
tags: [Markdown manual]
comments: true # for Disqus
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Highlight from "@site/src/components/Highlight";

```
// how to import
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Highlight from "@site/src/components/Highlight";
```

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">
Facebook blue
</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

> Easy to maintain open source documentation websites.
>
> — Docusaurus

```
以下為上述用法的程式碼。
<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">
Facebook blue
</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

> Easy to maintain open source documentation websites.
>
> — Docusaurus
```

### Details element example

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br />
    <details>
      <summary>Nested toggle! Some surprise inside...</summary>
      <div>😲😲😲😲😲</div>
    </details>
  </div>
</details>

```
<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br />
    <details>
      <summary>Nested toggle! Some surprise inside...</summary>
      <div>😲😲😲😲😲</div>
    </details>
  </div>
</details>
```

<>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./malta_street.jpeg").default}
      style={{ width: "50%" }}
      alt="malta_street png"
    />
  </div>
</>

```
how to import img
<>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={require("./malta_street.jpeg").default}
      style={{ width: "50%" }}
      alt="malta_street png"
    />
  </div>
</>
```

### My Doc Section

Hello world message with some **bold** text, some _italic_ text, and a [link](https://www.yahoo.com)

```
//demo bold text ,italic style and superlink
Hello world message with some **bold** text, some _italic_ text, and a [link](https://www.yahoo.com)
```

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

<!-- 保存資料到query string -->

<Tabs groupId="current-os" queryString>
  <TabItem value="android" label="Android">
    Android
  </TabItem>
  <TabItem value="ios" label="iOS">
    iOS
  </TabItem>
</Tabs>

```
demo tabs and tabs bring query string
// here are just tabs
<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

//here bring query string
<Tabs groupId="current-os" queryString>
  <TabItem value="android" label="Android">
    Android
  </TabItem>
  <TabItem value="ios" label="iOS">
    iOS
  </TabItem>
</Tabs>
```

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

````
```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
````

```jsx {1,4-6,11}
import React from "react";

const MyComponent = (props) => {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
};

export default MyComponent;
```

````
```jsx {1,4-6,11}
import React from "react";

const MyComponent = (props) => {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
};

export default MyComponent;
```
````

```jsx live
// need install jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

````
```jsx live
// need install jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```
````

<!-- Prettier changes this -->

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

```

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

[Download this docx using Markdown](./DONe.json)

```
[Download this docx using Markdown](./DONe.json)
```

<ul>
  {Object.entries(frontMatter).map(([key, value]) => (
    <li key={key}>
      <b>{key}</b>: {value}
    </li>
  ))}
</ul>

```
// how to get build in object attributes
<ul>
  {Object.entries(frontMatter).map(([key, value]) => (
    <li key={key}>
      <b>{key}</b>: {value}
    </li>
  ))}
</ul>
```
