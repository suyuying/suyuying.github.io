"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[7438],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,b=p["".concat(l,".").concat(m)]||p[m]||g[m]||o;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"reset git remote origin branch",description:"\u5728local\u7aef\u767c\u73febuild\u5b8c\u6771\u897ffail\uff0c\u4f46\u662f\u5df2\u7d93\u63a8\u5230main branch\u4e86\uff0c\u6240\u4ee5\u57f7\u884c\u9060\u7aefregistry\u9000\u7248\uff0c\u9700\u8981\u4f7f\u7528 git push --force,\u57fa\u672c\u4e0a main branch \u90fd\u6703\u662f\u4fdd\u8b77\u7684\uff0c\u4e5f\u53ef\u4ee5\u8003\u616e\u7528 pull request \u5148\u9032\u884c\u6e2c\u8a66(\u4e0d\u80fd\u81ea\u5df1\u767c pull request \u81ea\u5df1\u5be9)\uff0c\u904e\u4e86\u518d merge\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["git"]},a=void 0,u={permalink:"/blog/2023/03/02/Git/reset-git-origin-branch",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Git/2023-03-02-reset-git-origin-branch.md",source:"@site/blog/Git/2023-03-02-reset-git-origin-branch.md",title:"reset git remote origin branch",description:"\u5728local\u7aef\u767c\u73febuild\u5b8c\u6771\u897ffail\uff0c\u4f46\u662f\u5df2\u7d93\u63a8\u5230main branch\u4e86\uff0c\u6240\u4ee5\u57f7\u884c\u9060\u7aefregistry\u9000\u7248\uff0c\u9700\u8981\u4f7f\u7528 git push --force,\u57fa\u672c\u4e0a main branch \u90fd\u6703\u662f\u4fdd\u8b77\u7684\uff0c\u4e5f\u53ef\u4ee5\u8003\u616e\u7528 pull request \u5148\u9032\u884c\u6e2c\u8a66(\u4e0d\u80fd\u81ea\u5df1\u767c pull request \u81ea\u5df1\u5be9)\uff0c\u904e\u4e86\u518d merge\u3002",date:"2023-03-02T00:00:00.000Z",formattedDate:"March 2, 2023",tags:[{label:"git",permalink:"/blog/tags/git"}],readingTime:.64,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"reset git remote origin branch",description:"\u5728local\u7aef\u767c\u73febuild\u5b8c\u6771\u897ffail\uff0c\u4f46\u662f\u5df2\u7d93\u63a8\u5230main branch\u4e86\uff0c\u6240\u4ee5\u57f7\u884c\u9060\u7aefregistry\u9000\u7248\uff0c\u9700\u8981\u4f7f\u7528 git push --force,\u57fa\u672c\u4e0a main branch \u90fd\u6703\u662f\u4fdd\u8b77\u7684\uff0c\u4e5f\u53ef\u4ee5\u8003\u616e\u7528 pull request \u5148\u9032\u884c\u6e2c\u8a66(\u4e0d\u80fd\u81ea\u5df1\u767c pull request \u81ea\u5df1\u5be9)\uff0c\u904e\u4e86\u518d merge\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["git"]},prevItem:{title:"Use Google Fonts in Docusaurus",permalink:"/blog/2023/03/03/Docusaurus/use-google-font"},nextItem:{title:"use react to build your own static website by github page",permalink:"/blog/2023/03/02/github-action/git-hub-page-deploy-from-vite"}},l={authorsImageUrls:[void 0]},c=[],s={toc:c},p="wrapper";function g(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9700\u8981\u4f7f\u7528 git push --force,\u57fa\u672c\u4e0a main branch \u90fd\u6703\u662f\u4fdd\u8b77\u7684\uff0c\n\u4e5f\u53ef\u4ee5\u8003\u616e\u7528 pull request \u5148\u9032\u884c\u6e2c\u8a66(\u4e0d\u80fd\u81ea\u5df1\u767c pull request \u81ea\u5df1\u5be9)\uff0c\u904e\u4e86\u518d merge\u3002"))}g.isMDXComponent=!0}}]);