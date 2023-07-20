"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[7156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,d=c["".concat(s,".").concat(m)]||c[m]||b[m]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={title:"Basic introduction of ansible",description:"ansible \u662f\u7d44\u614b\u7ba1\u7406\u5de5\u5177 Configuration management Tool ,\u542b\u6709\u81ea\u52d5\u5316\u5de5\u5177,\u914d\u7f6e\u7cfb\u7d71\u3001\u90e8\u7f72\u8edf\u4ef6\u548c\u7de8\u6392\u66f4\u9ad8\u7d1a\u7684 IT \u4efb\u52d9\uff0c\u4f8b\u5982\u6301\u7e8c\u90e8\u7f72\u6216\u96f6\u505c\u6a5f\u6efe\u52d5\u66f4\u65b0.\u6b64\u90e8\u5206\u4e3b\u8981\u662f\u7528\u5b98\u7db2\u7684\u4ecb\u7d39\u5167\u5bb9,\u5beb\u4e0b\u500b\u4eba\u4e86\u89e3\u5f8c\u7684\u7b46\u8a18,\u8ddf\u505alab\u7684\u7d00\u9304\uff01",authors:"suyuying",tags:["Ansible","IaC"]},r=void 0,o={permalink:"/blog/2023/04/30/IaC/ansible/ansible-basic-introduction",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/IaC/ansible/2023-04-30-ansible-basic-introduction.md",source:"@site/blog/IaC/ansible/2023-04-30-ansible-basic-introduction.md",title:"Basic introduction of ansible",description:"ansible \u662f\u7d44\u614b\u7ba1\u7406\u5de5\u5177 Configuration management Tool ,\u542b\u6709\u81ea\u52d5\u5316\u5de5\u5177,\u914d\u7f6e\u7cfb\u7d71\u3001\u90e8\u7f72\u8edf\u4ef6\u548c\u7de8\u6392\u66f4\u9ad8\u7d1a\u7684 IT \u4efb\u52d9\uff0c\u4f8b\u5982\u6301\u7e8c\u90e8\u7f72\u6216\u96f6\u505c\u6a5f\u6efe\u52d5\u66f4\u65b0.\u6b64\u90e8\u5206\u4e3b\u8981\u662f\u7528\u5b98\u7db2\u7684\u4ecb\u7d39\u5167\u5bb9,\u5beb\u4e0b\u500b\u4eba\u4e86\u89e3\u5f8c\u7684\u7b46\u8a18,\u8ddf\u505alab\u7684\u7d00\u9304\uff01",date:"2023-04-30T00:00:00.000Z",formattedDate:"April 30, 2023",tags:[{label:"Ansible",permalink:"/blog/tags/ansible"},{label:"IaC",permalink:"/blog/tags/ia-c"}],readingTime:20.37,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Basic introduction of ansible",description:"ansible \u662f\u7d44\u614b\u7ba1\u7406\u5de5\u5177 Configuration management Tool ,\u542b\u6709\u81ea\u52d5\u5316\u5de5\u5177,\u914d\u7f6e\u7cfb\u7d71\u3001\u90e8\u7f72\u8edf\u4ef6\u548c\u7de8\u6392\u66f4\u9ad8\u7d1a\u7684 IT \u4efb\u52d9\uff0c\u4f8b\u5982\u6301\u7e8c\u90e8\u7f72\u6216\u96f6\u505c\u6a5f\u6efe\u52d5\u66f4\u65b0.\u6b64\u90e8\u5206\u4e3b\u8981\u662f\u7528\u5b98\u7db2\u7684\u4ecb\u7d39\u5167\u5bb9,\u5beb\u4e0b\u500b\u4eba\u4e86\u89e3\u5f8c\u7684\u7b46\u8a18,\u8ddf\u505alab\u7684\u7d00\u9304\uff01",authors:"suyuying",tags:["Ansible","IaC"]},prevItem:{title:"The importance of IaC",permalink:"/blog/2023/04/30/IaC/importance-of-IaC"},nextItem:{title:"Common folder and their uses in Linux",permalink:"/blog/2023/04/27/linux-server/linux-default-use-of-folder"}},s={authorsImageUrls:[void 0]},p=[{value:"what is ansible",id:"what-is-ansible",level:2},{value:"Ansible concepts",id:"ansible-concepts",level:2},{value:"\u74b0\u5883\u540d\u8a5e\u5b9a\u7fa9",id:"\u74b0\u5883\u540d\u8a5e\u5b9a\u7fa9",level:3},{value:"\u6587\u6a94\u540d\u8a5e\u5b9a\u7fa9",id:"\u6587\u6a94\u540d\u8a5e\u5b9a\u7fa9",level:3}],u={toc:p},c="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u9019\u908a\u653e\u5b78\u7fd2\u7d93\u9a57,\u672a\u4f86\u5de5\u4f5c\u4e2d\u5982\u679c\u767c\u73fe\u6709\u5176\u4ed6\u505a\u6cd5,\u6216\u8005\u767c\u73fe\u89c0\u5ff5\u6709\u932f\uff0c\u90fd\u6703\u6efe\u52d5\u5f0f\u4fee\u6539,\u8acb\u591a\u591a\u898b\u8ad2\uff5e"),(0,l.kt)("h2",{id:"what-is-ansible"},"what is ansible"),(0,l.kt)("p",null,"ansible \u662f\u7d44\u614b\u7ba1\u7406\u5de5\u5177 Configuration management Tool ,\u542b\u6709\u81ea\u52d5\u5316\u5de5\u5177,\u914d\u7f6e\u7cfb\u7d71\u3001\u90e8\u7f72\u8edf\u4ef6\u548c\u7de8\u6392\u66f4\u9ad8\u7d1a\u7684 IT \u4efb\u52d9\uff0c\u4f8b\u5982\u6301\u7e8c\u90e8\u7f72\u6216\u96f6\u505c\u6a5f\u6efe\u52d5\u66f4\u65b0."),(0,l.kt)("p",null,"\u4f7f\u7528 OpenSSH \u53bb\u7ba1\u7406\u6a5f\u5668.\u652f\u63f4 Kerberos\u3001LDAP \u548c\u5176\u4ed6\u96c6\u4e2d\u5f0f\u8eab\u4efd\u9a57\u8b49\u7ba1\u7406\u7cfb\u7d71."),(0,l.kt)("p",null,"Ansible \u662f Python \u9663\u71df\u7684\u7d44\u614b\u7ba1\u7406\u5de5\u5177,\u4e0d\u7528\u5e6b\u6bcf\u53f0\u6a5f\u5668 (instance) \u9810\u8f09 agent \uff0c\u53ea\u8981\u6709 SSH \u548c Python \u5c31\u53ef\u4ee5\u57f7\u884c."),(0,l.kt)("p",null,"\u5b98\u7db2\u7684\u8cc7\u8a0a\u5f88\u591a,\u5c0d\u65bc\u521d\u5b78\u8005\u4f86\u8aaa,\u6700\u91cd\u8981\u7684\u662f",(0,l.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/getting_started/index.html"},"Getting started with Ansible"),"\u4ee5\u53ca\u5176\u5e95\u4e0b\u5230\u5c0f\u7ae0\u7bc0,\u9019\u908a\u4e3b\u8981\u662f\u8b1b\u57fa\u790e\u89c0\u5ff5\uff01"),(0,l.kt)("h2",{id:"ansible-concepts"},"Ansible concepts"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u57fa\u672c\u4e0a,RD \u7684\u7fd2\u6163\u6703\u662f\u9700\u8981\u7684\u5de5\u5177\u5148\u4e0a\u7db2\u627e\u8f2a\u5b50,\u627e\u4e0d\u5230\u7684\u81ea\u5df1\u5beb,IT \u4eba\u54e1\u7684\u7fd2\u6163\u5c31\u662f\u627e\u8f2a\u5b50,\u4e26\u900f\u904e\u8f2a\u5b50\u5beb\u597d\u7684\u7684\u8a2d\u5b9a\u6a94\u53bb\u7ba1\u7406\u4efb\u4f55\u4e8b\u60c5,\u6240\u4ee5\u8981\u7fd2\u6163\u67e5\u5b98\u7db2\u8cc7\u6599\u624d\u884c,\u4e5f\u8981\u4e86\u89e3\u4e00\u96bb\u7a0b\u5f0f\u7e3d\u5171\u6709\u54ea\u4e9b\u8a2d\u5b9a\u6a94,\u53ca\u8a2d\u5b9a\u6a94\u53ef\u80fd\u51fa\u73fe\u7684\u4f4d\u7f6e\uff01")),(0,l.kt)("h3",{id:"\u74b0\u5883\u540d\u8a5e\u5b9a\u7fa9"},"\u74b0\u5883\u540d\u8a5e\u5b9a\u7fa9"),(0,l.kt)("p",null,"\u57fa\u672c\u74b0\u5883\u9700\u8981\u8981\u6709\u4ee5\u4e0b\u5e7e\u9ede"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a7\u5236\u7bc0\u9ede (Control node)\uff1aAnsible \u63a7\u5236\u4e3b\u6a5f\u7aef,\u5b89\u88dd\u6709 Ansible \u7684\u7cfb\u7d71\u3002\u60a8\u53ef\u4ee5\u5728\u63a7\u5236\u7bc0\u9ede\u4e0a\u57f7\u884c Ansible \u6307\u4ee4\uff0c\u4f8b\u5982 ansible \u6216 ansible-inventory,\u4e3b\u8981\u900f\u904e openssh \u5230 Managed node.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u88ab\u7ba1\u7406\u7bc0\u9ede (Managed node)\uff1aAnsible \u5ba2\u6236\u7aef,\u7531 Ansible \u63a7\u5236\u4e3b\u6a5f\u7aef\u6240\u63a7\u5236\u7684\u9060\u7aef\u7cfb\u7d71\u6216\u4e3b\u6a5f,\u900f\u904e Control node \u4ee5 SSH \u65b9\u5f0f\u8fd1\u4f86\u9019\u53f0\u6a5f\u5668\u3002"))),(0,l.kt)("h3",{id:"\u6587\u6a94\u540d\u8a5e\u5b9a\u7fa9"},"\u6587\u6a94\u540d\u8a5e\u5b9a\u7fa9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5eab\u5b58\u6e05\u55ae (Inventory)\uff1a\u4e00\u500b\u6309\u908f\u8f2f\u5206\u985e\u7684\u88ab\u7ba1\u7406\u7bc0\u9ede\u5217\u8868\u3002\u60a8\u5728\u63a7\u5236\u7bc0\u9ede\u4e0a\u5efa\u7acb\u5eab\u5b58\u6e05\u55ae\uff0c\u4ee5\u4fbf\u63cf\u8ff0\u4e3b\u6a5f\u90e8\u7f72\u60c5\u6cc1\u7d66 Ansible,\u8209\u4f8b\u4f86\u8aaa,\u4f60\u7684\u4e00\u500b\u670d\u52d9\u53ef\u80fd\u7531\u591a\u53f0\u6a5f\u5668\u7d44\u6210,Inventory \u65b9\u4fbf\u4f60\u4e00\u6b21\u64cd\u4f5c\u9019\u7fa4\u6a5f\u5668\u5011.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Playbooks: \u4e00\u500b playbook \u53ef\u4ee5\u7531\u4e00\u5230\u591a\u500b plays \u7d44\u6210,\u5c07\u7ba1\u7406\u7bc0\u9ede\uff08\u4e3b\u6a5f\uff09\u5c0d\u61c9\u81f3\u4efb\u52d9\u3002Playbooks \u5305\u542b\u8b8a\u6578\u3001\u89d2\u8272\u548c\u4efb\u52d9\u7684\u6709\u5e8f\u5217\u8868\uff0c"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Plays: Plays \u662f Ansible \u57f7\u884c\u7684\u4e3b\u8981\u4e0a\u4e0b\u6587\uff0c\u9019\u500b playbook \u7269\u4ef6\u5c07\u88ab\u7ba1\u7406\u7684\u7bc0\u9ede\uff08\u4e3b\u6a5f\uff09\u5c0d\u61c9\u81f3\u4efb\u52d9\u3002Play \u5305\u542b\u8b8a\u6578\u3001\u89d2\u8272\u548c\u4efb\u52d9\u7684\u6709\u5e8f\u5217\u8868\uff0c\u53ef\u4ee5\u91cd\u8907\u57f7\u884c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Roles: Roles \u662f\u4e00\u7a2e\u6709\u9650\u7684\u53ef\u91cd\u8907\u4f7f\u7528\u7684 Ansible \u5de5\u5177,\u53ef\u4ee5\u7d66\u591a\u500b playbook \u91cd\u8907\u7528")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Tasks: \u6703\u5957\u7528\u65bc\u88ab\u7ba1\u7406\u4e3b\u6a5f\u7684"\u64cd\u4f5c"\u3002')))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Handlers: Handler \u662f Task \u7684\u4e00\u7a2e\u7279\u6b8a\u5f62\u5f0f\uff0c\u53ea\u6709\u5728\u5148\u524d\u7684 Task \u767c\u51fa"changed"\u72c0\u614b\u7684\u901a\u77e5\u6642\u624d\u6703\u57f7\u884c\u3002')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Modules: Ansible \u63d0\u4f9b\u7684 function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Plugins: \u63d2\u4ef6\u662f\u64f4\u5c55 Ansible \u6838\u5fc3\u529f\u80fd\u7684\u4ee3\u78bc\u7247\u6bb5\uff0c\u5b83\u5011\u53ef\u4ee5\u63a7\u5236\u5982\u4f55\u9023\u63a5\u5230\u53d7\u7ba1\u7bc0\u9ede\uff08\u9023\u63a5\u63d2\u4ef6\uff09\uff0c\u64cd\u4f5c\u6578\u64da\uff08\u904e\u6ffe\u63d2\u4ef6\uff09\u751a\u81f3\u63a7\u5236\u63a7\u5236\u53f0\u4e2d\u986f\u793a\u7684\u5167\u5bb9\uff08\u56de\u8abf\u63d2\u4ef6\uff09")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Collections:\u4e00\u7a2e\u4ee5 Playbook\u3001\u89d2\u8272\u3001\u6a21\u7d44\u548c\u63d2\u4ef6\u7b49\u5f62\u5f0f\u5206\u767c Ansible \u5167\u5bb9\u7684\u683c\u5f0f\u3002\u60a8\u53ef\u4ee5\u901a\u904e Ansible Galaxy \u5b89\u88dd\u548c\u4f7f\u7528\u96c6\u5408\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"AAP: Ansible \u81ea\u52d5\u5316\u5e73\u53f0\u7684\u7c21\u7a31\u3002\u9019\u662f\u4e00\u7a2e\u5305\u542b\u4f01\u696d\u7d1a\u529f\u80fd\u7684\u7522\u54c1\uff0c\u4e26\u6574\u5408\u4e86 Ansible \u751f\u614b\u7cfb\u7d71\u4e2d\u7684\u8a31\u591a\u5de5\u5177\uff1aansible-core\u3001awx\u3001galaxyNG \u7b49\u7b49\u3002"))))}b.isMDXComponent=!0}}]);