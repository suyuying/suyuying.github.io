"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[489],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>k});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),p=o,k=d["".concat(l,".").concat(p)]||d[p]||g[p]||i;return t?n.createElement(k,a(a({ref:r},s),{},{components:t})):n.createElement(k,a({ref:r},s))}));function k(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1742:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=t(7462),o=(t(7294),t(3905));const i={title:'gitlab runner error during connect Post "http://docker:2375/v1.24/auth" dial tcp lookup docker on 1.1.1.1:53 no such host',description:'\u57f7\u884c\u9019\u500b\u4fee\u6539\uff0cvolumes \u6539\u70ba ["/var/run/docker.sock:/var/run/docker.sock", "/cache"]\uff0c\u8b93 Runner Executor \u4f7f\u7528\u4e3b\u6a5f\u5916\u90e8\u7684 Docker Engine\u3002\u6240\u4ee5\u63a8\u6e2c\uff0c\u9019\u53ef\u80fd\u662f gitlab runner \u8ddf gitlab server \u4e0a\u9762\u9a57\u8b49\u7684\u6a5f\u5236\uff0c\u5982\u679c\u6c92\u6709\u9019\u6a23\u52a0\uff0cdind \u5c31\u627e\u4e0d\u5230 gitlab server \u7684\u9a57\u8b49\u90a3\u95dc\uff0c\u6240\u4ee5\u5c31\u6703\u5931\u6557',authors:"suyuying",tags:["docker"]},a=void 0,c={permalink:"/blog/2023/03/16/Docker/docker-gitlab-error-connect-docker",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Docker/2023-03-16-docker-gitlab-error-connect-docker.md",source:"@site/blog/Docker/2023-03-16-docker-gitlab-error-connect-docker.md",title:'gitlab runner error during connect Post "http://docker:2375/v1.24/auth" dial tcp lookup docker on 1.1.1.1:53 no such host',description:'\u57f7\u884c\u9019\u500b\u4fee\u6539\uff0cvolumes \u6539\u70ba ["/var/run/docker.sock:/var/run/docker.sock", "/cache"]\uff0c\u8b93 Runner Executor \u4f7f\u7528\u4e3b\u6a5f\u5916\u90e8\u7684 Docker Engine\u3002\u6240\u4ee5\u63a8\u6e2c\uff0c\u9019\u53ef\u80fd\u662f gitlab runner \u8ddf gitlab server \u4e0a\u9762\u9a57\u8b49\u7684\u6a5f\u5236\uff0c\u5982\u679c\u6c92\u6709\u9019\u6a23\u52a0\uff0cdind \u5c31\u627e\u4e0d\u5230 gitlab server \u7684\u9a57\u8b49\u90a3\u95dc\uff0c\u6240\u4ee5\u5c31\u6703\u5931\u6557',date:"2023-03-16T00:00:00.000Z",formattedDate:"March 16, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"}],readingTime:2.285,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:'gitlab runner error during connect Post "http://docker:2375/v1.24/auth" dial tcp lookup docker on 1.1.1.1:53 no such host',description:'\u57f7\u884c\u9019\u500b\u4fee\u6539\uff0cvolumes \u6539\u70ba ["/var/run/docker.sock:/var/run/docker.sock", "/cache"]\uff0c\u8b93 Runner Executor \u4f7f\u7528\u4e3b\u6a5f\u5916\u90e8\u7684 Docker Engine\u3002\u6240\u4ee5\u63a8\u6e2c\uff0c\u9019\u53ef\u80fd\u662f gitlab runner \u8ddf gitlab server \u4e0a\u9762\u9a57\u8b49\u7684\u6a5f\u5236\uff0c\u5982\u679c\u6c92\u6709\u9019\u6a23\u52a0\uff0cdind \u5c31\u627e\u4e0d\u5230 gitlab server \u7684\u9a57\u8b49\u90a3\u95dc\uff0c\u6240\u4ee5\u5c31\u6703\u5931\u6557',authors:"suyuying",tags:["docker"]},prevItem:{title:"How to let google find my website?",permalink:"/blog/2023/03/20/SEO/google-register"},nextItem:{title:"environment variable and  secrets variable config in github",permalink:"/blog/2023/03/16/github-action/githubaction-env-secrets-variablr-config"}},l={authorsImageUrls:[void 0]},u=[{value:"\u9047\u5230\u554f\u984c\u7684\u60c5\u5883",id:"\u9047\u5230\u554f\u984c\u7684\u60c5\u5883",level:2},{value:"\u89e3\u6cd5:",id:"\u89e3\u6cd5",level:3},{value:"\u53ef\u80fd\u539f\u56e0\uff1a",id:"\u53ef\u80fd\u539f\u56e0",level:3}],s={toc:u},d="wrapper";function g(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9047\u5230\u554f\u984c\u7684\u60c5\u5883"},"\u9047\u5230\u554f\u984c\u7684\u60c5\u5883"),(0,o.kt)("p",null,"CICD \u6b65\u9a5f\u88e1\u9762\uff0c\u6bcf\u7576\u958b\u767c\u4eba\u54e1\u628a code \u5beb\u5b8c\u4e4b\u5f8c\uff0c\u6703\u9032\u884c\u6e2c\u8a66\u4e26\u628a code build \u6210 image \u5f8c\u63a8\u5230 image registry\n\uff0c\u4e4b\u5f8c\u5230\u74b0\u5883\u57f7\u884c deploy\u3002"),(0,o.kt)("p",null,"\u5728 gitlab \u88e1\u9762\u6703\u7528 gitlab runner\uff0c\u4e26\u5728.gitlab-ci.yml \u8a2d\u8a08\u4fc3\u767c\u7684\u60c5\u5883\u4e0b\uff0c\u57f7\u884c.gitlab-ci.yml \u5167\u5bb9\uff0c\u8981\u5728 gitlab runner \u5167 build image \u901a\u5e38\u6703\u7528\u5230 docker:dind\uff0c\u5b83\u662f\u5177\u6709 docker \u5f15\u64ce\u7684 container\uff01\u4e00\u822c\u7684 image \u5167\u901a\u5e38\u90fd\u4e0d\u6703\u53bb\u5b89\u88dd docker \u5f15\u64ce\uff0c\u9019\u6bb5\u6709\u9ede\u96e3\u61c2\uff0c\u4f46\u4f60\u53ef\u4ee5\u60f3\u60f3\u6709 nginx,mysql \u7b49\u7b49\u7684 image\uff0c\u57fa\u672c\u4e0a\u53ea\u6703\u6709\u81ea\u5df1\u9810\u8a2d\u529f\u80fd\uff0c\u4e0d\u9700\u8981 docker \u5f15\u64ce\uff0c\u5c0d\u65bc docker \u800c\u8a00\uff0c\u88e1\u9762\u8981\u53ef\u4ee5\u7528 docker \u6307\u4ee4\u7684\uff0c docker:dind \u662f\u4e00\u500b\u9078\u9805\u3002"),(0,o.kt)("p",null,"\u5728 build \u7248\u57f7\u884c\u7684 yml \u5982\u4e0b\u3002\n\u4e3b\u8981\u529f\u80fd\u5c31\u662f\u767b\u5165\u5728 gitlab \u4e0a\u9762\u7684\u516c\u53f8\u7684 image registry,\u4e4b\u5f8c\u5728 gitlab runner \u57f7\u884c build image \u4e26\u63a8\u5230 gitlab image registry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},"stages:\n    - build\n\nvariables:\n    IMAGE_NAME: hahaha\n    CI_IMAGE: $CI_REGISTRY_IMAGE/$IMAGE_NAME:$CI_COMMIT_SHORT_SHA\n\n# Build moni\nbuild-moni:\n    stage: build\n    image: docker:dind\n    tags:\n        - docker\n    before_script:\n        - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY\n    script:\n        - docker build . -t $CI_IMAGE\n        - docker push $CI_IMAGE\n        - docker rmi $CI_IMAGE\n    except:\n        - schedules\n\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'FROM node:16\n\nCOPY /node /node\nWORKDIR /node\nRUN npm install;npm install gulp -g;gulp build;\nEXPOSE 4000\nCMD [ "npm", "run", "start" ]\n')),(0,o.kt)("p",null,"\u57f7\u884c\u904e\u7a0b\u5230\u9019\u4e00\u6b65",(0,o.kt)("inlineCode",{parentName:"p"},"- docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY"),"\u9047\u5230\u5831\u932f\uff0c\n",(0,o.kt)("inlineCode",{parentName:"p"},'error during connect: Post "http://docker:2375/v1.24/auth": dial tcp: lookup docker on 1.1.1.1:53: no such host'),"\u3002"),(0,o.kt)("h3",{id:"\u89e3\u6cd5"},"\u89e3\u6cd5:"),(0,o.kt)("p",null,"\u5728\u4f60\u639b\u5230 gitlab runner \u4e2d /etc/gitlab-runner \u88e1\u9762\u7684 config.toml\uff0c\u8acb\u5148\u7528 docker inspect \u89c0\u5bdf volume \u639b\u8f09\u4f4d\u7f6e\uff0c\u5982\u679c\u4f60\u662f\u7528\u5b98\u7db2 local volume \u639b\u8f09\u65b9\u6cd5\uff0c\u90a3\u5c31\u662f\u5728 VM \u4e0a\u53bb vim /srv/gitlab-runner/config/config.toml\uff0c\u53bb\u4fee\u6539\n",(0,o.kt)("inlineCode",{parentName:"p"},'volumes = ["/cache"]')," \u8b8a\u6210\n",(0,o.kt)("inlineCode",{parentName:"p"},'volumes = ["/var/run/docker.sock:/var/run/docker.sock","/cache"]'),"\u3002"),(0,o.kt)("p",null,"\u4e26\u57f7\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"docker restart gitlab-runner"),"!"),(0,o.kt)("h3",{id:"\u53ef\u80fd\u539f\u56e0"},"\u53ef\u80fd\u539f\u56e0\uff1a"),(0,o.kt)("p",null,"\u57f7\u884c\u9019\u500b\u4fee\u6539\uff0cvolumes \u6539\u70ba ",'["/var/run/docker.sock:/var/run/docker.sock", "/cache"]',"\uff0c\u8b93 Runner Executor \u4f7f\u7528\u4e3b\u6a5f\u5916\u90e8\u7684 Docker Engine\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u63a8\u6e2c\uff0c\u9019\u53ef\u80fd\u662f gitlab runner \u8ddf gitlab server \u4e0a\u9762\u9a57\u8b49\u7684\u6a5f\u5236\uff0c\u5982\u679c\u6c92\u6709\u9019\u6a23\u52a0\uff0cdind \u5c31\u627e\u4e0d\u5230 gitlab server \u7684\u9a57\u8b49\u90a3\u95dc\uff0c\u6240\u4ee5\u5c31\u6703\u5931\u6557"))}g.isMDXComponent=!0}}]);