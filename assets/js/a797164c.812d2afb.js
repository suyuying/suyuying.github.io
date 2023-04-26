"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[8941],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>d});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),k=p(a),g=l,d=k["".concat(o,".").concat(g)]||k[g]||b[g]||r;return a?n.createElement(d,i(i({ref:e},s),{},{components:a})):n.createElement(d,i({ref:e},s))}));function d(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=g;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[k]="string"==typeof t?t:l,i[1]=u;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6578:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={title:"aws internet setting introduction",description:"\u57fa\u672c\u4e0a\u7db2\u8def\u90e8\u5206\u6703\u570d\u7e5e\u8457VPC \u8a2d\u5b9a,\u4f9d\u5e8f:\u5efa\u7acb VPC ->\u5efa\u7acb public subnet & private subnet(\u9700\u9023\u7d50 VPC) ->\u5efa\u7acb Internet gateway(\u9700\u9023\u7d50 VPC) ->\u5efa\u7acb NAT gateway(\u9700\u9023\u7d50 subnet,\u914d\u7f6e eip) -> \u5efa\u7acb route table(\u8a2d\u5b9a\u662f\u5426\u9023\u5167\u7db2 local,\u9023\u5916 Igw,NAT gateway,VPN gateway,peering \u7b49) \u4ee5\u53ca\u8981\u7d66\u54ea\u500b subnet \u7528,\u4e00\u500b route table \u53ef\u4ee5\u7d66\u591a\u500b subnet \u7528 -> \u8a2d\u5b9a Security group \u5c0d\u670d\u52d9\u958b\u555f ip and port -> \u7db2\u8def\u5230\u9019\u908a,\u53bb\u8a2d\u5b9a\u670d\u52d9\u56c9\uff01",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS"],sidebar_position:3},i=void 0,u={permalink:"/blog/2023/04/11/Aws/aws-vpc-setting",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Aws/2023-04-11-aws-vpc-setting.md",source:"@site/blog/Aws/2023-04-11-aws-vpc-setting.md",title:"aws internet setting introduction",description:"\u57fa\u672c\u4e0a\u7db2\u8def\u90e8\u5206\u6703\u570d\u7e5e\u8457VPC \u8a2d\u5b9a,\u4f9d\u5e8f:\u5efa\u7acb VPC ->\u5efa\u7acb public subnet & private subnet(\u9700\u9023\u7d50 VPC) ->\u5efa\u7acb Internet gateway(\u9700\u9023\u7d50 VPC) ->\u5efa\u7acb NAT gateway(\u9700\u9023\u7d50 subnet,\u914d\u7f6e eip) -> \u5efa\u7acb route table(\u8a2d\u5b9a\u662f\u5426\u9023\u5167\u7db2 local,\u9023\u5916 Igw,NAT gateway,VPN gateway,peering \u7b49) \u4ee5\u53ca\u8981\u7d66\u54ea\u500b subnet \u7528,\u4e00\u500b route table \u53ef\u4ee5\u7d66\u591a\u500b subnet \u7528 -> \u8a2d\u5b9a Security group \u5c0d\u670d\u52d9\u958b\u555f ip and port -> \u7db2\u8def\u5230\u9019\u908a,\u53bb\u8a2d\u5b9a\u670d\u52d9\u56c9\uff01",date:"2023-04-11T00:00:00.000Z",formattedDate:"April 11, 2023",tags:[{label:"AWS",permalink:"/blog/tags/aws"}],readingTime:11.85,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"aws internet setting introduction",description:"\u57fa\u672c\u4e0a\u7db2\u8def\u90e8\u5206\u6703\u570d\u7e5e\u8457VPC \u8a2d\u5b9a,\u4f9d\u5e8f:\u5efa\u7acb VPC ->\u5efa\u7acb public subnet & private subnet(\u9700\u9023\u7d50 VPC) ->\u5efa\u7acb Internet gateway(\u9700\u9023\u7d50 VPC) ->\u5efa\u7acb NAT gateway(\u9700\u9023\u7d50 subnet,\u914d\u7f6e eip) -> \u5efa\u7acb route table(\u8a2d\u5b9a\u662f\u5426\u9023\u5167\u7db2 local,\u9023\u5916 Igw,NAT gateway,VPN gateway,peering \u7b49) \u4ee5\u53ca\u8981\u7d66\u54ea\u500b subnet \u7528,\u4e00\u500b route table \u53ef\u4ee5\u7d66\u591a\u500b subnet \u7528 -> \u8a2d\u5b9a Security group \u5c0d\u670d\u52d9\u958b\u555f ip and port -> \u7db2\u8def\u5230\u9019\u908a,\u53bb\u8a2d\u5b9a\u670d\u52d9\u56c9\uff01",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["AWS"],sidebar_position:3},prevItem:{title:"Python datetime guide",permalink:"/blog/2023/04/17/Python/datetime/datetime-guide"},nextItem:{title:"linux disk management command used commonly",permalink:"/blog/2023/04/11/linux-server/linux-disk-management"}},o={authorsImageUrls:[void 0]},p=[{value:"aws internet introduction",id:"aws-internet-introduction",level:2},{value:"VPC",id:"vpc",level:3},{value:"subnet",id:"subnet",level:3},{value:"public subnet &amp; private subnet",id:"public-subnet--private-subnet",level:4},{value:"Internet gateway(IGW)",id:"internet-gatewayigw",level:3},{value:"Network Address Translation(NAT) gateway",id:"network-address-translationnat-gateway",level:3},{value:"route table",id:"route-table",level:3},{value:"security group &amp; Network Access Control List",id:"security-group--network-access-control-list",level:3},{value:"lab",id:"lab",level:2},{value:"CIDR \u898f\u5283",id:"cidr-\u898f\u5283",level:3},{value:"\u5efa\u7acb VPC",id:"\u5efa\u7acb-vpc",level:3},{value:"\u5efa\u7acb subnet",id:"\u5efa\u7acb-subnet",level:3},{value:"\u5efa\u7acb Internet gateway",id:"\u5efa\u7acb-internet-gateway",level:3},{value:"\u5efa\u7acb NAT gateway",id:"\u5efa\u7acb-nat-gateway",level:3},{value:"\u5efa\u7acb route table",id:"\u5efa\u7acb-route-table",level:3},{value:"route table \u8a9e\u6cd5",id:"route-table-\u8a9e\u6cd5",level:4},{value:"route table \u8a2d\u5b9a",id:"route-table-\u8a2d\u5b9a",level:4},{value:"\u8a2d\u5b9a Security group",id:"\u8a2d\u5b9a-security-group",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}],s={toc:p},k="wrapper";function b(t){let{components:e,...a}=t;return(0,l.kt)(k,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u57fa\u672c\u4e0a Internet \u8a2d\u5b9a\u76f8\u95dc\u4f9d\u5e8f:"),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-vpc"},"\u5efa\u7acb VPC")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-subnet"},"\u5efa\u7acb public subnet & private subnet(\u9700\u9023\u7d50 VPC)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-internet-gateway"},"\u5efa\u7acb Internet gateway(\u9700\u9023\u7d50 VPC)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-nat-gateway"},"(optional)\u5efa\u7acb NAT gateway"),"(optional,\u9700\u9023\u7d50 subnet,\u914d\u7f6e eip,\u524d\u63d0\u662f private subnet \u9700\u8981\u9023\u5916\u6642)"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-route-table"},"\u5efa\u7acb route table"),"(\u8a2d\u5b9a\u662f\u5426\u9023\u5167\u7db2 local,\u9023\u5916 Igw,NAT gateway,VPN gateway,peering \u7b49) \u4ee5\u53ca\u8981\u7d66\u54ea\u500b subnet \u7528,\u4e00\u500b route table \u53ef\u4ee5\u7d66\u591a\u500b subnet \u7528"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E8%A8%AD%E5%AE%9A-security-group"},"\u8a2d\u5b9a Security group")," \u5c0d\u670d\u52d9\u958b\u555f ip and port"),(0,l.kt)("li",{parentName:"ol"},"\u7db2\u8def\u5230\u9019\u908a,\u53bb\u8a2d\u5b9a\u670d\u52d9\u56c9\uff01"))),(0,l.kt)("h2",{id:"aws-internet-introduction"},"aws internet introduction"),(0,l.kt)("p",null,"\u4e00\u822c\u5730\u7aef\u8981\u8b93\u7db2\u8def\u9032\u5230 server,\u7d50\u69cb\u7c21\u55ae\u7684\u9577\u9019\u6a23"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"internet -> Router -> Switch -> server\n")),(0,l.kt)("p",null,"\u8981\u5efa\u7acb\u540c\u6a23\u7684\u7db2\u8def\u904b\u884c\u74b0\u5883,\u5728 aws \u8981\u900f\u904e Amazon Virtual Private Cloud(VPC),\u800c\u8cc7\u6e90\u7684\u5efa\u7acb\u6703\u570d\u7e5e VPC \u9032\u884c."),(0,l.kt)("h3",{id:"vpc"},"VPC"),(0,l.kt)("p",null,"VPC \u662f AWS \u63d0\u4f9b\u865b\u64ec\u5316\u7db2\u8def\u74b0\u5883\u7684\u670d\u52d9,\u8cc7\u6e90\u7684\u5efa\u7acb\u6703\u570d\u7e5e VPC \u9032\u884c."),(0,l.kt)("p",null,"VPC \u8a2d\u5b9a\u6ce8\u610f\u4e8b\u9805:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u591a\u500b VPC \u7684 CIDR \u8981\u78ba\u4fdd\u4e0d\u91cd\u758a:VPC \u5728 aws \u96f2\u4e0a\u626e\u6f14\u4e00\u500b\u7db2\u6bb5\u7684\u89d2\u8272,\u6240\u4ee5\u5728\u5275\u5efa VPC \u7684\u904e\u7a0b\u4e2d\uff0c\u9700\u8981\u70ba VPC \u548c\u5b50\u7db2\u9078\u64c7\u9069\u7576\u7684 IP \u7bc4\u570d.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"VPC \u662f\u7d81 region \u7684: \u4e0d\u540c\u5730\u5340\u7684 application \u9700\u8981\u7d81\u5404\u81ea\u7684 VPC.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"VPC \u6709 AZ \u6982\u5ff5: \u8a2d\u8a08 VPC \u548c\u5b50\u7db2\u6642\uff0c\u8acb\u8003\u616e\u53ef\u7528\u5340\u57df\u548c\u5bb9\u932f\u80fd\u529b,\u5728\u5169\u500b\u4e0d\u540c AZ \u5efa\u7acb\u540c\u6a23\u670d\u52d9,\u5373\u4f7f\u5176\u4e2d\u4e00\u500b AZ \u7684 APP \u6545\u969c,\u4e5f\u53ef\u4ee5\u9760\u53e6\u5916\u4e00\u500b AZ \u7684 APP \u63d0\u4f9b\u670d\u52d9.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"VPC \u9593 CIDR \u91cd\u758a: \u5982\u679c CIDR \u90e8\u5206\u6709\u91cd\u758a\u53ef\u80fd\u6703\u9020\u6210 peering connection \u8a2d\u5b9a\u4e0a\u5831\u932f."))),(0,l.kt)("h3",{id:"subnet"},"subnet"),(0,l.kt)("p",null,"Classless Inter-Domain Routing(CIDR) \u5c07 IP \u5730\u5740\u5283\u5206\u70ba\u7db2\u7d61\u524d\u7db4\u548c\u4e3b\u6a5f\u5730\u5740,\u53ef\u4ee5\u8868\u793a\u4e00\u5b9a\u7bc4\u570d\u7684 IP(subnet)\u6216\u8005\u6307\u5b9a\u7279\u5b9a IP."),(0,l.kt)("p",null,"\u53ef\u4ee5\u5c07 VPC CIDR \u7684 IP \u5730\u5740\u7a7a\u9593\u5283\u5206\u70ba\u591a\u500b subnet\uff0c\u6bcf\u500b subnet \u70ba\u5305\u542b\u4e00\u6bb5\u9023\u7e8c\u7684 IP \u5730\u5740\u7684\u908f\u8f2f\u7db2\u7d61\u5206\u5340."),(0,l.kt)("p",null,"\u79c1\u6709 IP \u7bc4\u570d\u7d1a\u5225\u6709\u4e09\u7a2e,\u5f9e\u4e2d\u6311\u9078\u5373\u53ef,\u4e0d\u904e\u8981\u6ce8\u610f\u7684\u662f aws \u6709\u9650\u5236\u7121\u8ad6\u54ea\u7a2e\u7d1a\u5225,\u4e00\u500b VPC \u6700\u591a\u5c31\u53ea\u80fd\u6709 65536(2 \u7684 16 \u6b21\u65b9)\u500b ip."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class A: 10.0.0.0/8,\u5305\u542b 10.0.0.0~10.255.255.255"),(0,l.kt)("li",{parentName:"ul"},"Class B: 172.16.0.0/12,\u5305\u542b 172.16.0.0 ~ 172.31.255.255"),(0,l.kt)("li",{parentName:"ul"},"Class C:192.168.0.0/16,\u5305\u542b 192.168.0.0 ~ 192.168.255.255")),(0,l.kt)("p",null,"\u56e0\u6b64\u7d50\u5408 AWS \u9650\u5236\u9084\u6709 CIDR \u5207\u5206,\u5728 aws \u914d\u7f6e VPC \u6642,\u7528 Class A \u6bcf\u500b\u5b50\u7db2\u6700\u591a\u6709 65536 \u500b ip,\u53ef\u4ee5\u5207\u5206\u51fa\u6700\u591a 256 \u500b subnet."),(0,l.kt)("p",null,"\u5982\u679c\u6709\u4e00\u500b 192.168.0.0/16 \u7684 B \u7d1a\u7db2\u6bb5,\u9700\u8981\u5c07\u4e00\u500b IP \u5730\u5740\u6bb5\u5206\u6210 8 \u500b\u5b50\u7db2\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b50\u7db2\u63a9\u78bc /19\uff08\u5373 255.255.255.192\uff09\uff0c\u9019\u500b\u5b50\u7db2\u63a9\u78bc\u53ef\u4ee5\u5c07\u4e00\u500b IP \u5730\u5740\u6bb5\u5206\u6210 2^3=8 \u500b\u5b50\u7db2\uff0c\u6bcf\u500b\u5b50\u7db2\u53ef\u4ee5\u5206\u914d 2^13=8192 \u500b IP,\u4f46\u9808\u6e1b\u53bb\u4fdd\u7559\u7db2\u8def\u5730\u5740\u8ddf\u5ee3\u64ad\u5730\u5740\u6240\u4ee5\u5171 8190 \u500b\u4e3b\u6a5f IP \u5730\u5740\uff08\u56e0\u70ba\u8981\u4fdd\u7559\u7db2\u8def\u5730\u5740\u548c\u5ee3\u64ad\u5730\u5740,\u6ce8\u610f\u5982\u679c\u5728 aws \u8981\u4fdd\u7559 5 \u500b,\u4e5f\u5c31\u662f 8187 \u500b ip \u53ef\u4f7f\u7528. ",(0,l.kt)("a",{parentName:"p",href:"https://snoopy30485.github.io/2020/04/10/%E6%88%91%E7%9A%84%E7%B6%B2%E8%B7%AF%E7%AD%86%E8%A8%98%E5%A4%96%E5%82%B3-%E5%AD%90%E7%B6%B2%E8%B7%AF%E5%88%87%E5%89%B2%E5%BF%AB%E9%80%9F%E8%A8%88%E7%AE%97%E6%B3%95/"},"\u8a73\u7d30\u8a08\u7b97\u53ef\u4ee5\u770b\u9019\u7bc7"),"\u3002"),(0,l.kt)("h4",{id:"public-subnet--private-subnet"},"public subnet & private subnet"),(0,l.kt)("p",null,"elb \u9019\u985e\u5c0d\u5916\u7684\u670d\u52d9\u6703\u9700\u8981\u9023\u7d50\u5728 public subnet\uff08\u81f3\u5c11 route table \u8981\u6709 Igw\uff09, database server \u9019\u985e\u4e0d\u9700\u8981\u5c0d\u5916\u7684\u5c31\u6703\u662f\u5728 private subnet(route table \u4e0d\u6703\u6709 Igw,\u9802\u591a\u900f\u904e NAT gateway \u9023\u5916)."),(0,l.kt)("p",null,"\u800c Nginx \u9019\u985e web server,\u5247\u4f9d\u64da\u9700\u6c42\u53ef\u4ee5\u653e\u5728 public subnet \u6216\u8005 private subnet,\u5982\u679c\u524d\u9762\u6709\u7528 elb \u914d\u5408 target group \u8f49\u5c01\u5305\u9032\u4f86,\u653e\u5728 private subnet \u4e5f\u53ef\u4ee5,\u4f46\u5982\u679c\u4e0d\u6253\u7b97\u7528 elb \u7684\u8a71,\u5c31\u9700\u8981\u914d\u7f6e eip \u7136\u5f8c\u653e\u5728 public subnet."),(0,l.kt)("h3",{id:"internet-gatewayigw"},"Internet gateway(IGW)"),(0,l.kt)("p",null,"\u7db2\u969b\u7db2\u8def\u9598\u9053(IGW) \u4e3b\u8981\u529f\u80fd\u662f\u8b93\u670d\u52d9\u80fd\u8ddf internet \u901a\u8a0a,\u5916\u90e8\u7db2\u8def\u5c01\u5305\u6703\u900f\u904e IGW \u8ddf VPC \u5167\u7684\u8cc7\u6e90\u6e9d\u901a,\u9019\u908a IGW \u5c31\u50cf\u662f\u4e00\u53f0\u9023\u5916\u7684 router,\u4f46\u662f\u5916\u90e8\u670d\u52d9\u8981\u900f\u904e IGW \u9032\u4f86\u8981\u627e\u5f97\u5230\u6a5f\u5668,\u6a5f\u5668\u5fc5\u9700\u6709\u5c0d\u5916 IP \u4f5c\u70ba\u5728 internet \u4e0a\u7684\u8def\u7531\u6e9d\u901a,\u9019\u500b\u5c0d\u5916 IP \u53ef\u4ee5\u9078\u81ea\u5df1\u7d81\u5b9a\u7684 eip \u6216\u5247\u662f aws \u96a8\u6a5f\u6d3e\u767c\u7684\u5916\u90e8 ip(\u6bcf\u6b21\u958b\u6a5f\u90fd\u6703\u8b8a)."),(0,l.kt)("p",null,"\u4f46\u554f\u984c\u4f86\u4e86,\u8981\u900f\u904e IGW \u4e0a\u7db2,\u6a5f\u5668\u5c31\u5fc5\u9808\u8981\u6709\u5c0d\u5916 ip,\u5167\u90e8 server \u958b\u555f\u5c0d\u5916 ip \u7136\u5f8c\u81e8\u6642\u958b\u901a\u9023\u63a5 IGW,\u9019\u500b\u904e\u7a0b\u8907\u96dc\u53c8\u4e0d\u5408\u7576\u521d\u5340\u5206\u5167\u5916\u7db2\u8a2d\u5b9a,\u56e0\u6b64\u662f Network Address Translation(NAT)\u4e0a\u5834\u7684\u6642\u5019\u4e86!"),(0,l.kt)("h3",{id:"network-address-translationnat-gateway"},"Network Address Translation(NAT) gateway"),(0,l.kt)("p",null,"NAT \u9700\u8981\u6709 eip \u7d81\u5b9a,\u4ed6\u505a\u7684\u4e8b\u5c31\u662f\u628a\u5167\u90e8\u51fa\u4f86\u7684\u5c01\u5305,\u8a18\u9304\u4ed6\u5011\u7684 ip \u8ddf port \u865f\u4e4b\u5f8c,\u8f49\u6210 eip \u8ddf\u96a8\u6a5f port,\u7136\u5f8c\u518d\u5c0d\u5916\u7db2\u670d\u52d9\u9023\u7dda,\u5f97\u5230 response \u5f8c,\u518d\u4f9d\u64da\u7d00\u9304\u8868\u4e0a\u7684\u8cc7\u8a0a\u505a ip \u8ddf port \u8f49\u63db."),(0,l.kt)("p",null,"\u9019\u6a23\u505a\u53ef\u4ee5\u4f7f\u79c1\u6709\u5b50\u7db2\u5167\u7684\u5167\u90e8\u8cc7\u6e90\u8a2a\u554f\u516c\u7db2\u6642\u4fdd\u6301\u5b89\u5168\u548c\u96b1\u79c1\uff0c\u540c\u6642\u9084\u53ef\u4ee5\u6709\u6548\u5730\u9632\u6b62\u4f86\u81ea Internet \u7684\u653b\u64ca\u3002"),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"NAT gateway \u662f\u8981\u4ed8\u8cbb\u7684! \u9805\u76ee\u5305\u542b elastic IP \u8ddf NAT gateway.")),(0,l.kt)("h3",{id:"route-table"},"route table"),(0,l.kt)("p",null,"\u7528\u65bc\u7ba1\u7406\u5b50\u7db2\u6d41\u91cf\u8def\u7531\u7684\u7d44\u4ef6\u3002\u6bcf\u500b VPC \u90fd\u6709\u4e00\u500b\u4e3b\u8def\u7531\u8868\uff0c\u7528\u65bc\u7ba1\u7406\u5176\u6240\u6709\u5b50\u7db2\u7684\u6d41\u91cf\u8def\u7531\u3002\u9019\u5c31\u50cf\u4f60\u5728\u964c\u751f\u7684\u57ce\u5e02,\u8981\u900f\u904e google map \u53bb\u770b\u8def\u724c\u7684\u6a19\u793a,\u624d\u77e5\u9053\u8def\u8981\u600e\u9ebc\u8d70\u4e00\u6a23,\u5982\u679c route table \u662f\u7a7a\u7684,\u90a3\u57fa\u672c\u4e0a\u8cc7\u8a0a\u4e5f\u7121\u6cd5\u50b3\u905e!"),(0,l.kt)("h3",{id:"security-group--network-access-control-list"},"security group & Network Access Control List"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"security group \u662f instance \u7d1a\u5225\u7684\u865b\u64ec\u9632\u706b\u7246,\u7528\u65bc\u63a7\u5236\u9032\u51fa\u7684\u5404\u7a2e\u5354\u8b70\u7684\u5404\u7a2e\u6d41\u91cf."),(0,l.kt)("li",{parentName:"ul"},"Network Access Control List \u662f subnet \u7d1a\u5225\u9632\u706b\u7246,\u4e5f\u662f\u62ff\u4f86\u7ba1\u6d41\u91cf.")),(0,l.kt)("p",null,"\u5169\u8005\u9664\u4e86\u7d1a\u5225\u4ee5\u5916\u7684\u5340\u5225:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NACL \u662f\u7121\u72c0\u614b\u7684(stateless),\u4e0d\u8ddf\u8e64\u72c0\u614b,\u4e5f\u5c31\u662f\u8981\u898f\u5b9a 7.7.7.7 \u80fd\u9032\u4f86(inbound),\u540c\u6642\u4e5f\u8981\u898f\u5b9a\u80fd\u51fa\u53bb(outbound),\u624d\u6703\u653e\u884c\u8ddf 7.7.7.7 \u6709\u95dc\u7684\u6d41\u91cf."),(0,l.kt)("li",{parentName:"ul"},"Security group \u662f\u6709\u72c0\u614b\u7684(stateful),\u9019\u4ee3\u8868\u6703\u81ea\u52d5\u5141\u8a31\u51fa\u7ad9(outbound)\u6216\u5165\u7ad9(inbound)\u7684\u8fd4\u56de\u6d41\u91cf,\u8209\u4f8b\u4f86\u8aaa:\u5982\u679c\u5c0d\u5916\u53ef\u4ee5\u9023\u63a5 7.7.7.7:80,\u90a3 7.7.7.7:80 \u56de\u4f86\u7684\u6d41\u91cf\u4e5f\u6703\u81ea\u52d5\u5141\u8a31. \u8981\u6ce8\u610f\uff017.7.7.7:80 \u4e0d\u80fd\u81ea\u5df1\u9032\u4f86.")),(0,l.kt)("h2",{id:"lab"},"lab"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76ee\u6a19:Region \u5167\u5efa\u7acb VPC,\u4e26\u4f7f\u7528 elb \u5c07\u6d41\u91cf\u5c0e\u5230\u5169\u500b\u4e0d\u540c AZ \u4e2d\u7684 web server,\u907f\u514d\u56e0\u70ba\u55ae\u4e00 AZ \u6545\u969c\u5c0e\u81f4\u7684\u670d\u52d9\u4e2d\u65b7.\u65e5\u5e38\u7ba1\u7406\u900f\u904e\u5821\u58d8\u6a5f(bastion)\u9032\u5165 web server \u505a\u7ba1\u7406.\u672c\u7bc7\u4e3b\u8981\u8b1b\u7db2\u8def\u8a2d\u5b9a\u90e8\u5206,\u800c elb,EC2 \u7b49\u670d\u52d9\u8a2d\u5b9a\u6703\u7559\u5230\u4e0b\u4e00\u7bc7.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-vpc"},"\u5efa\u7acb VPC")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-subnet"},"\u5efa\u7acb public subnet & private subnet(\u9700\u9023\u7d50 VPC)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-internet-gateway"},"\u5efa\u7acb Internet gateway(\u9700\u9023\u7d50 VPC)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-nat-gateway"},"(optional)\u5efa\u7acb NAT gateway"),"(optional,\u9700\u9023\u7d50 subnet,\u914d\u7f6e eip,\u524d\u63d0\u662f private subnet \u9700\u8981\u9023\u5916\u6642)"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B-route-table"},"\u5efa\u7acb route table"),"(\u8a2d\u5b9a\u662f\u5426\u9023\u5167\u7db2 local,\u9023\u5916 Igw,NAT gateway,VPN gateway,peering \u7b49) \u4ee5\u53ca\u8981\u7d66\u54ea\u500b subnet \u7528,\u4e00\u500b route table \u53ef\u4ee5\u7d66\u591a\u500b subnet \u7528"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#%E8%A8%AD%E5%AE%9A-security-group"},"\u8a2d\u5b9a Security group")," \u5c0d\u670d\u52d9\u958b\u555f ip and port"),(0,l.kt)("li",{parentName:"ol"},"\u7db2\u8def\u5230\u9019\u908a,\u53bb\u8a2d\u5b9a\u670d\u52d9\u56c9\uff01")),(0,l.kt)("h3",{id:"cidr-\u898f\u5283"},"CIDR \u898f\u5283"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CIDR \u898f\u5283:VPC \u7528 10.0.0.0/16.\u9019\u908a\u9810\u8a08\u53ea\u7528 4 \u500b subnet,\u4e0d\u904e\u70ba\u4e86\u4fdd\u96aa\u6240\u4ee5\u6703\u5207\u51fa 16 \u500b(2 \u7684 4 \u6b21\u65b9)\u6240\u4ee5\u5b50\u7db2\u6bb5 CIDR \u6703\u662f 20,\u6bcf\u500b subnet \u6263\u6389 aws \u9810\u7559\u7684 5 \u500b ip \u9084\u6703\u6709 4091 \u500b ip \u53ef\u7528.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u6b04\u4f4d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8a2d\u5b9a\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"VPC ID"),(0,l.kt)("td",{parentName:"tr",align:null},"ford-test-vpc"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b32\u5efa\u7acb\u5b50\u7db2\u8def\u7684 VPC\uff0c\u6b64\u4f8b\u70ba sample-vpc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0d\u5916\u5b50\u7db2\u8def 1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u7db2\u8def\u540d\u7a31"),(0,l.kt)("td",{parentName:"tr",align:null},"ford-subnet-public01"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u8a02\u5b50\u7db2\u8def\u7684\u540d\u7a31")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Availability Zone"),(0,l.kt)("td",{parentName:"tr",align:null},"ap-northeast-1a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9078\u64c7\u5b50\u7db2\u8def\u6240\u5728\u7684 Availability Zone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IPv4 CIDR \u5340\u584a"),(0,l.kt)("td",{parentName:"tr",align:null},"10.0.0.0/20"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u524d\u9762\u7684\u4ecb\u7d39")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0d\u5916\u5b50\u7db2\u8def 2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u7db2\u8def\u540d\u7a31"),(0,l.kt)("td",{parentName:"tr",align:null},"ford-subnet-public02"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Availability Zone"),(0,l.kt)("td",{parentName:"tr",align:null},"ap-northeast-1c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IPv4 CIDR \u5340\u584a"),(0,l.kt)("td",{parentName:"tr",align:null},"10.0.16.0/20"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5167\u90e8\u5b50\u7db2\u8def 1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u7db2\u8def\u540d\u7a31"),(0,l.kt)("td",{parentName:"tr",align:null},"ford-subnet-private01"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Availability Zone"),(0,l.kt)("td",{parentName:"tr",align:null},"ap-northeast-1a"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Pv4 CIDR \u5340\u584a"),(0,l.kt)("td",{parentName:"tr",align:null},"10.0.32.0/20"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5167\u90e8\u5b50\u7db2\u8def 2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u7db2\u8def\u540d\u7a31"),(0,l.kt)("td",{parentName:"tr",align:null},"ford-subnet-private02"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Availability Zone"),(0,l.kt)("td",{parentName:"tr",align:null},"ap-northeast-1c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Pv4 CIDR \u5340\u584a"),(0,l.kt)("td",{parentName:"tr",align:null},"10.0.48.0/20"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"\u5efa\u7acb-vpc"},"\u5efa\u7acb VPC"),(0,l.kt)("p",null,"\u64cd\u4f5c:"),(0,l.kt)("p",null,"VPC -> create VPC -> IPv4 \u9078 manual input -> IPv4 CIDR 10.0.0.0/16 ->\u7121 IPv6 CIDR \u5340\u584a."),(0,l.kt)("h3",{id:"\u5efa\u7acb-subnet"},"\u5efa\u7acb subnet"),(0,l.kt)("p",null,"\u64cd\u4f5c:"),(0,l.kt)("p",null,"VPC -> Create subnet -> choose VPC ID -> choose AZ -> fill in CIDR of subnet ->done"),(0,l.kt)("p",null,"\u9019\u908a\u8981\u4f9d\u64da\u524d\u9762 CIDR \u898f\u5283\u5716\u8981\u505a\u56db\u500b subnet(\u5169\u500b public \u5169\u500b private,CIDR \u7167\u4e0a\u9762)"),(0,l.kt)("h3",{id:"\u5efa\u7acb-internet-gateway"},"\u5efa\u7acb Internet gateway"),(0,l.kt)("p",null,"\u64cd\u4f5c:"),(0,l.kt)("p",null,'VPC -> Internet Gateway ->click on the "Attach to VPC" option in the "Actions" menu. -> select the VPC to attach the Internet Gateway ->done'),(0,l.kt)("h3",{id:"\u5efa\u7acb-nat-gateway"},"\u5efa\u7acb NAT gateway"),(0,l.kt)("p",null,"\u56e0\u70ba\u6709\u5169\u500b web server \u5404\u81ea\u8981\u51fa\u53bb\u8981\u900f\u904e\u5404\u81ea\u7684 NAT Gateway,\u9019\u908a\u7684 NAT Gateway \u662f\u5efa\u7acb\u5728 public subnet \u4e2d\u6b50\uff01"),(0,l.kt)("p",null,"\u64cd\u4f5c:"),(0,l.kt)("p",null,"VPC(verify AZ first) -> NAT Gateways -> Create NAT Gateway -> bind EIP to NAT Gateway -> done and wait for status become available ->associate NAT Gateway with public subnet -> private route table add destination 0.0.0.0/0 to NAT Gateway."),(0,l.kt)("h3",{id:"\u5efa\u7acb-route-table"},"\u5efa\u7acb route table"),(0,l.kt)("h4",{id:"route-table-\u8a9e\u6cd5"},"route table \u8a9e\u6cd5"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684 ",(0,l.kt)("highlight",{color:"#25c2a0"},"\u76ee\u7684\u5730\u662f 10.0.0.0/16"),",\u8981\u900f\u904e",(0,l.kt)("highlight",{color:"#25c2a0"},"\u4e0b\u4e00\u7ad9\u76ee\u6a19 ex. 10.0.0.1 or local(Aws)")," \u5e6b\u4f60\u9001\u8cc7\u6599\u51fa\u53bb."),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684 ",(0,l.kt)("highlight",{color:"#25c2a0"},"\u76ee\u7684\u5730\u662f 0.0.0.0/0"),",\u8981\u900f\u904e",(0,l.kt)("highlight",{color:"#25c2a0"},"\u4e0b\u4e00\u7ad9\u76ee\u6a19 Igw")," \u5e6b\u4f60\u9001\u8cc7\u6599\u51fa\u53bb."),(0,l.kt)("h4",{id:"route-table-\u8a2d\u5b9a"},"route table \u8a2d\u5b9a"),(0,l.kt)("p",null,"\u524d\u9762\u898f\u5283\u5171 2 \u500b public subnet,2 \u500b private subnet.public subnet \u53ef\u4ee5\u5171\u7528\u4e00\u500b\u7d66 public subnet \u4f7f\u7528\u7684 route table,\u800c private subnet \u8981\u5169\u500b for private subnet \u7684 route table(\u5dee\u5225\u5728 NAT gateway \u4e0d\u540c),\u56e0\u6b64\u5171\u6703\u5efa\u7acb 3 \u500b route table."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"public subnet: \u8a2d\u5b9a destination 0.0.0.0/0 target \u904e IGW,destination \u5230 10.0.0.0/16,target \u662f local(\u672c\u5730\u7aef).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"private subnet1: destination 0.0.0.0/0 \u800c Target ngw-01.destination 10.0.0.0/16 \u800c Target local.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"private subnet2: destination 0.0.0.0/0 \u800c Target ngw-02 ,destination 10.0.0.0/16 \u800c Target local."))),(0,l.kt)("p",null,"\u64cd\u4f5c:"),(0,l.kt)("p",null,"VPC(verify AZ first) -> Route tables -> create route table -> done -> edit routes(\u52a0 target and destination)->subnet associations"),(0,l.kt)("h3",{id:"\u8a2d\u5b9a-security-group"},"\u8a2d\u5b9a Security group"),(0,l.kt)("p",null,"default\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"inbound rules: allow Port range:All, Protocol:All Source:10.0.0.0/16")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Outbound rules: Port range:All, Protocol:All Source:0.0.0.0/0(\u70ba\u4e86\u53ef\u4ee5\u628a\u5c0d\u5916\u8cc7\u8a0a\u900f\u904e NAT \u51fa\u53bb), Port range:All, Protocol:All Source:10.0.0.0/16(\u53ef\u4ee5\u5230\u5167\u90e8\u5176\u4ed6 subnet)"))),(0,l.kt)("p",null,"forBastion(\u5821\u58d8\u6a5f):\u5141\u8a31 ssh"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"inbound rules: allow Protocol:ssh Source:YourIp")),(0,l.kt)("p",null,"forElb:\u5141\u8a31 HTTP and HTTPS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"inbound rules: allow 0.0.0.0/0 HTTP,HTTPS \u9032\u4f86.")),(0,l.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,l.kt)("p",null,"\u7db2\u8def\u57fa\u672c\u8a2d\u5b9a\u5728\u9019\u908a,\u4e0b\u4e00\u7bc7\u662f\u6709\u95dc EC2 \u8ddf ELB \u7684\u8a2d\u5b9a."))}b.isMDXComponent=!0}}]);