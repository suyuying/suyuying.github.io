"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[5604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(n),m=i,u=g["".concat(p,".").concat(m)]||g[m]||d[m]||r;return n?a.createElement(u,l(l({ref:t},c),{},{components:n})):a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),i=n(7294),r=n(3905);const l={title:"gitlab CI/CD basic introduction",description:'\u5b98\u7db2\u7684\u57fa\u672c\u4ecb\u7d39\u8cc7\u6599,\u4e26\u63d0\u4f9bgitlab ci\u4f7f\u7528\u7bc4\u4f8b,\u88dc\u5145alpine/git:latest\u8981\u7528script\u8981\u7528\u5230\u7684entrypoint[""]',authors:"suyuying",image:"https://github.com/suyuying.png",tags:["gitlab CI/CD","CICD"]},o=void 0,p={permalink:"/blog/2023/04/06/gitlab CICD/gitlab-basic-intro-dind-build-image",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/gitlab CICD/2023-04-06-gitlab-basic-intro-dind-build-image.md",source:"@site/blog/gitlab CICD/2023-04-06-gitlab-basic-intro-dind-build-image.md",title:"gitlab CI/CD basic introduction",description:'\u5b98\u7db2\u7684\u57fa\u672c\u4ecb\u7d39\u8cc7\u6599,\u4e26\u63d0\u4f9bgitlab ci\u4f7f\u7528\u7bc4\u4f8b,\u88dc\u5145alpine/git:latest\u8981\u7528script\u8981\u7528\u5230\u7684entrypoint[""]',date:"2023-04-06T00:00:00.000Z",formattedDate:"April 6, 2023",tags:[{label:"gitlab CI/CD",permalink:"/blog/tags/gitlab-ci-cd"},{label:"CICD",permalink:"/blog/tags/cicd"}],readingTime:9.995,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"gitlab CI/CD basic introduction",description:'\u5b98\u7db2\u7684\u57fa\u672c\u4ecb\u7d39\u8cc7\u6599,\u4e26\u63d0\u4f9bgitlab ci\u4f7f\u7528\u7bc4\u4f8b,\u88dc\u5145alpine/git:latest\u8981\u7528script\u8981\u7528\u5230\u7684entrypoint[""]',authors:"suyuying",image:"https://github.com/suyuying.png",tags:["gitlab CI/CD","CICD"]},prevItem:{title:"difference between read_repository and read_registry in gitlab",permalink:"/blog/2023/04/07/gitlab CICD/difference-between-read-repository-and-read-registry"},nextItem:{title:"Do Internet gateways and modem need to be used together?",permalink:"/blog/2023/03/30/Others/modemVSigw"}},s={authorsImageUrls:[void 0]},c=[{value:"basic tutorial",id:"basic-tutorial",level:2},{value:"Concepts",id:"concepts",level:3},{value:"Configuration",id:"configuration",level:3},{value:".gitlab-ci.yml \u914d\u7f6e\u53c2\u6570",id:"gitlab-ciyml-\u914d\u7f6e\u53c2\u6570",level:3},{value:"gitlab CI working directory",id:"gitlab-ci-working-directory",level:3},{value:"basic example",id:"basic-example",level:2}],g={toc:c},d="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"basic-tutorial"},"basic tutorial"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/#concepts"},"\u4ee5\u4e0b\u51fa\u81ea\u5b98\u7db2"),". \u4e3b\u8981\u4ecb\u7d39\u5e7e\u500b\u5927\u65b9\u5411."),(0,r.kt)("h3",{id:"concepts"},"Concepts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pipelines: CI/CD \u900f\u904e pipeline \u5efa\u7acb\u3002"),(0,r.kt)("li",{parentName:"ul"},"CI/CD variables: \u6709 GitLab ",(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html"},"\u9810\u8a2d\u8b8a\u6578"),"\uff08\u53ef\u4ee5\u5728 script \u7528 export \u53d6\u5f97\uff09\u3001\u81ea\u5b9a\u7fa9\u74b0\u5883\u8b8a\u6578\u548c",(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/secure_files/"},"secure files"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"Environments: \u8981\u628a\u61c9\u7528\u90e8\u7f72\u5728\u4e0d\u540c\u74b0\u5883\u8981\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"Job artifacts: \u7a0b\u5f0f\u904e\u7a0b\u4e2d\u57f7\u884c\u7684\u7522\u7269\uff08\u4f8b\u5982 xxx.csv\uff09\u6a94\u6848\u7684\u8f38\u51fa\u4ee5\u53ca\u5176\u4ed6 job \u4f7f\u7528\u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},"Cache dependencies: \u4f7f\u7528 cache \u95dc\u9375\u5b57\u53ef\u4ee5\u5e6b\u52a9\u6e1b\u5c11 pipeline \u7684\u904b\u884c\u6642\u9593\uff0c\u63d0\u9ad8 CI/CD \u6548\u7387\u3002\u901a\u904e\u7de9\u5b58\u4f9d\u8cf4\u9805\uff0c\u53ef\u4ee5\u907f\u514d\u5728\u6bcf\u6b21\u904b\u884c pipeline \u6642\u90fd\u5f9e\u982d\u958b\u59cb\u5b89\u88dd\u76f8\u540c\u7684\u4f9d\u8cf4\u9805\u3002"),(0,r.kt)("li",{parentName:"ul"},"GitLab Runner: \u8a2d\u5b9a\u57f7\u884c\u9019\u500b pipeline \u7684\u8a08\u7b97\u6a5f\u3002"),(0,r.kt)("li",{parentName:"ul"},"Pipeline efficiency: \u5728 pipeline \u904e\u7a0b\u4e2d\u4e5f\u6703\u9047\u5230\u4e00\u4e9b\u7169\u4eba\u7684\u554f\u984c\uff0c\u4f8b\u5982\u904b\u884c\u4e86\u4e00\u5206\u9418\u624d\u5931\u6557\uff0c\u9700\u8981\u591a\u6b21\u67e5\u770b\u7b49\u3002\u5982\u4f55\u63d0\u9ad8\u6548\u7387\u5462\uff1f\u53ef\u4ee5\u4f7f\u7528\u7de9\u5b58\u3001\u7e2e\u6e1b\u8981\u62c9\u7684\u6620\u50cf\u6a94\u5927\u5c0f\u3001\u4f7f\u7528\u898f\u5247\u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"li"},"only"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"except")," \u95dc\u9375\u5b57\u4f86\u63a7\u5236\u4f5c\u696d\u5728\u4f55\u6642\u548c\u4f55\u8655\u904b\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"Test cases: \u5728\u6e2c\u8a66\u5e73\u53f0\u4e0a\u5efa\u7acb\u6e2c\u8a66\u60c5\u5883\u3002")),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"\u53ef\u4ee5\u8a2d\u5b9a\u7684\u5167\u5bb9."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Schedule pipelines: \u6392\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"Custom path for .gitlab-ci.yml: \u5ba2\u88fd\u5316\u8def\u5f91"),(0,r.kt)("li",{parentName:"ul"},"Git submodules for CI/CD: \u5982\u679c\u4f60\u8981\u7528\u5176\u4ed6 repo \u8cc7\u6599\u53ef\u4ee5\u7528\u9019\u500b"),(0,r.kt)("li",{parentName:"ul"},"SSH keys for CI/CD: \u5982\u679c\u4f60\u8981\u5728\u76ee\u6a19 server \u4e0a\u9762\u90e8\u7f72\u7a0b\u5f0f\uff0c\u5728\u4f7f\u7528 gitlab runner \u662f docker containers \u60c5\u6cc1\u4e0b\uff0c\u9700\u8981\u5efa\u7acb SSH \u516c\u79c1\u9470\uff0c\u4ee5\u4fbf container \u900f\u904e ssh \u9023\u7dda\u4e26\u90e8\u7f72\u3002"),(0,r.kt)("li",{parentName:"ul"},"Pipeline triggers: \u9700\u8981\u7528 webhook \u65b9\u5f0f\u547c\u559a pipline \u6642\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"Merge request pipelines: \u5982\u679c\u662f\u8981\u5728\u767c\u51fa merge \u8acb\u6c42\u6642\u8dd1\u7684 pipline \u8981\u53e6\u5916\u8a2d\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"Integrate with Kubernetes clusters\uff1a\u9023 k8s \u8981\u7528\u7684\u8a2d\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"Optimize GitLab and GitLab Runner for large repositories: \u512a\u5316 pipline \u539f\u5247"),(0,r.kt)("li",{parentName:"ul"},".gitlab-ci.yml full reference\uff1a.gitlab-ci.yml \u88e1\u9762\u6709\u4e00\u5927\u5806\u53ef\u4ee5\u7528\u7684",(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/yaml/index.html"},"\u8a2d\u5b9a\u95dc\u9375\u5b57"))),(0,r.kt)("h3",{id:"gitlab-ciyml-\u914d\u7f6e\u53c2\u6570"},".gitlab-ci.yml \u914d\u7f6e\u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/yaml/index.html#stages"},"stages"),"- \u9ed8\u8a8d\u6709 build\u3001test\u3001deploy \u4e09\u968e\u7aef,\u5982\u679c\u6709\u5de5\u4f5c\u672a\u6a19\u8a18 stage \u5247\u4f7f\u7528 test\uff0c\u76f8\u540c stage \u4e26\u884c\u904b\u884c\uff0c\u9ed8\u8a8d\u4e0a\u4e00\u500b stage \u5b8c\u6210\u624d\u6703\u63a5\u4e0b\u4e00\u500b stage\uff0c\u4e14\u524d\u4e00\u968e\u6bb5 stage \u7684\u5931\u6557\u7684\u8a71\uff0c\u4e0b\u4e00\u968e\u6bb5\u4e0d\u6703\u57f7\u884c\uff0c\u4e14\u6a19\u8a18\u8a72 commit \u662f failed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stage"),"- \u63cf\u8ff0 stages \u4e2d\u5b9a\u7fa9\u7684 stage\uff0c\u4f9d\u5e8f\u57f7\u884c\uff0c\u540c stage \u6703\u4f75\u767c\u57f7\u884c."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"only"),"- \u78ba\u5b9a\u4e86\u54ea\u4e9b\u5206\u652f\u6216\u6a19\u7c64(branches and tags)\u7684\u5de5\u4f5c\u6703\u904b\u884c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"except"),"- \u78ba\u5b9a\u4e86\u54ea\u4e9b\u5206\u652f\u6216\u6a19\u7c64(branches and tags)\u7684\u5de5\u4f5c\u4e0d\u6703\u904b\u884c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"only")," ",(0,r.kt)("inlineCode",{parentName:"p"},"except"),"-\u53ef\u4ee5\u540c\u6642\u5b9a\u7fa9\uff0c\u6709\u885d\u7a81\u4ee5 only \u70ba\u4e3b\uff0c\u652f\u63f4\u6b63\u5247\uff0c\u6709\u4ee5\u4e0b key word \u53ef\u4ee5\u4f7f\u7528"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api"),(0,r.kt)("td",{parentName:"tr",align:null},"For pipelines triggered by the pipelines API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"branches"),(0,r.kt)("td",{parentName:"tr",align:null},"When the Git reference for a pipeline is a branch.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chat"),(0,r.kt)("td",{parentName:"tr",align:null},"For pipelines created by using a GitLab ChatOps command.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external"),(0,r.kt)("td",{parentName:"tr",align:null},"When you use CI services other than GitLab.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_pull_requests"),(0,r.kt)("td",{parentName:"tr",align:null},"When an external pull request on GitHub is created or updated (See Pipelines for external pull requests).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merge_requests"),(0,r.kt)("td",{parentName:"tr",align:null},"For pipelines created when a merge request is created or updated. Enables merge request pipelines, merged results pipelines, and merge trains.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pipelines"),(0,r.kt)("td",{parentName:"tr",align:null},"For multi-project pipelines created by using the API with CI_JOB_TOKEN, or the trigger keyword.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pushes"),(0,r.kt)("td",{parentName:"tr",align:null},"For pipelines triggered by a git push event, including for branches and tags.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schedules"),(0,r.kt)("td",{parentName:"tr",align:null},"For scheduled pipelines.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:null},"When the Git reference for a pipeline is a tag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"triggers"),(0,r.kt)("td",{parentName:"tr",align:null},"For pipelines created by using a trigger token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web"),(0,r.kt)("td",{parentName:"tr",align:null},"For pipelines created by selecting Run pipeline in the GitLab UI, from the project\u2019s CI/CD > Pipelines section.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=\u6b63\u5247\u7bc4\u4f8b",title:"\u6b63\u5247\u7bc4\u4f8b"},"job:\n  # use regexp\n  only:\n    - /^issue-.*$/\n  # use special keyword\n  except:\n    - branches\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"when"),"-\u7576\u4f5c\u696d fail \u6216\u6545\u969c\u6642\u904b\u884c\n",(0,r.kt)("inlineCode",{parentName:"p"},"environment"),"- \u7528\u65bc\u5c07\u60a8\u7684\u61c9\u7528\u7a0b\u5e8f\u90e8\u7f72\u5230\u7279\u5b9a\u7684\u74b0\u5883\u4e2d\u3002\u900f\u904e\u57f7\u884c\u8173\u672c\u7b49\u529f\u80fd\u9054\u6210"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"deploy:\n  stage: deploy\n  script:\n    - deploy_to_production.sh\n  environment:\n    name: production\n    url: https://example.com\n  only:\n    - master\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"artifacts"),"- \u6307\u5b9a\u5c07\u54ea\u4e9b\u6587\u4ef6\u9644\u52a0\u5230\u4f5c\u696d\u4e2d\n",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," - \u50b3\u905e\u7522\u751f\u7684 artifacts"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u662f\u4e00\u4e9b\u5e38\u7528\u7684 key word."),(0,r.kt)("h3",{id:"gitlab-ci-working-directory"},"gitlab CI working directory"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4e00\u822c\u9810\u8a2d\u5de5\u4f5c\u76ee\u9304\u90fd\u662f\u5728/builds \u8cc7\u6599\u593e\u5e95\u4e0b\uff0c\u4ed6\u6703\u628a\u4f60 git repo \u7684\u6771\u897f clone \u5230\u6bcf\u500b img \u7684 build \u8cc7\u6599\u593e\u88e1\u9762,\u6240\u4ee5\u5de5\u4f5c\u76ee\u9304\u57fa\u672c\u4e0a\u5728/builds/$CI_PROJECT_NAMESPACE/$CI_PROJECT_NAME \u88e1\u9762,\u7528\u8aaa\u7684\u5f88\u96e3\u61c2,\u6539\u7528\u8209\u4f8b\u5427:\n\u5982\u679c namespace \u662f it, repo \u540d\u7a31\u4e5f\u6703\u662f nginx-log-session-clear,\u6240\u4ee5\u5de5\u4f5c\u76ee\u9304\u6703\u5728/builds/it/nginx-log-session-clear \u5e95\u4e0b,\u4e5f\u5c31\u662f CI_PROJECT_DIR='/builds/it/nginx-log-session-clear',\u5167\u5bb9\u6703\u662f\u4f60\u7684 git repo \u5167\u5bb9."),(0,r.kt)("p",{parentName:"admonition"},"\u4e5f\u53ef\u4ee5\u5728 script \u88e1\u9762\u7528 export \u6c42\u8b49\u6b50"),(0,r.kt)(i.Fragment,null,"  ",(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{src:n(2107).Z,alt:"CI_WORK_DIR_GITLAB.png"})))),(0,r.kt)("h2",{id:"basic-example"},"basic example"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u7bc4\u4f8b\u61c9\u7528,CI \u5efa\u7acb image \u4e26\u63a8\u5230 container registry"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},"variables:\n    IMAGE_NAME: vmnotconnect\n    CI_IMAGE: $CI_REGISTRY_IMAGE/$IMAGE_NAME:$CI_COMMIT_SHORT_SHA\n# \u69cb\u5efa moni\nbuild-img:\n  # \u5b9a\u7fa9 job \u6240\u5728\u7684\u968e\u6bb5\n  stage: build\n  # \u5b9a\u7fa9 job \u6240\u4f7f\u7528\u7684 Docker \u93e1\u50cf\n  image: docker:dind\n  # \u5b9a\u7fa9 Runner \u6a19\u7c64,\u6c92\u6709\u5c0d\u61c9\u5230runner tag\u6703\u5831\u932f\n  tags:\n    - docker\n  # \u5728\u57f7\u884c job \u4e4b\u524d\u8981\u57f7\u884c\u7684\u547d\u4ee4\n  before_script:\n    # \u4f7f\u7528\u5167\u5efa\u8b8a\u6578\u767b\u5165 GitLab \u5bb9\u5668\u5009\u5eab,\u62ff\u5230\u6700\u5916\u5c64\u6703\u56e0\u70ba\u6c92\u6709docker \u6307\u4ee4\u800c\u5831\u932f\n    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY\n  # \u5b9a\u7fa9 job \u7684\u5be6\u969b\u57f7\u884c\u5167\u5bb9\n  script:\n    # \u4f7f\u7528 Docker \u69cb\u5efa\u60a8\u7684\u61c9\u7528\u7a0b\u5e8f\uff0c\u4e26\u5c07\u5176\u547d\u540d\u70ba $CI_IMAGE\n    - docker build . -t $CI_IMAGE\n    # \u5c07 Docker \u93e1\u50cf\u63a8\u9001\u5230 GitLab \u7684\u5bb9\u5668\u5009\u5eab\n    - docker push $CI_IMAGE\n    # \u522a\u9664\u672c\u5730\u6a5f\u5668\u4e0a\u7684 Docker \u93e1\u50cf\n    - docker rmi $CI_IMAGE\n  # \u5b9a\u7fa9\u4e0d\u57f7\u884c\u8a72 job \u7684\u60c5\u6cc1\n  except:\n    # \u4e0d\u5728\u9810\u5b9a\u7684\u4efb\u52d9\u548c\u6a19\u7c64\u63d0\u4ea4\u6642\u57f7\u884c\n    - schedules\n    - tags\n\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u7bc4\u4f8b\u61c9\u7528,\u628a\u7a0b\u5f0f\u57f7\u884c\u5f8c\u7522\u751f\u7684\u6a94\u6848\uff0c\u4ee5\u57f7\u884c\u7576\u4e0b\u6642\u9593\u6253 tag \u4e26\u63a8\u5012 git repo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'stages:\n  - runCode  # \u904b\u884c\u4ee3\u78bc\u7684\u968e\u6bb5\n  - addFinalCsvToGit  # \u5c07\u7d50\u679c\u63d0\u4ea4\u5230 Git \u968e\u6bb5\n\n# \u5b9a\u7fa9\u904b\u884c\u4f5c\u696d\u524d\u8981\u904b\u884c\u7684\u4efb\u4f55\u8173\u672c\nbefore_script:\n  - export COMMIT_TIME=$(date  +\'%Y-%-m-%-d-%H-%M\')  # \u5efa\u7acb\u74b0\u5883\u8b8a\u6578\u4ee5\u5b9a\u7fa9git\u63d0\u4ea4\u7684\u6642\u9593\n\n# \u5b9a\u7fa9\u4e00\u500b\u4f5c\u696d\uff0c\u5b83\u5728 `runCode` \u968e\u6bb5\u904b\u884c\nrunCodeToTg:\n  stage: runCode  # \u8a2d\u5b9a\u4f5c\u696d\u6240\u8655\u7684\u968e\u6bb5\n  image:  # \u8a2d\u5b9a\u4f5c\u696d\u4f7f\u7528\u7684 Docker \u6620\u50cf\u6a94\n    name: python:3.11-slim\n  only:  # \u8a2d\u5b9a\u4f5c\u696d\u5728\u54ea\u4e9b\u60c5\u6cc1\u4e0b\u904b\u884c\n    changes:  # \u53ea\u6709\u7576\u6307\u5b9a\u76ee\u9304\u4e2d\u7684\u6587\u4ef6\u767c\u751f\u8b8a\u5316\u6642\u624d\u904b\u884c\n      - nginx-log/*\n  # except:  # \u5982\u679c\u5e0c\u671b\u6392\u9664\u67d0\u4e9b\u60c5\u6cc1\u4e0b\u4e0d\u904b\u884c\uff0c\u53ef\u4ee5\u4f7f\u7528 except \u5b57\u6bb5\n  #   - schedules\n  #   - tags\n  tags:  # \u4f7f\u7528 Docker \u6a19\u7c64\u9650\u5236\u4f5c\u696d\u5728\u54ea\u4e9b Runner \u4e0a\u904b\u884c,\u6c92\u6709\u5c0d\u61c9\u7684runner\u5c31\u4e0d\u6703\u57f7\u884c\n    - docker\n  script:  # \u5b9a\u7fa9\u4f5c\u696d\u6240\u9700\u904b\u884c\u7684\u547d\u4ee4\n    - pip install --no-cache-dir -r ./requirment.txt  # \u5b89\u88dd\u4f9d\u8cf4\u5eab\n    - python3 main.py  # \u57f7\u884c\u4ee3\u78bc\n    - ls  # \u67e5\u770b\u7576\u524d\u76ee\u9304\n    - pwd  # \u67e5\u770b\u7576\u524d\u5de5\u4f5c\u76ee\u9304\n  artifacts:  # \u5b9a\u7fa9\u4f5c\u696d\u8981\u4fdd\u5b58\u7684\u7522\u7269\n    paths:\n      - history/  # \u4fdd\u5b58 history \u76ee\u9304\n\n# \u5b9a\u7fa9\u4e00\u500b\u4f5c\u696d\uff0c\u5b83\u5728 `addFinalCsvToGit` \u968e\u6bb5\u904b\u884c\naddGitFile:\n  stage: addFinalCsvToGit  # \u8a2d\u5b9a\u4f5c\u696d\u6240\u8655\u7684\u968e\u6bb5\n  image:  # \u8a2d\u5b9a\u4f5c\u696d\u4f7f\u7528\u7684 Docker \u6620\u50cf\u6a94\n    name: alpine/git:latest\n    entrypoint: [""]  # \u8a2d\u5b9aimage run \u8d77\u4f86\u57f7\u884c\u7684\u7a0b\u5f0f\u78bc\n  only:  # \u8a2d\u5b9a\u4f5c\u696d\u5728\u54ea\u4e9b\u60c5\u6cc1\u4e0b\u904b\u884c\n    changes:  # \u53ea\u6709\u7576\u6307\u5b9a\u76ee\u9304\u4e2d\u7684\u6587\u4ef6\u767c\u751f\u8b8a\u5316\u6642\u624d\u904b\u884c\n      - nginx-log/*\n  # except:  # \u5982\u679c\u5e0c\u671b\u6392\u9664\u67d0\u4e9b\u60c5\u6cc1\u4e0b\u4e0d\u904b\u884c\uff0c\u53ef\u4ee5\u4f7f\u7528 except \u5b57\u6bb5\n  #   - schedules\n  #   - tags\n  tags:  # \u4f7f\u7528 Docker \u6a19\u7c64\u9650\u5236\u4f5c\u696d\u5728\u54ea\u4e9b Runner \u4e0a\u904b\u884c\n    - docker\n  script:\n    - ls  # \u5217\u51fa\u7576\u524d\u76ee\u9304\u7684\u5167\u5bb9\n    - export  # \u67e5\u770b\u6240\u6709\u7684\u74b0\u5883\u8b8a\u91cf\n    - pwd  # \u67e5\u770b\u7576\u524d\u5de5\u4f5c\u76ee\u9304\u7684\u8def\u5f91\n    - git config --global user.name "ford"  # \u8a2d\u7f6e Git \u5168\u5c40\u7528\u6236\u540d\n    - git config --global user.email "ford"  # \u8a2d\u7f6e Git \u5168\u5c40\u7528\u6236\u90f5\u7bb1\n    - git add .  # \u6dfb\u52a0\u7576\u524d\u76ee\u9304\u4e2d\u7684\u6240\u6709\u66f4\u6539\u5230 Git \u5009\u5eab\n    - git commit -m \'test\' || echo "No changes, nothing to commit!"  # \u63d0\u4ea4\u66f4\u6539\n    - git tag $COMMIT_TIME  # \u70ba\u63d0\u4ea4\u6253\u6a19\u7c64\n    - git push https://${ciname}:${cicode}@gitlab.go2cloudten.com/it/nginx-log-session-clear.git $COMMIT_TIME  # \u63a8\u9001\u66f4\u6539\u5230 Git \u5009\u5eab\n    - echo \'add file done\'  # \u986f\u793a\u4efb\u52d9\u57f7\u884c\u5b8c\u6210\u7684\u6d88\u606f\n# \u5f9erunCodeToTg\u90a3\u908a\u53d6\u5f97history\u8cc7\u6599\u593e\u5230\u7576\u4e0bgit \u76ee\u9304\n  dependencies:\n    - runCodeToTg\n')),(0,r.kt)("p",null,"\u88dc\u5145:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"entrypoint: ",'[""]'," \u9019\u662f\u500b\u795e\u5947\u7684 issue \u8a2d\u5b9a image run \u8d77\u4f86\u5f8c\u9762\u8981\u57f7\u884c script \u8981\u9019\u6a23\u52a0,\u4e0d\u9019\u6a23\u52a0\u6703\u9047\u5230\u5831\u932f git: 'sh' is not a git command. See 'git --help',\u76f8\u95dc",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/gitlab-org/gitlab-runner/-/issues/4027"},"issue"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"repo \u901a\u5e38\u6307 Git \u7248\u672c\u63a7\u5236\u7cfb\u7d71\u4e2d\u7684\u5b58\u5132\u5eab,registry \u662f\u4e00\u500b\u5b58\u5132 image \u7684\u5730\u65b9,\u5169\u8005\u6709\u5dee\u5225\u6b50,\u4e0d\u904e\u9019\u4e5f\u770b\u5404\u5bb6\u5b9a\u7fa9,\n\u5728 docker \u88e1 registry \u6703\u5305\u542b\u591a\u500b repo,\u800c repo \u6703\u6709\u4e0d\u540c\u7248\u672c\u7684 image."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u53c3\u8003\u8cc7\u6599"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/yaml/index.html"},"\u5b98\u7db2\u9996\u9801")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/examples/"},"\u5b98\u7db2 pipline demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://meigit.readthedocs.io/en/latest/gitlab_ci_.gitlab-ci.yml_detail.html#gitlab-ci-gitlab-ci-yml"},"GitLab CI \u6d41\u6c34\u7ebf\u914d\u7f6e\u6587\u4ef6.gitlab-ci.yml \u8be6\u89e3")))))}m.isMDXComponent=!0},2107:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CI_DIR_GITLAB-ae0a7748ab3aae1ea30acbd327d5fef5.png"}}]);