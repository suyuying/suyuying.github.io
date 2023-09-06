"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),k=l,m=s["".concat(p,".").concat(k)]||s[k]||d[k]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},11194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const o={title:"k8s\u95b1\u8b80\u7b46\u8a18",description:"\u8b1b\u89e3Kubernetes\u5143\u4ef6\u7d44\u6210\u53ca\u529f\u7528,\u53e6\u5916\u5217\u51faKubernetes \u90e8\u7f72\u7a0b\u5f0f\u904e\u7a0b\u53capod\u4e4b\u9593\u5982\u4f55\u6e9d\u901a.",authors:"suyuying",tags:["k8s"]},a=void 0,i={permalink:"/blog/2023/08/09/K8S/k8s-basic",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/K8S/2023-08-09-k8s-basic.md",source:"@site/blog/K8S/2023-08-09-k8s-basic.md",title:"k8s\u95b1\u8b80\u7b46\u8a18",description:"\u8b1b\u89e3Kubernetes\u5143\u4ef6\u7d44\u6210\u53ca\u529f\u7528,\u53e6\u5916\u5217\u51faKubernetes \u90e8\u7f72\u7a0b\u5f0f\u904e\u7a0b\u53capod\u4e4b\u9593\u5982\u4f55\u6e9d\u901a.",date:"2023-08-09T00:00:00.000Z",formattedDate:"August 9, 2023",tags:[{label:"k8s",permalink:"/blog/tags/k-8-s"}],readingTime:9.69,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"When you\u2019re green, you grow. When you\u2019re ripe, you rot",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"k8s\u95b1\u8b80\u7b46\u8a18",description:"\u8b1b\u89e3Kubernetes\u5143\u4ef6\u7d44\u6210\u53ca\u529f\u7528,\u53e6\u5916\u5217\u51faKubernetes \u90e8\u7f72\u7a0b\u5f0f\u904e\u7a0b\u53capod\u4e4b\u9593\u5982\u4f55\u6e9d\u901a.",authors:"suyuying",tags:["k8s"]},prevItem:{title:"ELK KQL\u8a9e\u6cd5\u4ecb\u7d39",permalink:"/blog/2023/08/10/ELK/KQL-cheat-sheet"},nextItem:{title:"Delete log file than recreate log file, will log still write into it? Besides,compare with logrotate",permalink:"/blog/2023/08/09/linux-server/delete-log-file-than-recreate-log-file"}},p={authorsImageUrls:[void 0]},u=[{value:"control plane",id:"control-plane",level:2},{value:"kube-apiserver",id:"kube-apiserver",level:3},{value:"etcd",id:"etcd",level:3},{value:"kube-scheduler",id:"kube-scheduler",level:3},{value:"kube-controller-manager",id:"kube-controller-manager",level:3},{value:"cloud-controller-manager",id:"cloud-controller-manager",level:3},{value:"pod",id:"pod",level:2},{value:"worker node",id:"worker-node",level:2},{value:"kubelet",id:"kubelet",level:3},{value:"kube-proxy",id:"kube-proxy",level:3},{value:"Container Runtime",id:"container-runtime",level:3},{value:"\u90e8\u7f72\u670d\u52d9\u904e\u7a0b",id:"\u90e8\u7f72\u670d\u52d9\u904e\u7a0b",level:2},{value:"pod\u9593\u7684\u6e9d\u901a",id:"pod\u9593\u7684\u6e9d\u901a",level:2},{value:"service\u985e\u578b",id:"service\u985e\u578b",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...o}=e;return(0,l.kt)(s,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"why k8s?\nIt allows for easy scalability, high resilience, application portability, automation of many tasks, and standardization of the container platform"),(0,l.kt)("p",null,"\u5148\u770b\u5230\u4ee5\u4e0b\u9019\u5f35\u5716,\u9019\u662f\u5b98\u65b9\u63d0\u4f9b\u7684k8s\u7d44\u6210,\u4f60\u6703\u6ce8\u610f\u5230\u5e7e\u500b\u95dc\u9375\u5143\u4ef6:Kubernetes cluster,Control plan, Node.\u7c21\u8a00\u4e4b,kubernetes cluster\u7531\u591a\u500bworker node(\u786c\u9ad4\u8cc7\u6e90)\u53cacontrol plane\u7d44\u6210."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"k8s-strucuture ",src:r(38836).Z,width:"1252",height:"585"})),(0,l.kt)("p",null," Kubernetes\u57fa\u672c\u904b\u4f5c: worker node\u6703\u8a17\u7ba1pod(\u4ee5\u5bb9\u5668\u5316\u5efa\u7acb\u7684\u61c9\u7528\u7a0b\u5f0f),\u800ccontrol plane\u6703\u7ba1\u7406cluster\u5167\u7684worker node\u8ddfpod."),(0,l.kt)("p",null,"\u7d30\u90e8\u770b,\u9019\u5e7e\u500b\u95dc\u9375\u5143\u4ef6\u5e95\u4e0b\u4e5f\u662f\u7531\u591a\u500b\u5143\u4ef6\u7d44\u6210.\u4ee5\u4e0b\u7c21\u55ae\u4ecb\u7d39control plane,pod,woker node\u7684\u7d44\u6210."),(0,l.kt)("h2",{id:"control-plane"},"control plane"),(0,l.kt)("p",null,"\u63a7\u5236\u5e73\u9762\u5c0d\u96c6\u7fa4\u505a\u51fa\u5168\u5c40\u6c7a\u7b56,\u4e26\u6aa2\u6e2c\u53ca\u56de\u61c9\u96c6\u7fa4\u4e8b\u4ef6,\u4f8b\u5982:\u6aa2\u6e2c\u5230\u90e8\u7f72\u7684pod\u4e0d\u6eff\u8db3deployment\u61c9\u90e8\u7f72\u7684pod\u6578\u91cf\u6642,\u6703\u8d77\u65b0pod.\u7531kube-apiserver,etcd,kube-scheduler ,kube-controller-manager,cloud-controller-manager\u7d44\u6210\uff01"),(0,l.kt)("h3",{id:"kube-apiserver"},"kube-apiserver"),(0,l.kt)("p",null,"kube-apiserver\u662fAPI\u4f3a\u670d\u5668,\u70ba Kubernetes \u63a7\u5236\u5e73\u9762\u7684\u524d\u7aef,\u4e3b\u8981\u8ca0\u8cac\u516c\u958bk8s\u7684api.\u5f9e Command Line \u4e0b kubectl \u6307\u4ee4\u5c31\u6703\u628a\u6307\u4ee4\u9001\u5230\u9019\u88cf,\u540c\u6642\u4e5f\u662f\u4e0d\u540cnode\u4e4b\u9593\u6e9d\u901a\u7684\u8f49\u4ecb\u9ede."),(0,l.kt)("h3",{id:"etcd"},"etcd"),(0,l.kt)("p",null,"etcd\u662fkey value\u5b58\u5132\u5eab,\u7528\u4f86\u653ek8s\u7684\u96c6\u7fa4\u6578\u64da,\u9019\u908a\u8cc7\u6599\u5efa\u8b70\u8981\u6709\u5099\u4efd\u8a08\u756b"),(0,l.kt)("h3",{id:"kube-scheduler"},"kube-scheduler"),(0,l.kt)("p",null,"kube-scheduler\u5b83\u76e3\u8996\u65b0\u5275\u5efa\u7684\u672a\u5206\u914d\u7bc0\u9ede\u7684 Pod\uff0c\u4e26\u70ba\u5b83\u5011\u9078\u64c7\u4e00\u500b\u7bc0\u9ede\u4f86\u904b\u884c,\u9019\u500b\u9078\u64c7\u904e\u7a0b\u53ef\u4ee5\u8207\u8cc7\u6e90\u9700\u6c42\u3001\u786c\u4ef6/\u8edf\u4ef6/\u7b56\u7565\u7d04\u675f\u3001\u89aa\u548c\u6027\u548c\u53cd\u89aa\u548c\u6027\u898f\u7bc4\u3001\u6578\u64da\u672c\u5730\u6027\u3001\u5de5\u4f5c\u8ca0\u8f09\u4e4b\u9593\u7684\u5e72\u64fe\u4ee5\u53ca\u622a\u6b62\u671f\u9650\u7b49\u6709\u95dc\uff01"),(0,l.kt)("h3",{id:"kube-controller-manager"},"kube-controller-manager"),(0,l.kt)("p",null,"kube-controller-manager\u904b\u884c\u63a7\u5236\u5668\u9032\u7a0b,\u6bcf\u500b\u63a7\u5236\u5668\u662f\u7368\u7acbprocess,\u9019\u4e9b Process \u6703\u5728 Cluster \u8207\u9810\u671f\u72c0\u614b\uff08desire state\uff09\u4e0d\u7b26\u6642\u5617\u8a66\u66f4\u65b0\u73fe\u6709\u72c0\u614b\uff08current state\uff09.\u63a7\u5236\u5668\u6709\u8a31\u591a\u4e0d\u540c\u985e\u578b:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Node \u63a7\u5236\u5668\uff1a\u8ca0\u8cac\u5728\u7bc0\u9ede\u95dc\u9589\u6642\u901a\u77e5\u4e26\u97ff\u61c9\u3002"),(0,l.kt)("li",{parentName:"ol"},"Job \u63a7\u5236\u5668\uff1a\u76e3\u8996\u4ee3\u8868\u4e00\u6b21\u6027\u4efb\u52d9\u7684 Job \u5c0d\u8c61\uff0c\u7136\u5f8c\u5275\u5efa Pods \u4f86\u57f7\u884c\u9019\u4e9b\u4efb\u52d9\u76f4\u5230\u5b8c\u6210\u3002"),(0,l.kt)("li",{parentName:"ol"},"EndpointSlice \u63a7\u5236\u5668\uff1a\u586b\u5145 EndpointSlice \u5c0d\u8c61\uff08\u7528\u65bc\u63d0\u4f9b\u670d\u52d9\u548c Pods \u4e4b\u9593\u7684\u93c8\u63a5\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},"ServiceAccount \u63a7\u5236\u5668\uff1a\u70ba\u65b0\u7684\u547d\u540d\u7a7a\u9593\u5275\u5efa\u9ed8\u8a8d\u7684 ServiceAccount\u3002\n\u9664\u4ee5\u4e0a\u9084\u6709\u5f88\u591a\u5176\u4ed6\u985e\u578b\u7684\u63a7\u5236\u5668\uff01")),(0,l.kt)("h3",{id:"cloud-controller-manager"},"cloud-controller-manager"),(0,l.kt)("p",null,"cloud-controller-manager\u5167\u7f6e\u4e86\u7279\u5b9a\u65bc\u96f2\u7aef\u7684\u63a7\u5236\u908f,\u5982\u679c\u6709\u7528\u5230\u96f2\u7aef\u670d\u52d9\u624d\u6703\u7528\u5230\u5b83,cloud-controller-manager \u5141\u8a31\u5c07\u96c6\u7fa4\u8207\u96f2\u63d0\u4f9b\u5546\u7684 API \u9023\u63a5\u8d77\u4f86\uff0c\u4e26\u5c07\u8207\u8a72\u96f2\u5e73\u53f0\u4ea4\u4e92\u7684\u7d44\u4ef6\u5f9e\u50c5\u8207\u60a8\u7684\u96c6\u7fa4\u4ea4\u4e92\u7684\u7d44\u4ef6\u4e2d\u5206\u96e2\u51fa\u4f86\u3002"),(0,l.kt)("h2",{id:"pod"},"pod"),(0,l.kt)("p",null,"\u4e00\u500b Pod \u5c0d\u61c9\u5230\u4e00\u500b\u61c9\u7528\u670d\u52d9,\u4e00\u73ed\u60c5\u6cc1\u6700\u597d\u4e00\u500bpod\u4e00\u500bcontainer,\u800c\u6bcf\u500b Pod \u90fd\u6709\u4e00\u500b\u8eab\u5206\u8b49\uff0c\u4e5f\u5c31\u662f\u5c6c\u65bc\u9019\u500b Pod \u7684 yaml \u6a94.\u540cpod\u7684container\u5f7c\u6b64\u53ef\u4ee5\u900f\u904eport\u6e9d\u901a."),(0,l.kt)("h2",{id:"worker-node"},"worker node"),(0,l.kt)("p",null,"\u6bcf\u500b Node \u4e2d\u6709\u9019\u5e7e\u500b\u7d44\u4ef6kubelet\u3001kube-proxy\u3001Container runtime"),(0,l.kt)("h3",{id:"kubelet"},"kubelet"),(0,l.kt)("p",null,"\u6bcf\u500b\u5de5\u4f5c\u7bc0\u9ede\u4e0a\u904b\u884c\u7684 kubelet \u9996\u5148\u6703\u8a3b\u518a\u5230control plane,\u63a5\u8457\u5b83\u8ca0\u8cac\u8207control plane\u6e9d\u901a,\u7ba1\u7406pod\u72c0\u614b\u4e26\u78ba\u4fdd\u5bb9\u5668\u5728 Pod \u5167\u904b\u884c.\u4e3b\u8981\u900f\u904e\u5404\u7a2e\u6a5f\u5236\u63d0\u4f9b\u4e00\u7d44PodSpecs\u4e26\u78ba\u4fddPodSpecs \u4e2d\u63cf\u8ff0\u7684\u5bb9\u5668\u904b\u884c\u4e26\u4fdd\u6301\u5065\u5eb7\u3002"),(0,l.kt)("h3",{id:"kube-proxy"},"kube-proxy"),(0,l.kt)("p",null,"kube-proxy \u5728 Kubernetes \u96c6\u7fa4\u4e2d\u505a\u7db2\u8def\u7ba1\u7406\uff0c\u8ca0\u8cac\u7dad\u8b77\u7bc0\u9ede\u9593\u7684\u901a\u8a0a\u548c\u66f4\u65b0 iptables \u898f\u5247\uff0c\u4ee5\u78ba\u4fdd\u670d\u52d9\u548c Pod \u7684\u6b63\u78ba\u904b\u884c\u548c\u901a\u4fe1\u3002\u540c\u6642\uff0c\u5b83\u4e5f\u4fc3\u4f7f\u7bc0\u9ede\u9593\u7684\u8cc7\u8a0a\u540c\u6b65\uff0c\u4f7f\u5f97 Kubernetes \u4e2d\u7684\u5404\u500b\u7d44\u4ef6\u53ef\u4ee5\u6e96\u78ba\u5730\u7372\u53d6\u7bc0\u9ede\u4e0a\u6240\u6709 Pods \u7684\u72c0\u614b\u3002"),(0,l.kt)("h3",{id:"container-runtime"},"Container Runtime"),(0,l.kt)("p",null,"\u5bb9\u5668\u904b\u884c\u6642\u662f\u8ca0\u8cac\u904b\u884c\u5bb9\u5668\u7684\u8edf\u9ad4\u3002"),(0,l.kt)("h2",{id:"\u90e8\u7f72\u670d\u52d9\u904e\u7a0b"},"\u90e8\u7f72\u670d\u52d9\u904e\u7a0b"),(0,l.kt)("p",null,"k8s\u5982\u4f55\u90e8\u7f72\u670d\u52d9\uff1f"),(0,l.kt)("p",null,"\u7c21\u55ae\u904e\u7a0b: \u900f\u904e\u6307\u4ee4\u5efa\u7acbdeployment,control plane\u6703\u4f9d\u64dadeployment\u8a2d\u5b9a\u51fa\u9700\u6c42\u7684pod."),(0,l.kt)("p",null,"\u8f03\u8a73\u7d30\u904e\u7a0b\u65bc\u4ee5\u4e0b:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 kubectl \u547d\u4ee4\u5efa\u7acbdeployment\u8cc7\u6e90,\u904e\u7a0b\u6703\u5c07 YAML \u8cc7\u6e90\u6587\u4ef6\u8f49\u63db\u70ba JSON \u683c\u5f0f\uff0c\u7136\u5f8c\u5c07\u5176\u767c\u9001\u5230\u4f4d\u65bc\u63a7\u5236\u5e73\u9762\u5167\u7684 API Server\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"API Server \u6536\u5230\u8acb\u6c42\u5f8c\uff0c\u5c07\u90e8\u7f72\u7684\u8a73\u7d30\u4fe1\u606f\u6216\u5c0d\u8c61\u5b9a\u7fa9\u6301\u4e45\u5316\u5230etcd\u6578\u64da\u5eab\u4e2d\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7576 etcd \u5b58\u5132\u4e2d\u6dfb\u52a0\u4e86\u65b0\u7684 Deployment \u8cc7\u6e90\u5f8c\uff0cAPI Server \u6703\u5c07\u76f8\u95dc\u7684\u4e8b\u4ef6\u901a\u77e5controller manager\uff0ccontroller manager\u5275\u5efa\u8db3\u5920\u7684 Pod \u8cc7\u6e90\u4ee5\u5339\u914d Deployment \u4e2d\u7684\u526f\u672c\u6578\u91cf\u3002\u6b64\u6642\uff0c\u5728 etcd \u4e2d\u7684\u90e8\u7f72\u72c0\u614b\u70ba\u300cPending\u300d\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Scheduler\u6aa2\u6e2c\u5230\u300cPending\u300d\u72c0\u614b\u5f8c\uff0c\u6703\u6aa2\u67e5\u57fa\u790e\u8a2d\u65bd\u7684\u72c0\u614b\uff0c\u5c0d\u7bc0\u9ede\u9032\u884c\u7be9\u9078\u548c\u6392\u5e8f\uff0c\u4ee5\u6c7a\u5b9a\u5728\u54ea\u500b\u7bc0\u9ede\u4e0a\u5efa\u7acb Pod\u3002\u7136\u5f8c\uff0cScheduler\u6839\u64da\u5176\u696d\u52d9\u908f\u8f2f\u586b\u5145 Pod \u7684 Spec \u4e2d\u7684\u300cnodeName\u300d\u5b57\u6bb5\uff0c\u4e26\u5c07\u5df2\u8abf\u5ea6\u7684 Pod \u5c0d\u8c61\u4ee5\u300cScheduled\u300d\u72c0\u614b\u6301\u4e45\u5316\u5230 etcd \u4e2d.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e00\u65e6Pod\u88ab\u8abf\u5ea6\u5230Wokernode\u4e0a,kubelet \u6703\u8ca0\u8cac\u5275\u5efaPod\u4e2d\u5b9a\u7fa9\u7684\u5bb9\u5668\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Pod \u8abf\u5ea6\uff1a \u7576 kubelet \u5f9e API Server \u7372\u53d6\u5230\u65b0 Pod \u7684\u898f\u7bc4\u5f8c\uff0c\u5b83\u6703\u6aa2\u67e5\u8a72\u898f\u7bc4\uff0c\u7136\u5f8c\u4f7f\u7528container runtime\uff08\u5982 Docker\uff09\u5275\u5efa\u76f8\u61c9\u7684container\u3002kubelet \u6703\u76e3\u63a7\u5bb9\u5668\u7684\u904b\u884c\u72c0\u614b\uff0c\u4e26\u5728\u9700\u8981\u6642\u91cd\u65b0\u555f\u52d5\u5bb9\u5668\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5065\u5eb7\u6aa2\u67e5\uff1a kubelet \u6703\u57f7\u884c\u5c31\u7dd2\u63a2\u91dd\uff08readiness probe\uff09\u548c\u5b58\u6d3b\u63a2\u91dd\uff08liveness probe\uff09\uff0c\u4ee5\u78ba\u5b9a\u5bb9\u5668\u662f\u5426\u5c31\u7dd2\u4e26\u4fdd\u6301\u904b\u884c\u72c0\u614b\u3002\u5982\u679c\u63a2\u91dd\u6307\u793a\u5bb9\u5668\u4e0d\u5065\u5eb7\uff0ckubelet \u53ef\u80fd\u6703\u91cd\u65b0\u555f\u52d5\u8a72\u5bb9\u5668\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5831\u544a\u72c0\u614b\uff1a kubelet \u6703\u5b9a\u671f\u5411 API Server \u5831\u544a\u5b83\u6240\u7ba1\u7406\u7684 Pod \u7684\u72c0\u614b\u3002\u9019\u5305\u62ec\u8a72 Pod \u662f\u5426\u6b63\u5e38\u904b\u884c\u3001\u5c31\u7dd2\u72c0\u614b\u7b49\u4fe1\u606f\u3002API Server \u4f7f\u7528\u9019\u4e9b\u72c0\u614b\u4fe1\u606f\u4f86\u66f4\u65b0control plane\u7684\u8cc7\u6e90\u72c0\u614b,\u7121\u554f\u984cPod \u7684\u72c0\u614b\u8b8a\u70ba\u300cRunning\u300d,Deployment \u7684\u72c0\u614b\u8b8a\u70ba\u300cReady\u300d."))),(0,l.kt)("h2",{id:"pod\u9593\u7684\u6e9d\u901a"},"pod\u9593\u7684\u6e9d\u901a"),(0,l.kt)("p",null,"\u6bd4\u8f03\u5927\u578b\u7684\u7a0b\u5f0f\u6703\u6709\u5f88\u591a\u500bpod,\u4ed6\u5011\u4e4b\u9593\u8981\u5982\u4f55\u50b3\u905e\u8cc7\u8a0a\uff1f \u5728V\uff2d\u7528\u7684\u662f\u56fa\u5b9a\u7684ip\u8ddfport,\u800c\u5728k8s\u56e0\u70ba\u6703\u727d\u6d89\u5230\u81ea\u52d5\u64f4\u5c55,\u7528ip\u8ddfport\u53bb\u6e9d\u901a\u986f\u7136\u6703\u9047\u5230\u627e\u4e0d\u5230ip\u8ddfport\u7684\u554f\u984c. \u6240\u4ee5k8s\u767c\u5c55\u4e86\u62bd\u8c61\u5c64service\u4f86\u62bd\u8c61\u5316\u9019\u500b\u904e\u7a0b,\u4e26\u900f\u904ekube-proxy\u505a\u5be6\u969b\u7684\u6d41\u91cf\u8f49\u767c."),(0,l.kt)("h3",{id:"service\u985e\u578b"},"service\u985e\u578b"),(0,l.kt)("p",null,"\u670d\u52d9\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u985e\u578b\uff0c\u5982 ClusterIP\u3001NodePort\u3001LoadBalancer \u548c ExternalName\u3002\u9019\u4e9b\u670d\u52d9\u985e\u578b\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u65b9\u5f0f\u4f86\u5be6\u73fe Pod \u9593\u548c\u96c6\u7fa4\u5167\u5916\u7684\u901a\u8a0a\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ClusterIP\uff1a \u9ed8\u8a8d\u7684\u670d\u52d9\u985e\u578b\uff0c\u5c07 Pod \u90e8\u7f72\u5230\u96c6\u7fa4\u5167\u90e8\uff0c\u4e26\u4f7f\u7528\u96c6\u7fa4\u5167\u90e8\u7684 IP \u5730\u5740\u9032\u884c\u901a\u8a0a\u3002\u9019\u5c0d\u65bc\u96c6\u7fa4\u5167\u90e8\u7684 Pod \u4e4b\u9593\u7684\u901a\u8a0a\u975e\u5e38\u6709\u7528\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"NodePort\uff1a \u5c07\u4e00\u500b\u670d\u52d9\u516c\u958b\u5230\u96c6\u7fa4\u7bc0\u9ede\u7684\u67d0\u500b\u7aef\u53e3\u4e0a\uff0c\u4e26\u4f7f\u7528\u8a72\u7bc0\u9ede\u7684 IP \u548c\u8a72\u7aef\u53e3\u9032\u884c\u8a2a\u554f\u3002Kubernetes \u6703\u5728\u6bcf\u500b\u7bc0\u9ede\u4e0a\u6253\u958b\u4e00\u500b\u9ad8\u96a8\u6a5f\u7aef\u53e3\uff08\u901a\u5e38\u5728\u7bc4\u570d 30000-32767\uff09,\u4e26\u5c07\u9019\u500b\u7aef\u53e3\u6620\u5c04\u5230\u4f60\u6307\u5b9a\u7684\u670d\u52d9\u7684\u76ee\u6a19\u7aef\u53e3,\n\u7576\u6709\u591a\u500b\u670d\u52d9\u4f7f\u7528 NodePort \u4e14\u6307\u5b9a\u76f8\u540c\u7684\u9ad8\u96a8\u6a5f\u7aef\u53e3\u6642\u3002\u9019\u53ef\u80fd\u6703\u5c0e\u81f4\u4e00\u4e9b\u670d\u52d9\u885d\u7a81\uff0c\u6216\u8005\u4e0d\u6b63\u78ba\u5730\u8def\u7531\u5230\u5176\u4ed6\u670d\u52d9\u4e0a\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"LoadBalancer\uff1a \u5728\u652f\u63f4\u7684\u96f2\u63d0\u4f9b\u5546\u4e0a\uff0c\u53ef\u4ee5\u5275\u5efa\u5916\u90e8\u8ca0\u8f09\u5747\u8861\u5668\uff0c\u4e26\u5c07\u5176\u914d\u7f6e\u5230\u670d\u52d9\u4e0a\u3002\u9019\u4f7f\u5f97\u5916\u90e8\u6d41\u91cf\u53ef\u4ee5\u901a\u904e\u8ca0\u8f09\u5747\u8861\u5668\u8f49\u767c\u5230\u670d\u52d9\u5167\u7684 Pod\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ingress\uff1a Ingress \u662f\u4e00\u500b\u63a7\u5236\u5668\uff0c\u7528\u65bc\u7ba1\u7406\u5916\u90e8\u5c0d\u96c6\u7fa4\u4e2d\u670d\u52d9\u7684\u8a2a\u554f\u3002\u901a\u904e Ingress\uff0c\u4f60\u53ef\u4ee5\u8a2d\u5b9a\u4e0d\u540c\u7684\u8def\u7531\u548c\u898f\u5247\uff0c\u4e26\u5c07\u6d41\u91cf\u5c0e\u5411\u5230\u4e0d\u540c\u7684 Service \u6216 Pod\u3002Ingress \u652f\u63f4 SSL/TLS \u52a0\u5bc6\u3001\u4e3b\u6a5f\u540d\u548c\u8def\u5f91\u7684\u8def\u7531\uff0c\u662f\u4e00\u500b\u66f4\u9ad8\u7d1a\u7684\u65b9\u5f0f\u4f86\u7ba1\u7406\u5916\u90e8\u8a2a\u554f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ExternalName\uff1a \u901a\u904e CNAME \u8a18\u9304\u5c07\u670d\u52d9\u540d\u7a31\u6620\u5c04\u5230\u5916\u90e8\u7684 DNS \u540d\u7a31\u3002\u9019\u5c0d\u65bc\u9700\u8981\u5c07\u5167\u90e8\u670d\u52d9\u8207\u5916\u90e8\u670d\u52d9\u95dc\u806f\u8d77\u4f86\u7684\u5834\u666f\u5f88\u6709\u7528\u3002"))),(0,l.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,l.kt)("p",null,"Kubernetes \u90e8\u7f72\u7a0b\u5f0f\u9700\u8981\u900f\u904e Deployment \u5275\u5efa Pod \u4e26\u7ba1\u7406\u8207\u66f4\u65b0\uff0c\u800c\u5404\u500b Pod \u4e4b\u9593\u7684\u6e9d\u901a\u901a\u5e38\u900f\u904e Service \u63d0\u4f9b\u7a69\u5b9a\u7684 DNS \u540d\u7a31\u548c IP \u5730\u5740\uff0c\u8b93 Pod \u9593\u53ef\u4ee5\u4f7f\u7528\u6a19\u7c64\u9032\u884c\u901a\u8a0a\uff0c\u5f9e\u800c\u5be6\u73fe\u5f48\u6027\u3001\u53ef\u9760\u7684\u901a\u8a0a\u6a5f\u5236\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u53c3\u8003\u8cc7\u6599"),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://belowthemalt.com/2022/04/08/kubernetes-cluster-process-flow-of-a-pod-creation/"},"Kubernetes Cluster & Process Flow of a POD creation")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/components/"},"Kubernetes Components")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://cwhu.medium.com/kubernetes-basic-concept-tutorial-e033e3504ec0"},"Kubernetes \u57fa\u790e\u6559\u5b78\uff08\u4e00\uff09\u539f\u7406\u4ecb\u7d39")))))}d.isMDXComponent=!0},38836:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/k8s-strucuture-1-1d5885076e3aee68e4a8aed4b9df138a.png"}}]);