"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[1212],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=a,y=p["".concat(c,".").concat(g)]||p[g]||m[g]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7742:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"aws vpc setting introduction",description:"\u5b98\u65b9\u5efa\u8b70\u5927\u591a\u60c5\u6cc1\u90fd\u6703\u9069\u7528 IAM role\uff0c\u4f7f\u7528 IMA role \u7684\u512a\u9ede\u662f\u4ed6\u662f\u4f7f\u7528\u66ab\u6642\u6027\u6191\u8b49(\u53ef\u8a2d\u5b9a\u5230\u671f\u6642\u9593)\uff0c\u800c IAM \u4f7f\u7528\u8005\u7528\u7684\u90fd\u662f\u9577\u671f\u7684 aws_secret_access_key(\u56e0\u6b64\u5b98\u65b9\u6703\u5efa\u8b70\u5b9a\u6642\u63db\uff0c\u4e0d\u904e\u4e00\u822c\u4f86\u8aaa\u6c92\u4eba\u90a3\u9ebc\u52e4\u52de ZZZ)\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS"],sidebar_position:3},i=void 0,s={permalink:"/blog/2023/04/11/Aws/aws-vpc-setting",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Aws/2023-04-11-aws-vpc-setting.md",source:"@site/blog/Aws/2023-04-11-aws-vpc-setting.md",title:"aws vpc setting introduction",description:"\u5b98\u65b9\u5efa\u8b70\u5927\u591a\u60c5\u6cc1\u90fd\u6703\u9069\u7528 IAM role\uff0c\u4f7f\u7528 IMA role \u7684\u512a\u9ede\u662f\u4ed6\u662f\u4f7f\u7528\u66ab\u6642\u6027\u6191\u8b49(\u53ef\u8a2d\u5b9a\u5230\u671f\u6642\u9593)\uff0c\u800c IAM \u4f7f\u7528\u8005\u7528\u7684\u90fd\u662f\u9577\u671f\u7684 aws_secret_access_key(\u56e0\u6b64\u5b98\u65b9\u6703\u5efa\u8b70\u5b9a\u6642\u63db\uff0c\u4e0d\u904e\u4e00\u822c\u4f86\u8aaa\u6c92\u4eba\u90a3\u9ebc\u52e4\u52de ZZZ)\u3002",date:"2023-04-11T00:00:00.000Z",formattedDate:"April 11, 2023",tags:[{label:"AWS",permalink:"/blog/tags/aws"}],readingTime:.32,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"aws vpc setting introduction",description:"\u5b98\u65b9\u5efa\u8b70\u5927\u591a\u60c5\u6cc1\u90fd\u6703\u9069\u7528 IAM role\uff0c\u4f7f\u7528 IMA role \u7684\u512a\u9ede\u662f\u4ed6\u662f\u4f7f\u7528\u66ab\u6642\u6027\u6191\u8b49(\u53ef\u8a2d\u5b9a\u5230\u671f\u6642\u9593)\uff0c\u800c IAM \u4f7f\u7528\u8005\u7528\u7684\u90fd\u662f\u9577\u671f\u7684 aws_secret_access_key(\u56e0\u6b64\u5b98\u65b9\u6703\u5efa\u8b70\u5b9a\u6642\u63db\uff0c\u4e0d\u904e\u4e00\u822c\u4f86\u8aaa\u6c92\u4eba\u90a3\u9ebc\u52e4\u52de ZZZ)\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS"],sidebar_position:3},nextItem:{title:"linux disk management command used commonly",permalink:"/blog/2023/04/11/linux-server/linux-disk-management"}},c={authorsImageUrls:[void 0]},l=[{value:"VPC \u57fa\u672c\u4ecb\u7d39",id:"vpc-\u57fa\u672c\u4ecb\u7d39",level:2},{value:"\u914d\u7f6e VPC",id:"\u914d\u7f6e-vpc",level:3}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vpc-\u57fa\u672c\u4ecb\u7d39"},"VPC \u57fa\u672c\u4ecb\u7d39"),(0,a.kt)("p",null,"\u4e00\u822c\u5730\u7aef\u8981\u8b93\u7db2\u8def\u9032\u5230 server,\u7d50\u69cb\u7c21\u55ae\u7684\u9577\u9019\u6a23"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"internet -> Router -> Switch -> server or database\n")),(0,a.kt)("p",null,"\u8981\u5efa\u7acb\u540c\u6a23\u7684\u7db2\u8def\u904b\u884c\u74b0\u5883\u5728 aws \u8981\u900f\u904e Amazon Virtual Private Cloud(VPC)"),(0,a.kt)("h3",{id:"\u914d\u7f6e-vpc"},"\u914d\u7f6e VPC"),(0,a.kt)("p",null,"\u6709 subnet\u3001Internet gateway\u3001NAT gateway"))}m.isMDXComponent=!0}}]);