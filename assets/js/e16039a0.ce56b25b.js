"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[9946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=o,g=p["".concat(s,".").concat(b)]||p[b]||v[b]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=n(7294),a=n(3905);const i={title:"environment variable and  secrets variable config in github",description:"\u4f7f\u7528 CI \u8ddf\u5beb\u7a0b\u5f0f\u90fd\u6703\u9047\u5230\u8981\u5f9e env \u62ff\u53d6\u8b8a\u6578\u503c\u7684\u6642\u5019\uff0c\u5728 github \u7ba1\u7406\u65b9\u5f0f\u5982\u4e0b\uff0c\u4e3b\u8981\u5224\u65b7\u662f\u9019\u500b\u8b8a\u6578\u662f\u5426\u8981\u7d66\u591a\u500b workflow \u4f7f\u7528\u3002\u5982\u679c\u60a8\u4e0d\u78ba\u5b9a\uff0c\u4e5f\u53ef\u4ee5\u5f9e\u5b58\u5132\u5eab\u5bc6\u9470\u958b\u59cb\u70ba\u6240\u6709\u6771\u897f\u5275\u5efa\u5bc6\u9470\u3002\u5982\u679c\u4e4b\u5f8c\u6709\u5f15\u5165\u9700\u8981\u4e0d\u540c\u5bc6\u9470\u7684\u4e0d\u540c\u74b0\u5883\uff0c\u4f8b\u5982 prod,dev,test \u7b49\uff0c\u5247\u53ef\u4ee5\u5c07\u5b58\u5132\u5eab\u5bc6\u9470\u79fb\u52d5\u5230\u7279\u5b9a\u74b0\u5883\u3002\u7136\u5f8c\u5728\u7279\u5b9a\u74b0\u5883\u7528\u7279\u5b9a\u8b8a\u6578\u503c\u3002",authors:"suyuying",tags:["github action","CICD"]},l=void 0,s={permalink:"/blog/2023/03/16/github-action/githubaction-env-secrets-variablr-config",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/github-action/2023-03-16-githubaction-env-secrets-variablr-config.md",source:"@site/blog/github-action/2023-03-16-githubaction-env-secrets-variablr-config.md",title:"environment variable and  secrets variable config in github",description:"\u4f7f\u7528 CI \u8ddf\u5beb\u7a0b\u5f0f\u90fd\u6703\u9047\u5230\u8981\u5f9e env \u62ff\u53d6\u8b8a\u6578\u503c\u7684\u6642\u5019\uff0c\u5728 github \u7ba1\u7406\u65b9\u5f0f\u5982\u4e0b\uff0c\u4e3b\u8981\u5224\u65b7\u662f\u9019\u500b\u8b8a\u6578\u662f\u5426\u8981\u7d66\u591a\u500b workflow \u4f7f\u7528\u3002\u5982\u679c\u60a8\u4e0d\u78ba\u5b9a\uff0c\u4e5f\u53ef\u4ee5\u5f9e\u5b58\u5132\u5eab\u5bc6\u9470\u958b\u59cb\u70ba\u6240\u6709\u6771\u897f\u5275\u5efa\u5bc6\u9470\u3002\u5982\u679c\u4e4b\u5f8c\u6709\u5f15\u5165\u9700\u8981\u4e0d\u540c\u5bc6\u9470\u7684\u4e0d\u540c\u74b0\u5883\uff0c\u4f8b\u5982 prod,dev,test \u7b49\uff0c\u5247\u53ef\u4ee5\u5c07\u5b58\u5132\u5eab\u5bc6\u9470\u79fb\u52d5\u5230\u7279\u5b9a\u74b0\u5883\u3002\u7136\u5f8c\u5728\u7279\u5b9a\u74b0\u5883\u7528\u7279\u5b9a\u8b8a\u6578\u503c\u3002",date:"2023-03-16T00:00:00.000Z",formattedDate:"March 16, 2023",tags:[{label:"github action",permalink:"/blog/tags/github-action"},{label:"CICD",permalink:"/blog/tags/cicd"}],readingTime:2.54,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"environment variable and  secrets variable config in github",description:"\u4f7f\u7528 CI \u8ddf\u5beb\u7a0b\u5f0f\u90fd\u6703\u9047\u5230\u8981\u5f9e env \u62ff\u53d6\u8b8a\u6578\u503c\u7684\u6642\u5019\uff0c\u5728 github \u7ba1\u7406\u65b9\u5f0f\u5982\u4e0b\uff0c\u4e3b\u8981\u5224\u65b7\u662f\u9019\u500b\u8b8a\u6578\u662f\u5426\u8981\u7d66\u591a\u500b workflow \u4f7f\u7528\u3002\u5982\u679c\u60a8\u4e0d\u78ba\u5b9a\uff0c\u4e5f\u53ef\u4ee5\u5f9e\u5b58\u5132\u5eab\u5bc6\u9470\u958b\u59cb\u70ba\u6240\u6709\u6771\u897f\u5275\u5efa\u5bc6\u9470\u3002\u5982\u679c\u4e4b\u5f8c\u6709\u5f15\u5165\u9700\u8981\u4e0d\u540c\u5bc6\u9470\u7684\u4e0d\u540c\u74b0\u5883\uff0c\u4f8b\u5982 prod,dev,test \u7b49\uff0c\u5247\u53ef\u4ee5\u5c07\u5b58\u5132\u5eab\u5bc6\u9470\u79fb\u52d5\u5230\u7279\u5b9a\u74b0\u5883\u3002\u7136\u5f8c\u5728\u7279\u5b9a\u74b0\u5883\u7528\u7279\u5b9a\u8b8a\u6578\u503c\u3002",authors:"suyuying",tags:["github action","CICD"]},nextItem:{title:"little curl problem about ide\u8ddf\u672c\u6a5fterminal\u4f7f\u7528\u7684curl\u7248\u672c\u4e0d\u540c\u554f\u984c",permalink:"/blog/2023/03/16/linux-server/little-curl-problem"}},c={authorsImageUrls:[void 0]},u=[{value:"workflow \u5340\u5206 env \u8a2d\u5b9a\u6a21\u5f0f",id:"workflow-\u5340\u5206-env-\u8a2d\u5b9a\u6a21\u5f0f",level:2},{value:"\u55ae workflow \u4f7f\u7528",id:"\u55ae-workflow-\u4f7f\u7528",level:3},{value:"\u591a workflow \u4f7f\u7528",id:"\u591a-workflow-\u4f7f\u7528",level:3},{value:"\u4f7f\u7528\u60c5\u5883",id:"\u4f7f\u7528\u60c5\u5883",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u8a2d\u5b9a\u5728 sercrets",id:"\u8a2d\u5b9a\u5728-sercrets",level:3},{value:"\u8a2d\u5b9a\u5728 variables",id:"\u8a2d\u5b9a\u5728-variables",level:3},{value:"\u8a2d\u5b9a\u5728 workflow \u88e1\u7684 env",id:"\u8a2d\u5b9a\u5728-workflow-\u88e1\u7684-env",level:3}],p={toc:u},v="wrapper";function b(e){let{components:t,...i}=e;return(0,a.kt)(v,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"workflow-\u5340\u5206-env-\u8a2d\u5b9a\u6a21\u5f0f"},"workflow \u5340\u5206 env \u8a2d\u5b9a\u6a21\u5f0f"),(0,a.kt)("p",null,"\u4f7f\u7528 CI \u8ddf\u5beb\u7a0b\u5f0f\u90fd\u6703\u9047\u5230\u8981\u5f9e env \u62ff\u53d6\u8b8a\u6578\u503c\u7684\u6642\u5019\uff0c\u5728 github \u7ba1\u7406\u65b9\u5f0f\u5982\u4e0b\uff0c\u4e3b\u8981\u5224\u65b7\u662f\u9019\u500b\u8b8a\u6578\u662f\u5426\u8981\u7d66\u591a\u500b workflow \u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"\u55ae-workflow-\u4f7f\u7528"},"\u55ae workflow \u4f7f\u7528"),(0,a.kt)("p",null,"\u975e\u5bc6\u78bc\u985e\u578b\uff0c\u5728 workflow \u4e2d\u5b9a\u7fa9 env \u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'name: Greeting on variable day\n\non:\n  workflow_dispatch\n\nenv:\n  DAY_OF_WEEK: Monday\n\njobs:\n  greeting_job:\n    runs-on: ubuntu-latest\n    env:\n      Greeting: Hello\n    steps:\n      - name: "Say Hello Mona it\'s Monday"\n        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"\n        env:\n          First_Name: Mona\n')),(0,a.kt)("p",null,"\u4e0d\u540c\u5c64\u6b21\u7684\u74b0\u5883\u8b8a\u6578\u53ef\u4ee5\u7e7c\u627f\u4e26\u8986\u84cb\u8f03\u9ad8\u5c64\u6b21\u7684\u74b0\u5883\u8b8a\u6578\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u5728\u9802\u7d1a\u5de5\u4f5c\u6d41\u7a0b\u6587\u4ef6\u4e2d\u8a2d\u7f6e\u4e86\u4e00\u500b\u74b0\u5883\u8b8a\u6578\uff0c\u4e26\u4e14\u5728\u4f5c\u696d\u4e2d\u4f7f\u7528\u76f8\u540c\u7684\u8b8a\u6578\u540d\u7a31\u5b9a\u7fa9\u4e86\u53e6\u4e00\u500b\u503c\uff0c\u90a3\u9ebc\u5728\u8a72\u4f5c\u696d\u4e2d\u4f7f\u7528\u7684\u503c\u5c07\u8986\u84cb\u9802\u7d1a\u503c\u3002"),(0,a.kt)("p",null,"\u5bc6\u78bc\u985e\u578b\uff0c\u5c31\u9700\u8981\u7528\u5230\u6703\u8de8\u591a\u500b workflow \u7684 secrets \u53bb\u7ba1\u7406\u3002"),(0,a.kt)("h3",{id:"\u591a-workflow-\u4f7f\u7528"},"\u591a workflow \u4f7f\u7528"),(0,a.kt)("p",null,"\u9700\u5728 github UI \u8a2d\u5b9a\u8b8a\u6578\u3002\u9019\u4e9b\u8b8a\u6578\u53ef\u4ee5\u8de8\u591a\u500b\u5de5\u4f5c\u6d41\u7a0b\u4f7f\u7528\u3002\n\u4f4d\u7f6e"),(0,a.kt)(o.Fragment,null,(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)("img",{src:n(4547).Z,alt:"github-env-repo-variable.png"}))),(0,a.kt)("p",null,"\u4e3b\u8981\u4e09\u5c64\u7d1a:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7d44\u7e54")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b58\u5132\u5eab")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u74b0\u5883"),(0,a.kt)("p",{parentName:"li"},"\u4e0a\u9762\u5716\u6709 repo \u8ddf env \u7684\uff0c\u4f7f\u7528\u9806\u5e8f\u90e8\u5206\uff1aEnvironment > Repository > Organization\u3002\n\u5982\u679c\u6709\u76f8\u540c\u8b8a\u6578\uff0c\u512a\u5148\u7528 Environment , than Repository, than\uff1aOrganization\u3002"))),(0,a.kt)("h2",{id:"\u4f7f\u7528\u60c5\u5883"},"\u4f7f\u7528\u60c5\u5883"),(0,a.kt)("p",null,"\u9019\u908a\u63d0\u4f9b\u53c3\u8003"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4e0d\u78ba\u5b9a\uff0c\u4e5f\u53ef\u4ee5\u5f9e\u5b58\u5132\u5eab\u5bc6\u9470\u958b\u59cb\u70ba\u6240\u6709\u6771\u897f\u5275\u5efa\u5bc6\u9470\u3002\u5982\u679c\u4e4b\u5f8c\u6709\u5f15\u5165\u9700\u8981\u4e0d\u540c\u5bc6\u9470\u7684\u4e0d\u540c\u74b0\u5883\uff0c\u4f8b\u5982 prod,dev,test \u7b49\uff0c\u5247\u53ef\u4ee5\u5c07\u5b58\u5132\u5eab\u5bc6\u9470\u79fb\u52d5\u5230\u7279\u5b9a\u74b0\u5883\u3002\u7136\u5f8c\u5728\u7279\u5b9a\u74b0\u5883\u7528\u7279\u5b9a\u8b8a\u6578\u503c\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u8a2d\u5b9a\u5728-sercrets"},"\u8a2d\u5b9a\u5728 sercrets"),(0,a.kt)("p",null,"\u8981\u7528\u8981\u9019\u6a23\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"${{ secrets.YOURKEY }}"),"\n\u70ba\u5565\u683c\u5f0f\u9577\u9019\u6a23\u8981\u770b",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/contexts#secrets-context"},"secrets \u4e0a\u4e0b\u6587")),(0,a.kt)("h3",{id:"\u8a2d\u5b9a\u5728-variables"},"\u8a2d\u5b9a\u5728 variables"),(0,a.kt)("p",null,"\u8981\u7528\u8981\u9019\u6a23\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"${{ vars.YOURKEY }}"),"\n\u70ba\u5565\u683c\u5f0f\u9577\u9019\u6a23\u8981\u770b",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/contexts#vars-context"},"vars \u4e0a\u4e0b\u6587")),(0,a.kt)("h3",{id:"\u8a2d\u5b9a\u5728-workflow-\u88e1\u7684-env"},"\u8a2d\u5b9a\u5728 workflow \u88e1\u7684 env"),(0,a.kt)("p",null,"\u5982\u679c\u662f\u5728\u6a5f\u5668\u5e95\u4e0b\uff0c\u53ef\u4ee5\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"$KEY"),"(linux)."),(0,a.kt)("p",null,"\u8a2d\u5b9a\u5728\u6a5f\u5668\u5916\u9762(job \u4ee5\u4e0a\u5c64\u7d1a)\u8981\u7528",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/contexts#env-context"},"env \u4e0a\u4e0b\u6587"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"${{ env.mascot }}")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/variables"},"\u53c3\u8003\u7684\u5b98\u7db2\u8cc7\u6599-variables \u7ba1\u7406"))))}b.isMDXComponent=!0},4547:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/github-env-repo-variable-18c0308cd7664714c41cd456ccba373e.png"}}]);