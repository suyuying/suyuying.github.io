"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[1643],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>p});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),g=c(i),b=r,p=g["".concat(l,".").concat(b)]||g[b]||d[b]||o;return i?n.createElement(p,a(a({ref:t},s),{},{components:i})):n.createElement(p,a({ref:t},s))}));function p(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=b;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[g]="string"==typeof e?e:r,a[1]=u;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}b.displayName="MDXCreateElement"},323:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=i(7462),r=(i(7294),i(3905));const o={title:"CI:use github action to build image and push to git hub container registry",description:"use CI in github action ,and variable in environments to build image and push to registry. github action \u5165\u9580\u653b\u7565\uff0cCI \u63a8image\u5230github",authors:"suyuying",tags:["github action","CICD"]},a=void 0,u={permalink:"/blog/2023/03/11/github-action/githib-action-CI-to-github-container",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/github-action/2023-03-11-githib-action-CI-to-github-container.md",source:"@site/blog/github-action/2023-03-11-githib-action-CI-to-github-container.md",title:"CI:use github action to build image and push to git hub container registry",description:"use CI in github action ,and variable in environments to build image and push to registry. github action \u5165\u9580\u653b\u7565\uff0cCI \u63a8image\u5230github",date:"2023-03-11T00:00:00.000Z",formattedDate:"March 11, 2023",tags:[{label:"github action",permalink:"/blog/tags/github-action"},{label:"CICD",permalink:"/blog/tags/cicd"}],readingTime:4.675,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"CI:use github action to build image and push to git hub container registry",description:"use CI in github action ,and variable in environments to build image and push to registry. github action \u5165\u9580\u653b\u7565\uff0cCI \u63a8image\u5230github",authors:"suyuying",tags:["github action","CICD"]},prevItem:{title:"lab of s3 set iam permissions for Github Actions to   Build an AWS s3 static website through CI",permalink:"/blog/2023/03/15/Aws/lab-s3-setting-for-ci"},nextItem:{title:"demo basic  github action",permalink:"/blog/2023/03/11/github-action/github-action-demo"}},l={authorsImageUrls:[void 0]},c=[{value:"Build code registry",id:"build-code-registry",level:2},{value:"ways to build image and push",id:"ways-to-build-image-and-push",level:2},{value:"way1. build image and push from local side by docker command,use CI after to renew",id:"way1-build-image-and-push-from-local-side-by-docker-commanduse-ci-after-to-renew",level:3}],s={toc:c},g="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(g,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"build-code-registry"},"Build code registry"),(0,r.kt)("p",null,"\u628a code \u63a8\u5230 github \u6559\u5b78\u5f88\u591a\uff0c\u53ef\u4ee5 google \u4e00\u4e0b\uff0c\u4e0d\u904e\u8981\u6ce8\u610f\u7684\u662f\u73fe\u5728\u63a8 code \u90fd\u8981\u5148\u5728\u5b98\u7db2\u7533\u8acb token\uff0c\u65b0\u624b\u5f88\u5bb9\u6613\u5361\u5728\u9019\u3002"),(0,r.kt)("h2",{id:"ways-to-build-image-and-push"},"ways to build image and push"),(0,r.kt)("p",null,"\u57f7\u884c CI \u524d\uff0c\u8981\u78ba\u8a8d\u6709 Dockerfile \u4e26\u4e14\u5728\u5730\u7aef\u53ef\u4ee5 docker run \u670d\u52d9\u8d77\u4f86\uff0cCI \u904e\u7a0b\u6703\u7528\u8a72 Dokcerfile \u7522\u751f image\u3002"),(0,r.kt)("h3",{id:"way1-build-image-and-push-from-local-side-by-docker-commanduse-ci-after-to-renew"},"way1. build image and push from local side by docker command,use CI after to renew"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5730\u7aef build \u5b8c\uff0c\u7136\u5f8c\u63a8\u5230 github container registry(\u9700\u8981\u7528 github ui \u5efa\u7acb token,\u4e26\u7d66 token)\n\uff0c\u7136\u5f8c\u628a token \u5b58\u5230 txt \u6a94")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7528 token \u767b\u5165 github"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cat token.txt | docker login ghcr.io -u suyuying --password-stdin\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-u")," \u63db\u6210\u81ea\u5df1\u7684 username"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"token.txt"),"\u628a token \u653e\u5728\u88e1\u9762"))}d.isMDXComponent=!0}}]);