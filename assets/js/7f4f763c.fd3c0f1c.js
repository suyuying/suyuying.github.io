"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[2289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||l;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},11491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const l={title:"CI/CD pipeline for developing and delivering containerized apps",description:"\u5b98\u65b9\u8cc7\u6e90\u5b78\u7fd2,\u4ee5google\u63d0\u4f9b\u7684\u67b6\u69cb\u5efa\u7acb\u4e00\u5957cicd\u7cfb\u7d71.",authors:"suyuying",tags:["k8s"]},a=void 0,i={permalink:"/blog/2023/08/14/K8S/gke-cicd-pipline-for-developing-containerized-app",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/K8S/2023-08-14-gke-cicd-pipline-for-developing-containerized-app.md",source:"@site/blog/K8S/2023-08-14-gke-cicd-pipline-for-developing-containerized-app.md",title:"CI/CD pipeline for developing and delivering containerized apps",description:"\u5b98\u65b9\u8cc7\u6e90\u5b78\u7fd2,\u4ee5google\u63d0\u4f9b\u7684\u67b6\u69cb\u5efa\u7acb\u4e00\u5957cicd\u7cfb\u7d71.",date:"2023-08-14T00:00:00.000Z",formattedDate:"August 14, 2023",tags:[{label:"k8s",permalink:"/blog/tags/k-8-s"}],readingTime:1.415,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"When you\u2019re green, you grow. When you\u2019re ripe, you rot",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"CI/CD pipeline for developing and delivering containerized apps",description:"\u5b98\u65b9\u8cc7\u6e90\u5b78\u7fd2,\u4ee5google\u63d0\u4f9b\u7684\u67b6\u69cb\u5efa\u7acb\u4e00\u5957cicd\u7cfb\u7d71.",authors:"suyuying",tags:["k8s"]},prevItem:{title:"Use systemctl to manage service properly and safely",permalink:"/blog/2023/08/16/linux-server/systemctl-manage-service"},nextItem:{title:"Advanced module of ansible",permalink:"/blog/2023/08/14/IaC/ansible/ansible-advanced-module"}},c={authorsImageUrls:[void 0]},p=[{value:"\u4f7f\u7528cloud deploy\u57f7\u884c\u74b0\u5883",id:"\u4f7f\u7528cloud-deploy\u57f7\u884c\u74b0\u5883",level:2}],u={toc:p},d="wrapper";function s(e){let{components:t,...l}=e;return(0,o.kt)(d,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"app-development-and-delivery-with-cloud-code-gcb-cd-and-gke.svg",src:n(87323).Z,width:"984",height:"571"})),(0,o.kt)("p",null,"Cloud Build\u5728\u9019\u500blab\u6703\u505a\u5230"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use Build trigger to monitor changes to the source repo."),(0,o.kt)("li",{parentName:"ul"},"When a change is committed into main branch, Cloud build trigger following:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Build artifacts in cloud storage bucket"),(0,o.kt)("li",{parentName:"ul"},"Run test on the container"),(0,o.kt)("li",{parentName:"ul"},"Place the app image in Artifact Registry"),(0,o.kt)("li",{parentName:"ul"},"Call Cloud deploy to deploy the container to the staging environment."))),(0,o.kt)("li",{parentName:"ul"},"If all the build and tests are succesful, you can use Cloud Deploy to promote the container from staging to production.")),(0,o.kt)("p",null,"Cloud deploy\u6703\u8a3b\u518a\u4e26\u7ba1\u7406pipline\u8ddftargets(\u6307\u7684\u662fstaging and production cluster)."),(0,o.kt)("p",null,"\u9019\u908a\u6574\u7406\u9019\u500blab\u7684\u5efa\u69cb\u904e\u7a0b,\u8a73\u7d30\u6b65\u9a5f\u53ef\u4ee5\u4f9d\u7167",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/architecture/app-development-and-delivery-with-cloud-code-gcb-cd-and-gke/deployment"},"\u5b98\u7db2\u8cc7\u6e90"),"\u505a\u5b78\u7fd2."),(0,o.kt)("p",null,"\u5b98\u7db2\u5927\u81f4\u6d41\u7a0b:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a\u9810\u8a2d\u5c08\u6848.\u6703\u7528\u5230\u7684\u6307\u4ee4",(0,o.kt)("inlineCode",{parentName:"li"},"gcloud config set project PROJECT_ID"),",\u53ef\u4ee5\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"gcloud config get-value project"),"\u6aa2\u67e5\u76ee\u524d\u9810\u8a2d\u5c08\u6848,\u67e5\u8a62\u6709\u54ea\u4e9b\u5c08\u6848\u53ef\u4ee5\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"gcloud projects list")),(0,o.kt)("li",{parentName:"ol"})),(0,o.kt)("p",null,"\u5f8c\u7e8c\u7684lab\u6703\u62ff\u6211\u81ea\u5df1\u5beb\u7684\u7a0b\u5f0f,\u5b83\u539f\u672c\u662f\u90e8\u7f72\u5728docker\u4e0a,\u6703\u628a\u5b83\u6539\u6210gke\u7248\u672c,config\u7684\u653e\u5165\u6703\u8a66\u8a66\u770bconfig map\u8ddf\nheadless service\u7b49\u6771\u897f\uff01"),(0,o.kt)("h2",{id:"\u4f7f\u7528cloud-deploy\u57f7\u884c\u74b0\u5883"},"\u4f7f\u7528cloud deploy\u57f7\u884c\u74b0\u5883"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"cloud build worker pool \u6703\u8b93deploy\u5728\u8a72\u6c60\u4e2d\u57f7\u884c\u90e8\u7f72\u53ca\u9a57\u8b49"),(0,o.kt)("li",{parentName:"ol"},"cloud deploy\u9700\u8abf\u7528\u57f7\u884c\u64cd\u4f5c\u7684\u5e33\u865f"),(0,o.kt)("li",{parentName:"ol"},"cloud storage \u7684\u6e05\u55ae\u5b58\u653e\u4f4d\u7f6e")))}s.isMDXComponent=!0},87323:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/app-development-and-delivery-with-cloud-code-gcb-cd-and-gke-77863ea3b9407f2c7d987acb732e56da.svg"}}]);