"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[2404],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>g});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=u(n),p=o,g=s["".concat(l,".").concat(p)]||s[p]||k[p]||c;return n?t.createElement(g,i(i({ref:r},d),{},{components:n})):t.createElement(g,i({ref:r},d))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=p;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[s]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67757:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var t=n(87462),o=(n(67294),n(3905));const c={title:'docker gitlab runner error during connect Post "http://docker:2375/v1.24/auth" dial tcp lookup docker on 1.1.1.1:53 no such host',description:'\u57f7\u884c\u9019\u500b\u4fee\u6539\uff0cvolumes \u6539\u70ba ["/var/run/docker.sock:/var/run/docker.sock", "/cache"]\uff0c\u8b93 Runner Executor \u4f7f\u7528\u4e3b\u6a5f\u5916\u90e8\u7684 Docker Engine\u3002\u6240\u4ee5\u63a8\u6e2c\uff0c\u9019\u53ef\u80fd\u662f gitlab runner \u8ddf gitlab server \u4e0a\u9762\u9a57\u8b49\u7684\u6a5f\u5236\uff0c\u5982\u679c\u6c92\u6709\u9019\u6a23\u52a0\uff0cdind \u5c31\u627e\u4e0d\u5230 gitlab server \u7684\u9a57\u8b49\u90a3\u95dc\uff0c\u6240\u4ee5\u5c31\u6703\u5931\u6557',authors:"suyuying",tags:["docker"]},i=void 0,a={unversionedId:"Docker/2023-03-16-docker-gitlab-error-connect-docker",id:"Docker/2023-03-16-docker-gitlab-error-connect-docker",title:'docker gitlab runner error during connect Post "http://docker:2375/v1.24/auth" dial tcp lookup docker on 1.1.1.1:53 no such host',description:'\u57f7\u884c\u9019\u500b\u4fee\u6539\uff0cvolumes \u6539\u70ba ["/var/run/docker.sock:/var/run/docker.sock", "/cache"]\uff0c\u8b93 Runner Executor \u4f7f\u7528\u4e3b\u6a5f\u5916\u90e8\u7684 Docker Engine\u3002\u6240\u4ee5\u63a8\u6e2c\uff0c\u9019\u53ef\u80fd\u662f gitlab runner \u8ddf gitlab server \u4e0a\u9762\u9a57\u8b49\u7684\u6a5f\u5236\uff0c\u5982\u679c\u6c92\u6709\u9019\u6a23\u52a0\uff0cdind \u5c31\u627e\u4e0d\u5230 gitlab server \u7684\u9a57\u8b49\u90a3\u95dc\uff0c\u6240\u4ee5\u5c31\u6703\u5931\u6557',source:"@site/docs/Docker/2023-03-16-docker-gitlab-error-connect-docker.md",sourceDirName:"Docker",slug:"/Docker/2023-03-16-docker-gitlab-error-connect-docker",permalink:"/docs/Docker/2023-03-16-docker-gitlab-error-connect-docker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/2023-03-16-docker-gitlab-error-connect-docker.md",tags:[{label:"docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{title:'docker gitlab runner error during connect Post "http://docker:2375/v1.24/auth" dial tcp lookup docker on 1.1.1.1:53 no such host',description:'\u57f7\u884c\u9019\u500b\u4fee\u6539\uff0cvolumes \u6539\u70ba ["/var/run/docker.sock:/var/run/docker.sock", "/cache"]\uff0c\u8b93 Runner Executor \u4f7f\u7528\u4e3b\u6a5f\u5916\u90e8\u7684 Docker Engine\u3002\u6240\u4ee5\u63a8\u6e2c\uff0c\u9019\u53ef\u80fd\u662f gitlab runner \u8ddf gitlab server \u4e0a\u9762\u9a57\u8b49\u7684\u6a5f\u5236\uff0c\u5982\u679c\u6c92\u6709\u9019\u6a23\u52a0\uff0cdind \u5c31\u627e\u4e0d\u5230 gitlab server \u7684\u9a57\u8b49\u90a3\u95dc\uff0c\u6240\u4ee5\u5c31\u6703\u5931\u6557',authors:"suyuying",tags:["docker"]},sidebar:"tutorialSidebar",previous:{title:"dockermultiplatform build - docker buildx\u6307\u4ee4",permalink:"/docs/Docker/2023-03-10-docker-muiltiplatform"},next:{title:"Docusaurus",permalink:"/docs/category/docusaurus"}},l={},u=[{value:"\u9047\u5230\u554f\u984c\u7684\u60c5\u5883",id:"\u9047\u5230\u554f\u984c\u7684\u60c5\u5883",level:2},{value:"\u89e3\u6cd5:",id:"\u89e3\u6cd5",level:3},{value:"\u53ef\u80fd\u539f\u56e0\uff1a",id:"\u53ef\u80fd\u539f\u56e0",level:3}],d={toc:u},s="wrapper";function k(e){let{components:r,...n}=e;return(0,o.kt)(s,(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9047\u5230\u554f\u984c\u7684\u60c5\u5883"},"\u9047\u5230\u554f\u984c\u7684\u60c5\u5883"),(0,o.kt)("p",null,"CICD \u6b65\u9a5f\u88e1\u9762\uff0c\u6bcf\u7576\u958b\u767c\u4eba\u54e1\u628a code \u5beb\u5b8c\u4e4b\u5f8c\uff0c\u6703\u9032\u884c\u6e2c\u8a66\u4e26\u628a code build \u6210 image \u5f8c\u63a8\u5230 image registry\n\uff0c\u4e4b\u5f8c\u5230\u74b0\u5883\u57f7\u884c deploy\u3002"),(0,o.kt)("p",null,"\u5728 gitlab \u88e1\u9762\u6703\u7528 gitlab runner\uff0c\u4e26\u5728.gitlab-ci.yml \u8a2d\u8a08\u4fc3\u767c\u7684\u60c5\u5883\u4e0b\uff0c\u57f7\u884c.gitlab-ci.yml \u5167\u5bb9\uff0c\u8981\u5728 gitlab runner \u5167 build image \u901a\u5e38\u6703\u7528\u5230 docker:dind\uff0c\u5b83\u662f\u5177\u6709 docker \u5f15\u64ce\u7684 container\uff01\u4e00\u822c\u7684 image \u5167\u901a\u5e38\u90fd\u4e0d\u6703\u53bb\u5b89\u88dd docker \u5f15\u64ce\uff0c\u9019\u6bb5\u6709\u9ede\u96e3\u61c2\uff0c\u4f46\u4f60\u53ef\u4ee5\u60f3\u60f3\u6709 nginx,mysql \u7b49\u7b49\u7684 image\uff0c\u57fa\u672c\u4e0a\u53ea\u6703\u6709\u81ea\u5df1\u9810\u8a2d\u529f\u80fd\uff0c\u4e0d\u9700\u8981 docker \u5f15\u64ce\uff0c\u5c0d\u65bc docker \u800c\u8a00\uff0c\u88e1\u9762\u8981\u53ef\u4ee5\u7528 docker \u6307\u4ee4\u7684\uff0c docker:dind \u662f\u4e00\u500b\u9078\u9805\u3002"),(0,o.kt)("p",null,"\u5728 build \u7248\u57f7\u884c\u7684 yml \u5982\u4e0b\u3002\n\u4e3b\u8981\u529f\u80fd\u5c31\u662f\u767b\u5165\u5728 gitlab \u4e0a\u9762\u7684\u516c\u53f8\u7684 image registry,\u4e4b\u5f8c\u5728 gitlab runner \u57f7\u884c build image \u4e26\u63a8\u5230 gitlab image registry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},"stages:\n    - build\n\nvariables:\n    IMAGE_NAME: hahaha\n    CI_IMAGE: $CI_REGISTRY_IMAGE/$IMAGE_NAME:$CI_COMMIT_SHORT_SHA\n\n# Build moni\nbuild-moni:\n    stage: build\n    image: docker:dind\n    tags:\n        - docker\n    before_script:\n        - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY\n    script:\n        - docker build . -t $CI_IMAGE\n        - docker push $CI_IMAGE\n        - docker rmi $CI_IMAGE\n    except:\n        - schedules\n\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'FROM node:16\n\nCOPY /node /node\nWORKDIR /node\nRUN npm install;npm install gulp -g;gulp build;\nEXPOSE 4000\nCMD [ "npm", "run", "start" ]\n')),(0,o.kt)("p",null,"\u57f7\u884c\u904e\u7a0b\u5230\u9019\u4e00\u6b65",(0,o.kt)("inlineCode",{parentName:"p"},"- docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY"),"\u9047\u5230\u5831\u932f\uff0c\n",(0,o.kt)("inlineCode",{parentName:"p"},'error during connect: Post "http://docker:2375/v1.24/auth": dial tcp: lookup docker on 1.1.1.1:53: no such host'),"\u3002"),(0,o.kt)("h3",{id:"\u89e3\u6cd5"},"\u89e3\u6cd5:"),(0,o.kt)("p",null,"\u5728\u4f60\u639b\u5230 gitlab runner \u4e2d /etc/gitlab-runner \u88e1\u9762\u7684 config.toml\uff0c\u8acb\u5148\u7528 docker inspect \u89c0\u5bdf volume \u639b\u8f09\u4f4d\u7f6e\uff0c\u5982\u679c\u4f60\u662f\u7528\u5b98\u7db2 local volume \u639b\u8f09\u65b9\u6cd5\uff0c\u90a3\u5c31\u662f\u5728 VM \u4e0a\u53bb vim /srv/gitlab-runner/config/config.toml\uff0c\u53bb\u4fee\u6539\n",(0,o.kt)("inlineCode",{parentName:"p"},'volumes = ["/cache"]')," \u8b8a\u6210\n",(0,o.kt)("inlineCode",{parentName:"p"},'volumes = ["/var/run/docker.sock:/var/run/docker.sock","/cache"]'),"\u3002"),(0,o.kt)("p",null,"\u4e26\u57f7\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"docker restart gitlab-runner"),"!"),(0,o.kt)("h3",{id:"\u53ef\u80fd\u539f\u56e0"},"\u53ef\u80fd\u539f\u56e0\uff1a"),(0,o.kt)("p",null,"\u57f7\u884c\u9019\u500b\u4fee\u6539\uff0cvolumes \u6539\u70ba ",'["/var/run/docker.sock:/var/run/docker.sock", "/cache"]',"\uff0c\u8b93 Runner Executor \u4f7f\u7528\u4e3b\u6a5f\u5916\u90e8\u7684 Docker Engine\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u63a8\u6e2c\uff0c\u9019\u53ef\u80fd\u662f gitlab runner \u8ddf gitlab server \u4e0a\u9762\u9a57\u8b49\u7684\u6a5f\u5236\uff0c\u5982\u679c\u6c92\u6709\u9019\u6a23\u52a0\uff0cdind \u5c31\u627e\u4e0d\u5230 gitlab server \u7684\u9a57\u8b49\u90a3\u95dc\uff0c\u6240\u4ee5\u5c31\u6703\u5931\u6557"))}k.isMDXComponent=!0}}]);