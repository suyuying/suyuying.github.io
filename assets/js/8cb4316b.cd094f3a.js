"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[2450],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=p(n),y=a,m=s["".concat(u,".").concat(y)]||s[y]||f[y]||o;return n?r.createElement(m,i(i({ref:e},c),{},{components:n})):r.createElement(m,i({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[s]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},91430:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Decorator in python3",description:"\u56e0\u70ba\u4e4b\u524d\u59cb\u7d42\u90fd\u770b\u4e0d\u61c2decorator\u9019\u6b21\u525b\u597d\u7528\u5230,\u6240\u4ee5\u8a18\u9304\u4e00\u4e0b\u5b78\u7fd2\u8ddf\u7406\u89e3.\u5beb\u7a0b\u5f0f\u5f88\u5e38\u770b\u5230\u9ad8\u7d1a\u6280\u5de7\u88dd\u98fe\u5668,@xxxx \u9019\u7a2e\u6771\u897f,\u56e0\u70ba\u4e4b\u524d\u90fd\u53ef\u4ee5\u7528\u4e00\u4e9b\u65b9\u5f0f\u907f\u958b\u4e0d\u9019\u6a23\u5beb,\u76f4\u5230\u67d0\u6b21\u5728\u8ddf\u5225\u4eba\u4e32\u7a0b\u5f0f\u7684\u6642\u5019,\u70ba\u4e86\u6e1b\u5c11\u5f71\u97ff\u7bc4\u570d,\u6240\u4ee5\u9078\u7528\u88dd\u98fe\u5668\u53bb\u62ff\u5c0d\u65b9 return \u7684\u6771\u897f\u5728\u8655\u7406\u4e00\u6b21,\u800c\u5c0d\u65b9\u4e5f\u5f88\u7c21\u55ae,\u53ea\u8981\u628a\u88dd\u98fe\u5668\u653e\u4e0a\u53bb\u5c31\u53ef\u4ee5\u76f4\u63a5\u7528\u4e86,\u5f88\u65b9\u4fbf\uff01\u88dd\u98fe\u5668\u4e3b\u8981\u61c9\u7528\u60c5\u5883\u662f\u5728\u4e0d\u5f71\u97ff\u5c0d\u65b9 function \u4e0b,\u7d66\u9019\u500b function \u65b0\u529f\u80fd,\u88dd\u98fe\u5668\u7684\u5f48\u6027\u548c\u53ef\u64f4\u5c55\u6027\u4f7f\u5176\u6210\u70ba Python \u4e2d\u5f37\u5927\u7684\u7a0b\u5f0f\u8a2d\u8a08\u5de5\u5177\u4e4b\u4e00.",image:"https://github.com/suyuying.png",authors:"suyuying",tags:["Python"]},i=void 0,l={permalink:"/blog/2023/05/26/Python/decrator",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Python/2023-05-26-decrator.md",source:"@site/blog/Python/2023-05-26-decrator.md",title:"Decorator in python3",description:"\u56e0\u70ba\u4e4b\u524d\u59cb\u7d42\u90fd\u770b\u4e0d\u61c2decorator\u9019\u6b21\u525b\u597d\u7528\u5230,\u6240\u4ee5\u8a18\u9304\u4e00\u4e0b\u5b78\u7fd2\u8ddf\u7406\u89e3.\u5beb\u7a0b\u5f0f\u5f88\u5e38\u770b\u5230\u9ad8\u7d1a\u6280\u5de7\u88dd\u98fe\u5668,@xxxx \u9019\u7a2e\u6771\u897f,\u56e0\u70ba\u4e4b\u524d\u90fd\u53ef\u4ee5\u7528\u4e00\u4e9b\u65b9\u5f0f\u907f\u958b\u4e0d\u9019\u6a23\u5beb,\u76f4\u5230\u67d0\u6b21\u5728\u8ddf\u5225\u4eba\u4e32\u7a0b\u5f0f\u7684\u6642\u5019,\u70ba\u4e86\u6e1b\u5c11\u5f71\u97ff\u7bc4\u570d,\u6240\u4ee5\u9078\u7528\u88dd\u98fe\u5668\u53bb\u62ff\u5c0d\u65b9 return \u7684\u6771\u897f\u5728\u8655\u7406\u4e00\u6b21,\u800c\u5c0d\u65b9\u4e5f\u5f88\u7c21\u55ae,\u53ea\u8981\u628a\u88dd\u98fe\u5668\u653e\u4e0a\u53bb\u5c31\u53ef\u4ee5\u76f4\u63a5\u7528\u4e86,\u5f88\u65b9\u4fbf\uff01\u88dd\u98fe\u5668\u4e3b\u8981\u61c9\u7528\u60c5\u5883\u662f\u5728\u4e0d\u5f71\u97ff\u5c0d\u65b9 function \u4e0b,\u7d66\u9019\u500b function \u65b0\u529f\u80fd,\u88dd\u98fe\u5668\u7684\u5f48\u6027\u548c\u53ef\u64f4\u5c55\u6027\u4f7f\u5176\u6210\u70ba Python \u4e2d\u5f37\u5927\u7684\u7a0b\u5f0f\u8a2d\u8a08\u5de5\u5177\u4e4b\u4e00.",date:"2023-05-26T00:00:00.000Z",formattedDate:"May 26, 2023",tags:[{label:"Python",permalink:"/blog/tags/python"}],readingTime:5.375,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Decorator in python3",description:"\u56e0\u70ba\u4e4b\u524d\u59cb\u7d42\u90fd\u770b\u4e0d\u61c2decorator\u9019\u6b21\u525b\u597d\u7528\u5230,\u6240\u4ee5\u8a18\u9304\u4e00\u4e0b\u5b78\u7fd2\u8ddf\u7406\u89e3.\u5beb\u7a0b\u5f0f\u5f88\u5e38\u770b\u5230\u9ad8\u7d1a\u6280\u5de7\u88dd\u98fe\u5668,@xxxx \u9019\u7a2e\u6771\u897f,\u56e0\u70ba\u4e4b\u524d\u90fd\u53ef\u4ee5\u7528\u4e00\u4e9b\u65b9\u5f0f\u907f\u958b\u4e0d\u9019\u6a23\u5beb,\u76f4\u5230\u67d0\u6b21\u5728\u8ddf\u5225\u4eba\u4e32\u7a0b\u5f0f\u7684\u6642\u5019,\u70ba\u4e86\u6e1b\u5c11\u5f71\u97ff\u7bc4\u570d,\u6240\u4ee5\u9078\u7528\u88dd\u98fe\u5668\u53bb\u62ff\u5c0d\u65b9 return \u7684\u6771\u897f\u5728\u8655\u7406\u4e00\u6b21,\u800c\u5c0d\u65b9\u4e5f\u5f88\u7c21\u55ae,\u53ea\u8981\u628a\u88dd\u98fe\u5668\u653e\u4e0a\u53bb\u5c31\u53ef\u4ee5\u76f4\u63a5\u7528\u4e86,\u5f88\u65b9\u4fbf\uff01\u88dd\u98fe\u5668\u4e3b\u8981\u61c9\u7528\u60c5\u5883\u662f\u5728\u4e0d\u5f71\u97ff\u5c0d\u65b9 function \u4e0b,\u7d66\u9019\u500b function \u65b0\u529f\u80fd,\u88dd\u98fe\u5668\u7684\u5f48\u6027\u548c\u53ef\u64f4\u5c55\u6027\u4f7f\u5176\u6210\u70ba Python \u4e2d\u5f37\u5927\u7684\u7a0b\u5f0f\u8a2d\u8a08\u5de5\u5177\u4e4b\u4e00.",image:"https://github.com/suyuying.png",authors:"suyuying",tags:["Python"]},nextItem:{title:"Useful coding method and module",permalink:"/blog/2023/05/26/Python/useful-method"}},u={authorsImageUrls:[void 0]},p=[{value:"\u88dd\u98fe\u5668",id:"\u88dd\u98fe\u5668",level:2},{value:"partial function",id:"partial-function",level:3},{value:"\u88dd\u98fe\u5668\u6b63\u7bc7",id:"\u88dd\u98fe\u5668\u6b63\u7bc7",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}],c={toc:p},s="wrapper";function f(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u88dd\u98fe\u5668"},"\u88dd\u98fe\u5668"),(0,a.kt)("p",null,"\u5beb\u7a0b\u5f0f\u5f88\u5e38\u770b\u5230\u9ad8\u7d1a\u6280\u5de7\u88dd\u98fe\u5668,@xxxx \u9019\u7a2e\u6771\u897f,\u56e0\u70ba\u4e4b\u524d\u90fd\u53ef\u4ee5\u7528\u4e00\u4e9b\u65b9\u5f0f\u907f\u958b\u4e0d\u9019\u6a23\u5beb,\u76f4\u5230\u67d0\u6b21\u5728\u8ddf\u5225\u4eba\u4e32\u7a0b\u5f0f\u7684\u6642\u5019,\u70ba\u4e86\u6e1b\u5c11\u5f71\u97ff\u7bc4\u570d,\u6240\u4ee5\u9078\u7528\u88dd\u98fe\u5668\u53bb\u62ff\u5c0d\u65b9 return \u7684\u6771\u897f\u5728\u8655\u7406\u4e00\u6b21,\u800c\u5c0d\u65b9\u4e5f\u5f88\u7c21\u55ae,\u53ea\u8981\u628a\u88dd\u98fe\u5668\u653e\u4e0a\u53bb\u5c31\u53ef\u4ee5\u76f4\u63a5\u7528\u4e86,\u5f88\u65b9\u4fbf\uff01\u88dd\u98fe\u5668\u4e3b\u8981\u61c9\u7528\u60c5\u5883\u662f\u5728\u4e0d\u5f71\u97ff\u5c0d\u65b9 function \u4e0b,\u7d66\u9019\u500b function \u65b0\u529f\u80fd,\u88dd\u98fe\u5668\u7684\u5f48\u6027\u548c\u53ef\u64f4\u5c55\u6027\u4f7f\u5176\u6210\u70ba Python \u4e2d\u5f37\u5927\u7684\u7a0b\u5f0f\u8a2d\u8a08\u5de5\u5177\u4e4b\u4e00."),(0,a.kt)("h3",{id:"partial-function"},"partial function"),(0,a.kt)("p",null,"\u56e0\u70ba\u88dd\u98fe\u5668\u6709\u6642\u5019\u6703\u914d\u5408 partial function,\u6240\u4ee5\u8981\u4e86\u89e3\u4e00\u4e0b."),(0,a.kt)("p",null,"partial \u662f python \u7684\u504f\u51fd\u793a,\u4f7f\u7528\u4e0a\u611f\u89ba\u5c31\u662f\u65b9\u4fbf\u4f60\u5e36\u5165\u9810\u8a2d\u53c3\u6578\u5230\u4e00\u500b\u5df2\u77e5 function,\u4e26\u900f\u904e\u504f\u51fd\u5f0f\u53bb\u5efa\u7acb\u65b0\u7684 function!\u4f7f\u7528 partial \u51fd\u6578\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u5c0d\u73fe\u6709\u51fd\u5f0f\u9032\u884c\u5b9a\u5236\u548c\u91cd\u7528\u3002\u90a3\u70ba\u4f55\u4e0d\u9810\u8a2d\u5e36\u5165\uff1f\u7e3d\u6703\u6709\u9700\u8981\u591a\u500b\u9810\u8a2d\u503c\u7684\u60c5\u6cc1\u5427\uff5e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u504f\u51fd\u793a\u7bc4\u4f8b\u4e00")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from functools import partial\n\n# \u539f\u59cb\u51fd\u5f0f\ndef add(x, y):\n    return x + y\n\n# \u5275\u5efa\u504f\u51fd\u5f0f\nadd_five = partial(add, y=5)\n\n# \u4f7f\u7528\u504f\u51fd\u5f0f\nresult = add_five(10)\nprint(result)  # \u8f38\u51fa: 15\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u504f\u51fd\u793a\u7bc4\u4f8b\u4e8c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from functools import partial\n\n# \u5b9a\u7fa9\u4e00\u500b\u5177\u6709\u591a\u500b\u53c3\u6578\u7684\u51fd\u5f0f\ndef multiply(x, y, z):\n    return x * y * z\n\n# \u4f7f\u7528\u504f\u51fd\u6578\u5c07\u5176\u4e2d\u4e00\u500b\u53c3\u6578\u7684\u9810\u8a2d\u503c\u56fa\u5b9a\u70ba 2\nnew_func = partial(multiply, y=2)\n\n# \u8abf\u7528\u65b0\u51fd\u5f0f\nresult = new_func(3, z=4)\nprint(result)  # \u8f38\u51fa: 24\n\n")),(0,a.kt)("h3",{id:"\u88dd\u98fe\u5668\u6b63\u7bc7"},"\u88dd\u98fe\u5668\u6b63\u7bc7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'from functools import partial, wraps\nimport vt\n\ndef partial_decorator1(func=None, *, apikey=api_key_global):\n    def actual_decorator(func, apikey):\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            result = func(*args, **kwargs)\n            sha256_hash = result\n            client = vt.Client(apikey)\n            file = client.get_object(f"/files/{sha256_hash}")\n            print(file.last_analysis_stats)\n            client.close()\n            return result\n\n        return wrapper\n\n    if func:\n        return actual_decorator(func, apikey)\n    else:\n        return partial(actual_decorator, apikey=apikey)\n\n# \u4f7f\u7528\u65b0\u7684\u88c5\u9970\u5668\n@partial_decorator1(apikey=api_key_global)\ndef my_function(file_path):\n    # \u5728\u8fd9\u91cc\u6267\u884c\u4f60\u7684\u903b\u8f91\u5e76\u8fd4\u56de\u4e00\u4e2a\u54c8\u5e0c\u503c\n    return file_path\n\n')),(0,a.kt)("p",null,"result = func(","*","args, ","*","*","kwargs)\u9019\u908a\u6703\u62ff\u5230\u539f\u59cb function \u5e36\u5165\u53c3\u6578\u7684\u4e00\u822c return!\u5f8c\u9762\u7684\u7a0b\u5f0f\u78bc\u662f\u5c0d\u8a72 return \u4f5c\u8655\u7406\uff01"),(0,a.kt)("p",null,"\u6700\u5f8c\u9762\u7684 if else \u6703\u6bd4\u8f03\u96e3\u61c2."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"if func: \u9019\u90e8\u5206\u8655\u7406\u7684\u662f\u7576\u88dd\u98fe\u5668\u88ab\u7528\u65bc\u4e00\u500b\u51fd\u6578\u6642\uff08\u4e5f\u5c31\u662f\u88ab\u76f4\u63a5\u61c9\u7528\u5230\u51fd\u6578\u4e0a\uff0c\u4f8b\u5982 @partial_decorator1\uff09\u7684\u60c5\u6cc1\u3002\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0cfunc \u53c3\u6578\u6703\u88ab\u81ea\u52d5\u8a2d\u7f6e\u70ba\u88ab\u88dd\u98fe\u7684\u51fd\u6578\u3002\u9019\u6642\uff0cactual_decorator(func, api_key) \u6703\u88ab\u8abf\u7528\uff0c\u5176\u7d50\u679c\uff08\u4e5f\u5c31\u662f\u88dd\u98fe\u904e\u7684\u51fd\u6578\uff09\u88ab\u8fd4\u56de\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"else: \u9019\u90e8\u5206\u8655\u7406\u7684\u662f\u7576\u88dd\u98fe\u5668\u88ab\u7576\u4f5c\u51fd\u6578\u8abf\u7528\uff08\u4f8b\u5982 @partial_decorator1() \u6216 @partial_decorator1(api_key=some_key)\uff09\u7684\u60c5\u6cc1\u3002\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0cfunc \u53c3\u6578\u6703\u9ed8\u8a8d\u70ba None\uff0c\u56e0\u6b64 else \u5206\u652f\u6703\u88ab\u57f7\u884c\u3002 partial(actual_decorator, api_key=api_key) \u5275\u5efa\u4e86\u4e00\u500b\u65b0\u7684\u88dd\u98fe\u5668\uff0c\u9019\u500b\u88dd\u98fe\u5668\u6703\u63a5\u53d7\u4e00\u500b\u51fd\u6578\u4f5c\u70ba\u53c3\u6578\uff0c\u4e26\u8fd4\u56de\u8a72\u51fd\u6578\u7684\u88dd\u98fe\u7248\u672c\u3002\u65b0\u7684\u88dd\u98fe\u5668\u6703\u5728\u7a0d\u5f8c\u7684\u6642\u9593\u88ab\u8abf\u7528\uff0c\u9019\u6642\u624d\u6703\u88dd\u98fe\u76ee\u6a19\u51fd\u6578\u3002"))),(0,a.kt)("p",null,"\u7576\u88dd\u98fe\u5668\u4ee5 @partial_decorator1 \u7684\u5f62\u5f0f\u61c9\u7528\u5230\u51fd\u6578\u4e0a\u6642\uff0c\u6703\u8d70 if func: \u5206\u652f\uff1b\u800c\u7576\u88dd\u98fe\u5668\u4ee5 @partial_decorator1() \u6216 @partial_decorator1(api_key=some_key) \u7684\u5f62\u5f0f\u61c9\u7528\u6642\uff0c\u6703\u8d70 else: \u5206\u652f"),(0,a.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,a.kt)("p",null,"\u4e00\u822c\u88dd\u98fe\u5668\u4e0d\u5e36\u62ec\u865f(ex.@partial_decorator1),\u4ee3\u8868\u8a72\u88dd\u98fe\u5668\u6703\u81ea\u52d5\u5c07 func \u53c3\u6578\u8a2d\u5b9a\u70ba\u5957\u7528\u7684 func,\u9019\u6eff\u55ae\u7d14\uff01\n\u5982\u679c\u6709\u5e36\u62ec\u865f(ex.@partial_decorator1(api_key=some_key)),\u6703\u9700\u8981\u6307\u5b9a\u5e36\u5165\u7684 function,\u5c31\u9700\u8981\u900f\u904e partial \u5beb\u6cd5\u53bb\u6307\u5b9a\u8981\u5e36\u5165\u54ea\u500b function \u4f5c\u70ba\u88dd\u98fe\u5668,\u4e0d\u904e\u90fd\u7528\u88dd\u98fe\u5668\u4e86,\u7576\u7136\u6703\u5e36\u5165\u8981\u57f7\u884c\u7684\u5305\u88dd function."),(0,a.kt)("p",null,"\u53e6\u5916,\u88dd\u98fe\u5668\u5beb\u6cd5\u5f88\u591a,\u9019\u908a\u5beb\u7684\u53ea\u662f\u5176\u4e2d\u4e00\u7a2e\uff01"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u88dd\u98fe\u5668\u4e3b\u8981\u61c9\u7528\u60c5\u5883"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8a18\u9304\u65e5\u8a8c\uff1a\u88dd\u98fe\u5668\u53ef\u4ee5\u6355\u7372\u51fd\u5f0f\u7684\u8f38\u5165\u548c\u8f38\u51fa\uff0c\u4e26\u5c07\u5176\u8a18\u9304\u5230\u65e5\u8a8c\u4e2d\uff0c\u4ee5\u4fbf\u5f8c\u7e8c\u8abf\u8a66\u548c\u8ffd\u8e64\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8eab\u4efd\u9a57\u8b49\u548c\u6388\u6b0a\uff1a\u88dd\u98fe\u5668\u53ef\u4ee5\u5728\u57f7\u884c\u51fd\u5f0f\u4e4b\u524d\u6aa2\u67e5\u7528\u6236\u7684\u8eab\u4efd\u9a57\u8b49\u548c\u6b0a\u9650\uff0c\u4ee5\u78ba\u4fdd\u53ea\u6709\u6388\u6b0a\u7684\u7528\u6236\u53ef\u4ee5\u8a2a\u554f\u8a72\u51fd\u5f0f\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5feb\u53d6\uff1a\u88dd\u98fe\u5668\u53ef\u4ee5\u5c07\u51fd\u5f0f\u7684\u8f38\u51fa\u5feb\u53d6\u8d77\u4f86\uff0c\u4ee5\u6e1b\u5c11\u91cd\u8907\u8a08\u7b97\uff0c\u63d0\u9ad8\u6548\u80fd\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7570\u6b65\u8655\u7406\uff1a\u88dd\u98fe\u5668\u53ef\u4ee5\u5c07\u51fd\u5f0f\u7684\u57f7\u884c\u8f49\u63db\u70ba\u975e\u540c\u6b65\u8655\u7406\uff0c\u4ee5\u63d0\u9ad8\u7cfb\u7d71\u7684\u53cd\u61c9\u6027\u548c\u4f75\u767c\u80fd\u529b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8a08\u6642\u548c\u6027\u80fd\u76e3\u63a7\uff1a\u88dd\u98fe\u5668\u53ef\u4ee5\u8a08\u6642\u51fd\u5f0f\u7684\u57f7\u884c\u6642\u9593\uff0c\u4e26\u6536\u96c6\u6027\u80fd\u6307\u6a19\uff0c\u7528\u65bc\u5206\u6790\u548c\u512a\u5316\u4ee3\u78bc\u7684\u6548\u80fd\u3002")))))}f.isMDXComponent=!0}}]);