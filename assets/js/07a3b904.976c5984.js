"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[8212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),p=o,g=s["".concat(u,".").concat(p)]||s[p]||m[p]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Do Internet gateways and modem need to be used together?",description:"\u7c21\u8a00\u4e4b\uff0c\u5982\u679c\u4f60\u5bb6\u4f7f\u7528\u64a5\u63a5\u6216\u6709\u7dda\u96fb\u8996\u63d0\u4f9b\u7684\u7db2\u8def\uff0c\u5c31\u6703\u9700\u8981\u6578\u64da\u6a5f\uff0c\u5982\u679c\u4f60\u5bb6\u7528\u5149\u7e96\u3001DSL\u3001\u96fb\u7e9c\u7b49\uff0c\u5c31\u53ef\u4ee5\u4e0d\u7528\u8f49\u63db\u8a0a\u865f\uff0c\u76f4\u63a5\u900f\u904e Igw \u5c07\u8a0a\u865f routing \u5230\u5916\u90e8\u7db2\u8def\u3002",authors:"suyuying",tags:["curl"]},i=void 0,l={permalink:"/blog/2023/03/30/Others/modemVSigw",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Others/2023-03-30-modemVSigw.md",source:"@site/blog/Others/2023-03-30-modemVSigw.md",title:"Do Internet gateways and modem need to be used together?",description:"\u7c21\u8a00\u4e4b\uff0c\u5982\u679c\u4f60\u5bb6\u4f7f\u7528\u64a5\u63a5\u6216\u6709\u7dda\u96fb\u8996\u63d0\u4f9b\u7684\u7db2\u8def\uff0c\u5c31\u6703\u9700\u8981\u6578\u64da\u6a5f\uff0c\u5982\u679c\u4f60\u5bb6\u7528\u5149\u7e96\u3001DSL\u3001\u96fb\u7e9c\u7b49\uff0c\u5c31\u53ef\u4ee5\u4e0d\u7528\u8f49\u63db\u8a0a\u865f\uff0c\u76f4\u63a5\u900f\u904e Igw \u5c07\u8a0a\u865f routing \u5230\u5916\u90e8\u7db2\u8def\u3002",date:"2023-03-30T00:00:00.000Z",formattedDate:"March 30, 2023",tags:[{label:"curl",permalink:"/blog/tags/curl"}],readingTime:2.12,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Do Internet gateways and modem need to be used together?",description:"\u7c21\u8a00\u4e4b\uff0c\u5982\u679c\u4f60\u5bb6\u4f7f\u7528\u64a5\u63a5\u6216\u6709\u7dda\u96fb\u8996\u63d0\u4f9b\u7684\u7db2\u8def\uff0c\u5c31\u6703\u9700\u8981\u6578\u64da\u6a5f\uff0c\u5982\u679c\u4f60\u5bb6\u7528\u5149\u7e96\u3001DSL\u3001\u96fb\u7e9c\u7b49\uff0c\u5c31\u53ef\u4ee5\u4e0d\u7528\u8f49\u63db\u8a0a\u865f\uff0c\u76f4\u63a5\u900f\u904e Igw \u5c07\u8a0a\u865f routing \u5230\u5916\u90e8\u7db2\u8def\u3002",authors:"suyuying",tags:["curl"]},prevItem:{title:"CI:gitlab basic intro about  CI/CD, build image and push to git-lab container",permalink:"/blog/2023/04/06/gitlab-action/gitlab-basic-intro-dind-build-image"},nextItem:{title:"aws book study note",permalink:"/blog/2023/3/29/Aws/aws-book-study-note"}},u={authorsImageUrls:[void 0]},c=[{value:"Device basic introduction",id:"device-basic-introduction",level:2},{value:"internet gateway",id:"internet-gateway",level:3},{value:"Modem",id:"modem",level:3},{value:"\u6578\u5b57\u8a0a\u865f",id:"\u6578\u5b57\u8a0a\u865f",level:4},{value:"\u6a21\u64ec\u8a0a\u865f",id:"\u6a21\u64ec\u8a0a\u865f",level:4},{value:"Do Internet gateway and modem need to be used together?",id:"do-internet-gateway-and-modem-need-to-be-used-together",level:2}],d={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"device-basic-introduction"},"Device basic introduction"),(0,o.kt)("h3",{id:"internet-gateway"},"internet gateway"),(0,o.kt)("p",null,"\u4e92\u806f\u7db2\u9598\u9053\u5668\uff08Internet Gateway\uff09\u662f\u4e00\u7a2e\u7db2\u8def\u8a2d\u5099\uff0c\u7528\u65bc\u9023\u63a5\u4f4d\u65bc\u672c\u5730\u7db2\u8def\uff08\u4f8b\u5982\u516c\u53f8\u6216\u5bb6\u5ead\u7db2\u8def\uff09\u5167\u7684\u8a2d\u5099\u8207\u4e92\u806f\u7db2\u9593\u7684\u901a\u8a0a\uff0c\u626e\u6f14\u7db2\u8def\u4e2d\u4ecb\uff0c\u5c07\u672c\u5730\u7db2\u8def\u5c01\u5305\u8f49\u5230\u5916\u7db2\uff0c\u518d\u628a\u5916\u7db2\u5c01\u5305\u8f49\u56de\u672c\u5730\u7db2\u8def\uff0c\u6240\u4ee5\u9700\u8981\u6709 router \u529f\u80fd"),(0,o.kt)("h3",{id:"modem"},"Modem"),(0,o.kt)("p",null,"\u6578\u64da\u6a5f(Moden)\uff0c\u4e3b\u8981\u529f\u7528\u662f\u5c07\u6578\u5b57\u8a0a\u865f\u8f49\u63db\u6210\u6a21\u64ec\u8a0a\u865f\u3002"),(0,o.kt)("h4",{id:"\u6578\u5b57\u8a0a\u865f"},"\u6578\u5b57\u8a0a\u865f"),(0,o.kt)("p",null,"\u6578\u5b57\u4fe1\u865f\u662f\u4e00\u7a2e\u96e2\u6563\u7684\u4fe1\u865f\uff0c\u5b83\u7531\u4e00\u7cfb\u5217\u96e2\u6563\u7684\u6578\u5b57\u6216\u4e8c\u9032\u5236\u78bc\u8868\u793a\u3002\u9019\u4e9b\u4e8c\u9032\u5236\u78bc\u53ea\u80fd\u53d6 0 \u6216 1 \u7684\u503c\u3002"),(0,o.kt)("h4",{id:"\u6a21\u64ec\u8a0a\u865f"},"\u6a21\u64ec\u8a0a\u865f"),(0,o.kt)("p",null,"\u6a21\u64ec\u4fe1\u865f\u662f\u4e00\u7a2e\u9023\u7e8c\u7684\u4fe1\u865f\uff0c\u5b83\u662f\u7531\u4e00\u500b\u9023\u7e8c\u7684\u6ce2\u5f62\u8868\u793a\u7684\u3002\u6a21\u64ec\u4fe1\u865f\u53ef\u4ee5\u53d6\u7121\u9650\u500b\u503c\uff0c\u56e0\u70ba\u5b83\u5011\u662f\u57fa\u65bc\u7269\u7406\u91cf\uff08\u5982\u96fb\u58d3\u3001\u96fb\u6d41\u3001\u8072\u97f3\u6ce2\u5f62\u7b49\uff09\u7684\u9023\u7e8c\u8b8a\u5316\u3002\u6a21\u64ec\u4fe1\u865f\u5e38\u7528\u65bc\u8072\u97f3\u548c\u8996\u983b\u7b49\u6a21\u64ec\u8a2d\u5099\u4e2d\uff0c\u5982\u6536\u97f3\u6a5f\u3001\u96fb\u8996\u548c\u624b\u6a5f\u7b49"),(0,o.kt)("h2",{id:"do-internet-gateway-and-modem-need-to-be-used-together"},"Do Internet gateway and modem need to be used together?"),(0,o.kt)("p",null,"\u4e0d\u4e00\u5b9a\uff0c\u9019\u4f9d\u64da\u60c5\u5f62\u800c\u5b9a\u3002\u4ee5\u4e0b\u60c5\u5f62\u6703\u9700\u8981\u4e00\u8d77\u7528\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u64a5\u865f\u7db2\u8def: \u9700\u8981\u5c07\u8a08\u7b97\u6a5f\u7684\u6578\u5b57\u8a0a\u865f\u8f49\u6210\u6a21\u64ec\u8a0a\u865f\uff0c\u4e26\u900f\u904e\u96fb\u8a71\u7dda\u50b3\u905e\u8a0a\u865f\u5230\u4e92\u806f\u7db2\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u96fb\u8996\u7db2\u8def: \u540c\u4e0a\uff0c\u4e00\u4e9b\u6709\u7dda\u96fb\u8996\u7db2\u8def\u63d0\u4f9b\u7684\u7db2\u8def\u670d\u52d9\u4e00\u6a23\u8981\u5148\u505a\u8a0a\u865f\u8f49\u63db\uff0c\u518d\u900f\u904e\u6709\u7dda\u96fb\u8996\u7db2\u8def\u50b3\u8f38\u3002")),(0,o.kt)("p",null,"\u7c21\u8a00\u4e4b\uff0c\u5982\u679c\u4f60\u5bb6\u4f7f\u7528\u64a5\u63a5\u6216\u6709\u7dda\u96fb\u8996\u63d0\u4f9b\u7684\u7db2\u8def\uff0c\u5c31\u6703\u9700\u8981\u6578\u64da\u6a5f"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5bb6\u7528\u5149\u7e96\u3001DSL\u3001\u96fb\u7e9c\u7b49\uff0c\u5c31\u53ef\u4ee5\u4e0d\u7528\u8f49\u63db\u8a0a\u865f\uff0c\u76f4\u63a5\u900f\u904e Igw \u5c07\u6578\u5b57\u8a0a\u865f routing \u5230\u5916\u90e8\u7db2\u8def\u3002"))}m.isMDXComponent=!0}}]);