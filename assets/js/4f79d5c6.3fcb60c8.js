"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[6131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"s3 set iam permissions for Github Actions to achieve CIBuild an AWS s3 static website",description:"\u5efa\u7acbaws\u975c\u614b\u7db2\u7ad9\u63a5\u4e0acloudfront\uff0c\u6700\u5f8c\u8a2d\u5b9a github action \u5728 code \u66f4\u65b0\u4ee5\u5f8c\u6703\u628a build \u597d\u7684\u8cc7\u6599\u7531 build \u8cc7\u6599\u593e\u5e95\u4e0b\u6771\u897f\u767c\u5230 S3.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS","github action","CICD"]},a=void 0,s={permalink:"/blog/2023/03/15/Aws/s3-setting-for-ci",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Aws/2023-03-15-s3-setting-for-ci.md",source:"@site/blog/Aws/2023-03-15-s3-setting-for-ci.md",title:"s3 set iam permissions for Github Actions to achieve CIBuild an AWS s3 static website",description:"\u5efa\u7acbaws\u975c\u614b\u7db2\u7ad9\u63a5\u4e0acloudfront\uff0c\u6700\u5f8c\u8a2d\u5b9a github action \u5728 code \u66f4\u65b0\u4ee5\u5f8c\u6703\u628a build \u597d\u7684\u8cc7\u6599\u7531 build \u8cc7\u6599\u593e\u5e95\u4e0b\u6771\u897f\u767c\u5230 S3.",date:"2023-03-15T00:00:00.000Z",formattedDate:"March 15, 2023",tags:[{label:"AWS",permalink:"/blog/tags/aws"},{label:"github action",permalink:"/blog/tags/github-action"},{label:"CICD",permalink:"/blog/tags/cicd"}],readingTime:8.69,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"s3 set iam permissions for Github Actions to achieve CIBuild an AWS s3 static website",description:"\u5efa\u7acbaws\u975c\u614b\u7db2\u7ad9\u63a5\u4e0acloudfront\uff0c\u6700\u5f8c\u8a2d\u5b9a github action \u5728 code \u66f4\u65b0\u4ee5\u5f8c\u6703\u628a build \u597d\u7684\u8cc7\u6599\u7531 build \u8cc7\u6599\u593e\u5e95\u4e0b\u6771\u897f\u767c\u5230 S3.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS","github action","CICD"]},prevItem:{title:"A small issue with curl related to using different versions of curl between IDE and local terminal",permalink:"/blog/2023/03/16/linux-server/little-curl-problem"},nextItem:{title:"s3 set iam permissions for Github Actions to achieve CIBuild an AWS s3 static website",permalink:"/blog/2023/03/15/github-action/s3-setting-for-ci"}},l={authorsImageUrls:[void 0]},c=[{value:"S3 \u975c\u614b\u7db2\u7ad9\u8a2d\u5b9a",id:"s3-\u975c\u614b\u7db2\u7ad9\u8a2d\u5b9a",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"s3-\u975c\u614b\u7db2\u7ad9\u8a2d\u5b9a"},"S3 \u975c\u614b\u7db2\u7ad9\u8a2d\u5b9a"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6709\u6253\u7b97\u9650\u5236\u80fd\u8fd1\u4f86\u7684\u57df\u540d\uff0c\u5c31\u8acb\u4e0d\u8981\u7528\u975c\u614b\u7db2\u7ad9\uff0c\u5c31\u7528\u9810\u8a2d\u7684 RestApi \u6a21\u5f0f\uff0c\u63a5 cloudfront \u900f\u904e header \u53bb\u9650\u5b9a\u3002")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/zh_tw/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html"},"\u5b98\u7db2\u6559\u5b78\u5f88\u8a73\u7d30\uff01"),"\n\u8981\u5728 Amazon S3 \u4e0a\u8a2d\u5b9a\u975c\u614b\u7db2\u7ad9\uff0c\u5982\u679c\u662f\u4f7f\u7528 UI \u7684\u8a71\uff0c\u8acb\u6309\u7167\u4ee5\u4e0b\u6b65\u9a5f\u9032\u884c\u64cd\u4f5c\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"UI: \u5efa\u7acb\u65b0\u7684 S3 Bucket \u6216\u9078\u64c7\u4e00\u500b\u73fe\u6709\u7684 Bucket\u3002(Cli:",(0,i.kt)("inlineCode",{parentName:"li"},"aws s3 mb s3://me-profile --profile ford --region us-west-1")," \u5728 us-west-1 \u5efa\u7acb s3 bucket,bucket \u540d\u7a31\u662f me-profile,\u4f7f\u7528\u7684 user \u662f ford)"),(0,i.kt)("li",{parentName:"ol"},"UI:\u5728 Bucket \u5c6c\u6027\u4e2d\u555f\u7528\u975c\u614b\u7db2\u7ad9\u4e3b\u6a5f\u3002"),(0,i.kt)("li",{parentName:"ol"},"UI:\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u7d22\u5f15\u6587\u4ef6(index.html)\u548c\u932f\u8aa4\u6587\u4ef6\u3002(Cli:",(0,i.kt)("inlineCode",{parentName:"li"},"aws s3 website s3://bucket-name --index-document index.html --error-document error.html"),")"),(0,i.kt)("li",{parentName:"ol"},"UI :\u5c07\u5fc5\u8981\u7684\u6587\u4ef6\u6dfb\u52a0\u5230 Bucket \u4e2d\u3002(\u53ef\u4ee5\u7528 \u4e5f\u53ef\u4ee5\u7528 cli\nCli:",(0,i.kt)("inlineCode",{parentName:"li"},"aws s3 sync ./dist/ s3://fordserver-front --delete --profile ford"),")"),(0,i.kt)("li",{parentName:"ol"},"UI :\u914d\u7f6e Bucket \u7b56\u7565\u4ee5\u5141\u8a31\u516c\u958b\u8a2a\u554f\u6587\u4ef6\uff0c\u9810\u8a2d\u6703\u5168\u64cb\u3002"),(0,i.kt)("li",{parentName:"ol"},"UI :\u65b0\u589e\u5132\u5b58\u8caf\u9ad4\u653f\u7b56\uff0c\u5c07\u5132\u5b58\u8caf\u9ad4\u5167\u5bb9\u8a2d\u70ba\u53ef\u4f9b\u5927\u773e\u8b80\u53d6\uff0c\u628a\u9019\u500b json \u8907\u88fd\u8cbc\u4e0a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{11-12}","{11-12}":!0},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "PublicReadGetObject",\n            "Effect": "Allow",\n            "Principal": "*",\n            "Action": [\n                "s3:GetObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::Bucket-Name/*"\n            ]\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"Resource \u66f4\u65b0\u70ba\u60a8\u7684\u5132\u5b58\u8caf\u9ad4\u540d\u7a31!"))}m.isMDXComponent=!0}}]);