"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[5191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),i=n(7294),r=n(3905);const s={title:"aws iam setting introduction",description:"\u5b98\u65b9\u5efa\u8b70\u5927\u591a\u60c5\u6cc1\u90fd\u6703\u9069\u7528 IAM role\uff0c\u4f7f\u7528 IMA role \u7684\u512a\u9ede\u662f\u4ed6\u662f\u4f7f\u7528\u66ab\u6642\u6027\u6191\u8b49(\u53ef\u8a2d\u5b9a\u5230\u671f\u6642\u9593)\uff0c\u800c IAM \u4f7f\u7528\u8005\u7528\u7684\u90fd\u662f\u9577\u671f\u7684 aws_secret_access_key(\u56e0\u6b64\u5b98\u65b9\u6703\u5efa\u8b70\u5b9a\u6642\u63db\uff0c\u4e0d\u904e\u4e00\u822c\u4f86\u8aaa\u6c92\u4eba\u90a3\u9ebc\u52e4\u52de ZZZ)\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS"],sidebar_position:1},l=void 0,o={unversionedId:"Aws/2023-03-25-aws-iam-setting",id:"Aws/2023-03-25-aws-iam-setting",title:"aws iam setting introduction",description:"\u5b98\u65b9\u5efa\u8b70\u5927\u591a\u60c5\u6cc1\u90fd\u6703\u9069\u7528 IAM role\uff0c\u4f7f\u7528 IMA role \u7684\u512a\u9ede\u662f\u4ed6\u662f\u4f7f\u7528\u66ab\u6642\u6027\u6191\u8b49(\u53ef\u8a2d\u5b9a\u5230\u671f\u6642\u9593)\uff0c\u800c IAM \u4f7f\u7528\u8005\u7528\u7684\u90fd\u662f\u9577\u671f\u7684 aws_secret_access_key(\u56e0\u6b64\u5b98\u65b9\u6703\u5efa\u8b70\u5b9a\u6642\u63db\uff0c\u4e0d\u904e\u4e00\u822c\u4f86\u8aaa\u6c92\u4eba\u90a3\u9ebc\u52e4\u52de ZZZ)\u3002",source:"@site/docs/Aws/2023-03-25-aws-iam-setting.md",sourceDirName:"Aws",slug:"/Aws/2023-03-25-aws-iam-setting",permalink:"/docs/Aws/2023-03-25-aws-iam-setting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Aws/2023-03-25-aws-iam-setting.md",tags:[{label:"AWS",permalink:"/docs/tags/aws"}],version:"current",sidebarPosition:1,frontMatter:{title:"aws iam setting introduction",description:"\u5b98\u65b9\u5efa\u8b70\u5927\u591a\u60c5\u6cc1\u90fd\u6703\u9069\u7528 IAM role\uff0c\u4f7f\u7528 IMA role \u7684\u512a\u9ede\u662f\u4ed6\u662f\u4f7f\u7528\u66ab\u6642\u6027\u6191\u8b49(\u53ef\u8a2d\u5b9a\u5230\u671f\u6642\u9593)\uff0c\u800c IAM \u4f7f\u7528\u8005\u7528\u7684\u90fd\u662f\u9577\u671f\u7684 aws_secret_access_key(\u56e0\u6b64\u5b98\u65b9\u6703\u5efa\u8b70\u5b9a\u6642\u63db\uff0c\u4e0d\u904e\u4e00\u822c\u4f86\u8aaa\u6c92\u4eba\u90a3\u9ebc\u52e4\u52de ZZZ)\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Aws",permalink:"/docs/category/aws"},next:{title:"s3 set iam permissions for Github Actions to achieve CIBuild an AWS s3 static website",permalink:"/docs/Aws/2023-03-15-s3-setting-for-ci"}},c={},p=[{value:"what is aws IAM",id:"what-is-aws-iam",level:2},{value:"typical composition",id:"typical-composition",level:2},{value:"Policy",id:"policy",level:3},{value:"IAM identities",id:"iam-identities",level:3},{value:"\u6839\u4f7f\u7528\u8005",id:"\u6839\u4f7f\u7528\u8005",level:4},{value:"IAM \u4f7f\u7528\u8005",id:"iam-\u4f7f\u7528\u8005",level:4},{value:"IAM \u4f7f\u7528\u8005\u7fa4\u7d44",id:"iam-\u4f7f\u7528\u8005\u7fa4\u7d44",level:4},{value:"IAM \u89d2\u8272",id:"iam-\u89d2\u8272",level:4},{value:"\u66ab\u6642\u6027\u6191\u8b49",id:"\u66ab\u6642\u6027\u6191\u8b49",level:4},{value:"\u4f55\u6642\u4f7f\u7528 IAM Identity Center \u4f7f\u7528\u8005\uff1f",id:"\u4f55\u6642\u4f7f\u7528-iam-identity-center-\u4f7f\u7528\u8005",level:4},{value:"\u4f55\u6642\u5efa\u7acb IAM \u4f7f\u7528\u8005 (\u800c\u4e0d\u662f\u89d2\u8272)",id:"\u4f55\u6642\u5efa\u7acb-iam-\u4f7f\u7528\u8005-\u800c\u4e0d\u662f\u89d2\u8272",level:4},{value:"\u4f55\u6642\u5efa\u7acb IAM \u89d2\u8272 (\u800c\u4e0d\u662f\u4f7f\u7528\u8005)",id:"\u4f55\u6642\u5efa\u7acb-iam-\u89d2\u8272-\u800c\u4e0d\u662f\u4f7f\u7528\u8005",level:4},{value:"Brief summary",id:"brief-summary",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-aws-iam"},"what is aws IAM"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/service_code_examples.html"},"\u4ec0\u9ebc\u662f IAM")," aws \u5b98\u7db2\u7684\u8cc7\u8a0a\u4e00\u822c\u90fd\u5beb\u5f97\u6eff\u68d2\u7684\uff0c\u672c\u6587\u51fa\u8655\u4e3b\u8981\u662f\u53c3\u8003\u5b98\u7db2\u8cc7\u8a0a\u505a\u6574\u7406\uff0c\u56e0\u70ba\u7ba1\u7406\u4e0a\u7d93\u9a57\u53ea\u9650\u65bc\u81ea\u5df1\u7684\u74b0\u5883\u7528\u7684 s3,CI \u7b49\u7b49\uff0c\u6240\u4ee5\u6253\u7b97\u8d81\u9019\u500b\u6a5f\u6703\u6aa2\u8996\u4e4b\u524d\u8a2d\u5b9a\u7684 iAM \u6709\u6c92\u6709\u554f\u984c\uff0c\u7576\u7136\uff0c\u6211\u76f8\u4fe1\u9019\u53ea\u662f\u904e\u7a0b\uff0c\u96a8\u8457\u770b\u904e\u7684\u8cc7\u8a0a\u8ddf\u4e8b\u60c5\u8d8a\u591a\uff0c\u6703\u5f97\u5230\u4e0d\u540c\u6216\u8005\u591a\u500b\u7b54\u6848\uff0c\u7e3d\u4e4b\uff0c\u5c31\u5148\u5f9e\u9019\u4e00\u6b65\u958b\u59cb\u5427\uff01"),(0,r.kt)("p",null,"AWS Identity and Access Management (IAM) \u7528\u9014\uff1a\u5b89\u5168\u5730\u63a7\u5236\u5c0d Amazon Web Services (AWS) \u548c\u5e33\u6236\u8cc7\u6e90\u7684\u5b58\u53d6\u3002\u4f7f\u7528 IAM \u70ba\u4f7f\u7528\u8005\u548c\u89d2\u8272\u7b49\u8eab\u5206\u63d0\u4f9b\u60a8\u7684\u5e33\u6236\u4e2d\u8cc7\u6e90\u7684\u5b58\u53d6\u6b0a\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f IAM \u5b89\u5168\u67b6\u69cb\u53c3\u8003\u7db2\u8def\u8cc7\u6e90\uff0c\u4e3b\u8981\u7d44\u6210\u5982\u5716"),(0,r.kt)(i.Fragment,null,(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{src:n(1257).Z,alt:"malta_street png"})),(0,r.kt)("div",{className:"text-center"},(0,r.kt)("a",{href:"https://hackmd.io/@study-group-aws-book/HkhQ2BlRP",target:"_blank"},"\u672c\u5716\u53c3\u8003\u8b80\u66f8\u6703-\u5927\u8a71AWS\u96f2\u7aef\u7d50\u69cb"))),(0,r.kt)("h2",{id:"typical-composition"},"typical composition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Policy -> IAM identities(IAM group or Role)\n")),(0,r.kt)("h3",{id:"policy"},"Policy"),(0,r.kt)("p",null,"\u683c\u5f0f: \u7948\u4f7f\uff0b\u4e3b\u8a5e(",(0,r.kt)("a",{parentName:"p",href:"#iam-identities"},"IAM identities"),")\uff0b\u689d\u4ef6\uff0b\u52d5\u8a5e(optional)\uff0b\u8cc7\u6e90\u53d7\u8a5e (\u5c0d\u61c9\uff1a\u5141\u8a31 Don \u5967\u4e01\u7834\u95dc\u4e00\u767e\u6b21\u6642 \u5403 \u9ea5\u7576\u52de)"),(0,r.kt)("p",null,"\u5c0d\u61c9 Aws Json(\u628a\u4e0a\u9762\u8209\u4f8b\u66f4\u63db\u800c\u5df2)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Effect : "\u5141\u8a31"\nPrincipal: "Don"\nCondition:"\u5967\u4e01\u7834\u95dc\u4e00\u767e\u6b21\u6642"\nAction: "\u5403"\nResource :"\u9ea5\u7576\u52de"\n')),(0,r.kt)("p",null,"\u6b63\u5f0f\u7248 Aws Json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "PublicReadGetObject",\n            "Effect": "Allow",\n            "Principal": "*",\n            "Action": "s3:GetObject",\n            "Resource": "arn:aws:s3:::myresume-for-zaxx/*"\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"iam-identities"},"IAM identities"),(0,r.kt)("p",null,"\u5171\u6709\u6839\u4f7f\u7528\u8005\u3001IAM \u4f7f\u7528\u8005\u3001IAM \u4f7f\u7528\u8005\u7fa4\u7d44\u3001IAM \u89d2\u8272\u3001\u66ab\u6642\u6027\u6191\u8b49"),(0,r.kt)("h4",{id:"\u6839\u4f7f\u7528\u8005"},"\u6839\u4f7f\u7528\u8005"),(0,r.kt)("p",null,"Root \u53ef\u4ee5\u5b58\u53d6\u6240\u6709 aws \u8cc7\u6e90,\u4e14\u6b0a\u9650\u6700\u9ad8,aws \u5efa\u8b70\u65e5\u5e38\u5de5\u4f5c\u4e8b\u9805\u90fd\u7528\u4e00\u822c\u4f7f\u7528\u8005,\u9664\u975e\u662f\u4ee5\u4e0b\u5de5\u4f5c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u4e00\u822c\u4f7f\u7528\u8005\u6b0a\u9650"),(0,r.kt)("li",{parentName:"ul"},"\u505c\u7528 AWS \u5e33\u6236"),(0,r.kt)("li",{parentName:"ul"},"\u5e33\u6236\u82b1\u8cbb\u7ba1\u7406")),(0,r.kt)("p",null,"\u66f4\u591a\u8cc7\u6599\u53ef\u4ee5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/accounts/latest/reference/root-user-tasks.html"},"\u5b98\u7db2\u9019\u7bc7")),(0,r.kt)("h4",{id:"iam-\u4f7f\u7528\u8005"},"IAM \u4f7f\u7528\u8005"),(0,r.kt)("p",null,"\u5177\u5099\u55ae\u4e00\u4eba\u54e1\u6216\u61c9\u7528\u7a0b\u5f0f\u7684\u7279\u5b9a\u8a31\u53ef\uff0cAWS \u5efa\u8b70\u4eba\u54e1\u91d1\u9470\u9577\u671f\u6191\u8b49\u8005\u8981\u5b9a\u671f\u66f4\u63db\uff0c\u800c\u76f8\u6bd4\u9577\u671f\u6191\u8b49\u66f4\u5efa\u8b70\u7528\u66ab\u6642\u6027\u6191\u8b49."),(0,r.kt)("h4",{id:"iam-\u4f7f\u7528\u8005\u7fa4\u7d44"},"IAM \u4f7f\u7528\u8005\u7fa4\u7d44"),(0,r.kt)("p",null,"\u4f7f\u7528\u8005\u96c6\u5408\u7684\u8eab\u4efd\uff0c\u900f\u904e IAM \u4f7f\u7528\u8005\u7fa4\u7d44\u7ba1\u7406 IAM \u4f7f\u7528\u8005"),(0,r.kt)("h4",{id:"iam-\u89d2\u8272"},"IAM \u89d2\u8272"),(0,r.kt)("p",null,"\u5b83\u985e\u4f3c IAM \u4f7f\u7528\u8005\uff0c\u4f46\u4e0d\u8207\u7279\u5b9a\u7684\u4eba\u54e1\u76f8\u95dc\u806f\u3002\u89d2\u8272\u7684\u76ee\u7684\u662f\u8b93\u9700\u8981\u5b83\u7684\u4efb\u4f55\u4eba\u53ef\u4ee3\u5165\uff0c\u7406\u89e3\u4e0a\u5c31\u50cf\u662f\u500b\u5177\u6709\u6b0a\u9650\u7684\u6709\u6642\u6548\u6027 token\uff0c\u53ef\u4ee5\u7d66 code \u6216\u4f7f\u7528\u8005\u6216\u8cc7\u6e90\u4f7f\u7528\u3002"),(0,r.kt)("h4",{id:"\u66ab\u6642\u6027\u6191\u8b49"},"\u66ab\u6642\u6027\u6191\u8b49"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/best-practices.html"},"\u6700\u4f73\u5be6\u52d9"),"\u5b83\u985e\u4f3c IAM \u4f7f\u7528\u8005\uff0c\u4f46\u4e0d\u8207\u7279\u5b9a\u7684\u4eba\u54e1\u76f8\u95dc\u806f"),(0,r.kt)("h4",{id:"\u4f55\u6642\u4f7f\u7528-iam-identity-center-\u4f7f\u7528\u8005"},"\u4f55\u6642\u4f7f\u7528 IAM Identity Center \u4f7f\u7528\u8005\uff1f"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/id.html#id_temp-creds"},"\u5b98\u65b9\u56de\u8986")),(0,r.kt)("p",null,"\u770b\u8d77\u4f86\u662f\u53ef\u4ee5\u900f\u904e\u55ae\u4e00\u767b\u5165\uff0c\u53bb\u53d6\u5f97\u5728\u6240\u6709\u5e33\u6236\u4e2d\u6240\u6388\u7684\u6b0a\u9650"),(0,r.kt)("h4",{id:"\u4f55\u6642\u5efa\u7acb-iam-\u4f7f\u7528\u8005-\u800c\u4e0d\u662f\u89d2\u8272"},"\u4f55\u6642\u5efa\u7acb IAM \u4f7f\u7528\u8005 (\u800c\u4e0d\u662f\u89d2\u8272)"),(0,r.kt)("p",null,"\u5efa\u8b70\u60a8\u50c5\u5c07 IAM \u4f7f\u7528\u8005\u7528\u65bc\u806f\u5408\u8eab\u5206\u4f7f\u7528\u8005\u4e0d\u652f\u63f4\u7684\u4f7f\u7528\u6848\u4f8b\u3002\u806f\u5408\u8eab\u5206\u4f7f\u7528\u8005(federating exist user)\u662f\u900f\u904e\u5916\u90e8\u8cc7\u6e90\u53bb\u9023 AWS \u4e0a\u6642\uff0c\u900f\u904e IAM role \u5206\u914d\u8cc7\u6e90\u53d6\u5f97\u6b0a\u9650\uff0c\u914d\u5408\u8ddf ldP(external identity provider)ex.FB,google \u9a57\u8b49\uff0c\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u53d6\u7684\u77ed\u671f\u6191\u8b49\u3002"),(0,r.kt)("h4",{id:"\u4f55\u6642\u5efa\u7acb-iam-\u89d2\u8272-\u800c\u4e0d\u662f\u4f7f\u7528\u8005"},"\u4f55\u6642\u5efa\u7acb IAM \u89d2\u8272 (\u800c\u4e0d\u662f\u4f7f\u7528\u8005)"),(0,r.kt)("p",null,"\u7a0b\u5f0f\u7aef\u5411 aws \u8cc7\u6e90\u8acb\u6c42\u3001aws \u670d\u52d9\u9593\u4e32\u63a5\u3001\u4ee5\u53ca\u516c\u53f8\u7684 single sign on(\u7cfb\u7d71\u6709\u63a1\u7528 SAML 2.0 \u6216\u5efa\u7acb\u4e26\u4f7f\u7528\u81ea\u8a02\u4ee3\u7406\u4f3a\u670d\u5668\uff0c\u5c07\u4f7f\u7528\u8005\u8eab\u5206\u5f9e\u4f01\u696d\u8f49\u63db\u70ba\u63d0\u4f9b\u66ab\u6642 AWS \u5b89\u5168\u6191\u8b49\u7684 IAM \u89d2\u8272)"),(0,r.kt)("h3",{id:"brief-summary"},"Brief summary"),(0,r.kt)("p",null,"\u5b98\u65b9\u5efa\u8b70\u5927\u591a\u60c5\u6cc1\u90fd\u6703\u9069\u7528 IAM role\uff0c\u4f7f\u7528 IMA role \u7684\u512a\u9ede\u662f\u4ed6\u662f\u4f7f\u7528\u66ab\u6642\u6027\u6191\u8b49(\u53ef\u8a2d\u5b9a\u5230\u671f\u6642\u9593)\uff0c\u800c IAM \u4f7f\u7528\u8005\u7528\u7684\u90fd\u662f\u9577\u671f\u7684 aws_secret_access_key(\u56e0\u6b64\u5b98\u65b9\u6703\u5efa\u8b70\u5b9a\u6642\u63db\uff0c\u4e0d\u904e\u4e00\u822c\u4f86\u8aaa\u6c92\u4eba\u90a3\u9ebc\u52e4\u52de ZZZ)\u3002"),(0,r.kt)("p",null,"\u5b98\u7db2\u63d0\u5de5\u66ab\u6642\u6027\u6191\u8b49\u7684\u512a\u9ede"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u5fc5\u96a8\u61c9\u7528\u7a0b\u5f0f\u6563\u767c\u6216\u5167\u5d4c\u9577\u671f AWS \u5b89\u5168\u6191\u8b49:\u8209\u4f8b\u4f86\u8aaa\uff0c\u516c\u53f8\u6709\u500b\u8173\u672c\u62ff\u4f86\u662f\u62ff\u4f86\u66f4\u65b0\u524d\u7aef\u8cc7\u6e90\u7684\uff0c\u5982\u679c\u4f7f\u7528 IAM \u4f7f\u7528\u8005\uff0c\u90a3\u4ed6\u7684\u79c1 key \u5c31\u6703\u8ddf\u8457\u9019\u96bb\u8173\u672c\u5230\u8655\u8dd1\uff0c\u4f46\u7528 role \u7684\u8a71\u4e0d\u7528\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u63d0\u4f9b AWS \u8cc7\u6e90\u5b58\u53d6\u7d66\u4f7f\u7528\u8005\uff0c\u800c\u4e0d\u5fc5\u70ba\u5176\u5b9a\u7fa9 AWS \u8eab\u5206\u3002\u66ab\u6642\u6191\u8b49\u662f",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/zh_tw/IAM/latest/UserGuide/id_roles.html"},"\u89d2\u8272\u548c\u806f\u5408\u8eab\u5206"),"\u7684\u57fa\u790e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u66ab\u6642\u6027\u5b89\u5168\u6191\u8b49\u7684\u5b58\u7559\u671f\u6709\u9650\uff0c\u56e0\u6b64\u7576\u4e0d\u518d\u9700\u8981\u6642\uff0c\u60a8\u4e0d\u9700\u8981\u8f2a\u63db\u5b83\u5011\u6216\u660e\u78ba\u4e88\u4ee5\u64a4\u92b7"))),(0,r.kt)("p",null,"\u4e0d\u904e\u6bcf\u500b\u516c\u53f8\u90fd\u6709\u5404\u81ea\u6587\u5316\u3002\u7fd2\u6163\u4e4b\u5f8c\u518d\u53bb\u770b\u81ea\u5df1\u516c\u53f8\u90a3\u5957\u7684\u512a\u7f3a\u9ede\uff5e"))}d.isMDXComponent=!0},1257:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/iam-structure-66a78d44c84c4325ae24c3a93b04d714.png"}}]);