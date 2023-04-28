"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[1985],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97995:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"aws EC2 and ELB setting introduction",description:"\u57fa\u672cEC2\u9023\u5165\u7ba1\u7406,\u5821\u58d8\u6a5f\u8ddfweb server\u8a2d\u5b9a.\u4e26\u4f7f\u7528ELB\u4f5c\u70ba\u53cd\u5411\u4ee3\u7406\u4ee5web server.ELB \u8a2d\u5b9a\u90e8\u5206,\u4e00\u958b\u59cb\u7684 listener \u53ea\u6709\u57fa\u672c\u7684 rule,\u76ee\u524d\u53ea\u6709\u4e00\u689d If (all match)Request is not otherwise routed to target group.\u6b63\u5e38\u4f7f\u7528\u60c5\u6cc1\u6703\u662f,\u4f60\u81ea\u5df1\u7684\u57df\u540d(ex. modontou.don69.store)\u8a2d\u5b9a\u5230\u8a72 ELB,\u518d\u900f\u904e ELB \u4f9d\u64da\u8acb\u6c42\u7684\u8a2d\u5b9a,\u628a\u8acb\u6c42\u8f49\u5230 Target Group.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS"]},o=void 0,i={permalink:"/blog/2023/04/26/Aws/aws-ec2-elb-setting",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Aws/2023-04-26-aws-ec2-elb-setting.md",source:"@site/blog/Aws/2023-04-26-aws-ec2-elb-setting.md",title:"aws EC2 and ELB setting introduction",description:"\u57fa\u672cEC2\u9023\u5165\u7ba1\u7406,\u5821\u58d8\u6a5f\u8ddfweb server\u8a2d\u5b9a.\u4e26\u4f7f\u7528ELB\u4f5c\u70ba\u53cd\u5411\u4ee3\u7406\u4ee5web server.ELB \u8a2d\u5b9a\u90e8\u5206,\u4e00\u958b\u59cb\u7684 listener \u53ea\u6709\u57fa\u672c\u7684 rule,\u76ee\u524d\u53ea\u6709\u4e00\u689d If (all match)Request is not otherwise routed to target group.\u6b63\u5e38\u4f7f\u7528\u60c5\u6cc1\u6703\u662f,\u4f60\u81ea\u5df1\u7684\u57df\u540d(ex. modontou.don69.store)\u8a2d\u5b9a\u5230\u8a72 ELB,\u518d\u900f\u904e ELB \u4f9d\u64da\u8acb\u6c42\u7684\u8a2d\u5b9a,\u628a\u8acb\u6c42\u8f49\u5230 Target Group.",date:"2023-04-26T00:00:00.000Z",formattedDate:"April 26, 2023",tags:[{label:"AWS",permalink:"/blog/tags/aws"}],readingTime:13.905,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"aws EC2 and ELB setting introduction",description:"\u57fa\u672cEC2\u9023\u5165\u7ba1\u7406,\u5821\u58d8\u6a5f\u8ddfweb server\u8a2d\u5b9a.\u4e26\u4f7f\u7528ELB\u4f5c\u70ba\u53cd\u5411\u4ee3\u7406\u4ee5web server.ELB \u8a2d\u5b9a\u90e8\u5206,\u4e00\u958b\u59cb\u7684 listener \u53ea\u6709\u57fa\u672c\u7684 rule,\u76ee\u524d\u53ea\u6709\u4e00\u689d If (all match)Request is not otherwise routed to target group.\u6b63\u5e38\u4f7f\u7528\u60c5\u6cc1\u6703\u662f,\u4f60\u81ea\u5df1\u7684\u57df\u540d(ex. modontou.don69.store)\u8a2d\u5b9a\u5230\u8a72 ELB,\u518d\u900f\u904e ELB \u4f9d\u64da\u8acb\u6c42\u7684\u8a2d\u5b9a,\u628a\u8acb\u6c42\u8f49\u5230 Target Group.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS"]},prevItem:{title:"Common folder and their uses in Linux",permalink:"/blog/2023/04/27/linux-server/linux-default-use-of-folder"},nextItem:{title:"mysql partition\u8ddf index \u5340\u5225",permalink:"/blog/2023/04/26/SQL/sql-partition-and-index-difference"}},s={authorsImageUrls:[void 0]},p=[{value:"AWS EC2 introduction",id:"aws-ec2-introduction",level:2},{value:"Bastion server",id:"bastion-server",level:3},{value:"AWS ELB introduction",id:"aws-elb-introduction",level:2},{value:"AWS \u63d0\u4f9b ELB \u7684\u9078\u9805",id:"aws-\u63d0\u4f9b-elb-\u7684\u9078\u9805",level:3},{value:"lab",id:"lab",level:2},{value:"\u5efa\u7acb KeyPair \u516c\u79c1\u9470",id:"\u5efa\u7acb-keypair-\u516c\u79c1\u9470",level:3},{value:"EC2 for web server and bastion server",id:"ec2-for-web-server-and-bastion-server",level:3},{value:"\u8a2d\u5b9a\u8df3\u677f\u6a5f ssh \u9023\u7dda",id:"\u8a2d\u5b9a\u8df3\u677f\u6a5f-ssh-\u9023\u7dda",level:3},{value:"\u5efa\u7acb target group",id:"\u5efa\u7acb-target-group",level:3},{value:"\u5efa\u7acb ELB",id:"\u5efa\u7acb-elb",level:3},{value:"\u555f HTTP \u4f3a\u670d\u5668",id:"\u555f-http-\u4f3a\u670d\u5668",level:3},{value:"\u8a2d\u5b9a forward \u64cd\u4f5c",id:"\u8a2d\u5b9a-forward-\u64cd\u4f5c",level:3},{value:"\u8a2d\u5b9a HTTPS \u505a listener",id:"\u8a2d\u5b9a-https-\u505a-listener",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9019\u908a\u63a5\u7e8c",(0,a.kt)("a",{parentName:"p",href:"/docs/Aws/2023-04-11-aws-vpc-setting"},"AWS \u7db2\u8def\u7bc7"),"\u7684 lab."),(0,a.kt)("p",null,"\u76ee\u6a19:Region \u5167\u5efa\u7acb VPC,\u4e26\u4f7f\u7528 elb \u5c07\u6d41\u91cf\u5c0e\u5230\u5169\u500b\u4e0d\u540c AZ \u4e2d\u7684 web server,\u907f\u514d\u56e0\u70ba\u55ae\u4e00 AZ \u6545\u969c\u5c0e\u81f4\u7684\u670d\u52d9\u4e2d\u65b7.\u65e5\u5e38\u7ba1\u7406\u900f\u904e\u5821\u58d8\u6a5f\u9032\u5165 web server \u505a\u7ba1\u7406."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u57fa\u672c\u4e0a EC2 \u8ddf ELB \u8a2d\u5b9a\u76f8\u95dc\u4f9d\u5e8f:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-keypair-%E5%85%AC%E7%A7%81%E9%91%B0"},"\u5efa\u7acb KeyPair \u516c\u79c1\u9470")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#ec2-for-web-server-and-bastion-server"},"\u5efa\u7acb EC2 for web server and bastion server")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E8%A8%AD%E5%AE%9A%E8%B7%B3%E6%9D%BF%E6%A9%9F-ssh-%E9%80%A3%E7%B7%9A"},"\u8a2d\u5b9a\u8df3\u677f\u6a5f ssh \u9023\u7dda")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-target-group"},"\u5efa\u7acb target group")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-elb"},"\u5efa\u7acb ELB")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E5%95%9F-http-%E4%BC%BA%E6%9C%8D%E5%99%A8"},"\u555f HTTP \u4f3a\u670d\u5668")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E8%A8%AD%E5%AE%9A-forward-%E6%93%8D%E4%BD%9C"},"\u8a2d\u5b9a-forward-\u64cd\u4f5c")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E8%A8%AD%E5%AE%9A-https-%E5%81%9A-listener"},"\u8a2d\u5b9a HTTPS \u505a listener")),(0,a.kt)("li",{parentName:"ol"},"DONe\uff01"))),(0,a.kt)("h2",{id:"aws-ec2-introduction"},"AWS EC2 introduction"),(0,a.kt)("p",null,"\u662f Amazon Web Services\uff08AWS\uff09\u63d0\u4f9b\u7684\u4e00\u7a2e\u57fa\u790e\u67b6\u69cb\u5373\u670d\u52d9\uff08IaaS\uff09\uff0c\u5b83\u5141\u8a31\u7528\u6236\u5728 AWS \u96f2\u4e2d\u555f\u52d5\u548c\u7ba1\u7406\u865b\u64ec\u6a5f\u5668\uff08VM\uff09\uff0c\u7a31\u70ba EC2 \u5be6\u4f8b\u3002\u4f7f\u7528 EC2\uff0c\u7528\u6236\u53ef\u4ee5\u7372\u5f97\u53ef\u8abf\u6574\u7684\u8a08\u7b97\u8cc7\u6e90\uff0c\u5305\u62ec\u865b\u64ec\u6a5f\u5668\u3001\u5b58\u5132\u3001\u7db2\u8def\u5e36\u5bec\u548c\u5b89\u5168\u6027\u3002"),(0,a.kt)("h3",{id:"bastion-server"},"Bastion server"),(0,a.kt)("p",null,"\u5821\u58d8\u6a5f\u7684\u5efa\u7acb\u7528\u4f86\u7ba1\u63a7\u8ddf\u7d00\u9304\u4f7f\u7528\u8005\u64cd\u4f5c,\u900f\u904e\u672c\u6a5f\u7684\u79c1\u6709\u91d1\u9470\u4ee5\u53ca\u5c0d\u61c9\u653e\u5728\u5821\u58d8\u6a5f\u7684\u516c\u6709\u91d1\u9470\u9023\u7dda,\u9023\u7dda\u5230\u5821\u58d8\u6a5f\u5f8c,\u518d\u900f\u904e\u653e\u5728\u5821\u58d8\u6a5f\u7684\u79c1\u9470\u9023\u7dda\u5230\u5c0d\u61c9\u5728\u5167\u90e8\u8cc7\u6e90\u7684\u516c\u9470\u505a\u6a5f\u53f0\u7ba1\u7406,\u53e6\u5916,\u4e5f\u53ef\u4ee5\u900f\u904e multi-hop \u65b9\u5f0f,\u5728\u79c1\u9470\u53ea\u653e\u5728\u672c\u6a5f\u7684\u60c5\u6cc1\u4e0b,\u900f\u904e\u5821\u58d8\u6a5f\u8df3\u5230\u76ee\u6a19\u7ba1\u7406\u6a5f\u5668\u4e2d."),(0,a.kt)("p",null,"\u672c\u7bc7\u6703\u5c07 bastion server \u653e\u5728 public subnet \u5e95\u4e0b,\u6703\u6709\u5c0d\u5916 ip,\u900f\u904e Igw \u8ddf\u5916\u754c\u6e9d\u901a."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"mac,linux,windows 10 \u4ee5\u4e0a\u4e3b\u8981\u652f\u63f4\u7684\u91d1\u9470\u6a94\u6848\u683c\u5f0f\u70ba","*",".pem."),(0,a.kt)("p",{parentName:"admonition"},"windows 9 \u4ee5\u524d\u662f\u652f\u63f4 ppk \u683c\u5f0f.")),(0,a.kt)("h2",{id:"aws-elb-introduction"},"AWS ELB introduction"),(0,a.kt)("p",null,"\u4e3b\u8981\u8ca0\u8cac\u6d41\u91cf\u7684\u53cd\u5411\u4ee3\u7406,\u5c07\u6d41\u91cf\u4f9d\u64da\u4f7f\u7528\u8005\u8a2d\u5b9a\u5c0e\u5230\u5404\u53f0\u4f3a\u670d\u5668(Target group),\u529f\u7528\u6574\u7406\u5982\u4e0b:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5206\u6563\u773e\u591a request"),(0,a.kt)("li",{parentName:"ol"},"\u8655\u7406 SSL \u52a0\u5bc6\u9023\u7dda"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u5fa9\u8acb\u6c42\u932f\u8aa4(\u61c9\u4ed8 400 Bad request \u7b49)")),(0,a.kt)("p",null,"\u4e0d\u904e\u9019\u5e7e\u4ef6\u4e8b\u60c5\u5176\u5be6 Nginx \u90fd\u505a\u5f97\u5230,\u53e6\u5916\u70ba\u907f\u514d Nginx \u66b4\u9732 IP \u88ab\u6253\u7206,\u524d\u9762\u901a\u5e38\u4e5f\u6703\u63a5\u5176\u4ed6\u5bb6 CDN,\u9019\u6a23\u76f8\u6bd4\u4e4b\u4e0b\u7528 Nginx+CDN \u4e5f\u662f\u500b\u4e0d\u932f\u9078\u9805."),(0,a.kt)("p",null,"\u56e0\u6b64 Nginx+CDN \u8ddf\u96f2\u670d\u52d9\u5546\u7684 load balancer \u5982\u4f55\u9078\u64c7\uff1f \u4f7f\u7528\u96f2\u670d\u52d9\u5546\u63d0\u4f9b\u7684 Load Balancer \u7684\u53ef\u7528\u6027\u662f\u8f03\u9ad8\u7684,\u4e14\u53ef\u4ee5\u61c9\u4ed8\u6d41\u91cf\u5927\u5c0f\u8b8a\u5316,\u500b\u4eba\u89ba\u5f97\u9069\u7528\u5728\u6436\u7968\u7cfb\u7d71\u4ee5\u53ca\u5176\u4ed6\u6d41\u91cf\u6703\u77ac\u9593\u66b4\u885d\u7684\u516c\u53f8,\u5982\u679c\u516c\u53f8\u6d41\u91cf\u7a69\u5b9a\u7684\u8a71,\u4f7f\u7528 Nginx+CDN \u6703\u662f\u6bd4\u8f03\u597d\u7684\u9078\u9805."),(0,a.kt)("h3",{id:"aws-\u63d0\u4f9b-elb-\u7684\u9078\u9805"},"AWS \u63d0\u4f9b ELB \u7684\u9078\u9805"),(0,a.kt)("p",null,"aws \u63d0\u4f9b\u7684 load balancer \u7531 Elastic Load Balancing(ELB)\u6240\u63d0\u4f9b,\u81f3 2023/4/22 \u5171\u6709 4 \u7a2e ELB,\u9019\u908a\u63d0\u4f9b",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/elasticloadbalancing/features/"},"\u5b98\u65b9\u628a\u8f03\u9023\u7d50")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Application Load Balancer(ALB):\u4e3b\u8981\u7528\u65bc\u8655\u7406 HTTP/HTTPS \u6d41\u91cf(Layer 7)"),(0,a.kt)("li",{parentName:"ul"},"Network Load Balancer(NLB):\u4e3b\u8981\u7528\u65bc\u8655\u7406 TCP\u3001TLS \u548c UDP \u6d41\u91cf(Layer 4)"),(0,a.kt)("li",{parentName:"ul"},"Classic Load Balancer(CLB):\u820a\u7248,\u5f88\u5c11\u7528\u5230"),(0,a.kt)("li",{parentName:"ul"},"Gateway Load Balancer(GLB): \u4e3b\u8981\u7528\u65bc\u8655\u7406 NAT \u548c\u9632\u706b\u7246\u7b49\u7db2\u7d61\u670d\u52d9\uff0c\u80fd\u5920\u5c07\u9032\u5165 VPC \u7684\u6d41\u91cf\u5206\u767c\u5230\u591a\u500b\u76ee\u7684\u5730(Layer 3 Gateway + Layer 4 Load Balancing )")),(0,a.kt)("p",null,"ALB \u4e3b\u8981\u7528\u65bc\u7b2c 7 \u5c64 Load Balancer,\u4e3b\u8981\u8f49\u5c0e protocol: HTTP, HTTPS,\u57fa\u672c\u4e0a\u5c31\u8ddf Nginx \u5dee\u4e0d\u591a,\u76ee\u524d\u4e86\u89e3,\u5dee\u5225\u5728\u6c92\u6709\u5075\u6e2c\u4f86\u6e90 IP \u57ce\u5e02(nginx geoip)"),(0,a.kt)("p",null,"\u6703\u8a2d\u5b9a\u7684\u5167\u5bb9:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Availability Zone:\u6307\u5b9a\u7684 VPC Region \u8ddf ELB \u9700\u70ba\u540c\u4e00 Region,\u8a72 Region \u5e95\u4e0b AZ \u7684\u90fd\u53ef\u7528,\u9078\u64c7\u7684 subnet \u9700\u8981\u6709\u9023\u63a5 Igw(route tale \u4e5f\u8981\u6709),\u4e0d\u7136\u6703\u5931\u6548."),(0,a.kt)("li",{parentName:"ul"},"target group: \u4e3b\u8981\u6709\u5c0d\u5167\u8ddf\u5c0d\u5916\u5169\u7a2e\u8a2d\u5b9a,\u5982\u679c\u6307\u5b9a\u4e86 VPC \u4e2d\u7684\u76ee\u6a19\uff0c\u90a3\u9ebc\u5c31\u662f\u5c0d\u5167\u7684\u8a2d\u5b9a\uff1b\u5982\u679c\u6307\u5b9a\u4e86 Public IP \u6216 DNS\uff0c\u90a3\u9ebc\u5c31\u662f\u5c0d\u5916\u7684\u8a2d\u5b9a\u3002\u5c0d\u5167\u8981\u8a2d\u5b9a listener \u9078\u64c7\u63a5\u6536\u5354\u8b70,\u4ee5\u53ca request \u600e\u9ebc\u5206\u6563\u5230\u5404 web server.")),(0,a.kt)("h2",{id:"lab"},"lab"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-keypair-%E5%85%AC%E7%A7%81%E9%91%B0"},"\u5efa\u7acb KeyPair \u516c\u79c1\u9470")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#ec2-for-web-server-and-bastion-server"},"\u5efa\u7acb EC2 for web server and bastion server")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E8%A8%AD%E5%AE%9A%E8%B7%B3%E6%9D%BF%E6%A9%9F-ssh-%E9%80%A3%E7%B7%9A"},"\u8a2d\u5b9a\u8df3\u677f\u6a5f ssh \u9023\u7dda")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-target-group"},"\u5efa\u7acb target group")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-elb"},"\u5efa\u7acb ELB")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E5%95%9F-http-%E4%BC%BA%E6%9C%8D%E5%99%A8"},"\u555f HTTP \u4f3a\u670d\u5668")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E8%A8%AD%E5%AE%9A-forward-%E6%93%8D%E4%BD%9C"},"\u8a2d\u5b9a-forward-\u64cd\u4f5c")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#%E8%A8%AD%E5%AE%9A-https-%E5%81%9A-listener"},"\u8a2d\u5b9a HTTPS \u505a listener")),(0,a.kt)("li",{parentName:"ol"},"DONe\uff01")),(0,a.kt)("h3",{id:"\u5efa\u7acb-keypair-\u516c\u79c1\u9470"},"\u5efa\u7acb KeyPair \u516c\u79c1\u9470"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"EC2 service -> Network & Security -> Key Pairs ->Create Key Pairs-> choose RSA , .pem(For use with OpenSSH) ->download .pem file\n")),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u5c0f\u5fc3\u628a\u8f09\u5230\u672c\u6a5f\u7684.pem \u6a94\u79c1\u9470\u522a\u9664,\u5148\u524d\u4f7f\u7528\u7684\u820a\u91d1\u9470\u5c31\u90fd\u8981\u4f5c\u5ee2\u4e86\uff31\uff31 \u6c92\u6709\u6062\u5fa9\u65b9\u6cd5\uff01"),(0,a.kt)("h3",{id:"ec2-for-web-server-and-bastion-server"},"EC2 for web server and bastion server"),(0,a.kt)("p",null,"bastion server \u5efa\u7acb\u5728 public subnet,web server \u5efa\u7acb\u5728 private subnet \u4e0a."),(0,a.kt)("p",null,"web server \u5176\u5be6\u4e5f\u53ef\u4ee5\u653e\u5728 public subnet,\u8b93\u4f7f\u7528\u8005\u76f4\u63a5\u900f\u904e EIP \u9032\u4f86,\u4e0d\u904e\u5982\u679c\u9047\u5230 ddos \u653b\u64ca,\u5f88\u5bb9\u6613 web server \u5c31\u639b\u4e86,\u6240\u4ee5\u6700\u597d\u524d\u9762\u8981\u6709 elb \u6216\u8005 cdn \u9019\u4e00\u5c64.\u6700\u5f8c,\u5982\u679c web server \u4e0d\u5c0d\u5916,\u53ea\u9760 elb \u4e4b\u985e\u8f49\u9032\u4f86,\u9047\u5230\u96f2\u670d\u52d9\u5ee0\u5546\u7684 elb \u639b\u6389,\u5c31\u6703\u8981\u82b1\u6bd4\u8f03\u591a\u6642\u9593\u628a web server \u653e\u56de\u53bb\u5c0d\u5916\u5c31\u662f."),(0,a.kt)("p",null,"security group \u90e8\u5206,\u6ce8\u610f\u4ed6 associate \u5728 VPC \u4e0a,VPC \u662f\u5206 Region \u7684,\u6240\u4ee5\u627e\u4e0d\u5230\u4f60\u5148\u524d\u5efa\u7acb\u7684 security group \u7684\u6642\u5019,\u53bb\u78ba\u8a8d Region \u8ddf VPC \u662f\u5426\u6709\u9078\u5c0d\u4f4d\u7f6e."),(0,a.kt)("p",null,"bastion server \u81f3\u5c11\u9700\u8981\u5141\u8a31\u4f60\u7684 ip \u53ef\u4ee5 ssh \u9023\u5165,\u4e14 outbound \u53ef\u4ee5\u5230\u6240\u6709\u5167\u7db2\u9700\u7ba1\u63a7\u6a5f\u5668(10.0.0.0/16),\u4e14\u8981\u6709\u5c0d\u5916 IP."),(0,a.kt)("p",null,"web server \u56e0\u70ba\u898f\u5283\u653e\u5728 private subnet \u7db2\u6bb5,\u53ea\u8981 inbound \u8b93\u6240\u6709\u5167\u7db2\u53ef\u4ee5\u9023\u5165(10.0.0.0/16)\u5c31\u597d,outbound \u5247\u8003\u616e\u4e4b\u5f8c\u6703\u4e32\u5f8c\u7aef,\u53ef\u4ee5\u7528(10.0.0.0/16),\u57fa\u672c\u4e0a\u7bc4\u570d\u53ef\u4ee5\u5728\u9650\u7e2e."),(0,a.kt)("p",null,"\u898f\u5283\u7528 elb \u9023\u5230\u5167\u90e8\u5169\u53f0 web server,\u5169\u53f0 subnet \u90fd\u7528 private subnet"),(0,a.kt)("p",null,"\u64cd\u4f5c\uff1a"),(0,a.kt)("p",null,"EC2 ->instances -> launch instances ->Name(product-resource-purpose-region)ex. ford-ec2-bastion-uw1 -> app and os image(my ami or aws market ,or community AMIs) -> instance type(choose cpu ,memory) ->choose key pair for login-> choose ur vpc,subnet, enable auto-assign public ip -> select security group(default and bastion)-> DONe"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u4e8b\u9805:\u6211\u81ea\u5df1\u5728\u8a2d\u5b9a\u904e\u7a0b\u4e2d\u6709\u6642\u5019\u6309\u4e00\u6309\u5c31\u6703\u5fd8\u6389 Network Settings \u90a3\u90e8\u4efd,\u6240\u4ee5\u63d0\u9192\u958b EC2 \u8ddf\u7dda\u4e0a\u554f\u984c\u6392\u9664\u4e00\u6a23\u8981\u6ce8\u610f"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"\u786c\u9ad4\u72c0\u614b(cpu,\u8a18\u61b6\u9ad4,\u786c\u789f)"),(0,a.kt)("li",{parentName:"ol"},"\u7db2\u8def\u72c0\u614b(\u9632\u706b\u7246,\u53ca\u7db2\u8def\u4e92\u901a\u72c0\u6cc1)"))),(0,a.kt)("h3",{id:"\u8a2d\u5b9a\u8df3\u677f\u6a5f-ssh-\u9023\u7dda"},"\u8a2d\u5b9a\u8df3\u677f\u6a5f ssh \u9023\u7dda"),(0,a.kt)("p",null,"\u6307\u4ee4\u5982\u4e0b,\u53ef\u4ee5\u7528-i \u6307\u5b9a\u79c1\u9470\u6a94\u6848\u4f4d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ssh -i "ford.pem" ec2-user@77.77.77.77\n')),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5230~/.ssh/config \u88e1\u9762\u4fee\u6539\u8cc7\u6599(\u53ef\u4ee5\u7528 v \u958b\u555f\u8996\u89ba\u5316\u6a21\u5f0f,\u79fb\u52d5\u5149\u6a19\u9078\u64c7\u6b32\u8907\u88fd\u7684\u7bc4\u570d\u3002\u6309\u4e0b y \u8907\u88fd\u9078\u53d6\u7684\u6587\u5b57\u3002\u79fb\u52d5\u5149\u6a19\u5230\u6b32\u8cbc\u4e0a\u7684\u4f4d\u7f6e\u3002\u6309\u4e0b p \u8cbc\u4e0a\u8907\u88fd\u7684\u6587\u5b57\u3002)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Host            ford-bastion\nHostName        77.77.77.77\nPort            22\nUser            ec2-user\nIdentityFile    ~/.ssh/ford.pem\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u8a2d\u5b9a\u597d\u4e4b\u5f8c,\u7b2c\u4e00\u6b21\u9023\u7dda\u6703\u51fa\u73fe\u4ee5\u4e0b\u8a0a\u606f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ED25519 key fingerprint is SHA256:7PkkXMF4y2j71d4HTy4qxVRWm77eBQtT73mf8Mf5MH4.\nThis key is not known by any other names\nAre you sure you want to continue connecting (yes/no/[fingerprint])?\n")),(0,a.kt)("p",null,"\u9019\u662f\u56e0\u70ba ssh client \u7b2c\u4e00\u6b21\u9023\u7dda ssh server \u6642,\u4ed6\u6703\u9700\u8981\u4f7f\u7528\u8005\u53bb\u78ba\u8a8d\u662f\u4e0d\u662f\u8981\u9023\u9019\u53f0 server,\u5982\u679c yes,ssh client \u7aef\u5c31\u6703\u628a ssh server \u7684\u516c\u9470\u7528 \u52a0\u5230\u672c\u5730~/.ssh/known_hosts \u88e1\u9762,\u4e0b\u6b21\u9023\u7dda\u6703\u53bb\u8a72\u6a94\u6848\u9a57\u8b49\u662f\u5426\u662f\u5df2\u77e5\u7684 hosts \u53ca\u516c\u9470\u662f\u5426\u7b26\u5408,\u5982\u6b64\u4e00\u4f86\u5c31\u53ef\u4ee5\u907f\u514d\u4e2d\u9593\u4eba\u653b\u64ca\u7b49\u5b89\u5168\u554f\u984c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="~/.ssh/known_hosts"',title:'"~/.ssh/known_hosts"'},"54.151.73.235 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBHX9fQvFIXuJg3LF8777+51qzM7FymrnPoDrYX1Ezr083gutn/5NZkkslRs8mL+nSEOwcwJQfy/s4t7RK1dYQu4=\n")),(0,a.kt)("p",null,"multi-hop \u8a2d\u5b9a\u6a94,\u7528\u4ee5\u628a\u900f\u904e bastion server,\u9023\u5230 private subnet \u7684 web server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Host            ford-bastion\nHostName        13.52.247.248\nPort            22\nUser            ec2-user\nIdentityFile    ~/.ssh/ford.pem\n\n\nHost web01\nHostname 10.0.42.235 # (\u7db2\u9801\u4f3a\u670d\u5668 1 \u7684\u79c1\u6709 IP)\nUser ec2-user\nIdentityFile ~/.ssh/ford.pem\nProxyCommand ssh ford-bastion -W %h:%p\n\nHost web02\nHostname 10.0.56.218 # (\u7db2\u9801\u4f3a\u670d\u5668 2 \u7684\u79c1\u6709 IP)\nUser ec2-user\nIdentityFile ~/.ssh/ford.pem\nProxyCommand ssh ford-bastion -W %h:%p\n")),(0,a.kt)("h3",{id:"\u5efa\u7acb-target-group"},"\u5efa\u7acb target group"),(0,a.kt)("p",null,"\u64cd\u4f5c:"),(0,a.kt)("p",null,"EC2 -> Load Balancing -> Target Groups -> \u9019\u908a\u9069\u7528 EC2 \u8d77\u7684\u670d\u52d9\u6240\u4ee5\u9078 instance -> input group name -> input HTTP and 3000 port -> choose VPC -> choose instance ID(Ports for the selected instances)\u628a\u6d41\u91cf\u5c0e\u5230\u6307\u5b9a\u4f4d\u7f6e\u7684 3000 port."),(0,a.kt)("p",null,"\u9019\u908a\u8a2d\u5b9a\u610f\u601d\u662f\u628a ELB \u628a 443 \u6d41\u91cf\u89e3\u5bc6\u5f8c\u9001\u5230 port 3000 \u4e0a\u5f97 web server,\u7136\u5f8c\u4f9d\u64da\u6d41\u91cf\u5230\u9019\u5169\u53f0 EC2."),(0,a.kt)("h3",{id:"\u5efa\u7acb-elb"},"\u5efa\u7acb ELB"),(0,a.kt)("p",null,"\u56e0\u70ba\u662f\u6703\u9762\u5411\u7db2\u8def\u7684 web server,\u9700\u8981 VPC \u53ca security group \u652f\u63f4,\u8981\u505a load balance \u9700\u8981\u5169\u500b AZ \u4ee5\u4e0a."),(0,a.kt)("p",null,"\u5c01\u5305\u50b3\u905e\u904e\u7a0b(\u5230 EC2 \u70ba\u4f8b):"),(0,a.kt)("p",null,"request: Client -> Internet -> Elb -> Igw -> public subnet(\u67e5 route table) -> Target Group -> EC2"),(0,a.kt)("p",null,"response: EC2 -> public subnet(\u67e5 route table) ->Igw -> Internet -> Client"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u9762\u904e\u7a0b\u77e5\u9053,\u8981\u900f\u904e elb \u9023\u5230 private group \u88e1\u7684 EC2,\u4e2d\u9593\u9700\u8981\u7b26\u5408\u5e7e\u683c\u689d\u4ef6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"public subnet- subnet \u9700\u8981\u6709 Igw \u8b93\u5c01\u5305\u53ef\u4ee5\u9032\u4f86,\u4e14 route table \u6709 desination 0.0.0.0/0 \u900f\u904e Igw \u8f49\u5c0e,\u4e26\u53ef\u4ee5\u8b58\u5225 local"),(0,a.kt)("li",{parentName:"ol"},"security group- \u6a5f\u5668\u7684 security group \u8981\u53ef\u4ee5\u8b93\u5916\u754c\u9023\u5165,\u628a\u6d41\u91cf\u5f9e Internet \u7d93 ELB \u5230 Igw -> public subnet,\u518d\u900f\u904e public subnet \u7684 router table \u67e5\u8a62\u5230 private subnet \u4e2d\u7684 web server.")),(0,a.kt)("p",null,"\u672c\u7ae0\u7528 web server,\u53ea\u7528 HTTP/HTTPS \u5354\u8b70,\u6240\u4ee5\u7528 ALB \u5c31\u884c,\u53e6\u5916 ELB \u662f\u6709\u5206 Region \u7684."),(0,a.kt)("p",null,"\u64cd\u4f5c:"),(0,a.kt)("p",null,"EC2 -> Load Balancing -> Load Balancers -> input Load balancer name -> scheme: choose internet-facing-> IPV4->choose VPC -> choose Mappings of Two AZ in same Region-> choose security group ->choose Listener and target."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"scheme \u90e8\u5206\u6709\u5169\u500b\u9078\u9805:")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Internet-facing\uff1a\u5982\u679c\u6211\u5011\u8981\u5f9e\u5916\u7db2\u8acb\u6c42\u7684\u8a71\u5c31\u8981\u9078\u64c7\u9019\u500b\u9078\u9805\uff0c\u8a18\u5f97\u8981\u5230 public subnet,\u9019\u6a23 ELB \u624d\u80fd\u900f\u904e\u5916\u7db2\u7684 Igw \u8fd1\u4f86"),(0,a.kt)("li",{parentName:"ul"},"Internal\uff1a\u9019\u6703\u8b93\u9019\u500b alb \u53ea\u80fd\u5728\u5167\u7db2\u4f7f\u7528\uff0c\u5c31\u7121\u6240\u8b02\u7528 public subnet \u9084\u662f private subnet \u4e86\u3002")),(0,a.kt)("ol",{parentName:"admonition",start:2},(0,a.kt)("li",{parentName:"ol"},"Listener \u90e8\u5206:\u53ef\u4ee5\u9078 HTTP or HTTPS,\u5982\u679c\u9078 HTTPS \u5c31\u8981\u9078\u4f60\u7684\u6191\u8b49\u8981\u7528 AWS Certificate Manager(ACM),IAM,\u532f\u5165\u6191\u8b49\u7b49\u65b9\u5f0f"))),(0,a.kt)("h3",{id:"\u555f-http-\u4f3a\u670d\u5668"},"\u555f HTTP \u4f3a\u670d\u5668"),(0,a.kt)("p",null,"\u5728\u9023\u5165\u7684\u76ee\u9304\u5e95\u4e0b\u5efa\u7acb index.html,\u4e26\u7528\u4ee5\u4e0b\u6307\u4ee4\u8d77\u670d\u52d9."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 -m http.server 3000\n")),(0,a.kt)("h3",{id:"\u8a2d\u5b9a-forward-\u64cd\u4f5c"},"\u8a2d\u5b9a forward \u64cd\u4f5c"),(0,a.kt)("p",null,"ELB \u8a2d\u5b9a\u5f8c listener \u53ea\u6709\u57fa\u672c\u7684 rule,\u76ee\u524d\u53ea\u6709\u4e00\u689d If (all match)Request is not otherwise routed to target group."),(0,a.kt)("p",null,"\u6b63\u5e38\u4f7f\u7528\u60c5\u6cc1\u6703\u662f: \u4f60\u81ea\u5df1\u7684\u57df\u540d(ex. modontou.don69.store)\u8a2d\u5b9a\u5230\u8a72 ELB,\u518d\u900f\u904e ELB \u4f9d\u64da\u8acb\u6c42\u7684\u8a2d\u5b9a,\u628a\u8acb\u6c42\u8f49\u5230 Target Group."),(0,a.kt)("p",null,"\u53ef\u4ee5\u505a\u7684\u8a2d\u5b9a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u6a5f\u6a19\u982d\uff08Host header\uff09\uff1a\u57df\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u8def\u5f91\uff08Path\uff09\uff1a\u57df\u540d\u5f8c\u9762\u5e36\u7684\u8def\u5f91\uff0cex. /channelHandle"),(0,a.kt)("li",{parentName:"ul"},"HTTP \u6a19\u982d\uff08Http header\uff09\uff1a\u5c31 http header"),(0,a.kt)("li",{parentName:"ul"},"Http \u8acb\u6c42\u65b9\u6cd5\uff08Http request methed\uff09\uff1aGET\u3001POST\u2026\u2026."),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8a62\u5b57\u4e32\uff08Query string\uff09\uff1a\u57df\u540d\u5e36\u9032\u53bb\u7684\u53c3\u6578\uff0cex. /?test=123"),(0,a.kt)("li",{parentName:"ul"},"\u4f86\u6e90 IP\uff08Source IP\uff09\uff1aClient \u7aef\u7684 IP")),(0,a.kt)("p",null,"Action \u90e8\u5206\u6709\u4e09\u500b:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Forward to: \u8f49\u5bc4,\u6703\u628a\u7b26\u5408\u689d\u4ef6\u7684\u8acb\u6c42\u5c0e\u5411\u8a2d\u5b9a\u7684 target group\uff0c\u53ef\u4ee5\u8a2d\u5b9a\u591a\u500b target group \u4e26\u4e14\u53ef\u4ee5\u8a2d\u5b9a\u6b0a\u91cd"),(0,a.kt)("li",{parentName:"ol"},"Redirect to: \u91cd\u5c0e\u5411,\u7b26\u5408\u689d\u4ef6\u7684\u57df\u540d\u8f49\u5c0e\u5230\u8a2d\u5b9a\u7684\u57df\u540d(HTTP status code: 301,302)"),(0,a.kt)("li",{parentName:"ol"},"Return fixed response: \u56fa\u5b9a\u56de\u50b3,\u7b26\u5408\u689d\u4ef6\u7684\u57df\u540d\u90fd\u56de\u8986\u8a2d\u5b9a\u7684 http code \u6216\u662f\u8a2d\u5b9a\u7684\u5167\u6587")),(0,a.kt)("p",null,"Group-level stickiness: \u610f\u601d\u662f\u5728 load balance \u904e\u7a0b\u4e2d,\u555f\u7528\u6703\u8a71\u4fdd\u6301\u6a5f\u5236,\u4e3b\u8981\u662f\u8b93\u540c\u4e00 client \u900f\u904e\u5728 client's browser \u7aef\u8a2d\u5b9a cookie \u7d66 ELB \u505a\u8fa8\u5225,\u8b93 client \u7aef\u53ef\u4ee5\u6301\u7e8c\u8ddf\u540c\u4e00\u53f0 backend server \u505a\u4e92\u52d5.cookie \u9810\u8a2d\u4e00\u5929\u5230\u671f."),(0,a.kt)("p",null,"\u64cd\u4f5c:"),(0,a.kt)("p",null,"EC2 -> Load Balancing -> yourLoadBalancer -> Listeners -> click 1 rule(\u57fa\u672c\u4e0a\u9019\u6642\u5019\u4f60\u53ea\u6709\u4e00\u500b rule)-> Manage rules -> Edit rules ->\u9078 Host Header \u52a0\u5165\u57df\u540d,Add action \u90e8\u5206\u7528 Forward to \u4f60\u7684 Target group."),(0,a.kt)("h3",{id:"\u8a2d\u5b9a-https-\u505a-listener"},"\u8a2d\u5b9a HTTPS \u505a listener"),(0,a.kt)("p",null,"\u9019\u500b\u8981\u5728 ELB \u52a0\u4e0a HTTPS \u7684 listener. \u53e6\u5916 ACM \u90a3\u908a\u8981\u52a0\u500b wild card \u6191\u8b49\u7d81\u4f60\u7684\u57df\u540d."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"ACM \u7533\u8acb\u8981\u7528 wildcard certificate \u5728\u7533\u8acb\u6642\u4e00\u5b9a\u8981\u7528","*","\n","*",".don7.store"),(0,a.kt)("p",{parentName:"admonition"},"\u56e0\u70ba\u52a0\u89e3\u5bc6\u767c\u751f\u5728 ELB,\u6240\u4ee5 target group \u90a3\u908a listen \u7684 port \u5c31\u662f\u4f60\u524d\u7aef\u8d77\u670d\u52d9\u7684 port \u5c31\u641e\u5b9a\uff01\u4e0d\u7528\u53e6\u5916\u8a2d\u5b9a\u6210 HTTPS.")),(0,a.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,a.kt)("p",null,"\u57fa\u672c\u7684 EC2 \u8ddf AWS internet \u76f8\u95dc\u8a2d\u5b9a\u5230\u9019\u908a,\u63a5\u4e0b\u4f86\u662f RDS,\u7136\u5f8c\u628a\u5f8c\u7aef\u7a0b\u5f0f\u900f\u904e IaC \u65b9\u5f0f\u90e8\u7f72,\u4e0d\u8981\u518d\u900f\u904e UI \u9ede\u64ca."))}d.isMDXComponent=!0}}]);