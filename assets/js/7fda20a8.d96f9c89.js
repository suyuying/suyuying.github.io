"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[6443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,g=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return n?o.createElement(g,a(a({ref:t},m),{},{components:n})):o.createElement(g,a({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={title:"use git submodule in gitlab CI to do ssl-check",description:"\u63d0\u4f9b\u6aa2\u67e5\u8b49\u66f8\u5230\u671f\u7684\u7a0b\u5f0f,\u4ee5\u53ca\u76f8\u95dcgitlab CI\u8a2d\u5b9a.\u5728\u81ea\u5df1\u53e6\u5916\u5beb\u6aa2\u67e5\u8b49\u66f8\u5230\u671f\u7684\u7a0b\u5f0f\u6642,\u5c31\u60f3\u8fa6\u6cd5\u53bb\u6539\u5584\u9019\u500b\u53ef\u8b80\u6027\u7684\u554f\u984c,\u56e0\u6b64\u767c\u73fe git submodule \u662f\u4e00\u500b\u4e0d\u932f\u7684\u8655\u7406\u65b9\u5f0f.\u904e\u7a0b\u60f3\u6cd5\u5982\u4e0b1. \u900f\u904e gitlab CI,\u5728\u6aa2\u6e2c\u7a0b\u5f0f\u7684 repo,\u900f\u904e git submodule \u6293\u53d6\u4e3b repo \u7684\u57df\u540d\u6a94\u6848,\u4e26\u7528\u7a0b\u5f0f\u6aa2\u67e5.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["gitlab CI/CD","CICD","git submodule","ssl-check"]},a=void 0,s={unversionedId:"gitlab CICD/2023-04-24-use-git-submodule-in-gitlab-ci",id:"gitlab CICD/2023-04-24-use-git-submodule-in-gitlab-ci",title:"use git submodule in gitlab CI to do ssl-check",description:"\u63d0\u4f9b\u6aa2\u67e5\u8b49\u66f8\u5230\u671f\u7684\u7a0b\u5f0f,\u4ee5\u53ca\u76f8\u95dcgitlab CI\u8a2d\u5b9a.\u5728\u81ea\u5df1\u53e6\u5916\u5beb\u6aa2\u67e5\u8b49\u66f8\u5230\u671f\u7684\u7a0b\u5f0f\u6642,\u5c31\u60f3\u8fa6\u6cd5\u53bb\u6539\u5584\u9019\u500b\u53ef\u8b80\u6027\u7684\u554f\u984c,\u56e0\u6b64\u767c\u73fe git submodule \u662f\u4e00\u500b\u4e0d\u932f\u7684\u8655\u7406\u65b9\u5f0f.\u904e\u7a0b\u60f3\u6cd5\u5982\u4e0b1. \u900f\u904e gitlab CI,\u5728\u6aa2\u6e2c\u7a0b\u5f0f\u7684 repo,\u900f\u904e git submodule \u6293\u53d6\u4e3b repo \u7684\u57df\u540d\u6a94\u6848,\u4e26\u7528\u7a0b\u5f0f\u6aa2\u67e5.",source:"@site/docs/gitlab CICD/2023-04-24-use-git-submodule-in-gitlab-ci.md",sourceDirName:"gitlab CICD",slug:"/gitlab CICD/2023-04-24-use-git-submodule-in-gitlab-ci",permalink:"/docs/gitlab CICD/2023-04-24-use-git-submodule-in-gitlab-ci",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gitlab CICD/2023-04-24-use-git-submodule-in-gitlab-ci.md",tags:[{label:"gitlab CI/CD",permalink:"/docs/tags/gitlab-ci-cd"},{label:"CICD",permalink:"/docs/tags/cicd"},{label:"git submodule",permalink:"/docs/tags/git-submodule"},{label:"ssl-check",permalink:"/docs/tags/ssl-check"}],version:"current",frontMatter:{title:"use git submodule in gitlab CI to do ssl-check",description:"\u63d0\u4f9b\u6aa2\u67e5\u8b49\u66f8\u5230\u671f\u7684\u7a0b\u5f0f,\u4ee5\u53ca\u76f8\u95dcgitlab CI\u8a2d\u5b9a.\u5728\u81ea\u5df1\u53e6\u5916\u5beb\u6aa2\u67e5\u8b49\u66f8\u5230\u671f\u7684\u7a0b\u5f0f\u6642,\u5c31\u60f3\u8fa6\u6cd5\u53bb\u6539\u5584\u9019\u500b\u53ef\u8b80\u6027\u7684\u554f\u984c,\u56e0\u6b64\u767c\u73fe git submodule \u662f\u4e00\u500b\u4e0d\u932f\u7684\u8655\u7406\u65b9\u5f0f.\u904e\u7a0b\u60f3\u6cd5\u5982\u4e0b1. \u900f\u904e gitlab CI,\u5728\u6aa2\u6e2c\u7a0b\u5f0f\u7684 repo,\u900f\u904e git submodule \u6293\u53d6\u4e3b repo \u7684\u57df\u540d\u6a94\u6848,\u4e26\u7528\u7a0b\u5f0f\u6aa2\u67e5.",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["gitlab CI/CD","CICD","git submodule","ssl-check"]},sidebar:"tutorialSidebar",previous:{title:"difference between read_repository and read_registry in gitlab",permalink:"/docs/gitlab CICD/2023-04-07-difference-between-read-repository-and-read-registry"},next:{title:"DNS Poisoning vs Domain Hijacking,Brief summary",permalink:"/docs/linux-server/2023-03-07-dns-pollution-hijack"}},l={},c=[{value:"what is git submodule",id:"what-is-git-submodule",level:2},{value:"when to use",id:"when-to-use",level:3},{value:"steps",id:"steps",level:2},{value:"1. \u5728\u7a0b\u5f0f repo \u5148 git submodule \u6293 \u4e3b\u6a94\u6848 repo",id:"1-\u5728\u7a0b\u5f0f-repo-\u5148-git-submodule-\u6293-\u4e3b\u6a94\u6848-repo",level:3},{value:"2. \u4fee\u6539.gitmodules,\u6539\u7528\u76f8\u5c0d\u4f4d\u7f6e",id:"2-\u4fee\u6539gitmodules\u6539\u7528\u76f8\u5c0d\u4f4d\u7f6e",level:3},{value:"3. \u5efa\u7acb CI",id:"3-\u5efa\u7acb-ci",level:3},{value:"4.git push,DONe.",id:"4git-pushdone",level:3},{value:"\u6aa2\u67e5\u8b49\u66f8\u5230\u671f\u4e3b\u7a0b\u5f0f\u78bc",id:"\u6aa2\u67e5\u8b49\u66f8\u5230\u671f\u4e3b\u7a0b\u5f0f\u78bc",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-git-submodule"},"what is git submodule"),(0,i.kt)("p",null,"\u5c07\u4e00\u500b Git \u5b58\u5132\u5eab\u4f5c\u70ba\u53e6\u4e00\u500b\u5b58\u5132\u5eab\u7684\u5b50\u6a21\u7d44\u9032\u884c\u7ba1\u7406\u3002\u4e5f\u5c31\u662f\u8aaa\u53ef\u4ee5\u5728\u4e00\u500b git repo \u5e95\u4e0b,\u540c\u6642\u7ba1\u7406\u591a\u500b git repo,\u53ef\u4ee5\u5728\u4e3b\u4ee3\u78bc\u5eab\u4e2d\u8f15\u9b06\u5730\u7ba1\u7406\u548c\u66f4\u65b0\u5b50\u6a21\u7d44. \u8a73\u7d30\u7684\u4ecb\u7d39\u53ef\u4ee5\u770b- ",(0,i.kt)("a",{parentName:"p",href:"https://blog.kennycoder.io/2020/06/14/Git-submodule-%E4%BD%BF%E7%94%A8%E6%95%99%E5%AD%B8/"},"Git - submodule \u4f7f\u7528\u6559\u5b78")," \uff01"),(0,i.kt)("h3",{id:"when-to-use"},"when to use"),(0,i.kt)("p",null,"\u6211\u5728\u5de5\u4f5c\u4e0a\u9047\u5230\u7684\u60c5\u6cc1\u662f\u6709\u4e00\u500b\u65e5\u5e38\u7dad\u8b77\u7684\u4e3b repo,\u5176\u4e2d\u6709\u4e00\u96bb\u7ba1\u7406\u57df\u540d\u7684\u6a94\u6848\u9700\u8981\u7a0b\u5f0f\u5b9a\u671f\u53bb review \u770b\u57df\u540d\u8ddf\u6191\u8b49\u591a\u4e45\u5230\u671f.\u76ee\u524d\u65b9\u6cd5\u662f\u900f\u904e\u5efa\u7acb\u4e00\u500b git repo \u5167\u542b\u6709\u6aa2\u67e5\u57df\u540d\u7684\u7a0b\u5f0f,\u5efa\u7acb build image \u7684 CI,\u6bcf\u7576\u7a0b\u5e02\u6709\u6539\u52d5\u6703\u628a\u7a0b\u5f0f\u6253\u5305\u505a\u6210 image.\u7136\u5f8c\u5728\u4e3b repo \u90a3\u908a\u5247\u6703\u62c9\u53d6\u8a72 image \u53bb\u505a\u57df\u540d\u7684\u6aa2\u67e5.\u904e\u7a0b\u5982\u4e0b:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5b50 repo \u66f4\u65b0\u7a0b\u5f0f\u4e26 CI \u5efa\u7acb image"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6b65\u9a5f 1 \u5efa\u7acb\u7684\u65b0 image,\u65bc\u4e3b repo \u900f\u904e CI \u5b9a\u6642\u4f7f\u7528\u6700\u65b0\u7684 image \u57f7\u884c\u7a0b\u5f0f\u6aa2\u67e5.")),(0,i.kt)("p",null,"\u9019\u500b\u65b9\u5f0f\u6c92\u5565\u554f\u984c,\u53ea\u662f\u5c0d\u65bc\u4e00\u4e9b\u65b0\u4eba\u6216\u521d\u6b21\u770b\u5230\u9019\u500b\u67b6\u69cb\u7684\u4eba\u800c\u8a00,\u6703\u89ba\u5f97\u4e32\u9019\u5169\u5c64\u5f88\u8907\u96dc."),(0,i.kt)("p",null,"\u6240\u4ee5\u5f8c\u4f86\u6211\u5728\u81ea\u5df1\u53e6\u5916\u5beb\u6aa2\u67e5\u8b49\u66f8\u5230\u671f\u7684\u7a0b\u5f0f\u6642,\u5c31\u60f3\u8fa6\u6cd5\u53bb\u6539\u5584\u9019\u500b\u53ef\u8b80\u6027\u7684\u554f\u984c,\u56e0\u6b64\u767c\u73fe git submodule \u662f\u4e00\u500b\u4e0d\u932f\u7684\u8655\u7406\u65b9\u5f0f.\n\u904e\u7a0b\u60f3\u6cd5\u5982\u4e0b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u900f\u904e CI,\u5728\u6aa2\u6e2c\u7a0b\u5f0f\u7684 repo,\u900f\u904e git submodule \u6293\u53d6\u4e3b repo \u7684\u57df\u540d\u6a94\u6848,\u4e26\u7528\u7a0b\u5f0f\u6aa2\u67e5.")),(0,i.kt)("h2",{id:"steps"},"steps"),(0,i.kt)("h3",{id:"1-\u5728\u7a0b\u5f0f-repo-\u5148-git-submodule-\u6293-\u4e3b\u6a94\u6848-repo"},"1. \u5728\u7a0b\u5f0f repo \u5148 git submodule \u6293 \u4e3b\u6a94\u6848 repo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#git submodule add <remote repository> <local path>\ngit submodule add git@gitlab.dongg.com:it/office_sop.git\n")),(0,i.kt)("h3",{id:"2-\u4fee\u6539gitmodules\u6539\u7528\u76f8\u5c0d\u4f4d\u7f6e"},"2. \u4fee\u6539.gitmodules,\u6539\u7528\u76f8\u5c0d\u4f4d\u7f6e"),(0,i.kt)("p",null,"\u4e0d\u6539\u6703\u5831\u932f Docker: error cannot run ssh: No such file or directory,\u56e0\u70ba\u7528\u76f8\u5c0d\u4f4d\u7f6e,\u9019\u908a\u4e5f\u63d0\u4f9b\u6211 repo \u7db2\u5740\u65b9\u4fbf\u6bd4\u5c0d.\u7db2\u5740: ",(0,i.kt)("a",{parentName:"p",href:"mailto:git@gitlab.dongg.com"},"git@gitlab.dongg.com"),":ford/domanininfocheck.git"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title=.gitmodules"',title:'.gitmodules"'},'[submodule "office_sop"]\n    path = office_sop\n    url = ../../it/office_sop.git\n')),(0,i.kt)("h3",{id:"3-\u5efa\u7acb-ci"},"3. \u5efa\u7acb CI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},'stages:\n  - deploy\nvariables:\n  TZ: Asia/Taipei\n\nrunCodeToTg:\n  stage: deploy\n  image:\n    name: python:3.9-slim\n  variables:\n    GIT_SUBMODULE_FORCE_HTTPS: "true"\n    GIT_SUBMODULE_UPDATE_FLAGS: --remote\n    GIT_SUBMODULE_STRATEGY: recursive\n    GIT_SUBMODULE_DEPTH: 1\n  only:\n    - schedules\n    - web\n  tags:\n    - docker\n  script:\n    - pip install --no-cache-dir -r ./requirement.txt\n    - python3 main.py\n    - ls office_sop\n    - cd office_sop\n# \u9019\u662f\u6211\u7a0b\u5f0f\u6bb5\u57f7\u884c\u932f\u8aa4\u6703\u5831\u932f\u7684log,\u900f\u904eartifacts\u53ef\u4ee5\u62ff\u5230\u8cc7\u6599.\n  artifacts:\n    paths:\n      - domain.err.log\n\n')),(0,i.kt)("p",null,"\u9019\u88e1\u9762\u6700\u91cd\u8981\u7684\u662f\u9019\u56db\u500b\u8b8a\u6578"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'GIT_SUBMODULE_FORCE_HTTPS: "true" ,\u5c07\u5b50\u6a21\u7d44\u7684 URL \u5f37\u5236\u8a2d\u7f6e\u70ba HTTPS'),(0,i.kt)("li",{parentName:"ul"},"GIT_SUBMODULE_UPDATE_FLAGS: --remote,\u4f7f\u7528\u9060\u7a0b\u8ddf\u8e2a\u5206\u652f\u66f4\u65b0\u5b50\u6a21\u7d44\u3002\u9019\u5c07\u6703\u62c9\u53d6\u9060\u7a0b\u5b58\u5132\u5eab\u4e2d\u5b50\u6a21\u7d44\u7684\u6700\u65b0\u7248\u672c,\u4e0d\u52a0\u9019\u6bb5\u4f60\u6703\u767c\u73fe\u4f60\u62c9\u5230\u7684\u90fd\u662f\u7576\u521d git submodule add \u7684 commit \u865f"),(0,i.kt)("li",{parentName:"ul"},"GIT_SUBMODULE_STRATEGY: recursive,\u7576\u66f4\u65b0\u5b50\u6a21\u7d44\u6642\uff0c\u4f7f\u7528\u905e\u6b78\u7b56\u7565\uff0c\u5373\u905e\u6b78\u5730\u66f4\u65b0\u6240\u6709\u5b50\u6a21\u7d44\u7684\u5b50\u6a21\u7d44\u3002"),(0,i.kt)("li",{parentName:"ul"},"GIT_SUBMODULE_DEPTH: 1,\u9650\u5236\u5b50\u6a21\u7d44\u66f4\u65b0\u7684\u6df1\u5ea6\u3002")),(0,i.kt)("p",null,"\u4e3b\u8981\u662f\u6ce8\u610f ",(0,i.kt)("highlight",{color:"#25c2a0"},"GIT_SUBMODULE_UPDATE_FLAGS")," \u6700\u597d\u8981\u8a2d\u5b9a,\u4e0d\u52a0\u9019\u6bb5\u4f60\u6703\u767c\u73fe\u4f60\u62c9\u5230\u7684\u90fd\u662f\u7576\u521d git commit \u865f."),(0,i.kt)("h3",{id:"4git-pushdone"},"4.git push,DONe."),(0,i.kt)("h2",{id:"\u6aa2\u67e5\u8b49\u66f8\u5230\u671f\u4e3b\u7a0b\u5f0f\u78bc"},"\u6aa2\u67e5\u8b49\u66f8\u5230\u671f\u4e3b\u7a0b\u5f0f\u78bc"),(0,i.kt)("p",null,"\u6aa2\u6e2c\u8b49\u66f8\u5230\u671f\u7684\u7a0b\u5f0f\u78bc,\u53c3\u8003\u81ea",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/gdamjan/55a8b9eec6cf7b771f92021d93b87b2c"},"gdamjan")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\u6aa2\u6e2c\u8b49\u66f8\u5230\u671f\u7684\u7a0b\u5f0f\u78bc"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="main.py"',title:'"main.py"'},"# -*- encoding: utf-8 -*-\n# requires a recent enough python with idna support in socket\n# pyopenssl, cryptography and idna\nimport time\n\nimport requests\nfrom loguru import logger\nfrom datetime import datetime\nfrom datetime import timedelta\nfrom OpenSSL import SSL\nfrom cryptography import x509\nfrom cryptography.x509.oid import NameOID\nimport idna\nimport concurrent.futures\nfrom socket import socket\nfrom collections import namedtuple\nimport re\nimport sys\n# \u4e3b\u7a0b\u5f0f\u662f\u57f7\u884cget_certificate \u53d6\u5f97domain\u76f8\u95dc\u8cc7\u8a0a\uff0c\u4e4b\u5f8c\u628a\u8cc7\u8a0a\u5370\u51fa\uff08\u4e32print_basic_info\uff09\n# print_basic_info\u6703\u53bb\u57f7\u884cget_alt_names (SAN: ['*.don99.com', 'don87.com'])\n# \u57f7\u884cget_common_name \u53d6\u5f97 commonName: *.don99.com\n# \u57f7\u884cget_issuer\u53d6\u5f97\u6191\u8b49\u767c\u884c\u5546\n# \u6191\u8b49\u6709\u95dc\u8cc7\u8a0a\u7684\u53d6\u5f97\uff0c\u90fd\u662f\u900f\u904eget_certificate\u4f7f\u7528idna socket SSL\n# \uff08\u9019\u908afunction\u8ddf\u5340\u57df\u8b8a\u6578\u547d\u540d\u662f\u63a1\u7528 _\u5340\u9694\uff0c\u5168\u7652\u63a1\u7528\u99dd\u5cf0\uff0c\u7136\u5f8cfunction\u7684params\u88ab\u5e36\u5165\u6642\uff0c\u524d\u9762return\u6709\u5c0d\u5230\n# \u5df2\u77e5\u5831\u932f\uff0c\u5982\u679c\u6c92\u6709\u4e8c\u7d1a\u57df\u540d ex. .don3nm.com \u6703\u5831\u932f idna.core.IDNAError: Empty Label(idna\u7de8\u78bc\u932f\u8aa4\uff09\n# \u5982\u679c\u7db2\u5740\u6c92\u6709dns record\uff0csocket\u9023\u63a5\u6703\u5831\u932f socket.gaierror: [Errno 8] nodename nor servname provided, or not known\n# \u505anamed tuple\nHostInfo = namedtuple(field_names='cert hostname peername', typename='HostInfo')\n\n\ndef verify_cert(cert, hostname):\n    # verify notAfter/notBefore, CA trusted, servername/sni/hostname\n    cert.has_expired()\n    # service_identity.pyopenssl.verify_hostname(client_ssl, hostname)\n    # issuer\ndef get_certificate(hostname, port):\n    try:\n        hostname_idna = idna.encode(hostname)\n        sock = socket()\n        sock.connect((hostname, port))\n        peername = sock.getpeername()\n        ctx = SSL.Context(SSL.SSLv23_METHOD)  # most compatible\n        ctx.check_hostname = False\n        ctx.verify_mode = SSL.VERIFY_NONE\n\n        sock_ssl = SSL.Connection(ctx, sock)\n        sock_ssl.set_connect_state()\n        sock_ssl.set_tlsext_host_name(hostname_idna)\n        sock_ssl.do_handshake()\n        cert = sock_ssl.get_peer_certificate()\n        crypto_cert = cert.to_cryptography()\n        sock_ssl.close()\n        sock.close()\n        return HostInfo(cert=crypto_cert, peername=peername, hostname=hostname)\n    except Exception as err:\n        telegram_bot_sendtext(f\"{hostname} wrong with the form or DNS Record, go cheeck\")\n        logger.exception(err)\n\n    # \u7528dict\u4e5f\u53ef\u4ee5\uff0c\u4e0d\u904enamed tuple\u53ef\u4ee5\u8b93\u56fa\u5b9a\u8cc7\u6599\uff08\u4f60\u7684key\u65e9\u56fa\u5b9a\u4e86\uff09\u5b58\u53d6\u7684\u5834\u666f\u4e0b\uff0c\u8b93code\u66f4\u6613\u8b80\n\ndef get_alt_names(cert):\n    try:\n        ext = cert.extensions.get_extension_for_class(x509.SubjectAlternativeName)\n        return ext.value.get_values_for_type(x509.DNSName)\n    except x509.ExtensionNotFound as e:\n        logger.exception(e)\n        return None\n\ndef get_common_name(cert):\n    try:\n        names = cert.subject.get_attributes_for_oid(NameOID.COMMON_NAME)\n        # [<NameAttribute(oid=<ObjectIdentifier(oid=2.5.4.3, name=commonName)>, value='ls.don3bn.com')>]\n        return names[0].value\n    except x509.ExtensionNotFound as e:\n        logger.exception(e)\n        return None\n\ndef get_issuer(cert):\n    try:\n        names = cert.issuer.get_attributes_for_oid(NameOID.COMMON_NAME)\n        # [<NameAttribute(oid=<ObjectIdentifier(oid=2.5.4.3, name=commonName)>, value='R3')>]\n        return names[0].value\n    except x509.ExtensionNotFound as e:\n        logger.exception(e)\n        return None\n@logger.catch\ndef print_basic_info(hostinfo):\n    vaild_days = hostinfo.cert.not_valid_after - datetime.today()\n    print(vaild_days)\n    if vaild_days > timedelta(days=0) and vaild_days < timedelta(days=10):\n        print(f\"{hostinfo.hostname} Need check\")\n        logger.info(f\"{hostinfo.hostname} Need check, left {vaild_days}\")\n        hostname=hostinfo.hostname\n        peername=hostinfo.peername\n        SAN=get_alt_names(hostinfo.cert)\n        # f\"{hostinfo.hostname} Need check, left {vaild_days}\"\n        s=f\"\xbb {hostname} \xab \u2026 {peername} SAN: {SAN} {hostinfo.hostname} Need check, left {vaild_days}\"\n        logger.info(s)\n        telegram_bot_sendtext(s)\n\ndef check_it_out(hostname, port):\n    hostinfo = get_certificate(hostname, port)\n    print_basic_info(hostinfo)\n\n\ndef only_level(level):\n    def is_level(record):\n        return record['level'].name == level\n\n    return is_level\n\n\ndef open_domain_info():\n    try:\n        with open(\"./office_sop/domains-info.md\", \"r\", encoding=\"utf-8\") as f:\n            domain_info = f.readlines()\n        return domain_info\n    except Exception as e:\n        print(e)\n        return None\ndef telegram_bot_sendtext(bot_message):\n    bot_token = 'secret'\n    bot_chatid = 'secret'\n    apiURL = f'https://api.telegram.org/bot{bot_token}/sendMessage'\n    try:\n        response = requests.post(apiURL, json={'chat_id': bot_chatid, 'text': bot_message},timeout=(61, 61))\n        time.sleep(1)\n    except Exception as e:\n        logger.exception(e)\n        print(e)\n    return response.json()\n\nif __name__ == '__main__':\n    logger.add('domain.err.log', level='ERROR', filter=only_level('ERROR'), compression=\"gz\", rotation=\"500MB\")\n    logger.add('domain.out.log', level='INFO', filter=only_level('INFO'), compression=\"gz\", rotation=\"500MB\")\n    patten = re.compile(r\"((?=[a-z0-9-]{1,63}\\.)[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,63}\", flags=re.M)\n    domain_info_lines = open_domain_info()\n    try:\n        telegram_bot_sendtext(\"check domain_info start\")\n        logger.info('\"check domain_info start\"')\n        for each_line in domain_info_lines:\n            # \u6bcf\u884c\u4ee5|\u5340\u5206\uff0c\u53c8\u505a\u6210list\n            word_seperate_list: list = each_line.split('|')\n            # \u56e0\u70ba\u6703\u6709\u5f88\u591a\u7a7a\u884c\u6703\u53ea\u6709\u4e00\u500b\u5143\u7d20\\n\uff0c\u8981\u7be9\u51fa\u8868\u683c\u7406\u8ad6\u4e0a\u5143\u7d20\u8981\u67094\u500b\u4ee5\u4e0a\n            if len(word_seperate_list) > 4 and patten.search(word_seperate_list[2]):\n                domain = word_seperate_list[2].strip()\n                # \u5982\u679cavailable\u662f\u7a7a\u7684\u5c31\u8df3\u904e\uff0c\u9019\u908a\u7528strip() \u662f\u56e0\u70ba\u6709\\t\u5728\u4e0d\u6703\u662fFalse\n                if not word_seperate_list[3].strip():\n                    continue\n                HOSTS = [(f\"{c.strip()}.{domain}\", 443) for c in word_seperate_list[3].split(',') if c.strip()]\n                print(HOSTS)\n                # concurrent.futures.ThreadPoolExecutor \u662fpython \u591a\u57f7\u884c\u5e8f\u5be6\u4f5c\uff0c\u6703\u7528worker\u6578\u91cf\u7522\u751fExecutor\n                with concurrent.futures.ThreadPoolExecutor(max_workers=4) as e:\n                    # Executors \u7684\u76f8\u95dc\u65b9\u6cd5\uff0cmap(func, *iterables)\uff0c\u57f7\u884c\u53ef\u8fed\u4ee3\u7269\u4ef6 ex list tuple named tuple\n                    # \u5176\u5be6\u5c31\u662f\u628a\u53ef\u8fed\u4ee3\u7269\u4ef6\u7684\u5143\u7d20\u4e00\u500b\u500b\u62c6\u958b\u5582\u7d66Executor\uff0c\u63d0\u5347\u7a0b\u5f0f\u57f7\u884c\u901f\u5ea6\n                    for hostinfo in e.map(lambda x: get_certificate(x[0], x[1]), HOSTS):\n                        print_basic_info(hostinfo)\n        telegram_bot_sendtext(\"check domain_info DONe\")\n        logger.info('check domain_info DONe')\n    except Exception as err:\n        logger.exception(err)\n        telegram_bot_sendtext('there are something unexcept wrong, go cheeck error logs')\n\n\n")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u53c3\u8003\u8cc7\u6599:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/gdamjan/55a8b9eec6cf7b771f92021d93b87b2c"},"gdamjan ssl-check.py")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.kennycoder.io/2020/06/14/Git-submodule-%E4%BD%BF%E7%94%A8%E6%95%99%E5%AD%B8/"},"Git - submodule \u4f7f\u7528\u6559\u5b78")))))}d.isMDXComponent=!0}}]);