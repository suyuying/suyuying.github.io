"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[9744],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={title:"aws s3 basic introduction and attach iam role to operate s3",description:"\u7c21\u55ae\u6574\u7406\uff0cS3\u985e\u578b\u4e00\u822c\u4f7f\u7528 standard,\u5982\u679c\u53ef\u80fd\u662f\u5e7e\u5c0f\u6642\u62ff\u4e00\u6b21\u7528IA\u7cfb\u5217,\u4e0d\u64d4\u5fc3\u6771\u897f\u639b\u6389\u5c31\u653e\u5728one-zone\u7701\u9322,\u5982\u679c\u662f\u9577\u671f\u5c01\u5b58\u8cc7\u6599\u5c31\u8003\u616e\u7528Glacier\u7cfb\u5217.",authors:"suyuying",tags:["AWS","S3"],sidebar_position:5},i=void 0,o={permalink:"/blog/2023/05/11/Aws/s3-basic-intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Aws/2023-05-11-s3-basic-intro.md",source:"@site/blog/Aws/2023-05-11-s3-basic-intro.md",title:"aws s3 basic introduction and attach iam role to operate s3",description:"\u7c21\u55ae\u6574\u7406\uff0cS3\u985e\u578b\u4e00\u822c\u4f7f\u7528 standard,\u5982\u679c\u53ef\u80fd\u662f\u5e7e\u5c0f\u6642\u62ff\u4e00\u6b21\u7528IA\u7cfb\u5217,\u4e0d\u64d4\u5fc3\u6771\u897f\u639b\u6389\u5c31\u653e\u5728one-zone\u7701\u9322,\u5982\u679c\u662f\u9577\u671f\u5c01\u5b58\u8cc7\u6599\u5c31\u8003\u616e\u7528Glacier\u7cfb\u5217.",date:"2023-05-11T00:00:00.000Z",formattedDate:"May 11, 2023",tags:[{label:"AWS",permalink:"/blog/tags/aws"},{label:"S3",permalink:"/blog/tags/s-3"}],readingTime:6.4,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"When you\u2019re green, you grow. When you\u2019re ripe, you rot",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"aws s3 basic introduction and attach iam role to operate s3",description:"\u7c21\u55ae\u6574\u7406\uff0cS3\u985e\u578b\u4e00\u822c\u4f7f\u7528 standard,\u5982\u679c\u53ef\u80fd\u662f\u5e7e\u5c0f\u6642\u62ff\u4e00\u6b21\u7528IA\u7cfb\u5217,\u4e0d\u64d4\u5fc3\u6771\u897f\u639b\u6389\u5c31\u653e\u5728one-zone\u7701\u9322,\u5982\u679c\u662f\u9577\u671f\u5c01\u5b58\u8cc7\u6599\u5c31\u8003\u616e\u7528Glacier\u7cfb\u5217.",authors:"suyuying",tags:["AWS","S3"],sidebar_position:5},prevItem:{title:"Basic introduction of cloudwatch and  cloudtrail",permalink:"/blog/2023/05/12/Aws/cloudwatch-cloudtrail"},nextItem:{title:"\u904b\u7dad,DevOps,SRE\u5e38\u898b\u554f\u984c",permalink:"/blog/2023/05/10/Others/interview-question"}},c={authorsImageUrls:[void 0]},u=[{value:"basic introduction",id:"basic-introduction",level:2},{value:"\u5132\u5b58\u5f62\u5f0f",id:"\u5132\u5b58\u5f62\u5f0f",level:3},{value:"S3 vs VPC",id:"s3-vs-vpc",level:3},{value:"\u5f9e VPC \u7576\u4e2d\u4f3a\u670d\u5668\u5b58\u53d6 S3 \u6a94\u6848",id:"\u5f9e-vpc-\u7576\u4e2d\u4f3a\u670d\u5668\u5b58\u53d6-s3-\u6a94\u6848",level:3},{value:"EC2 \u900f\u904e VPC endpoint \u9023\u7d50 S3",id:"ec2-\u900f\u904e-vpc-endpoint-\u9023\u7d50-s3",level:4},{value:"\u5982\u4f55\u8a2d\u5b9a role \u7d66 ec2",id:"\u5982\u4f55\u8a2d\u5b9a-role-\u7d66-ec2",level:4},{value:"S3 \u8a2d\u5b9a",id:"s3-\u8a2d\u5b9a",level:3},{value:"\u5efa\u7acb bucket",id:"\u5efa\u7acb-bucket",level:4}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"basic-introduction"},"basic introduction"),(0,a.kt)("p",null,"S3(simple storage service)\u8ca0\u8cac\u6a94\u6848\u5132\u5b58\u8ddf\u7ba1\u7406,\u4f60\u53ef\u4ee5\u7576\u4ed6\u662f\u500b NAS,\u53ea\u662f\u4e0d\u7528\u7ba1\u7406\u4f5c\u696d\u7cfb\u7d71,\u8ddf\u76e3\u63a7\u4ed6\u7684\u6a5f\u5668\u72c0\u6cc1.\n\u76f8\u6bd4\u65bc EBS(Elastic Block Store)\u9700\u8981\u8ddf EC2 \u4e00\u8d77\u4f7f\u7528,S3 \u53ea\u9700\u8981\u505a\u5230\u8cc7\u6599\u7ba1\u7406\u90e8\u5206\uff01"),(0,a.kt)("h3",{id:"\u5132\u5b58\u5f62\u5f0f"},"\u5132\u5b58\u5f62\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"standard storage:\u9ed8\u8a8d\u5132\u5b58\u985e\u578b,\u63d0\u4f9b\u9ad8\u6301\u4e45\u6027\u3001\u9ad8\u53ef\u7528\u6027\u548c\u4f4e\u5ef6\u9072\u7684\u5b58\u5132,\u9069\u5408\u5404\u7a2e\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"intelligent-tiering:\u6839\u64da\u6578\u64da\u7684\u8a2a\u554f\u6a21\u5f0f\u81ea\u52d5\u5c07\u6578\u64da\u5206\u985e\u5230\u9069\u5408\u7684\u5132\u5b58\u5c64\u7d1a\uff0c\u4ee5\u5be6\u73fe\u6210\u672c\u6548\u76ca\u548c\u6027\u80fd\u512a\u5316"),(0,a.kt)("li",{parentName:"ul"},"Glacier:\u9069\u7528\u65bc\u9700\u8981\u9577\u671f\u4fdd\u5b58\u7684\u6578\u64da\uff0c\u4f46\u5c0d\u8a2a\u554f\u901f\u5ea6\u8981\u6c42\u4e0d\u9ad8"),(0,a.kt)("li",{parentName:"ul"},"Standard-IA:IA \u9069\u7528\u65bc\u4e0d\u5e38\u5b58\u53d6\u4f46\u9700\u8981\u5728\u5fc5\u8981\u6642\u9032\u884c\u5feb\u901f\u5b58\u53d6\u7684\u8cc7\u6599,\u975e\u5e38\u9069\u5408\u9577\u671f\u5132\u5b58\u3001\u5099\u4efd\u548c\u505a\u70ba\u707d\u96e3\u5fa9\u539f\u6a94\u6848\u7684\u8cc7\u6599"),(0,a.kt)("li",{parentName:"ul"},"one Zone IA: IA \u9069\u7528\u65bc\u4e0d\u5e38\u5b58\u53d6\u4f46\u9700\u8981\u5728\u5fc5\u8981\u6642\u9032\u884c\u5feb\u901f\u5b58\u53d6\u7684\u8cc7\u6599\u3002\u5b83\u6703\u5c07\u8cc7\u6599\u5b58\u653e\u5230\u55ae\u4e00 AZ \u4e2d\uff0c\u800c\u4e14\u6210\u672c\u8f03 S3 \u6a19\u6e96 \u2013 IA \u6e1b\u5c11 20%\u3002"),(0,a.kt)("li",{parentName:"ul"},"Glacier-deep-Archieve:\u9019\u662f\u4e00\u7a2e\u5c01\u5b58\u5132\u5b58\u985e\u5225\uff0c\u53ef\u63d0\u4f9b\u6700\u4f4e\u6210\u672c\u7684\u5132\u5b58\u548c\u6beb\u79d2\u7d1a\u64f7\u53d6\u3002\u91dd\u5c0d\u4e0d\u9700\u8981\u7acb\u5373\u5b58\u53d6\u4f46\u9700\u8981\u9748\u6d3b\u4e14\u514d\u8cbb\u64f7\u53d6\u5927\u578b\u8cc7\u6599\u96c6\u7684\u5c01\u5b58\u8cc7\u6599\uff0c\u4f8b\u5982\u5099\u4efd\u6216\u707d\u96e3\u5fa9\u539f\u4f7f\u7528\u6848\u4f8b,\u8cc7\u6599\u64f7\u53d6\u6642\u9593\u70ba 12-48 \u5c0f\u6642\u3002"),(0,a.kt)("li",{parentName:"ul"},"S3 Glacier Instant Retrieval:\u5c01\u5b58\u5132\u5b58\u985e\u5225\uff0c\u53ef\u70ba\u5f88\u5c11\u5b58\u53d6\u4e14\u9700\u8981\u5728\u5e7e\u6beb\u79d2\u5167\u64f7\u53d6\u7684\u9577\u671f\u8cc7\u6599\u63d0\u4f9b\u6700\u4f4e\u6210\u672c\u7684\u5132\u5b58\u3002\u7576\u60a8\u7684\u8cc7\u6599\u6bcf\u5b63\u5ea6\u5b58\u53d6\u4e00\u6b21\u6642\uff0c\u8acb\u4f7f\u7528 S3 Glacier Instant Retrieval")),(0,a.kt)("p",null,"\u7c21\u55ae\u6574\u7406\uff0cS3 \u9078\u64c7\u4e00\u822c\u4f7f\u7528\u5c31\u7528 standard,\u5982\u679c\u53ef\u80fd\u662f\u5e7e\u5c0f\u6642\u62ff\u4e00\u6b21\u7528 IA \u7cfb\u5217,\u4e0d\u64d4\u5fc3\u6771\u897f\u8cc7\u6e90\u639b\u6389\u5c31\u653e\u5728 one-zone \u7701\u9322,\u5982\u679c\u662f\u9577\u671f\u5c01\u5b58\u8cc7\u6599\u5c31\u8003\u616e\u7528 Glacier \u7cfb\u5217."),(0,a.kt)("h3",{id:"s3-vs-vpc"},"S3 vs VPC"),(0,a.kt)("p",null,"\u56e0\u70ba S3 \u90fd\u662f\u5728 VPC \u5916\u5efa\u7acb,\u5b58\u53d6 S3 \u6709\u5169\u7a2e\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f9e\u7db2\u969b\u7db2\u8def\u5b58\u53d6 S3(\u900f\u904e url \u62ff\u6771\u897f,\u9019\u908a\u5c31\u4e0d\u4ecb\u7d39)"),(0,a.kt)("li",{parentName:"ul"},"\u5f9e VPC \u7576\u4e2d\u4f3a\u670d\u5668\u5b58\u53d6 S3 \u6a94\u6848")),(0,a.kt)("h3",{id:"\u5f9e-vpc-\u7576\u4e2d\u4f3a\u670d\u5668\u5b58\u53d6-s3-\u6a94\u6848"},"\u5f9e VPC \u7576\u4e2d\u4f3a\u670d\u5668\u5b58\u53d6 S3 \u6a94\u6848"),(0,a.kt)("p",null,"\u900f\u904e\u5efa\u7acb IAM role,\u4e26\u5c07\u9069\u7576\u7684 IAM policy \u8ce6\u7d66\u8a72 IAM Role,\u4e26\u7d93\u8a72 role \u6307\u6d3e\u7d66 ec2,\u5c31\u53ef\u4ee5\u8b93 EC2 \u900f\u904e\u66ab\u6642\u6027\u7684\u5b89\u5168\u6191\u8b49\u5411 S3 \u6216\u5176\u4ed6 AWS \u8cc7\u6e90\u505a\u8acb\u6c42\uff01"),(0,a.kt)("h4",{id:"ec2-\u900f\u904e-vpc-endpoint-\u9023\u7d50-s3"},"EC2 \u900f\u904e VPC endpoint \u9023\u7d50 S3"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/zh_tw/AmazonS3/latest/userguide/privatelink-interface-endpoints.html"},"\u5b98\u7db2")," ,\u4e3b\u8981\u512a\u52e2\u5728\u65bc\u53ef\u4ee5\u4f7f\u7528 VPC Endpoint \u5c07 EC2 \u5be6\u4f8b\u9023\u63a5\u5230 S3 \u8cc7\u6e90\uff0c\u4f7f\u5176\u53ef\u4ee5\u5728 VPC \u5167\u90e8\u8a2a\u554f S3 \u800c\u7121\u9700\u901a\u904e Internet\u3002\u9019\u6a23\u53ef\u4ee5\u63d0\u9ad8\u5b89\u5168\u6027\u4e26\u964d\u4f4e\u6d41\u91cf\u7684\u51fa\u53e3\u3002"),(0,a.kt)("h4",{id:"\u5982\u4f55\u8a2d\u5b9a-role-\u7d66-ec2"},"\u5982\u4f55\u8a2d\u5b9a role \u7d66 ec2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6253\u958b IAM \u63a7\u5236\u53f0\u4e26\u9078\u64c7\u300c\u89d2\u8272\u300d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9ede\u64ca\u300c\u5275\u5efa\u89d2\u8272\u300d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u9078\u64c7\u60a8\u7684\u4f7f\u7528\u6848\u4f8b\u4e0b\uff0c\u9078\u64c7\u300cEC2\u300d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u300c\u6b0a\u9650\u300d\u9801\u9762\u4e0a\uff0c\u9078\u64c7\u60a8\u5e0c\u671b\u70ba EC2 \u5be6\u4f8b\u63d0\u4f9b\u7684\u6b0a\u9650\uff0c\u6216\u5275\u5efa\u81ea\u5b9a\u7fa9\u7684 IAM \u7b56\u7565\u4f86\u6307\u5b9a\u60a8\u9700\u8981\u7684\u6b0a\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u300c\u6a19\u7c64\u300d\u9801\u9762\u4e0a\uff0c\u6839\u64da\u9700\u8981\u6dfb\u52a0\u6a19\u7c64\uff0c\u7136\u5f8c\u9ede\u64ca\u300c\u4e0b\u4e00\u6b65\u300d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u300c\u56de\u9867\u300d\u9801\u9762\u4e0a\uff0c\u70ba\u89d2\u8272\u6307\u5b9a\u4e00\u500b\u540d\u7a31\uff0c\u4e26\u9078\u64c7\u300c\u5275\u5efa\u89d2\u8272\u300d\u3002\n\u73fe\u5728\uff0c\u60a8\u5df2\u7d93\u5275\u5efa\u4e86\u4e00\u500b IAM \u89d2\u8272\uff0c\u63a5\u4e0b\u4f86\u60a8\u9700\u8981\u5c07\u8a72\u89d2\u8272\u9644\u52a0\u5230 EC2 \u5be6\u4f8b\u4e0a\uff1a")),(0,a.kt)("p",null,"\u6253\u958b EC2 \u63a7\u5236\u53f0\u4e26\u9078\u64c7\u60a8\u7684\u5be6\u4f8b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Actions ->Security ->modify iam role"),(0,a.kt)("li",{parentName:"ul"},"\u9078\u64c7\u60a8\u5275\u5efa\u7684 IAM \u89d2\u8272\uff0c\u7136\u5f8c\u9ede\u64ca\u300c\u4fdd\u5b58\u300d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u672c\u4e0a,\u7b49 s3 bucket \u5275\u5efa\u597d\u4ee5\u5f8c\u5c31\u5927\u529f\u544a\u6210\u62c9,\u5be6\u52d9\u4e0a\u53ef\u4ee5\u628a\u958b\u6a5f\u8981\u57f7\u884c\u7684\u8173\u672c,\u900f\u904e\u62c9\u53d6 s3 \u8cc7\u6e90\u4e26\u4f7f\u7528\uff01")),(0,a.kt)("h3",{id:"s3-\u8a2d\u5b9a"},"S3 \u8a2d\u5b9a"),(0,a.kt)("p",null,"\u4e3b\u8981\u6709\u4e09\u95dc\u6703\u8a2d\u5b9a,\u9019\u908a\u5148\u4e0d\u8a0e\u8ad6\u8a2d\u5b9a CORS \u90a3\u4e9b\u8a2d\u5b9a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u516c\u958b\u5b58\u53d6\u8a2d\u5b9a: \u9019\u500b\u5176\u5be6\u662f\u55ae\u7d14\u9632\u5446\u8a2d\u5b9a,\u9810\u8a2d\u662f\u5b8c\u5168\u7981\u6b62\u516c\u958b,\u6240\u4ee5\u901a\u5e38\u662f\u7db2\u9801\u8cc7\u6e90\u5c31\u9700\u8981\u6253\u958b,\u55ae\u7d14\u7d66\uff25\uff23 2 \u62ff\u6771\u897f\u53ef\u4ee5\u4e0d\u7528\u516c\u958b"),(0,a.kt)("li",{parentName:"ol"},"ACL of S3: \u5c0d\u5404\u985e\u4f7f\u7528\u8005\u7d66\u4e88 List or Write or Read \u7b49\u6b0a\u9650,\u4e0d\u904e\u9810\u8a2d\u662f\u6703\u6709 bucket owner enforced \u5c6c\u6027,\u8b93\u5c0d bucket \u7684\u5b58\u53d6\u55ae\u7d14\u7531 Bucket policy \u898f\u7bc4"),(0,a.kt)("li",{parentName:"ol"},"Bucket Policy: \u9019\u500b\u5c31\u662f\u985e\u4f3c IAM policy \u5236\u5b9a\u898f\u5247\u65b9\u5f0f,\u900f\u904e EPCAR \u53bb\u898f\u7bc4\u8cc7\u6e90\u5b58\u53d6.")),(0,a.kt)("h4",{id:"\u5efa\u7acb-bucket"},"\u5efa\u7acb bucket"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u767b\u5165 AWS \u7ba1\u7406\u63a7\u5236\u53f0\uff0c\u4e26\u6253\u958b S3 \u670d\u52d9\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 S3 \u63a7\u5236\u53f0\u7684\u9996\u9801\u4e0a\uff0c\u9ede\u64ca\u300c\u5275\u5efa\u5b58\u5132\u6876\u300d\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u300c\u540d\u7a31\u548c\u5340\u57df\u8a2d\u7f6e\u300d\u9801\u9762\u4e0a\uff0c\u70ba\u5b58\u5132\u6876\u6307\u5b9a\u4e00\u500b\u552f\u4e00\u7684\u540d\u7a31\u3002\u8acb\u6ce8\u610f\uff0c\u5b58\u5132\u6876\u7684\u540d\u7a31\u5728\u5168\u7403\u7bc4\u570d\u5167\u5fc5\u9808\u662f\u552f\u4e00\u7684\uff0c\u4e14\u7b26\u5408\u547d\u540d\u898f\u5247\u3002\u60a8\u9084\u53ef\u4ee5\u9078\u64c7\u5b58\u5132\u6876\u6240\u5728\u7684\u5340\u57df,\u5728\u300c\u8a2d\u7f6e\u9078\u9805\u300d\u90e8\u5206\uff0c\u60a8\u53ef\u4ee5\u9078\u64c7\u9069\u7576\u7684\u9078\u9805\uff0c\u5982\u7248\u672c\u63a7\u5236\u3001\u52a0\u5bc6\u548c\u5b58\u5132\u6876\u65e5\u8a8c\u7b49\u3002\u6839\u64da\u60a8\u7684\u9700\u6c42\u9078\u64c7\u76f8\u61c9\u7684\u8a2d\u7f6e\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u300c\u6b0a\u9650\u8a2d\u7f6e\u300d\u90e8\u5206\uff0c\u60a8\u53ef\u4ee5\u70ba\u5b58\u5132\u6876\u6307\u5b9a\u5b58\u53d6\u6b0a\u9650\u3002\u6839\u64da\u9700\u6c42\uff0c\u53ef\u4ee5\u9078\u64c7\u516c\u5171\u5b58\u53d6\u8a2d\u7f6e\u3001\u5b58\u53d6\u63a7\u5236\u6e05\u55ae\uff08ACL\uff09\u6216\u5b58\u53d6\u7b56\u7565\u3002\u4e3b\u8981\u7406\u89e3\u70ba\u5565\u6703\u6709\u4e09\u500b\u8981\u8a2d\u5b9a,\u5b58\u53d6\u7b56\u7565\u662f\u5565\uff5e")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u78ba\u8a8d\u60a8\u7684\u8a2d\u7f6e\u4e26\u9ede\u64ca\u300c\u5275\u5efa\u5b58\u5132\u6876\u300d\u3002\u5982\u679c\u8981\u6539\u5b58\u6a94\u985e\u578b,\u8981\u9ede\u5230\u6307\u5b9a\u6587\u4ef6-> actions -> Edit storage class ->\u770b\u5230\u4e00\u5806\u985e\u578b\u56c9\uff01"))))}d.isMDXComponent=!0}}]);