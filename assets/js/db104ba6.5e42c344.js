"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[8485],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>C});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(a),k=r,C=s["".concat(p,".").concat(k)]||s[k]||c[k]||n;return a?l.createElement(C,o(o({ref:t},m),{},{components:a})):l.createElement(C,o({ref:t},m))}));function C(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<n;u++)o[u]=a[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},83004:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var l=a(87462),r=(a(67294),a(3905));const n={title:"The importance of IaC",description:"\u57df\u540d,\u6191\u8b49,\u7db2\u8def\u53ca\u4f3a\u670d\u5668\u74b0\u5883(\u9632\u706b\u7246\u3001subnet \u5207\u5206\u3001\u8def\u7531\u8868\u3001gateway\u3001CDN\u3001security group \u7b49\u7b49),\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72,\u76e3\u63a7\u7a0b\u5f0f,\u65e5\u8a8c\u7ba1\u7406\u9019\u4e9b\u5728IaC\u904e\u7a0b\u90fd\u6703\u7528\u5230,IaC \u7cbe\u795e\u5c31\u662f\u628a\u9019\u6574\u500b\u904e\u7a0b\u7684\u5efa\u7f6e,\u7528\u7a0b\u5f0f\u7684\u65b9\u5f0f\u5efa\u7acb,\u4e5f\u5c31\u662f\u767c\u751f\u4e86\u4ec0\u9ebc\u4e8b\u60c5,\u600e\u9ebc\u5efa\u7acb\u7684,\u90fd\u662f\u7528\u7a0b\u5f0f\u53bb\u63a7\u5236,\u5982\u679c\u67d0\u6bb5\u639b\u6389\u6216\u88ab\u770b\u4f60\u4e0d\u9806\u773c\u7684\u5de5\u7a0b\u5e2b\u780d\u6389,\u53ef\u4ee5\u8fc5\u901f\u5730\u7528\u7a0b\u5f0f\u57f7\u884c\u5099\u63f4\u65b9\u6848\u628a\u9019\u6bb5\u639b\u6389\u7684\u88dc\u4e0a. \u4ee5\u4e0b\u7684\u5c0f\u7bc0,\u6703\u53bb\u8a0e\u8ad6\u6bcf\u968e\u6bb5 IaC \u6709\u54ea\u4e9b\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["IaC"]},o=void 0,i={permalink:"/blog/2023/04/30/IaC/importance-of-IaC",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/IaC/2023-04-30-importance-of-IaC.md",source:"@site/blog/IaC/2023-04-30-importance-of-IaC.md",title:"The importance of IaC",description:"\u57df\u540d,\u6191\u8b49,\u7db2\u8def\u53ca\u4f3a\u670d\u5668\u74b0\u5883(\u9632\u706b\u7246\u3001subnet \u5207\u5206\u3001\u8def\u7531\u8868\u3001gateway\u3001CDN\u3001security group \u7b49\u7b49),\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72,\u76e3\u63a7\u7a0b\u5f0f,\u65e5\u8a8c\u7ba1\u7406\u9019\u4e9b\u5728IaC\u904e\u7a0b\u90fd\u6703\u7528\u5230,IaC \u7cbe\u795e\u5c31\u662f\u628a\u9019\u6574\u500b\u904e\u7a0b\u7684\u5efa\u7f6e,\u7528\u7a0b\u5f0f\u7684\u65b9\u5f0f\u5efa\u7acb,\u4e5f\u5c31\u662f\u767c\u751f\u4e86\u4ec0\u9ebc\u4e8b\u60c5,\u600e\u9ebc\u5efa\u7acb\u7684,\u90fd\u662f\u7528\u7a0b\u5f0f\u53bb\u63a7\u5236,\u5982\u679c\u67d0\u6bb5\u639b\u6389\u6216\u88ab\u770b\u4f60\u4e0d\u9806\u773c\u7684\u5de5\u7a0b\u5e2b\u780d\u6389,\u53ef\u4ee5\u8fc5\u901f\u5730\u7528\u7a0b\u5f0f\u57f7\u884c\u5099\u63f4\u65b9\u6848\u628a\u9019\u6bb5\u639b\u6389\u7684\u88dc\u4e0a. \u4ee5\u4e0b\u7684\u5c0f\u7bc0,\u6703\u53bb\u8a0e\u8ad6\u6bcf\u968e\u6bb5 IaC \u6709\u54ea\u4e9b\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528.",date:"2023-04-30T00:00:00.000Z",formattedDate:"April 30, 2023",tags:[{label:"IaC",permalink:"/blog/tags/ia-c"}],readingTime:10.98,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"The importance of IaC",description:"\u57df\u540d,\u6191\u8b49,\u7db2\u8def\u53ca\u4f3a\u670d\u5668\u74b0\u5883(\u9632\u706b\u7246\u3001subnet \u5207\u5206\u3001\u8def\u7531\u8868\u3001gateway\u3001CDN\u3001security group \u7b49\u7b49),\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72,\u76e3\u63a7\u7a0b\u5f0f,\u65e5\u8a8c\u7ba1\u7406\u9019\u4e9b\u5728IaC\u904e\u7a0b\u90fd\u6703\u7528\u5230,IaC \u7cbe\u795e\u5c31\u662f\u628a\u9019\u6574\u500b\u904e\u7a0b\u7684\u5efa\u7f6e,\u7528\u7a0b\u5f0f\u7684\u65b9\u5f0f\u5efa\u7acb,\u4e5f\u5c31\u662f\u767c\u751f\u4e86\u4ec0\u9ebc\u4e8b\u60c5,\u600e\u9ebc\u5efa\u7acb\u7684,\u90fd\u662f\u7528\u7a0b\u5f0f\u53bb\u63a7\u5236,\u5982\u679c\u67d0\u6bb5\u639b\u6389\u6216\u88ab\u770b\u4f60\u4e0d\u9806\u773c\u7684\u5de5\u7a0b\u5e2b\u780d\u6389,\u53ef\u4ee5\u8fc5\u901f\u5730\u7528\u7a0b\u5f0f\u57f7\u884c\u5099\u63f4\u65b9\u6848\u628a\u9019\u6bb5\u639b\u6389\u7684\u88dc\u4e0a. \u4ee5\u4e0b\u7684\u5c0f\u7bc0,\u6703\u53bb\u8a0e\u8ad6\u6bcf\u968e\u6bb5 IaC \u6709\u54ea\u4e9b\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["IaC"]},prevItem:{title:"YAML\u8a9e\u6cd5\u7d50\u69cb\u4ecb\u7d39",permalink:"/blog/2023/05/03/IaC/yml-syntax"},nextItem:{title:"Basic introduction of ansible",permalink:"/blog/2023/04/30/IaC/ansible/ansible-basic-introduction"}},p={authorsImageUrls:[void 0]},u=[{value:"IaC \u5e38\u898b\u7ba1\u7406\u9805\u76ee",id:"iac-\u5e38\u898b\u7ba1\u7406\u9805\u76ee",level:2},{value:"\u57df\u540d",id:"\u57df\u540d",level:3},{value:"\u6191\u8b49",id:"\u6191\u8b49",level:3},{value:"\u7db2\u8def\u53ca\u4f3a\u670d\u5668\u74b0\u5883",id:"\u7db2\u8def\u53ca\u4f3a\u670d\u5668\u74b0\u5883",level:3},{value:"\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72",id:"\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72",level:3},{value:"\u76e3\u63a7\u7a0b\u5f0f",id:"\u76e3\u63a7\u7a0b\u5f0f",level:3},{value:"\u65e5\u8a8c\u7ba1\u7406",id:"\u65e5\u8a8c\u7ba1\u7406",level:3},{value:"\u70ba\u4ec0\u9ebc\u8981\u5b78 IaC",id:"\u70ba\u4ec0\u9ebc\u8981\u5b78-iac",level:2}],m={toc:u},s="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u57fa\u672c\u4e0a\u6211\u5b78\u65b0\u7684\u5de5\u5177\u90fd\u6703\u5148\u505a\u5e7e\u4ef6\u4e8b\u60c5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e2d\u6587 google \u641c\u5c0b\u770b\u6709\u54ea\u4e9b\u8cc7\u6e90"),(0,r.kt)("li",{parentName:"ol"},"\u4e56\u4e56\u628a\u5b98\u7db2\u6559\u5b78\u6587\u7ae0\u770b\u904e\u4e00\u904d,\u4ee5\u53ca\u5b98\u7db2\u7684\u4e00\u4e9b\u91cd\u8981\u7684\u57fa\u790e\u6587\u7ae0\u770b\u5b8c")),(0,r.kt)("p",null,"\u57fa\u672c\u4e0a\u90fd\u6703\u5148\u770b\u5b98\u7db2\u6587\u4ef6,\u5982\u679c\u5b98\u7db2\u600e\u9ebc\u770b\u90fd\u4e0d\u61c2,\u6703\u7528\u4e2d\u6587\u7684\u6559\u5b78\u6587\u4ef6\u8f14\u52a9,\u9084\u597d,terraform \u7684\u6559\u5b78\u6587\u4ef6\u5f88\u4e0d\u932f\uff5e\n\u7576\u57fa\u672c\u8cc7\u6599\u5b78\u5b8c\u4e4b\u5f8c,\u4ee5\u6211\u7684\u8cc7\u8cea\u4e00\u5b9a\u9084\u662f\u5f88\u4e0d\u719f,\u6240\u4ee5\u63a5\u8457\u6703\u505a\u5e7e\u4ef6\u4e8b\u60c5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5beb\u7bc7\u6587\u4ef6\u628a\u57fa\u672c\u578b\u614b,\u8ddf\u5e38\u7528\u65b9\u5f0f\u6574\u7406\u4e00\u4e0b(\u50cf\u9019\u7bc7)"),(0,r.kt)("li",{parentName:"ol"},"\u53c3\u8003\u5225\u4eba\u7684\u5be6\u6230\u6559\u5b78"),(0,r.kt)("li",{parentName:"ol"},"\u5be6\u4f5c")),(0,r.kt)("p",null,"\u9019\u908a,\u6bcf\u4ef6\u90fd\u5f88\u91cd\u8981,\u628a\u4f60\u61c2\u7684\u4e8b\u60c5\u8a18\u9304\u4e0b\u4f86\u6709\u5f88\u591a\u597d\u8655"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f60\u672a\u4f86\u9047\u5230\u4e8b\u60c5\u53ef\u4ee5\u8907\u7fd2"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4ee5\u524d\u89c0\u5ff5\u932f\u8aa4\u53ef\u4ee5\u6539\u6b63"),(0,r.kt)("li",{parentName:"ul"},"\u8981\u627e\u4eba\u8a0e\u8ad6\u4e8b\u60c5\u6216\u6c42\u6559,\u4ed6\u53ef\u4ee5\u900f\u904e\u6587\u7ae0\u5148\u4e86\u89e3\u4f60\u7684\u7a0b\u5ea6")),(0,r.kt)("p",null,"\u53c3\u8003\u5225\u4eba\u5be6\u6230\u7d93\u9a57\u53ef\u4ee5\u6e1b\u5c11\u81ea\u5df1\u8e29\u5751\u6a5f\u7387\uff01"),(0,r.kt)("p",null,"\u6700\u5f8c,\u5b78\u6771\u897f\u5c31\u662f\u8981\u5be6\u4f5c,\u4e0d\u5be6\u4f5c\u6216\u5c0e\u5165,\u90a3\u6709\u5b78\u8ddf\u6c92\u5b78\u4e00\u6a23!"),(0,r.kt)("h2",{id:"iac-\u5e38\u898b\u7ba1\u7406\u9805\u76ee"},"IaC \u5e38\u898b\u7ba1\u7406\u9805\u76ee"),(0,r.kt)("p",null,"\u4e00\u500b\u7db2\u8def\u670d\u52d9\u7684\u63d0\u4f9b,\u4e2d\u9593\u6703\u7d93\u904e\u8a31\u591a\u95dc\u5361,\u9019\u908a\u5927\u81f4\u6574\u7406\u4ee5\u4e0b:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8edf\u9ad4\u958b\u767c\u6216\u8005\u66f4\u65b0"),(0,r.kt)("li",{parentName:"ol"},"\u6e2c\u8a66\u74b0\u5883\u90e8\u7f72\u4e26\u6e2c\u8a66"),(0,r.kt)("li",{parentName:"ol"},"\u6b63\u5f0f\u74b0\u5883\u4e0a\u7dda"),(0,r.kt)("li",{parentName:"ol"},"\u76e3\u63a7\u74b0\u5883")),(0,r.kt)("p",null,"\u770b\u5e7e\u4f86\u6b65\u9a5f\u5f88\u5c11,\u4f46\u5be6\u969b\u4e0a\u7d30\u7bc0\u5f88\u591a,\u800c\u4e14\u96a8\u8457\u516c\u53f8\u6280\u8853\u7a0b\u5ea6\u8d8a\u9ad8,\u9019\u4e9b\u904e\u7a0b\u6703\u88ab\u5207\u5f97\u8d8a\u8907\u96dc."),(0,r.kt)("p",null,"\u8edf\u9ad4\u958b\u767c\u6216\u8005\u66f4\u65b0\u7684\u904e\u7a0b,\u6703\u88ab\u5207\u5272\u6210,\u4f9d\u64da github flow(\u6bcf\u5bb6\u908f\u8f2f\u4e0d\u540c)\u5c0d\u5404\u9700\u6c42,\u5efa\u7acb\u4e0d\u540c\u5206\u652f,RD \u7684 code \u63a8\u4e0a\u4f86\u4e4b\u5f8c,\u8981\u78ba\u4fdd\u54c1\u8cea\u6703\u7d93\u904e\u6e2c\u8a66\u968e\u6bb5,\u6700\u5f8c\u5408 code,\u63a5\u4e0b\u4f86\u5c31\u662f\u628a code \u90e8\u7f72\u5230\u6e2c\u8a66\u74b0\u5883\u90e8\u7f72\u4e26\u6e2c\u8a66,\u6e2c\u8a66\u6c92\u554f\u984c\u5c31\u6703\u90e8\u7f72\u5230\u6b63\u5f0f\u74b0\u5883."),(0,r.kt)("p",null,"code \u7684\u7a69\u5b9a\u6027\u90a3\u6bb5\u7531 CI \u7ba1\u7406,\u90e8\u7f72\u904e\u7a0b\u662f CD,\u800c\u90e8\u7f72\u6709\u8a31\u591a\u65b9\u6cd5,\u4f46\u8a0e\u8ad6 CD \u5982\u4f55\u505a\u9700\u8981\u5f9e\u6839\u672c\u300e\u74b0\u5883\u300f\u958b\u4f7f\u8ac7\u8d77,\u8981\u600e\u9ebc\u9078\u64c7\u4f60\u7684\u904b\u7b97\u8cc7\u6e90\u9019\u500b\u554f\u984c\u5f88\u5e38\u898b,aws \u5b98\u65b9\u63d0\u4f9b\u7684\u8b1b\u89e3\u5982\u4ee5\u4e0b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://wa.aws.amazon.com/wat.question.PERF_2.en.html"},"How do you select your compute solution?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/tw/startups/start-building/how-to-choose-compute-option/"},"\u904b\u7b97\u9078\u9805\uff1a\u865b\u64ec\u6a5f\u5668\u3001\u5bb9\u5668\u6216\u662f\u7121\u4f3a\u670d\u5668\uff1f")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/products/compute/"},"\u904b\u7b97\u8cc7\u6e90\u5206\u985e"))),(0,r.kt)("p",null,"\u9019\u908a\u7d00\u9304\u7b2c\u4e8c\u9805,\u95dc\u65bc\u904b\u7b97\u9078\u9805\uff1a\u865b\u64ec\u6a5f\u5668\u3001\u5bb9\u5668\u6216\u662f\u7121\u4f3a\u670d\u5668\uff1f\u4ed6\u7d66\u4e86\u4e09\u500b\u61c9\u7528\u6848\u4f8b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"AWS Lambda:\u60f3\u5c07\u5c08\u6ce8\u529b\u653e\u5728\u5546\u696d\u908f\u8f2f,\u4e14\u57f7\u884c\u7684\u4efb\u52d9\u6c92\u6709\u5bc6\u96c6\u578b\u904b\u7b97\u6216\u57f7\u884c\u6642\u9593\u904e\u9577(\u8d85\u904e 15min),\u53c8\u61f6\u5f97\u7ba1\u8ca0\u8f09\u5e73\u8861\u3001\u5f48\u6027\u64f4\u5c55\u3001\u806f\u7db2\u6216\u7de8\u5beb\u9023\u63a5\u4ee3\u78bc (\u4f8b\u5982\u7528\u65bc\u4f7f\u7528\u8005\u8eab\u5206\u9a57\u8b49\u3001\u8a18\u9304\u65e5\u8a8c\u3001\u64f7\u53d6\u4f8b\u5916\u60c5\u6cc1\u7b49) \u4e4b\u985e\u7684\u57fa\u790e\u8a2d\u65bd\u554f\u984c,\u53ef\u4ee5\u7528 AWS Lambda,\u914d\u5408 S3,CloudFront,API Gateway,Amazon Cognito \u548c AWS AppSync.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ECS or EKS: \u55ae\u9805\u4efb\u52d9\u9700\u8981\u5bc6\u96c6\u578b\u904b\u7b97\uff0c\u6216\u8005\u57f7\u884c\u6642\u9593\u8d85\u904e 15 \u5206\u9418\u3002\u5b83\u9084\u53ef\u80fd\u9700\u8981\u8de8\u8d8a\u96f2\u7aef\u548c\u5176\u4ed6\u74b0\u5883,\u53ef\u4ee5\u8003\u616e\u7528 ECS,EKS.\u800c ECS \u8ddf EKS \u600e\u9ebc\u9078\u64c7\uff1f\u5982\u679c\u60a8\u5df2\u7d93\u64c1\u6709 Kubernetes \u7684\u73fe\u6709\u6280\u80fd\u548c\u504f\u597d\u8a2d\u5b9a\uff0c\u5247 EKS \u662f\u6700\u597d\u7684\u9078\u64c7,\u5982\u679c\u4e0d\u719f EKS,\u5c31\u4e56\u4e56\u5148\u7528 ECS.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"EC2: \u5de8\u578b\u61c9\u7528\u7a0b\u5f0f,\u9858\u610f\u5b8c\u5168\u5b58\u53d6\u5e95\u5c64\u57fa\u790e\u67b6\u69cb\uff0c\u4ee5\u9032\u884c\u8a3a\u65b7\u548c\u8abf\u6574\u4e4b\u985e\u7684\u64cd\u4f5c,\u4e5f\u719f\u6089 nginx \u985e,\u53ef\u4ee5\u5f9e AWS Elastic Beanstalk \u4e0a\u5927\u7372\u88e8\u76ca\uff0c\u5176\u5c07\u900f\u904e\u5354\u52a9\u90e8\u7f72\u548c\u4f48\u5efa\u8cc7\u6e90 (\u4f8b\u5982\u8ca0\u8f09\u5e73\u8861\u3001Auto Scaling \u548c\u904b\u4f5c\u72c0\u614b\u76e3\u63a7) \u4f86\u52a0\u901f\u5728 EC2 \u4e0a\u5efa\u7acb Web \u61c9\u7528\u7a0b\u5f0f."))),(0,r.kt)("p",null,"\u57fa\u672c\u4e0a,\u5c0d\u65bc\u5de5\u7a0b\u5e2b\u4f86\u8aaa,\u4f60\u53ef\u80fd\u4f7f\u7528 VM,container(docker),k8s, \u800c\u8981\u5b78\u54ea\u4e00\u7a2e,\u8ddf\u5982\u4f55\u505a\u5230\u8a72\u74b0\u5883\u7684 CD \u7684\u9019\u500b\u554f\u984c,\u6211\u7684\u60f3\u6cd5\u662f\u5148\u5168\u5b78,\u4e4b\u5f8c\u5de5\u4f5c\u9047\u5230\u7684\u6642\u5019\u6bd4\u8f03\u597d\u56de\u7b54,\u8981\u9032\u4e00\u6b65\u4e86\u89e3\u4e5f\u66f4\u5feb."),(0,r.kt)("p",null,"\u63a5\u8457,\u4f86\u60f3\u4e00\u4e0b\u4e00\u500b\u5c01\u5305\u600e\u9ebc\u7531\u4f7f\u7528\u8005\u7aef\u9032\u5230\u4f60\u7684\u74b0\u5883\uff01\u9019\u908a\u7528\u4e00\u822c TLS \u7db2\u8def\u670d\u52d9\u6709\u4f7f\u7528\u6191\u8b49\u8ddf\u8cb7\u7db2\u57df\u7684\u6b63\u5e38\u60c5\u6cc1."),(0,r.kt)("p",null,"\u4f7f\u7528\u8005 request \u57df\u540d->DNS \u89e3\u6790\u57df\u540d\u5c0d\u61c9\u7684 IP-> request \u7d93\u904e CDN \u5230\u76ee\u7684 ip ->\u9632\u706b\u7246\u5141\u8a31\u5c01\u5305\u901a\u904e-> Server \u8ddf client \u505a TCP \u4e09\u9805\u4ea4\u63e1 -> TLS \u6191\u8b49\u9a57\u8b49\u4ea4\u63e1,\u9a57\u8b49 TLS \u6191\u8b49\u7684\u6709\u6548\u6027 -> web server \u5c0d\u5c01\u5305\u52a0\u89e3\u5bc6 -> \u61c9\u7528\u7a0b\u5f0f\u8655\u7406\u5c01\u5305\u4e2d\u7684\u8acb\u6c42->\u7d00\u9304 log -> \u5c07\u56de\u61c9\u5c01\u5305\u52a0\u5bc6\u5f8c\u518d\u901a\u904e TLS \u5354\u8b70\u50b3\u9001\u56de client -> \u4f7f\u7528\u8005 get response"),(0,r.kt)("p",null,"\u7c21\u55ae\u6574\u7406,IaC \u5e38\u6703\u9700\u8981\u7ba1\u7406\u4ee5\u53ca\u8a2d\u5b9a\u4ee5\u4e0b\u6771\u897f:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#%E5%9F%9F%E5%90%8D"},"\u57df\u540d")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#%E6%86%91%E8%AD%89"},"\u6191\u8b49")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#%E7%B6%B2%E8%B7%AF%E5%8F%8A%E4%BC%BA%E6%9C%8D%E5%99%A8%E7%92%B0%E5%A2%83"},"\u7db2\u8def\u53ca\u4f3a\u670d\u5668\u74b0\u5883(\u9632\u706b\u7246,subnet \u5207\u5206,\u8def\u7531\u8868,gateway,CDN,security group \u7b49\u7b49)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#%E6%87%89%E7%94%A8%E7%A8%8B%E5%BC%8F%E9%83%A8%E7%BD%B2%E6%96%B9%E5%BC%8F"},"\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#%E7%9B%A3%E6%8E%A7%E7%A8%8B%E5%BC%8F"},"\u76e3\u63a7\u7a0b\u5f0f")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#%E6%97%A5%E8%AA%8C%E7%AE%A1%E7%90%86"},"\u65e5\u8a8c\u7ba1\u7406"))),(0,r.kt)("p",null,"\u800c IaC \u7cbe\u795e\u5c31\u662f\u628a\u9019\u6574\u500b\u904e\u7a0b\u7684\u5efa\u7f6e,\u7528\u7a0b\u5f0f\u7684\u65b9\u5f0f\u5efa\u7acb,\u4e5f\u5c31\u662f\u767c\u751f\u4e86\u4ec0\u9ebc\u4e8b\u60c5,\u600e\u9ebc\u5efa\u7acb\u7684,\u90fd\u662f\u7528\u7a0b\u5f0f\u53bb\u63a7\u5236,\u5982\u679c\u67d0\u6bb5\u639b\u6389\u6216\u88ab\u770b\u4f60\u4e0d\u9806\u773c\u7684\u5de5\u7a0b\u5e2b\u780d\u6389,\u53ef\u4ee5\u8fc5\u901f\u5730\u7528\u7a0b\u5f0f\u57f7\u884c\u5099\u63f4\u65b9\u6848\u628a\u9019\u6bb5\u639b\u6389\u7684\u88dc\u4e0a. \u4ee5\u4e0b\u7684\u5c0f\u7bc0,\u6703\u53bb\u8a0e\u8ad6\u6bcf\u968e\u6bb5 IaC \u6709\u54ea\u4e9b\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528."),(0,r.kt)("h3",{id:"\u57df\u540d"},"\u57df\u540d"),(0,r.kt)("p",null,"DNS \u8a18\u9304\u7ba1\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Terraform\uff1aTerraform \u662f\u4e00\u500b\u57fa\u790e\u8a2d\u65bd\u5373\u4ee3\u78bc\u5de5\u5177\uff0c\u652f\u6301\u7ba1\u7406\u591a\u7a2e\u57df\u540d\u8a3b\u518a\u5546\u548c DNS \u89e3\u6790\u670d\u52d9\u5546\uff0c\u4f8b\u5982 AWS Route 53\u3001Cloudflare\u3001GoDaddy \u7b49\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ansible\uff1aAnsible \u662f\u4e00\u500b\u81ea\u52d5\u5316 IT \u5de5\u5177\uff0c\u53ef\u4ee5\u900f\u904e\u5404\u7a2e\u6a21\u7d44\u7ba1\u7406 DNS \u8a18\u9304\uff0c\u652f\u6301\u7684\u670d\u52d9\u5546\u5305\u62ec AWS Route 53\u3001Cloudflare \u7b49\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OctoDNS\uff1aOctoDNS \u662f\u4e00\u500b\u7531 GitHub \u958b\u767c\u7684\u958b\u6e90 DNS \u5de5\u5177\uff0c\u652f\u6301\u81ea\u52d5\u5316\u7ba1\u7406\u591a\u7a2e DNS \u89e3\u6790\u670d\u52d9\u5546\uff0c\u4f8b\u5982 AWS Route 53\u3001Cloudflare\u3001Dyn\u3001Google Cloud DNS \u7b49\u3002"))),(0,r.kt)("h3",{id:"\u6191\u8b49"},"\u6191\u8b49"),(0,r.kt)("p",null,"\u5c07\u6191\u8b49\u7684\u7ba1\u7406\u7d0d\u5165\u5230\u8a2d\u65bd\u5373\u4ee3\u78bc (Infrastructure as Code, IaC) \u4e2d\u3002\u9019\u6a23\u505a\u7684\u597d\u8655\u662f\u53ef\u4ee5\u8b93\u6191\u8b49\u7684\u7ba1\u7406\u81ea\u52d5\u5316\u3001\u53ef\u8ffd\u8e64\uff0c\u540c\u6642\u4e5f\u53ef\u4ee5\u78ba\u4fdd\u6191\u8b49\u7684\u4f7f\u7528\u7b26\u5408\u653f\u7b56\u548c\u5b89\u5168\u8981\u6c42"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"AWS Certificate Manager:\u5982\u679c\u4f60\u7684\u670d\u52d9\u6709\u904e cloudfront,\u4f60\u7684\u7db2\u7ad9\u7684\u6191\u8b49\u53ef\u4ee5\u7528 ACM \u7533\u8acb\u6191\u8b49,\u7136\u5f8c\u639b\u5230 cloudfront \u4e0a\u9762\u53bb,\u9019\u6a23\u4f60\u5c31\u53ef\u4ee5\u7528 https \u9023\u7dda,\u4e14 aws \u6703\u5b9a\u671f\u5e6b\u4f60 renew \u6191\u8b49."),(0,r.kt)("li",{parentName:"ol"},"Certbot\uff1aCertbot \u662f\u4e00\u500b\u7531 Let's Encrypt \u63d0\u4f9b\u7684\u81ea\u52d5\u5316\u6191\u8b49\u7ba1\u7406\u5de5\u5177\uff0c\u652f\u6301\u81ea\u52d5\u5316\u751f\u6210\u548c\u66f4\u65b0 TLS/SSL \u6191\u8b49\u3002\u53ef\u4ee5\u5728\u4f60\u7684 nginx \u4e0a\u9762\u4f7f\u7528\u8a72\u5957\u4ef6\u7701\u53bb\u63db\u6191\u8b49\u56f0\u64fe.")),(0,r.kt)("h3",{id:"\u7db2\u8def\u53ca\u4f3a\u670d\u5668\u74b0\u5883"},"\u7db2\u8def\u53ca\u4f3a\u670d\u5668\u74b0\u5883"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"AWS CloudFormation\uff1aAWS \u63d0\u4f9b\u7684\u5b98\u65b9 IaC \u5de5\u5177\uff0c\u53ef\u7528\u65bc\u5275\u5efa\u548c\u7ba1\u7406 AWS \u8cc7\u6e90\uff0c\u5305\u62ec VPC\u3001\u5b50\u7db2\u3001\u8def\u7531\u8868\u3001\u5b89\u5168\u7d44\u7b49\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Terraform\uff1a\u662f\u4e00\u6b3e\u8de8\u96f2\u5e73\u53f0\u7684 IaC \u5de5\u5177\uff0c\u652f\u6301\u591a\u500b\u96f2\u7aef\u63d0\u4f9b\u5546\u548c\u5404\u7a2e\u4e0d\u540c\u7684\u8cc7\u6e90\u985e\u578b\u3002\u53ef\u4ee5\u7528\u4f86\u5b9a\u7fa9\u4e26\u7ba1\u7406 VPC\u3001\u5b50\u7db2\u3001\u8def\u7531\u8868\u3001\u5b89\u5168\u7d44,\u958b\u6a5f\u5668\u7b49\u3002"))),(0,r.kt)("p",null,"\u96d6\u7136 Ansible \u53ef\u4ee5\u505a\u5230\u985e\u4f3c\u7684\u4e8b\u60c5,\u4e0d\u904e\u56e0\u70ba\u5b83\u4e3b\u8981\u7528\u65bc\u5728\u591a\u53f0\u4e3b\u6a5f\u4e4b\u9593\u9032\u884c\u914d\u7f6e\u3001\u8edf\u9ad4\u5b89\u88dd,\u7684\u5de5\u5177,\u8ddf Terraform \u6bd4\u8f03\u7684\u8a71 ,Terraform \u7684\u8a2d\u5b9a\u6587\u4ef6\u683c\u5f0f\u6bd4\u8f03\u76f4\u89c0\uff0c\u800c\u4e14\u5b83\u53ef\u4ee5\u5e6b\u52a9\u7ba1\u7406\u8cc7\u6e90\u72c0\u614b\uff0c\u5f9e\u800c\u5be6\u73fe\u57fa\u790e\u8a2d\u65bd\u7684\u53ef\u9760\u6027\u548c\u53ef\u7dad\u8b77\u6027"),(0,r.kt)("h3",{id:"\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72"},"\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72"),(0,r.kt)("p",null,"\u81ea\u52d5\u5316\u90e8\u7f72\u61c9\u7528\u7a0b\u5f0f\u5230\u76ee\u6a19\u4f3a\u670d\u5668\u6216\u5bb9\u5668\uff0c\u4e26\u78ba\u4fdd\u61c9\u7528\u7a0b\u5f0f\u914d\u7f6e\u548c\u904b\u884c\u74b0\u5883\u4e00\u81f4\u3002\u4e3b\u8981\u6709\u56db\u5927\u5957\u4ef6 Puppet\u3001SaltStack\u3001Chef \u548c Ansible."),(0,r.kt)("p",null,"\u56e0\u70ba\u770b 104 \u88e1\u9762\u6700\u5e38\u6703\u554f\u7684\u5c31\u662f ansible,\u6240\u4ee5\u5efa\u8b70\u5148\u5f9e Ansible \u770b\uff0e"),(0,r.kt)("p",null,"Ansible\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 YAML \u7de8\u5beb\uff0c\u5177\u6709\u9ad8\u53ef\u8b80\u6027\u548c\u6613\u65bc\u5b78\u7fd2\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u63a8\u9001\u6a21\u5f0f\u5de5\u4f5c\uff0c\u7121\u9700\u5b89\u88dd\u4ee3\u7406\u7a0b\u5e8f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9069\u7528\u65bc\u5404\u7a2e\u898f\u6a21\u7684\u57fa\u790e\u8a2d\u65bd\uff0c\u6613\u65bc\u4e0a\u624b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8207\u5176\u4ed6\u5de5\u5177\u96c6\u6210\u826f\u597d\uff0c\u5ee3\u6cdb\u61c9\u7528\u65bc\u81ea\u52d5\u5316\u90e8\u7f72\u548c\u6301\u7e8c\u96c6\u6210/\u6301\u7e8c\u4ea4\u4ed8\uff08CI/CD\uff09\u3002")),(0,r.kt)("h3",{id:"\u76e3\u63a7\u7a0b\u5f0f"},"\u76e3\u63a7\u7a0b\u5f0f"),(0,r.kt)("p",null,"\u5728\u76e3\u63a7 VM \u4e0a\u9762\u7684\u6578\u64da,\u7528 Zabbix \u6216 Prometheus \u53ef\u4ee5\u9054\u5230\u540c\u529f\u80fd,\u4e0d\u904e\u5728\u76e3\u63a7 Kubernetes \u548c Docker\uff0c\u6703\u6bd4\u8f03\u63a8\u85a6\u4f7f\u7528 Prometheus."),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 Zabbix \u6642,\u56e0\u70ba\u4ed6\u5716\u4e0d\u592a\u597d\u770b,\u6240\u4ee5\u6703\u642d\u914d\u5176\u4ed6\u5957\u8edf\u9ad4,ex.Grafana \u53ef\u4ee5\u5c07 zabbix \u8cc7\u6599\u532f\u5165\u4ed6\u7684\u4ecb\u9762,\u505a\u5716\u8868\u7f8e\u5316."),(0,r.kt)("h3",{id:"\u65e5\u8a8c\u7ba1\u7406"},"\u65e5\u8a8c\u7ba1\u7406"),(0,r.kt)("p",null,"\u4f7f\u7528 IaC \u5de5\u5177\uff0c\u53ef\u4ee5\u914d\u7f6e\u548c\u6574\u5408\u65e5\u8a8c\u7ba1\u7406\u5de5\u5177\uff0c\u5982 Amazon CloudWatch Logs \u6216 ELK Stack\uff08Elasticsearch\u3001Logstash\u3001Kibana\uff09\uff0c\u4ee5\u6536\u96c6\u3001\u5206\u6790\u548c\u5132\u5b58\u61c9\u7528\u7a0b\u5f0f\u548c\u57fa\u790e\u8a2d\u65bd\u7684\u65e5\u8a8c\u3002"),(0,r.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u8981\u5b78-iac"},"\u70ba\u4ec0\u9ebc\u8981\u5b78 IaC"),(0,r.kt)("p",null,"\u73fe\u5be6\u554f\u984c\u662f,\u4e0d\u7ba1\u662f\u9762\u8a66 DevOps \u9084\u662f SRE,\u6bcf\u5bb6\u516c\u53f8\u53bb\u9762\u8a66\u90fd\u6703\u5148\u554f\u4f60\u7528\u904e\u7684 IaC \u5de5\u5177,\u5728\u627e\u5de5\u4f5c\u88ab\u554f\u5230\u4e0d\u6703\u5c31\u662f\u6263\u5206,\u6709\u4e9b\u4eba\u7684\u7b2c\u4e00\u9593\u516c\u53f8\u5c31\u628a\u9019\u4e9b\u5de5\u5177\u7528\u904d\u4e86,\u6709\u4e9b\u4eba\u5247\u4e0d\u662f,\u6240\u4ee5\u5982\u679c\u81ea\u8a8d\u6c92\u6709\u6bd4\u5225\u4eba\u6709\u66f4\u591a\u7684\u5e78\u904b,\u5929\u4efd\u6216\u80cc\u666f,\u90a3\u80fd\u505a\u7684\u5c31\u662f\u6bd4\u5225\u4eba\u6709\u66f4\u591a\u7684\u8010\u5fc3\u8ddf\u52aa\u529b."))}c.isMDXComponent=!0}}]);