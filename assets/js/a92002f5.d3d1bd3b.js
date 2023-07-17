"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[6086],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),i=p(r),h=o,b=i["".concat(u,".").concat(h)]||i[h]||c[h]||a;return r?n.createElement(b,s(s({ref:t},m),{},{components:r})):n.createElement(b,s({ref:t},m))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[i]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Prometheus\u8ddfkibana\u5efa\u7f6e,\u4ee5\u53ca\u57fa\u790e\u4ecb\u7d39",description:"Prometheus\u53ca\u4e32\u63a5kibana\u57fa\u790e\u4ecb\u7d39\u8ddf\u4f7f\u7528\u4e4b\u5f8c\u7684\u611f\u60f3.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["Prometheus","Grafana"]},s=void 0,l={permalink:"/blog/Prometheus/prometheus-kibana-install",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Prometheus/prometheus-kibana-install.md",source:"@site/blog/Prometheus/prometheus-kibana-install.md",title:"Prometheus\u8ddfkibana\u5efa\u7f6e,\u4ee5\u53ca\u57fa\u790e\u4ecb\u7d39",description:"Prometheus\u53ca\u4e32\u63a5kibana\u57fa\u790e\u4ecb\u7d39\u8ddf\u4f7f\u7528\u4e4b\u5f8c\u7684\u611f\u60f3.",date:"2023-07-17T10:35:41.000Z",formattedDate:"July 17, 2023",tags:[{label:"Prometheus",permalink:"/blog/tags/prometheus"},{label:"Grafana",permalink:"/blog/tags/grafana"}],readingTime:3.575,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Prometheus\u8ddfkibana\u5efa\u7f6e,\u4ee5\u53ca\u57fa\u790e\u4ecb\u7d39",description:"Prometheus\u53ca\u4e32\u63a5kibana\u57fa\u790e\u4ecb\u7d39\u8ddf\u4f7f\u7528\u4e4b\u5f8c\u7684\u611f\u60f3.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["Prometheus","Grafana"]},nextItem:{title:"Install filebeat through filebeat",permalink:"/blog/2023/07/17/IaC/ansible/ansible-install-filebeat"}},u={authorsImageUrls:[void 0]},p=[{value:"prometheus",id:"prometheus",level:2},{value:"prometheus\u8a2d\u5b9a",id:"prometheus\u8a2d\u5b9a",level:3},{value:"prometheus\u5b89\u88dd",id:"prometheus\u5b89\u88dd",level:3},{value:"\u5b89\u88ddnode_exporter",id:"\u5b89\u88ddnode_exporter",level:3},{value:"kibana",id:"kibana",level:2}],m={toc:p},i="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(i,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prometheus"},"prometheus"),(0,o.kt)("p",null,"\u76f8\u8f03\u65bcZabbix\u7cfb\u7d71\u4f7f\u7528mysql\u4e4b\u985e\u7684\u95dc\u806f\u5f0f\u8cc7\u6599\u5eab,prometheus\u4f7f\u7528\u662f\u7684TSDB\u6642\u5e8f\u8cc7\u6599\u5eab,\u56e0\u5176\u4e3b\u8981\u529f\u80fd\u805a\u7126\u5728\u770blog\u8ddf\u5206\u6790\u6578\u64da,\u4e26\u4e0d\u9700\u8981\u5c0d\u4e0d\u540c\u8868\u683c\u505a\u95dc\u806f.\u63a1\u7528tsdb\u7684prometheus\u6700\u6700\u76f4\u89c0\u7684\u5dee\u5225\u5c31\u662f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528 TSDB\uff0c\u5b83\u5c0d\u7cfb\u7d71\u8cc7\u6e90\u7684\u9700\u6c42\u76f8\u5c0d\u8f03\u4f4e\uff0c\u9019\u907f\u514d\u4e86 MySQL \u7b49\u95dc\u806f\u5f0f\u8cc7\u6599\u5eab\u53ef\u80fd\u5c0d\u7cfb\u7d71\u8cc7\u6e90\u7684\u5927\u91cf\u6d88\u8017"),(0,o.kt)("li",{parentName:"ol"},"\u7531\u65bc TSDB \u5c08\u70ba\u6642\u9593\u5e8f\u5217\u6578\u64da\u8a2d\u8a08\uff0c\u5b83\u53ef\u4ee5\u66f4\u6709\u6548\u5730\u7d22\u5f15\u548c\u67e5\u8a62\u6b64\u985e\u6578\u64da\uff0c\u4f7f Prometheus \u7684\u67e5\u8a62\u901f\u5ea6\u6bd4\u4f7f\u7528\u50b3\u7d71\u95dc\u806f\u5f0f\u8cc7\u6599\u5eab\u7684\u7cfb\u7d71\u66f4\u5feb\n\u5728\u6211\u81ea\u5df1\u7684\u6e2c\u8a66\u74b0\u5883,\u7528\u4e00\u53f0free tier\u7684\u6a5f\u5668\u904b\u884cprometheus,\u4e5f\u53ef\u4ee5\u8dd1\u5f88\u9806\uff01")),(0,o.kt)("h3",{id:"prometheus\u8a2d\u5b9a"},"prometheus\u8a2d\u5b9a"),(0,o.kt)("p",null,"\u76f8\u5c0d\u65bcZabbix\u628a\u4e00\u4e9b\u6b0a\u9650\u8a2d\u5b9a\u8ddf\u901a\u77e5\u7fa4\u7d44\u9019\u4e9b\u8a2d\u5b9a\u85cf\u5728UI\u85cf\u5f97\u5230\u8655\u90fd\u662f(ex.Zabbix\u90a3\u7bc7\u8a2d\u5b9atelegram),\u8b93\u65b0\u624b\u6216\u8005\u4e45\u6c92\u64cd\u4f5c\u7684\u4eba\u5f88\u96e3\u627e,\u5982\u679c\u4e4b\u5f8c\u6709\u9700\u8981\u5efa\u4e00\u53f0\u65b0\u7684zabbix,\u90a3\u4e5f\u662f\u5f88\u795e\u5947\u7684\u6298\u78e8,\u90a3\u7528Prometheus\u7684\u512a\u9ede,\u5c31\u5728\u65bc\u5b83\u6240\u6709\u6771\u897f\u90fd\u5728\u8a2d\u5b9a\u6a94\u5167,\u7121\u8ad6\u8a2d\u5b9a\u4f7f\u7528\u8005,\u8a2d\u5b9a\u544a\u8b66\u8f49\u767c\u9019\u4e9b\u90fd\u662f\u5728\u8a2d\u5b9a\u6a94\u5167\u7684,\u500b\u4eba\u8a8d\u70ba\u5728\u7ba1\u7406\u4e0a\u65b9\u4fbf\u7ba1\u7406\uff01"),(0,o.kt)("h3",{id:"prometheus\u5b89\u88dd"},"prometheus\u5b89\u88dd"),(0,o.kt)("p",null,"\u5efa\u7acb\u4f7f\u7528\u8005"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"useradd --no-create-home --shell /bin/false prometheus\n")),(0,o.kt)("p",null,"\u5efa\u7acb\u4e4b\u6599\u593e\u4e26\u6388\u4e88\u4f7f\u7528\u8005"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /etc/prometheus /var/lib/prometheus\nchown -R prometheus:prometheus /etc/prometheus /var/lib/prometheus\n")),(0,o.kt)("p",null,"\u4e0b\u8f09prometheus"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/prometheus/prometheus/releases/download/v2.44.0/prometheus-2.44.0.linux-amd64.tar.gz\ntar xvfz prometheus-*.tar.gz\n\nmv prometheus-2.44.0.linux-amd64 prometheuspackage\nchown -R prometheus:prometheus prometheuspackage\n")),(0,o.kt)("p",null,"\u642c\u79fb\u8cc7\u6599\u5230\u76ee\u7684"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mv prometheuspackage/{console_libraries,consoles,prometheus.yml} /etc/prometheus/\nmv prometheuspackage/{prometheus,promtool} /usr/local/bin\n")),(0,o.kt)("p",null,"\u5efa\u7acb\u958b\u6a5fservice"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF | sudo tee /usr/lib/systemd/system/prometheus.service\n[Unit]\nDescription=Prometheus\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/prometheus \\\n--config.file /etc/prometheus/prometheus.yml \\\n--storage.tsdb.path /var/lib/prometheus/ \\\n--web.console.templates=/etc/prometheus/consoles \\\n--web.console.libraries=/etc/prometheus/console_libraries \\\n--web.enable-admin-api \\\n--storage.tsdb.retention.time=30d \\\n--web.enable-lifecycle \\\n\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl start prometheus\nsystemctl enable prometheus\n")),(0,o.kt)("p",null,"\u5b8c\u6574\u7248"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nuseradd --no-create-home --shell /bin/false prometheus\nmkdir -p /etc/prometheus\nmkdir -p /var/lib/prometheus\nchown prometheus:prometheus /var/lib/prometheus\nchown prometheus:prometheus /etc/prometheus\nwget https://github.com/prometheus/prometheus/releases/download/v2.44.0/prometheus-2.44.0.linux-amd64.tar.gz\ntar xvfz prometheus-*.tar.gz\n\nmv prometheus-2.44.0.linux-amd64 prometheuspackage\nchown -R prometheus:prometheus prometheuspackage/\ncd prometheuspackage\nmv console_libraries/ /etc/prometheus/\nmv consoles/ /etc/prometheus/\nmv prometheus.yml /etc/prometheus/\nmv prometheus /usr/local/bin\nmv promtool /usr/local/bin\ncat << EOF | sudo tee /usr/lib/systemd/system/prometheus.service\n[Unit]\nDescription=Prometheus\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/prometheus \\\n--config.file /etc/prometheus/prometheus.yml \\\n--storage.tsdb.path /var/lib/prometheus/ \\\n--web.console.templates=/etc/prometheus/consoles \\\n--web.console.libraries=/etc/prometheus/console_libraries \\\n--web.enable-admin-api \\\n--storage.tsdb.retention.time=30d \\\n--web.enable-lifecycle \\\n\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl start prometheus\nsystemctl enable prometheus\n")),(0,o.kt)("h3",{id:"\u5b89\u88ddnode_exporter"},"\u5b89\u88ddnode_exporter"),(0,o.kt)("p",null,"\u76f8\u8f03\u65bcZabbix\u6709\u63a8\u62c9\u6a21\u5f0f,\u5728Prometheus\u4e16\u754c\u88e1\u9762\u57fa\u672c\u4e0a\u90fd\u662fprometheus server\u4e3b\u52d5\u53bb\u627eprometheus target\u62c9\u8cc7\u6599,\u4e5f\u5c31\u662fzabbix\u7684\u4e3b\u52d5\u6a21\u5f0f\uff01\n\u90a3\u4ed6\u5230\u5e95\u600e\u9ebc\u62c9\u8cc7\u6599\uff1f prometheus target\u900f\u904e\u5b98\u65b9exporter,\u6216\u8005\u81ea\u5efa\u7684exporter \u5b89\u88dd\u5728\u81ea\u5df1\u8eab\u4e0a,\u4e26\u958b\u555f\u7279\u5b9aport\u8b93prometheus server\u4f86\u6488\u8cc7\u6599.\n\u5176\u4e2d\u6700\u5e38\u7528\u7684\u662fnode_exporter! \u5c31\u662f\u6536\u96c6ram,cpu,disk\u9019\u4e9b\u6700\u57fa\u672c\uff01"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n# \u5b89\u88c5Node Exporter\nsudo useradd -rs /bin/false node_exporter\ncurl -LO https://github.com/prometheus/node_exporter/releases/download/v1.2.0/node_exporter-1.2.0.linux-amd64.tar.gz\ntar xvf node_exporter-1.2.0.linux-amd64.tar.gz\nsudo cp node_exporter-1.2.0.linux-amd64/node_exporter /usr/local/bin/\nsudo chown node_exporter:node_exporter /usr/local/bin/node_exporter\nrm -rf node_exporter-1.2.0.linux-amd64.tar.gz node_exporter-1.2.0.linux-amd64\n\n# \u521b\u5efaNode Exporter\u670d\u52a1\u6587\u4ef6\ncat << EOF | sudo tee /etc/systemd/system/node_exporter.service\n[Unit]\nDescription=Node Exporter\nAfter=network.target\n\n[Service]\nUser=node_exporter\nExecStart=/usr/local/bin/node_exporter\n\n[Install]\nWantedBy=default.target\nEOF\n\n# \u542f\u52a8Node Exporter\u670d\u52a1\nsudo systemctl daemon-reload\nsudo systemctl start node_exporter\nsudo systemctl enable node_exporter\n")),(0,o.kt)("h2",{id:"kibana"},"kibana"))}c.isMDXComponent=!0}}]);