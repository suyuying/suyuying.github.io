"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[7315],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),y=o,g=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"github action demo,deploy to s3",description:"use github action to deploy a react structured page to s3",authors:"suyuying",tags:["cloud"]},i=void 0,u={permalink:"/blog/2023/03/06/github-action",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-06/github-action.md",source:"@site/blog/2023-03-06/github-action.md",title:"github action demo,deploy to s3",description:"use github action to deploy a react structured page to s3",date:"2023-03-06T00:00:00.000Z",formattedDate:"March 6, 2023",tags:[{label:"cloud",permalink:"/blog/tags/cloud"}],readingTime:2.27,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"github action demo,deploy to s3",description:"use github action to deploy a react structured page to s3",authors:"suyuying",tags:["cloud"]},nextItem:{title:"Introduction to Azure container service, and deploy my backend server in azure",permalink:"/blog/2023/03/06/2023-03-06-azure-deploy/azure-cloud-container"}},c={authorsImageUrls:[void 0]},l=[{value:"\u57fa\u672c\u4ecb\u7d39",id:"\u57fa\u672c\u4ecb\u7d39",level:2}],s={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u57fa\u672c\u4ecb\u7d39"},"\u57fa\u672c\u4ecb\u7d39"),(0,o.kt)("p",null,"GitHub Action \u662f continuous integration and continuous delivery (CI/CD)\u5e73\u53f0\uff0c\n\u9664\u4e86\u4e00\u822c\u7684 build test deploy \u4ed6\u53e6\u5916\u6709\u7d66\u5c08\u6848\u7ba1\u7406\u7684\u5404\u7a2e\u5c0f\u529f\u80fd\uff0c\u4f8b\u5982\u7d66 pull request \u6253\u6a19\u7c64\u3002\n\u63d0\u4f9b\u514d\u8cbb\u7684 runner \u5e6b\u4f60\u57f7\u884c\u4efb\u52d9\uff0c\u4e5f\u63a5\u53d7 self-hosted runner\u3002"))}d.isMDXComponent=!0}}]);