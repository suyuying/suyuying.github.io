"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[1772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"linux command \u4e09\u795e\u5668",description:'\u5f9e\u6709\u95dc\u9375\u5b57\u70ba QOO \u90a3\u4e00\u884c\u5230\u4ee5}\u70ba\u958b\u982d\u7684\u90a3\u4e00\u884c(^\u4ee3\u8868\u6b63\u5247\u958b\u982d\u5b57\u5143),sed -n "/QOO/,/^}/p" common.js.',authors:"suyuying",tags:["linux","sed"]},i=void 0,l={permalink:"/blog/2023/03/08/linux-server/linux-command-repratice",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/linux-server/2023-03-08-linux-command-repratice.md",source:"@site/blog/linux-server/2023-03-08-linux-command-repratice.md",title:"linux command \u4e09\u795e\u5668",description:'\u5f9e\u6709\u95dc\u9375\u5b57\u70ba QOO \u90a3\u4e00\u884c\u5230\u4ee5}\u70ba\u958b\u982d\u7684\u90a3\u4e00\u884c(^\u4ee3\u8868\u6b63\u5247\u958b\u982d\u5b57\u5143),sed -n "/QOO/,/^}/p" common.js.',date:"2023-03-08T00:00:00.000Z",formattedDate:"March 8, 2023",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"sed",permalink:"/blog/tags/sed"}],readingTime:.485,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"linux command \u4e09\u795e\u5668",description:'\u5f9e\u6709\u95dc\u9375\u5b57\u70ba QOO \u90a3\u4e00\u884c\u5230\u4ee5}\u70ba\u958b\u982d\u7684\u90a3\u4e00\u884c(^\u4ee3\u8868\u6b63\u5247\u958b\u982d\u5b57\u5143),sed -n "/QOO/,/^}/p" common.js.',authors:"suyuying",tags:["linux","sed"]},prevItem:{title:"learn github action from github docs",permalink:"/blog/2023/03/10/github-action/githubaction-learing"},nextItem:{title:"DNS Poisoning vs Domain Hijacking,Brief summary",permalink:"/blog/2023/03/07/linux-server/dns-pollution-hijack"}},c={authorsImageUrls:[void 0]},u=[{value:"sed",id:"sed",level:2},{value:"grep",id:"grep",level:2},{value:"awk",id:"awk",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"sed"},"sed"),(0,o.kt)("p",null,"\u4e00\u822c\u6253\u5370\n\u5370 5~7 \u884c \u5176\u4ed6\u884c\u6578 silence"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat -n xxxx.md | sed -n '5,7p'\n\n")),(0,o.kt)("p",null,"\u5370\u51fa\u6307\u5b9a\u5b57\u6a23\u7bc4\u570d\n\u5f9e\u6709\u95dc\u9375\u5b57\u70ba QOO \u90a3\u4e00\u884c\u5230\u4ee5}\u70ba\u958b\u982d\u7684\u90a3\u4e00\u884c(^\u4ee3\u8868\u6b63\u5247\u958b\u982d\u5b57\u5143)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sed -n "/QOO/,/^}/p" common.js\n')),(0,o.kt)("h2",{id:"grep"},"grep"),(0,o.kt)("p",null,"sort \u6392\u5217\nuniq \u53bb\u6389\u91cd\u8907\uff0c\u8981\u8a08\u6578\u53ef\u4ee5\u7528 uniq -c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'grep -r "bin" * | grep -Eo "code\\":[0-9]{0,}" |sort | uniq\n')),(0,o.kt)("h2",{id:"awk"},"awk"))}m.isMDXComponent=!0}}]);