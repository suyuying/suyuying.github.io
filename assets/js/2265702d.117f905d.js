"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[5077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,y=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Use systemctl to manage service properly and safely",description:"\u4e3b\u8981\u908f\u8f2f\u5c31\u662f\u6703\u5148:`\u5efa\u7acb\u7cfb\u7d71\u5e33\u865f` -> `\u9650\u5236\u8cc7\u6599\u593e\u6b0a\u9650\u53caowner` -> `\u5efa\u7acbservice\u8a2d\u5b9a\u6a94` -> `\u900f\u904esystemctl\u8a17\u7ba1\u8a72service`.",authors:"suyuying",tags:["systemctl","linux"]},o=void 0,l={permalink:"/blog/2023/08/16/linux-server/systemctl-manage-service",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/linux-server/2023-08-16-systemctl-manage-service.md",source:"@site/blog/linux-server/2023-08-16-systemctl-manage-service.md",title:"Use systemctl to manage service properly and safely",description:"\u4e3b\u8981\u908f\u8f2f\u5c31\u662f\u6703\u5148:`\u5efa\u7acb\u7cfb\u7d71\u5e33\u865f` -> `\u9650\u5236\u8cc7\u6599\u593e\u6b0a\u9650\u53caowner` -> `\u5efa\u7acbservice\u8a2d\u5b9a\u6a94` -> `\u900f\u904esystemctl\u8a17\u7ba1\u8a72service`.",date:"2023-08-16T00:00:00.000Z",formattedDate:"August 16, 2023",tags:[{label:"systemctl",permalink:"/blog/tags/systemctl"},{label:"linux",permalink:"/blog/tags/linux"}],readingTime:3.5,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Use systemctl to manage service properly and safely",description:"\u4e3b\u8981\u908f\u8f2f\u5c31\u662f\u6703\u5148:`\u5efa\u7acb\u7cfb\u7d71\u5e33\u865f` -> `\u9650\u5236\u8cc7\u6599\u593e\u6b0a\u9650\u53caowner` -> `\u5efa\u7acbservice\u8a2d\u5b9a\u6a94` -> `\u900f\u904esystemctl\u8a17\u7ba1\u8a72service`.",authors:"suyuying",tags:["systemctl","linux"]},nextItem:{title:"CI/CD pipeline for developing and delivering containerized apps",permalink:"/blog/2023/08/14/K8S/gke-cicd-pipline-for-developing-containerized-app"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4ee5\u4e0b\u8cc7\u8a0a\u662f\u7576\u524d\u67e5\u8a62\u8cc7\u8a0a\u4e26\u6bd4\u5c0d\u5176\u4ed6\u4eba\u7684\u505a\u6cd5,\u5217\u51fa\u89ba\u5f97\u4e0d\u932f\u7684\u8a2d\u5b9a\u65b9\u5f0f,\u4e4b\u5f8c\u5982\u679c\u767c\u73fe\u932f\u8aa4\u6216\u66f4\u597d\u7684\u65b9\u5f0f\u6703\u6efe\u52d5\u4fee\u6539!"),(0,a.kt)("p",null,"\u4e3b\u8981\u908f\u8f2f\u5c31\u662f\u6703\u5148: ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5efa\u7acb\u7cfb\u7d71\u5e33\u865f")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"\u9650\u5236\u8cc7\u6599\u593e\u6b0a\u9650\u53caowner")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5efa\u7acbservice\u8a2d\u5b9a\u6a94")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"\u900f\u904esystemctl\u8a17\u7ba1\u8a72service"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u7cfb\u7d71\u5e33\u865f,\u4e26\u4e0d\u7d66\u5bb6\u76ee\u9304\u4e14\u4e0d\u80fd\u767bterminal")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"useradd --no-create-home --shell /bin/false your_target_user\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u6307\u5b9a\u8cc7\u6599\u593eowner\u7d66\u8a72user,\u4e14\u6ce8\u610f\u662f\u5426\u8981\u7d66\u4e88\u53ef\u5beb\u6b0a\u9650(\u9019\u908a\u4ee5promethues\u9700\u8981\u5beb\u5165\u7684\u8cc7\u6599\u5eab\u70ba\u4f8b),\u7136\u5f8c\u8981\u77e5\u9053\u5b89\u88dd\u6771\u897f\u5f8c\u6703\u7522\u751f\u54ea\u4e9b\u6771\u897f,\u518d\u53bb\u5206\u914d,\u5982\u679c\u662f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"yum"),",",(0,a.kt)("inlineCode",{parentName:"li"},"apt"),"\u5b89\u88dd\u6703\u5e6b\u4f60\u5b89\u6392\u597d\u4e26\u8a2d\u5b9a,\u5982\u679c\u662f\u4e0a\u7db2\u81ea\u5df1\u4e0b\u8f09\u7684\u6a94\u6848\u5305\u5c31\u9700\u8981\u518d\u81ea\u5df1\u53bb\u5206\u914d\u4f4d\u7f6e,\u4ee5\u53ca\u6b0a\u9650!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chown -R prometheus:prometheus  /var/lib/prometheus\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5efa\u7acbservice\u8a2d\u5b9a\u6a94")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="/usr/lib/systemd/system/prometheus.service"',title:'"/usr/lib/systemd/system/prometheus.service"'},"[Unit]\nDescription=Monitoring system and time series database\nDocumentation=https://prometheus.io/docs/introduction/overview/ man:prometheus(1)\nAfter=time-sync.target\n\n[Service]\nType=simple\nRestart=on-failure\nUser=prometheus\nGroup=prometheus\n\nEnvironmentFile=/etc/default/prometheus\nExecStart=ExecStart=/usr/local/bin/prometheus \\\n--config.file /etc/prometheus/prometheus.yml \\\n--storage.tsdb.path /var/lib/prometheus/ \\\n--web.console.templates=/etc/prometheus/consoles \\\n--web.console.libraries=/etc/prometheus/console_libraries \\\n--web.enable-admin-api \\\n--storage.tsdb.retention.time=30d \\\n--web.enable-lifecycle \\\nExecReload=/bin/kill -HUP $MAINPID\nTimeoutStopSec=20s\nSendSIGKILL=no\n[Install]\nWantedBy=multi-user.target \n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Type"),"\u9810\u8a2dsimple,\u7531ExecStart \u63a5\u7684\u6307\u4ee4\u555f\u52d5\u670d\u52d9\u4e26\u5e38\u99d0\u5728\u8a18\u61b6\u9ad4\uff01\n",(0,a.kt)("inlineCode",{parentName:"p"},"Restart"),"\u6b64\u9078\u9805\u6c7a\u5b9a\u7576\u670d\u52d9\u906d\u9047\u932f\u8aa4\u6216\u5d29\u6f70\u6642\u662f\u5426\u81ea\u52d5\u91cd\u65b0\u555f\u52d5\u670d\u52d9\u3002\u6839\u64da\u8a2d\u5b9a\u4e0d\u540c\uff0cSystemd \u6703\u5728\u4e0d\u540c\u60c5\u6cc1\u4e0b\u57f7\u884c\u91cd\u65b0\u555f\u52d5\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8a2d\u5b9a\u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"on-failure"),"\uff0c\u8868\u793a\u53ea\u6709\u5728\u670d\u52d9\u5931\u6557\u6642\u624d\u6703\u81ea\u52d5\u91cd\u555f\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"User")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Group"),"\u9019\u500b\u9078\u9805\u78ba\u5b9a\u670d\u52d9\u4ee5\u54ea\u500b\u4f7f\u7528\u8005\u53ca\u7fa4\u8655\u8eab\u4efd\u904b\u884c\u3002\u7576\u8a2d\u5b9a\u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus")," \u6642\uff0c\u670d\u52d9\u5c07\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus")," \u4f7f\u7528\u8005\u7684\u8eab\u4efd\u904b\u884c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"EnvironmentFile"),"\u9019\u500b\u9078\u9805\u7528\u4f86\u6307\u5b9a\u74b0\u5883\u8b8a\u6578\u7684\u8a2d\u5b9a\u6a94\u4f4d\u7f6e\u3002\u8a2d\u5b9a\u6a94\u5167\u5305\u542b\u591a\u500b\u74b0\u5883\u8b8a\u6578\u7684\u5b9a\u7fa9\uff0c\u9019\u4e9b\u8b8a\u6578\u5c07\u5728\u670d\u52d9\u904b\u884c\u6642\u751f\u6548\u3002\u53ef\u4ee5\u62ff\u4f86\u653e$ARGS"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ExecStart"),"\u9019\u500b\u9078\u9805\u78ba\u5b9a\u555f\u52d5\u670d\u52d9\u6240\u9700\u7684\u547d\u4ee4\u548c\u53c3\u6578\u3002\u7576 Systemd \u555f\u52d5\u9019\u500b\u670d\u52d9\u6642\uff0c\u6703\u57f7\u884c\u6307\u5b9a\u7684\u547d\u4ee4\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ExecReload"),"\u6b64\u9078\u9805\u5b9a\u7fa9\u91cd\u65b0\u8f09\u5165\u670d\u52d9\u6240\u9700\u7684\u547d\u4ee4\u3002\u7576 Systemd \u6536\u5230\u91cd\u65b0\u8f09\u5165\u7684\u4fe1\u865f\uff08\u901a\u5e38\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl reload")," \u547d\u4ee4\uff09\uff0c\u6703\u57f7\u884c\u6307\u5b9a\u7684\u547d\u4ee4\u3002\u56e0\u70baprometheus\u63d0\u4f9b\u71b1\u52a0\u8f09\u53ef\u4ee5\u900f\u904e",(0,a.kt)("inlineCode",{parentName:"p"},"kill HUP PID"),",\u4f46\u4e0d\u4ee3\u8868\u5176\u4ed6service\u6709\uff5e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TimeoutStopSec"),"\u82e5\u9019\u500b\u670d\u52d9\u5728\u555f\u52d5\u6216\u8005\u662f\u95dc\u9589\u6642\uff0c\u56e0\u70ba\u67d0\u4e9b\u7de3\u6545\u5c0e\u81f4\u7121\u6cd5\u9806\u5229\u300e\u6b63\u5e38\u555f\u52d5\u6216\u6b63\u5e38\u7d50\u675f\u300f\u7684\u60c5\u6cc1\u4e0b\uff0c\u5247\u6211\u5011\u8981\u7b49\u591a\u4e45\u624d\u6703\u4f7f\u7528SIGKILL\u4fe1\u865f\u6bba\u6389\u5269\u4e0b\u9032\u7a0b\uff01"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SendSIGKILL"),"\u9019\u500b\u9078\u9805\u78ba\u5b9a\u505c\u6b62\u670d\u52d9\u6642\u662f\u5426\u5617\u8a66\u4f7f\u7528 SIGKILL \u4fe1\u865f\u3002\u5982\u679c\u8a2d\u5b9a\u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"no"),"\uff0cSystemd \u5c07\u5118\u53ef\u80fd\u907f\u514d\u4f7f\u7528 SIGKILL \u4fe1\u865f\uff0c\u4ee5\u5141\u8a31\u670d\u52d9\u6709\u6642\u9593\u9032\u884c\u6e05\u7406\u64cd\u4f5c\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u53c3\u8003\u8cc7\u6599\uff1a"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://linux.vbird.org/linux_basic/centos7/0560daemons.php#systemd_cfg"},"\u9ce5\u54e5-\u8a8d\u8b58\u7cfb\u7d71\u670d\u52d9")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/1a066df2bc19"},"systemd \u7684\u4e00\u4e9b\u5c0f\u6280\u5de7")))))}u.isMDXComponent=!0}}]);