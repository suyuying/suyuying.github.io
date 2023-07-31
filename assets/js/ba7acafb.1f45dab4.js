"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[4571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,k=u["".concat(i,".").concat(d)]||u[d]||c[d]||l;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"Prometheus,\u4ee5\u53ca\u57fa\u790e\u4ecb\u7d39",description:"Prometheus\u53ca\u4e32\u63a5kibana\u57fa\u790e\u4ecb\u7d39\u8ddf\u4f7f\u7528\u4e4b\u5f8c\u7684\u611f\u60f3.\u5305\u542b\u5b89\u88ddprometheus,node_exporter,alertmanager\u7b49\u8a2d\u5b9a,\u4ee5\u53ca\u5176\u544a\u8b66\u8a2d\u5b9a\u7b49\uff01",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["Prometheus","Grafana"]},o=void 0,s={unversionedId:"Prometheus/2023-07-17-prometheus-kibana-install",id:"Prometheus/2023-07-17-prometheus-kibana-install",title:"Prometheus,\u4ee5\u53ca\u57fa\u790e\u4ecb\u7d39",description:"Prometheus\u53ca\u4e32\u63a5kibana\u57fa\u790e\u4ecb\u7d39\u8ddf\u4f7f\u7528\u4e4b\u5f8c\u7684\u611f\u60f3.\u5305\u542b\u5b89\u88ddprometheus,node_exporter,alertmanager\u7b49\u8a2d\u5b9a,\u4ee5\u53ca\u5176\u544a\u8b66\u8a2d\u5b9a\u7b49\uff01",source:"@site/docs/Prometheus/2023-07-17-prometheus-kibana-install.md",sourceDirName:"Prometheus",slug:"/Prometheus/2023-07-17-prometheus-kibana-install",permalink:"/docs/Prometheus/2023-07-17-prometheus-kibana-install",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Prometheus/2023-07-17-prometheus-kibana-install.md",tags:[{label:"Prometheus",permalink:"/docs/tags/prometheus"},{label:"Grafana",permalink:"/docs/tags/grafana"}],version:"current",frontMatter:{title:"Prometheus,\u4ee5\u53ca\u57fa\u790e\u4ecb\u7d39",description:"Prometheus\u53ca\u4e32\u63a5kibana\u57fa\u790e\u4ecb\u7d39\u8ddf\u4f7f\u7528\u4e4b\u5f8c\u7684\u611f\u60f3.\u5305\u542b\u5b89\u88ddprometheus,node_exporter,alertmanager\u7b49\u8a2d\u5b9a,\u4ee5\u53ca\u5176\u544a\u8b66\u8a2d\u5b9a\u7b49\uff01",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["Prometheus","Grafana"]},sidebar:"tutorialSidebar",previous:{title:"set the priority order of the network services through linux cmd",permalink:"/docs/Others/2023-07-31-set-the-priority-order-of-network-through-cmd-in-linux"},next:{title:"kibana\u5efa\u7f6e,\u4ee5\u53ca\u57fa\u790e\u4ecb\u7d39",permalink:"/docs/Prometheus/2023-07-26-kibana"}},i={},p=[{value:"prometheus",id:"prometheus",level:2},{value:"prometheus\u5b89\u88dd",id:"prometheus\u5b89\u88dd",level:3},{value:"\u5b89\u88ddnode_exporter",id:"\u5b89\u88ddnode_exporter",level:3},{value:"prometheus\u8a2d\u5b9a",id:"prometheus\u8a2d\u5b9a",level:3},{value:"scrape\u8a2d\u5b9a",id:"scrape\u8a2d\u5b9a",level:4},{value:"consul",id:"consul",level:4},{value:"\u96f2\u7aef\u5ee0\u5546",id:"\u96f2\u7aef\u5ee0\u5546",level:4},{value:"\u6a94\u6848\u81ea\u52d5\u767c\u73fe",id:"\u6a94\u6848\u81ea\u52d5\u767c\u73fe",level:4},{value:"\u89f8\u767c\u544a\u8b66",id:"\u89f8\u767c\u544a\u8b66",level:4},{value:"\u67e5\u8a62\u8a9e\u6cd5",id:"\u67e5\u8a62\u8a9e\u6cd5",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prometheus"},"prometheus"),(0,a.kt)("p",null,"\u76f8\u8f03\u65bcZabbix\u7cfb\u7d71\u4f7f\u7528mysql\u4e4b\u985e\u7684\u95dc\u806f\u5f0f\u8cc7\u6599\u5eab,prometheus\u4f7f\u7528\u662f\u7684TSDB\u6642\u5e8f\u8cc7\u6599\u5eab,\u56e0\u5176\u4e3b\u8981\u529f\u80fd\u805a\u7126\u5728\u770blog\u8ddf\u5206\u6790\u6578\u64da,\u4e26\u4e0d\u9700\u8981\u5c0d\u4e0d\u540c\u8868\u683c\u505a\u95dc\u806f."),(0,a.kt)("p",null,"\u63a1\u7528tsdb\u7684prometheus\u6700\u6700\u76f4\u89c0\u7684\u5dee\u5225\u5c31\u662f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 TSDB\uff0c\u5b83\u5c0d\u7cfb\u7d71\u8cc7\u6e90\u7684\u9700\u6c42\u76f8\u5c0d\u8f03\u4f4e\uff0c\u9019\u907f\u514d\u4e86 MySQL \u7b49\u95dc\u806f\u5f0f\u8cc7\u6599\u5eab\u53ef\u80fd\u5c0d\u7cfb\u7d71\u8cc7\u6e90\u7684\u5927\u91cf\u6d88\u8017"),(0,a.kt)("li",{parentName:"ol"},"\u7531\u65bc TSDB \u5c08\u70ba\u6642\u9593\u5e8f\u5217\u6578\u64da\u8a2d\u8a08\uff0c\u5b83\u53ef\u4ee5\u66f4\u6709\u6548\u5730\u7d22\u5f15\u548c\u67e5\u8a62\u6b64\u985e\u6578\u64da\uff0c\u4f7f Prometheus \u7684\u67e5\u8a62\u901f\u5ea6\u6bd4\u4f7f\u7528\u50b3\u7d71\u95dc\u806f\u5f0f\u8cc7\u6599\u5eab\u7684\u7cfb\u7d71\u66f4\u5feb\n\u5728\u6211\u81ea\u5df1\u7684\u6e2c\u8a66\u74b0\u5883,\u7528\u4e00\u53f0free tier\u7684\u6a5f\u5668\u904b\u884cprometheus,\u4e5f\u53ef\u4ee5\u8dd1\u5f88\u9806\uff01")),(0,a.kt)("h3",{id:"prometheus\u5b89\u88dd"},"prometheus\u5b89\u88dd"),(0,a.kt)("p",null,"\u5efa\u7acb\u4f7f\u7528\u8005"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"useradd --no-create-home --shell /bin/false prometheus\n")),(0,a.kt)("p",null,"\u5efa\u7acb\u8cc7\u6599\u593e\u4e26\u6388\u4e88\u4f7f\u7528\u8005"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /etc/prometheus /var/lib/prometheus\nchown -R prometheus:prometheus /etc/prometheus /var/lib/prometheus\n")),(0,a.kt)("p",null,"\u4e0b\u8f09prometheus"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/prometheus/prometheus/releases/download/v2.44.0/prometheus-2.44.0.linux-amd64.tar.gz\ntar xvfz prometheus-*.tar.gz\n\nmv prometheus-2.44.0.linux-amd64 prometheuspackage\nchown -R prometheus:prometheus prometheuspackage\n")),(0,a.kt)("p",null,"\u642c\u79fb\u8cc7\u6599\u5230\u76ee\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mv prometheuspackage/{console_libraries,consoles,prometheus.yml} /etc/prometheus/\nmv prometheuspackage/{prometheus,promtool} /usr/local/bin\n")),(0,a.kt)("p",null,"\u5efa\u7acb\u958b\u6a5fservice"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF | sudo tee /usr/lib/systemd/system/prometheus.service\n[Unit]\nDescription=Prometheus\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/prometheus \\\n--config.file /etc/prometheus/prometheus.yml \\\n--storage.tsdb.path /var/lib/prometheus/ \\\n--web.console.templates=/etc/prometheus/consoles \\\n--web.console.libraries=/etc/prometheus/console_libraries \\\n--web.enable-admin-api \\\n--storage.tsdb.retention.time=30d \\\n--web.enable-lifecycle \\\n\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl start prometheus\nsystemctl enable prometheus\n")),(0,a.kt)("p",null,"\u5b8c\u6574\u7248"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nuseradd --no-create-home --shell /bin/false prometheus\nmkdir -p /etc/prometheus\nmkdir -p /var/lib/prometheus\nchown prometheus:prometheus /var/lib/prometheus\nchown prometheus:prometheus /etc/prometheus\nwget https://github.com/prometheus/prometheus/releases/download/v2.44.0/prometheus-2.44.0.linux-amd64.tar.gz\ntar xvfz prometheus-*.tar.gz\n\nmv prometheus-2.44.0.linux-amd64 prometheuspackage\nchown -R prometheus:prometheus prometheuspackage/\ncd prometheuspackage\nmv console_libraries/ /etc/prometheus/\nmv consoles/ /etc/prometheus/\nmv prometheus.yml /etc/prometheus/\nmv prometheus /usr/local/bin\nmv promtool /usr/local/bin\ncat << EOF | sudo tee /usr/lib/systemd/system/prometheus.service\n[Unit]\nDescription=Prometheus\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/prometheus \\\n--config.file /etc/prometheus/prometheus.yml \\\n--storage.tsdb.path /var/lib/prometheus/ \\\n--web.console.templates=/etc/prometheus/consoles \\\n--web.console.libraries=/etc/prometheus/console_libraries \\\n--web.enable-admin-api \\\n--storage.tsdb.retention.time=30d \\\n--web.enable-lifecycle \\\n\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl start prometheus\nsystemctl enable prometheus\n")),(0,a.kt)("h3",{id:"\u5b89\u88ddnode_exporter"},"\u5b89\u88ddnode_exporter"),(0,a.kt)("p",null,"\u76f8\u8f03\u65bcZabbix\u6709\u63a8\u62c9\u6a21\u5f0f,\u5728Prometheus\u4e16\u754c\u88e1\u9762\u57fa\u672c\u4e0a\u90fd\u662fprometheus server\u4e3b\u52d5\u53bb\u627eprometheus target\u62c9\u8cc7\u6599,\u4e5f\u5c31\u662fzabbix\u7684\u4e3b\u52d5\u6a21\u5f0f\uff01\n\u90a3\u4ed6\u5230\u5e95\u600e\u9ebc\u62c9\u8cc7\u6599\uff1f prometheus target\u900f\u904e\u5b98\u65b9exporter,\u6216\u8005\u81ea\u5efa\u7684exporter \u5b89\u88dd\u5728\u81ea\u5df1\u8eab\u4e0a,\u4e26\u958b\u555f\u7279\u5b9aport\u8b93prometheus server\u4f86\u6488\u8cc7\u6599.\n\u5176\u4e2d\u6700\u5e38\u7528\u7684\u662fnode_exporter! \u5c31\u662f\u6536\u96c6ram,cpu,disk\u9019\u4e9b\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n# \u5b89\u88c5Node Exporter\nsudo useradd -rs /bin/false node_exporter\ncurl -LO https://github.com/prometheus/node_exporter/releases/download/v1.2.0/node_exporter-1.2.0.linux-amd64.tar.gz\ntar xvf node_exporter-1.2.0.linux-amd64.tar.gz\nsudo cp node_exporter-1.2.0.linux-amd64/node_exporter /usr/local/bin/\nsudo chown node_exporter:node_exporter /usr/local/bin/node_exporter\nrm -rf node_exporter-1.2.0.linux-amd64.tar.gz node_exporter-1.2.0.linux-amd64\n\n# \u521b\u5efaNode Exporter\u670d\u52a1\u6587\u4ef6\ncat << EOF | sudo tee /etc/systemd/system/node_exporter.service\n[Unit]\nDescription=Node Exporter\nAfter=network.target\n\n[Service]\nUser=node_exporter\nExecStart=/usr/local/bin/node_exporter\n\n[Install]\nWantedBy=default.target\nEOF\n\n# \u542f\u52a8Node Exporter\u670d\u52a1\nsudo systemctl daemon-reload\nsudo systemctl start node_exporter\nsudo systemctl enable node_exporter\n")),(0,a.kt)("p",null,"ps.\u4f60\u4e5f\u53ef\u4ee5\u7528docker\u8d77,\u4ed6\u4e5f\u53ef\u4ee5\u900f\u904e\u4e3b\u6a5f\u63a5\u53e3\u53bb\u53d6\u5230\u4e3b\u6a5f\u786c\u9ad4\u6578\u64da"),(0,a.kt)("h3",{id:"prometheus\u8a2d\u5b9a"},"prometheus\u8a2d\u5b9a"),(0,a.kt)("p",null,"\u6578\u64da\u7684\u7d44\u6210\u662f\u7531Metric,\u8ddfLabel\u7d44\u6210."),(0,a.kt)("p",null,"\u76f4\u63a5\u67e5\u8a62Metric\u4f60\u6703\u62ff\u5230\u5176\u5e95\u4e0b\u7684\u6240\u6709label\u7684\u6578\u64da,\u4f7f\u7528label\u5247\u6703\u904e\u6ffe\u6389\u4e00\u4e9b\u4e0d\u7b26\u5408\u8005\uff01\n\u76f8\u5c0d\u65bcZabbix\u628a\u4e00\u4e9b\u6b0a\u9650\u8a2d\u5b9a\u8ddf\u901a\u77e5\u7fa4\u7d44\u9019\u4e9b\u8a2d\u5b9a\u85cf\u5728UI\u85cf\u5f97\u5230\u8655\u90fd\u662f(ex.Zabbix\u90a3\u7bc7\u8a2d\u5b9atelegram),\u8b93\u65b0\u624b\u6216\u8005\u4e45\u6c92\u64cd\u4f5c\u7684\u4eba\u5f88\u96e3\u627e,\u5982\u679c\u4e4b\u5f8c\u6709\u9700\u8981\u5efa\u4e00\u53f0\u65b0\u7684zabbix,\u90a3\u4e5f\u662f\u5f88\u795e\u5947\u7684\u6298\u78e8,\u90a3\u7528Prometheus\u7684\u512a\u9ede,\u5c31\u5728\u65bc\u5b83\u6240\u6709\u6771\u897f\u90fd\u5728\u8a2d\u5b9a\u6a94\u5167,\u7121\u8ad6\u8a2d\u5b9a\u4f7f\u7528\u8005,\u8a2d\u5b9a\u544a\u8b66\u8f49\u767c\u9019\u4e9b\u90fd\u662f\u5728\u8a2d\u5b9a\u6a94\u5167\u7684,\u500b\u4eba\u8a8d\u70ba\u5728\u7ba1\u7406\u4e0a\u65b9\u4fbf\u7ba1\u7406\uff01"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config"},"config\u5f88\u591a,\u53ef\u4ee5\u770b\u5b98\u7db2\u9019")),(0,a.kt)("p",null,"\u4e3b\u8981\u8981\u77e5\u9053"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u600e\u9ebcscrape\u5230\u4f60\u7684\u76ee\u6a19target,\u65b9\u6cd5\u6709\u5f88\u591a"),(0,a.kt)("li",{parentName:"ol"},"\u89f8\u767c\u544a\u8b66\u8981\u600e\u9ebc\u5beb")),(0,a.kt)("h4",{id:"scrape\u8a2d\u5b9a"},"scrape\u8a2d\u5b9a"),(0,a.kt)("p",null,"\u8981\u5230target\u6293metric\u8cc7\u8a0a\u6709\u5f88\u591a\u65b9\u6cd5,\u9019\u908a\u5217\u51fa\u6211\u66fe\u7d93\u7528\u904e\u7684,\u57fa\u672c\u4e0a\u8a2d\u5b9a\u5f88\u591a,\u5b98\u7db2\u4e5f\u63d0\u4f9b\u4e00\u500b",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus/prometheus/blob/main/config/testdata/conf.good.yml"},"\u8a2d\u5b9a\u6a94\u7bc4\u4f8b"),"\u7d66\u5927\u5bb6\u505a\u683c\u5f0f\u53c3\u8003."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"static config"),"-\u5176\u5be6\u8981\u662f\u628aip\u8ddfport\u5beb\u6b7b,\u8b93\u6a5f\u5668\u904e\u53bb\u6293"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"consul"),"-\u7db2\u8def\u4e0a\u67e5\u8a62prometheus\u81ea\u52d5\u767c\u73fe\u5f88\u5e38\u6703\u51fa\u5148\u73fe\u7684\u65b9\u6cd5,\u512a\u9ede\u662f\n\u4e0d\u9650\u96f2\u7aef\u6216\u5730\u7aef\u90fd\u53ef\u4ee5\u505a\u5230\u81ea\u52d5\u767c\u73fe,\u4e5f\u6709\u5176\u4ed6\u9644\u52a0\u529f\u80fd,\u4f46\u7f3a\u9ede\u662f,\u55ae\u7d14\u7528\u4f86\u505a\u81ea\u52d5\u767c\u73fe\u6709\u9ede\u6d6a\u8cbb\u4e14\u9ebb\u7169."),(0,a.kt)("li",{parentName:"ol"},"\u96f2\u7aef\u5ee0\u5546\u63d0\u4f9b\u7684\u767c\u73fe\u7cfb\u7d71-\u5982\u679c\u4f7f\u7528\u96f2\u7aef\u65b9\u6848,\u5728iam\u53ef\u4ee5\u5141\u8a31\u958b\u653e\u7684\u60c5\u6cc1\u4e0b\u53bb,\u53bb\u505a\u5230\u81ea\u52d5\u767c\u73fe,\u9019\u500b\u4e5f\u662f\u500b\u5feb\u901f\u7684\u65b9\u6848\uff01 ex,azure,gcp,aws\u8ddf\u5176\u4ed6\u6bd4\u8f03\u5c0f\u5bb6\u7684\u5728prometheus\u90fd\u6709\u63d0\u4f9b\u8a2d\u5b9a."),(0,a.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u81ea\u52d5\u767c\u73fe: prometheus\u6703\u5b9a\u671f\u4f86\u8b80\u9019\u96bb\u6a94\u6848,\u53bb\u770b\u6709\u54ea\u4e9b\u65b0\u7684\u4e3b\u6a5f\u8981\u6536\u8cc7\u6599.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"static config"),"\u8a2d\u5b9a\u7bc4\u4f8b\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: \"node\"\n    scrape_interval: 5s\n    static_configs:\n      - targets:\n        - 'localhost:9100'\n        - '10.0.0.112:9100'\n    #\u9019\u908a\u4ee5\u4e0b\u70baoptional,\u4f46\u5728\u5be6\u52d9\u4e0a\u5f88\u91cd\u8981,\u4e5f\u76f8\u5c0d\u96e3\u61c2\n        labels:\n          project: UAT\n          origin_prometheus: UAT\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u4e0a\u6eff\u660e\u986f\u5c31\u662f\u5230\u8a72ip and port\u90a3\u908a\u62ff\u8cc7\u6599")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5728config\u4e2d\u5beb\u7684lables\u662f\u5565\uff1f\nlabels\u5728prometheus\u6709\u5169\u7a2e,\u4e00\u7a2e\u662f\u639b\u5728metric\u5e95\u4e0b\u4f5c\u70ba\u7be9\u9078\u8cc7\u6599\u7684label,\u53e6\u4e00\u7a2e\u662f\u6a19\u793aserver-side\u7684instance\u505a\u7684label,\u800cserver-side\u6703\u5728\u6488\u53d6target exporter\u7684\u8cc7\u6599\u56de\u4f86\u5f8c\u505a\u6a19\u793a,\u9019\u5169\u500b\u7684\u540d\u7a31\u53ef\u80fd\u6703\u885d\u7a81,\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"honor_lables"),"\u9019\u500b\u8a2d\u5b9a\u53bb\u505a\u8abf\u6574\uff01\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"__"),"\u958b\u982d\u7684\u662f\u5728\u904e\u7a0b\u4e2d\u7522\u751f\u7684label,\u5b83\u4e0d\u6703\u4fdd\u7559\u5230\u6700\u5f8c,ex.",(0,a.kt)("inlineCode",{parentName:"p"},"__address__"),"\u6703\u5728before label\u88e1\uff01"),(0,a.kt)("p",{parentName:"admonition"},"server-side label\u7684\u4f7f\u7528,\u5728\u4e4b\u5f8c\u65bcgrafana\u88fd\u4f5cdashboard\u6642\u5f88\u91cd\u8981,\u4ed6\u53ef\u4ee5\u900f\u904eserver-side lable\u53bb\u505a\u6a5f\u5668\u7be9\u9078\u8ddf\u5206\u7d44\u7b49\uff01")),(0,a.kt)("h4",{id:"consul"},"consul"),(0,a.kt)("p",null,"\u4ed6\u505a\u7684\u4e8b\u60c5\u5c31\u662f\u8d77\u4e00\u500bconsul\u670d\u52d9,\u63a5\u8457\u4f60\u8981\u8a3b\u518a\u7684target\u900f\u904eput\u8acb\u6c42,\u50cfconsul\u8a3b\u518atarget,\u6240\u4ee5\u6703\u8b8a\u6210\u8981\u5728\u6bcf\u53f0\u4e3b\u6a5f\u4e0a\u57f7\u884cput\u8acb\u6c42\u4e26\u6234\u4e0a\u8cc7\u8a0a,\u4e4b\u5f8c\u4f60\u7684prometheus\u8981\u5728\u8a2d\u5b9a\u63a5\u53d7consul\u670d\u52d9\u7d66\u7684target.\n",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/article/1536967"},"\u53ef\u4ee5\u770b\u9019\u7bc7"),"."),(0,a.kt)("h4",{id:"\u96f2\u7aef\u5ee0\u5546"},"\u96f2\u7aef\u5ee0\u5546"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#ec2_sd_config"},"\u9019\u500b\u4e5f\u662f\u53ef\u4ee5\u770b\u5b98\u7db2"),",",(0,a.kt)("inlineCode",{parentName:"p"},"\u96f2\u7aef\u5ee0\u5546"),"\u9019\u500b\u5f88\u91cd\u8981,\u4e3b\u8981\u9084\u662f\u6709IAM\u8a2d\u5b9a,ex.gce\u6700\u5c11\u8981\u6709\u5c0dcompute resoruces\u7684read-only\u7b49,ec2\u8981\u6709ec2:DescribeInstances permission.\u4ee5\u4e0b\u70baec2\u7bc4\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  - job_name: 'dummy'\n    metrics_path: '/metrics'\n    ec2_sd_configs:\n    - region: us-west-1\n      port: 9100\n")),(0,a.kt)("p",null,"\u4ed6\u5c31\u6703\u53bb\u5075\u6e2c\u88e1\u9762\u6709\u958b\u653e9100 port\u7684,\u6b0a\u9650\u8a2d\u5b9a\u770b\u524d\u9762\u9023\u7d50"),(0,a.kt)("h4",{id:"\u6a94\u6848\u81ea\u52d5\u767c\u73fe"},"\u6a94\u6848\u81ea\u52d5\u767c\u73fe"),(0,a.kt)("p",null,"\u57fa\u672c\u4e0a\u4ed6\u539f\u7406\u5c31\u662f\u4e00\u76f4\u53bb\u8b80\u540c\u4e00\u53ea\u6a94\u6848,\u4e0d\u904e\u4e5f\u56e0\u70ba\u5982\u6b64,\u4e00\u4f46\u4ed6\u9019\u6b21\u6383\u63cf\u6c92\u6709\u6383\u5230\u8a72\u6a5f\u5668\u5c31\u6703\u76f4\u63a5\u628a\u8a72instance\u53bb\u9664. \u4ee5\u4e0b\u7bc4\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"  - job_name: 'my_job'\n    file_sd_configs:\n      - refresh_interval: 30s\n        files:\n        - ./test/test_sd.json\n    relabel_configs:\n      - source_labels: [__address__]\n        regex: '10\\.0\\.0\\.\\d+:\\d+'\n        target_label: 'origin_prometheus'\n        replacement: 'UAT'\n        action: replace\n      - source_labels: [__address__]\n        regex: '10\\.0\\.1\\.\\d+:\\d+'\n        target_label: 'origin_prometheus'\n        replacement: 'STAGE'\n        action: replace  \n")),(0,a.kt)("p",null,"\u9019\u908a\u7684\u8a9e\u53e5\u610f\u601d,\u5efa\u7acb\u4e00\u500bjob,\u7136\u5f8c\u8b80",(0,a.kt)("inlineCode",{parentName:"p"},"test/test_sd.json"),",\u5982\u679c\u767c\u73fetargets\u7684ip\u662f\u7b26\u5408\u6211\u7684\u6b63\u5247\u6279\u914d,\u5c31\u6703\u505a\u51fa\u4e00\u500blabel",(0,a.kt)("inlineCode",{parentName:"p"},"origin_prometheus"),"\u7136\u5f8c\u628a\u4ed6\u7684\u503c\u63db\u6210replacement\u88e1\u9762\u7684."),(0,a.kt)("h4",{id:"\u89f8\u767c\u544a\u8b66"},"\u89f8\u767c\u544a\u8b66"),(0,a.kt)("p",null,"label\u9084\u6709\u5206\u5168\u5c40\u8b8a\u91cf\u7684label,\u6703\u7528externalLabels\u505a\u6a19\u793a,\u4e00\u822c\u6a19\u793a\u55ae\u4e00\u6642\u9593\u5e8f\u5217\u7684\u6703\u662f\u4e00\u822clabel."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u8a2d\u5b9a\u89f8\u767c\u544a\u8b66\uff1f\n\u4f60\u7684prometheus.yml\u6703\u5206\u5f88\u591ablock,",(0,a.kt)("inlineCode",{parentName:"li"},"global")," block,",(0,a.kt)("inlineCode",{parentName:"li"},"scrape_configs")," block...,\u5206\u5225\u70ba\u5168\u5c40\u8a2d\u5b9a,\u53d6\u5f97\u76ee\u6a19\u8cc7\u6599\u7684\u8a2d\u5b9a,\u90a3\u8a2d\u5b9a\u544a\u8b66\u7684\u95be\u503c\u662f\u900f\u904e",(0,a.kt)("inlineCode",{parentName:"li"},"rule_files"),",\u7576\u9054\u5230\u95be\u503c\u5f8c\u6703\u900f\u904e",(0,a.kt)("inlineCode",{parentName:"li"},"alert_manager"),"\u544a\u8b66,alert_manager\u670d\u52d9\u9700\u8981\u53e6\u5916\u8d77,\u9019\u908a\u8981\u8a2d\u5b9aalert_manager\u670d\u52d9\u8d77\u7684ip\u8ddfport\uff01")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="prometheus.yml"',title:'"prometheus.yml"'},'alerting:\n  alertmanagers:\n    - static_configs:\n        - targets:\n            - "127.0.0.1:9093"\n      basic_auth:\n        username: admin\n        password: alloha\n\nrule_files:\n  - "rules/linux.rules.yml"\n')),(0,a.kt)("p",null,"\u7db2\u8def\u4e0a\u5f88\u591a\u5c0d\u544a\u8b66\u7684\u53c3\u8003\u8a2d\u5b9a."),(0,a.kt)("p",null,"\u4e3b\u8981\u5c31\u8a2d\u5b9a\u898f\u5247,\u56b4\u91cd\u7b49\u7d1a,\u689d\u4ef6,\u81f3\u65bc\u4f60\u662f\u5426\u5728\u7b97\u5f0f\u4e0a\u7528label\u5c31\u770b\u9700\u6c42,\u63a5\u8457\u5c31\u770balernmanager\u8a2d\u5b9a."),(0,a.kt)("p",null,"alertmanager\u6211\u662f\u7528docker-compose\u8d77.\n\u5148\u57f7\u884c\u6307\u4ee4\u5efa\u7acb\u8cc7\u6599\u593e,\u9019\u662f\u7d66\u4e4b\u5f8c\u639b\u8f09\u8cc7\u6e90\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p alertmanager\ncd alertmanager\nmkdir -p data\nmkdir -p configs\ntouch configs/alertmanager.yml\ntouch docker-compose.yml\n")),(0,a.kt)("p",null,"\u8a2d\u5b9a\u6a94\u5982\u4ee5\u4e0b,\u4e3b\u8981\u5c31receiver\u5c0d\u5230\u7684\u8a71\u5c31\u6703\u767c\u901a\u77e5\u904e\u53bb,\u5982\u679c\u6709\u4e00\u500b\u56b4\u91cd\u6027\u70ba'critical'\u7684\u8b66\u544a\uff0c\u4e26\u4e14\u8207\u56b4\u91cd\u6027\u70ba'warning'\u7684\u8b66\u544a\u5728'alertname'\u548c'instance'\u4e0a\u5339\u914d\uff0c\u5247warning\u6703\u88ab\u6291\u5236."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="configs/alertmanager.yml"',title:'"configs/alertmanager.yml"'},"route:\n  group_by: ['alertname']\n  group_wait: 30s\n  group_interval: 5m\n  repeat_interval: 1h\n  receiver: 'tg-test'\nreceivers:\n  - name: 'tg-test'\n    telegram_configs:\n    - bot_token:  urs:urs\n      api_url: https://api.telegram.org\n      chat_id: urs\n      # parse_mode: ''\ninhibit_rules:\n  - source_match:\n      severity: 'critical'\n    target_match:\n      severity: 'warning'\n    equal: ['alertname', 'instance']\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: \'3.3\'\nservices:\n  alertmanager:\n    image: prom/alertmanager:v0.25.0\n    restart: unless-stopped\n    ports:\n      - "9093:9093"\n    volumes:\n      - "./config:/config"\n      - "./data:/data"\n    command: --config.file=/config/alertmanager.yml --storage.path=/alertmanager  --log.level=debug\n')),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u8981\u52a0\u9a57\u8b49\u7684\u6771\u6771,docker-compose.yml\u8981\u52a0--web.config.file=/config/web.yml\u9019\u500bcommand,\u53e6\u5916\u4f60\u7684web.yml\u9577\u76f8\u6703\u50cf\u9019\u6a23"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"basic_auth_users:\n    admin: \u9019\u908a\u662f\u7528\u52a0\u5bc6\u7684.\n")),(0,a.kt)("h3",{id:"\u67e5\u8a62\u8a9e\u6cd5"},"\u67e5\u8a62\u8a9e\u6cd5"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"PromQL"),"\u8a9e\u6cd5\u505a\u67e5\u8a62,\u4e26\u4f9d\u64da\u5c0d\u61c9\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Metric"),"\u8ddf",(0,a.kt)("inlineCode",{parentName:"p"},"Label"),"\u505a\u67e5\u8a62\u6578\u64da\uff01\n\u6578\u64da\u7684\u7d44\u6210\u662f\u7531Metric,\u8ddfLabel\u7d44\u6210,\u76f4\u63a5\u67e5\u8a62Metric\u4f60\u6703\u62ff\u5230\u5176\u5e95\u4e0b\u7684\u6240\u6709label\u7684\u6578\u64da,\u4f7f\u7528label\u5247\u6703\u904e\u6ffe\u6389\u4e00\u4e9b\u4e0d\u7b26\u5408\u8005\uff01\n\u4f8b\u5982,\u4f60\u8981\u67e5\u8a62\u67d0\u53f0\u6a5f\u5668\u7684ram\u4f7f\u7528\u7387,\u4f60\u6703\u5148\u5728\u4e0a\u9762\u5b89\u88ddnode_exporter,\u7136\u5f8c\u8b93prometheus server\u53bb\u62c9\u8cc7\u6599. \u4e26\u4f7f\u7528\u4ee5\u4e0b\u8a9e\u6cd5\u505a\u67e5\u8a62"),(0,a.kt)("p",null,"\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"node_memory_MemAvailable_bytes"),"\u6703\u770b\u5230"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'node_memory_MemAvailable_bytes{instance="10.0.0.112:9100", job="dummy", origin_prometheus="UAT", project="UAT"}\nnode_memory_MemAvailable_bytes{instance="10.0.0.112:9100", job="node", origin_prometheus="UAT", project="UAT"}....\n')),(0,a.kt)("p",null,"\u90a3\u5982\u679c\u7528",(0,a.kt)("inlineCode",{parentName:"p"},'node_memory_MemAvailable_bytes{job="node"}'),"\n\u5c31\u53ea\u6703\u770b\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"job=node"),"\u7684\u6578\u64da\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'node_memory_MemAvailable_bytes{instance="10.0.0.112:9100", job="node", origin_prometheus="UAT", project="UAT"}....\n')),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:r(23437).Z},"\u4ee5\u4e0b\u63d0\u4f9b\u8a2d\u5b9a\u5728rule\u7684\u544a\u8b66\u7bc4\u4f8b"),",\u7528\u65bc\u8a2d\u5b9a\u9054\u5230\u600e\u6a23\u689d\u4ef6\u6703\u89f8\u767c\u544a\u8b66\u4e26\u7d71\u6574\u529f\u80fd."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7bc0\u9ede\u554f\u984c\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node Down: \u7bc0\u9ede\u76e3\u63a7\u670d\u52d9\uff08monitoring-pi\uff09\u4e2d\u65b7\u8d85\u904e2\u5206\u9418\u3002")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u8a18\u61b6\u9ad4\u554f\u984c\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HostOutOfMemory: \u53ef\u7528\u8a18\u61b6\u9ad4\u4f4e\u65bc\u7e3d\u8a18\u61b6\u9ad4\u768415\uff05\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostMemoryUnderMemoryPressure:")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u7db2\u8def\u554f\u984c:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HostUnusualNetworkThroughputIn: \u5165\u7db2\u8def\u6d41\u91cf\u8d85\u904e100MB/s\u4e94\u5206\u9418\u4ee5\u4e0a\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostUnusualNetworkThroughputOut: \u51fa\u7db2\u8def\u6d41\u91cf\u8d85\u904e100MB/s\u4e94\u5206\u9418\u4ee5\u4e0a\u3002")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u786c\u789f\u8b80\u5beb\u554f\u984c\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HostUnusualDiskReadRate: \u78c1\u789f\u8b80\u53d6\u901f\u5ea6\u8d85\u904e50MB/s\u4e94\u5206\u9418\u4ee5\u4e0a\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostUnusualDiskWriteRate: \u78c1\u789f\u5beb\u5165\u901f\u5ea6\u8d85\u904e50MB/s\u4e94\u5206\u9418\u4ee5\u4e0a\u3002")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u786c\u789f\u7a7a\u9593\u554f\u984c\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DiskSpace10%Free: \u786c\u789f\u5269\u9918\u7a7a\u9593\u5c11\u65bc10\uff05\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostDiskWillFillIn24Hours: \u6839\u64da\u7576\u524d\u5beb\u5165\u901f\u5ea6\uff0c\u9810\u6e2c\u786c\u789f\u572824\u5c0f\u6642\u5167\u5c07\u88ab\u586b\u6eff\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostOutOfInodes: \u786c\u789f\u5269\u9918 Inodes \u5c11\u65bc10\uff05\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostInodesWillFillIn24Hours: \u6839\u64da\u7576\u524d\u5beb\u5165\u901f\u5ea6\uff0c\u9810\u6e2c Inodes \u572824\u5c0f\u6642\u5167\u5c07\u88ab\u7528\u5b8c\u3002")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"\u786c\u789f\u5ef6\u9072\u554f\u984c\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HostUnusualDiskReadLatency: \u786c\u789f\u8b80\u53d6\u5ef6\u9072\u8d85\u904e100\u6beb\u79d2\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostUnusualDiskWriteLatency: \u786c\u789f\u5beb\u5165\u5ef6\u9072\u8d85\u904e100\u6beb\u79d2\u3002")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"\u8655\u7406\u5668\u76f8\u95dc\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HostHighCpuLoad: CPU\u4f7f\u7528\u7387\u8d85\u904e80%\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostCpuStealNoisyNeighbor: CPU\u865b\u64ec\u5316\u74b0\u5883\u4e2d\u7684\u5077\u53d6\u6642\u9593\u8d85\u904e10%\uff0c\u53ef\u80fd\u662f\u865b\u64ec\u6a5f\u9130\u5c45\u4f7f\u7528\u904e\u591a\u7684\u8cc7\u6e90\u6216\u8005Spot\u5be6\u4f8b\u53ef\u80fd\u5df2\u7d93\u8d85\u51fa\u4fe1\u7528\u984d\u5ea6\u3002")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"\u8a18\u61b6\u9ad4\u8207\u4ea4\u63db\u7a7a\u9593\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HostSwapIsFillingUp: \u865b\u64ec\u8a18\u61b6\u9ad4\u4ea4\u63db\u7a7a\u9593\u4f7f\u7528\u7387\u8d85\u904e80%\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostOomKillDetected: \u6aa2\u6e2c\u5230OOM\uff08Out of Memory\uff09\u6bba\u6b7b\u9032\u7a0b\u7684\u60c5\u6cc1\u3002")),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"\u670d\u52d9\u8207\u7cfb\u7d71\u72c0\u614b\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HostSystemdServiceCrashed: systemd\u670d\u52d9\u5d29\u6f70\u3002")),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"\u786c\u9ad4\u8207\u6eab\u5ea6\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HostPhysicalComponentTooHot: \u7269\u7406\u7d44\u4ef6\u6eab\u5ea6\u8d85\u904e100\u651d\u6c0f\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostNodeOvertemperatureAlarm: \u4e3b\u6a5f\u6eab\u5ea6\u904e\u71b1\u8b66\u5831\u3002")),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"\u78c1\u76e4\u9663\u5217\uff08RAID\uff09\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HostRaidArrayGotInactive: RAID\u9663\u5217\u8b8a\u5f97\u4e0d\u6d3b\u8e8d\uff0c\u53ef\u80fd\u662f\u7531\u65bc\u4e00\u500b\u6216\u591a\u500b\u78c1\u76e4\u6545\u969c\uff0c\u4e26\u4e14\u6c92\u6709\u8db3\u5920\u7684\u5099\u7528\u9a45\u52d5\u5668\u4f86\u81ea\u52d5\u4fee\u5fa9\u554f\u984c\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostRaidDiskFailure: RAID\u9663\u5217\u4e2d\u81f3\u5c11\u6709\u4e00\u500b\u8a2d\u5099\u5931\u6557\uff0c\u53ef\u80fd\u9700\u8981\u66f4\u63db\u78c1\u76e4\u3002")),(0,a.kt)("ol",{start:12},(0,a.kt)("li",{parentName:"ol"},"\u8a18\u61b6\u9ad4\u932f\u8aa4\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HostEdacCorrectableErrorsDetected: \u5728\u904e\u53bb\u76845\u5206\u9418\u5167\uff0c\u7531EDAC\u5831\u544a\u7684\u53ef\u7cfe\u6b63\u7684\u8a18\u61b6\u9ad4\u932f\u8aa4\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostEdacUncorrectableErrorsDetected: \u5728\u904e\u53bb\u76845\u5206\u9418\u5167\uff0c\u7531EDAC\u5831\u544a\u7684\u4e0d\u53ef\u7cfe\u6b63\u7684\u8a18\u61b6\u9ad4\u932f\u8aa4\u3002")),(0,a.kt)("ol",{start:13},(0,a.kt)("li",{parentName:"ol"},"\u7db2\u8def\u554f\u984c\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HostNetworkReceiveErrors: \u4e3b\u6a5f\u7db2\u8def\u63a5\u6536\u932f\u8aa4\uff0c\u904e\u53bb\u4e94\u5206\u9418\u5167\u63a5\u6536\u932f\u8aa4\u7684\u6bd4\u4f8b\u8d85\u904e1%\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostNetworkTransmitErrors: \u4e3b\u6a5f\u7db2\u8def\u50b3\u8f38\u932f\u8aa4\uff0c\u904e\u53bb\u4e94\u5206\u9418\u5167\u50b3\u8f38\u932f\u8aa4\u7684\u6bd4\u4f8b\u8d85\u904e1%\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostNetworkInterfaceSaturated: \u4e3b\u6a5f\u7db2\u8def\u4ecb\u9762\u98fd\u548c\uff0c\u50b3\u8f38\u8207\u63a5\u6536\u7684\u6578\u64da\u8d85\u904e\u4ecb\u9762\u768480%\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostConntrackLimit: \u7db2\u8def\u9023\u63a5\u8ffd\u8e64\u7684\u6578\u91cf\u63a5\u8fd1\u9650\u5236\uff0c\u8d85\u904e\u4e8680%\u3002")),(0,a.kt)("ol",{start:14},(0,a.kt)("li",{parentName:"ol"},"\u6642\u9418\u8207\u6642\u9593\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HostClockSkew: \u6aa2\u6e2c\u5230\u4e3b\u6a5f\u6642\u9418\u504f\u79fb\uff0c\u6642\u9418\u4e0d\u540c\u6b65\u3002"),(0,a.kt)("li",{parentName:"ul"},"HostClockNotSynchronising: \u4e3b\u6a5f\u6642\u9418\u7121\u6cd5\u540c\u6b65\uff0c\u4e26\u4e14\u6642\u9418\u7684\u6700\u5927\u8aa4\u5dee\u8d85\u904e\u4e8616\u79d2\u3002")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u7db2\u8def\u4e0a\u5f88\u591a\u5c0d\u544a\u8b66\u7684\u53c3\u8003\u8a2d\u5b9a."),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://gist.github.com/krisek/62a98e2645af5dce169a7b506e999cd8"},"\u57fa\u672c\u786c\u9ad4\u76e3\u63a7")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/samber/awesome-prometheus-alerts/blob/master/_data/rules.yml"},"\u5404\u8edf\u9ad4\u76e3\u63a7\u5927\u5168,\u5305\u542bdb")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://samber.github.io/awesome-prometheus-alerts/rules#host-and-hardware"},"\u9019\u662f\u7b2c\u4e8c\u9ede\u7684\u8b1b\u89e3")))))}c.isMDXComponent=!0},23437:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/linux-alert.rules-5c4519e90fb41f73bece3ce923832ab4.yml"}}]);