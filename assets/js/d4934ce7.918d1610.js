"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[9509],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),g=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=g(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=g(r),c=n,m=s["".concat(p,".").concat(c)]||s[c]||d[c]||l;return r?o.createElement(m,a(a({ref:t},u),{},{components:r})):o.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,a[1]=i;for(var g=2;g<l;g++)a[g]=r[g];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},97419:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var o=r(87462),n=(r(67294),r(3905));const l={title:"Delete log file than recreate log file, will log still write into it? Besides,compare with logrotate",description:"\u5728logging\u7d00\u9304log\u65b9\u5f0f\u4e0b,\u7a0b\u5f0f\u672c\u8eab\u61c9\u8a72\u662f\u8a8dinode\u7684.\u4f60\u628a\u65e5\u8a8c\u522a\u9664\u5f8c,\u5373\u4f7f\u65b0\u589e\u540c\u6a23\u6a94\u540d\u7684\u7a7a\u767d\u6a94,\u4e00\u6a23\u4e0d\u6703\u5beb\u5165\u65e5\u8a8c\uff01linux\u7ba1\u7406\u65e5\u8a8c\u7cfb\u7d71\u907f\u514d\u5176\u5927\u5c0f\u904e\u5927,\u4e26\u9032\u884c\u9069\u7576rotation\u7684\u5de5\u5177\u662f`logrotate`,\u4ed6\u4e5f\u6703\u9047\u5230\u65e5\u8a8c\u6a94\u540d\u7684\u4fee\u6539\u554f\u984c\uff01\u90a3\u662f\u600e\u9ebd\u505a\u5230\u8f2a\u8a62\u9019\u4ef6\u4e8b\uff1f",authors:"suyuying",tags:["file system"]},a=void 0,i={permalink:"/blog/2023/08/09/linux-server/delete-log-file-than-recreate-log-file",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/linux-server/2023-08-09-delete-log-file-than-recreate-log-file.md",source:"@site/blog/linux-server/2023-08-09-delete-log-file-than-recreate-log-file.md",title:"Delete log file than recreate log file, will log still write into it? Besides,compare with logrotate",description:"\u5728logging\u7d00\u9304log\u65b9\u5f0f\u4e0b,\u7a0b\u5f0f\u672c\u8eab\u61c9\u8a72\u662f\u8a8dinode\u7684.\u4f60\u628a\u65e5\u8a8c\u522a\u9664\u5f8c,\u5373\u4f7f\u65b0\u589e\u540c\u6a23\u6a94\u540d\u7684\u7a7a\u767d\u6a94,\u4e00\u6a23\u4e0d\u6703\u5beb\u5165\u65e5\u8a8c\uff01linux\u7ba1\u7406\u65e5\u8a8c\u7cfb\u7d71\u907f\u514d\u5176\u5927\u5c0f\u904e\u5927,\u4e26\u9032\u884c\u9069\u7576rotation\u7684\u5de5\u5177\u662f`logrotate`,\u4ed6\u4e5f\u6703\u9047\u5230\u65e5\u8a8c\u6a94\u540d\u7684\u4fee\u6539\u554f\u984c\uff01\u90a3\u662f\u600e\u9ebd\u505a\u5230\u8f2a\u8a62\u9019\u4ef6\u4e8b\uff1f",date:"2023-08-09T00:00:00.000Z",formattedDate:"August 9, 2023",tags:[{label:"file system",permalink:"/blog/tags/file-system"}],readingTime:7.06,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"When you\u2019re green, you grow. When you\u2019re ripe, you rot",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Delete log file than recreate log file, will log still write into it? Besides,compare with logrotate",description:"\u5728logging\u7d00\u9304log\u65b9\u5f0f\u4e0b,\u7a0b\u5f0f\u672c\u8eab\u61c9\u8a72\u662f\u8a8dinode\u7684.\u4f60\u628a\u65e5\u8a8c\u522a\u9664\u5f8c,\u5373\u4f7f\u65b0\u589e\u540c\u6a23\u6a94\u540d\u7684\u7a7a\u767d\u6a94,\u4e00\u6a23\u4e0d\u6703\u5beb\u5165\u65e5\u8a8c\uff01linux\u7ba1\u7406\u65e5\u8a8c\u7cfb\u7d71\u907f\u514d\u5176\u5927\u5c0f\u904e\u5927,\u4e26\u9032\u884c\u9069\u7576rotation\u7684\u5de5\u5177\u662f`logrotate`,\u4ed6\u4e5f\u6703\u9047\u5230\u65e5\u8a8c\u6a94\u540d\u7684\u4fee\u6539\u554f\u984c\uff01\u90a3\u662f\u600e\u9ebd\u505a\u5230\u8f2a\u8a62\u9019\u4ef6\u4e8b\uff1f",authors:"suyuying",tags:["file system"]},prevItem:{title:"k8s\u95b1\u8b80\u7b46\u8a18",permalink:"/blog/2023/08/09/K8S/k8s-basic"},nextItem:{title:"acme.sh + Cloudflare \u7533\u8acb\u6191\u8b49",permalink:"/blog/2023/08/08/Others/acme-apply-certificate"}},p={authorsImageUrls:[void 0]},g=[{value:"\u57fa\u790elinux\u6587\u4ef6\u7ba1\u7406",id:"\u57fa\u790elinux\u6587\u4ef6\u7ba1\u7406",level:2},{value:"lab",id:"lab",level:2},{value:"logrotate",id:"logrotate",level:2}],u={toc:g},s="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u57fa\u790elinux\u6587\u4ef6\u7ba1\u7406"},"\u57fa\u790elinux\u6587\u4ef6\u7ba1\u7406"),(0,n.kt)("p",null,"inode(index node)\u662flinux\u7cfb\u7d71\u7684\u4e00\u7a2e\u8cc7\u6599\u7d50\u69cb\uff0c\u5132\u5b58\u4e86\u6a94\u6848\u7cfb\u7d71\u7684\u5c6c\u6027\u8ddf\u78c1\u789f\u4f4d\u7f6e.\u6a94\u6848\u7cfb\u7d71\u7684\u5c6c\u6027\u6709\u4ee5\u4e0b\u5143\u6578\u64da\u8a0a\u606f:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u985e\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u6b0a\u9650"),(0,n.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u6240\u6709\u8005\u8ddf\u6240\u5c6c\u7d44"),(0,n.kt)("li",{parentName:"ul"},"\u6642\u9593\u6233\u8a18"),(0,n.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5927\u5c0f"),(0,n.kt)("li",{parentName:"ul"},"\u786c\u93c8\u63a5\u6578"),(0,n.kt)("li",{parentName:"ul"},"\u6578\u64da\u584a\u6307\u91dd(\u6587\u4ef6\u7cfb\u7d71\u5167\u90e8\u6a5f\u5236)")),(0,n.kt)("p",null,"\u53ef\u4ee5\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"stat"),"\u6307\u4ee4\u67e5\u8a62."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"stat output.xdddd\n\n  File: output.xdddd\n  Size: 0          Blocks: 0          IO Block: 4096   regular empty file\nDevice: ca01h/51713d Inode: 17058       Links: 1\nAccess: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)\nAccess: 2023-08-09 02:11:13.675880181 +0000\nModify: 2023-08-08 11:10:17.005957501 +0000\nChange: 2023-08-08 11:10:17.005957501 +0000\n Birth: 2023-08-08 11:10:17.005957501 +0000\n\n")),(0,n.kt)("p",null,"\u5176\u4e2d\u6b0a\u9650\u9019\u908a,0644,\u958b\u982d\u76840\u4ee3\u8868\u7279\u6b8a\u6b0a\u9650,\u5206\u5225\u67090(\u7121\u7279\u5225),1(Sticky Bit,\u53ea\u6709\u6587\u4ef6\u6240\u6709\u8005\u624d\u80fd\u522a\u9664\u6587\u4ef6),2(Setuid,\u4ee5\u6587\u4ef6\u6240\u6709\u8005\u6b0a\u9650\u57f7\u884c),4(Setgid,\u5171\u4eab\u7fa4\u7d44\u76f8\u95dc),\u800c\u5f8c\u9762\u7684644\u4ee3\u8868\u5206\u522b\u8868\u793a\u6587\u4ef6\u6240\u6709\u8005\u3001\u6240\u5c5e\u7ec4\u548c\u5176\u4ed6\u7528\u6237\u7684\u6b0a\u9650,\u5206\u5225\u662fowner\u53ef\u8b80\u53ef\u5beb,\u6240\u5c6c\u7d44\u53ef\u8b80,\u5176\u4ed6\u4eba\u53ef\u8b80."),(0,n.kt)("p",null,"ps. root \u7528\u6236\u64c1\u6709\u7cfb\u7d71\u7684\u6700\u9ad8\u6b0a\u9650\uff0c\u5b83\u57fa\u672c\u4e0a\u53ef\u4ee5\u7e5e\u904e\u6587\u4ef6\u6b0a\u9650\u9650\u5236\uff0c\u8a2a\u554f\u548c\u4fee\u6539\u4efb\u4f55\u6587\u4ef6,\u9664\u975e\u7279\u6b8a\u72c0\u6cc1\u5982\u52a0\u5bc6,selinux,\u7279\u6b8a\u6b0a\u9650immtable"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"~# chattr  -i output.xdddd # \u52a0\u6ce8\u4e0d\u80fd\u522a\n\n~# lsattr output.xdddd\n----i---------e------- output.xdddd\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"file"),"\u6307\u4ee4\u770b\u6587\u4ef6\u578b\u614b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"~# file testpy.tar.gz\ntestpy.tar.gz: gzip compressed data, from Unix, original size modulo 2^32 10240\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u7528\u6236\u5728\u64cd\u4f5c\u6587\u4ef6\u548c\u76ee\u9304\u6642\uff0c\u4f7f\u7528\u7684\u662f\u6587\u4ef6\u540d\uff0c\u800c\u6587\u4ef6\u7cfb\u7d71\u5247\u4f7f\u7528inode\u4f86\u8ddf\u8e2a\u548c\u7ba1\u7406\u9019\u4e9b\u6587\u4ef6\u548c\u76ee\u9304.")),(0,n.kt)("h2",{id:"lab"},"lab"),(0,n.kt)("p",null,"\u9019\u908a\u6703\u6e2c\u8a66\u628alog\u522a\u9664\u5f8c\u65b0\u589e\u540c\u6a94\u540d\u7684\u7a7a\u767d\u6a94\u6848,\u5f8c\u7e8c\u65e5\u8a8c\u662f\u5426\u6703\u5beb\u5165\uff01\u539f\u56e0\u662f\u56e0\u70ba\u4e4b\u524d\u9047\u5230\u904e\u4e0d\u5c0f\u5fc3\u522a\u6389log,\u5c0e\u81f4\u670d\u52d9\u9700\u91cd\u555f\u624d\u80fd\u7e7c\u7e8c\u5beb\u5165\u65e5\u8a8c\u7684\u6158\u5287"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4ee5\u4e0b\u6307\u4ee4\u6703\u5275\u5efalog,\u4e26\u6bcf\u79d2\u5b9a\u6642\u5beb\u5165,\u57f7\u884c\u5b83")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import time\nimport logging\n\n# \u914d\u7f6e\u65e5\u5fd7\u8bb0\u5f55\nlogging.basicConfig(filename="output.log", level=logging.INFO, format="%(asctime)s - %(message)s")\n\nwhile True:\n    current_time = time.strftime("%Y-%m-%d %H:%M:%S")\n    line = f"This is a line of text at {current_time}"\n    logging.info(line)\n    time.sleep(1)\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u89c0\u5bdf\u9032\u7a0b\u958b\u555f\u6a94\u6848\u72c0\u614b,\u9019\u908a\u770b\u5230pid\u662f46136,\u9019\u908a\u6703\u770b\u5230\u6709\u63cf\u8ff0\u7b26\u865f\u6307\u5411/root/out.log")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"root@ip-10-0-0-83:~# ps -ef  |grep python3\nroot         432       1  0 Aug08 ?        00:00:00 /usr/bin/python3 /usr/bin/networkd-dispatcher --run-startup-triggers\nroot         541       1  0 Aug08 ?        00:00:00 /usr/bin/python3 /usr/share/unattended-upgrades/unattended-upgrade-shutdown --wait-for-signal\nroot       46136   45975  0 02:46 pts/1    00:00:00 python3 test.py\nroot       46224   46204  0 02:46 pts/3    00:00:00 grep --color=auto python3\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"root@ip-10-0-0-83:~# cd /proc/46136/fd/\nroot@ip-10-0-0-83:/proc/46136/fd# ll\ntotal 0\ndr-x------ 2 root root  0 Aug  9 02:47 ./\ndr-xr-xr-x 9 root root  0 Aug  9 02:46 ../\nlrwx------ 1 root root 64 Aug  9 02:47 0 -> /dev/pts/1\nlrwx------ 1 root root 64 Aug  9 02:47 1 -> /dev/pts/1\nlrwx------ 1 root root 64 Aug  9 02:47 2 -> /dev/pts/1\nl-wx------ 1 root root 64 Aug  9 02:47 3 -> /root/output.log\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u63a5\u8457\u6211\u628a\u6a94\u6848",(0,n.kt)("inlineCode",{parentName:"li"},"output.log"),"\u522a\u9664,\u4e26\u89c0\u5bdf\u9032\u7a0b\u958b\u555f\u6a94\u6848\u72c0\u614b,\u767c\u73fe\u72c0\u614b\u8b8adeleted")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"root@ip-10-0-0-83:/proc/46136/fd# rm -f /root/output.log\nroot@ip-10-0-0-83:/proc/46136/fd# ll\ntotal 0\ndr-x------ 2 root root  0 Aug  9 02:47 ./\ndr-xr-xr-x 9 root root  0 Aug  9 02:46 ../\nlrwx------ 1 root root 64 Aug  9 02:47 0 -> /dev/pts/1\nlrwx------ 1 root root 64 Aug  9 02:47 1 -> /dev/pts/1\nlrwx------ 1 root root 64 Aug  9 02:47 2 -> /dev/pts/1\nl-wx------ 1 root root 64 Aug  9 02:47 3 -> '/root/output.log (deleted)'\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u65b0\u589e\u540c\u6a94\u540d\u7684\u7a7a\u767d\u6a94,\u72c0\u614b\u4f9d\u820a\u662fdeleted")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"root@ip-10-0-0-83:/proc/46136/fd# touch /root/output.log\nroot@ip-10-0-0-83:/proc/46136/fd# ll\ntotal 0\ndr-x------ 2 root root  0 Aug  9 02:47 ./\ndr-xr-xr-x 9 root root  0 Aug  9 02:46 ../\nlrwx------ 1 root root 64 Aug  9 02:47 0 -> /dev/pts/1\nlrwx------ 1 root root 64 Aug  9 02:47 1 -> /dev/pts/1\nlrwx------ 1 root root 64 Aug  9 02:47 2 -> /dev/pts/1\nl-wx------ 1 root root 64 Aug  9 02:47 3 -> '/root/output.log (deleted)'\n")),(0,n.kt)("p",null,"\u7531\u4ee5\u4e0a\u5f97\u77e5,\u5728logging\u7d00\u9304log\u65b9\u5f0f\u4e0b,\u7a0b\u5f0f\u672c\u8eab\u61c9\u8a72\u662f\u8a8dinode\u7684.\u4f60\u628a\u65e5\u8a8c\u522a\u9664\u5f8c,\u5373\u4f7f\u65b0\u589e\u540c\u6a23\u6a94\u540d\u7684\u7a7a\u767d\u6a94,\u4e00\u6a23\u4e0d\u6703\u5beb\u5165\u65e5\u8a8c\uff01"),(0,n.kt)("h2",{id:"logrotate"},"logrotate"),(0,n.kt)("p",null,"linux\u7ba1\u7406\u65e5\u8a8c\u7cfb\u7d71\u907f\u514d\u5176\u5927\u5c0f\u904e\u5927,\u4e26\u9032\u884c\u9069\u7576rotation\u7684\u5de5\u5177\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"logrotate"),",\u4ed6\u4e5f\u6703\u9047\u5230\u65e5\u8a8c\u6a94\u540d\u7684\u4fee\u6539\u554f\u984c\uff01\u90a3\u662f\u600e\u9ebd\u505a\u5230\u8f2a\u8a62\u9019\u4ef6\u4e8b\uff1f"),(0,n.kt)("p",null,"\u7576\u4e00\u500b\u9032\u7a0b\uff08\u4f8b\u5982 logrotate\uff09\u5c0d\u4e00\u500b\u65e5\u8a8c\u6587\u4ef6\u9032\u884c\u8f2a\u8f49\u6642\uff0c\u901a\u5e38\u6703\u57f7\u884c\u4ee5\u4e0b\u6b65\u9a5f\uff0c\u4ee5\u78ba\u4fdd\u65b0\u7684\u65e5\u8a8c\u689d\u76ee\u88ab\u5beb\u5165\u65b0\u7684 inode \u4e2d\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u95dc\u9589\u820a\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\uff1a\u5728\u958b\u59cb\u8f2a\u8f49\u904e\u7a0b\u4e4b\u524d\uff0c\u9032\u7a0b\u6703\u95dc\u9589\u820a\u7684\u65e5\u8a8c\u6587\u4ef6\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002\u9019\u78ba\u4fdd\u9032\u7a0b\u4e0d\u6703\u7e7c\u7e8c\u5f80\u820a\u6587\u4ef6\u4e2d\u5beb\u5165\u65b0\u7684\u65e5\u8a8c\u689d\u76ee\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u547d\u540d\u6216\u79fb\u52d5\u820a\u6587\u4ef6\uff1a\u9032\u7a0b\u6703\u5c07\u820a\u7684\u65e5\u8a8c\u6587\u4ef6\u91cd\u547d\u540d\u6216\u79fb\u52d5\u5230\u5099\u4efd\u4f4d\u7f6e\uff0c\u4ee5\u4fbf\u5275\u5efa\u4e00\u500b\u65b0\u7684\u7a7a\u767d\u6587\u4ef6\u7528\u65bc\u5beb\u5165\u65b0\u7684\u65e5\u8a8c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5275\u5efa\u65b0\u7684\u6587\u4ef6\uff1a\u9032\u7a0b\u6703\u5275\u5efa\u4e00\u500b\u65b0\u7684\u7a7a\u767d\u6587\u4ef6\uff0c\u9019\u500b\u65b0\u6587\u4ef6\u5c07\u5177\u6709\u4e00\u500b\u65b0\u7684 inode\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u958b\u65b0\u6587\u4ef6\u63cf\u8ff0\u7b26\uff1a\u9032\u7a0b\u6703\u6253\u958b\u65b0\u5275\u5efa\u7684\u6587\u4ef6\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u4ee5\u4fbf\u5c07\u65b0\u7684\u65e5\u8a8c\u689d\u76ee\u5beb\u5165\u5176\u4e2d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5beb\u5165\u65b0\u7684\u65e5\u8a8c\u689d\u76ee\uff1a\u9032\u7a0b\u958b\u59cb\u5c07\u65b0\u7684\u65e5\u8a8c\u689d\u76ee\u5beb\u5165\u65b0\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u6240\u6307\u5411\u7684\u65b0\u6587\u4ef6\uff08\u65b0 inode\uff09\u4e2d\u3002"))),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662flab\u6e2c\u8a66\u904e\u7a0b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u78ba\u8a8d\u76ee\u524dlog inode\u503c")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"root@ip-10-0-0-83:/var/log/nginx# ls -i\n309494 access.log  309495 error.log\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u5f37\u5236\u57f7\u884clogrotate")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"root@ip-10-0-0-83:/var/log/nginx# logrotate -f  /etc/logrotate.d/nginx\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u78ba\u8a8d\u540c\u6a94\u540derror.log\u7684inode\u503c\u5df2\u6539\u8b8a(\u7531309495->341209)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"root@ip-10-0-0-83:/var/log/nginx# ls -i\n309494 access.log  341209 error.log  309495 error.log.1\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u6e2c\u8a66\u78ba\u8a8d\u662f\u5426\u53ef\u4ee5\u5beb\u5165log,\u9019\u908a\u78ba\u8a8d\u53ef\u4ee5\u5beb\u5165")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"root@ip-10-0-0-83:/var/log/nginx# nginx\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Unknown error)\nnginx: [emerg] bind() to [::]:80 failed (98: Unknown error)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Unknown error)\nnginx: [emerg] bind() to [::]:80 failed (98: Unknown error)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Unknown error)\nnginx: [emerg] bind() to [::]:80 failed (98: Unknown error)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Unknown error)\nnginx: [emerg] bind() to [::]:80 failed (98: Unknown error)\nroot@ip-10-0-0-83:/var/log/nginx# ll\ntotal 16\ndrwxr-xr-x  2 root     adm    4096 Aug  9 03:21 ./\ndrwxrwxr-x 12 root     syslog 4096 Aug  9 03:17 ../\n-rw-r-----  1 www-data adm       0 Aug  9 03:17 access.log\n-rw-r-----  1 www-data adm     700 Aug  9 03:23 error.log\n-rw-r-----  1 www-data adm     603 Aug  9 03:17 error.log.1\n")))}d.isMDXComponent=!0}}]);