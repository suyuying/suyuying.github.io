"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[5371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=n(67294),o=n(3905);const i={title:"Azure cloud container service Introduction and demo",description:"\u4ecb\u7d39azure\u96f2\u7aefcontainer\u8cc7\u6e90\u6642\uff0c\u4e26\u5206\u6790\u5982\u4f55\u9078\u64c7\u670d\u52d9\uff0c\u6700\u5f8c\u63d0\u4f9b\u81ea\u5df1\u4f7f\u7528\u4e0a\u9047\u5230\u7684\u554f\u984c\u53ca\u89e3\u6cd5",authors:"suyuying",tags:["cloud","Azure"]},u=void 0,l={permalink:"/blog/2023/03/06/Azure/azure-cloud-container",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Azure/2023-03-06-azure-cloud-container.md",source:"@site/blog/Azure/2023-03-06-azure-cloud-container.md",title:"Azure cloud container service Introduction and demo",description:"\u4ecb\u7d39azure\u96f2\u7aefcontainer\u8cc7\u6e90\u6642\uff0c\u4e26\u5206\u6790\u5982\u4f55\u9078\u64c7\u670d\u52d9\uff0c\u6700\u5f8c\u63d0\u4f9b\u81ea\u5df1\u4f7f\u7528\u4e0a\u9047\u5230\u7684\u554f\u984c\u53ca\u89e3\u6cd5",date:"2023-03-06T00:00:00.000Z",formattedDate:"March 6, 2023",tags:[{label:"cloud",permalink:"/blog/tags/cloud"},{label:"Azure",permalink:"/blog/tags/azure"}],readingTime:5.715,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Azure cloud container service Introduction and demo",description:"\u4ecb\u7d39azure\u96f2\u7aefcontainer\u8cc7\u6e90\u6642\uff0c\u4e26\u5206\u6790\u5982\u4f55\u9078\u64c7\u670d\u52d9\uff0c\u6700\u5f8c\u63d0\u4f9b\u81ea\u5df1\u4f7f\u7528\u4e0a\u9047\u5230\u7684\u554f\u984c\u53ca\u89e3\u6cd5",authors:"suyuying",tags:["cloud","Azure"]},prevItem:{title:"DNS Poisoning vs Domain Hijacking,Brief summary",permalink:"/blog/2023/03/07/linux-server/dns-pollution-hijack"},nextItem:{title:"gitcus comment system add to docusaurus but meet giscus.app refused to connect.",permalink:"/blog/2023/03/03/Docusaurus/gitcus-comment-in-docusaurus"}},c={authorsImageUrls:[void 0]},s=[{value:"Basic demand",id:"basic-demand",level:2},{value:"Azure container service",id:"azure-container-service",level:2},{value:"Azure Kubernetes Service(AKS)",id:"azure-kubernetes-serviceaks",level:3},{value:"K8s \u5143\u4ef6\u8aaa\u660e",id:"k8s-\u5143\u4ef6\u8aaa\u660e",level:4},{value:"Azure Container Instances(ACI)",id:"azure-container-instancesaci",level:3},{value:"Azure Container Apps",id:"azure-container-apps",level:3},{value:"MyChoice",id:"mychoice",level:3},{value:"Deployment",id:"deployment",level:2},{value:"\u6559\u5b78\u7db2\u7ad9",id:"\u6559\u5b78\u7db2\u7ad9",level:3},{value:"\u9047\u5230\u7684\u554f\u984c",id:"\u9047\u5230\u7684\u554f\u984c",level:3},{value:"ACR \u63db git hub container",id:"acr-\u63db-git-hub-container",level:3}],p={toc:s},d="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u63d0\u4f9b\u7684\u8cc7\u8a0a\u6709\u932f\uff0c\u8acb\u7528 comment \u7cfb\u7d71\u544a\u77e5\uff5e")),(0,o.kt)("h2",{id:"basic-demand"},"Basic demand"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u9700\u6c42\uff1a 1.\u514d\u8cbb\u7684 server \u8ddf db\uff0c\u55ae\u7d14\u639b\u6d41\u91cf\u5f88\u5c0f\uff0c\u6c92\u6709\u904b\u7b97\u5bc6\u96c6\u8ddf\u5403\u8a18\u61b6\u9ad4\u7684\u7a0b\u5f0f\u3002 2.\u4f7f\u7528 CICD \u914d\u5408 container \u90e8\u7f72 \u7c21\u5316\u5e03\u7248\u6d41\u7a0b")),(0,o.kt)("p",null,"server \u90e8\u5206\u514d\u8cbb\u6eff\u591a\u7684\uff0c\u4f46\u90fd 12 \u500b\u6708\u8a66\u7528\u5c45\u591a\uff0c\u6700\u5f8c\u5c31\u5148\u6311\u4e86 azure\uff0c\u4e4b\u5f8c\u6703\u88dc\u4e0a gcp \u3001 AWS\u3002"),(0,o.kt)("p",null,"ps: ",(0,o.kt)("a",{parentName:"p",href:"https://render.com/"},"render")," \u5f8c\u4f86\u540c\u4e8b\u63a8\u85a6\uff0c\u9019\u500b\u662f\u514d\u8cbb\u7684\uff0c\u4e4b\u5f8c\u88dc CICD \u90e8\u7f72\u5230\u9019\u88e1\u7684\u65b9\u6cd5\uff01"),(0,o.kt)("p",null,"db \u57fa\u672c\u4e0a\u5c31\u6c92\u6709\u4e86\uff0c\u514d\u8cbb\u7684\u6709 heroku clear db \u4e0d\u904e\u4ed6\u53ea\u6709 5MB \u53ef\u4ee5\u7528...... \u6240\u4ee5\u76ee\u524d\u9084\u662f\u4e56\u4e56\u7528 squlite \u5427"),(0,o.kt)("p",null,"\u8cc7\u6599\u6536\u96c6:"),(0,o.kt)("p",null,"1.\u4e09\u5bb6\u77e5\u540d\u7684\u96f2\u670d\u52d9\u5ee0\u5546\u90fd\u6709\u63d0\u4f9b\u514d\u8cbb\u984d\u5ea6\uff0c\u9019\u908a\u63d0\u4f9b azure \u65b9\u9762\u8cc7\u8a0a\n",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree"},"https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree")),(0,o.kt)("p",null,"2.\u56e0\u70ba\u76ee\u7684\u53ea\u662f\u8981\u55ae\u7368\u8981\u505a api server\uff0c\u6240\u4ee5\u5728 web app, VM,container-based app \u4e4b\u9593\u505a\u9078\u64c7\u3002\n\u56e0\u70ba\u7121\u5176\u4ed6\u7528\u9014\uff0c\u6240\u4ee5\u4e0d\u8003\u616e VM\uff0c\u800c\u53c8\u8981\u7528\u5230 container \u6240\u4ee5\u6700\u5f8c\u6311 Deploy and run a container-based app \u88e1\u9762\n\u63d0\u4f9b\u7684\u4e09\u7a2e\u670d\u52d9 Azure Kubernetes Service(AKS)\u3001Azure Container Instances(ACI)\u3001Azure Container Apps\n\u518d\u505a\u9078\u64c7\u3002"),(0,o.kt)(a.Fragment,null,(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{src:n(12424).Z,alt:"azure-quick-start.png"}))),(0,o.kt)("p",null,"Azure \u5b98\u7db2\u4e5f\u6709\u63d0\u4f9b\u4e00\u500b",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree"},"\u5224\u65b7\u6a39")),(0,o.kt)(a.Fragment,null,(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{src:n(90987).Z,alt:"azure-quick-start.png"}))),(0,o.kt)("h2",{id:"azure-container-service"},"Azure container service"),(0,o.kt)("p",null,"\u57fa\u672c\u4e0a Azure \u96f2\u670d\u52d9\uff0c\u8ddf container \u6709\u95dc\u7684\u5c31\u662f Azure Container Instances,Azure Kubernetes Service,\nAzure Container Apps"),(0,o.kt)("h3",{id:"azure-kubernetes-serviceaks"},"Azure Kubernetes Service(AKS)"),(0,o.kt)("p",null,"AKS \u57fa\u672c\u4e0a\u5c31\u662f\u8ddf azure \u79df\u591a\u53f0 VM(\u770b\u4f60\u7684 node \u6a39\uff09\uff0c\u7136\u5f8c\u4f7f\u7528 mastet node \u7ba1\u7406 node cluster\uff0c\u505a\u5230\u63d0\u9ad8 HA\uff0c\u4e5f\u9054\u5230\u63d0\u9ad8\u6a5f\u5668\u6548\u80fd\u4f7f\u7528\u7387"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u4ee5\u5c0f\u578b\u7684\u5f8c\u7aef\u7a0b\u5f0f\u70ba\u4f8b\uff0c\u6574\u5957\u9700\u8981 mysql,redis,api \u670d\u52d9\uff0c\u5f8c\u53f0\u7d71\u8a08\u670d\u52d9 \u70ba\u80cc\u666f")),(0,o.kt)("h4",{id:"k8s-\u5143\u4ef6\u8aaa\u660e"},"K8s \u5143\u4ef6\u8aaa\u660e"),(0,o.kt)("p",null,"Container\u3001Pod\u3001Node\u3002"),(0,o.kt)("p",null,"what is container?\n\u901a\u5e38\u4e00\u500b\u529f\u80fd\u4e00\u500b container\uff08\u7576\u7136\u4f60\u8981\u5168\u786c\u585e\u540c\u500b\u4e5f\u53ef\u4ee5\uff0c\u4e0d\u904e\u4e0d\u5efa\u8b70\uff09\uff0c\u5982\u679c\u4f60\u4e0d\u7528 cloud db\uff0c\u90a3\u9ebc\u4ee5\u4e0a\u9762 info \u7684\u80cc\u666f\u60c5\u6cc1\uff0c\u6703\u6709 4 \u500b container\u3002"),(0,o.kt)("p",null,"What is pod in Kubernetes?\n\u662f k8s \u6700\u5c0f\u57f7\u884c\u55ae\u4f4d\uff0c\u8209\u4f8b\u4f86\u8aaa\uff0c\u4f60\u7684\u6574\u5957\u670d\u52d9\u5171\u56db\u500b container \u4e0b\u4f86\u7b97\u662f\u4e00\u500b pod\u3002"),(0,o.kt)("p",null,"what is node in Kubernetes? \u4e00\u500b node \u4ee3\u8868\u4e00\u53f0 VM\n\u7531 Worker Node \u8ddf Control Plane \u7d44\u6210\u3002\nWorker Node(\u90e8\u7f72 pod \u7684 vm\uff0c\u5167\u90e8\u9084\u53ef\u7d30\u5206\u70ba kubelet\u3001kube-proxy \u53ca Container Runtime 3 \u500b\u5143\u4ef6\u3002)\nControl Plane \u8ca0\u8cac\u5404\u500b Worker Node \u7684\u7ba1\u7406"),(0,o.kt)("p",null,"what is Kubernetes cluster?\n\u56e0\u70ba\u9ad8\u53ef\u7528\u6027\u8ddf\u64f4\u5c55\u6703\u6709\u591a\u500b node\uff0c\u6240\u4ee5\u5c31\u6709\u4e86 cluster\u3002\n\u7531 control panels \u8ddf nodes \u7d44\u6210\u3002"),(0,o.kt)("p",null,"Azure k8s?\n\u76f4\u63a5\u5e6b\u4f60\u505a\u597d\u514d\u8cbb\u7684\u63a7\u5236\u5e73\u9762\u4e86\u3002\u4f46\u662f\u8981\u4ed8 VM \u7684\u9322\uff0c\u900f\u904e control plane \u7ba1\u7406 k8s cluster\u3002\ncontrol plane \u4e0d\u7528\u4ed8\u9322\uff0c\u4f46\u6703\u5403 node \u7684\u8cc7\u6e90\u3002"),(0,o.kt)("h3",{id:"azure-container-instancesaci"},"Azure Container Instances(ACI)"),(0,o.kt)("p",null,"ACI \u5c31\u662f\u500b\u96f2\u7aef container\uff0c\u62ff\u4f86\u57f7\u884c\u722c\u87f2\u4e4b\u985e\u7684\u7a0b\u5f0f\uff0c\u4ed6\u4e0d\u652f\u63f4\u64f4\u5c55\uff0c\u9644\u8f09\u5e73\u8861\u53ca\u6191\u8b49\u9a57\u8b49\u3002\n\u57fa\u672c\u4e0a\u5275\u5b8c\uff0cAzure \u6703\u7d66\u4f60\u4e00\u7d44\u7684\u9023\u5165 ip"),(0,o.kt)("h3",{id:"azure-container-apps"},"Azure Container Apps"),(0,o.kt)("p",null,"\u76f8\u8f03\u65bc ACI\uff0c\u63d0\u4f9b\u4e86 AutoScale,Https \u5165\u53e3\uff0c\u6191\u8b49\u4ee3\u7ba1\uff0c\u591a container \u5167\u90e8\u7db2\u8def\u6e9d\u901a\u7b49\uff0c\n",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/container-apps/overview"},"\u8a73\u7d30\u529f\u7528\u9023\u7d50")),(0,o.kt)("h3",{id:"mychoice"},"MyChoice"),(0,o.kt)("p",null,"\u57fa\u672c\u4e0a\uff0c\u53ea\u6709\u4e00\u500b\u4e0d\u9700\u8981\u6548\u80fd\u7684\u670d\u52d9\uff0cAKS \u53ef\u4ee5\u76f4\u63a5\u780d\u6389\u3002\u56e0\u70ba\u662f api server\uff0c\u4e14\u50b3\u7684\u8cc7\u8a0a\u6709\u4e9b\u9700\u8981\u4fdd\u5bc6\u8cc7\u8a0a\uff0c\u6240\u4ee5\u9078\u7528\nAzure Container Apps\u3002"),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("h3",{id:"\u6559\u5b78\u7db2\u7ad9"},"\u6559\u5b78\u7db2\u7ad9"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/app-service/quickstart-custom-container?pivots=container-linux-vscode&WT.mc_id=UI-AQC&tabs=dotnet"},"\u5b98\u7db2\u6559\u5b78")),(0,o.kt)("p",null,"\u57f7\u884c\u7684\u904e\u7a0b\u90fd\u662f\u4f9d\u64da\u6559\u5b78\uff0c\u4f46\u4e4b\u5f8c\u63db\u81ea\u5df1\u7684 Dockerfile \u6709\u9047\u5230\u72c0\u6cc1\uff0c\u6240\u4ee5\u8a18\u9304\u4e00\u4e0b\u9047\u5230\u7684\u554f\u984c\u3002"),(0,o.kt)("h3",{id:"\u9047\u5230\u7684\u554f\u984c"},"\u9047\u5230\u7684\u554f\u984c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Container xxx didn't respond to HTTP pings on port: 8000, failing site start. See container logs for debugging.")),(0,o.kt)("p",null,"\u7db2\u4e0a\u67e5\u53ef\u80fd\u539f\u56e0\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use the EXPOSE instruction in your Dockerfile to expose port 3000.(not useful, azure will scan internally)"),(0,o.kt)("li",{parentName:"ol"},'Use the WEBSITES_PORT app setting with a value of "3000" to expose that port.')),(0,o.kt)("p",null,"\u4ee5\u4e0a\u90fd\u4e0d\u884c\uff31\uff21\uff31"),(0,o.kt)("p",null,"\u6700\u5f8c\u767c\u73fe\u662f\u6a5f\u5668\u7684 CPU \u67b6\u69cb\u554f\u984c\uff0c\u56e0\u70ba\u662f m1 \u5e95\u4e0b\u5beb\u7684 code\uff0cdocker \u6703\u7528 arm build \u7248\uff0c\u4f46\u4e00 \ud83e\udd5a \u90e8\u7f72\u74b0\u5883\u662f azure \u7684 x86\uff0c\u5e95\u5c64\u4e0d\u540c\u670d\u52d9\u8d77\u4e0d\u4f86"),(0,o.kt)("p",null,"\u89e3\u6c7a\u65b9\u6cd5\uff1a\n\u5c07\u539f\u672c Dockerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'FROM  python:3.11\nWORKDIR /code\nCOPY ./requirment.txt /code/requirements.txt\nRUN pip install --no-cache-dir --upgrade -r /code/requirements.txt\nRUN uname -a > /os.txt\nCOPY ./sql_app /code/app\nENV PORT 80\nEXPOSE 80\n\n\nENTRYPOINT ["uvicorn", "app.maingog:app", "--host", "0.0.0.0", "--port", "80"]\n')),(0,o.kt)("p",null,"\u4fee\u6539\u6210"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'FROM --platform=$TARGETPLATFORM  python:3.11\nWORKDIR /code\nCOPY ./requirment.txt /code/requirements.txt\nRUN pip install --no-cache-dir --upgrade -r /code/requirements.txt\nRUN uname -a > /os.txt\nCOPY ./sql_app /code/app\nENV PORT 80\nEXPOSE 80\n\n\nENTRYPOINT ["uvicorn", "app.maingog:app", "--host", "0.0.0.0", "--port", "80"]\n\n')),(0,o.kt)("p",null,"\u7136\u5f8c\u518d\u7528\u4ee5\u4e0b\u6307\u4ee4\u63a8\u5230 azure cotainer registry(\u8acb\u63db\u6210\u81ea\u5df1 acr \u7684\u6a23\u5b50)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker buildx build . --platform linux/arm64,linux/amd64 -t fastapiserver.azurecr.io/fordserver/v1.9 --push\n")),(0,o.kt)("p",null,"\u4e4b\u5f8c\u4f7f\u7528\u9019\u500b image \u6642\uff0cdocker \u5167\u5efa\u5c31\u6703\u5e6b\u4f60\u5224\u65b7\u662f\u54ea\u500b\u7cfb\u7d71\uff0c\u4e26\u8d77\u670d\u52d9\uff01"),(0,o.kt)("p",null,"\u81f3\u65bc\uff0cbuildx \u8ddf--use \u8ddf context \u9019\u5e7e\u500b docker \u6307\u4ee4\u4e5f\u662f\u7b2c\u4e00\u6b21\u9047\u5230\uff0c\u5b8c\u5168\u4e0d\u719f\uff0c\u6240\u4ee5\u4e4b\u5f8c\u6703\u518d\u88dc\u4e0a"),(0,o.kt)("h3",{id:"acr-\u63db-git-hub-container"},"ACR \u63db git hub container"),(0,o.kt)("p",null,"\u56e0\u70ba\u7528 ACR \u8981\u9322\uff0c\u7136\u5f8c free plan \u4e5f\u4e0d\u7d66\u958b private registry\uff0c\u6240\u4ee5\u53ef\u4ee5\u7528 github or gitlab\uff0c\n\u56e0\u70ba\u6c92\u7279\u5225\u60f3\u7528 private\uff0c\u6240\u4ee5\u5c31\u7528 git hub \u5427\u3002"))}m.isMDXComponent=!0},12424:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/azure-quick-start-e82cb82b227ff159f96c5f11c0d3e660.png"},90987:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/compute-choices-c86c9b2e0c2dd50fc83964f23d8a3901.png"}}]);