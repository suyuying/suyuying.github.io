"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[7297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=a,y=p["".concat(c,".").concat(g)]||p[g]||m[g]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"aws iam setting introduction",description:"\u5b98\u65b9\u5efa\u8b70\u5927\u591a\u60c5\u6cc1\u90fd\u6703\u9069\u7528 IAM role\uff0c\u4f7f\u7528 IMA role \u7684\u512a\u9ede\u662f\u4ed6\u662f\u4f7f\u7528\u66ab\u6642\u6027\u6191\u8b49(\u53ef\u8a2d\u5b9a\u5230\u671f\u6642\u9593)\uff0c\u800c IAM \u4f7f\u7528\u8005\u7528\u7684\u90fd\u662f\u9577\u671f\u7684 aws_secret_access_key(\u56e0\u6b64\u5b98\u65b9\u6703\u5efa\u8b70\u5b9a\u6642\u63db\uff0c\u4e0d\u904e\u4e00\u822c\u4f86\u8aaa\u6c92\u4eba\u90a3\u9ebc\u52e4\u52de ZZZ)\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS"],sidebar_position:1},i=void 0,s={permalink:"/blog/2023/03/25/Aws/aws-iam-setting",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Aws/2023-03-25-aws-iam-setting.md",source:"@site/blog/Aws/2023-03-25-aws-iam-setting.md",title:"aws iam setting introduction",description:"\u5b98\u65b9\u5efa\u8b70\u5927\u591a\u60c5\u6cc1\u90fd\u6703\u9069\u7528 IAM role\uff0c\u4f7f\u7528 IMA role \u7684\u512a\u9ede\u662f\u4ed6\u662f\u4f7f\u7528\u66ab\u6642\u6027\u6191\u8b49(\u53ef\u8a2d\u5b9a\u5230\u671f\u6642\u9593)\uff0c\u800c IAM \u4f7f\u7528\u8005\u7528\u7684\u90fd\u662f\u9577\u671f\u7684 aws_secret_access_key(\u56e0\u6b64\u5b98\u65b9\u6703\u5efa\u8b70\u5b9a\u6642\u63db\uff0c\u4e0d\u904e\u4e00\u822c\u4f86\u8aaa\u6c92\u4eba\u90a3\u9ebc\u52e4\u52de ZZZ)\u3002",date:"2023-03-25T00:00:00.000Z",formattedDate:"March 25, 2023",tags:[{label:"AWS",permalink:"/blog/tags/aws"}],readingTime:5.525,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"aws iam setting introduction",description:"\u5b98\u65b9\u5efa\u8b70\u5927\u591a\u60c5\u6cc1\u90fd\u6703\u9069\u7528 IAM role\uff0c\u4f7f\u7528 IMA role \u7684\u512a\u9ede\u662f\u4ed6\u662f\u4f7f\u7528\u66ab\u6642\u6027\u6191\u8b49(\u53ef\u8a2d\u5b9a\u5230\u671f\u6642\u9593)\uff0c\u800c IAM \u4f7f\u7528\u8005\u7528\u7684\u90fd\u662f\u9577\u671f\u7684 aws_secret_access_key(\u56e0\u6b64\u5b98\u65b9\u6703\u5efa\u8b70\u5b9a\u6642\u63db\uff0c\u4e0d\u904e\u4e00\u822c\u4f86\u8aaa\u6c92\u4eba\u90a3\u9ebc\u52e4\u52de ZZZ)\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS"],sidebar_position:1},prevItem:{title:"Zabbix Sender monitor key word in log, and show data in grafana",permalink:"/blog/2023/03/29/Zabbix/zabbix-monitor-log"},nextItem:{title:"How to let google find my website?",permalink:"/blog/2023/03/20/SEO/google-register"}},c={authorsImageUrls:[void 0]},l=[{value:"what is aws IAM",id:"what-is-aws-iam",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-aws-iam"},"what is aws IAM"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/service_code_examples.html"},"\u4ec0\u9ebc\u662f IAM")," aws \u5b98\u7db2\u7684\u8cc7\u8a0a\u4e00\u822c\u90fd\u5beb\u5f97\u6eff\u68d2\u7684\uff0c\u672c\u6587\u51fa\u8655\u4e3b\u8981\u662f\u53c3\u8003\u5b98\u7db2\u8cc7\u8a0a\u505a\u6574\u7406\uff0c\u56e0\u70ba\u7ba1\u7406\u4e0a\u7d93\u9a57\u53ea\u9650\u65bc\u81ea\u5df1\u7684\u74b0\u5883\u7528\u7684 s3,CI \u7b49\u7b49\uff0c\u6240\u4ee5\u6253\u7b97\u8d81\u9019\u500b\u6a5f\u6703\u6aa2\u8996\u4e4b\u524d\u8a2d\u5b9a\u7684 iAM \u6709\u6c92\u6709\u554f\u984c\uff0c\u7576\u7136\uff0c\u6211\u76f8\u4fe1\u9019\u53ea\u662f\u904e\u7a0b\uff0c\u96a8\u8457\u770b\u904e\u7684\u8cc7\u8a0a\u8ddf\u4e8b\u60c5\u8d8a\u591a\uff0c\u6703\u5f97\u5230\u4e0d\u540c\u6216\u8005\u591a\u500b\u7b54\u6848\uff0c\u7e3d\u4e4b\uff0c\u5c31\u5148\u5f9e\u9019\u4e00\u6b65\u958b\u59cb\u5427\uff01"),(0,a.kt)("p",null,"AWS Identity and Access Management (IAM) \u7528\u9014\uff1a\u5b89\u5168\u5730\u63a7\u5236\u5c0d Amazon Web Services (AWS) \u548c\u5e33\u6236\u8cc7\u6e90\u7684\u5b58\u53d6\u3002\u4f7f\u7528 IAM \u70ba\u4f7f\u7528\u8005\u548c\u89d2\u8272\u7b49\u8eab\u5206\u63d0\u4f9b\u60a8\u7684\u5e33\u6236\u4e2d\u8cc7\u6e90\u7684\u5b58\u53d6\u6b0a\u3002"))}m.isMDXComponent=!0}}]);