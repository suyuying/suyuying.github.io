"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[1245],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),b=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=b(a),c=r,u=g["".concat(o,".").concat(c)]||g[c]||d[c]||i;return a?n.createElement(u,s(s({ref:t},p),{},{components:a})):n.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[g]="string"==typeof e?e:r,s[1]=l;for(var b=2;b<i;b++)s[b]=a[b];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(87462),r=a(67294),i=a(3905);const s={title:"Zabbix Sender monitor key word in log, and show data in grafana",description:"\u5b9a\u6642\u6293\u53d6\u67d0log file\u5176\u4e2d\u7684\u7279\u5b9a\u95dc\u9375\u5b57\uff0c\u7528zabbix-sender\u50b3\u9001\u8cc7\u8a0a\u7d66zabbix server\uff0c\u4e26\u628a\u8cc7\u6599\u8a2d\u5b9a\u5831\u8b66\u5230telegram\uff0c\u8cc7\u8a0a\u6703\u7528grafana\u7684log\u986f\u793a\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["Zabbix","Grafana"]},l=void 0,o={permalink:"/blog/2023/03/29/Zabbix/zabbix-monitor-log",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Zabbix/2023-03-29-zabbix-monitor-log.md",source:"@site/blog/Zabbix/2023-03-29-zabbix-monitor-log.md",title:"Zabbix Sender monitor key word in log, and show data in grafana",description:"\u5b9a\u6642\u6293\u53d6\u67d0log file\u5176\u4e2d\u7684\u7279\u5b9a\u95dc\u9375\u5b57\uff0c\u7528zabbix-sender\u50b3\u9001\u8cc7\u8a0a\u7d66zabbix server\uff0c\u4e26\u628a\u8cc7\u6599\u8a2d\u5b9a\u5831\u8b66\u5230telegram\uff0c\u8cc7\u8a0a\u6703\u7528grafana\u7684log\u986f\u793a\u3002",date:"2023-03-29T00:00:00.000Z",formattedDate:"March 29, 2023",tags:[{label:"Zabbix",permalink:"/blog/tags/zabbix"},{label:"Grafana",permalink:"/blog/tags/grafana"}],readingTime:3.805,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Zabbix Sender monitor key word in log, and show data in grafana",description:"\u5b9a\u6642\u6293\u53d6\u67d0log file\u5176\u4e2d\u7684\u7279\u5b9a\u95dc\u9375\u5b57\uff0c\u7528zabbix-sender\u50b3\u9001\u8cc7\u8a0a\u7d66zabbix server\uff0c\u4e26\u628a\u8cc7\u6599\u8a2d\u5b9a\u5831\u8b66\u5230telegram\uff0c\u8cc7\u8a0a\u6703\u7528grafana\u7684log\u986f\u793a\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["Zabbix","Grafana"]},prevItem:{title:"AWS Basic Introduction",permalink:"/blog/2023/3/29/Aws/aws-basic-introduction"},nextItem:{title:"aws iam setting introduction",permalink:"/blog/2023/03/25/Aws/aws-iam-setting"}},b={authorsImageUrls:[void 0]},p=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:2},{value:"step1. \u8a2d\u5b9a item",id:"step1-\u8a2d\u5b9a-item",level:3},{value:"step2. \u5b89\u88dd zabbix-sender \u4e26\u50b3\u8cc7\u6599",id:"step2-\u5b89\u88dd-zabbix-sender-\u4e26\u50b3\u8cc7\u6599",level:3},{value:"step3. \u8a2d\u5b9a grafana \u6293\u53d6\u8cc7\u6599",id:"step3-\u8a2d\u5b9a-grafana-\u6293\u53d6\u8cc7\u6599",level:3},{value:"(optional)step4. zabbix \u544a\u8b66 tg",id:"optionalstep4-zabbix-\u544a\u8b66-tg",level:3}],g={toc:p},d="wrapper";function c(e){let{components:t,...s}=e;return(0,i.kt)(d,(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,i.kt)("p",null,"\u9019\u908a\u5047\u8a2d\u5df2\u7d93\u8a2d\u5b9a\u597d host\uff0c\u4e14 zabbix \u6709\u63a5\u4e0a grafana \u60c5\u6cc1\u5f8c\uff0c\u7e7c\u7e8c\u5f80\u4e0b\u63cf\u8ff0."),(0,i.kt)("p",null,"\u76ee\u7684: \u5b9a\u6642\u6293\u53d6\u67d0 log file \u5176\u4e2d\u7684\u7279\u5b9a\u95dc\u9375\u5b57\uff0c\u7528 zabbix-sender \u50b3\u9001\u8cc7\u8a0a\u7d66 zabbix server\uff0c\u4e26\u628a\u8cc7\u6599\u8a2d\u5b9a\u5831\u8b66\u5230 telegram\uff0c\u8cc7\u8a0a\u6703\u7528 grafana \u7684 log \u986f\u793a\u3002"),(0,i.kt)("h3",{id:"step1-\u8a2d\u5b9a-item"},"step1. \u8a2d\u5b9a item"),(0,i.kt)("p",null,"\u6b63\u5e38 zabbix \u8a2d\u5b9a\u6a5f\u5668\u6d41\u7a0b\uff1a"),(0,i.kt)("p",null,"\u5efa\u7acb Hosts groups-> \u5efa\u7acb Templates->\u5f80 Template \u5167\u8a2d\u5b9a\u8981\u76e3\u63a7\u7684 item->\u518d\u628a templates \u9023\u7d50\u5230 Hosts Groups \u4e0a\u9762->\u6700\u5f8c\u628a\u4e3b\u6a5f\u4e5f\u5c31\u662f Host \u6dfb\u52a0\u5230\u6307\u5b9a\u7684 Host groups \u4e0a\u9762\u3002"),(0,i.kt)("p",null,"\u9019\u908a\u56e0\u70ba\u7279\u5225\u9700\u6c42\u95dc\u4fc2(\u53ea\u6709\u9019\u4e00\u53f0\u6a5f\u5668\u9700\u8981\uff09\uff0c\u56e0\u6b64\u76f4\u63a5\u5728\u8a72 Host \u4e0a\u9762\u8a2d\u5b9a item."),(0,i.kt)("p",null,"\u9078 Hosts"),(0,i.kt)(r.Fragment,null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:a(74353).Z,style:{maxHeight:"300px"},alt:"zabbix-side-bar"}))),(0,i.kt)("p",null,"\u56e0\u70ba\u662f\u7528 zabbix-sender \u6240\u4ee5\u9019\u908a type \u7528 zabbix trapper\uff0c\u8981\u6ce8\u610f\u6a5f\u5668\u4e0a\u9762\u90fd\u7528 Key \u8ddf zabbix server \u6e9d\u901a\uff0cName \u662f\u8a72 Item \u7684\u540d\u5b57\uff0c\u5169\u500b\u8a2d\u5b9a\u5e38\u5e38\u6703\u641e\u6df7\u3002"),(0,i.kt)(r.Fragment,null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:a(55200).Z,style:{maxHeight:"300px"},alt:"zabbix-side-bar"}))),(0,i.kt)("h3",{id:"step2-\u5b89\u88dd-zabbix-sender-\u4e26\u50b3\u8cc7\u6599"},"step2. \u5b89\u88dd zabbix-sender \u4e26\u50b3\u8cc7\u6599"),(0,i.kt)("p",null,"\u6a5f\u5668\u4e0a\u8173\u672c\u8a2d\u5b9a zabbix_sender \u50b3\u9001\u8cc7\u6599\uff0c\u7528 key \u8ddf output \u505a\u50b3\u9001"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# \u5b89\u88ddzabbix-sender\nyum install zabbix-sender\n# \u50b3\u8cc7\u8a0a\u7d66zabbix server\nzabbix_sender -z 10.121.0.9  -s yourHostName -k test -o "$(cat /tmp/Lost_connection_to_db_server_${range2}_${range1}.log)"\n')),(0,i.kt)("p",null,"\u78ba\u8a8d zabbix \u662f\u5426\u6709\u6536\u5230\u8cc7\u6599"),(0,i.kt)(r.Fragment,null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:a(5271).Z,style:{maxHeight:"300px"},alt:"zabbix-side-bar"}))),(0,i.kt)("h3",{id:"step3-\u8a2d\u5b9a-grafana-\u6293\u53d6\u8cc7\u6599"},"step3. \u8a2d\u5b9a grafana \u6293\u53d6\u8cc7\u6599"),(0,i.kt)("p",null,"\u78ba\u8a8d\u6709\u6536\u5230\u8cc7\u6599\u5f8c\uff0c\u5728 grafana \u65b0\u5efa panel"),(0,i.kt)(r.Fragment,null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:a(52783).Z,style:{maxHeight:"300px"},alt:"zabbix-side-bar"}))),(0,i.kt)("p",null,"\u8a2d\u5b9a\u8cc7\u6599\u539f\uff0c\u6ce8\u610f\u9019\u908a\u7684 Query Mode \u662f\u8a2d\u5b9a Text\uff0c\u6709\u5f88\u591a\u7a2e\u578b\u614b\uff0c\u9078\u932f\u6703\u627e\u4e0d\u5230\u8cc7\u6599"),(0,i.kt)(r.Fragment,null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:a(69928).Z,style:{maxHeight:"300px"},alt:"zabbix-side-bar"}))),(0,i.kt)("p",null,"Grafana \u6a21\u5f0f\u8a18\u5f97\u8981\u9078 log\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u6a21\u5f0f\u73a9\u73a9\u770b\uff0c\u56e0\u70ba\u9019\u908a\u6c92\u5565\u96f7\uff0c\u5c31\u4e0d\u7279\u5225\u622a\u5716\u8aaa\u660e"),(0,i.kt)("h3",{id:"optionalstep4-zabbix-\u544a\u8b66-tg"},"(optional)step4. zabbix \u544a\u8b66 tg"),(0,i.kt)("p",null,"\u5148\u8a2d\u5b9a Trigger\uff0cProblem expression \u4e5f\u5c31\u662f\u7576\u50b3\u9001\u8cc7\u8a0a\u7b26\u5408\u8a2d\u5b9a\u7684\u689d\u4ef6\u5c31\u6703\u5f15\u767c\u544a\u8b66\uff0cRecovery experssion \u4e5f\u5c31\u662f\u7576\u8cc7\u8a0a\u7b26\u5408\u54ea\u4e9b\u689d\u4ef6\u5c31\u6703\u89e3\u9664\u544a\u8b66\u3002"),(0,i.kt)(r.Fragment,null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:a(17148).Z,alt:"zabbix-side-bar"}))),(0,i.kt)("p",null,"\u78ba\u5b9a\u5b8c\u7684\u78ba\u6703\u544a\u8b66\u8ddf\u56de\u5fa9\u5f8c\uff0c\u5c31\u53ef\u4ee5\u8a2d\u5b9a TG \u544a\u8b66\u3002\u5148\u53bb Administration->Media type \u8907\u88fd Telegram \u90a3\u683c\u3002"),(0,i.kt)(r.Fragment,null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:a(9891).Z,alt:"zabbix-side-bar"}))),(0,i.kt)("p",null,"\u5728 Token \u4f4d\u7f6e\u52a0\u5165\u4f60 TG Token"),(0,i.kt)(r.Fragment,null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:a(47607).Z,alt:"zabbix-side-bar"}))),(0,i.kt)("p",null,"\u5efa\u7acb\u65b0 User Group"),(0,i.kt)(r.Fragment,null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:a(45798).Z,style:{maxHeight:"300px"},alt:"zabbix-side-bar"}))),(0,i.kt)("p",null,"\u8a2d\u5b9a\u8a72 User Group \u5c0d\u54ea\u4e9b Host Group \u6709\u76e3\u63a7\u6b0a\u9650\u3002"),(0,i.kt)(r.Fragment,null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:a(98704).Z,style:{maxHeight:"300px"},alt:"zabbix-side-bar"}))),(0,i.kt)("p",null,"\u5efa\u7acb User\uff0c\u4e26\u628a\u8a72 User \u52a0\u5230 Group \u5167\u90e8\uff0c\u4e26\u8a2d\u5b9a\u7576\u54ea\u4e9b\u72c0\u614b\u767c\u751f\u5c31\u5f80 TG \u9001\u8cc7\u6599"),(0,i.kt)(r.Fragment,null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:a(75895).Z,style:{maxHeight:"300px"},alt:"zabbix-side-bar"}))),(0,i.kt)("p",null,"\u4ee5\u4e0a\u90fd OK\uff0c\u53ef\u4ee5\u6703\u5230\u524d\u9762 media type \u90a3\u908a\u6e2c\u8a66\u662f\u5426\u53ef\u4ee5\u50b3\u8cc7\u6599\u5230\uff34\uff27"),(0,i.kt)("p",null,"\u5982\u679c\u8981\u5c07 Trigger \u7684\u8cc7\u6599\u9001\u5230 TG\uff0c\u4e00\u5b9a\u8981\u8a2d\u5b9a Actions\uff0c\u9019\u908a\u662f\u4e00\u500b\u5751\uff0c\u524d\u9762\u8a2d\u5b9a\u5b8c\u4e86\u4f46\u90fd\u6c92\u6709\u9001\u5230 TG\uff0c\u7d50\u679c\u767c\u73fe\u9019\u683c\u6c92\u6709\u8a2d\u5b9a\uff3a\uff3a\uff3a"),(0,i.kt)(r.Fragment,null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:a(65691).Z,style:{maxHeight:"300px"},alt:"zabbix-side-bar"}))))}c.isMDXComponent=!0},52783:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafana-add-new-panel-bb60eccf47e80c7f2c2cbb02942536af.png"},69928:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafana-set-data-source-861012de7e8c4fbf707311228a71155d.png"},47607:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zabbix-add-token-5636eb87fb7a7f27bdfe474efe54f31e.png"},45798:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zabbix-add-zabbix-group-27771fa730ca2f4fdd2f0095b5303ff0.png"},9891:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zabbix-clone-telegrana-2ff897d7d94a2c5fea128dda989a63dd.png"},5271:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zabbix-get-last-data-4f5035c4cd89c0a5bd7642c9c12dd638.png"},98704:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zabbix-group-permission-fd95dfc4b5d7cc63e18161e07d5aa0da.png"},17148:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zabbix-sender-b-log-12674fa7728409ba93f08ce3b314e90f.png"},74353:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zabbix-side-bar-9ca4a1f3116d447b5a09cc577b209704.png"},55200:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zabbix-traper-56b38395d4722bd7c7303d094a64a3e4.png"},65691:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zabbix-trigger-actions-to-tg-25d1c6bc96907c6f46a5c985f47f6ce3.png"},75895:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zabbix-user-media-7b08a9012605c23fa5347612a4d86c60.png"}}]);