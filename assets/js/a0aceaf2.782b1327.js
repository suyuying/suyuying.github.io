"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[1122],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(r),y=a,d=c["".concat(s,".").concat(y)]||c[y]||u[y]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},88819:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const l={title:"Install mysql in aws linux ami",description:"\u56e0\u70ba\u5728\u5b89\u88dd mysql \u5230 aws \u7684 linux ami \u4e0a,\u9047\u5230\u4e00\u4e9b\u554f\u984c,\u9019\u908a\u7d00\u9304\u6574\u500b\u5b89\u88dd\u904e\u7a0b\uff01\u4ee5\u53ca\u8981\u6539my.cnf\u642c\u79fbdata\u4f4d\u7f6e\u8981\u505a\u7684\u8a2d\u5b9a\uff01",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["SQL"]},o=void 0,i={permalink:"/blog/2023/05/17/SQL/install-mysql-in-aws-linux",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/SQL/2023-05-17-install-mysql-in-aws-linux.md",source:"@site/blog/SQL/2023-05-17-install-mysql-in-aws-linux.md",title:"Install mysql in aws linux ami",description:"\u56e0\u70ba\u5728\u5b89\u88dd mysql \u5230 aws \u7684 linux ami \u4e0a,\u9047\u5230\u4e00\u4e9b\u554f\u984c,\u9019\u908a\u7d00\u9304\u6574\u500b\u5b89\u88dd\u904e\u7a0b\uff01\u4ee5\u53ca\u8981\u6539my.cnf\u642c\u79fbdata\u4f4d\u7f6e\u8981\u505a\u7684\u8a2d\u5b9a\uff01",date:"2023-05-17T00:00:00.000Z",formattedDate:"May 17, 2023",tags:[{label:"SQL",permalink:"/blog/tags/sql"}],readingTime:2.62,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Install mysql in aws linux ami",description:"\u56e0\u70ba\u5728\u5b89\u88dd mysql \u5230 aws \u7684 linux ami \u4e0a,\u9047\u5230\u4e00\u4e9b\u554f\u984c,\u9019\u908a\u7d00\u9304\u6574\u500b\u5b89\u88dd\u904e\u7a0b\uff01\u4ee5\u53ca\u8981\u6539my.cnf\u642c\u79fbdata\u4f4d\u7f6e\u8981\u505a\u7684\u8a2d\u5b9a\uff01",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["SQL"]},prevItem:{title:"how to create user like root",permalink:"/blog/2023/05/24/linux-server/create-user-like-root"},nextItem:{title:"Basic introduction of Terraform",permalink:"/blog/2023/05/15/IaC/Terraform/basic-introuduction-of-Terraform"}},s={authorsImageUrls:[void 0]},m=[{value:"\u5b89\u88dd\u904e\u7a0b",id:"\u5b89\u88dd\u904e\u7a0b",level:2},{value:"\u8981\u63db data \u5b58\u653e\u4f4d\u7f6e\u5230\u4f60\u65b0\u5efa\u7acb\u7684 EBS",id:"\u8981\u63db-data-\u5b58\u653e\u4f4d\u7f6e\u5230\u4f60\u65b0\u5efa\u7acb\u7684-ebs",level:3},{value:"\u5047\u5982\u4f60\u4eca\u5929\u5fd8\u8a18 mysql \u5bc6\u78bc(5.7)",id:"\u5047\u5982\u4f60\u4eca\u5929\u5fd8\u8a18-mysql-\u5bc6\u78bc57",level:3}],p={toc:m},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u56e0\u70ba\u5728\u5b89\u88dd mysql \u5230 aws \u7684 linux ami \u4e0a,\u9047\u5230\u4e00\u4e9b\u554f\u984c,\u9019\u908a\u7d00\u9304\u6574\u500b\u5b89\u88dd\u904e\u7a0b\uff01"),(0,a.kt)("h2",{id:"\u5b89\u88dd\u904e\u7a0b"},"\u5b89\u88dd\u904e\u7a0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("a",{parentName:"li",href:"https://dev.mysql.com/downloads/repo/yum/"},"\u5b98\u7db2\u9019\u9801"),"\u6311\u4f60\u8981\u7684\u5b89\u88dd\u6a94\u4e26\u4e0b\u8f09,\u9019\u908a\u6211\u76f4\u63a5\u5217\u51fa\u6211\u7684\u7248\u672c\u8ddf\u6307\u4ee4,\u6ce8\u610f\u4f60\u9019\u908a\u9078\u9805\u8ddf\u4f60 centos \u4e4b\u985e\u7248\u672c\u6709\u95dc\uff01")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"install the MySQL Yum repository configuration package, and /etc/yum.repos.d/ would show new config of mysql.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rpm -ivh mysql57-community-release-el7-11.noarch.rpm\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5f9e mysql \u7684 RPM repo \u90a3\u908a\u628a GPG key \u62c9\u4e0b\u4f86,\u9019\u6703\u7528\u65bc\u4e4b\u5f8c package manager \u5b89\u88dd mysql \u9a57\u8b49\u6240\u5b89\u88dd\u7248\u672c\u7684\u6578\u4f4d\u7c3d\u7ae0\u662f\u5426\u662f\u5b98\u65b9\u767c\u884c,\u8acb\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022\n")),(0,a.kt)("p",null,"\u5982\u679c\u6c92\u6709\u57f7\u884c\u6703\u5831\u932f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'warning: /var/cache/yum/x86_64/2/mysql57-community/packages/mysql-community-libs-compat-5.7.37-1.el7.x86_64.rpm: Header V4 RSA/SHA256 Signature, key ID 3a79bd29: NOKEY\nRetrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql\n\n\nThe GPG keys listed for the "MySQL 5.7 Community Server" repository are already installed but they are not correct for this package.\nCheck that the correct key URLs are configured for this repository.\n\n\n Failing package is: mysql-community-libs-compat-5.7.37-1.el7.x86_64\n GPG Keys are configured as: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u900f\u904e packet manager \u5b89\u88dd mysql server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum install mysql-community-server -y\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u5230\u9019\u90e8\u57fa\u672c\u4e0a\u5c31\u5b8c\u6210\u4e86,\u4f60\u63a5\u8457\u8981\u53bb\u67e5\u5bc6\u78bc\uff01\u57fa\u672c\u4e0a 5.7 \u7684\u670d\u52d9\u81e8\u6642\u5bc6\u78bc,\u6703\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/mysqld.log"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cat /var/log/mysqld.log | grep \"temporary password\" | awk '{print $NF}'\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"DONe")),(0,a.kt)("h3",{id:"\u8981\u63db-data-\u5b58\u653e\u4f4d\u7f6e\u5230\u4f60\u65b0\u5efa\u7acb\u7684-ebs"},"\u8981\u63db data \u5b58\u653e\u4f4d\u7f6e\u5230\u4f60\u65b0\u5efa\u7acb\u7684 EBS"),(0,a.kt)("p",null,"\u56e0\u70ba\u5f88\u5e38\u6703\u5c0d mysql \u7684\u786c\u789f\u505a\u5099\u4efd,\u4e26\u53e6\u5916 mount \u786c\u789f\u7d66\u4ed6,\u6240\u4ee5\u4e5f\u8981\u77e5\u9053\u5982\u4f55\u642c\u904b\uff01"),(0,a.kt)("p",null,"\u9019\u908a\u5047\u8a2d\u6211\u65b0 mount \u4e00\u500b\u786c\u789f\u5728/data \u8cc7\u6599\u593e\u5e95\u4e0b\uff01\u7136\u5f8c\u60f3\u628a\u8cc7\u6599\u642c\u904e\u4f86"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539 my.cnf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/etc/my.cnf"',title:'"/etc/my.cnf"'},"[mysqld]\ndatadir=/data/mysql\nsocket=/var/lib/mysql/mysql.sock\n\n# Disabling symbolic-links is recommended to prevent assorted security risks\nsymbolic-links=0\n\nlog-error=/var/log/mysqld.log\npid-file=/var/run/mysqld/mysqld.pid\n#skip-grant-tables\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u505c\u670d\u52d9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl stop mysqld\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u8907\u88fd\u6587\u4ef6\u904e\u53bb\u5230/data,rsync -a \u8868\u793a\u4ee5\u905e\u6b78\u65b9\u5f0f\u540c\u6b65\u76ee\u9304\uff0c\u4fdd\u7559\u6587\u4ef6\u5c6c\u6027\uff08\u5982\u6b0a\u9650\u3001\u6642\u9593\u6233\uff09\u7b49\uff0c-v \u8868\u793a\u986f\u793a\u8a73\u7d30\u7684\u8f38\u51fa\u4fe1\u606f\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rsync -av /var/lib/mysql /data\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"DONe,\u8d77\u670d\u52d9\uff01")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl start mysqld\n")),(0,a.kt)("h3",{id:"\u5047\u5982\u4f60\u4eca\u5929\u5fd8\u8a18-mysql-\u5bc6\u78bc57"},"\u5047\u5982\u4f60\u4eca\u5929\u5fd8\u8a18 mysql \u5bc6\u78bc(5.7)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"vim /etc/my.cnf \u52a0\u5165\u5728\u6700\u4e0b\u9762",(0,a.kt)("inlineCode",{parentName:"li"},"skip-grant-tables")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"systemctl stop mysqld")),(0,a.kt)("li",{parentName:"ol"},"\u767b\u9678 mysql, ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql")),(0,a.kt)("li",{parentName:"ol"},"\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4,\u9019\u908a\u5bc6\u78bc\u6703\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"[$Password]"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USE mysql;\nUPDATE user SET authentication_string = password ('[$Password]') WHERE User = 'root';\nflush privileges;\nquit\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u628a",(0,a.kt)("inlineCode",{parentName:"li"},"skip-grant-tables"),"\u62ff\u6389"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"systemctl restart mysqld"))))}u.isMDXComponent=!0}}]);