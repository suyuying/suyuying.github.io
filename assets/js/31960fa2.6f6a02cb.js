"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[2563],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var s=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,s)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,s,a=function(n,e){if(null==n)return{};var t,s,a={},i=Object.keys(n);for(s=0;s<i.length;s++)t=i[s],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(s=0;s<i.length;s++)t=i[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var o=s.createContext({}),l=function(n){var e=s.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},p=function(n){var e=l(n.components);return s.createElement(o.Provider,{value:e},n.children)},_="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return s.createElement(s.Fragment,{},e)}},u=s.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,o=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),_=l(t),u=a,g=_["".concat(o,".").concat(u)]||_[u]||f[u]||i;return t?s.createElement(g,r(r({ref:e},p),{},{components:t})):s.createElement(g,r({ref:e},p))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,r=new Array(i);r[0]=u;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=n,c[_]="string"==typeof n?n:a,r[1]=c;for(var l=2;l<i;l++)r[l]=t[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42814:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(87462),a=(t(67294),t(3905));const i={title:"Object-Oriented Programming\uff0cOOP",description:"\u56e0\u70ba\u5de5\u4f5c\u4e0a\u6709\u4e9b\u6e2c\u8a66\u6a5f\u6703\u67b6\u5728\u96f2\u7aef,\u70ba\u4e86\u7701\u9322\u6c92\u6709\u7d81\u5b9aeip,\u90a3\u70ba\u4e86\u8981\u5728\u6bcf\u6b21\u958b\u6a5f\u90fd\u4e0d\u7528\u53bb\u770b\u65b0\u7684\u5916\u90e8ip\u7136\u5f8c\u518d\u6539ssh\u7684\u9023\u7ddaip,\u6240\u4ee5\u7a0b\u5f0f\u81ea\u52d5\u57f7\u884c\u4ee5\u4e0a\u4e8b\u60c5,\u540c\u6642\u56e0\u70ba\u7ba1\u7406\u7684\u904e\u7a0b\u662f\u9069\u5408\u62ff\u4f86\u6539\u6210oop\u98a8\u683c,\u6240\u4ee5\u9806\u4fbf\u7df4\u7fd2oop\u98a8\u683c\u7684\u5beb\u6cd5.\u4ee5\u4e0b\u5be6\u4f5c\u9805\u76ee \u62bd\u8c61\u5316,\u5c31\u662fcode\u958b\u982d\u5728\u7528abc\u898f\u5283\u67b6\u69cb\u591a\u578b \u56e0\u70ba\u76ee\u524d\u53ea\u5bebaws\u7684,\u4f46\u662f\u8981\u7528\u5230gcp\u90a3\u4e9b\u4e5f\u90fd\u6703\u4f7f\u7528\u7236\u8f29\u7684VM class,\u7562\u7adf\u6bcf\u4e00\u53f0\u6a5f\u5668,\u7121\u8ad6\u662fgcp,azure,aws\u90fd\u6703\u9700\u8981 \u958b\u6a5f \u95dc\u6a5f \u91cd\u958b\u7b49\u529f\u80fd.\u7e7c\u627f,EC2\u6703\u7e7c\u627f\u81f3VM\u67b6\u69cb.\u5c01\u88dd \u8981\u505a\u5230stop, start, restart\u4e26\u52a0\u5165\u4e00\u4e9b\u5c0f\u6771\u897f,\u4e26\u628a\u9019\u4e9b\u6771\u897f\u96c6\u5408\u5728\u5404\u500b\u516c\u958b\u4ecb\u9762.\u53e6\u5916\u88dc\u5145,\u8a72\u7a0b\u5f0f\u78bc\u529f\u80fd\u4e3b\u8981\u662f\u62ff\u4f86\u518d\u8d77\u52d5ec2\u5f8c,\u7528\u7a0b\u5f0f\u5e6b\u6211\u4fee\u6539ssh config,\u907f\u514d\u6bcf\u6b21\u90fd\u8981\u81ea\u5df1\u4e0a\u53bb\u67e5\u8a62\u4e26\u4fee\u6539. \u57fa\u672c\u4e0a\u628assh config\u88e1\u9762\u7684host\u62c9\u51fa\u4f86\u505a\u8b8a\u6578\u518d\u5e36\u5165\u5beb\u6703\u66f4\u597d,\u4e0d\u904e\u9019\u908a\u5077\u61f6\u5c31\u5148\u9019\u6a23\u5beb\u56c9.",image:"https://github.com/suyuying.png",authors:"suyuying",tags:["Python","OOP"]},r=void 0,c={permalink:"/blog/2023/06/28/Python/oop-practice",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Python/2023-06-28-oop-practice.md",source:"@site/blog/Python/2023-06-28-oop-practice.md",title:"Object-Oriented Programming\uff0cOOP",description:"\u56e0\u70ba\u5de5\u4f5c\u4e0a\u6709\u4e9b\u6e2c\u8a66\u6a5f\u6703\u67b6\u5728\u96f2\u7aef,\u70ba\u4e86\u7701\u9322\u6c92\u6709\u7d81\u5b9aeip,\u90a3\u70ba\u4e86\u8981\u5728\u6bcf\u6b21\u958b\u6a5f\u90fd\u4e0d\u7528\u53bb\u770b\u65b0\u7684\u5916\u90e8ip\u7136\u5f8c\u518d\u6539ssh\u7684\u9023\u7ddaip,\u6240\u4ee5\u7a0b\u5f0f\u81ea\u52d5\u57f7\u884c\u4ee5\u4e0a\u4e8b\u60c5,\u540c\u6642\u56e0\u70ba\u7ba1\u7406\u7684\u904e\u7a0b\u662f\u9069\u5408\u62ff\u4f86\u6539\u6210oop\u98a8\u683c,\u6240\u4ee5\u9806\u4fbf\u7df4\u7fd2oop\u98a8\u683c\u7684\u5beb\u6cd5.\u4ee5\u4e0b\u5be6\u4f5c\u9805\u76ee \u62bd\u8c61\u5316,\u5c31\u662fcode\u958b\u982d\u5728\u7528abc\u898f\u5283\u67b6\u69cb\u591a\u578b \u56e0\u70ba\u76ee\u524d\u53ea\u5bebaws\u7684,\u4f46\u662f\u8981\u7528\u5230gcp\u90a3\u4e9b\u4e5f\u90fd\u6703\u4f7f\u7528\u7236\u8f29\u7684VM class,\u7562\u7adf\u6bcf\u4e00\u53f0\u6a5f\u5668,\u7121\u8ad6\u662fgcp,azure,aws\u90fd\u6703\u9700\u8981 \u958b\u6a5f \u95dc\u6a5f \u91cd\u958b\u7b49\u529f\u80fd.\u7e7c\u627f,EC2\u6703\u7e7c\u627f\u81f3VM\u67b6\u69cb.\u5c01\u88dd \u8981\u505a\u5230stop, start, restart\u4e26\u52a0\u5165\u4e00\u4e9b\u5c0f\u6771\u897f,\u4e26\u628a\u9019\u4e9b\u6771\u897f\u96c6\u5408\u5728\u5404\u500b\u516c\u958b\u4ecb\u9762.\u53e6\u5916\u88dc\u5145,\u8a72\u7a0b\u5f0f\u78bc\u529f\u80fd\u4e3b\u8981\u662f\u62ff\u4f86\u518d\u8d77\u52d5ec2\u5f8c,\u7528\u7a0b\u5f0f\u5e6b\u6211\u4fee\u6539ssh config,\u907f\u514d\u6bcf\u6b21\u90fd\u8981\u81ea\u5df1\u4e0a\u53bb\u67e5\u8a62\u4e26\u4fee\u6539. \u57fa\u672c\u4e0a\u628assh config\u88e1\u9762\u7684host\u62c9\u51fa\u4f86\u505a\u8b8a\u6578\u518d\u5e36\u5165\u5beb\u6703\u66f4\u597d,\u4e0d\u904e\u9019\u908a\u5077\u61f6\u5c31\u5148\u9019\u6a23\u5beb\u56c9.",date:"2023-06-28T00:00:00.000Z",formattedDate:"June 28, 2023",tags:[{label:"Python",permalink:"/blog/tags/python"},{label:"OOP",permalink:"/blog/tags/oop"}],readingTime:5.705,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Object-Oriented Programming\uff0cOOP",description:"\u56e0\u70ba\u5de5\u4f5c\u4e0a\u6709\u4e9b\u6e2c\u8a66\u6a5f\u6703\u67b6\u5728\u96f2\u7aef,\u70ba\u4e86\u7701\u9322\u6c92\u6709\u7d81\u5b9aeip,\u90a3\u70ba\u4e86\u8981\u5728\u6bcf\u6b21\u958b\u6a5f\u90fd\u4e0d\u7528\u53bb\u770b\u65b0\u7684\u5916\u90e8ip\u7136\u5f8c\u518d\u6539ssh\u7684\u9023\u7ddaip,\u6240\u4ee5\u7a0b\u5f0f\u81ea\u52d5\u57f7\u884c\u4ee5\u4e0a\u4e8b\u60c5,\u540c\u6642\u56e0\u70ba\u7ba1\u7406\u7684\u904e\u7a0b\u662f\u9069\u5408\u62ff\u4f86\u6539\u6210oop\u98a8\u683c,\u6240\u4ee5\u9806\u4fbf\u7df4\u7fd2oop\u98a8\u683c\u7684\u5beb\u6cd5.\u4ee5\u4e0b\u5be6\u4f5c\u9805\u76ee \u62bd\u8c61\u5316,\u5c31\u662fcode\u958b\u982d\u5728\u7528abc\u898f\u5283\u67b6\u69cb\u591a\u578b \u56e0\u70ba\u76ee\u524d\u53ea\u5bebaws\u7684,\u4f46\u662f\u8981\u7528\u5230gcp\u90a3\u4e9b\u4e5f\u90fd\u6703\u4f7f\u7528\u7236\u8f29\u7684VM class,\u7562\u7adf\u6bcf\u4e00\u53f0\u6a5f\u5668,\u7121\u8ad6\u662fgcp,azure,aws\u90fd\u6703\u9700\u8981 \u958b\u6a5f \u95dc\u6a5f \u91cd\u958b\u7b49\u529f\u80fd.\u7e7c\u627f,EC2\u6703\u7e7c\u627f\u81f3VM\u67b6\u69cb.\u5c01\u88dd \u8981\u505a\u5230stop, start, restart\u4e26\u52a0\u5165\u4e00\u4e9b\u5c0f\u6771\u897f,\u4e26\u628a\u9019\u4e9b\u6771\u897f\u96c6\u5408\u5728\u5404\u500b\u516c\u958b\u4ecb\u9762.\u53e6\u5916\u88dc\u5145,\u8a72\u7a0b\u5f0f\u78bc\u529f\u80fd\u4e3b\u8981\u662f\u62ff\u4f86\u518d\u8d77\u52d5ec2\u5f8c,\u7528\u7a0b\u5f0f\u5e6b\u6211\u4fee\u6539ssh config,\u907f\u514d\u6bcf\u6b21\u90fd\u8981\u81ea\u5df1\u4e0a\u53bb\u67e5\u8a62\u4e26\u4fee\u6539. \u57fa\u672c\u4e0a\u628assh config\u88e1\u9762\u7684host\u62c9\u51fa\u4f86\u505a\u8b8a\u6578\u518d\u5e36\u5165\u5beb\u6703\u66f4\u597d,\u4e0d\u904e\u9019\u908a\u5077\u61f6\u5c31\u5148\u9019\u6a23\u5beb\u56c9.",image:"https://github.com/suyuying.png",authors:"suyuying",tags:["Python","OOP"]},nextItem:{title:"multi-thead introduction in python3",permalink:"/blog/2023/05/31/Python/multi-thead"}},o={authorsImageUrls:[void 0]},l=[{value:"Object-Oriented Programming",id:"object-oriented-programming",level:2},{value:"\u5be6\u4f5coop",id:"\u5be6\u4f5coop",level:3}],p={toc:l},_="wrapper";function f(n){let{components:e,...t}=n;return(0,a.kt)(_,(0,s.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"object-oriented-programming"},"Object-Oriented Programming"),(0,a.kt)("p",null,"\u7269\u4ef6\u5c0e\u5411\u7de8\u7a0b\uff08Object-Oriented Programming\uff0cOOP\uff09\u662f\u8a2d\u8a08\u98a8\u683c,\u6703\u5be6\u4f5c\u4ee5\u4e0b\u5e7e\u9805"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7269\u4ef6:\u628a\u7a0b\u5f0f\u7d44\u6210\u4e00\u500b\u7269\u4ef6,\u5177\u6709\u5c6c\u6027\u8ddf\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u5c01\u88dd:\u628a\u7a0b\u5f0f\u908f\u8f2f\u5c01\u88dd,\u53ea\u63d0\u4f9b\u516c\u958b\u4ecb\u9762"),(0,a.kt)("li",{parentName:"ul"},"\u7e7c\u627f: \u53ef\u4ee5\u7e7c\u627f\u5176\u4ed6\u7269\u4ef6\u7684\u5c6c\u6027\u8ddf\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u578b: \u7269\u4ef6\u53ef\u4ee5\u6839\u64da\u4e0a\u4e0b\u6587\u7684\u4e0d\u540c\u4ee5\u4e0d\u540c\u7684\u65b9\u5f0f\u5448\u73fe"),(0,a.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u5316: \u62bd\u8c61\u985e\u5225\u8ddf\u4ecb\u9762\u7d50\u69cb,\u4e26\u7531\u7269\u4ef6\u5be6\u73fe")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u6771\u897f\u6587\u5b57\u770b\u4e86\u6703\u4e0d\u592a\u61c2,\u6240\u4ee5\u6211\u9019\u908a\u7528ec2\u505a\u8209\u4f8b.\naws\u63d0\u4f9b\u4e00\u500bapi,\u5b83\u63d0\u4f9b\u4e86\u5f88\u591a\u65b9\u6cd5\u53bb\u4ed6\u7684server\u6488\u8cc7\u6599,\u4eca\u5929\u6211\u8981\u6488\u67d0\u5340\u7684ec2,\u6703\u5148\u5efa\u7acb\u9023\u63a5,\u7136\u5f8c\u67e5\u8a62\u6709\u54ea\u4e9bec2,\u7136\u5f8c\u628a\u8cc7\u6599\u532f\u51fa\u4e26\u914d\u5408\u4ed6\u7684\u8cc7\u8a0a\u505a\u7ba1\u63a7. \u4ee5\u4e0a\u904e\u7a0b\u53ef\u4ee5\u7528\u5e7e\u500bfunction\u4e32\u8d77\u4f86,\u50cf\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"connect_api")," ",(0,a.kt)("inlineCode",{parentName:"p"},"check_ec2_info")," ",(0,a.kt)("inlineCode",{parentName:"p"},"start_ec2")," ",(0,a.kt)("inlineCode",{parentName:"p"},"stop_ec2")," ",(0,a.kt)("inlineCode",{parentName:"p"},"reboot_ec2")," ",(0,a.kt)("inlineCode",{parentName:"p"},"get_ec2_public_dns"),"(\u9019\u908a\u53ea\u662f\u8209\u4f8b,\u4e0d\u662f\u5be6\u969b\u529f\u80fd).\n\u90a3\u7528oop\u4f86\u8a2d\u8a08\u5c31\u6703\u628a\u5efa\u7acb",(0,a.kt)("inlineCode",{parentName:"p"},"check_ec2_info")," \u67e5\u5230\u7684ec2,\u5c01\u88dd\u5230\u4e00\u500b\u5b9a\u7fa9\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"start")," ",(0,a.kt)("inlineCode",{parentName:"p"},"stop")," ",(0,a.kt)("inlineCode",{parentName:"p"},"reboot")," ",(0,a.kt)("inlineCode",{parentName:"p"},"get_public_dns"),"\u65b9\u6cd5\u7684\u7269\u4ef6,\u4f60\u64cd\u4f5c\u5c31\u6703\u8b8a\u6210ec2.start(),stop(),reboot()\u9019\u6a23. \u6211\u500b\u4eba\u662f\u89ba\u5f97\u7ba1\u7406\u8ddf\u7406\u89e3\u4e0a\u66f4\u597d."),(0,a.kt)("h3",{id:"\u5be6\u4f5coop"},"\u5be6\u4f5coop"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u5be6\u4f5c\u9805\u76ee:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u5316:\u5c31\u662fcode\u958b\u982d\u5728\u7528abc\u898f\u5283\u67b6\u69cb"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u578b: \u56e0\u70ba\u76ee\u524d\u53ea\u5bebaws\u7684,\u4f46\u662f\u8981\u7528\u5230gcp\u90a3\u4e9b\u4e5f\u90fd\u6703\u4f7f\u7528\u7236\u8f29\u7684VM class,\u7562\u7adf\u6bcf\u4e00\u53f0\u6a5f\u5668,\u7121\u8ad6\u662fgcp,azure,aws\u90fd\u6703\u9700\u8981 \u958b\u6a5f \u95dc\u6a5f \u91cd\u958b\u7b49\u529f\u80fd."),(0,a.kt)("li",{parentName:"ul"},"\u7e7c\u627f: EC2\u6703\u7e7c\u627f\u81f3VM\u67b6\u69cb"),(0,a.kt)("li",{parentName:"ul"},"\u5c01\u88dd: \u8981\u505a\u5230stop, start, restart\u4e26\u52a0\u5165\u4e00\u4e9b\u5c0f\u6771\u897f,\u4e26\u628a\u9019\u4e9b\u6771\u897f\u96c6\u5408\u5728\u5404\u500b\u516c\u958b\u4ecb\u9762.")),(0,a.kt)("p",null,"\u53e6\u5916\u88dc\u5145,\u8a72\u7a0b\u5f0f\u78bc\u529f\u80fd\u4e3b\u8981\u662f\u62ff\u4f86\u518d\u8d77\u52d5ec2\u5f8c,\u7528\u7a0b\u5f0f\u5e6b\u6211\u4fee\u6539ssh config,\u907f\u514d\u6bcf\u6b21\u90fd\u8981\u81ea\u5df1\u4e0a\u53bb\u67e5\u8a62\u4e26\u4fee\u6539. \u57fa\u672c\u4e0a\u628assh config\u88e1\u9762\u7684host\u62c9\u51fa\u4f86\u505a\u8b8a\u6578\u518d\u5e36\u5165\u5beb\u6703\u66f4\u597d,\u4e0d\u904e\u9019\u908a\u5077\u61f6\u5c31\u5148\u9019\u6a23\u5beb\u56c9."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="main.py"',title:'"main.py"'},"from abc import ABC, abstractmethod\nimport boto3\nfrom typing import Iterable\nimport argparse\n\n# \u62bd\u8c61\u5316\u53bb\u898f\u5283VM\u7d50\u69cb \u6703\u9069\u7528\u65bc\u6240\u6709vm \nclass VM(ABC):\n\n    @abstractmethod\n    def start_instance(self):\n        pass\n\n\n    @abstractmethod\n    def stop_instance(self):\n        pass\n\n    @abstractmethod\n    def restart_instance(self):\n        pass\n\n    @abstractmethod\n    def _show_instance_public_dns(self):\n        pass\n\n    def create_instance(cls, instance_id, instance_type):\n        pass\n\n# \u7e7c\u627f\u81f3VM,for aws vm \u793a\u7bc4\nclass EC2(VM):\n    def __init__(self, ec2_client, instance_id, instance_type, instance_state, public_dns_name, tags):\n        self.ec2_client = ec2_client\n        self.instance_id = instance_id\n        self.instance_type = instance_type\n        self.instance_state = instance_state\n        self.public_dns_name = public_dns_name\n        self.tags = tags\n\n    def start_instance(self):\n        self.ec2_client.start_instances(InstanceIds=[self.instance_id])\n        print(f\"{self.tags[0]['Value']}\u958b\u6a5f\u4e86\")\n        return\n\n    def start_instance_update_ssh_config_too(self, target_host_in_ssh_config: str):\n        self.start_instance()\n        self._show_instance_public_dns()\n        update_result = self._update_ssh_config(target_host=target_host_in_ssh_config)\n        if update_result:\n            print(f\"{self.public_dns_name} change to set {target_host_in_ssh_config} a new dns\")\n        else:\n            print(f\"Dont see {target_host_in_ssh_config} in ssh config\")\n        return\n\n    def stop_instance(self):\n        self.ec2_client.stop_instances(InstanceIds=[self.instance_id])\n        if self.tags:\n\n            print(f\"{self.tags[0]['Value']} is going to stop\")\n        else:\n            print(f\"{self.instance_id} is going to stop\")\n        return\n\n    def restart_instance(self):\n        self.ec2_client.reboot_instances(InstanceIds=[self.instance_id])\n        if self.tags:\n            print(f\"{self.tags[0]['Value']} is going to restart\")\n        else:\n            print(f\"{self.instance_id} is going to restart\")\n        return\n# \u56e0\u70ba\u662f\u5167\u90e8\u4f7f\u7528\u6240\u4ee5\u5728\u524d\u9762\u52a0 _ \u9019\u500b\u7b26\u865f\n    def _show_instance_public_dns(self):\n        # \u7b49\u5f85\u5b9e\u4f8b\u72b6\u6001\u53d8\u4e3a \"running\"\n        self.ec2_client.get_waiter('instance_running').wait(InstanceIds=[self.instance_id])\n\n        # \u83b7\u53d6\u5b9e\u4f8b\u8be6\u7ec6\u4fe1\u606f\n        response = self.ec2_client.describe_instances(InstanceIds=[self.instance_id])\n\n        # \u63d0\u53d6\u516c\u5171 DNS \u540d\u79f0\n        self.public_dns_name = response['Reservations'][0]['Instances'][0]['PublicDnsName']\n        return\n\n    def _update_ssh_config(self, target_host: str):\n\n        config_file = '/Users/suyuying/.ssh/config'  # SSH \u914d\u7f6e\u6587\u4ef6\u8def\u5f84\n\n        # \u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\n        with open(config_file, 'r') as file:\n            lines = file.readlines()\n\n        # \u67e5\u627e\u76ee\u6807\u4e3b\u673a\u540d\u7684\u884c\u7d22\u5f15,\u7528-1\u662f\u70ba\u4e86\u4e00\u65e6\u6c92\u6709\u9396\u5b9a\u5230\u76ee\u6a19host,\u53ef\u4ee5\u65b9\u4fbf\u505aif else\u8655\u7406\n        target_index = -1\n        # \u5c0b\u627e\u76ee\u6a19Host,\u4e26\u7528\u5b57\u4e32\u8655\u7406\u78ba\u8a8d\u662f\u5426\u7b26\u5408\n        for i, line in enumerate(lines):\n            if line.strip().startswith('Host') and line.strip().split()[1] == target_host:\n                # \u4e00\u4f46\u627e\u5230\u5c31\u628atarget index\u505a\u4fee\u6539\n                target_index = i\n                break\n\n        # \u66f4\u65b0\u4e3b\u673a\u540d\n        if target_index != -1:\n            # \u4ee5target_index\u70ba\u57fa\u6e96,\u8655\u7406\u4ed6\u7684\u4e0b\u4e00\u884c,\u4e5f\u5c31\u662fHostName\u90a3\u4e00\u884c\n            lines[target_index + 1] = f'    HostName {self.public_dns_name}\\n'\n\n            # \u5199\u5165\u66f4\u65b0\u540e\u7684\u5185\u5bb9\n            with open(config_file, 'w') as file:\n                file.writelines(lines)\n            print('SSH configuration updated successfully.')\n            return True\n        else:\n            print('Target host not found in SSH configuration.')\n            return False\n\n\n# \u4f7f\u7528\u7ec4\u5408\u6765\u7ba1\u7406 EC2 \u5b9e\u4f8b\nclass EC2Cluster:\n    def __init__(self, instances: Iterable[EC2]):\n        self.instances = instances\n\n    def start_all(self):\n        for instance in self.instances:\n            instance.start_instance()\n        return\n\n    def start_all_update_ssh_config(self):\n        for instance in self.instances:\n            if instance.tags[0]['Value'] == 'ford-pmm-server':\n                target_host = \"prometheus-server\"\n                instance.start_instance_update_ssh_config_too(target_host)\n            elif instance.tags[0]['Value'] == 'ford-pmm-test':\n                target_host = \"backend1\"\n                instance.start_instance_update_ssh_config_too(target_host)\n            else:\n                print(\"not matched tags in cloud\")\n        return\n\n    def stop_all(self):\n        for instance in self.instances:\n            instance.stop_instance()\n        return\n\n#\n# def datetime_encoder(obj):\n#     if isinstance(obj, datetime):\n#         return obj.isoformat()\n\n# \u53d6\u5f97ec2\u8cc7\u8a0a,\u4e26\u88fd\u4f5c\u7269\u4ef6\ndef get_instances(ec2_client_side):\n    response = ec2_client_side.describe_instances()\n\n    instances = []\n    for reservation in response['Reservations']:\n        for instance in reservation['Instances']:\n            instance_id = instance['InstanceId']\n            instance_type = instance['InstanceType']\n            instance_state = instance['State']['Name']\n            instance_public_dns_name = instance.get('PublicDnsName', '')\n            instance_tags = instance.get('Tags', [])\n\n            instance_info = {\n                'InstanceID': instance_id,\n                'InstanceType': instance_type,\n                'InstanceState': instance_state,\n                'PublicDNSName': instance_public_dns_name,\n                'InstanceTags': instance_tags\n            }\n            print(instance_info)\n            if instance_tags:\n                instance_info['Tags'] = instance_tags\n\n            ec2_instance = EC2(ec2_client_side,instance_id, instance_type, instance_state, instance_public_dns_name, instance_tags)\n\n            instances.append(ec2_instance)\n    return EC2Cluster(instances)\n\n\nif __name__ == \"__main__\":\n\n    # \u521b\u5efa ArgumentParser \u5bf9\u8c61\n    parser = argparse.ArgumentParser(description='EC2 Instances Control')\n\n    # \u6dfb\u52a0 start \u9009\u9879\n    parser.add_argument('--start', action='store_true', help='Start EC2 instances and update config')\n\n    # \u6dfb\u52a0 stop \u9009\u9879\n    parser.add_argument('--stop', action='store_true', help='Stop EC2 instances')\n\n    # \u89e3\u6790\u547d\u4ee4\u884c\u53c2\u6570\n    args = parser.parse_args()\n    ec2_client = boto3.client('ec2', region_name='us-west-1')\n    instances_cluster = get_instances(ec2_client_side=ec2_client)\n    # \u6839\u636e\u9009\u9879\u6267\u884c\u76f8\u5e94\u64cd\u4f5c\n    if args.start:\n        print('Starting EC2 instances...')\n        # \u5728\u8fd9\u91cc\u6dfb\u52a0\u542f\u52a8 EC2 \u5b9e\u4f8b\u7684\u903b\u8f91\n        instances_cluster.start_all_update_ssh_config()\n    if args.stop:\n        print('Stopping EC2 instances...')\n        # \u5728\u8fd9\u91cc\u6dfb\u52a0\u505c\u6b62 EC2 \u5b9e\u4f8b\u7684\u903b\u8f91\n        instances_cluster.stop_all()\n\n")))}f.isMDXComponent=!0}}]);