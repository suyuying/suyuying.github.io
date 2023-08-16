"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[2208],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=l,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24329:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={title:"ELK KQL\u8a9e\u6cd5\u4ecb\u7d39",description:"Elastic\u67e5\u8a62\u662f\u900f\u904e\u67d0\u500bdata view\u53bb\u67e5\u5e95\u4e0b\u7684field,\u4e00\u500b\u61c9\u7528\u7a0b\u5f0f\u7684\u65e5\u8a8c(data view)\u5c31\u50cf\u4e00\u5f35\u8868,\u6bcf\u500bfield\u5c31\u50cf\u662fSQL\u7684\u6b04\u4f4d,\u9810\u8a2d\u6703\u770b\u5230\u5f88\u591afield,\u4f8b\u5982:timestamp\u662f\u6a19\u8a18\u6642\u9593,message\u6a19\u8a18\u8a0a\u606f\u7b49.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["KQL","ELK"]},i=void 0,o={permalink:"/blog/2023/08/10/ELK/KQL-cheat-sheet",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/ELK/2023-08-10-KQL-cheat-sheet.md",source:"@site/blog/ELK/2023-08-10-KQL-cheat-sheet.md",title:"ELK KQL\u8a9e\u6cd5\u4ecb\u7d39",description:"Elastic\u67e5\u8a62\u662f\u900f\u904e\u67d0\u500bdata view\u53bb\u67e5\u5e95\u4e0b\u7684field,\u4e00\u500b\u61c9\u7528\u7a0b\u5f0f\u7684\u65e5\u8a8c(data view)\u5c31\u50cf\u4e00\u5f35\u8868,\u6bcf\u500bfield\u5c31\u50cf\u662fSQL\u7684\u6b04\u4f4d,\u9810\u8a2d\u6703\u770b\u5230\u5f88\u591afield,\u4f8b\u5982:timestamp\u662f\u6a19\u8a18\u6642\u9593,message\u6a19\u8a18\u8a0a\u606f\u7b49.",date:"2023-08-10T00:00:00.000Z",formattedDate:"August 10, 2023",tags:[{label:"KQL",permalink:"/blog/tags/kql"},{label:"ELK",permalink:"/blog/tags/elk"}],readingTime:2.565,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"ELK KQL\u8a9e\u6cd5\u4ecb\u7d39",description:"Elastic\u67e5\u8a62\u662f\u900f\u904e\u67d0\u500bdata view\u53bb\u67e5\u5e95\u4e0b\u7684field,\u4e00\u500b\u61c9\u7528\u7a0b\u5f0f\u7684\u65e5\u8a8c(data view)\u5c31\u50cf\u4e00\u5f35\u8868,\u6bcf\u500bfield\u5c31\u50cf\u662fSQL\u7684\u6b04\u4f4d,\u9810\u8a2d\u6703\u770b\u5230\u5f88\u591afield,\u4f8b\u5982:timestamp\u662f\u6a19\u8a18\u6642\u9593,message\u6a19\u8a18\u8a0a\u606f\u7b49.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["KQL","ELK"]},prevItem:{title:"Advanced module of ansible",permalink:"/blog/2023/08/14/IaC/ansible/ansible-advanced-module"},nextItem:{title:"k8s\u95b1\u8b80\u7b46\u8a18",permalink:"/blog/2023/08/09/K8S/k8s-basic"}},s={authorsImageUrls:[void 0]},u=[{value:"\u67e5\u8a62\u4ecb\u7d39",id:"\u67e5\u8a62\u4ecb\u7d39",level:2},{value:"KQL\u8a9e\u6cd5",id:"kql\u8a9e\u6cd5",level:3},{value:"\u67e5\u8a62\u8a9e\u6cd5\u7bc4\u4f8b",id:"\u67e5\u8a62\u8a9e\u6cd5\u7bc4\u4f8b",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u67e5\u8a62\u4ecb\u7d39"},"\u67e5\u8a62\u4ecb\u7d39"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ELK_query png",src:a(31201).Z,width:"580",height:"353"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SPACES selection: \u901a\u5e38\u6703\u4f9d\u64da\u7522\u54c1\u8ddf\u74b0\u5883\u540d\u7a31\u547d\u540d,\u8acb\u4f9d\u64da\u4f60\u8981\u67e5\u8a62\u7684\u7522\u54c1\u505a\u9078\u64c7,\u4f8b\u5982:A1-UAT,B2-PROD\u7b49,\u6578\u5b571\u65b9\u6846\u5728Elastic\u7684\u8853\u8a9e\u662fspace."),(0,l.kt)("li",{parentName:"ul"},"View selection: \u9019\u908a\u662f\u4f9d\u64da\u6a21\u584a(\u61c9\u7528\u7a0b\u5f0f)\u5340\u5206,\u900f\u904e\u5f80\u4e0b\u62c9\u958b\u5217\u8868\u53bb\u9078\u64c7\u4f60\u53ef\u4ee5\u9078\u8981\u770b\u54ea\u96bb\u670d\u52d9\u7684log,\u4e5f\u53ef\u4ee5\u5728\u5c55\u958b\u5217\u8868\u4e2d\u7684\u67e5\u8a62\u6846\u76f4\u63a5search\u8a72\u670d\u52d9\u540d\u7a31,ex.xxx-api,\u6578\u5b572\u65b9\u6846\u5728Elastic\u7684\u8853\u8a9e\u662fdata view."),(0,l.kt)("li",{parentName:"ul"},"Field selection: \u5982\u679c\u9019\u908a\u7559\u7a7a,\u67e5\u8a62\u7d50\u679c\u6703\u7d66\u4f60\u6240\u6709\u7684field\u8cc7\u6599(\u4f8b\u5982hostname,\u8def\u5f91\u4f4d\u7f6e\u7b49\u7b49),\u5982\u679c\u53ea\u662f\u55ae\u7d14\u60f3\u770b\u67d0\u6b04\u4f4d,\u9019\u908a\u53ef\u4ee5\u8f38\u5165\u8a72\u6b04\u4f4d\u540d\u7a31\u7136\u5f8c\u6309\u52a0\u865f,\u9019\u6a23\u5c31\u53ea\u6703\u986f\u793a\u51fa\u9019\u500bfield\u7684\u8cc7\u6599\uff01"),(0,l.kt)("li",{parentName:"ul"},"Log\u67e5\u8a62\u5340\u57df: \u9019\u908a\u662f\u4e3b\u8981\u67e5\u8a62log\u5730\u65b9,\u900f\u904eK(kibana)QL\u8a9e\u6cd5\u53bb\u67e5\u8a62,\u9810\u8a2d\u67e5\u8a62\u6c92\u6709\u5340\u5206\u5927\u5c0f\u5beb.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ELK_check_time png",src:a(64559).Z,width:"318",height:"72"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select time: \u9019\u908a\u662f\u9078\u64c7\u6642\u9593,\u9810\u8a2d\u662f\u7528\u76f8\u5c0d\u6642\u9593,\u4e5f\u53ef\u4ee5\u9078\u64c7\u6642\u9593\u6bb5,ex.2023-8-8 09:00~2023-8-9 10:00."),(0,l.kt)("li",{parentName:"ul"},"Query: \u4ee5\u4e0a\u90fd\u9078\u5b9a\u5f8c,\u900f\u904e\u9019\u683c\u505a\u67e5\u8a62")),(0,l.kt)("h3",{id:"kql\u8a9e\u6cd5"},"KQL\u8a9e\u6cd5"),(0,l.kt)("p",null,"Elastic\u67e5\u8a62\u662f\u900f\u904e\u67d0\u500bdata view\u53bb\u67e5\u5e95\u4e0b\u7684field,\u4e00\u500b\u61c9\u7528\u7a0b\u5f0f\u7684\u65e5\u8a8c(data view)\u5c31\u50cf\u4e00\u5f35\u8868,\u6bcf\u500bfield\u5c31\u50cf\u662fSQL\u7684\u6b04\u4f4d,\u9810\u8a2d\u6703\u770b\u5230\u5f88\u591afield,\u4f8b\u5982:timestamp\u662f\u6a19\u8a18\u6642\u9593,message\u6a19\u8a18\u8a0a\u606f\u7b49."),(0,l.kt)("h3",{id:"\u67e5\u8a62\u8a9e\u6cd5\u7bc4\u4f8b"},"\u67e5\u8a62\u8a9e\u6cd5\u7bc4\u4f8b"),(0,l.kt)("p",null,"\u67e5\u8a62\u4e0d\u5206\u5927\u5c0f\u5beb\uff01"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'2023/08/10 08:42:50 [error] 26457#0: *404504 "/data/info/index.html" is not found (2: No such file or directory), client: 192.168.0.11, server: h5.alloha.com, request: "GET /index/index/info/ HTTP/1.0", host: "www.alloha.com", referrer: "https://www.alloha.com:443/index/index/info/"\n')),(0,l.kt)("p",null,"\u4ee5\u67e5\u8a62\u4ee5\u4e0a\u70ba\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8a62message field\u542b\u6709www\u95dc\u9375\u5b57")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kql"},"message:  *www*\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8a62message field\u542b\u6709\u9019\u5169\u500b\u5b57\u773cinfo\u4ee5\u53canot found\u7684\u53e5\u5b50(\u7cbe\u78ba\u5339\u914d)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kql"},'message:  info AND message: "not found"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8a62message field\u542b\u6709\u9019\u5169\u500b\u5b57\u773cinfo\u6216not found\u7684\u53e5\u5b50(\u7cbe\u78ba\u5339\u914d)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kql"},'message:  info OR message: "not found"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8a62\u6642\u9593\u57282023-08-10\u4e5d\u9ede\u5230\u5341\u9ede\u9593\u7684log")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kql"},'@timestamp >= "2023-08-10T09" AND @timestamp <= "2023-08-10T10"\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u53c3\u8003\u8cc7\u6599"),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.timroes.de/kibana-search-cheatsheet"},"Kibana Search Cheatsheet (KQL & Lucene)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/kibana/current/kuery-query.html"},"Kibana offical website")))))}m.isMDXComponent=!0},64559:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ELK_check_time-936057517b5c5b81090814ad72ec80ba.png"},31201:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ELK_query-d9e815ef6a62481edaff9d7179fad6e5.png"}}]);