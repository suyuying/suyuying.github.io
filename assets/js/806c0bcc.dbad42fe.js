"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[7571],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>k});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),m=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=m(o),u=r,k=s["".concat(c,".").concat(u)]||s[u]||p[u]||a;return o?n.createElement(k,l(l({ref:t},d),{},{components:o})):n.createElement(k,l({ref:t},d))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<a;m++)l[m]=o[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},70914:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var n=o(87462),r=(o(67294),o(3905));const a={title:"docker manage logs in Docker to prevent service failure caused by excessively large container logs",description:"\u7576\u9047\u5230container log\u592a\u5927 \u9020\u6210\u670d\u52d9\u639b\u6389\u7684\u6392\u67e5\u65b9\u5411\uff0c\u4ee5\u53ca\u5982\u4f55\u907f\u514d\u3002\u56e0\u70ba docker \u904b\u884c\u904e\u7a0b\u672c\u8eab log \u4e5f\u6703\u4f54\u7528\u786c\u789f\u8cc7\u6e90\uff0c\u70ba\u4e86\u4e0d\u8b93\u9019\u500b log \u904e\u5ea6\u81a8\u8139\uff0c\u53ef\u4ee5\u7528\u4ee5\u4e0b\u65b9\u5f0f\u9650\u5236",authors:"suyuying",tags:["docker"]},l=void 0,i={permalink:"/blog/2023/03/10/Docker/docker-management",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Docker/2023-03-10-docker-management.md",source:"@site/blog/Docker/2023-03-10-docker-management.md",title:"docker manage logs in Docker to prevent service failure caused by excessively large container logs",description:"\u7576\u9047\u5230container log\u592a\u5927 \u9020\u6210\u670d\u52d9\u639b\u6389\u7684\u6392\u67e5\u65b9\u5411\uff0c\u4ee5\u53ca\u5982\u4f55\u907f\u514d\u3002\u56e0\u70ba docker \u904b\u884c\u904e\u7a0b\u672c\u8eab log \u4e5f\u6703\u4f54\u7528\u786c\u789f\u8cc7\u6e90\uff0c\u70ba\u4e86\u4e0d\u8b93\u9019\u500b log \u904e\u5ea6\u81a8\u8139\uff0c\u53ef\u4ee5\u7528\u4ee5\u4e0b\u65b9\u5f0f\u9650\u5236",date:"2023-03-10T00:00:00.000Z",formattedDate:"March 10, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"}],readingTime:4.94,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"docker manage logs in Docker to prevent service failure caused by excessively large container logs",description:"\u7576\u9047\u5230container log\u592a\u5927 \u9020\u6210\u670d\u52d9\u639b\u6389\u7684\u6392\u67e5\u65b9\u5411\uff0c\u4ee5\u53ca\u5982\u4f55\u907f\u514d\u3002\u56e0\u70ba docker \u904b\u884c\u904e\u7a0b\u672c\u8eab log \u4e5f\u6703\u4f54\u7528\u786c\u789f\u8cc7\u6e90\uff0c\u70ba\u4e86\u4e0d\u8b93\u9019\u500b log \u904e\u5ea6\u81a8\u8139\uff0c\u53ef\u4ee5\u7528\u4ee5\u4e0b\u65b9\u5f0f\u9650\u5236",authors:"suyuying",tags:["docker"]},prevItem:{title:"docker create context and docker context command",permalink:"/blog/2023/03/10/Docker/docker-create-context"},nextItem:{title:"dockermultiplatform build - docker buildx\u6307\u4ee4",permalink:"/blog/2023/03/10/Docker/docker-muiltiplatform"}},c={authorsImageUrls:[void 0]},m=[{value:"volume of docker",id:"volume-of-docker",level:2},{value:"\u5982\u4f55\u6e1b\u5c11\u4e0d\u5fc5\u8981\u7684\u786c\u9ad4\u4f54\u7528",id:"\u5982\u4f55\u6e1b\u5c11\u4e0d\u5fc5\u8981\u7684\u786c\u9ad4\u4f54\u7528",level:3},{value:"what should do when you find / or /var are full",id:"what-should-do-when-you-find--or-var-are-full",level:2},{value:"\u6aa2\u67e5 docker logs \u662f\u5426\u4f54\u592a\u5147",id:"\u6aa2\u67e5-docker-logs-\u662f\u5426\u4f54\u592a\u5147",level:3},{value:"\u6aa2\u67e5 named volume \u4e2d\u5b58\u653e\u8cc7\u8a0a",id:"\u6aa2\u67e5-named-volume-\u4e2d\u5b58\u653e\u8cc7\u8a0a",level:3},{value:"\u6aa2\u67e5 image \u8ddf\u6c92\u7528\u7684 container",id:"\u6aa2\u67e5-image-\u8ddf\u6c92\u7528\u7684-container",level:3}],d={toc:m},s="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(s,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"volume-of-docker"},"volume of docker"),(0,r.kt)("p",null,"\u4ee5\u524d\u90fd\u5728\u5f04\u81ea\u5df1\u7684\u5c0f\u5c08\u6848\uff0c\u53ea\u8981\u6771\u897f\u8dd1\u5f97\u8d77\u4f86\u5c31\u597d\uff0c\u6c92\u60f3\u904e\u6703\u9047\u904e\u56e0\u70ba\u786c\u789f\u5403\u6eff\u5c0e\u81f4 container \u670d\u52d9\u639b\u6389\u7684\u554f\u984c\u3002"),(0,r.kt)("p",null,"docker \u639b\u8f09 volume \u6703\u6709\u4e09\u7a2e\u65b9\u5f0f\uff0c\u7d81\u5b9a\u639b\u8f09\uff08Bind Mount\uff09\uff0c\u547d\u540d\u5377\uff08Named Volume\uff09\uff0c\u533f\u540d\u5377\uff08Anonymous Volume\uff09\uff0c\u524d\u5169\u7a2e\u5728 container \u88ab\u522a\u9664\u6642\u4e0d\u6703\u88ab\u522a\uff0c\u6703\u6c38\u4e45\u4fdd\u5b58\uff0cdocker \u5167\u6c92\u88ab\u639b\u8f09\u6216\u4f7f\u7528 Anonymous Volume \u5247\u90fd\u6703\u88ab\u522a\u9664\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"docker logs \u8cc7\u6599\u5305\u542b\u54ea\u4e9b\uff1f")),(0,r.kt)("p",{parentName:"admonition"},"Docker \u6703\u6355\u6349\u6240\u6709\u5bb9\u5668\u7684\u6a19\u51c6\u8f38\u51fa\uff08\u548c\u6a19\u51c6\u932f\u8aa4\uff09\uff0c\u4e26\u4ee5 JSON \u683c\u5f0f\u5c07\u5176\u5beb\u5165\u6587\u4ef6\u4e2d\u3002 JSON \u683c\u5f0f\u5c07\u6bcf\u884c\u6ce8\u91cb\u70ba\u5176\u6e90\uff08stdout \u6216 stderr\uff09\u548c\u5176\u6642\u9593\u6233\u3002 \u6bcf\u500b\u65e5\u8a8c\u6587\u4ef6\u50c5\u5305\u542b\u6709\u95dc\u4e00\u500b\u5bb9\u5668\u7684\u4fe1\u606f\u3002"),(0,r.kt)("ol",{parentName:"admonition",start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"docker logs \u4ec0\u9ebc\u6642\u5019\u6703\u88ab\u522a\u9664?\n\u7576 container \u88ab rm -f \u6389\u7684\u6642\u5019 (\u55ae\u7d14 restart \u9084\u6703\u5728)!\u5982\u679c\u8981\u522a\u9664 container \u53c8\u60f3\u4fdd\u7559 docker log,\u8acb\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"docker logs CONTAINER_ID > container.log")," ."),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u662f\u4e00\u822c\u975e docker log,\u8981\u628a\u6253\u639b\u8f09\u51fa\u4f86"))),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"    # Copy the logs out to the host\ndocker copy CONTAINER_ID:/path/to/your/log_file /host/path/to/store\n\n# Mount a directory for them\ndocker run -d \\\n-v /host/path/to/store/logs:/container/path/stored/logs \\\nyour-image\n"))),(0,r.kt)("h3",{id:"\u5982\u4f55\u6e1b\u5c11\u4e0d\u5fc5\u8981\u7684\u786c\u9ad4\u4f54\u7528"},"\u5982\u4f55\u6e1b\u5c11\u4e0d\u5fc5\u8981\u7684\u786c\u9ad4\u4f54\u7528"),(0,r.kt)("p",null,"\u56e0\u70ba docker \u904b\u884c\u904e\u7a0b\u672c\u8eab log \u4e5f\u6703\u4f54\u7528\u786c\u789f\u8cc7\u6e90\uff0c\u70ba\u4e86\u4e0d\u8b93\u9019\u500b log \u904e\u5ea6\u81a8\u8139\uff0c\u53ef\u4ee5\u7528\u4ee5\u4e0b\u65b9\u5f0f\u9650\u5236"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539 docker \u8a2d\u5b9a\u6a94")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/etc/docker/daemon.json"',title:'"/etc/docker/daemon.json"'},'{\n  "log-driver":"json-file",\n  "log-opts": {"max-size":"500m", "max-file":"3"}\n}\n\n`systemctl daemon-reload`\n`systemctl restart docker\n`\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539 docker-compose.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'services:\n  hellow:\n    build: .\n    container_name: mattermost\n    restart: always\n    logging:\n      driver: "json-file"\n      options:\n          max-size: "100m"\n          max-file: "10"\n')),(0,r.kt)("p",null,"\u4e26\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u91cd\u555f\uff0c\u4e00\u822c restart \u4e0d\u6703\u5403\u65b0 config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose -f docker-compose.yml up -d --force-recreate mm\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0b\u9019\u500b\u6307\u4ee4\u524d\u52d9\u5fc5\u60f3\u597d\u662f\u5426\u91cd\u8981\u8cc7\u8a0a\u6709\u7528 Bind Mount or Named Volume \u639b\u8f09\u51fa\u4f86\uff01")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"docker \u6307\u4ee4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --log-opt max-size=10m --log-opt max-file=5 nginx\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/logging/json-file/"},"\u5b98\u7db2 log \u7ba1\u7406"),"\uff0c\u7ba1\u7406 docker log \u65b9\u5f0f\u5f88\u591a\uff0c\u9810\u8a2d\u90fd\u9069\u7528 json-file\uff0c\u8a2d\u5b9a\u53ef\u5df2\u900f\u904e\u4fee\u6539/etc/docker/daemon.json \u4e26\u91cd\u555f\u9054\u6210\u3002"),(0,r.kt)("p",null,"\u9810\u8a2d\u662f\u5728\u540c\u4e00\u4efd\u6a94\u6848\uff0c\u7121\u9650\u5927\u5c0f\u5beb\u5165\uff0c\u900f\u904e\u4ee5\u4e0a\u65b9\u6cd5\uff0c\u53ef\u4ee5\u9650\u5b9a\u6a94\u6848\u5927\u5c0f\u8ddf\u53ef\u7522\u751f\u6a94\u6848\u6578\u91cf\uff0c\u7576 log \u5bb9\u91cf\u5230\u9054\u4e0a\u9650\u6642\uff0cDocker \u7a0b\u5e8f\u5c07\u505c\u6b62\u5beb\u5165\u8a72\u65e5\u8a8c\u6587\u4ef6\uff0c\u4e26\u958b\u59cb\u4f7f\u7528\u65b0\u540d\u7a31\u555f\u52d5\u65b0\u7684\u65e5\u8a8c\u6587\u4ef6\u3002\u9ed8\u8a8d\u60c5\u6cc1\u4e0b\uff0c\u65b0\u65e5\u8a8c\u6587\u4ef6\u5c07\u5177\u6709\u8207\u820a\u65e5\u8a8c\u6587\u4ef6\u76f8\u540c\u7684\u540d\u7a31\uff0c\u4f46\u6703\u5728\u672b\u5c3e\u6dfb\u52a0\u9023\u7e8c\u865f\uff08\u4f8b\u5982\uff0caccess.log.1\u3001access.log.2 \u7b49\uff09\u3002"),(0,r.kt)("p",null,"Docker \u4fdd\u7559\u7684\u65e5\u8a8c\u6587\u4ef6\u6578\u91cf\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"max-file"),"\u9078\u9805\u6c7a\u5b9a\u3002\u9ed8\u8a8d\u60c5\u6cc1\u4e0b\uff0cDocker \u5c07\u4fdd\u7559\u6700\u591a 1 \u500b\u65e5\u8a8c\u6587\u4ef6(\u8981\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"max-size"),"\u624d\u6703\u751f\u6548)\u3002\u7576\u9054\u5230\u6700\u5927\u65e5\u8a8c\u6587\u4ef6\u6578\u91cf\u6642\uff0cDocker \u5c07\u958b\u59cb\u4f7f\u7528\u65b0\u7684\u65e5\u8a8c\u6578\u64da\u8986\u84cb\u6700\u820a\u7684\u65e5\u8a8c\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\uff08ps:\u8cc7\u8a0a\u4ee5\u6b64",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/logging/json-file/"},"\u9023\u7d50"),"\u70ba\u6e96\uff0c\u8a2d\u5b9a\u53ef\u80fd\u6703\u6539\u8b8a\u7684\uff09"),(0,r.kt)("h2",{id:"what-should-do-when-you-find--or-var-are-full"},"what should do when you find / or /var are full"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u9810\u8a2d docker \u7684\u6771\u897f\u90fd\u653e\u5728/var/lib/docker \u5e95\u4e0b"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/var/lib/docker"',title:'"/var/lib/docker"'},"builder  buildkit  containers  image  network  overlay2  plugins  runtimes  swarm  tmp  trust  volumes\n")),(0,r.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u5728\u8a72\u8cc7\u6599\u593e\u5e95\u4e0b\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"du -sh ./*"),"\u78ba\u8a8d\u54ea\u500b\u5730\u65b9\u5403\u5f97\u7570\u5e38\u5147\uff0c\n\u4e26\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"docker system df"),"\u770b\u8cc7\u6599\u4f54\u7528\uff0c\u5982\u679c\u4e0d\u7528\u7684 image \u5f88\u591a\u53ef\u4ee5\u6e05\u9664"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"docker image prune --all")),(0,r.kt)("p",{parentName:"admonition"},"\u4ed6\u6703\u522a\u9664\u6240\u6709\u6c92\u6709\u88ab container \u4f7f\u7528\u7684 image\uff0c\u8b66\u793a\u5982\u4e0b\uff1a"),(0,r.kt)("p",{parentName:"admonition"},"WARNING! This will remove all images without at least one container associated to them.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u7576\u521d\u6c92\u6709\u505a\u4efb\u4f55\u9810\u9632\uff0c\u5c0e\u81f4/var \u771f\u7684\u7206\u4e86\uff0c\u53ef\u4ee5\u512a\u5148\u6aa2\u67e5\u4ee5\u4e0b\u5e7e\u9805")),(0,r.kt)("h3",{id:"\u6aa2\u67e5-docker-logs-\u662f\u5426\u4f54\u592a\u5147"},"\u6aa2\u67e5 docker logs \u662f\u5426\u4f54\u592a\u5147"),(0,r.kt)("p",null,"\u5176\u5be6\u5c31\u662f\u53bb/var/lib/docker/containers\uff0c\u57f7\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"du -sh ./* "),"\u770b\u54ea\u500b container \u4f54\u6700\u591a\u8cc7\u6e90\uff0c\u7136\u5f8c\u53bb\u770b\u88e1\u9762\u90a3\u96bb\u653e docker logs \u7684\u6a94\u540d\u70ba container-id-json.log \u7684\u6a94\u6848\u662f\u5426\u9577\u592a\u5927\uff0c\u78ba\u8a8d\u5f8c\u53ef\u4ee5\u780d\u6389\u3002"),(0,r.kt)("h3",{id:"\u6aa2\u67e5-named-volume-\u4e2d\u5b58\u653e\u8cc7\u8a0a"},"\u6aa2\u67e5 named volume \u4e2d\u5b58\u653e\u8cc7\u8a0a"),(0,r.kt)("p",null,"\u5176\u5be6\u5c31\u662f\u53bb/var/lib/docker/volumes \u5e95\u4e0b\uff0c\u770b\u6709\u6c92\u6709\u67d0\u500b volume \u4f54\u592a\u591a\u8cc7\u6e90\uff0c\u7136\u5f8c\u88e1\u9762\u653e\u7684\u6771\u897f\u53ef\u80fd\u4e0d\u91cd\u8981(\u4f8b\u5982 nginx log)"),(0,r.kt)("h3",{id:"\u6aa2\u67e5-image-\u8ddf\u6c92\u7528\u7684-container"},"\u6aa2\u67e5 image \u8ddf\u6c92\u7528\u7684 container"),(0,r.kt)("p",null,"image \u6307\u4ee4:\u522a\u9664\u6c92\u6709\u88ab\u6d3b\u52d5\u7684 container \u4f7f\u7528\u7684 image\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker image prune --all")),(0,r.kt)("p",null,"container \u6307\u4ee4\uff1a\u522a\u9664\u505c\u6b62\u7684 container\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker container prune")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/pruning/"},"Prune unused Docker objects"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/fishinhouse/article/details/105310948"},"\u9650\u5236 Docker \u65e5\u5fd7\u5927\u5c0f"))))}p.isMDXComponent=!0}}]);