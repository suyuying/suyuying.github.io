"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[7229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"acme.sh + Cloudflare \u7533\u8acb\u6191\u8b49",description:"\u8b1b\u89e3acme\u4f7f\u7528\u65b9\u5f0f,\u53e6\u5916\u9806\u4fbf\u8907\u7fd2\u4e00\u4e0b\u4ed6\u7d66\u7684\u8cc7\u8a0a\u4ee5\u53ca\u6191\u8b49\u7d44\u6210\uff01",image:"https://github.com/suyuying.png",authors:"suyuying",tags:["ssl","acme.sh"]},i=void 0,o={permalink:"/blog/2023/08/08/Others/acme-apply-certificate",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Others/2023-08-08-acme-apply-certificate.md",source:"@site/blog/Others/2023-08-08-acme-apply-certificate.md",title:"acme.sh + Cloudflare \u7533\u8acb\u6191\u8b49",description:"\u8b1b\u89e3acme\u4f7f\u7528\u65b9\u5f0f,\u53e6\u5916\u9806\u4fbf\u8907\u7fd2\u4e00\u4e0b\u4ed6\u7d66\u7684\u8cc7\u8a0a\u4ee5\u53ca\u6191\u8b49\u7d44\u6210\uff01",date:"2023-08-08T00:00:00.000Z",formattedDate:"August 8, 2023",tags:[{label:"ssl",permalink:"/blog/tags/ssl"},{label:"acme.sh",permalink:"/blog/tags/acme-sh"}],readingTime:3.21,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"acme.sh + Cloudflare \u7533\u8acb\u6191\u8b49",description:"\u8b1b\u89e3acme\u4f7f\u7528\u65b9\u5f0f,\u53e6\u5916\u9806\u4fbf\u8907\u7fd2\u4e00\u4e0b\u4ed6\u7d66\u7684\u8cc7\u8a0a\u4ee5\u53ca\u6191\u8b49\u7d44\u6210\uff01",image:"https://github.com/suyuying.png",authors:"suyuying",tags:["ssl","acme.sh"]},prevItem:{title:"Delete log file than recreate log file, will log still write into it? Besides,compare with logrotate",permalink:"/blog/2023/08/09/linux-server/delete-log-file-than-recreate-log-file"},nextItem:{title:"set the priority order of the network services through linux cmd",permalink:"/blog/2023/07/31/Others/set-the-priority-order-of-network-through-cmd-in-linux"}},c={authorsImageUrls:[void 0]},s=[{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88ddacme.sh")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://get.acme.sh | sh\n")),(0,r.kt)("p",null,"\u5b89\u88dd\u5b8c\u4e4b\u5f8c\u6703\u5728 root \u76ee\u9304\u4e0b\u7522\u751f\u4e00\u500b .acme.sh \u8cc7\u6599\u593e,\u4e5f\u53ef\u4ee5\u5f9e\u5b98\u65b9git hub \u628a\u6771\u897f\u62c9\u4e0b\u4f86."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"set email")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp /root/.acme.sh/acme.sh /sbin/\nacme.sh --register-account -m uremail@gmail.com\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8a2d\u5b9acloudflare token\n\u57fa\u672c\u4e0aacme\u652f\u63f4\u5f88\u591a\u5bb6api\u7533\u8acb,\u4e00\u822c\u4f86\u8aaa\u5c31\u7528\u65e2\u6709\u7684\u5c31\u597d.\u4ee5cloudflare\u4f86\u8aaa,\u9700\u8981\u7522\u51fa\u7684token\u662f\u9700\u8981\u6709\u80fd\u7de8\u8f2fdns\u7d00\u9304\u7684."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5148\u5230",(0,r.kt)("a",{parentName:"li",href:"https://dash.cloudflare.com/profile/api-tokens"},"\u8a72\u9023\u7d50")),(0,r.kt)("li",{parentName:"ul"},"\u9078",(0,r.kt)("inlineCode",{parentName:"li"},"\u5efa\u7acbtoken")),(0,r.kt)("li",{parentName:"ul"},"\u9078",(0,r.kt)("inlineCode",{parentName:"li"},"\u7de8\u8f2f\u5340\u57dfdns"),",",(0,r.kt)("inlineCode",{parentName:"li"},"\u5ba2\u6236\u7aef IP \u4f4d\u5740\u7be9\u9078"),"\u9019\u908a\u53ef\u4ee5\u9650\u5b9a\u53ef\u64cd\u4f5cip,",(0,r.kt)("inlineCode",{parentName:"li"},"\u5340\u57df\u8cc7\u6e90"),"\u53ef\u4ee5\u9078\u6307\u5b9a\u57df\u540d,\u6ce8\u610f\u6b0a\u9650\u9700\u9078",(0,r.kt)("inlineCode",{parentName:"li"},"DNS"),"\u4e26\u6388\u4e88",(0,r.kt)("inlineCode",{parentName:"li"},"\u7de8\u8f2f"),",",(0,r.kt)("inlineCode",{parentName:"li"},"token"),"\u6548\u671f\u4f9d\u64da\u516c\u53f8\u898f\u7bc4"),(0,r.kt)("li",{parentName:"ul"},"\u5168\u90e8\u8a2d\u5b9a\u73a9\u6309\u4e0b\u4e00\u6b65,\u7136\u5f8c\u8907\u88fdtoken , ex ",(0,r.kt)("inlineCode",{parentName:"li"},"R4O6rqd3hvGzXXXXXXXXXX")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u56de\u5230\u4e3b\u6a5f\u4f7f\u7528\u4e00\u4e0b\u6307\u4ee4\u7522\u51fa\u6191\u8b49,\u5982\u679c\u4f60\u662f\u7528global key\u8981\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"CF_Key"),"\u7528token\u5247\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"CF_Token"),",\u5efa\u8b70\u7528token\u9650\u7e2e\u6b0a\u9650\uff01"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export  CF_Token="R4O6rqd3hvGzXXXXXXXXXX"\nacme.sh --issue --dns dns_cf -d  "*.948787.store"  -d "948787.store"\n')),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u6c92\u6709\u7528argument\u6307\u4ee4\u6307\u5b9a\u6191\u8b49\u7522\u751f\u7684\u4f4d\u7f6e,\u4ed6\u9810\u8a2d\u6703\u8ddf\u8457\u4f60acme.sh\u7684\u4f4d\u7f6e\u7522\u5728\u540c\u4e00\u5c64\u8cc7\u6599\u593e.\u9019\u908a\u63d0\u4f9b\u6307\u5b9a\u4f4d\u7f6e\u7684\u6307\u4ee4\uff01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'/root/.acme.sh/acme.sh --issue --dns dns_cf -d "*.YourDomainName.com" -d "YourDomainName.com" --log \\\n--cert-file /etc/nginx/ssl/cert.crt \\              # \u8907\u88fd\u6191\u8b49\u5230\u6307\u5b9a\u7684\u76ee\u9304\u4e0b\u9762\n--key-file /etc/nginx/ssl/key.key \\                # \u8907\u88fd\u6191\u8b49\u5230\u6307\u5b9a\u7684\u76ee\u9304\u4e0b\u9762\n--fullchain-file /etc/nginx/ssl/fullchain.crt \\    # \u8907\u88fd\u6191\u8b49\u5230\u6307\u5b9a\u7684\u76ee\u9304\u4e0b\u9762\n--ca-file /etc/nginx/ssl/ca.crt \\                  # \u8907\u88fd\u6191\u8b49\u5230\u6307\u5b9a\u7684\u76ee\u9304\u4e0b\u9762\n--reloadcmd "systemctl reload nginx"               # \u5982\u679c\u662f\u7528 Apache \u8acb\u81ea\u5df1\u4fee\u6539\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u6211\u70ba\u4f8b,\u5c31\u6703\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"/root/.acme.sh"),"\u62ff\u5230'*.948787.store_ecc'\u9019\u500bfolder,folder\u7d50\u69cb\u5982\u4e0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"*.948787.store_ecc\n\u251c\u2500\u2500 *.948787.store.cer\n\u251c\u2500\u2500 *.948787.store.conf\n\u251c\u2500\u2500 *.948787.store.csr\n\u251c\u2500\u2500 *.948787.store.csr.conf\n\u251c\u2500\u2500 *.948787.store.key\n\u251c\u2500\u2500 ca.cer\n\u2514\u2500\u2500 fullchain.cer\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"*.948787.store.cer"),"\u662f\u653e\u6211\u9019\u500b\u57df\u540d\u7684\u516c\u9470"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"*.948787.store.conf"),"\u653eacme.sh\u4e4b\u5f8c\u4f86renew\u7684conf"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"*.948787.store.csr"),"\u52a0\u5bc6\u6587\u4ef6,\u7528\u4ee5\u5411CA\u7533\u8acb\u6191\u8b49\u7684\u7533\u8acb\u55ae"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"*.948787.store.key"),"\u4f60\u7684\u6191\u8b49\u7684private key."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ca.cer"),"\u6253\u958b\u4f86\u88e1\u9762\u53ef\u80fd\u6703\u6709\u4e00\u500b\u4ee5\u4e0a\u7684\u6191\u8b49,\u5206\u5225\u662f\u4f60\u7684\u4e2d\u7e7c\u6191\u8b49\u4ee5\u53ca\u6839\u6191\u8b49\u6216\u8005\u53ea\u6709\u6839\u6191\u8b49,\u9019\u8981\u4f9d\u64da\u7c3d\u7f72\u55ae\u4f4d\uff01"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"fullchain.cer"),"\u6253\u958b\u4f86\u88e1\u9762\u6703\u81f3\u5c11\u6709\u5169\u500b\u4ee5\u4e0a\u6191\u8b49,\u5206\u5225\u662f\u4f60\u6191\u8b49\u4ee5\u53ca\u6839\u6191\u8b49,\u6216\u8005\u4e5f\u6703\u6709\u4e2d\u7e7c\u6191\u8b49\u6191\u8b49,\u9019\u8981\u4f9d\u64da\u7c3d\u7f72\u55ae\u4f4d\uff01\u7c21\u55ae\u4f86\u8aaa,\u6240\u6709\u7c3d\u767c\u904e\u7a0b\u90fd\u6703\u653e\u5728\u9019\uff01")),(0,r.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,r.kt)("p",null,"\u900f\u904eacme.sh\u53ef\u4ee5\u7bc0\u7701\u6191\u8b49\u7533\u8acb\u7684\u8cbb\u7528\u8ddf\u5de5\u6642,\u8fd1\u4e00\u6b65\u4f7f\u7528\u6848\u4f8b\u53ca\u6307\u4ee4\u53ef\u4ee5\u53c3\u8003\u4ee5\u4e0b\u8cc7\u6e90\uff01"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u53c3\u8003\u8cc7\u6599\u4f86\u6e90:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://xn--wiki-k24c.freedomstu.com/books/%E7%B6%B2%E7%AB%99%E6%9E%B6%E8%A8%AD%E8%A8%98%E9%8C%84/page/acmesh-cloudflare-%E8%87%AA%E5%8B%95%E6%9B%B4%E6%96%B0-lets-encrypt-%E6%9C%8D%E5%8B%99"},"acme.sh + Cloudflare \u81ea\u52d5\u66f4\u65b0 Let's Encrypt \u670d\u52d9")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.cyberciti.biz/faq/issue-lets-encrypt-wildcard-certificate-with-acme-sh-and-cloudflare-dns/"},"How to issue Let\u2019s Encrypt wildcard certificate with acme.sh and Cloudflare DNS")))))}u.isMDXComponent=!0}}]);