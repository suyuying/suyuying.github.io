"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[7922],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[m]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47664:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={title:"multi-thead introduction in python3",description:123,image:"https://github.com/suyuying.png",authors:"suyuying",tags:["Python"]},l=void 0,a={permalink:"/blog/2023/05/31/Python/multi-thead",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Python/2023-05-31-multi-thead.md",source:"@site/blog/Python/2023-05-31-multi-thead.md",title:"multi-thead introduction in python3",description:"123",date:"2023-05-31T00:00:00.000Z",formattedDate:"May 31, 2023",tags:[{label:"Python",permalink:"/blog/tags/python"}],readingTime:7.215,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"multi-thead introduction in python3",description:"123",image:"https://github.com/suyuying.png",authors:"suyuying",tags:["Python"]},nextItem:{title:"create k8s cluster",permalink:"/blog/2023/05/29/K8S/create-k8s-cluster"}},u={authorsImageUrls:[void 0]},s=[{value:"\u61c9\u7528\u60c5\u5883\u4ecb\u7d39",id:"\u61c9\u7528\u60c5\u5883\u4ecb\u7d39",level:2},{value:"thread pool vs process pool",id:"thread-pool-vs-process-pool",level:2},{value:"thread pool",id:"thread-pool",level:3},{value:"process pool",id:"process-pool",level:3},{value:"\u6559\u5b78\u5167\u5bb9",id:"\u6559\u5b78\u5167\u5bb9",level:2}],p={toc:s},m="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u61c9\u7528\u60c5\u5883\u4ecb\u7d39"},"\u61c9\u7528\u60c5\u5883\u4ecb\u7d39"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u500b\u5957\u4ef6,\u4ed6\u662f I/O \u5bc6\u96c6\u7684\u5957\u4ef6,\u4f8b\u5982 python \u7684 request,\u6703\u5c0d\u5c0d\u65b9 server \u8acb\u6c42,\u4e14\u9019\u500b\u6642\u5019\u6703 block \u4f4f thread,\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b,\u4f60\u7121\u6cd5\u4f7f\u7528\u7570\u6b65(\u56e0\u70ba\u540c\u4e00 thread \u6703\u88ab block \u4f4f),\u9019\u6642\u5019\u5c31\u53ef\u4ee5\u8003\u616e\u7528 multithread \u505a\u52a0\u901f,\u4e5f\u5c31\u662f\u7528\u4e26\u884c\u57f7\u884c\u65b9\u5f0f\u63d0\u901f,\u4ee5\u4e0b\u5c31\u662f\u6211\u81ea\u5df1\u5728\u61c9\u7528\u7684\u5176\u4e2d\u4e00\u6bb5 code,\u9019\u6a23\u7528\u4e5f\u8981\u6ce8\u610f\u901f\u7387\u9650\u5236\u5c31\u662f\uff01"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:\n        futures = [executor.submit(get_file_do_scan, file_tg=file, api_keys=copy.deepcopy(my_api_keys)) for file in\n                   just_compress_files]\n    for future in concurrent.futures.as_completed(futures):\n        future_result = future.result()\n        if future_result == "dangerous" or future_result is None:\n            continue\n        print(future_result)\n        print("\u4ee5\u4e0a\u6a94\u6848\u662f\u5b89\u5168\u7684")\n\n')),(0,o.kt)("h2",{id:"thread-pool-vs-process-pool"},"thread pool vs process pool"),(0,o.kt)("p",null,"\u9019\u908a\u90fd\u662f\u4ee5\u5167\u5efa\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"concurrent.futures"),"\u5957\u4ef6\u70ba\u4f8b\uff01\u4e3b\u8981\u7528\u5728\u4e26\u884c\u57f7\u884c\u7a0b\u5f0f."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"thread \u662f os \u7cfb\u7d71\u88e1\u9032\u884c\u904b\u7b97\u7684\u6700\u5c0f\u55ae\u4f4d,\u4e00\u500b process \u53ef\u4ee5\u6709\u591a\u500b thread(\u770b\u4f60\u8a2d\u8a08,\u4e5f\u53ef\u4ee5\u53ea\u6709\u55ae\u500b),thread \u9593\u6703\u5171\u4eab\u8a18\u61b6\u9ad4\u7a7a\u9593."),(0,o.kt)("li",{parentName:"ul"},"process \u662f os \u7cfb\u7d71\u505a\u8cc7\u6e90\u5206\u914d\u8ddf\u8abf\u5ea6\u7684\u57fa\u672c\u55ae\u4f4d,\u6bcf\u500b process \u6703\u6709\u7368\u7acb\u8a18\u61b6\u9ad4\u7a7a\u9593.")),(0,o.kt)("p",null,"\u5728 python \u4e16\u754c\u88e1,thread pool \u8ddf process pool \u662f\u5169\u6a23\u4e0d\u540c\u6771\u897f,\u4ee5\u4e0b\u8b1b\u7d50\u8ad6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"thread pool \u9069\u7528\u65bc i/o \u5bc6\u96c6\u5de5\u4f5c,\u4f8b\u5982 \u540c\u6642\u5c0d api server \u505a\u8acb\u6c42\uff01"),(0,o.kt)("li",{parentName:"ul"},"process poo \u9069\u7528\u65bc\u904b\u7b97\u5bc6\u96c6\u7684\u5de5\u4f5c\uff01")),(0,o.kt)("h3",{id:"thread-pool"},"thread pool"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"thread pool")," \u7684\u90e8\u5206,\u53d7\u9650\u65bc\u5b98\u65b9 python \u7684 CPython \u8a18\u61b6\u9ad4\u7ba1\u7406\u554f\u984c,\u9700\u8981\u900f\u904e GIL(Global Interpreter Lock)\u53bb\u505a\u5230\u55ae process \u4e2d\u7684\u591a thread \u7ba1\u7406,\u7576\u4e00\u500b process \u904b\u884c\u591a thread \u6642,\u5728 python \u4e16\u754c\u88e1\u5176\u5be6\u4e00\u6b21\u53ea\u6703\u904b\u884c\u4e00\u500b thread,\u9019\u6642\u5019\u6703\u5c0d process \u505a lock,\u7576\u8a72 thread \u9047\u5230 I/O \u5bc6\u96c6\u5de5\u4f5c(\u4f8b\u5982:\u67e5\u8a62\u7db2\u7ad9)\u6642,\u5c31\u6703\u91cb\u653e GIL,\u8b93\u53e6\u4e00\u500b thread \u53ef\u4ee5\u57f7\u884c."),(0,o.kt)("p",null,"\u5728\u4f7f\u7528 thread pool \u6642\u8981\u6ce8\u610f,Python \u4e2d\u7684 thread \u6703\u5171\u4eab\u540c\u4e00\u9032\u7a0b\u7684\u8a18\u61b6\u9ad4\u7a7a\u9593\uff0c\u56e0\u6b64\u5b83\u5011\u80fd\u5920\u8a2a\u554f\u4e26\u4fee\u6539\u5168\u5c40\u8b8a\u6578\u3002\u5982\u679c\u591a\u500b thread \u540c\u6642\u4fee\u6539\u540c\u4e00\u500b\u5168\u5c40\u8b8a\u6578\uff0c\u53ef\u80fd\u6703\u5c0e\u81f4\u4e0d\u53ef\u9810\u671f\u7684\u7d50\u679c\u3002\u6240\u4ee5\u5168\u5c40\u8b8a\u6578\u7684\u4fee\u6539\u5c31\u8981\u6ce8\u610f,\u907f\u514d\u53bb\u5f71\u97ff\u5176\u4ed6 thread.\u4f8b\u5982\u4ee5\u4e0b\u7a0b\u5f0f\u78bc:",(0,o.kt)("inlineCode",{parentName:"p"},"my_api_keys"),"\u662f\u4e00\u500b list,\u5982\u679c\u4f60\u57f7\u884c\u904e\u7a0b\u4e2d\u6703\u522a\u9664\u8a72 list \u5167\u7684\u5143\u7d20,\u70ba\u4e86\u8981\u907f\u514d\u5f71\u97ff\u5176\u4ed6 thread \u5c31\u5efa\u8b70\u6539\u6210\u7528 deep.copy \u65b9\u5f0f,\u6bcf\u500b thread \u653e\u7368\u7acb\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"my_api_keys"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:\n        futures = [executor.submit(get_file_do_scan, file_tg=file, api_keys=copy.deepcopy(my_api_keys)) for file in\n                   just_compress_files]\n")),(0,o.kt)("h3",{id:"process-pool"},"process pool"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"process pool"),"\u90e8\u5206,\u4f7f\u7528\u5b83\u5c31\u6703\u662f\u61c9\u7528\u591a cpu \u7684\u72c0\u6cc1,\u5b83\u6703\u900f\u904e process pool \u5229\u7528\u591a\u6838 CPU \u9032\u884c\u771f\u6b63\u7684\u4e26\u884c\u8a08\u7b97(thread pool \u6709\u9ede\u5047\u4e26\u884c\u7684\u611f\u89ba,\u56e0\u70ba\u5b83\u5be6\u969b\u4e0a\u6703\u7b49\u53e6\u4e00\u500b thread),\u4f46 process pool \u9593\u901a\u4fe1\u6210\u672c\u9ad8."),(0,o.kt)("h2",{id:"\u6559\u5b78\u5167\u5bb9"},"\u6559\u5b78\u5167\u5bb9"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u90fd\u662f\u8b1b",(0,o.kt)("inlineCode",{parentName:"p"},"thread pool"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6211\u7576\u521d\u662f\u770b\u9019\u7bc7\u5b78\u7fd2\u7684"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://steam.oxxostudio.tw/category/python/library/threading.html#:~:text=%E4%BD%BF%E7%94%A8threading%20%E5%BB%BA%E7%AB%8B%E5%9F%B7%E8%A1%8C%E7%B7%92,%E7%AD%89%E5%88%B0%E8%A7%A3%E9%8E%96%E6%89%8D%E8%83%BD%E5%A4%A0%E5%9F%B7%E8%A1%8C%E3%80%82"},"steam \u6559\u5b78\u7db2")))),(0,o.kt)("p",null,"\u4e3b\u8981\u6703\u7528\u7684\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"submit()"),"\u8ddf",(0,o.kt)("inlineCode",{parentName:"p"},"map()"),"\u9019\u5169\u7a2e\u65b9\u6cd5,\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"submit()"),"\u6703\u914d\u5408",(0,o.kt)("inlineCode",{parentName:"p"},"as_completed"),"\u53bb\u52d5\u614b\u6536\u96c6\u7d50\u679c."),(0,o.kt)("p",null,"\u4e3b\u8981\u8b1b\u4e00\u4e0b,",(0,o.kt)("inlineCode",{parentName:"p"},"submit()"),"\u7684\u60c5\u6cc1,\u7576\u57f7\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"[executor.submit(fetch_yahoo_homepage, url) for url in url_will_request]"),"\u6642,\u6703\u7522\u751f future \u7269\u4ef6\u7d44\u6210\u7684\u5217\u8868,\u540c\u6642\u5373\u523b\u958b\u59cb\u4e26\u884c\u57f7\u884c\u7a0b\u5f0f,\u63a5\u8457\u9019\u500b list \u57f7\u884c\u5b8c\u4e4b\u5f8c.\u53ef\u4ee5\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"as_completed"),"\u53bb\u53d6\u5f97\u7a0b\u5f0f\u57f7\u884c\u7684\u7d50\u679c,\u50cf\u4ee5\u4e0b\u9019\u6a23"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"with ThreadPoolExecutor() as executor:\n    # \u4f7f\u7528 list comprehension \u5275\u5efa\u4e00\u500b Future \u5c0d\u8c61\u7684\u5217\u8868\n    # \u6bcf\u500b Future \u5c0d\u8c61\u4ee3\u8868\u4e00\u500b\u5373\u5c07\u5b8c\u6210\u7684\u64cd\u4f5c\uff08\u5728\u9019\u88e1\uff0c\u64cd\u4f5c\u662f fetch_yahoo_homepage \u51fd\u6578\u7684\u8abf\u7528\uff09\n    # executor.submit \u51fd\u6578\u7684\u53c3\u6578\u662f\u8981\u8abf\u7528\u7684\u51fd\u6578\u548c\u8a72\u51fd\u6578\u7684\u53c3\u6578\n    # \u5f53\u4f60\u4f7f\u7528executor.submit()\u63d0\u4ea4\u4efb\u52a1\u7ed9\u7ebf\u7a0b\u6c60\u65f6\uff0c\u4efb\u52a1\u4f1a\u7acb\u5373\u5f00\u59cb\u6267\u884c\u3002executor.submit()\u4f1a\u7acb\u5373\u8fd4\u56de\u4e00\u4e2aconcurrent.futures.Future\u5bf9\u8c61\n    futures = [executor.submit(fetch_yahoo_homepage, url) for url in url_will_request]\nfor future in as_completed(futures):\n    # \u4f7f\u7528 Future \u5c0d\u8c61\u7684 result \u65b9\u6cd5\u4f86\u7372\u53d6\u64cd\u4f5c\u7684\u7d50\u679c\uff08\u5728\u9019\u88e1\uff0c\u7d50\u679c\u662f HTML \u5b57\u4e32\uff09\n    # \u901a\u8fc7\u8c03\u7528future.result()\u83b7\u53d6\u4efb\u52a1\u7684\u6267\u884c\u7ed3\u679c\n    html = future.result()\n")),(0,o.kt)("p",null,"\u800c",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\u5c31\u6709\u9ede\u50cf\u662f\u628a\u4ee5\u4e0a\u5169\u4ef6\u4e8b",(0,o.kt)("inlineCode",{parentName:"p"},"submit"),"\u8ddf",(0,o.kt)("inlineCode",{parentName:"p"},"as_completed"),"\u76f4\u63a5\u7d50\u5408,\u4ed6\u8fd4\u56de\u7684\u662f\u8fed\u4ee3\u5668,\u53ef\u4ee5\u8fed\u4ee3\u53d6\u5f97\u57f7\u884c\u5b8c\u7562\u7d50\u679c,\u50cf\u9019\u6a23"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"with concurrent.futures.ThreadPoolExecutor(max_workers=4) as e:\n# Executors \u7684\u76f8\u95dc\u65b9\u6cd5\uff0cmap(func, *iterables)\uff0c\u57f7\u884c\u53ef\u8fed\u4ee3\u7269\u4ef6 ex list tuple named tuple\n# \u5176\u5be6\u5c31\u662f\u628a\u53ef\u8fed\u4ee3\u7269\u4ef6\u7684\u5143\u7d20\u4e00\u500b\u500b\u62c6\u958b\u5582\u7d66Executor\uff0c\u63d0\u5347\u7a0b\u5f0f\u57f7\u884c\u901f\u5ea6\n    for hostinfo in e.map(lambda x: get_certificate(x[0], x[1]), HOSTS):\n        if hostinfo is None:\n            continue\n        print_basic_info(hostinfo)\n")),(0,o.kt)("p",null,"\u770b\u8d77\u4f86",(0,o.kt)("inlineCode",{parentName:"p"},"submit()"),"\u8ddf",(0,o.kt)("inlineCode",{parentName:"p"},"map()"),"\u5f88\u50cf,\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"submit"),"\u5141\u8a31\u4f60\u6aa2\u67e5\u4efb\u52d9\u72c0\u614b,\u800c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\u5247\u662f\u80fd\u5920\u7c21\u6f54\u7684\u4e26\u884c\u57f7\u884c\uff01"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u6211\u5b78\u7fd2\u7684\u904e\u7a0b,\u4e3b\u8981\u662f\u7528 request \u7db2\u7ad9\u4f86\u505a demo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import urllib.request\nimport ssl\nimport time\nfrom concurrent.futures import ThreadPoolExecutor, as_completed\nssl._create_default_https_context = ssl._create_unverified_context\nurl_will_request=["https://www.google.com",\'https://www.yahoo.com\'," https://www.youtube.com","https://www.nba.com"]\n\ndef fetch_yahoo_homepage(url):\n    try:\n        response = urllib.request.urlopen(url)\n        html = response.read().decode(\'utf-8\')\n        return html\n    except urllib.error.URLError as e:\n        print(f\'Error: {e}\')\n        return None\n\n#single_thead\nstart_time_single_thead=time.time()\nfor i in url_will_request:\n    html=fetch_yahoo_homepage(i)\n    print(html[:100])\nend_time_single_thead=time.time()\nall_time_single_thead=end_time_single_thead-start_time_single_thead\n\n# multi-thead  use map\nstart_time=time.time()\n# \u4f7f\u7528\u793a\u4f8b\nwith ThreadPoolExecutor() as executor:\n    for html in executor.map(fetch_yahoo_homepage,url_will_request ):\n        print(html[:100])\nend_time=time.time()\nall_time=end_time-start_time\n\n\n# multi-thead use submit\nstart_time_single_thead_submit=time.time()\n\n# \u4f7f\u7528 ThreadPoolExecutor \u4f5c\u70ba\u4e0a\u4e0b\u6587\u7ba1\u7406\u5668\n# \u7576\u96e2\u958b\u9019\u500b\u5340\u584a\u6642\uff0c\u5c07\u81ea\u52d5\u6e05\u7406\u4e26\u95dc\u9589\u6240\u6709\u7dda\u7a0b\nwith ThreadPoolExecutor() as executor:\n    # \u4f7f\u7528 list comprehension \u5275\u5efa\u4e00\u500b Future \u5c0d\u8c61\u7684\u5217\u8868\n    # \u6bcf\u500b Future \u5c0d\u8c61\u4ee3\u8868\u4e00\u500b\u5373\u5c07\u5b8c\u6210\u7684\u64cd\u4f5c\uff08\u5728\u9019\u88e1\uff0c\u64cd\u4f5c\u662f fetch_yahoo_homepage \u51fd\u6578\u7684\u8abf\u7528\uff09\n    # executor.submit \u51fd\u6578\u7684\u53c3\u6578\u662f\u8981\u8abf\u7528\u7684\u51fd\u6578\u548c\u8a72\u51fd\u6578\u7684\u53c3\u6578\n    # \u5f53\u4f60\u4f7f\u7528executor.submit()\u63d0\u4ea4\u4efb\u52a1\u7ed9\u7ebf\u7a0b\u6c60\u65f6\uff0c\u4efb\u52a1\u4f1a\u7acb\u5373\u5f00\u59cb\u6267\u884c\u3002executor.submit()\u4f1a\u7acb\u5373\u8fd4\u56de\u4e00\u4e2aconcurrent.futures.Future\u5bf9\u8c61\n    futures = [executor.submit(fetch_yahoo_homepage, url) for url in url_will_request]\n\n    # \u4f7f\u7528as_completed()\u51fd\u6570\u6765\u8fed\u4ee3\u8fd9\u4e9bFuture\u5bf9\u8c61\uff0c\u5e76\u5728future\u4e2d\u6709\u7a0b\u5f0f\u5b8c\u6210\u65f6\u83b7\u53d6\u7ed3\u679c\u5230future\u3002\n    for future in as_completed(futures):\n        # \u4f7f\u7528 Future \u5c0d\u8c61\u7684 result \u65b9\u6cd5\u4f86\u7372\u53d6\u64cd\u4f5c\u7684\u7d50\u679c\uff08\u5728\u9019\u88e1\uff0c\u7d50\u679c\u662f HTML \u5b57\u4e32\uff09\n        # \u901a\u8fc7\u8c03\u7528future.result()\u83b7\u53d6\u4efb\u52a1\u7684\u6267\u884c\u7ed3\u679c\n        html = future.result()\n\n        # \u5982\u679c HTML \u4e0d\u70ba\u7a7a\uff08\u4e5f\u5c31\u662f\u8aaa\uff0c\u64cd\u4f5c\u6210\u529f\u8fd4\u56de\u4e86 HTML\uff09\uff0c\u5247\u6253\u5370 HTML \u7684\u524d 100 \u500b\u5b57\u7b26\n        if html:\n            print(html[:100])\nend_time_single_thead_submit=time.time()\nall_time_single_thead_submit=end_time_single_thead_submit-start_time_single_thead_submit\n\n\n\nprint(f"all_time_single_thead is {all_time_single_thead}")\nprint(f"all map time is {all_time}")\nprint(f"all_time_single_thead_submit is {all_time_single_thead_submit}")\n')))}c.isMDXComponent=!0}}]);