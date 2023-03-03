"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[5340],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),g=o,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},529:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"linux\u4e09\u5927\u795e\u5668\u4e4b\u4e00 sed\u8907\u7fd2\u7b46\u8a18",description:"\u6574\u7406\u5de5\u4f5c\u4e2d\u6709\u4f7f\u7528\u5230\u7684\u8cc7\u6599",authors:"suyuying",tags:["css","google font"]},i=void 0,c={permalink:"/blog/2023/03/03/work-record/sed-repratice",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-03-work-record/sed-repratice.md",source:"@site/blog/2023-03-03-work-record/sed-repratice.md",title:"linux\u4e09\u5927\u795e\u5668\u4e4b\u4e00 sed\u8907\u7fd2\u7b46\u8a18",description:"\u6574\u7406\u5de5\u4f5c\u4e2d\u6709\u4f7f\u7528\u5230\u7684\u8cc7\u6599",date:"2023-03-03T00:00:00.000Z",formattedDate:"March 3, 2023",tags:[{label:"css",permalink:"/blog/tags/css"},{label:"google font",permalink:"/blog/tags/google-font"}],readingTime:.305,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"linux\u4e09\u5927\u795e\u5668\u4e4b\u4e00 sed\u8907\u7fd2\u7b46\u8a18",description:"\u6574\u7406\u5de5\u4f5c\u4e2d\u6709\u4f7f\u7528\u5230\u7684\u8cc7\u6599",authors:"suyuying",tags:["css","google font"]},prevItem:{title:"githug action \u5b78\u7fd2\u7b46\u8a18",permalink:"/blog/2023/03/03/work-record/github-action"},nextItem:{title:"markdown\u8a9e\u6cd5\u7d00\u9304",permalink:"/blog/2023/03/02/work-record/md-form"}},l={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e00\u822c\u6253\u5370\n\u5370 5~7 \u884c \u5176\u4ed6\u884c\u6578 silence"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat -n xxxx.md | sed -n '5,7p'\n\n")),(0,o.kt)("p",null,"\u5370\u51fa\u6307\u5b9a\u5b57\u6a23\u7bc4\u570d\n\u5f9e\u6709\u95dc\u9375\u5b57\u70ba QOO \u90a3\u4e00\u884c\u5230\u4ee5}\u70ba\u958b\u982d\u7684\u90a3\u4e00\u884c(^\u4ee3\u8868\u6b63\u5247\u958b\u982d\u5b57\u5143)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sed -n "/QOO/,/^}/p" common.js\n')))}m.isMDXComponent=!0}}]);