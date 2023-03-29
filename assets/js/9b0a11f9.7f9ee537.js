"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[7503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"aws book study note",description:"\u8a18\u9304\u7b46\u8a18",authors:"suyuying",tags:["AWS"]},i=void 0,l={permalink:"/blog/2023/3/29/Aws/aws-book-study-note",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Aws/2023-3-29-aws-book-study-note.md",source:"@site/blog/Aws/2023-3-29-aws-book-study-note.md",title:"aws book study note",description:"\u8a18\u9304\u7b46\u8a18",date:"2023-03-29T00:00:00.000Z",formattedDate:"March 29, 2023",tags:[{label:"AWS",permalink:"/blog/tags/aws"}],readingTime:1.5,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"aws book study note",description:"\u8a18\u9304\u7b46\u8a18",authors:"suyuying",tags:["AWS"]},nextItem:{title:"Zabbix Sender monitor key word in log, and show data in grafana",permalink:"/blog/2023/03/29/Zabbix/zabbix-monitor-log"}},s={authorsImageUrls:[void 0]},u=[{value:"IAM",id:"iam",level:2},{value:"IAM \u7d44\u6210",id:"iam-\u7d44\u6210",level:3},{value:"\u6cd5\u689d(policy)\u7d44\u6210",id:"\u6cd5\u689dpolicy\u7d44\u6210",level:4},{value:"\u8eab\u4efd\u7d44\u6210",id:"\u8eab\u4efd\u7d44\u6210",level:4}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"iam"},"IAM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u57fa\u672c\u6b0a\u9650\u6d41\u7a0b"',title:'"\u57fa\u672c\u6b0a\u9650\u6d41\u7a0b"'},"\u4f7f\u7528\u8005-> AWS\u8fa8\u8a8d\u8eab\u4efd->\u78ba\u8a8d\u6b0a\u9650->\u6388\u6b0a\u64cd\u4f5c\n")),(0,o.kt)("p",null,"root \u6b0a\u9650\u904e\u5927\u554f\u984c\uff0c\u900f\u904e\u8a2d\u5b9a\u4e0d\u540c\u6b0a\u9650\u5e33\u865f\u5207\u5272\uff0c\u5728 aws \u5c31\u662f\u900f\u904e\u591a\u500b\u7528\u6236\u7fa4\u7d44\u5207\u5206\u6b0a\u9650\uff0c\u8ddf linux \u7ba1\u7406\u985e\u4f3c\u3002"),(0,o.kt)("h3",{id:"iam-\u7d44\u6210"},"IAM \u7d44\u6210"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u6cd5\u689d->\u8eab\u4efd\n")),(0,o.kt)("p",null,"\u900f\u904e\u6cd5\u689d\u898f\u7bc4\u8eab\u4efd\u3002"),(0,o.kt)("h4",{id:"\u6cd5\u689dpolicy\u7d44\u6210"},"\u6cd5\u689d(policy)\u7d44\u6210"),(0,o.kt)("p",null,"\u6cd5\u689d\u5efa\u7acb\u898f\u5247\u7c21\u7a31 EPCAR"),(0,o.kt)("p",null,"Effect + Principal + Condition + Action + Resource\n\u5141\u8a31/\u62d2\u7d55 + \u4e3b\u9ad4(IAM user,or ","*",") + \u5565\u689d\u4ef6(ip or MFA) + \u57f7\u884c\u52d5\u4f5c + \u5c0d\u54ea\u9805\u8cc7\u6e90(s3,rds...)"),(0,o.kt)("h4",{id:"\u8eab\u4efd\u7d44\u6210"},"\u8eab\u4efd\u7d44\u6210"),(0,o.kt)("p",null,"\u4e3b\u8981\u6709\u5169\u985e"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6388\u6b0a policy \u7684 group\uff0c\u8ddf\u4f9d\u9644\u5728 group \u5e95\u4e0b\u6709\u9577\u671f\u6191\u8b49\u7684 IAM user\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u77ed\u671f credential \u7684 IAM role\uff0c\u5916\u90e8\u7cfb\u7d71\u5e33\u865f\uff08Federating Exist User. \u4f8b\u5982: github action,google \u767b\u5165)\u7b49\uff0c\u516c\u53f8\u672c\u5730\u5e33\u865f\uff0c\u5176\u4ed6 aws \u5e33\u865f\uff0caws \u8cc7\u6e90\u9593\u6e9d\u901a\uff0c\u90fd\u53ef\u4ee5\u900f\u904e\u9023\u7d50\u7684\u672c aws \u5e33\u865f IAM role \u505a\u8cc7\u6e90\u64cd\u4f5c\u3002")),(0,o.kt)("p",null,"::: info\n\u5916\u90e8\u4f7f\u7528\u8005\u8ddf\u672c\u5730 sso \u9a57\u8b49\u904e\u7a0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5ba2\u6236\u7aef\u61c9\u7528\u7a0b\u5f0f:A-> \u4f60\u7684Identity Provider(ldP)\u4e3b\u6a5f ex google,github\u7b49-> google,github\u7b49\u7684LDAP database \u9a57\u8b49 -> \u56de\u50b3SAML\u9a57\u8b49\u7d66\u5ba2\u6236\u7aefA->A\u547c\u53ebAWS STS(Security Token Service)\u9a57\u8b49->AWS \u56de\u61c9\u66ab\u6642\u6191\u8b49->\u5ba2\u6236\u7aefA\u900f\u904e\u6191\u8b49\u53d6\u5230aws\u8cc7\u6e90\n")),(0,o.kt)("p",null,":::"))}d.isMDXComponent=!0}}]);