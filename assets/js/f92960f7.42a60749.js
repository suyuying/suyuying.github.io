"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[2369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>s});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),l=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},k=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,d=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,s=p["".concat(d,".").concat(u)]||p[u]||m[u]||c;return r?o.createElement(s,a(a({ref:t},k),{},{components:r})):o.createElement(s,a({ref:t},k))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},20318:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const c={title:"docker create context and docker context command",description:"docker \u652f\u63f4\u591a\u500b\u4e0d\u540cremote docker deamon\u7ba1\u7406,`docker create context` \u662f\u7528\u4f86\u5efa\u7acb\u4e00\u500b\u65b0\u7684 context\uff0c\u4ee5\u6307\u5411\u4e00\u500b remote Docker daemon\uff0c\u7528\u65bc\u7ba1\u7406 Docker \u4e3b\u6a5f\u548c Docker registry \u7684\u6a5f\u5236\u3002",authors:"suyuying",tags:["docker"]},a=void 0,i={unversionedId:"Docker/2023-03-10-docker-create-context",id:"Docker/2023-03-10-docker-create-context",title:"docker create context and docker context command",description:"docker \u652f\u63f4\u591a\u500b\u4e0d\u540cremote docker deamon\u7ba1\u7406,`docker create context` \u662f\u7528\u4f86\u5efa\u7acb\u4e00\u500b\u65b0\u7684 context\uff0c\u4ee5\u6307\u5411\u4e00\u500b remote Docker daemon\uff0c\u7528\u65bc\u7ba1\u7406 Docker \u4e3b\u6a5f\u548c Docker registry \u7684\u6a5f\u5236\u3002",source:"@site/docs/Docker/2023-03-10-docker-create-context.md",sourceDirName:"Docker",slug:"/Docker/2023-03-10-docker-create-context",permalink:"/docs/Docker/2023-03-10-docker-create-context",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/2023-03-10-docker-create-context.md",tags:[{label:"docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{title:"docker create context and docker context command",description:"docker \u652f\u63f4\u591a\u500b\u4e0d\u540cremote docker deamon\u7ba1\u7406,`docker create context` \u662f\u7528\u4f86\u5efa\u7acb\u4e00\u500b\u65b0\u7684 context\uff0c\u4ee5\u6307\u5411\u4e00\u500b remote Docker daemon\uff0c\u7528\u65bc\u7ba1\u7406 Docker \u4e3b\u6a5f\u548c Docker registry \u7684\u6a5f\u5236\u3002",authors:"suyuying",tags:["docker"]},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/category/docker"},next:{title:"docker manage logs in Docker to prevent service failure caused by excessively large container logs",permalink:"/docs/Docker/2023-03-10-docker-management"}},d={},l=[],k={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"docker create context")," \u662f\u7528\u4f86\u5efa\u7acb\u4e00\u500b\u65b0\u7684 context\uff0c\u4ee5\u6307\u5411\u4e00\u500b remote Docker daemon\uff0c\u7528\u65bc\u7ba1\u7406 Docker \u4e3b\u6a5f\u548c Docker registry \u7684\u6a5f\u5236\u3002"),(0,n.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"docker context use")," \u6307\u4ee4\u4f86\u5207\u63db context\uff0c\u5207\u63db\u5b8c\u6210\u5f8c\u5373\u53ef\u4f7f\u7528 docker \u6307\u4ee4\u64cd\u4f5c remote Docker daemon\u3002\u5982\u679c\u4f7f\u7528\u96f2\u7aef container\uff0c\u4f8b\u5982 azure web container service\uff0c\u5c31\u53ef\u4ee5\u7528\u9019\u500b\u6307\u4ee4\u53bb\u7ba1\u7406\u96f2\u7aef container\u3002\u5305\u542b\u65b0\u5efa \u522a\u9664\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u6240\u4ee5\u4e0d\u8981\u592a\u958b\u5fc3\u4e00\u6b21\u8d77\u4e00\u5927\u5806\u96f2\u7aef container \u9019\u6a23\u6703\u88ab charging \u5230\u7206\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6709\u7528\u5230 docker buildx \u53ef\u80fd\u6703\u628a docker context \u8ddf docker buildx create --name \u641e\u6df7\uff0c\n\u5169\u500b\u662f\u4e0d\u540c\u7684.")),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"docker create context")," \u6307\u4ee4\u7684\u6559\u5b78\uff1a"),(0,n.kt)("p",null,"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"docker create context")," \u6307\u4ee4\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b\u65b0\u7684 context\uff0c\u7528\u4f86\u6307\u5411\u4e00\u500b remote Docker daemon\u3002\u4ee5\u4e0b\u662f\u6307\u4ee4\u7684\u8a73\u7d30\u8aaa\u660e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'docker context create CONTEXT_NAME --docker "host=REMOTE_DOCKER_HOST" --description "CONTEXT_DESCRIPTION"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CONTEXT_NAME"),": \u6307\u5b9a\u65b0\u5efa\u7acb\u7684 context \u7684\u540d\u7a31\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"REMOTE_DOCKER_HOST"),": \u6307\u5b9a remote Docker daemon \u7684\u4f4d\u7f6e\uff0c\u53ef\u4ee5\u662f\u4e00\u500b IP \u6216\u662f\u4e00\u500b domain name\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CONTEXT_DESCRIPTION"),": \u53ef\u4ee5\u52a0\u5165\u5c0d context \u7684\u63cf\u8ff0\uff0c\u65b9\u4fbf\u7ba1\u7406\u3002")),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u6307\u4ee4\u5efa\u7acb\u4e00\u500b\u540d\u70ba ",(0,n.kt)("inlineCode",{parentName:"p"},"mycontext")," \u7684 context\uff0c\u6307\u5411\u4e00\u500b remote Docker daemon\uff0c\u4e26\u52a0\u5165\u63cf\u8ff0\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'docker context create mycontext --docker "host=myremotehost:2376" --description "My remote Docker daemon"\n')),(0,n.kt)("p",null,"\u5efa\u7acb\u5b8c\u6210\u5f8c\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"docker context use")," \u6307\u4ee4\u4f86\u5207\u63db context\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker context use mycontext\n")))}m.isMDXComponent=!0}}]);