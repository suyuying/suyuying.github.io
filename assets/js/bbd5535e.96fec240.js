"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[340],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,y=u["".concat(l,".").concat(d)]||u[d]||g[d]||a;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73682:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"difference between read_repository and read_registry in gitlab",description:"\u5728gitlab\u88e1,read_repository \u4e3b\u8981\u662f\u8b93\u4f60\u53ea\u80fd\u6293 image \u4e0b\u4f86,read_repository \u5247\u662f\u53ef\u4ee5\u6aa2\u67e5 repo \u88e1\u9762\u6240\u6709\u5206\u652f,commit \u7b49,\u4e26\u53ef\u4ee5 clone repository,\u4f46\u4e0d\u80fd push!",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["gitlab CI/CD","CICD"]},o=void 0,s={permalink:"/blog/2023/04/07/gitlab CICD/difference-between-read-repository-and-read-registry",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/gitlab CICD/2023-04-07-difference-between-read-repository-and-read-registry.md",source:"@site/blog/gitlab CICD/2023-04-07-difference-between-read-repository-and-read-registry.md",title:"difference between read_repository and read_registry in gitlab",description:"\u5728gitlab\u88e1,read_repository \u4e3b\u8981\u662f\u8b93\u4f60\u53ea\u80fd\u6293 image \u4e0b\u4f86,read_repository \u5247\u662f\u53ef\u4ee5\u6aa2\u67e5 repo \u88e1\u9762\u6240\u6709\u5206\u652f,commit \u7b49,\u4e26\u53ef\u4ee5 clone repository,\u4f46\u4e0d\u80fd push!",date:"2023-04-07T00:00:00.000Z",formattedDate:"April 7, 2023",tags:[{label:"gitlab CI/CD",permalink:"/blog/tags/gitlab-ci-cd"},{label:"CICD",permalink:"/blog/tags/cicd"}],readingTime:.72,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"difference between read_repository and read_registry in gitlab",description:"\u5728gitlab\u88e1,read_repository \u4e3b\u8981\u662f\u8b93\u4f60\u53ea\u80fd\u6293 image \u4e0b\u4f86,read_repository \u5247\u662f\u53ef\u4ee5\u6aa2\u67e5 repo \u88e1\u9762\u6240\u6709\u5206\u652f,commit \u7b49,\u4e26\u53ef\u4ee5 clone repository,\u4f46\u4e0d\u80fd push!",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["gitlab CI/CD","CICD"]},prevItem:{title:"linux disk management command used commonly",permalink:"/blog/2023/04/11/linux-server/linux-disk-management"},nextItem:{title:"gitlab CI/CD basic introduction",permalink:"/blog/2023/04/06/gitlab CICD/gitlab-basic-intro-dind-build-image"}},l={authorsImageUrls:[void 0]},p=[{value:"gitlab \u6b0a\u9650\u7ba1\u7406",id:"gitlab-\u6b0a\u9650\u7ba1\u7406",level:2}],c={toc:p},u="wrapper";function g(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gitlab-\u6b0a\u9650\u7ba1\u7406"},"gitlab \u6b0a\u9650\u7ba1\u7406"),(0,i.kt)("p",null,"gitlab \u6709\u4e00\u5806\u6b0a\u9650\u7ba1\u7406\u6771\u6771,",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#personal-access-token-scopes"},"\u8a73\u60c5"),",\u900f\u904e\u9069\u7576\u7684\u8a2d\u8a08\u4f86\u5b89\u5168\u6b0a\u9650\u7d66\u4e88."),(0,i.kt)("p",null,"\u9019\u908a\u8aaa\u4e00\u4e0b\u4e4b\u524d\u9047\u5230\u7684\u554f\u984c,read_repository and read_registry \u5dee\u5225\u5728\u54ea\u88e1!\u5b98\u65b9\u89e3\u91cb\u5c0d\u500b\u5225\u89e3\u91cb\u5982\u4e0b:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"read_registry"),"-Grants read-only (pull) access to a Container Registry images if a project is private and authorization is required. Available only when the Container Registry is enabled."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"read_repository"),"-Grants read-only access to repositories on private projects using Git-over-HTTP or the Repository Files API."),(0,i.kt)("p",null,"\u5c0f\u7d50:read_registry \u4e3b\u8981\u662f\u8b93\u4f60\u53ea\u80fd\u6293 image \u4e0b\u4f86,read_repository \u5247\u662f\u53ef\u4ee5\u6aa2\u67e5 repo \u88e1\u9762\u6240\u6709\u5206\u652f,commit \u7b49,\u4e26\u53ef\u4ee5 clone repository,\u4f46\u4e0d\u80fd push!"))}g.isMDXComponent=!0}}]);