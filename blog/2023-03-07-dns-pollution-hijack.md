---
title: Brief summary of Domain Hijacking vs DNS Poisoning
description: record what is Domain Hijacking and DNS Poisoning, and the difference between them
authors: suyuying
tags: [dns, Domain Hijacking, DNS Poisoning]
---

<>

<ol>
  <li class="text-body-color mb-4 flex text-base">
    <span
      class="bg-primary mr-2 flex max-h-[24px]  w-full max-w-[24px]  items-center justify-center rounded-full text-base  text-white"
    >
      1
    </span>
    劫持：dns server 管理端或者你的域名解析商把你的 url 對應 ip 換成其他 ip 或 url
  </li>
  <li class="text-body-color mb-4 flex text-base">
    <span
      class="bg-primary mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white"
    >
      2
    </span>
    污染：dns serer 的某個節點catch 被駭然後改掉，把這個 url 換成其他 ip 或 url
  </li>

</ol>

<p>小結：劫持是官方被駭或故意改的（大陸常發生），污染是路由到dns server過程某台路由器被駭。
</p>

</>

<!--truncate-->

:::info
參考資料:

1. [Domain Hijacking vs DNS Poisoning: Do You Know the Difference](https://heimdalsecurity.com/blog/domain-hijacking-vs-dns-poisoning-do-you-know-the-difference/#:~:text=1.,and%20changes%20its%20DNS%20settings.)
2. [DNS 劫持和 DNS 污染的区别](https://www.williamlong.info/archives/3356.html)

:::
