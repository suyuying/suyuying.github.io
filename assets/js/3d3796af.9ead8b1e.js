"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[4291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"Useful coding method and module",description:"\u7d00\u9304\u4e00\u4e9b\u5e38\u7528\u7684coding\u6280\u5de7,\u540c\u6642\u7d00\u9304\u4e00\u4e9b\u5be6\u7528\u6a21\u7d44,\u76ee\u524d\u67091.virustotal\u7684module vt\u7684\u4f7f\u7528\u4ecb\u7d39,2.\u5982\u4f55\u53d6\u51fa\u7269\u4ef6\u5e95\u4e0b\u6240\u6709\u5c6c\u6027\u8ddf\u5176\u503c",image:"https://github.com/suyuying.png",authors:"suyuying",tags:["Python"]},a=void 0,l={permalink:"/blog/2023/05/26/Python/useful-method",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Python/2023-05-26-useful-method.md",source:"@site/blog/Python/2023-05-26-useful-method.md",title:"Useful coding method and module",description:"\u7d00\u9304\u4e00\u4e9b\u5e38\u7528\u7684coding\u6280\u5de7,\u540c\u6642\u7d00\u9304\u4e00\u4e9b\u5be6\u7528\u6a21\u7d44,\u76ee\u524d\u67091.virustotal\u7684module vt\u7684\u4f7f\u7528\u4ecb\u7d39,2.\u5982\u4f55\u53d6\u51fa\u7269\u4ef6\u5e95\u4e0b\u6240\u6709\u5c6c\u6027\u8ddf\u5176\u503c",date:"2023-05-26T00:00:00.000Z",formattedDate:"May 26, 2023",tags:[{label:"Python",permalink:"/blog/tags/python"}],readingTime:5.59,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Useful coding method and module",description:"\u7d00\u9304\u4e00\u4e9b\u5e38\u7528\u7684coding\u6280\u5de7,\u540c\u6642\u7d00\u9304\u4e00\u4e9b\u5be6\u7528\u6a21\u7d44,\u76ee\u524d\u67091.virustotal\u7684module vt\u7684\u4f7f\u7528\u4ecb\u7d39,2.\u5982\u4f55\u53d6\u51fa\u7269\u4ef6\u5e95\u4e0b\u6240\u6709\u5c6c\u6027\u8ddf\u5176\u503c",image:"https://github.com/suyuying.png",authors:"suyuying",tags:["Python"]},prevItem:{title:"Decorator in python3",permalink:"/blog/2023/05/26/Python/decrator"},nextItem:{title:"how to create user like root",permalink:"/blog/2023/05/24/linux-server/create-user-like-root"}},u={authorsImageUrls:[void 0]},s=[{value:"coding \u90e8\u5206",id:"coding-\u90e8\u5206",level:2},{value:"False \u8ddf None \u4f7f\u7528\u6642\u6a5f",id:"false-\u8ddf-none-\u4f7f\u7528\u6642\u6a5f",level:3},{value:"\u8acb\u6c42 api \u5931\u6557\u5f8c retry",id:"\u8acb\u6c42-api-\u5931\u6557\u5f8c-retry",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9019\u908a\u6703\u8a18\u9304\u4e00\u4e9b\u5be6\u7528\u7684 coding \u65b9\u6cd5"),(0,o.kt)("h2",{id:"coding-\u90e8\u5206"},"coding \u90e8\u5206"),(0,o.kt)("h3",{id:"false-\u8ddf-none-\u4f7f\u7528\u6642\u6a5f"},"False \u8ddf None \u4f7f\u7528\u6642\u6a5f"),(0,o.kt)("p",null,"False \u4e3b\u8981\u505a\u689d\u4ef6\u5224\u65b7,None \u5247\u7528\u65bc\u8868\u793a\u7f3a\u5c11\u503c,\u6216\u8b8a\u91cf\u6c92\u6709\u88ab\u7d66\u503c\u7684\u8acb\u6cc1.\n\u8209\u4f8b\u4f86\u8aaa,\u4eca\u5929 request \u60f3\u8981\u53d6\u5f97\u8cc7\u6599\u653e\u5165\u8b8a\u6578 stock_info, \u5982\u679c\u5224\u65b7\u53d6\u51fa\u4f86\u8cc7\u6599\u4e0d\u5408\u9810\u671f,\u6216\u8005\u5831\u932f,\u90a3\u5c31\u9069\u5408\u7528 None.\n\u90a3 False \u5c31\u662f\u62ff\u4f86\u8868\u9054\u689d\u4ef6\u6210\u4e0d\u6210\u7acb\u7684\u60c5\u6cc1,\u4f8b\u5982\u5224\u65b7\u80a1\u7968\u662f\u5426\u4e0a\u6f32,\u53ef\u4ee5\u9019\u6a23\u5b9a\u7fa9\u8b8a\u6578,",(0,o.kt)("inlineCode",{parentName:"p"},"is_price_up"),",",(0,o.kt)("inlineCode",{parentName:"p"},"True"),"\u4ee3\u8868\u4e0a\u6f32,",(0,o.kt)("inlineCode",{parentName:"p"},"False"),"\u4ee3\u8868\u4e0b\u8dcc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# \u4f7f\u7528 None \u8868\u793a\u7f3a\u5c11\u503c\u6216\u8b8a\u91cf\u5c1a\u672a\u88ab\u8ce6\u4e88\u4efb\u4f55\u503c\nname = None\nif name is None:\n    print("\u540d\u5b57\u5c1a\u672a\u88ab\u8ce6\u503c")\n\n# None \u4f5c\u70ba\u51fd\u5f0f\u7684\u8fd4\u56de\u503c\ndef divide(a, b):\n    if b == 0:\n        return None\n    return a / b\n\nresult = divide(10, 0)\nif result is None:\n    print("\u7121\u6548\u7684\u64cd\u4f5c")\n\n# \u4f7f\u7528 False \u9032\u884c\u689d\u4ef6\u5224\u65b7\nflag = False\nif flag:\n    print("\u9019\u500b\u689d\u4ef6\u4e0d\u6210\u7acb")\nelse:\n    print("\u9019\u500b\u689d\u4ef6\u6210\u7acb")\n\n')),(0,o.kt)("h3",{id:"\u8acb\u6c42-api-\u5931\u6557\u5f8c-retry"},"\u8acb\u6c42 api \u5931\u6557\u5f8c retry"),(0,o.kt)("p",null,"\u6709\u6642\u5019\u5c0d\u65b9 server \u4e0d\u77e5\u9053\u5565\u554f\u984c,\u6703\u51fa\u73fe\u5831\u932f,\u904e\u4e00\u4e0b\u53c8\u597d\u4e86,\u9019\u908a\u7528 while \u914d\u5408\u6578\u5b57\u958b\u95dc,\u53bb\u57f7\u884c retry,\u4e0d\u904e\u8981\u8a18\u5f97 try,except \u53ea\u5b58\u5728\u65bc\u7576\u4e0b\u6587\u6a94,\u4e0d\u6703\u8de8\u6587\u6a94\u63a5 Error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'max_retries = 3\nretries = 0\nwhile retries<max_retries:\n    try:\n        request....\n        return sth\n    except Exception as err:\n        retries += 1\n        time.sleep(1)# \u5ef6\u9072\u4e00\u79d2\u5f8c\u518d\u91cd\u65b0\u57f7\u884c\n        if retries==max_retries:\n            telegram_bot_sendtext(f"sth wrong, go cheeck")\n            print(err)\n    return  None\n')),(0,o.kt)("p",null,"\u6216\u8005\u914d\u5408\u5617\u8a66\u4e0d\u540c key,\u540c\u6642\u505a\u9023\u7dda retry"))}d.isMDXComponent=!0}}]);