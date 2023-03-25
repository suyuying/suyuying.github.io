"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[3344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(r),u=o,s=p["".concat(l,".").concat(u)]||p[u]||k[u]||c;return r?n.createElement(s,a(a({ref:t},d),{},{components:r})):n.createElement(s,a({ref:t},d))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var m=2;m<c;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4839:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>k,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var n=r(7462),o=(r(7294),r(3905));const c={title:"docker create context and docker context command",description:"docker \u652f\u63f4\u591a\u500b\u4e0d\u540cremote docker deamon\u7ba1\u7406,`docker create context` \u662f\u7528\u4f86\u5efa\u7acb\u4e00\u500b\u65b0\u7684 context\uff0c\u4ee5\u6307\u5411\u4e00\u500b remote Docker daemon\uff0c\u7528\u65bc\u7ba1\u7406 Docker \u4e3b\u6a5f\u548c Docker registry \u7684\u6a5f\u5236\u3002",authors:"suyuying",tags:["docker"]},a=void 0,i={permalink:"/blog/2023/03/10/Docker/docker-create-context",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Docker/2023-03-10-docker-create-context.md",source:"@site/blog/Docker/2023-03-10-docker-create-context.md",title:"docker create context and docker context command",description:"docker \u652f\u63f4\u591a\u500b\u4e0d\u540cremote docker deamon\u7ba1\u7406,`docker create context` \u662f\u7528\u4f86\u5efa\u7acb\u4e00\u500b\u65b0\u7684 context\uff0c\u4ee5\u6307\u5411\u4e00\u500b remote Docker daemon\uff0c\u7528\u65bc\u7ba1\u7406 Docker \u4e3b\u6a5f\u548c Docker registry \u7684\u6a5f\u5236\u3002",date:"2023-03-10T00:00:00.000Z",formattedDate:"March 10, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"}],readingTime:1.625,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"docker create context and docker context command",description:"docker \u652f\u63f4\u591a\u500b\u4e0d\u540cremote docker deamon\u7ba1\u7406,`docker create context` \u662f\u7528\u4f86\u5efa\u7acb\u4e00\u500b\u65b0\u7684 context\uff0c\u4ee5\u6307\u5411\u4e00\u500b remote Docker daemon\uff0c\u7528\u65bc\u7ba1\u7406 Docker \u4e3b\u6a5f\u548c Docker registry \u7684\u6a5f\u5236\u3002",authors:"suyuying",tags:["docker"]},prevItem:{title:"env file management env variable in github action",permalink:"/blog/2023/03/11/github-action/github-action-env-file"},nextItem:{title:"docker manage logs in Docker to prevent service failure caused by excessively large container logs",permalink:"/blog/2023/03/10/Docker/docker-management"}},l={authorsImageUrls:[void 0]},m=[],d={toc:m},p="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker create context")," \u662f\u7528\u4f86\u5efa\u7acb\u4e00\u500b\u65b0\u7684 context\uff0c\u4ee5\u6307\u5411\u4e00\u500b remote Docker daemon\uff0c\u7528\u65bc\u7ba1\u7406 Docker \u4e3b\u6a5f\u548c Docker registry \u7684\u6a5f\u5236\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker context use")," \u6307\u4ee4\u4f86\u5207\u63db context\uff0c\u5207\u63db\u5b8c\u6210\u5f8c\u5373\u53ef\u4f7f\u7528 docker \u6307\u4ee4\u64cd\u4f5c remote Docker daemon\u3002\u5982\u679c\u4f7f\u7528\u96f2\u7aef container\uff0c\u4f8b\u5982 azure web container service\uff0c\u5c31\u53ef\u4ee5\u7528\u9019\u500b\u6307\u4ee4\u53bb\u7ba1\u7406\u96f2\u7aef container\u3002\u5305\u542b\u65b0\u5efa \u522a\u9664\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u6240\u4ee5\u4e0d\u8981\u592a\u958b\u5fc3\u4e00\u6b21\u8d77\u4e00\u5927\u5806\u96f2\u7aef container \u9019\u6a23\u6703\u88ab charging \u5230\u7206\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6709\u7528\u5230 docker buildx \u53ef\u80fd\u6703\u628a docker context \u8ddf docker buildx create --name \u641e\u6df7\uff0c\n\u5169\u500b\u662f\u4e0d\u540c\u7684\uff0c",(0,o.kt)("a",{parentName:"p",href:"./docker-muiltiplatform%20copy#docker-buildx-create---name-my-node-%E6%98%AF%E5%BB%BA%E7%AB%8B%E7%AF%80%E9%BB%9E%E5%97%8E%5D"},"\u53ef\u4ee5\u770b\u9019\u88e1"))),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"docker create context")," \u6307\u4ee4\u7684\u6559\u5b78\uff1a"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker create context")," \u6307\u4ee4\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b\u65b0\u7684 context\uff0c\u7528\u4f86\u6307\u5411\u4e00\u500b remote Docker daemon\u3002\u4ee5\u4e0b\u662f\u6307\u4ee4\u7684\u8a73\u7d30\u8aaa\u660e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker context create CONTEXT_NAME --docker "host=REMOTE_DOCKER_HOST" --description "CONTEXT_DESCRIPTION"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CONTEXT_NAME"),": \u6307\u5b9a\u65b0\u5efa\u7acb\u7684 context \u7684\u540d\u7a31\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REMOTE_DOCKER_HOST"),": \u6307\u5b9a remote Docker daemon \u7684\u4f4d\u7f6e\uff0c\u53ef\u4ee5\u662f\u4e00\u500b IP \u6216\u662f\u4e00\u500b domain name\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CONTEXT_DESCRIPTION"),": \u53ef\u4ee5\u52a0\u5165\u5c0d context \u7684\u63cf\u8ff0\uff0c\u65b9\u4fbf\u7ba1\u7406\u3002")),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u6307\u4ee4\u5efa\u7acb\u4e00\u500b\u540d\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"mycontext")," \u7684 context\uff0c\u6307\u5411\u4e00\u500b remote Docker daemon\uff0c\u4e26\u52a0\u5165\u63cf\u8ff0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker context create mycontext --docker "host=myremotehost:2376" --description "My remote Docker daemon"\n')),(0,o.kt)("p",null,"\u5efa\u7acb\u5b8c\u6210\u5f8c\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker context use")," \u6307\u4ee4\u4f86\u5207\u63db context\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker context use mycontext\n")))}k.isMDXComponent=!0}}]);