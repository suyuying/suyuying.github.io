"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[4100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(b,a(a({ref:t},u),{},{components:n})):i.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={title:"s3 set iam permissions for Github Actions to achieve CIBuild an AWS s3 static website",description:"\u5efa\u7acbaws\u975c\u614b\u7db2\u7ad9\u63a5\u4e0acloudfront\uff0c\u6700\u5f8c\u8a2d\u5b9a github action \u5728 code \u66f4\u65b0\u4ee5\u5f8c\u6703\u628a build \u597d\u7684\u8cc7\u6599\u7531 build \u8cc7\u6599\u593e\u5e95\u4e0b\u6771\u897f\u767c\u5230 S3.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS"]},a=void 0,s={unversionedId:"Aws/2023-03-15-s3-setting-for-ci",id:"Aws/2023-03-15-s3-setting-for-ci",title:"s3 set iam permissions for Github Actions to achieve CIBuild an AWS s3 static website",description:"\u5efa\u7acbaws\u975c\u614b\u7db2\u7ad9\u63a5\u4e0acloudfront\uff0c\u6700\u5f8c\u8a2d\u5b9a github action \u5728 code \u66f4\u65b0\u4ee5\u5f8c\u6703\u628a build \u597d\u7684\u8cc7\u6599\u7531 build \u8cc7\u6599\u593e\u5e95\u4e0b\u6771\u897f\u767c\u5230 S3.",source:"@site/docs/Aws/2023-03-15-s3-setting-for-ci.md",sourceDirName:"Aws",slug:"/Aws/2023-03-15-s3-setting-for-ci",permalink:"/docs/Aws/2023-03-15-s3-setting-for-ci",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Aws/2023-03-15-s3-setting-for-ci.md",tags:[{label:"AWS",permalink:"/docs/tags/aws"}],version:"current",frontMatter:{title:"s3 set iam permissions for Github Actions to achieve CIBuild an AWS s3 static website",description:"\u5efa\u7acbaws\u975c\u614b\u7db2\u7ad9\u63a5\u4e0acloudfront\uff0c\u6700\u5f8c\u8a2d\u5b9a github action \u5728 code \u66f4\u65b0\u4ee5\u5f8c\u6703\u628a build \u597d\u7684\u8cc7\u6599\u7531 build \u8cc7\u6599\u593e\u5e95\u4e0b\u6771\u897f\u767c\u5230 S3.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS"]},sidebar:"tutorialSidebar",previous:{title:"aws vpc setting introduction",permalink:"/docs/Aws/2023-04-11-aws-vpc-setting"},next:{title:"intro of pandas",permalink:"/docs/Data Analysis/pandas/2023-04-18-intro-of-pandas"}},l={},c=[{value:"S3 \u975c\u614b\u7db2\u7ad9\u8a2d\u5b9a",id:"s3-\u975c\u614b\u7db2\u7ad9\u8a2d\u5b9a",level:2},{value:"\u63a5 clourfront",id:"\u63a5-clourfront",level:2},{value:"lab: Provide CI access to write to S3 resources",id:"lab-provide-ci-access-to-write-to-s3-resources",level:2},{value:"lab 1.\u7528 IAM role \u914d\u5408 ODIC \u57f7\u884c CI",id:"lab-1\u7528-iam-role-\u914d\u5408-odic-\u57f7\u884c-ci",level:3},{value:"\u5efa\u7acb Identity Providers",id:"\u5efa\u7acb-identity-providers",level:4},{value:"\u5efa\u7acb\u89d2\u8272",id:"\u5efa\u7acb\u89d2\u8272",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"s3-\u975c\u614b\u7db2\u7ad9\u8a2d\u5b9a"},"S3 \u975c\u614b\u7db2\u7ad9\u8a2d\u5b9a"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6709\u6253\u7b97\u9650\u5236\u80fd\u8fd1\u4f86\u7684\u57df\u540d\uff0c\u5c31\u8acb\u4e0d\u8981\u7528\u975c\u614b\u7db2\u7ad9\uff0c\u5c31\u7528\u9810\u8a2d\u7684 RestApi \u6a21\u5f0f\uff0c\u63a5 cloudfront \u900f\u904e header \u53bb\u9650\u5b9a\u3002")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/zh_tw/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html"},"\u5b98\u7db2\u6559\u5b78\u5f88\u8a73\u7d30\uff01"),"\n\u8981\u5728 Amazon S3 \u4e0a\u8a2d\u5b9a\u975c\u614b\u7db2\u7ad9\uff0c\u5982\u679c\u662f\u4f7f\u7528 UI \u7684\u8a71\uff0c\u8acb\u6309\u7167\u4ee5\u4e0b\u6b65\u9a5f\u9032\u884c\u64cd\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"UI: \u5efa\u7acb\u65b0\u7684 S3 Bucket \u6216\u9078\u64c7\u4e00\u500b\u73fe\u6709\u7684 Bucket\u3002(Cli:",(0,o.kt)("inlineCode",{parentName:"li"},"aws s3 mb s3://me-profile --profile ford --region us-west-1")," \u5728 us-west-1 \u5efa\u7acb s3 bucket,bucket \u540d\u7a31\u662f me-profile,\u4f7f\u7528\u7684 user \u662f ford)"),(0,o.kt)("li",{parentName:"ol"},"UI:\u5728 Bucket \u5c6c\u6027\u4e2d\u555f\u7528\u975c\u614b\u7db2\u7ad9\u4e3b\u6a5f\u3002"),(0,o.kt)("li",{parentName:"ol"},"UI:\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u7d22\u5f15\u6587\u4ef6(index.html)\u548c\u932f\u8aa4\u6587\u4ef6\u3002(Cli:",(0,o.kt)("inlineCode",{parentName:"li"},"aws s3 website s3://bucket-name --index-document index.html --error-document error.html"),")"),(0,o.kt)("li",{parentName:"ol"},"UI :\u5c07\u5fc5\u8981\u7684\u6587\u4ef6\u6dfb\u52a0\u5230 Bucket \u4e2d\u3002(\u53ef\u4ee5\u7528 \u4e5f\u53ef\u4ee5\u7528 cli\nCli:",(0,o.kt)("inlineCode",{parentName:"li"},"aws s3 sync ./dist/ s3://fordserver-front --delete --profile ford"),")"),(0,o.kt)("li",{parentName:"ol"},"UI :\u914d\u7f6e Bucket \u7b56\u7565\u4ee5\u5141\u8a31\u516c\u958b\u8a2a\u554f\u6587\u4ef6\uff0c\u9810\u8a2d\u6703\u5168\u64cb\u3002"),(0,o.kt)("li",{parentName:"ol"},"UI :\u65b0\u589e\u5132\u5b58\u8caf\u9ad4\u653f\u7b56\uff0c\u5c07\u5132\u5b58\u8caf\u9ad4\u5167\u5bb9\u8a2d\u70ba\u53ef\u4f9b\u5927\u773e\u8b80\u53d6\uff0c\u628a\u9019\u500b json \u8907\u88fd\u8cbc\u4e0a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{11-12}","{11-12}":!0},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "PublicReadGetObject",\n            "Effect": "Allow",\n            "Principal": "*",\n            "Action": [\n                "s3:GetObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::Bucket-Name/*"\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"Resource \u66f4\u65b0\u70ba\u60a8\u7684\u5132\u5b58\u8caf\u9ad4\u540d\u7a31!"),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"(\u53ef\u9078)\u5982\u679c\u8981\u914d\u7f6e\u81ea\u5df1\u8cb7\u7684\u57df\u540d\uff0c \u628a cname \u8a2d\u7f6e\u4ee5\u6307\u5411 S3 \u7db2\u7ad9\u7aef\u9ede\u3002")),(0,o.kt)("p",null,"\u6309\u7167\u9019\u4e9b\u6b65\u9a5f\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Amazon S3 \u5efa\u7acb\u7c21\u55ae\u4e14\u5177\u6210\u672c\u6548\u76ca\u7684\u975c\u614b\u7db2\u7ad9\u3002"),(0,o.kt)("h2",{id:"\u63a5-clourfront"},"\u63a5 clourfront"),(0,o.kt)("p",null,"\u5efa\u7acb\u4e00\u500b\u975c\u614b\u7db2\u7ad9\u4e4b\u5f8c\uff0c\u53bb\u5efa\u7acb cloudfront\uff0c\u628a\u6d41\u91cf\u5c0e\u5230 s3\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u5efa\u7acb CloudFront \u5206\u767c\u7684\u6b65\u9a5f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u767b\u5165 AWS Management Console \u4e26\u524d\u5f80 CloudFront \u63a7\u5236\u53f0\u9801\u9762\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9ede\u64ca\u300c\u5efa\u7acb distribution\u300d\u6309\u9215\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u300c\u5efa\u7acb distribution\u300d\u9801\u9762\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5f9e\u4e0b\u62c9\u5f0f\u6e05\u55ae\u9078\u64c7\u300cWeb\u300d\u6216\u300cRTMP\u300d\u5206\u767c\u7684\u985e\u578b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c0d\u65bc Web \u5206\u767c\uff0c\u5728 Origin \u6b04\u4f4d\u4e2d\uff0c\u5f9e\u4e0b\u62c9\u5f0f\u6e05\u55ae\u9078\u64c7\u60a8\u7684 S3 \u6876\u7684 REST API \u7aef\u9ede\u6216\u8f38\u5165\u60a8\u7684 S3 \u6876\u7684\u7db2\u7ad9\u7aef\u9ede\u3002",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/zh_tw/AmazonS3/latest/userguide/WebsiteEndpoints.html#WebsiteRestEndpointDiff"},"\u7db2\u7ad9\u7aef\u9ede\u548c REST API \u7aef\u9ede\u4e4b\u9593\u7684\u4e3b\u8981\u5dee\u7570")),(0,o.kt)("li",{parentName:"ol"},"\u5728\u9810\u8a2d\u5feb\u53d6\u884c\u70ba\u4e2d\uff0c\u70ba Viewer \u5354\u8b70\u539f\u5247\u9078\u64c7 HTTP \u548c HTTPS \u6216\u91cd\u65b0\u5c0e\u5411 HTTP \u5230 HTTPS\u3002\n\u6ce8\u610f\uff1a\u9078\u64c7\u50c5\u4f7f\u7528 HTTPS \u6703\u5c01\u9396\u6240\u6709 HTTP \u8acb\u6c42\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u60a8\u6c92\u6709\u4f7f\u7528 CloudFront \u7684\u66ff\u4ee3\u57df\u540d (CNAME)\uff0c\u5247\u9078\u64c7\u300c\u5efa\u7acb\u5206\u767c\u300d\u4ee5\u5b8c\u6210\u6d41\u7a0b\u3002\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528 CNAME\uff0c\u5247\u5728\u5275\u5efa\u5206\u767c\u4e4b\u524d\u8acb\u6309\u7167\u4ee5\u4e0b\u984d\u5916\u6b65\u9a5f\u9032\u884c\u64cd\u4f5c\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5c0d\u65bc\u66ff\u4ee3\u57df\u540d (CNAME)\uff0c\u8acb\u9078\u64c7\u300c\u65b0\u589e\u9805\u76ee\u300d\uff0c\u7136\u5f8c\u8f38\u5165\u60a8\u7684\u66ff\u4ee3\u57df\u540d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5c0d\u65bc\u81ea\u8a02 SSL \u6191\u8b49\uff0c\u5f9e\u4e0b\u62c9\u5f0f\u6e05\u55ae\u4e2d\u9078\u64c7\u6db5\u84cb\u60a8\u7684 CNAME \u7684\u81ea\u8a02 SSL \u6191\u8b49\uff0c\u4ee5\u5c07\u5176\u6307\u6d3e\u7d66\u5206\u767c\u3002(\u9019\u88e1\u53ef\u4ee5\u7528 aws \u7684\u81ea\u7c3d\u6191\u8b49\u6703\u5f88\u65b9\u4fbf!)")))),(0,o.kt)("h2",{id:"lab-provide-ci-access-to-write-to-s3-resources"},"lab: Provide CI access to write to S3 resources"),(0,o.kt)("p",null,"\u76ee\u6a19: \u8a2d\u5b9a github action \u5728 code \u66f4\u65b0\u4ee5\u5f8c\u6703\u628a build \u597d\u7684\u8cc7\u6599\u7531 build \u8cc7\u6599\u593e\u5e95\u4e0b\u6771\u897f\u767c\u5230 S3."),(0,o.kt)("p",null,"\u540d\u8a5e\u5b9a\u7fa9\uff1a"),(0,o.kt)("p",null,"STS: AWS Security Token Service API,\u63d0\u4f9b\u4fe1\u4efb\u7684\u4f7f\u7528\u8005\u66ab\u6642\u5b89\u5168\u6191\u8b49\uff0c\u63a7\u5236\u5c0d\u65bc AWS \u8cc7\u6e90\u7684\u5b58\u53d6\u3002"),(0,o.kt)("p",null,"OIDC: OpenID Connect,Google \u6216 Salesforce\u3002\u5982\u679c\u60f3\u8981\u5728 OIDC \u76f8\u5bb9\u7684 IdP \u548c\u60a8\u7684 AWS \u5e33\u6236 \u4e4b\u9593\u5efa\u7acb\u4fe1\u4efb\uff0c\u8acb\u4f7f\u7528 IAM OIDC \u8eab\u5206\u63d0\u4f9b\u8005\u3002"),(0,o.kt)("p",null,"IdP: Identity Provider \u8eab\u5206\u8b58\u5225\u8cc7\u8a0a\u63d0\u4f9b\u8005"),(0,o.kt)("p",null,"SAML: Security Assertion Markup Language\uff08\u5b89\u5168\u65b7\u8a00\u6a19\u8a18\u5f0f\u8a9e\u8a00\uff09\u7684\u7e2e\u5beb\uff0c\u662f\u6307\u5728\u8eab\u5206\u8b58\u5225\u8cc7\u8a0a\u63d0\u4f9b\u8005\uff08IdP\uff09\u8207\u670d\u52d9\u63d0\u4f9b\u8005\uff08Service Provider\uff0cSP\uff09\u4e4b\u9593\u50b3\u9001\u9a57\u8b49\u4ee5\u53ca\u6388\u6b0a\u8cc7\u6599\u7684\u4e00\u7a2e\u516c\u958b\u6a19\u6e96\u3002"),(0,o.kt)("h3",{id:"lab-1\u7528-iam-role-\u914d\u5408-odic-\u57f7\u884c-ci"},"lab 1.\u7528 IAM role \u914d\u5408 ODIC \u57f7\u884c CI"),(0,o.kt)("p",null,"\u9019\u908a\u793a\u7bc4\u7528 ODIC\uff0c\u8b93 aws \u8a8d\u53ef\u7684 IdP \u4f5c\u8eab\u4efd\u9a57\u8b49\u4e26\u9023\u7dda\u5230 AWS \u5b58\u53d6\u4e26\u66f4\u65b0 S3."),(0,o.kt)("p",null,"\u5728\u5efa\u7acb IAM OIDC \u8eab\u5206\u63d0\u4f9b\u8005\u4e4b\u5f8c\uff0c\u5fc5\u9808\u5efa\u7acb\u4e00\u500b\u6216\u591a\u500b IAM \u89d2\u8272\u3002\u89d2\u8272\u662f AWS \u4e2d\u7684\u4e00\u500b\u8eab\u5206\uff0c\u4e26\u4e0d\u64c1\u6709\u81ea\u5df1\u7684\u6191\u8b49 (\u8207 IAM \u4f7f\u7528\u8005\u4e0d\u540c)\u3002\u5728\u6b64\u60c5\u6cc1\u4e2d\uff0c\u89d2\u8272\u4ee5\u52d5\u614b\u6307\u6d3e\u7d66\u806f\u5408\u8eab\u5206\u4f7f\u7528\u8005\uff0c\u800c\u8a72\u4f7f\u7528\u8005\u7531\u60a8\u7d44\u7e54\u7684\u8eab\u5206\u63d0\u4f9b\u8005 (IdP) \u9032\u884c\u9a57\u8b49\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u9806\u5e8f:\n\u5efa\u7acbIdentity Providers->\u5efa\u7acb\u89d2\u8272->\u81ea\u8a02\u4fe1\u4efb\u653f\u7b56->\u9023\u7d50\u8a31\u53ef\u653f\u7b56->\u8907\u88fd\u5efa\u7acb\u7684\u89d2\u8272ARN->\u8a2d\u5b9agithub CI/CD\u7684secret->\u5efa\u7acbyml\u6a94\n")),(0,o.kt)("h4",{id:"\u5efa\u7acb-identity-providers"},"\u5efa\u7acb Identity Providers"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"AWS console \u67e5\u8a62 IAM\uff0c\u5de6\u65b9 nav \u6b04\u4f4d\u9078\u4f9b\u61c9\u5546\u985e\u578b\u5f8c, \u9078 OpenID Connect."),(0,o.kt)("li",{parentName:"ol"},"\u4f9b\u61c9\u5546 URL, \u8f38\u5165 ",(0,o.kt)("a",{parentName:"li",href:"https://token.actions.githubusercontent.com"},"https://token.actions.githubusercontent.com")),(0,o.kt)("li",{parentName:"ol"},'\u6309"\u53d6\u5f97\u6307\u7d0b"'),(0,o.kt)("li",{parentName:"ol"},"\u5c0d\u8c61, \u8f38\u5165 sts.amazonaws.com\n\u4ee5\u4e0a\u5efa\u7acb\u4e4b\u5f8c\uff0carn:aws:iam::930209118237:oidc-provider/token.actions.githubusercontent.com"),(0,o.kt)("li",{parentName:"ol"},"\u628a ARN \u8907\u88fd\u6e96\u5099\u5efa\u7acb role.")),(0,o.kt)("h4",{id:"\u5efa\u7acb\u89d2\u8272"},"\u5efa\u7acb\u89d2\u8272"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u81ea\u8a02\u4fe1\u4efb\u653f\u7b56->\u9023\u7d50\u8a31\u53ef\n")),(0,o.kt)("p",null,"\u6388\u6b0a \u806f\u5408\u4f7f\u7528\u8005\u4e3b\u9ad4\uff0c\u7d66 github repo \u662f USERNAME/YOUR_REPO \u7684 pull or main \u53ef\u4ee5\u7528\u6b64\u89d2\u8272\uff0c\u4ee5\u4e0b\u8a18\u5f97\u66ff\u63db\u6210\u4f60\u7684 repo \u540d\u7a31\u6b50\uff01"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u4fe1\u4efb\u653f\u7b56(\u95dc\u4fc2)"',title:'"\u4fe1\u4efb\u653f\u7b56(\u95dc\u4fc2)"'},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Principal": {\n                "Federated": "arn:aws:iam::9302XXX18237:oidc-provider/token.actions.githubusercontent.com"\n            },\n            "Action": "sts:AssumeRoleWithWebIdentity",\n            "Condition": {\n                "StringEquals": {\n                    "token.actions.githubusercontent.com:sub": [\n                        "repo:USERNAME/YOUR_REPO:pull_request",\n                        "repo:USERNAME/YOUR_REPO:ref:refs/heads/main"\n                    ],\n                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"\n                }\n            }\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"\u56e0\u70ba S3 \u8a31\u53ef\u8a2d\u5b9a\u771f\u7684\u592a\u591a\u4e86\uff0c\u9019\u908a\u4e3b\u8981\u5c31\u52fe\u9078 list \u8ddf\u5e7e\u500b\u6703\u7528\u5230\u7684 delete/get/put object\uff0c\u8a31\u53ef\u8a2d\u5b9a\u53c3\u8003",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/zh/enterprise-server@3.8/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage#%E4%BD%BF%E7%94%A8%E8%AE%BF%E9%97%AE%E5%AF%86%E9%92%A5%E9%80%9A%E8%BF%87-amazon-s3-%E5%AD%98%E5%82%A8%E5%90%AF%E7%94%A8-github-actions"},"\u5b98\u7db2\u9019\u7bc7"),"\u3002\u5728\u770b\u8a31\u53ef\u904e\u7a0b\u4e2d\u6709\u770b\u5230 AWS cloudtrail \u63d0\u4f9b\u7684 IAM \u7d00\u9304\u89e3\u6790\uff0c\u5e6b\u4f60\u5206\u6790\u4e4b\u524d\u7684\u64cd\u4f5c\u4e26\u7528\u6700\u5c0f\u6b0a\u9650\u53bb\u8a2d\u5b9a(\u9019\u500b\u60c5\u5883\u5b98\u7db2\u6709\u8209\u4f8b: \u958b\u767c\u6642\u53ef\u80fd\u6703\u628a\u6b0a\u9650\u5168\u958b\uff0c\u4f46\u5be6\u969b\u4e0a PROD \u74b0\u5883\u5c31\u8981\u9650\u5236\u6b0a\u9650\uff0c\u53ef\u4ee5\u900f\u904e cloudtrail \u53bb\u5206\u6790\u4e4b\u524d\u6240\u6709\u5c0d S3 \u64cd\u4f5c\u6709\u7528\u5230\u7684\u6b0a\u9650\uff0c\u4e26\u8a2d\u5b9a\u4e4b)\uff0c\u4f46\u56e0\u70ba\u9084\u6c92\u5be6\u4f5c\uff0c\u6240\u4ee5\u5c31\u5148\u9019\u6a23\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u8a31\u53ef\u653f\u7b56for S3 CI/CD"',title:'"\u8a31\u53ef\u653f\u7b56for',S3:!0,'CI/CD"':!0},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "s3:PutObject",\n                "s3:GetObject",\n                "s3:ListBucketMultipartUploads",\n                "s3:ListMultipartUploadParts",\n                "s3:AbortMultipartUpload",\n                "s3:DeleteObject",\n                "s3:ListBucket"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"github \u8a2d\u5b9a\u6a94\uff0c\u4ee5\u4e0b\u6703\u57f7\u884c build\uff0c\u9a57\u8b49 aws,\u628a\u7de8\u8b6f\u5f8c\u8cc7\u6599\u63a8\u5230 s3\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"permissions \u4e00\u5b9a\u8981\u8a2d\u5b9a\u6210 write\uff0c\u9019\u6a23\u8a2d\u5b9a\u662f\u8981\u8a2d\u5beb\u5165\u6b0a\u9650\u624d\u80fd\u8acb\u6c42 OpenID Connect JWT \u4ee4\u724c\u3002\u6c92\u8a2d\u5b9a\u5c31\u6703\u8dd1\u51fa\u4ee5\u4e0b\u5831\u932f\nError: Credentials could not be loaded, please check your action inputs: Could not load credentials from any providers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title=".github/workflows/deploy.yml" {10-11}',title:'".github/workflows/deploy.yml"',"{10-11}":!0},"name: Deploy to GitHub Pages\n\non:\n  push:\n    branches:\n      - main\n    # Review gh actions docs if you want to further define triggers, paths, etc\n    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on\n\npermissions:\n  id-token: write\njobs:\n  deploy:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 18\n          cache: yarn\n\n      - name: Install dependencies\n        run: yarn install --frozen-lockfile\n      - name: Build website\n        run: yarn build\n      - name: Configure AWS Credentials\n        uses: aws-actions/configure-aws-credentials@v1\n        with:\n          aws-region: ap-northeast-3\n          role-to-assume: ${{ secrets.PROD_DEPLOY_ROLE }}\n          role-session-name: OIDCSession\n      - name: Deploy to S3 bucket\n        run: aws s3 sync ./build/ s3://yours3 --delete\n\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u53c3\u8003\u8cc7\u8a0a"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/zh/enterprise-server@3.8/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage"},"Enabling GitHub Actions with Amazon S3 storage"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.eliasbrange.dev/posts/secure-aws-deploys-from-github-actions-with-oidc/#2-add-github-as-an-identity-provider"},"Secure AWS deploys from GitHub Actions with OIDC"))))))}d.isMDXComponent=!0}}]);