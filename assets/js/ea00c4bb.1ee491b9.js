"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[7449],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={title:"Common folder and their uses in Linux",description:"\u4ecb\u7d39linux\u7cfb\u7d71\u898f\u5283\u5404\u8cc7\u6599\u593e\u8981\u653e\u7f6e\u54ea\u9700\u6a94\u6848,\u900f\u904e\u672c\u7bc7,\u4f60\u53ef\u4ee5\u77e5\u9053\u5047\u5982\u4f60\u8981\u627e\u4f60\u7684mysql\u8cc7\u6599\u593e(\u900f\u904eyum\u5b89\u88dd),\u4f60\u61c9\u8a72\u53bb\u54ea\u627e.1. \u7528 yum \u5b89\u88dd mysql \u4e4b\u5f8c,\u8acb\u554f\u4ed6\u7684\u6578\u64da\u4f4d\u7f6e\u6703\u5728\u54ea\u500b\u8cc7\u6599\u593e? \u8a2d\u5b9a\u6a94\u6703\u5728\u54ea?\u6578\u64da\u6587\u4ef6\u6703\u653e\u5728/var/lib \u5e95\u4e0b,\u4ee5 mariadb \u70ba\u4f8b,\u5230/var/lib/mysql \u5e95\u4e0b\u6703\u770b\u5230\u5404\u6578\u64da\u5eab\u7684\u6578\u64da(\u6bcf\u500b database \u4e00\u500b folder)\u9084\u6709 crash recovery \u6642\u7528\u65bc\u5132\u5b58 metadata \u7684 log \u6a94\u6848\u7b49,\u9019\u662f\u56e0\u70ba/var \u898f\u5283\u662f\u653e\u6578\u64da\u6587\u4ef6\u8ddf\u65e5\u8a8c\u6587\u4ef6.\u8a2d\u5b9a\u6a94\u5728/etc \u5e95\u4e0b,\u4f9d\u64da\u7cfb\u7d71,centos \u53ef\u80fd\u5728/etc/my.cnf \u6216/etc/mysql/my.cnf,\u4e0d\u904e\u57fa\u672c\u4e0a\u90fd\u6703\u5728/etc,\u56e0\u70ba/etc \u898f\u5283\u653e\u7cfb\u7d71\u6216\u61c9\u7528\u7a0b\u5e8f\u7684 config \u7684,\u6ce8\u610f my.cnf \u6703\u7528!includedir /etc/my.cnf.d \u53bb\u9032\u4e00\u6b65\u5305\u8a2d\u5b9a\u6a94,\u9700\u8981 cnf \u70ba\u7d50\u5c3e.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["linux"]},i=void 0,o={permalink:"/blog/2023/04/27/linux-server/linux-default-use-of-folder",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/linux-server/2023-04-27-linux-default-use-of-folder.md",source:"@site/blog/linux-server/2023-04-27-linux-default-use-of-folder.md",title:"Common folder and their uses in Linux",description:"\u4ecb\u7d39linux\u7cfb\u7d71\u898f\u5283\u5404\u8cc7\u6599\u593e\u8981\u653e\u7f6e\u54ea\u9700\u6a94\u6848,\u900f\u904e\u672c\u7bc7,\u4f60\u53ef\u4ee5\u77e5\u9053\u5047\u5982\u4f60\u8981\u627e\u4f60\u7684mysql\u8cc7\u6599\u593e(\u900f\u904eyum\u5b89\u88dd),\u4f60\u61c9\u8a72\u53bb\u54ea\u627e.1. \u7528 yum \u5b89\u88dd mysql \u4e4b\u5f8c,\u8acb\u554f\u4ed6\u7684\u6578\u64da\u4f4d\u7f6e\u6703\u5728\u54ea\u500b\u8cc7\u6599\u593e? \u8a2d\u5b9a\u6a94\u6703\u5728\u54ea?\u6578\u64da\u6587\u4ef6\u6703\u653e\u5728/var/lib \u5e95\u4e0b,\u4ee5 mariadb \u70ba\u4f8b,\u5230/var/lib/mysql \u5e95\u4e0b\u6703\u770b\u5230\u5404\u6578\u64da\u5eab\u7684\u6578\u64da(\u6bcf\u500b database \u4e00\u500b folder)\u9084\u6709 crash recovery \u6642\u7528\u65bc\u5132\u5b58 metadata \u7684 log \u6a94\u6848\u7b49,\u9019\u662f\u56e0\u70ba/var \u898f\u5283\u662f\u653e\u6578\u64da\u6587\u4ef6\u8ddf\u65e5\u8a8c\u6587\u4ef6.\u8a2d\u5b9a\u6a94\u5728/etc \u5e95\u4e0b,\u4f9d\u64da\u7cfb\u7d71,centos \u53ef\u80fd\u5728/etc/my.cnf \u6216/etc/mysql/my.cnf,\u4e0d\u904e\u57fa\u672c\u4e0a\u90fd\u6703\u5728/etc,\u56e0\u70ba/etc \u898f\u5283\u653e\u7cfb\u7d71\u6216\u61c9\u7528\u7a0b\u5e8f\u7684 config \u7684,\u6ce8\u610f my.cnf \u6703\u7528!includedir /etc/my.cnf.d \u53bb\u9032\u4e00\u6b65\u5305\u8a2d\u5b9a\u6a94,\u9700\u8981 cnf \u70ba\u7d50\u5c3e.",date:"2023-04-27T00:00:00.000Z",formattedDate:"April 27, 2023",tags:[{label:"linux",permalink:"/blog/tags/linux"}],readingTime:4.185,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Common folder and their uses in Linux",description:"\u4ecb\u7d39linux\u7cfb\u7d71\u898f\u5283\u5404\u8cc7\u6599\u593e\u8981\u653e\u7f6e\u54ea\u9700\u6a94\u6848,\u900f\u904e\u672c\u7bc7,\u4f60\u53ef\u4ee5\u77e5\u9053\u5047\u5982\u4f60\u8981\u627e\u4f60\u7684mysql\u8cc7\u6599\u593e(\u900f\u904eyum\u5b89\u88dd),\u4f60\u61c9\u8a72\u53bb\u54ea\u627e.1. \u7528 yum \u5b89\u88dd mysql \u4e4b\u5f8c,\u8acb\u554f\u4ed6\u7684\u6578\u64da\u4f4d\u7f6e\u6703\u5728\u54ea\u500b\u8cc7\u6599\u593e? \u8a2d\u5b9a\u6a94\u6703\u5728\u54ea?\u6578\u64da\u6587\u4ef6\u6703\u653e\u5728/var/lib \u5e95\u4e0b,\u4ee5 mariadb \u70ba\u4f8b,\u5230/var/lib/mysql \u5e95\u4e0b\u6703\u770b\u5230\u5404\u6578\u64da\u5eab\u7684\u6578\u64da(\u6bcf\u500b database \u4e00\u500b folder)\u9084\u6709 crash recovery \u6642\u7528\u65bc\u5132\u5b58 metadata \u7684 log \u6a94\u6848\u7b49,\u9019\u662f\u56e0\u70ba/var \u898f\u5283\u662f\u653e\u6578\u64da\u6587\u4ef6\u8ddf\u65e5\u8a8c\u6587\u4ef6.\u8a2d\u5b9a\u6a94\u5728/etc \u5e95\u4e0b,\u4f9d\u64da\u7cfb\u7d71,centos \u53ef\u80fd\u5728/etc/my.cnf \u6216/etc/mysql/my.cnf,\u4e0d\u904e\u57fa\u672c\u4e0a\u90fd\u6703\u5728/etc,\u56e0\u70ba/etc \u898f\u5283\u653e\u7cfb\u7d71\u6216\u61c9\u7528\u7a0b\u5e8f\u7684 config \u7684,\u6ce8\u610f my.cnf \u6703\u7528!includedir /etc/my.cnf.d \u53bb\u9032\u4e00\u6b65\u5305\u8a2d\u5b9a\u6a94,\u9700\u8981 cnf \u70ba\u7d50\u5c3e.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["linux"]},prevItem:{title:"Basic introduction of ansible",permalink:"/blog/2023/04/30/IaC/ansible/ansible-basic-introduction"},nextItem:{title:"aws EC2 and ELB setting introduction",permalink:"/blog/2023/04/26/Aws/aws-ec2-elb-setting"}},c={authorsImageUrls:[void 0]},u=[{value:"purpose of each folder",id:"purpose-of-each-folder",level:2},{value:"Basic concepts",id:"basic-concepts",level:3}],s={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose-of-each-folder"},"purpose of each folder"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/\uff08\u6839\u76ee\u9304\uff09\uff1aLinux \u6587\u4ef6\u7cfb\u7d71\u7684\u8d77\u9ede\uff0c\u6240\u6709\u7684\u76ee\u9304\u548c\u6587\u4ef6\u90fd\u662f\u4ee5\u6839\u76ee\u9304\u4f5c\u70ba\u53c3\u7167\u9ede\u3002"),(0,a.kt)("li",{parentName:"ul"},"/bin\uff1a\u5305\u542b\u4e00\u4e9b\u5e38\u7528\u7684\u7cfb\u7d71\u4e8c\u9032\u4f4d\u57f7\u884c\u6a94\uff08executable\uff09\uff0c\u5982 ls\u3001cp \u7b49\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"/boot\uff1a\u7cfb\u7d71\u555f\u52d5\u6642\u4f7f\u7528\u7684\u6838\u5fc3\u6a94\u6848\u548c\u555f\u52d5\u8f09\u5165\u5668\uff08bootloader\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"/dev\uff1a\u5305\u542b\u4e00\u4e9b\u88dd\u7f6e\u6a94\u6848\uff08device files\uff09\uff0c\u5982\u786c\u76e4\u3001\u9375\u76e4\u3001\u6ed1\u9f20\u7b49\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"/etc\uff1a\u7cfb\u7d71\u5168\u5c40\u7684\u914d\u7f6e\u6587\u4ef6\u76ee\u9304\uff0c\u5305\u542b\u7cfb\u7d71\u548c\u61c9\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"/home\uff1a\u7528\u6236\u7684\u5bb6\u76ee\u9304\uff0c\u5373\u6bcf\u500b\u7528\u6236\u7684\u500b\u4eba\u8cc7\u6599\u76ee\u9304\u3002"),(0,a.kt)("li",{parentName:"ul"},"/lib\uff1a\u5eab\u6587\u4ef6\u76ee\u9304\uff0c\u5305\u542b\u7cfb\u7d71\u548c\u61c9\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u5eab\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"/mnt\uff1a\u7528\u6236\u66ab\u6642\u639b\u8f09\u7684\u6587\u4ef6\u7cfb\u7d71\u76ee\u9304\uff0c\u901a\u5e38\u7528\u65bc\u639b\u8f09\u5916\u90e8\u5132\u5b58\u8a2d\u5099\uff0c\u5982 USB \u96a8\u8eab\u789f\u3001CD-ROM \u7b49\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"/opt\uff1a\u5b58\u653e\u53ef\u9078\u7684\u61c9\u7528\u7a0b\u5e8f\u76ee\u9304\uff0c\u901a\u5e38\u5305\u542b\u7b2c\u4e09\u65b9\u61c9\u7528\u7a0b\u5e8f\u548c\u8edf\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"/proc\uff1a\u865b\u64ec\u6587\u4ef6\u7cfb\u7d71\u76ee\u9304\uff0c\u5141\u8a31\u64cd\u4f5c\u7cfb\u7d71\u5167\u6838\u548c\u9032\u7a0b\u7684\u904b\u884c\u72c0\u614b\u3002"),(0,a.kt)("li",{parentName:"ul"},"/root\uff1aroot \u7528\u6236\u7684\u5bb6\u76ee\u9304\u3002"),(0,a.kt)("li",{parentName:"ul"},"/run\uff1a\u7cfb\u7d71\u555f\u52d5\u5f8c\uff0c\u67d0\u4e9b\u7a0b\u5e8f\u904b\u884c\u6642\u4f7f\u7528\u7684\u66ab\u5b58\u76ee\u9304\uff0c\u5305\u62ec PID \u6587\u4ef6\u3001\u639b\u8f09\u9ede\u7b49\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"/sbin\uff1a\u5305\u542b\u4e00\u4e9b\u7cfb\u7d71\u7ba1\u7406\u7528\u9014\u7684\u4e8c\u9032\u4f4d\u57f7\u884c\u6a94\uff0c\u50c5\u9650 root \u7528\u6236\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"/srv\uff1a\u5b58\u653e\u7db2\u8def\u670d\u52d9\uff08\u5982 FTP\u3001HTTP\uff09\u7684\u6578\u64da\u76ee\u9304\u3002"),(0,a.kt)("li",{parentName:"ul"},"/sys\uff1a\u7cfb\u7d71\u6587\u4ef6\u7cfb\u7d71\uff0c\u5305\u542b\u7cfb\u7d71\u786c\u4ef6\u548c\u8a2d\u5099\u7684\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},"/tmp\uff1a\u7528\u65bc\u5b58\u653e\u81e8\u6642\u6587\u4ef6\u7684\u76ee\u9304\uff0c\u4e00\u822c\u6587\u4ef6\u90fd\u6703\u5728\u7cfb\u7d71\u91cd\u65b0\u555f\u52d5\u5f8c\u81ea\u52d5\u6e05\u9664\u3002"),(0,a.kt)("li",{parentName:"ul"},"/usr\uff1a\u7528\u65bc\u5b58\u653e\u5171\u4eab\u7684\u3001\u53ea\u8b80\u7684\u548c\u4e0d\u7d93\u5e38\u8b8a\u52d5\u7684\u6587\u4ef6\uff0c\u5305\u62ec\u7a0b\u5e8f\u548c\u5eab\u6587\u4ef6\u7b49\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"/var\uff1a\u5b58\u653e\u7d93\u5e38\u8b8a\u52d5\u7684\u6587\u4ef6\uff0c\u5305\u62ec\u65e5\u8a8c\u6587\u4ef6\u3001\u7de9\u5b58\u548c\u81e8\u6642\u6587\u4ef6,\u67d0\u4e9b\u61c9\u7528\u7a0b\u5e8f\u548c\u670d\u52d9\u7684\u6578\u64da\u5eab\u4ee5\u53ca\u5176\u4ed6\u5404\u7a2e\u7a0b\u5f0f\u904b\u884c\u6642\u7522\u751f\u7684\u6578\u64da\u6587\u4ef6\u7b49\u3002")),(0,a.kt)("h3",{id:"basic-concepts"},"Basic concepts"),(0,a.kt)("p",null,"\u55ae\u7d14\u770b\u4e0a\u9762\u7684\u5404\u8cc7\u6599\u593e\u7528\u8655\u4e00\u5b9a\u9084\u662f\u6703\u89ba\u5f97\u5f88\u964c\u751f,\u4ee5\u4e0b\u7528\u5e38\u898b\u4f8b\u5b50\u5e6b\u52a9\u4e86\u89e3"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7528 yum \u5b89\u88dd mysql \u4e4b\u5f8c,\u8acb\u554f\u4ed6\u7684\u6578\u64da\u4f4d\u7f6e\u6703\u5728\u54ea\u500b\u8cc7\u6599\u593e? \u8a2d\u5b9a\u6a94\u6703\u5728\u54ea? \u5176\u4ed6\uff1f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6578\u64da\u6587\u4ef6\u6703\u653e\u5728/var/lib \u5e95\u4e0b,\u4ee5 mariadb \u70ba\u4f8b,\u5230/var/lib/mysql \u5e95\u4e0b\u6703\u770b\u5230\u5404\u6578\u64da\u5eab\u7684\u6578\u64da(\u6bcf\u500b database \u4e00\u500b folder)\u9084\u6709 crash recovery \u6642\u7528\u65bc\u5132\u5b58 metadata \u7684 log \u6a94\u6848\u7b49,\u9019\u662f\u56e0\u70ba/var \u898f\u5283\u662f\u653e\u6578\u64da\u6587\u4ef6\u8ddf\u65e5\u8a8c\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u6a94\u5728/etc \u5e95\u4e0b,\u4f9d\u64da\u7cfb\u7d71,centos \u53ef\u80fd\u5728/etc/my.cnf \u6216/etc/mysql/my.cnf,\u4e0d\u904e\u57fa\u672c\u4e0a\u90fd\u6703\u5728/etc,\u56e0\u70ba/etc \u898f\u5283\u653e\u7cfb\u7d71\u6216\u61c9\u7528\u7a0b\u5e8f\u7684 config \u7684,\u6ce8\u610f my.cnf \u6703\u7528!includedir /etc/my.cnf.d \u53bb\u9032\u4e00\u6b65\u5305\u8a2d\u5b9a\u6a94,\u9700\u8981 cnf \u70ba\u7d50\u5c3e."),(0,a.kt)("li",{parentName:"ul"},"pid \u6587\u4ef6\u4e00\u822c\u4f4d\u4e8e /var/run/mysqld/mysqld.pid \u6216 /var/lib/mysql/{hostname}.pid"),(0,a.kt)("li",{parentName:"ul"},"\u65e5\u8a8c\u6703\u5728/var/log/mysql \u5e95\u4e0b."),(0,a.kt)("li",{parentName:"ul"},"\u5171\u7528\u6587\u4ef6\u5728 /usr/share/mysql/ \u4e2d\u5b58\u653e\u7684\u662f MySQL \u7684\u4e00\u4e9b\u5171\u7528\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u62ec\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u516c\u7528\u7684\u8a9e\u8a00\u6587\u4ef6\u548c\u5b57\u7b26\u96c6\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u516c\u7528\u7684\u7cfb\u7d71\u8868\u7a7a\u9593\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u516c\u7528\u7684\u63d2\u4ef6\u5eab\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u516c\u7528\u7684\u6587\u6a94\u548c\u793a\u4f8b\u6587\u4ef6\u3002")))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"docker \u6578\u64da\u6587\u4ef6\u8ddf\u8a2d\u5b9a\u6a94\uff1f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6578\u64da\u6587\u4ef6\u6703\u5728/var/lib/docker \u5e95\u4e0b,\u4f9d\u7167 container ID \u653e\u7f6e(\u53e6\u5916\u7528 bind mount \u639b\u7684\u4e0d\u7b97,\u8907\u7fd2\u4e00\u4e0b bind mount \u5efa\u7acb\u6307\u4ee4",(0,a.kt)("inlineCode",{parentName:"li"},"docker run -d --name my_container \\ -v /path/on/host:/path/in/container \\my_image"),")"),(0,a.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u6a94\u5728/etc/docker \u5e95\u4e0b,\u9810\u8a2d\u53ea\u6709\u4e00\u96bb key.json,\u4e5f\u53ef\u4ee5\u52a0\u5165\u5176\u4ed6\u8a2d\u5b9a,\u4f8b\u5982/etc/docker/daemon.json \u53ef\u4ee5\u5c0d log \u683c\u5f0f\u7684 size \u8ddf\u8f2a\u8a62\u505a\u8a2d\u5b9a.")))}p.isMDXComponent=!0}}]);