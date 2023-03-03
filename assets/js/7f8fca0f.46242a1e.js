"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[7217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||g[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u5c07\u9060\u7aef\u5206\u679d\u9000\u7248\u65b9\u6cd5",description:"\u5728local\u7aef\u767c\u73febuild\u5b8c\u6771\u897ffail\uff0c\u4f46\u662f\u5df2\u7d93\u63a8\u5230main branch\u4e86\uff0c\u6240\u4ee5\u57f7\u884c\u9060\u7aefregistry\u9000\u7248",authors:"suyuying",tags:["git"]},i=void 0,s={permalink:"/blog/2023/03/02/reset-git-origin-branch",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-02/reset-git-origin-branch.md",source:"@site/blog/2023-03-02/reset-git-origin-branch.md",title:"\u5c07\u9060\u7aef\u5206\u679d\u9000\u7248\u65b9\u6cd5",description:"\u5728local\u7aef\u767c\u73febuild\u5b8c\u6771\u897ffail\uff0c\u4f46\u662f\u5df2\u7d93\u63a8\u5230main branch\u4e86\uff0c\u6240\u4ee5\u57f7\u884c\u9060\u7aefregistry\u9000\u7248",date:"2023-03-02T00:00:00.000Z",formattedDate:"March 2, 2023",tags:[{label:"git",permalink:"/blog/tags/git"}],readingTime:.635,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"\u5c07\u9060\u7aef\u5206\u679d\u9000\u7248\u65b9\u6cd5",description:"\u5728local\u7aef\u767c\u73febuild\u5b8c\u6771\u897ffail\uff0c\u4f46\u662f\u5df2\u7d93\u63a8\u5230main branch\u4e86\uff0c\u6240\u4ee5\u57f7\u884c\u9060\u7aefregistry\u9000\u7248",authors:"suyuying",tags:["git"]},prevItem:{title:"markdown\u8a9e\u6cd5\u7d00\u9304",permalink:"/blog/2023/03/02/md-form"},nextItem:{title:"\u5728docusaurus\u4f7f\u7528google font\u7684\u65b9\u6cd5",permalink:"/blog/2023/03/02/use-google-font"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u},p="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9700\u8981\u4f7f\u7528 git push --force,\u57fa\u672c\u4e0a main branch \u90fd\u6703\u662f\u4fdd\u8b77\u7684\uff0c\n\u4e5f\u53ef\u4ee5\u8003\u616e\u7528 pull request \u5148\u9032\u884c\u6e2c\u8a66(\u4e0d\u80fd\u81ea\u5df1\u767c pull request \u81ea\u5df1\u5be9)\uff0c\u904e\u4e86\u518d merge\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git checkout master\ngit reset --hard e3f1e37\ngit push --force origin master\n# Then to prove it (it won't print any diff)\ngit diff master..origin/master\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pull request\nsettings -> branches->Branch protection rules\n// if you just want to try merger just choose\nRequire status checks to pass before merging\n// if you choose Require a pull request before merging\n// will get error Pull request authors cannot approve their own pull requests!\n\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/17667023/git-how-to-reset-origin-master-to-a-commit"},"\u53c3\u8003\u7db2\u5740")))}g.isMDXComponent=!0}}]);