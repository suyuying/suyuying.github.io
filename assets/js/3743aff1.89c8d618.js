"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[3972],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,b=p["".concat(s,".").concat(m)]||p[m]||y[m]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"aws book study note",description:"\u8a18\u9304\u7b46\u8a18",authors:"suyuying",tags:["AWS"]},i=void 0,l={permalink:"/blog/2023/3/29/Aws/aws-book-study-note",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Aws/2023-3-29-aws-book-study-note.md",source:"@site/blog/Aws/2023-3-29-aws-book-study-note.md",title:"aws book study note",description:"\u8a18\u9304\u7b46\u8a18",date:"2023-03-29T00:00:00.000Z",formattedDate:"March 29, 2023",tags:[{label:"AWS",permalink:"/blog/tags/aws"}],readingTime:10.82,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"aws book study note",description:"\u8a18\u9304\u7b46\u8a18",authors:"suyuying",tags:["AWS"]},prevItem:{title:"Do Internet gateways and modem need to be used together?",permalink:"/blog/2023/03/30/Others/modemVSigw"},nextItem:{title:"Zabbix Sender monitor key word in log, and show data in grafana",permalink:"/blog/2023/03/29/Zabbix/zabbix-monitor-log"}},s={authorsImageUrls:[void 0]},u=[{value:"\u540d\u8a5e\u89e3\u91cb",id:"\u540d\u8a5e\u89e3\u91cb",level:2}],c={toc:u},p="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u540d\u8a5e\u89e3\u91cb"},"\u540d\u8a5e\u89e3\u91cb"),(0,o.kt)("p",null,"IAAS: \u96f2\u7aef\u696d\u8005\u63d0\u4f9b\u786c\u9ad4\u8a2d\u65bd\u3001\u7db2\u8def\u3002\u4e0d\u5305\u542b\u4f5c\u696d\u7cfb\u7d71(Linux or Windows),\u4e2d\u4ecb\u8edf\u9ad4(MySql,Pika)\uff0c\u4ee5\u53ca\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,o.kt)("p",null,"PAAS: \u96f2\u7aef\u696d\u8005\u63d0\u4f9b\u786c\u9ad4\u8a2d\u65bd\u3001\u7db2\u8def\u3001\u4f5c\u696d\u7cfb\u7d71\u3001\u4e2d\u4ecb\u8edf\u9ad4\uff0c\u56e0\u6b21\u4f3a\u670d\u5668\u6545\u969c\u8ddf\u5099\u4efd\u8cc7\u6599\u5eab\u7b49\u5de5\u4f5c\u53ef\u4ee5\u7531\u96f2\u7aef\u696d\u8005\u8ca0\u8cac\u3002"),(0,o.kt)("p",null,"SAAS: \u96f2\u7aef\u696d\u8005\u63d0\u4f9b\u786c\u9ad4\u8a2d\u65bd\u3001\u7db2\u8def\u3001\u4f5c\u696d\u7cfb\u7d71\u3001\u4e2d\u4ecb\u8edf\u9ad4\u3001\u61c9\u7528\u7a0b\u5f0f\u3002Gmail \u5c31\u5c6c\u9019\u985e\u578b."),(0,o.kt)("p",null,"Region: aws \u57fa\u790e\u8a2d\u65bd\u7684\u4e00\u500b\u55ae\u4f4d\uff0c\u6bcf\u500b\u5340\u57df\u90fd\u662f\u7368\u7acb\u6578\u64da\u4e2d\u5fc3\u7fa4\u96c6\uff0c\u7531\u591a\u500b Availability Zone \u7d44\u6210\uff0c\u6240\u4ee5\u50cf\u65b0\u52a0\u5761\u5340\uff0caws \u76ee\u524d\u5c31 3 \u500b\u53ef\u7528\u5340\u57df\u3002"),(0,o.kt)("p",null,"Availability Zone: \u5177\u6709\u7368\u7acb\u7684\u96fb\u6e90\u3001\u7db2\u7d61\u548c\u51b7\u537b\u7cfb\u7d71\uff0c\u4ee5\u53ca\u8207\u5176\u4ed6\u53ef\u7528\u5340\u57df\u4e4b\u9593\u9ad8\u5e36\u5bec\u3001\u4f4e\u5ef6\u9072\u7684\u7db2\u7d61\u9023\u63a5\u3002\u6bcf\u500b\u53ef\u7528\u5340\u57df\u90fd\u662f\u4e00\u500b\u7368\u7acb\u7684\u6578\u64da\u4e2d\u5fc3\u7fa4\u96c6\uff0c\u5177\u6709\u9ad8\u5ea6\u7684\u5197\u9918\u6027\u548c\u53ef\u9760\u6027\uff0c\u4e26\u4e14\u53ef\u4ee5\u901a\u904e\u4f4e\u5ef6\u9072\u7684\u9023\u63a5\u5be6\u73fe\u53ef\u7528\u5340\u57df\u4e4b\u9593\u7684\u5bb9\u932f\u548c\u8ca0\u8f09\u5e73\u8861\u3002"),(0,o.kt)("p",null,"VPC(Virtual Private Cloud): VPC \u53ea\u80fd\u9650\u5728\u55ae\u500b region \u5167\uff0c\u4f46\u53ef\u4ee5\u8de8\u540c\u4e00\u683c region \u5167\u7684\u591a\u500b Availability Zone"))}y.isMDXComponent=!0}}]);