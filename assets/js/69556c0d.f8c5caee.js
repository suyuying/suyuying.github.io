"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[3850],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(k,l(l({ref:t},i),{},{components:r})):n.createElement(k,l({ref:t},i))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,l=new Array(s);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<s;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const s={title:"how to create user like root",description:'\u5f9e\u6709\u95dc\u9375\u5b57\u70ba QOO \u90a3\u4e00\u884c\u5230\u4ee5}\u70ba\u958b\u982d\u7684\u90a3\u4e00\u884c(^\u4ee3\u8868\u6b63\u5247\u958b\u982d\u5b57\u5143),sed -n "/QOO/,/^}/p" common.js.',authors:"suyuying",image:"https://github.com/suyuying.png",tags:["linux"]},l=void 0,a={permalink:"/blog/2023/05/24/linux-server/create-user-like-root",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/linux-server/2023-05-24-create-user-like-root.md",source:"@site/blog/linux-server/2023-05-24-create-user-like-root.md",title:"how to create user like root",description:'\u5f9e\u6709\u95dc\u9375\u5b57\u70ba QOO \u90a3\u4e00\u884c\u5230\u4ee5}\u70ba\u958b\u982d\u7684\u90a3\u4e00\u884c(^\u4ee3\u8868\u6b63\u5247\u958b\u982d\u5b57\u5143),sed -n "/QOO/,/^}/p" common.js.',date:"2023-05-24T00:00:00.000Z",formattedDate:"May 24, 2023",tags:[{label:"linux",permalink:"/blog/tags/linux"}],readingTime:4.295,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"how to create user like root",description:'\u5f9e\u6709\u95dc\u9375\u5b57\u70ba QOO \u90a3\u4e00\u884c\u5230\u4ee5}\u70ba\u958b\u982d\u7684\u90a3\u4e00\u884c(^\u4ee3\u8868\u6b63\u5247\u958b\u982d\u5b57\u5143),sed -n "/QOO/,/^}/p" common.js.',authors:"suyuying",image:"https://github.com/suyuying.png",tags:["linux"]},prevItem:{title:"Useful coding method and module",permalink:"/blog/2023/05/26/Python/useful-method"},nextItem:{title:"Install mysql in aws linux ami",permalink:"/blog/2023/05/17/SQL/install-mysql-in-aws-linux"}},u={authorsImageUrls:[void 0]},p=[{value:"\u5275\u5efa ec2-user \u4e26\u7d66\u4e88\u6b0a\u9650",id:"\u5275\u5efa-ec2-user-\u4e26\u7d66\u4e88\u6b0a\u9650",level:2},{value:"\u5c07 ec2-user \u52a0\u5230 docker \u7fa4\u7d44",id:"\u5c07-ec2-user-\u52a0\u5230-docker-\u7fa4\u7d44",level:2},{value:"\u5982\u4f55\u78ba\u8a8d\u6709\u52a0\u5165\u7fa4\u7d44",id:"\u5982\u4f55\u78ba\u8a8d\u6709\u52a0\u5165\u7fa4\u7d44",level:2},{value:"\u5982\u4f55\u9023\u7dda\u5230 ec-user",id:"\u5982\u4f55\u9023\u7dda\u5230-ec-user",level:2}],i={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ee5\u5f80\u5e38\u5e38\u7528 root \u9023\u5230\u6a5f\u5668\u64cd\u4f5c,\u90a3\u6700\u8fd1\u5728 lab \u6a5f\u8e22\u5230\u9435\u677f\u4e86,\u95dc\u65bc\u4e0d\u8981\u7528 root \u767b\u5165\u64cd\u4f5c\u8a0e\u8ad6\u5f88\u591a,\u9019\u908a\u5c31\u4e0d\u8aaa\u539f\u56e0\u4e86\uff01"),(0,o.kt)("p",null,"\u7528 root \u57f7\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"minikube start"),"\u6703\u9047\u5230\u5831\u932f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u274c  Exiting due to DRV_AS_ROOT: The "docker" driver should not be used with root privileges.\n')),(0,o.kt)("p",null,"\u9019\u908a\u770b\u5230\u5f88\u660e\u986f\u4ed6\u4e0d\u8b93\u4f60\u7528 root \u57f7\u884c\u8a72\u6307\u4ee4.good\uff01\uff01"),(0,o.kt)("h2",{id:"\u5275\u5efa-ec2-user-\u4e26\u7d66\u4e88\u6b0a\u9650"},"\u5275\u5efa ec2-user \u4e26\u7d66\u4e88\u6b0a\u9650"),(0,o.kt)("p",null,"\u57f7\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u5275\u5efa\u65b0\u4f7f\u7528\u8005\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"adduser ec2-user\n")),(0,o.kt)("p",null,"\u8a2d\u5b9a\u4f7f\u7528\u8005\u5bc6\u78bc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"passwd ec2-user\n")),(0,o.kt)("p",null,"\u5c07\u4f7f\u7528\u8005\u65b0\u589e\u81f3 wheel \u7fa4\u7d44\uff0c\u4ee5\u7372\u5f97 sudo \u6b0a\u9650\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usermod -aG wheel ec2-user\n")),(0,o.kt)("p",null,"\u5728 CentOS \u7cfb\u7d71\u4e2d\uff0cwheel \u7fa4\u7d44\u901a\u5e38\u88ab\u914d\u7f6e\u70ba\u5177\u6709\u7279\u6b8a\u6b0a\u9650\u7684\u7fa4\u7d44\uff0c\u5141\u8a31\u5176\u6210\u54e1\u4f7f\u7528 sudo \u547d\u4ee4\u7372\u5f97 root \u6b0a\u9650\u3002\u901a\u5e38\uff0c\u7cfb\u7d71\u7ba1\u7406\u54e1\u53ef\u4ee5\u5c07\u81ea\u5df1\u6216\u5176\u4ed6\u9700\u8981\u5177\u6709\u7ba1\u7406\u6b0a\u9650\u7684\u4f7f\u7528\u8005\u65b0\u589e\u81f3 wheel \u7fa4\u7d44\uff0c\u4ee5\u4fbf\u57f7\u884c\u9700\u8981 root \u6b0a\u9650\u7684\u4efb\u52d9\u3002\n\u5177\u6709 wheel \u7fa4\u7d44\u6210\u54e1\u8eab\u4efd\u7684\u4f7f\u7528\u8005\u53ef\u4ee5\u4f7f\u7528 sudo \u547d\u4ee4\u57f7\u884c\u4ee5 root \u6b0a\u9650\u904b\u884c\u7684\u547d\u4ee4\u3002\u5728\u4e0a\u8ff0\u547d\u4ee4\u4e2d\uff0c-aG \u9078\u9805\u6307\u793a usermod \u547d\u4ee4\u5c07\u4f7f\u7528\u8005\u65b0\u589e\u81f3\u6307\u5b9a\u7684\u7fa4\u7d44\u4e2d\u800c\u4e0d\u79fb\u9664\u5df2\u6709\u7684\u7fa4\u7d44\u8a2d\u5b9a\u3002"),(0,o.kt)("p",null,"\u78ba\u8a8d sudoers \u6587\u4ef6\u4e2d\u7684\u8a2d\u5b9a\u5141\u8a31 wheel \u7fa4\u7d44\u7684\u6210\u54e1\u57f7\u884c sudo \u6307\u4ee4\u3002\u57f7\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u7de8\u8f2f sudoers \u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"visudo\n")),(0,o.kt)("p",null,"\u5728\u6253\u958b\u7684\u6587\u4ef6\u4e2d\uff0c\u5c0b\u627e\u4ee5\u4e0b\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"## Allows people in group wheel to run all commands\n# %wheel        ALL=(ALL)       ALL\n")),(0,o.kt)("p",null,"\u53d6\u6d88\u8a3b\u91cb\uff08\u522a\u9664\u524d\u9762\u7684 # \u7b26\u865f\uff09\u4e26\u4fdd\u5b58\u6587\u4ef6,\u9019\u7d66\u5728 wheel \u7fa4\u7d44\u5167\u7684\u4f7f\u7528\u8005\u53ef\u4ee5\u7528 sudo \u57f7\u884c\u4efb\u4f55\u6b0a\u9650"),(0,o.kt)("h2",{id:"\u5c07-ec2-user-\u52a0\u5230-docker-\u7fa4\u7d44"},"\u5c07 ec2-user \u52a0\u5230 docker \u7fa4\u7d44"),(0,o.kt)("p",null,"\u5c07 ec2-user \u52a0\u5230 docker \u7fa4\u7d44"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usermod -aG docker ec2-user\n")),(0,o.kt)("p",null,"\u57f7\u884c\u4ee5\u4e0b\u547d\u4ee4\u4f86\u4f7f\u7fa4\u7d44\u66f4\u6539\u751f\u6548\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"newgrp docker\n")),(0,o.kt)("p",null,"\u52a0\u5165 'docker' \u7fa4\u7d44\u5f8c\uff0c\u60a8\u53ef\u4ee5\u5728\u4e0d\u4f7f\u7528 sudo \u7684\u60c5\u6cc1\u4e0b\u57f7\u884c Docker \u547d\u4ee4"),(0,o.kt)("h2",{id:"\u5982\u4f55\u78ba\u8a8d\u6709\u52a0\u5165\u7fa4\u7d44"},"\u5982\u4f55\u78ba\u8a8d\u6709\u52a0\u5165\u7fa4\u7d44"),(0,o.kt)("p",null,"\u770b/etc/group \u6703\u770b\u5230\u6709\u65b0\u589e\u4f7f\u7528\u8005"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vi /etc/group\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh_keys:x:997:\nsshd:x:74:\npostdrop:x:90:\npostfix:x:89:\ndocker:x:996:ec2-user\ncgred:x:995:\nmysql:x:27:\napache:x:48:\nnginx:x:994:\nzabbix:x:993:\ntss:x:59:\nstapusr:x:156:\nstapsys:x:157:\nstapdev:x:158:\nsaslauth:x:76:\nmongod:x:992:\nec2-user:x:1000:\n")),(0,o.kt)("h2",{id:"\u5982\u4f55\u9023\u7dda\u5230-ec-user"},"\u5982\u4f55\u9023\u7dda\u5230 ec-user"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u78ba\u8a8d\u6709\u751f\u6210\u516c\u79c1\u9470,\u5982\u7121\u5247\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\u751f\u6210")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh-keygen -t rsa -b 4096\n")),(0,o.kt)("p",null,"\u78ba\u8a8d\u751f\u6210\u7684\u516c\u9470\u4f4d\u7f6e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa.pub")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ssh-copy-id \u6307\u4ee4\u5c07\u516c\u9470\u6dfb\u52a0\u5230\u9060\u7a0b ec2-user \u4f7f\u7528\u8005\u7684\u5e33\u6236\u4e2d\u3002remote_host \u8a18\u5f97\u63db\u6210 \u4f60\u7684 ip(\uff45\uff58.\u6211\u7684 ip \u662f 192.168.185.72),\u8a18\u5f97\u4f60\u7684\u79c1\u9470(~/.ssh/id_rsa)\u57fa\u672c\u4e0a\u4e0d\u6703\u7d66\u5225\u4eba")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh-copy-id -i ~/.ssh/id_rsa.pub ec2-user@<remote_host>\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u6e2c\u8a66\u9023\u5165")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh 'ec2-user@192.168.185.72'\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a~/.ssh/config,\u50cf\u9019\u6a23,")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="~/.ssh/config"',title:'"~/.ssh/config"'},"Host            agent-ec2user\nHostName        192.168.185.72\nPort            22\nUser            ec2-user\nIdentityFile    ~/.ssh/id_rsa\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a ssh \u7684\u901a\u7528\u914d\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Host *\n  ServerAliveInterval 10\n  HostKeyAlgorithms +ssh-rsa\n  PubkeyAcceptedKeyTypes +ssh-rsa\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Host ","*",": \u9019\u662f\u4e00\u500b\u901a\u914d\u7b26\uff0c\u8868\u793a\u9069\u7528\u65bc\u6240\u6709\u7684\u4e3b\u6a5f\u3002\u5728\u4e0b\u9762\u7684\u8a2d\u5b9a\u4e2d\uff0c\u9019\u500b\u901a\u914d\u7b26\u5c07\u61c9\u7528\u65bc\u6240\u6709\u7684\u4e3b\u6a5f\u8a2d\u5b9a\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ServerAliveInterval 10: \u6b64\u9078\u9805\u6307\u5b9a\u4e86 SSH \u5ba2\u6236\u7aef\u548c\u4f3a\u670d\u5668\u4e4b\u9593\u7684\u9023\u7dda\u6d3b\u8457\u6aa2\u67e5\u6642\u9593\u9593\u9694\u3002\u5728\u6b64\u4f8b\u4e2d\uff0c\u8a2d\u5b9a\u70ba 10 \u79d2\uff0c\u8868\u793a\u6bcf 10 \u79d2\u767c\u9001\u4e00\u6b21\u4fdd\u6301\u9023\u7dda\u7684\u8a0a\u865f\u3002\u9019\u6709\u52a9\u65bc\u4fdd\u6301\u9023\u7dda\u7684\u7a69\u5b9a\u6027\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"HostKeyAlgorithms +ssh-rsa: \u6b64\u9078\u9805\u6307\u5b9a\u4e86\u5ba2\u6236\u7aef\u652f\u63f4\u7684\u4e3b\u6a5f\u91d1\u9470\u9a57\u8b49\u6f14\u7b97\u6cd5\u3002+ssh-rsa \u8868\u793a\u9664\u4e86\u9810\u8a2d\u7684\u9a57\u8b49\u6f14\u7b97\u6cd5\u5916\uff0c\u9084\u5141\u8a31\u4f7f\u7528 ssh-rsa \u6f14\u7b97\u6cd5\u9032\u884c\u4e3b\u6a5f\u91d1\u9470\u9a57\u8b49\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"PubkeyAcceptedKeyTypes +ssh-rsa: \u6b64\u9078\u9805\u6307\u5b9a\u4e86\u5ba2\u6236\u7aef\u652f\u63f4\u7684\u7528\u65bc\u516c\u9470\u9a57\u8b49\u7684\u91d1\u9470\u985e\u578b\u3002+ssh-rsa \u8868\u793a\u9664\u4e86\u9810\u8a2d\u7684\u91d1\u9470\u985e\u578b\u5916\uff0c\u9084\u63a5\u53d7\u4f7f\u7528 ssh-rsa \u91d1\u9470\u9032\u884c\u516c\u9470\u9a57\u8b49\u3002"))))}d.isMDXComponent=!0}}]);