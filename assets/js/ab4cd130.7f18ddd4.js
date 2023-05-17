"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[3684],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(r),g=a,y=s["".concat(u,".").concat(g)]||s[g]||m[g]||o;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},45926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"The importance of IaC",description:"\u57df\u540d,\u6191\u8b49,\u7db2\u8def\u53ca\u4f3a\u670d\u5668\u74b0\u5883(\u9632\u706b\u7246\u3001subnet \u5207\u5206\u3001\u8def\u7531\u8868\u3001gateway\u3001CDN\u3001security group \u7b49\u7b49),\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72,\u76e3\u63a7\u7a0b\u5f0f,\u65e5\u8a8c\u7ba1\u7406\u9019\u4e9b\u5728IaC\u904e\u7a0b\u90fd\u6703\u7528\u5230,IaC \u7cbe\u795e\u5c31\u662f\u628a\u9019\u6574\u500b\u904e\u7a0b\u7684\u5efa\u7f6e,\u7528\u7a0b\u5f0f\u7684\u65b9\u5f0f\u5efa\u7acb,\u4e5f\u5c31\u662f\u767c\u751f\u4e86\u4ec0\u9ebc\u4e8b\u60c5,\u600e\u9ebc\u5efa\u7acb\u7684,\u90fd\u662f\u7528\u7a0b\u5f0f\u53bb\u63a7\u5236,\u5982\u679c\u67d0\u6bb5\u639b\u6389\u6216\u88ab\u770b\u4f60\u4e0d\u9806\u773c\u7684\u5de5\u7a0b\u5e2b\u780d\u6389,\u53ef\u4ee5\u8fc5\u901f\u5730\u7528\u7a0b\u5f0f\u57f7\u884c\u5099\u63f4\u65b9\u6848\u628a\u9019\u6bb5\u639b\u6389\u7684\u88dc\u4e0a. \u4ee5\u4e0b\u7684\u5c0f\u7bc0,\u6703\u53bb\u8a0e\u8ad6\u6bcf\u968e\u6bb5 IaC \u6709\u54ea\u4e9b\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["IaC"]},l=void 0,i={permalink:"/blog/2023/04/30/IaC/importance-of-IaC",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/IaC/2023-04-30-importance-of-IaC.md",source:"@site/blog/IaC/2023-04-30-importance-of-IaC.md",title:"The importance of IaC",description:"\u57df\u540d,\u6191\u8b49,\u7db2\u8def\u53ca\u4f3a\u670d\u5668\u74b0\u5883(\u9632\u706b\u7246\u3001subnet \u5207\u5206\u3001\u8def\u7531\u8868\u3001gateway\u3001CDN\u3001security group \u7b49\u7b49),\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72,\u76e3\u63a7\u7a0b\u5f0f,\u65e5\u8a8c\u7ba1\u7406\u9019\u4e9b\u5728IaC\u904e\u7a0b\u90fd\u6703\u7528\u5230,IaC \u7cbe\u795e\u5c31\u662f\u628a\u9019\u6574\u500b\u904e\u7a0b\u7684\u5efa\u7f6e,\u7528\u7a0b\u5f0f\u7684\u65b9\u5f0f\u5efa\u7acb,\u4e5f\u5c31\u662f\u767c\u751f\u4e86\u4ec0\u9ebc\u4e8b\u60c5,\u600e\u9ebc\u5efa\u7acb\u7684,\u90fd\u662f\u7528\u7a0b\u5f0f\u53bb\u63a7\u5236,\u5982\u679c\u67d0\u6bb5\u639b\u6389\u6216\u88ab\u770b\u4f60\u4e0d\u9806\u773c\u7684\u5de5\u7a0b\u5e2b\u780d\u6389,\u53ef\u4ee5\u8fc5\u901f\u5730\u7528\u7a0b\u5f0f\u57f7\u884c\u5099\u63f4\u65b9\u6848\u628a\u9019\u6bb5\u639b\u6389\u7684\u88dc\u4e0a. \u4ee5\u4e0b\u7684\u5c0f\u7bc0,\u6703\u53bb\u8a0e\u8ad6\u6bcf\u968e\u6bb5 IaC \u6709\u54ea\u4e9b\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528.",date:"2023-04-30T00:00:00.000Z",formattedDate:"April 30, 2023",tags:[{label:"IaC",permalink:"/blog/tags/ia-c"}],readingTime:10.985,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"The importance of IaC",description:"\u57df\u540d,\u6191\u8b49,\u7db2\u8def\u53ca\u4f3a\u670d\u5668\u74b0\u5883(\u9632\u706b\u7246\u3001subnet \u5207\u5206\u3001\u8def\u7531\u8868\u3001gateway\u3001CDN\u3001security group \u7b49\u7b49),\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72,\u76e3\u63a7\u7a0b\u5f0f,\u65e5\u8a8c\u7ba1\u7406\u9019\u4e9b\u5728IaC\u904e\u7a0b\u90fd\u6703\u7528\u5230,IaC \u7cbe\u795e\u5c31\u662f\u628a\u9019\u6574\u500b\u904e\u7a0b\u7684\u5efa\u7f6e,\u7528\u7a0b\u5f0f\u7684\u65b9\u5f0f\u5efa\u7acb,\u4e5f\u5c31\u662f\u767c\u751f\u4e86\u4ec0\u9ebc\u4e8b\u60c5,\u600e\u9ebc\u5efa\u7acb\u7684,\u90fd\u662f\u7528\u7a0b\u5f0f\u53bb\u63a7\u5236,\u5982\u679c\u67d0\u6bb5\u639b\u6389\u6216\u88ab\u770b\u4f60\u4e0d\u9806\u773c\u7684\u5de5\u7a0b\u5e2b\u780d\u6389,\u53ef\u4ee5\u8fc5\u901f\u5730\u7528\u7a0b\u5f0f\u57f7\u884c\u5099\u63f4\u65b9\u6848\u628a\u9019\u6bb5\u639b\u6389\u7684\u88dc\u4e0a. \u4ee5\u4e0b\u7684\u5c0f\u7bc0,\u6703\u53bb\u8a0e\u8ad6\u6bcf\u968e\u6bb5 IaC \u6709\u54ea\u4e9b\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["IaC"]},prevItem:{title:"YAML\u8a9e\u6cd5\u7d50\u69cb\u4ecb\u7d39",permalink:"/blog/2023/05/03/IaC/yml-syntax"},nextItem:{title:"Basic introduction of ansible",permalink:"/blog/2023/04/30/IaC/ansible/ansible-basic-introduction"}},u={authorsImageUrls:[void 0]},p=[{value:"IaC \u5e38\u898b\u7ba1\u7406\u9805\u76ee",id:"iac-\u5e38\u898b\u7ba1\u7406\u9805\u76ee",level:2}],c={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u57fa\u672c\u4e0a\u6211\u5b78\u65b0\u7684\u5de5\u5177\u90fd\u6703\u5148\u505a\u5e7e\u4ef6\u4e8b\u60c5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e2d\u6587 google \u641c\u5c0b\u770b\u6709\u54ea\u4e9b\u8cc7\u6e90"),(0,a.kt)("li",{parentName:"ol"},"\u4e56\u4e56\u628a\u5b98\u7db2\u6559\u5b78\u6587\u7ae0\u770b\u904e\u4e00\u904d,\u4ee5\u53ca\u5b98\u7db2\u7684\u4e00\u4e9b\u91cd\u8981\u7684\u57fa\u790e\u6587\u7ae0\u770b\u5b8c")),(0,a.kt)("p",null,"\u57fa\u672c\u4e0a\u90fd\u6703\u5148\u770b\u5b98\u7db2\u6587\u4ef6,\u5982\u679c\u5b98\u7db2\u600e\u9ebc\u770b\u90fd\u4e0d\u61c2,\u6703\u7528\u4e2d\u6587\u7684\u6559\u5b78\u6587\u4ef6\u8f14\u52a9,\u9084\u597d,terraform \u7684\u6559\u5b78\u6587\u4ef6\u5f88\u4e0d\u932f\uff5e\n\u7576\u57fa\u672c\u8cc7\u6599\u5b78\u5b8c\u4e4b\u5f8c,\u4ee5\u6211\u7684\u8cc7\u8cea\u4e00\u5b9a\u9084\u662f\u5f88\u4e0d\u719f,\u6240\u4ee5\u63a5\u8457\u6703\u505a\u5e7e\u4ef6\u4e8b\u60c5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5beb\u7bc7\u6587\u4ef6\u628a\u57fa\u672c\u578b\u614b,\u8ddf\u5e38\u7528\u65b9\u5f0f\u6574\u7406\u4e00\u4e0b(\u50cf\u9019\u7bc7)"),(0,a.kt)("li",{parentName:"ol"},"\u53c3\u8003\u5225\u4eba\u7684\u5be6\u6230\u6559\u5b78"),(0,a.kt)("li",{parentName:"ol"},"\u5be6\u4f5c")),(0,a.kt)("p",null,"\u9019\u908a,\u6bcf\u4ef6\u90fd\u5f88\u91cd\u8981,\u628a\u4f60\u61c2\u7684\u4e8b\u60c5\u8a18\u9304\u4e0b\u4f86\u6709\u5f88\u591a\u597d\u8655"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f60\u672a\u4f86\u9047\u5230\u4e8b\u60c5\u53ef\u4ee5\u8907\u7fd2"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4ee5\u524d\u89c0\u5ff5\u932f\u8aa4\u53ef\u4ee5\u6539\u6b63"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u627e\u4eba\u8a0e\u8ad6\u4e8b\u60c5\u6216\u6c42\u6559,\u4ed6\u53ef\u4ee5\u900f\u904e\u6587\u7ae0\u5148\u4e86\u89e3\u4f60\u7684\u7a0b\u5ea6")),(0,a.kt)("p",null,"\u53c3\u8003\u5225\u4eba\u5be6\u6230\u7d93\u9a57\u53ef\u4ee5\u6e1b\u5c11\u81ea\u5df1\u8e29\u5751\u6a5f\u7387\uff01"),(0,a.kt)("p",null,"\u6700\u5f8c,\u5b78\u6771\u897f\u5c31\u662f\u8981\u5be6\u4f5c,\u4e0d\u5be6\u4f5c\u6216\u5c0e\u5165,\u90a3\u6709\u5b78\u8ddf\u6c92\u5b78\u4e00\u6a23!"),(0,a.kt)("h2",{id:"iac-\u5e38\u898b\u7ba1\u7406\u9805\u76ee"},"IaC \u5e38\u898b\u7ba1\u7406\u9805\u76ee"),(0,a.kt)("p",null,"\u4e00\u500b\u7db2\u8def\u670d\u52d9\u7684\u63d0\u4f9b,\u4e2d\u9593\u6703\u7d93\u904e\u8a31\u591a\u95dc\u5361,\u9019\u908a\u5927\u81f4\u6574\u7406\u4ee5\u4e0b:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8edf\u9ad4\u958b\u767c\u6216\u8005\u66f4\u65b0"),(0,a.kt)("li",{parentName:"ol"},"\u6e2c\u8a66\u74b0\u5883\u90e8\u7f72\u4e26\u6e2c\u8a66"),(0,a.kt)("li",{parentName:"ol"},"\u6b63\u5f0f\u74b0\u5883\u4e0a\u7dda"),(0,a.kt)("li",{parentName:"ol"},"\u76e3\u63a7\u74b0\u5883")),(0,a.kt)("p",null,"\u770b\u5e7e\u4f86\u6b65\u9a5f\u5f88\u5c11,\u4f46\u5be6\u969b\u4e0a\u7d30\u7bc0\u5f88\u591a,\u800c\u4e14\u96a8\u8457\u516c\u53f8\u6280\u8853\u7a0b\u5ea6\u8d8a\u9ad8,\u9019\u4e9b\u904e\u7a0b\u6703\u88ab\u5207\u5f97\u8d8a\u8907\u96dc."),(0,a.kt)("p",null,"\u8edf\u9ad4\u958b\u767c\u6216\u8005\u66f4\u65b0\u7684\u904e\u7a0b,\u6703\u88ab\u5207\u5272\u6210,\u4f9d\u64da github flow(\u6bcf\u5bb6\u908f\u8f2f\u4e0d\u540c)\u5c0d\u5404\u9700\u6c42,\u5efa\u7acb\u4e0d\u540c\u5206\u652f,RD \u7684 code \u63a8\u4e0a\u4f86\u4e4b\u5f8c,\u8981\u78ba\u4fdd\u54c1\u8cea\u6703\u7d93\u904e\u6e2c\u8a66\u968e\u6bb5,\u6700\u5f8c\u5408 code,\u63a5\u4e0b\u4f86\u5c31\u662f\u628a code \u90e8\u7f72\u5230\u6e2c\u8a66\u74b0\u5883\u90e8\u7f72\u4e26\u6e2c\u8a66,\u6e2c\u8a66\u6c92\u554f\u984c\u5c31\u6703\u90e8\u7f72\u5230\u6b63\u5f0f\u74b0\u5883."),(0,a.kt)("p",null,"code \u7684\u7a69\u5b9a\u6027\u90a3\u6bb5\u7531 CI \u7ba1\u7406,\u90e8\u7f72\u904e\u7a0b\u662f CD,\u800c\u90e8\u7f72\u6709\u8a31\u591a\u65b9\u6cd5,\u4f46\u8a0e\u8ad6 CD \u5982\u4f55\u505a\u9700\u8981\u5f9e\u6839\u672c\u300e\u74b0\u5883\u300f\u958b\u4f7f\u8ac7\u8d77,\u8981\u600e\u9ebc\u9078\u64c7\u4f60\u7684\u904b\u7b97\u8cc7\u6e90\u9019\u500b\u554f\u984c\u5f88\u5e38\u898b,aws \u5b98\u65b9\u63d0\u4f9b\u7684\u8b1b\u89e3\u5982\u4ee5\u4e0b"))}m.isMDXComponent=!0}}]);