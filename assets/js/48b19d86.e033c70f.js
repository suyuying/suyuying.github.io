"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[9085],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"linux command(sed grep awk)",description:'\u5f9e\u6709\u95dc\u9375\u5b57\u70ba QOO \u90a3\u4e00\u884c\u5230\u4ee5}\u70ba\u958b\u982d\u7684\u90a3\u4e00\u884c(^\u4ee3\u8868\u6b63\u5247\u958b\u982d\u5b57\u5143),sed -n "/QOO/,/^}/p" common.js.',authors:"suyuying",image:"https://github.com/suyuying.png",tags:["linux","sed"]},i=void 0,s={permalink:"/blog/2023/03/08/linux-server/linux-command-repratice",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/linux-server/2023-03-08-linux-command-repratice.md",source:"@site/blog/linux-server/2023-03-08-linux-command-repratice.md",title:"linux command(sed grep awk)",description:'\u5f9e\u6709\u95dc\u9375\u5b57\u70ba QOO \u90a3\u4e00\u884c\u5230\u4ee5}\u70ba\u958b\u982d\u7684\u90a3\u4e00\u884c(^\u4ee3\u8868\u6b63\u5247\u958b\u982d\u5b57\u5143),sed -n "/QOO/,/^}/p" common.js.',date:"2023-03-08T00:00:00.000Z",formattedDate:"March 8, 2023",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"sed",permalink:"/blog/tags/sed"}],readingTime:1.815,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"linux command(sed grep awk)",description:'\u5f9e\u6709\u95dc\u9375\u5b57\u70ba QOO \u90a3\u4e00\u884c\u5230\u4ee5}\u70ba\u958b\u982d\u7684\u90a3\u4e00\u884c(^\u4ee3\u8868\u6b63\u5247\u958b\u982d\u5b57\u5143),sed -n "/QOO/,/^}/p" common.js.',authors:"suyuying",image:"https://github.com/suyuying.png",tags:["linux","sed"]},prevItem:{title:"learn github action from github docs",permalink:"/blog/2023/03/10/github-action/githubaction-learing"},nextItem:{title:"DNS Poisoning vs Domain Hijacking,Brief summary",permalink:"/blog/2023/03/07/linux-server/dns-pollution-hijack"}},l={authorsImageUrls:[void 0]},c=[{value:"sed",id:"sed",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"sed"},"sed"),(0,o.kt)("p",null,"\u4e00\u822c\u6253\u5370\n\u5370 5~7 \u884c \u5176\u4ed6\u884c\u6578 silence"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat -n xxxx.md | sed -n '5,7p'\n\n")),(0,o.kt)("p",null,"\u628a whois \u6aa2\u67e5 domain \u4e2d\u7684 Registry Expiry Date \u7684\u524d\u9762\u7684\u7a7a\u683c\u53bb\u6389,\u4ee5\u4e0b\u610f\u601d\u662f\u628a 0 \u500b\u4ee5\u4e0a\u7684 space \u53bb\u6389"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sed 's/\\s\\{0,\\}Registry Expiry Date: //'\n")))}m.isMDXComponent=!0}}]);