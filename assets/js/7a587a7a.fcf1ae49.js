"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[8090],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=l.createContext({}),u=function(e){var t=l.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return r?l.createElement(h,i(i({ref:t},p),{},{components:r})):l.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=r(7462),n=(r(7294),r(3905));const a={title:"ide\u8ddf\u672c\u6a5fterminal\u4f7f\u7528\u7684curl\u7248\u672c\u4e0d\u540c\u554f\u984c",description:"\u524d\u9663\u5b50\u56e0\u70ba\u9700\u8981\u6aa2\u67e5\u57df\u540d\u8a2d\u5b9a\uff0c\u6e2c\u8a66\u904e\u7a0b\u4e2d\u767c\u73fe\u5728 pycharm \u904b\u884c curl \u6307\u4ee4\uff0c\u904b\u884c\u7d50\u679c\u8ddf iterm2 \u7684\u904b\u884c\u7d50\u679c\u4e0d\u540c\uff0c\u4ee5\u4e0b\u662f demo \u6307\u4ee4\uff0c\u6700\u5f8c\u4f7f\u7528which curl\u767c\u73fe\u5169\u908acurl\u6709\u5dee\u5225\uff0c\u9032\u4e00\u6b65\u6aa2\u67e5\u767c\u73fe\u5169\u8005\u6a94\u6848 size \u4e5f\u6709\u5dee\uff0c\u4f7f\u7528\u7684\u76f8\u95dc\u5957\u4ef6\u4e5f\u6709\u5dee\u3002\u5fc3\u5f97\uff1a\u57fa\u672c\u4e0a\u9023\u81ea\u5df1\u96fb\u8166\u74b0\u5883\u90fd\u53ef\u80fd\u7528\u9ad2\u4e86\uff0c\u4e4b\u5f8c\u6392\u67e5\u985e\u4f3c\u7684bug\u9806\u5e8f\u6703\u5148\u6aa2\u67e5\u5f7c\u6b64\u4f7f\u7528\u6307\u4ee4\u7684\u7248\u672c\uff0c\u78ba\u8a8d\u6c92\u5dee\u592a\u591a\uff0c\u5728\u958b\u59cb\u5f80\u5176\u4ed6\u65b9\u5411\u6392\u67e5\u3002",authors:"suyuying",tags:["curl"]},i=void 0,o={permalink:"/blog/2023/03/16/little-curl-problem",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-16-little-curl-problem.md",source:"@site/blog/2023-03-16-little-curl-problem.md",title:"ide\u8ddf\u672c\u6a5fterminal\u4f7f\u7528\u7684curl\u7248\u672c\u4e0d\u540c\u554f\u984c",description:"\u524d\u9663\u5b50\u56e0\u70ba\u9700\u8981\u6aa2\u67e5\u57df\u540d\u8a2d\u5b9a\uff0c\u6e2c\u8a66\u904e\u7a0b\u4e2d\u767c\u73fe\u5728 pycharm \u904b\u884c curl \u6307\u4ee4\uff0c\u904b\u884c\u7d50\u679c\u8ddf iterm2 \u7684\u904b\u884c\u7d50\u679c\u4e0d\u540c\uff0c\u4ee5\u4e0b\u662f demo \u6307\u4ee4\uff0c\u6700\u5f8c\u4f7f\u7528which curl\u767c\u73fe\u5169\u908acurl\u6709\u5dee\u5225\uff0c\u9032\u4e00\u6b65\u6aa2\u67e5\u767c\u73fe\u5169\u8005\u6a94\u6848 size \u4e5f\u6709\u5dee\uff0c\u4f7f\u7528\u7684\u76f8\u95dc\u5957\u4ef6\u4e5f\u6709\u5dee\u3002\u5fc3\u5f97\uff1a\u57fa\u672c\u4e0a\u9023\u81ea\u5df1\u96fb\u8166\u74b0\u5883\u90fd\u53ef\u80fd\u7528\u9ad2\u4e86\uff0c\u4e4b\u5f8c\u6392\u67e5\u985e\u4f3c\u7684bug\u9806\u5e8f\u6703\u5148\u6aa2\u67e5\u5f7c\u6b64\u4f7f\u7528\u6307\u4ee4\u7684\u7248\u672c\uff0c\u78ba\u8a8d\u6c92\u5dee\u592a\u591a\uff0c\u5728\u958b\u59cb\u5f80\u5176\u4ed6\u65b9\u5411\u6392\u67e5\u3002",date:"2023-03-16T00:00:00.000Z",formattedDate:"March 16, 2023",tags:[{label:"curl",permalink:"/blog/tags/curl"}],readingTime:2.635,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"ide\u8ddf\u672c\u6a5fterminal\u4f7f\u7528\u7684curl\u7248\u672c\u4e0d\u540c\u554f\u984c",description:"\u524d\u9663\u5b50\u56e0\u70ba\u9700\u8981\u6aa2\u67e5\u57df\u540d\u8a2d\u5b9a\uff0c\u6e2c\u8a66\u904e\u7a0b\u4e2d\u767c\u73fe\u5728 pycharm \u904b\u884c curl \u6307\u4ee4\uff0c\u904b\u884c\u7d50\u679c\u8ddf iterm2 \u7684\u904b\u884c\u7d50\u679c\u4e0d\u540c\uff0c\u4ee5\u4e0b\u662f demo \u6307\u4ee4\uff0c\u6700\u5f8c\u4f7f\u7528which curl\u767c\u73fe\u5169\u908acurl\u6709\u5dee\u5225\uff0c\u9032\u4e00\u6b65\u6aa2\u67e5\u767c\u73fe\u5169\u8005\u6a94\u6848 size \u4e5f\u6709\u5dee\uff0c\u4f7f\u7528\u7684\u76f8\u95dc\u5957\u4ef6\u4e5f\u6709\u5dee\u3002\u5fc3\u5f97\uff1a\u57fa\u672c\u4e0a\u9023\u81ea\u5df1\u96fb\u8166\u74b0\u5883\u90fd\u53ef\u80fd\u7528\u9ad2\u4e86\uff0c\u4e4b\u5f8c\u6392\u67e5\u985e\u4f3c\u7684bug\u9806\u5e8f\u6703\u5148\u6aa2\u67e5\u5f7c\u6b64\u4f7f\u7528\u6307\u4ee4\u7684\u7248\u672c\uff0c\u78ba\u8a8d\u6c92\u5dee\u592a\u591a\uff0c\u5728\u958b\u59cb\u5f80\u5176\u4ed6\u65b9\u5411\u6392\u67e5\u3002",authors:"suyuying",tags:["curl"]},nextItem:{title:"github action basic demo",permalink:"/blog/2023/03/11/github-action/1.github-action-demo"}},c={authorsImageUrls:[void 0]},u=[{value:"\u540c pc \u7684 curl \u7d50\u679c\u4e0d\u540c",id:"\u540c-pc-\u7684-curl-\u7d50\u679c\u4e0d\u540c",level:2},{value:"curl \u6307\u4ee4\u57fa\u672c\u4ecb\u7d39",id:"curl-\u6307\u4ee4\u57fa\u672c\u4ecb\u7d39",level:2},{value:"step1. \u554f\u984c\u6392\u67e5 curl -v \u770b\u904e\u7a0b",id:"step1-\u554f\u984c\u6392\u67e5-curl--v-\u770b\u904e\u7a0b",level:3},{value:"step2. \u6aa2\u67e5\u4f7f\u7528\u7684 curl \u662f\u5426\u6709\u5dee",id:"step2-\u6aa2\u67e5\u4f7f\u7528\u7684-curl-\u662f\u5426\u6709\u5dee",level:3},{value:"\u5fc3\u5f97",id:"\u5fc3\u5f97",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u540c-pc-\u7684-curl-\u7d50\u679c\u4e0d\u540c"},"\u540c pc \u7684 curl \u7d50\u679c\u4e0d\u540c"),(0,n.kt)("p",null,"\u524d\u9663\u5b50\u56e0\u70ba\u9700\u8981\u6aa2\u67e5\u57df\u540d\u8a2d\u5b9a\uff0c\u6e2c\u8a66\u904e\u7a0b\u4e2d\u767c\u73fe\u5728 pycharm \u904b\u884c curl \u6307\u4ee4\uff0c\u904b\u884c\u7d50\u679c\u8ddf iterm2 \u7684\u904b\u884c\u7d50\u679c\u4e0d\u540c\uff0c\u4ee5\u4e0b\u662f demo \u6307\u4ee4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -XPOST \'https://www.boce.com/apiHtml/login\' \\\n  -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36" \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "email_or_phone":"thisIsSecret",\n    "password":"thisIsSecret"\n  }\'\n')),(0,n.kt)("h2",{id:"curl-\u6307\u4ee4\u57fa\u672c\u4ecb\u7d39"},"curl \u6307\u4ee4\u57fa\u672c\u4ecb\u7d39"),(0,n.kt)("p",null,"Curl \u662f\u4e00\u7a2e\u5728\u547d\u4ee4\u5217\u4ecb\u9762\u4e0b\u4f7f\u7528\u7684\u958b\u653e\u539f\u59cb\u78bc\u6a94\u6848\u50b3\u8f38\u5de5\u5177\uff0c\u5e38\u7528\u65bc HTTP\u3001HTTPS\u3001FTP \u7b49\u5354\u5b9a\u7684\u50b3\u8f38\n\u56e0\u70ba",(0,n.kt)("inlineCode",{parentName:"p"},"curl"),"\u9078\u9805\u592a\u591a\uff0c\u53ef\u4ee5\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"curl --help all"),"\u770b\u6240\u6709\u9078\u9805\uff0c\n\u5e38\u7528\u9078\u9805\u6709\u4ee5\u4e0b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"-H \u5e36 header"),(0,n.kt)("li",{parentName:"ol"},"-A \u5e36 useragent"),(0,n.kt)("li",{parentName:"ol"},"-i \u770b\u56de\u61c9 header(\u53ef\u4ee5\u62ff\u4f86\u67e5\u56de\u61c9 token)"),(0,n.kt)("li",{parentName:"ol"},"-d \u4f7f\u7528 post \u65b9\u6cd5\u8981\u5e36\u5165 data"),(0,n.kt)("li",{parentName:"ol"},"-X \u4f7f\u7528\u7684\u65b9\u6cd5 ex. POST PUT DELETE GET"),(0,n.kt)("li",{parentName:"ol"},"-c cookie \u76f8\u95dc\u64cd\u4f5c\n\u4ee5\u4e0b\u70ba\u4f8b\uff0c\u767b\u5165\u7db2\u7ad9\u4e26\u628a\u56de\u61c9 cookie \u5b58\u5728 cookie.txt")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -c cookie.txt -XPOST \'https://www.boce.com/apiHtml/login\' \\\n  -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36" \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "email_or_phone":"thisIsSecret",\n    "password":"thisIsSecret"\n  }\'\n')),(0,n.kt)("p",null,"\u5f8c\u7e8c\u53ef\u4ee5\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"curl -b cookie.txt"),"\u5728\u8acb\u6c42\u6642\u628a cookie \u5e36\u5165\u5230 request \u4e2d"),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"-v \u8a73\u7d30\u6a21\u5f0f"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"-o file\u540d\u7a31 \u7db2\u5740")," \u4e0b\u8f09\u5716\u7247\u4f7f\u7528\uff0c\u6a94\u540d\u81ea\u5df1\u547d\u540d Write to file instead of stdout"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"-O \u7db2\u5740")," \u4e0b\u8f09\u8cc7\u6599\u4f7f\u7528\uff0c\u6a94\u540d\u540c\u9060\u7aef\u7db2\u5740\u6a94\u540d Write output to a file named as the remote file"),(0,n.kt)("li",{parentName:"ol"},"-L \u8ddf\u96a8 301 302 \u8df3\u8f49"),(0,n.kt)("li",{parentName:"ol"},"Basic Authentication\uff0c\u53ef\u4ee5\u651c\u5e36 --user username:password \u4f86\u901a\u904e\u9a57\u8b49\u3002")),(0,n.kt)("h3",{id:"step1-\u554f\u984c\u6392\u67e5-curl--v-\u770b\u904e\u7a0b"},"step1. \u554f\u984c\u6392\u67e5 curl -v \u770b\u904e\u7a0b"),(0,n.kt)("p",null,"\u6bd4\u8f03\u5f8c\u767c\u73fe\uff0cide \u8ddf terminal \u5e36\u7684 header \u8ddf useragent \u9019\u4e9b\u90fd\u6709\u5e36\uff0c\u554f\u984c\u4e0d\u5728\u9019\u908a\u3002"),(0,n.kt)("h3",{id:"step2-\u6aa2\u67e5\u4f7f\u7528\u7684-curl-\u662f\u5426\u6709\u5dee"},"step2. \u6aa2\u67e5\u4f7f\u7528\u7684 curl \u662f\u5426\u6709\u5dee"),(0,n.kt)("p",null,"\u6aa2\u67e5",(0,n.kt)("inlineCode",{parentName:"p"},"which crul"),"\u8f38\u51fa"),(0,n.kt)("p",null,"ide: /usr/bin/curl (curl 7.79.1 (x86_64-apple-darwin21.0) libcurl/7.79.1 (SecureTransport) LibreSSL/3.3.6 zlib/1.2.11 nghttp2/1.45.1\nRelease-Date: 2021-09-22)"),(0,n.kt)("p",null,"terminal: /Users/ford/opt/anaconda3/bin/curl (curl 7.82.0 (x86_64-apple-darwin13.4.0) libcurl/7.82.0 OpenSSL/1.1.1n zlib/1.2.12 libssh2/1.10.0 nghttp2/1.46.0\nRelease-Date: 2022-03-05)"),(0,n.kt)("p",null,"\u767c\u73fe\u6709\u5dee\u5225\uff0c\u9032\u4e00\u6b65\u6aa2\u67e5\u767c\u73fe\u5169\u8005\u6a94\u6848 size \u4e5f\u6709\u5dee\uff0c\u4f7f\u7528\u7684\u76f8\u95dc\u5957\u4ef6\u4e5f\u6709\u5dee\u3002"),(0,n.kt)("p",null,"\u89e3\u6cd5\uff1a \u76f4\u63a5\u6307\u5b9a curl \u4f4d\u7f6e,/usr/bin/curl \u3002"),(0,n.kt)("h2",{id:"\u5fc3\u5f97"},"\u5fc3\u5f97"),(0,n.kt)("p",null,"\u57fa\u672c\u4e0a\u9023\u81ea\u5df1\u96fb\u8166\u74b0\u5883\u90fd\u53ef\u80fd\u7528\u9ad2\u4e86\uff0c\u4e4b\u5f8c\u6392\u67e5\u985e\u4f3c\u7684 bug \u9806\u5e8f\u6703\u5148\u6aa2\u67e5\u5f7c\u6b64\u4f7f\u7528\u6307\u4ee4\u7684\u7248\u672c\uff0c\u78ba\u8a8d\u6c92\u5dee\u592a\u591a\uff0c\u5728\u958b\u59cb\u5f80\u5176\u4ed6\u65b9\u5411\u6392\u67e5\u3002"))}m.isMDXComponent=!0}}]);