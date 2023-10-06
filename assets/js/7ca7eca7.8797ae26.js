"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[1610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const a={title:"Use systemctl to manage service properly and safely",description:"\u4e3b\u8981\u908f\u8f2f\u5c31\u662f\u6703\u5148:`\u5efa\u7acb\u7cfb\u7d71\u5e33\u865f` -> `\u9650\u5236\u8cc7\u6599\u593e\u6b0a\u9650\u53caowner` -> `\u5efa\u7acbservice\u8a2d\u5b9a\u6a94` -> `\u900f\u904esystemctl\u8a17\u7ba1\u8a72service`.\u53e6\u5916,\u4e4b\u524d\u5728\u8a2d\u5b9aservice\u6642\u5019\u90fd\u662f\u8a2d\u5b9a`Type=simple`,\u4e0d\u904e\u81ea\u5f9e\u5728rsync\u8a2d\u5b9adaemon\u670d\u52d9\u8e22\u5230\u9435\u677f\u5c31\u77e5\u9053\u5fc5\u9808\u4e86\u89e3\u5dee\u7570,\u5982\u679c\u7a0b\u5f0f\u57f7\u884c\u7684\u6a21\u5f0f\u662f\u7236process\u7522\u751f\u5b50process\u4e4b\u5f8c\u5c31\u95dc\u9589\u7236process,\u4f8b\u5982:`rsync` daemon\u7a0b\u5f0f\u6703\u7522\u751f\u5b50process\u4f5c\u70ba\u4e3b\u8981\u57f7\u884cprocess(\u540c\u7406\u9084\u6709nginx\u9019\u985e\u670d\u52d9),\u5c31\u5fc5\u9808\u7528`Type=forking`,\u5426\u5247`systemctl`\u6703\u628a\u5b83\u7576\u4f5c\u4e3b\u7a0b\u5f0f\u9000\u51fa,\u4e4b\u5f8c\u5c31\u6703hang\u4f4f\u7136\u5f8c\u56de\u5831failure\u72c0\u614b. `rsync server`\u7684service\u8a2d\u5b9a\u6a94\u5982\u4e0b...",authors:"suyuying",tags:["systemctl","linux"]},i=void 0,o={permalink:"/blog/2023/08/16/linux-server/systemctl-manage-service",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/linux-server/2023-08-16-systemctl-manage-service.md",source:"@site/blog/linux-server/2023-08-16-systemctl-manage-service.md",title:"Use systemctl to manage service properly and safely",description:"\u4e3b\u8981\u908f\u8f2f\u5c31\u662f\u6703\u5148:`\u5efa\u7acb\u7cfb\u7d71\u5e33\u865f` -> `\u9650\u5236\u8cc7\u6599\u593e\u6b0a\u9650\u53caowner` -> `\u5efa\u7acbservice\u8a2d\u5b9a\u6a94` -> `\u900f\u904esystemctl\u8a17\u7ba1\u8a72service`.\u53e6\u5916,\u4e4b\u524d\u5728\u8a2d\u5b9aservice\u6642\u5019\u90fd\u662f\u8a2d\u5b9a`Type=simple`,\u4e0d\u904e\u81ea\u5f9e\u5728rsync\u8a2d\u5b9adaemon\u670d\u52d9\u8e22\u5230\u9435\u677f\u5c31\u77e5\u9053\u5fc5\u9808\u4e86\u89e3\u5dee\u7570,\u5982\u679c\u7a0b\u5f0f\u57f7\u884c\u7684\u6a21\u5f0f\u662f\u7236process\u7522\u751f\u5b50process\u4e4b\u5f8c\u5c31\u95dc\u9589\u7236process,\u4f8b\u5982:`rsync` daemon\u7a0b\u5f0f\u6703\u7522\u751f\u5b50process\u4f5c\u70ba\u4e3b\u8981\u57f7\u884cprocess(\u540c\u7406\u9084\u6709nginx\u9019\u985e\u670d\u52d9),\u5c31\u5fc5\u9808\u7528`Type=forking`,\u5426\u5247`systemctl`\u6703\u628a\u5b83\u7576\u4f5c\u4e3b\u7a0b\u5f0f\u9000\u51fa,\u4e4b\u5f8c\u5c31\u6703hang\u4f4f\u7136\u5f8c\u56de\u5831failure\u72c0\u614b. `rsync server`\u7684service\u8a2d\u5b9a\u6a94\u5982\u4e0b...",date:"2023-08-16T00:00:00.000Z",formattedDate:"August 16, 2023",tags:[{label:"systemctl",permalink:"/blog/tags/systemctl"},{label:"linux",permalink:"/blog/tags/linux"}],readingTime:4.505,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"When you\u2019re green, you grow. When you\u2019re ripe, you rot",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Use systemctl to manage service properly and safely",description:"\u4e3b\u8981\u908f\u8f2f\u5c31\u662f\u6703\u5148:`\u5efa\u7acb\u7cfb\u7d71\u5e33\u865f` -> `\u9650\u5236\u8cc7\u6599\u593e\u6b0a\u9650\u53caowner` -> `\u5efa\u7acbservice\u8a2d\u5b9a\u6a94` -> `\u900f\u904esystemctl\u8a17\u7ba1\u8a72service`.\u53e6\u5916,\u4e4b\u524d\u5728\u8a2d\u5b9aservice\u6642\u5019\u90fd\u662f\u8a2d\u5b9a`Type=simple`,\u4e0d\u904e\u81ea\u5f9e\u5728rsync\u8a2d\u5b9adaemon\u670d\u52d9\u8e22\u5230\u9435\u677f\u5c31\u77e5\u9053\u5fc5\u9808\u4e86\u89e3\u5dee\u7570,\u5982\u679c\u7a0b\u5f0f\u57f7\u884c\u7684\u6a21\u5f0f\u662f\u7236process\u7522\u751f\u5b50process\u4e4b\u5f8c\u5c31\u95dc\u9589\u7236process,\u4f8b\u5982:`rsync` daemon\u7a0b\u5f0f\u6703\u7522\u751f\u5b50process\u4f5c\u70ba\u4e3b\u8981\u57f7\u884cprocess(\u540c\u7406\u9084\u6709nginx\u9019\u985e\u670d\u52d9),\u5c31\u5fc5\u9808\u7528`Type=forking`,\u5426\u5247`systemctl`\u6703\u628a\u5b83\u7576\u4f5c\u4e3b\u7a0b\u5f0f\u9000\u51fa,\u4e4b\u5f8c\u5c31\u6703hang\u4f4f\u7136\u5f8c\u56de\u5831failure\u72c0\u614b. `rsync server`\u7684service\u8a2d\u5b9a\u6a94\u5982\u4e0b...",authors:"suyuying",tags:["systemctl","linux"]},nextItem:{title:"CI/CD pipeline for developing and delivering containerized apps",permalink:"/blog/2023/08/14/K8S/gke-cicd-pipline-for-developing-containerized-app copy"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u4ee5\u4e0b\u8cc7\u8a0a\u662f\u7576\u524d\u67e5\u8a62\u8cc7\u8a0a\u4e26\u6bd4\u5c0d\u5176\u4ed6\u4eba\u7684\u505a\u6cd5,\u5217\u51fa\u89ba\u5f97\u4e0d\u932f\u7684\u8a2d\u5b9a\u65b9\u5f0f,\u4e4b\u5f8c\u5982\u679c\u767c\u73fe\u932f\u8aa4\u6216\u66f4\u597d\u7684\u65b9\u5f0f\u6703\u6efe\u52d5\u4fee\u6539!"),(0,s.kt)("p",null,"\u4e3b\u8981\u908f\u8f2f\u5c31\u662f\u6703\u5148: ",(0,s.kt)("inlineCode",{parentName:"p"},"\u5efa\u7acb\u7cfb\u7d71\u5e33\u865f")," -> ",(0,s.kt)("inlineCode",{parentName:"p"},"\u9650\u5236\u8cc7\u6599\u593e\u6b0a\u9650\u53caowner")," -> ",(0,s.kt)("inlineCode",{parentName:"p"},"\u5efa\u7acbservice\u8a2d\u5b9a\u6a94")," -> ",(0,s.kt)("inlineCode",{parentName:"p"},"\u900f\u904esystemctl\u8a17\u7ba1\u8a72service"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u7cfb\u7d71\u5e33\u865f,\u4e26\u4e0d\u7d66\u5bb6\u76ee\u9304\u4e14\u4e0d\u80fd\u767bterminal")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"useradd --no-create-home --shell /bin/false your_target_user\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4fee\u6539\u6307\u5b9a\u8cc7\u6599\u593eowner\u7d66\u8a72user,\u4e14\u6ce8\u610f\u662f\u5426\u8981\u7d66\u4e88\u53ef\u5beb\u6b0a\u9650(\u9019\u908a\u4ee5promethues\u9700\u8981\u5beb\u5165\u7684\u8cc7\u6599\u5eab\u70ba\u4f8b),\u7136\u5f8c\u8981\u77e5\u9053\u5b89\u88dd\u6771\u897f\u5f8c\u6703\u7522\u751f\u54ea\u4e9b\u6771\u897f,\u518d\u53bb\u5206\u914d,\u5982\u679c\u662f\u7528",(0,s.kt)("inlineCode",{parentName:"li"},"yum"),",",(0,s.kt)("inlineCode",{parentName:"li"},"apt"),"\u5b89\u88dd\u6703\u5e6b\u4f60\u5b89\u6392\u597d\u4e26\u8a2d\u5b9a,\u5982\u679c\u662f\u4e0a\u7db2\u81ea\u5df1\u4e0b\u8f09\u7684\u6a94\u6848\u5305\u5c31\u9700\u8981\u518d\u81ea\u5df1\u53bb\u5206\u914d\u4f4d\u7f6e,\u4ee5\u53ca\u6b0a\u9650!")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chown -R prometheus:prometheus  /var/lib/prometheus\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5efa\u7acbservice\u8a2d\u5b9a\u6a94")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="/usr/lib/systemd/system/prometheus.service"',title:'"/usr/lib/systemd/system/prometheus.service"'},"[Unit]\nDescription=Monitoring system and time series database\nDocumentation=https://prometheus.io/docs/introduction/overview/ man:prometheus(1)\nAfter=time-sync.target\n\n[Service]\nType=simple\nRestart=on-failure\nUser=prometheus\nGroup=prometheus\n\nEnvironmentFile=/etc/default/prometheus\nExecStart=ExecStart=/usr/local/bin/prometheus \\\n--config.file /etc/prometheus/prometheus.yml \\\n--storage.tsdb.path /var/lib/prometheus/ \\\n--web.console.templates=/etc/prometheus/consoles \\\n--web.console.libraries=/etc/prometheus/console_libraries \\\n--web.enable-admin-api \\\n--storage.tsdb.retention.time=30d \\\n--web.enable-lifecycle \\\nExecReload=/bin/kill -HUP $MAINPID\nTimeoutStopSec=20s\nSendSIGKILL=no\n[Install]\nWantedBy=multi-user.target \n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Type"),"\u9810\u8a2dsimple,\u7531ExecStart \u63a5\u7684\u6307\u4ee4\u555f\u52d5\u670d\u52d9\u4e26\u5e38\u99d0\u5728\u8a18\u61b6\u9ad4\uff01"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"\u4e4b\u524d\u5728\u8a2d\u5b9aservice\u6642\u5019\u90fd\u662f\u8a2d\u5b9a",(0,s.kt)("inlineCode",{parentName:"p"},"Type=simple"),",\u4e0d\u904e\u81ea\u5f9e\u5728rsync\u8a2d\u5b9adaemon\u670d\u52d9\u8e22\u5230\u9435\u677f\u5c31\u77e5\u9053\u5fc5\u9808\u4e86\u89e3\u5dee\u7570,\u5982\u679c\u7a0b\u5f0f\u57f7\u884c\u7684\u6a21\u5f0f\u662f\u7236process\u7522\u751f\u5b50process\u4e4b\u5f8c\u5c31\u95dc\u9589\u7236process,\u4f8b\u5982: ",(0,s.kt)("inlineCode",{parentName:"p"},"rsync")," daemon\u7a0b\u5f0f\u6703\u7522\u751f\u5b50process\u4f5c\u70ba\u4e3b\u8981\u57f7\u884cprocess(\u540c\u7406\u9084\u6709nginx\u9019\u985e\u670d\u52d9),\u5c31\u5fc5\u9808\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"Type=forking"),",\u5426\u5247",(0,s.kt)("inlineCode",{parentName:"p"},"systemctl"),"\u6703\u628a\u5b83\u7576\u4f5c\u4e3b\u7a0b\u5f0f\u9000\u51fa,\u4e4b\u5f8c\u5c31\u6703hang\u4f4f\u7136\u5f8c\u56de\u5831failure\u72c0\u614b. ",(0,s.kt)("inlineCode",{parentName:"p"},"rsync server"),"\u7684service\u8a2d\u5b9a\u6a94\u5982\u4e0b."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="/usr/lib/systemd/system/rsyncd.service"',title:'"/usr/lib/systemd/system/rsyncd.service"'},"[Unit]\nDescription=rsyncd Server\nAfter=network.target\n\n[Service]\nType=forking\n\nExecStart=/bin/rsync  --daemon --config=/etc/rsyncd.conf\nTimeoutStopSec=20s\n\n\n[Install]\nWantedBy=multi-user.target\n")),(0,s.kt)("p",{parentName:"admonition"},"\u81f3\u65bc\u70ba\u5565\u6703try\u51fa\u9019\u6bb5,\u662f\u56e0\u70ba\u5728\u628a\u5b83\u6539\u70baforking\u5c31\u6210\u529f\u4e86,\u4ed4\u7d30\u770b\u670d\u52d9\u6703\u767c\u73fe"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"    Process: 2740 ExecStart=/usr/bin/rsync --daemon --config=/etc/rsyncd.conf (code=exited, status=0/SUCCE>\n   Main PID: 2741 (rsync)\n")),(0,s.kt)("p",{parentName:"admonition"},"\u4e5f\u5c31\u662fPID\u4e0d\u540c\u7684\u90e8\u5206,\u6240\u4ee5\u8981\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"forking"),".")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Restart"),"\u6b64\u9078\u9805\u6c7a\u5b9a\u7576\u670d\u52d9\u906d\u9047\u932f\u8aa4\u6216\u5d29\u6f70\u6642\u662f\u5426\u81ea\u52d5\u91cd\u65b0\u555f\u52d5\u670d\u52d9\u3002\u6839\u64da\u8a2d\u5b9a\u4e0d\u540c\uff0cSystemd \u6703\u5728\u4e0d\u540c\u60c5\u6cc1\u4e0b\u57f7\u884c\u91cd\u65b0\u555f\u52d5\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8a2d\u5b9a\u70ba ",(0,s.kt)("inlineCode",{parentName:"p"},"on-failure"),"\uff0c\u8868\u793a\u53ea\u6709\u5728\u670d\u52d9\u5931\u6557\u6642\u624d\u6703\u81ea\u52d5\u91cd\u555f\u3002"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"User")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Group"),"\u9019\u500b\u9078\u9805\u78ba\u5b9a\u670d\u52d9\u4ee5\u54ea\u500b\u4f7f\u7528\u8005\u53ca\u7fa4\u8655\u8eab\u4efd\u904b\u884c\u3002\u7576\u8a2d\u5b9a\u70ba ",(0,s.kt)("inlineCode",{parentName:"p"},"prometheus")," \u6642\uff0c\u670d\u52d9\u5c07\u4ee5 ",(0,s.kt)("inlineCode",{parentName:"p"},"prometheus")," \u4f7f\u7528\u8005\u7684\u8eab\u4efd\u904b\u884c\u3002"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"EnvironmentFile"),"\u9019\u500b\u9078\u9805\u7528\u4f86\u6307\u5b9a\u74b0\u5883\u8b8a\u6578\u7684\u8a2d\u5b9a\u6a94\u4f4d\u7f6e\u3002\u8a2d\u5b9a\u6a94\u5167\u5305\u542b\u591a\u500b\u74b0\u5883\u8b8a\u6578\u7684\u5b9a\u7fa9\uff0c\u9019\u4e9b\u8b8a\u6578\u5c07\u5728\u670d\u52d9\u904b\u884c\u6642\u751f\u6548\u3002\u53ef\u4ee5\u62ff\u4f86\u653e$ARGS"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ExecStart"),"\u9019\u500b\u9078\u9805\u78ba\u5b9a\u555f\u52d5\u670d\u52d9\u6240\u9700\u7684\u547d\u4ee4\u548c\u53c3\u6578\u3002\u7576 Systemd \u555f\u52d5\u9019\u500b\u670d\u52d9\u6642\uff0c\u6703\u57f7\u884c\u6307\u5b9a\u7684\u547d\u4ee4\u3002"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ExecReload"),"\u6b64\u9078\u9805\u5b9a\u7fa9\u91cd\u65b0\u8f09\u5165\u670d\u52d9\u6240\u9700\u7684\u547d\u4ee4\u3002\u7576 Systemd \u6536\u5230\u91cd\u65b0\u8f09\u5165\u7684\u4fe1\u865f\uff08\u901a\u5e38\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"systemctl reload")," \u547d\u4ee4\uff09\uff0c\u6703\u57f7\u884c\u6307\u5b9a\u7684\u547d\u4ee4\u3002\u56e0\u70baprometheus\u63d0\u4f9b\u71b1\u52a0\u8f09\u53ef\u4ee5\u900f\u904e",(0,s.kt)("inlineCode",{parentName:"p"},"kill HUP PID"),",\u4f46\u4e0d\u4ee3\u8868\u5176\u4ed6service\u6709\uff5e"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"TimeoutStopSec"),"\u82e5\u9019\u500b\u670d\u52d9\u5728\u555f\u52d5\u6216\u8005\u662f\u95dc\u9589\u6642\uff0c\u56e0\u70ba\u67d0\u4e9b\u7de3\u6545\u5c0e\u81f4\u7121\u6cd5\u9806\u5229\u300e\u6b63\u5e38\u555f\u52d5\u6216\u6b63\u5e38\u7d50\u675f\u300f\u7684\u60c5\u6cc1\u4e0b\uff0c\u5247\u6211\u5011\u8981\u7b49\u591a\u4e45\u624d\u6703\u4f7f\u7528SIGKILL\u4fe1\u865f\u6bba\u6389\u5269\u4e0b\u9032\u7a0b\uff01"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SendSIGKILL"),"\u9019\u500b\u9078\u9805\u78ba\u5b9a\u505c\u6b62\u670d\u52d9\u6642\u662f\u5426\u5617\u8a66\u4f7f\u7528 SIGKILL \u4fe1\u865f\u3002\u5982\u679c\u8a2d\u5b9a\u70ba ",(0,s.kt)("inlineCode",{parentName:"p"},"no"),"\uff0cSystemd \u5c07\u5118\u53ef\u80fd\u907f\u514d\u4f7f\u7528 SIGKILL \u4fe1\u865f\uff0c\u4ee5\u5141\u8a31\u670d\u52d9\u6709\u6642\u9593\u9032\u884c\u6e05\u7406\u64cd\u4f5c\u3002"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\u53c3\u8003\u8cc7\u6599\uff1a"),(0,s.kt)("ol",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://linux.vbird.org/linux_basic/centos7/0560daemons.php#systemd_cfg"},"\u9ce5\u54e5-\u8a8d\u8b58\u7cfb\u7d71\u670d\u52d9")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/1a066df2bc19"},"systemd \u7684\u4e00\u4e9b\u5c0f\u6280\u5de7")))))}u.isMDXComponent=!0}}]);