"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=n(7294),o=n(3905);const a={title:"DNS Poisoning vs Domain Hijacking,Brief summary",description:"record what is Domain Hijacking and DNS Poisoning, and the difference between them,\u5c0f\u7d50\uff1a\u52ab\u6301\u662f\u5b98\u65b9\u88ab\u99ed\u6216\u6545\u610f\u6539\u7684\uff08\u5927\u9678\u5e38\u767c\u751f\uff09\uff0c\u6c61\u67d3\u662f\u8def\u7531\u5230dns server\u904e\u7a0b\u67d0\u53f0\u8def\u7531\u5668\u88ab\u99ed\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["dns","Domain Hijacking","DNS Poisoning"]},s=void 0,l={permalink:"/blog/2023/03/07/linux-server/dns-pollution-hijack",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/linux-server/2023-03-07-dns-pollution-hijack.md",source:"@site/blog/linux-server/2023-03-07-dns-pollution-hijack.md",title:"DNS Poisoning vs Domain Hijacking,Brief summary",description:"record what is Domain Hijacking and DNS Poisoning, and the difference between them,\u5c0f\u7d50\uff1a\u52ab\u6301\u662f\u5b98\u65b9\u88ab\u99ed\u6216\u6545\u610f\u6539\u7684\uff08\u5927\u9678\u5e38\u767c\u751f\uff09\uff0c\u6c61\u67d3\u662f\u8def\u7531\u5230dns server\u904e\u7a0b\u67d0\u53f0\u8def\u7531\u5668\u88ab\u99ed\u3002",date:"2023-03-07T00:00:00.000Z",formattedDate:"March 7, 2023",tags:[{label:"dns",permalink:"/blog/tags/dns"},{label:"Domain Hijacking",permalink:"/blog/tags/domain-hijacking"},{label:"DNS Poisoning",permalink:"/blog/tags/dns-poisoning"}],readingTime:.855,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"DNS Poisoning vs Domain Hijacking,Brief summary",description:"record what is Domain Hijacking and DNS Poisoning, and the difference between them,\u5c0f\u7d50\uff1a\u52ab\u6301\u662f\u5b98\u65b9\u88ab\u99ed\u6216\u6545\u610f\u6539\u7684\uff08\u5927\u9678\u5e38\u767c\u751f\uff09\uff0c\u6c61\u67d3\u662f\u8def\u7531\u5230dns server\u904e\u7a0b\u67d0\u53f0\u8def\u7531\u5668\u88ab\u99ed\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["dns","Domain Hijacking","DNS Poisoning"]},prevItem:{title:"linux command(sed grep awk)",permalink:"/blog/2023/03/08/linux-server/linux-command-repratice"},nextItem:{title:"Azure cloud container service Introduction and demo",permalink:"/blog/2023/03/06/Azure/azure-cloud-container"}},c={authorsImageUrls:[void 0]},u=[],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Fragment,null,(0,o.kt)("ol",null,(0,o.kt)("li",{class:"text-body-color mb-4 flex text-base"},(0,o.kt)("span",{class:"bg-primary mr-2 flex max-h-[24px]  w-full max-w-[24px]  items-center justify-center rounded-full text-base  text-white"},"1"),"\u52ab\u6301\uff1adns server \u7ba1\u7406\u7aef\u6216\u8005\u4f60\u7684\u57df\u540d\u89e3\u6790\u5546\u628a\u4f60\u7684 url \u5c0d\u61c9 ip \u63db\u6210\u5176\u4ed6 ip \u6216 url"),(0,o.kt)("li",{class:"text-body-color mb-4 flex text-base"},(0,o.kt)("span",{class:"bg-primary mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white"},"2"),"\u6c61\u67d3\uff1adns serer \u7684\u67d0\u500b\u7bc0\u9edecatch \u88ab\u99ed\u7136\u5f8c\u6539\u6389\uff0c\u628a\u9019\u500b url \u63db\u6210\u5176\u4ed6 ip \u6216 url")),(0,o.kt)("p",null,"\u5c0f\u7d50\uff1a\u52ab\u6301\u662f\u5b98\u65b9\u88ab\u99ed\u6216\u6545\u610f\u6539\u7684\uff08\u5927\u9678\u5e38\u767c\u751f\uff09\uff0c\u6c61\u67d3\u662f\u8def\u7531\u5230dns server\u904e\u7a0b\u67d0\u53f0\u8def\u7531\u5668\u88ab\u99ed\u3002")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u53c3\u8003\u8cc7\u6599:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://heimdalsecurity.com/blog/domain-hijacking-vs-dns-poisoning-do-you-know-the-difference/#:~:text=1.,and%20changes%20its%20DNS%20settings."},"Domain Hijacking vs DNS Poisoning: Do You Know the Difference")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.williamlong.info/archives/3356.html"},"DNS \u52ab\u6301\u548c DNS \u6c61\u67d3\u7684\u533a\u522b")))))}d.isMDXComponent=!0}}]);