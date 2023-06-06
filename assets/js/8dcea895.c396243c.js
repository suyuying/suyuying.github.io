"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[4244],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>y});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=s(a),d=r,y=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(y,l(l({ref:e},u),{},{components:a})):n.createElement(y,l({ref:e},u))}));function y(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},45851:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"introduction of pandas",description:"\u8655\u7406\u8cc7\u6599\u5f88\u5e38\u6703\u7528\u5230datetime,\u9019\u908a\u7d00\u9304\u4e00\u4e0b\u4f7f\u7528\u4e0a\u9762\u6703\u7528\u904e\u7684\u65b9\u6cd5,\u4e4b\u5f8c\u7b49\u8cc7\u6599\u9f4a\u5168\u518d\u5f59\u6574.",authors:"suyuying",tags:["Python","pandas","data analysis"]},l=void 0,i={permalink:"/blog/2023/04/18/Data Analysis/pandas/intro-of-pandas",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Data Analysis/pandas/2023-04-18-intro-of-pandas.md",source:"@site/blog/Data Analysis/pandas/2023-04-18-intro-of-pandas.md",title:"introduction of pandas",description:"\u8655\u7406\u8cc7\u6599\u5f88\u5e38\u6703\u7528\u5230datetime,\u9019\u908a\u7d00\u9304\u4e00\u4e0b\u4f7f\u7528\u4e0a\u9762\u6703\u7528\u904e\u7684\u65b9\u6cd5,\u4e4b\u5f8c\u7b49\u8cc7\u6599\u9f4a\u5168\u518d\u5f59\u6574.",date:"2023-04-18T00:00:00.000Z",formattedDate:"April 18, 2023",tags:[{label:"Python",permalink:"/blog/tags/python"},{label:"pandas",permalink:"/blog/tags/pandas"},{label:"data analysis",permalink:"/blog/tags/data-analysis"}],readingTime:20.845,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"introduction of pandas",description:"\u8655\u7406\u8cc7\u6599\u5f88\u5e38\u6703\u7528\u5230datetime,\u9019\u908a\u7d00\u9304\u4e00\u4e0b\u4f7f\u7528\u4e0a\u9762\u6703\u7528\u904e\u7684\u65b9\u6cd5,\u4e4b\u5f8c\u7b49\u8cc7\u6599\u9f4a\u5168\u518d\u5f59\u6574.",authors:"suyuying",tags:["Python","pandas","data analysis"]},prevItem:{title:"Quick sort algorithm in Python",permalink:"/blog/2023/04/23/Python/algorithm/Quick-sort"},nextItem:{title:"Python datetime guide",permalink:"/blog/2023/04/17/Python/datetime-guide"}},p={authorsImageUrls:[void 0]},s=[{value:"basic introduction",id:"basic-introduction",level:2},{value:"\u6578\u64da\u6e96\u5099",id:"\u6578\u64da\u6e96\u5099",level:3}],u={toc:s},c="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"basic-introduction"},"basic introduction"),(0,r.kt)("p",null,"\u5c0d\u8cc7\u6599\u9032\u884c\u5206\u6790,\u57fa\u672c\u4e0a\u904e\u7a0b\u5927\u81f4\u5982\u4ee5\u4e0b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8cc7\u6599\u6536\u96c6"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5de5\u5177\u5206\u6790\u8cc7\u6599"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u8996\u5316\u5206\u6790(\u4f5c\u5716)"),(0,r.kt)("li",{parentName:"ol"},"\u5efa\u6a21"),(0,r.kt)("li",{parentName:"ol"},"\u89e3\u91cb\u7d50\u679c")),(0,r.kt)("p",null,"\u7db2\u8def\u4e0a",(0,r.kt)("highlight",{color:"#25c2a0"},"\u8cc7\u6599\u6536\u96c6"),"\u65b9\u5f0f\u6709\u5f88\u591a,\u5f9e\u7c21\u4fbf\u5230\u9ebb\u7169\u4f9d\u5e8f\u5927\u81f4\u5982\u4ee5\u4e0b,\u5982\u679c\u9047\u5230\u9700\u8981\u53d6\u8cc7\u6599\u6642,\u53ef\u4ee5\u689d\u5217\u5f0f\u7684\u7be9\u9078\u627e\u5230\u5408\u9069\u65b9\u6cd5."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"API < \u958b\u767c\u8005\u5de5\u5177\u7684xhr/fetch\u89e3\u6790 < bs4\u89e3\u6790html\u4e2dcss\u8ddftag < selenium\u89e3\u6790html\u8ddf\u9ede\u64ca\n")),(0,r.kt)("p",null,"\u57fa\u672c\u4e0a\u7576\u7136\u662f\u5148\u5f9e\u7c21\u55ae\u958b\u59cb try,\u5047\u8a2d\u4eca\u5929\u5df2\u7d93\u53d6\u5230\u6240\u9700\u7684\u8cc7\u6599\u4e86,\u5b83\u53ef\u80fd\u662f csv,Json \u7b49\u683c\u5f0f,\u63a5\u8457",(0,r.kt)("highlight",{color:"#25c2a0"},"\u5206\u6790\u8cc7\u6599"),"\u6b65\u9a5f\u5c31\u6703\u662f",(0,r.kt)("highlight",{color:"#25c2a0"},"pandas"),"\u4e0a\u5834\u7684\u6642\u5019."),(0,r.kt)("p",null,"\u5206\u6790\u8cc7\u6599:\u5e38\u898b\u6d41\u7a0b\u6709 \u6578\u64da\u6e96\u5099\u3001\u9078\u53d6\u3001\u904e\u6ffe\u3001\u805a\u5408\u3001\u5206\u7d44\u3001\u6392\u5e8f\u3001\u5408\u4f75\u3001\u586b\u5145\u7f3a\u5931\u503c,\u53e6\u5916\u56e0\u70ba\u4ed6\u7684\u8cc7\u6599\u7d50\u69cb\u4e5f\u6709\u8ddf python \u7684\u7e6a\u5716\u5de5\u5177\u505a\u6574\u5408,\u4e5f\u53ef\u4ee5\u642d\u914d\u4f7f\u7528,\u5e38\u7528\u7684\u7e6a\u5716\u5de5\u5177\u5982\u4ee5\u4e0b."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plotly \u548c Bokeh \u662f\u57fa\u65bc JavaScript \u7684\u4ea4\u4e92\u5f0f\u5716\u8868\uff0c\u4e5f\u652f\u63f4\u5176\u4ed6\u8a9e\u8a00 ex.Python,\u53ef\u4ee5\u5275\u5efa\u4e92\u52d5\u6027\u66f4\u5f37\u7684\u5716\u8868\uff0c\u5982\u6ed1\u584a\u3001\u4e0b\u62c9\u9078\u55ae\u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},"Altair \u662f\u57fa\u65bc Vega-Lite \u7684 Python \u5957\u4ef6\uff0c\u652f\u6301\u5c07\u6578\u64da\u8f49\u63db\u70ba\u4ea4\u4e92\u5f0f\u5716\u8868,\u512a\u9ede\u662f\u8a9e\u6cd5\u8f03\u7c21\u55ae\u3002"),(0,r.kt)("li",{parentName:"ul"},"Seaborn \u5247\u662f\u4e00\u500b\u7d71\u8a08\u5716\u8868\u5957\u4ef6\uff0c\u5c08\u6ce8\u65bc\u7d71\u8a08\u7e6a\u5716\uff0c\u65b9\u4fbf\u4f7f\u7528\u8005\u9032\u884c\u5e38\u898b\u7684\u6578\u64da\u5206\u6790\u548c\u7e6a\u5716\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},"Matplotlib \u662f Python \u6700\u65e9\u671f\u7684\u7e6a\u5716\u5957\u4ef6\u4e4b\u4e00\uff0c\u529f\u80fd\u5f37\u5927\uff0c\u53ef\u4ee5\u7e6a\u88fd\u5404\u7a2e\u5716\u8868\uff0c\u5305\u62ec\u689d\u5f62\u5716\u3001\u76f4\u65b9\u5716\u3001\u6563\u9ede\u5716\u7b49\u7b49,\u57fa\u672c\u4e0a Seaborn \u662f\u5efa\u7acb\u5728 Matplotlib \u4e4b\u4e0a\u3002"),(0,r.kt)("li",{parentName:"ul"},"Pyecharts \u5247\u662f\u4e2d\u570b\u7684\u4e00\u500b\u958b\u6e90\u5716\u8868\u5eab\uff0c\u63d0\u4f9b\u4e86\u5404\u7a2e\u5404\u6a23\u7684\u5716\u8868\uff0c\u80fd\u5920\u7e6a\u88fd\u5730\u5716\u3001\u95dc\u4fc2\u5716\u3001\u71b1\u529b\u5716\u7b49\u591a\u7a2e\u5716\u8868\u3002")),(0,r.kt)("h3",{id:"\u6578\u64da\u6e96\u5099"},"\u6578\u64da\u6e96\u5099"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6578\u64da\u662f\u6539\u904e\u5f8c\u7684\u6578\u64da,\u6703\u4f5c\u70ba\u5f8c\u9762 demo \u904e\u7a0b\u7bc4\u4f8b,\u57fa\u672c\u4e0a\u4f60\u60f3\u5f97\u5230\u7684\u6578\u64da\u683c\u5f0f pandas \u90fd\u652f\u63f4\u4e86,md \u6a94,csv,dict,json..."),(0,r.kt)("p",null,"pandas \u4e3b\u8981\u6578\u64da\u7d50\u69cb\u6709"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Series\uff1a\u4e00\u7dad\u6578\u64da\u7d50\u69cb\uff0c\u985e\u4f3c\u65bc\u5e36\u6709\u6a19\u7c64\u7684\u4e00\u7dad\u6578\u7d44\uff0c\u53ef\u4ee5\u5bb9\u7d0d\u4e0d\u540c\u985e\u578b\u7684\u6578\u64da\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DataFrame\uff1a\u4e8c\u7dad\u6578\u64da\u7d50\u69cb\uff0c\u985e\u4f3c\u65bc\u4e00\u500b\u4e8c\u7dad\u6578\u7d44\u6216\u4e00\u500b\u95dc\u806f\u6578\u64da\u5eab\u8868\uff0c\u6bcf\u5217\u53ef\u4ee5\u6709\u4e0d\u540c\u7684\u6578\u64da\u985e\u578b\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Panel\uff1a\u4e09\u7dad\u6578\u64da\u7d50\u69cb\uff0c\u985e\u4f3c\u65bc\u4e00\u500b\u7531 DataFrame \u5c0d\u8c61\u7d44\u6210\u7684\u5b57\u5178\uff0c\u53ef\u4ee5\u7528\u4f86\u8868\u793a\u7531\u591a\u500b DataFrame \u5c0d\u8c61\u7d44\u6210\u7684\u6578\u64da\u96c6\u3002"))),(0,r.kt)("p",null,"\u6700\u5e38\u6703\u4f7f\u7528\u5230\u7684\u5c31\u662f DataFrame."))}m.isMDXComponent=!0}}]);