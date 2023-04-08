"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,d=p["".concat(c,".").concat(g)]||p[g]||m[g]||r;return n?a.createElement(d,o(o({ref:t},l),{},{components:n})):a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),i=n(7294),r=n(3905);const o={title:"CI:use github action to build image and push to git hub container registry",description:"use CI in github action ,and variable in environments to build image and push to registry. github action \u5165\u9580\u653b\u7565\uff0cCI \u63a8image\u5230github",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["github action","CICD"]},s=void 0,c={permalink:"/blog/2023/03/11/github-action/githib-action-CI-to-github-container",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/github-action/2023-03-11-githib-action-CI-to-github-container.md",source:"@site/blog/github-action/2023-03-11-githib-action-CI-to-github-container.md",title:"CI:use github action to build image and push to git hub container registry",description:"use CI in github action ,and variable in environments to build image and push to registry. github action \u5165\u9580\u653b\u7565\uff0cCI \u63a8image\u5230github",date:"2023-03-11T00:00:00.000Z",formattedDate:"March 11, 2023",tags:[{label:"github action",permalink:"/blog/tags/github-action"},{label:"CICD",permalink:"/blog/tags/cicd"}],readingTime:4.675,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"CI:use github action to build image and push to git hub container registry",description:"use CI in github action ,and variable in environments to build image and push to registry. github action \u5165\u9580\u653b\u7565\uff0cCI \u63a8image\u5230github",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["github action","CICD"]},prevItem:{title:"s3 set iam permissions for Github Actions to achieve CIBuild an AWS s3 static website",permalink:"/blog/2023/03/15/Aws/s3-setting-for-ci"},nextItem:{title:"demo basic  github action",permalink:"/blog/2023/03/11/github-action/github-action-demo"}},u={authorsImageUrls:[void 0]},l=[{value:"Build code registry",id:"build-code-registry",level:2},{value:"ways to build image and push",id:"ways-to-build-image-and-push",level:2},{value:"way1. build image and push from local side by docker command,use CI after to renew",id:"way1-build-image-and-push-from-local-side-by-docker-commanduse-ci-after-to-renew",level:3},{value:"way2. use CI to create and push image first, and afterwards",id:"way2-use-ci-to-create-and-push-image-first-and-afterwards",level:3}],p={toc:l},m="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"build-code-registry"},"Build code registry"),(0,r.kt)("p",null,"\u628a code \u63a8\u5230 github \u6559\u5b78\u5f88\u591a\uff0c\u53ef\u4ee5 google \u4e00\u4e0b\uff0c\u4e0d\u904e\u8981\u6ce8\u610f\u7684\u662f\u73fe\u5728\u63a8 code \u90fd\u8981\u5148\u5728\u5b98\u7db2\u7533\u8acb token\uff0c\u65b0\u624b\u5f88\u5bb9\u6613\u5361\u5728\u9019\u3002"),(0,r.kt)("h2",{id:"ways-to-build-image-and-push"},"ways to build image and push"),(0,r.kt)("p",null,"\u57f7\u884c CI \u524d\uff0c\u8981\u78ba\u8a8d\u6709 Dockerfile \u4e26\u4e14\u5728\u5730\u7aef\u53ef\u4ee5 docker run \u670d\u52d9\u8d77\u4f86\uff0cCI \u904e\u7a0b\u6703\u7528\u8a72 Dokcerfile \u7522\u751f image\u3002"),(0,r.kt)("h3",{id:"way1-build-image-and-push-from-local-side-by-docker-commanduse-ci-after-to-renew"},"way1. build image and push from local side by docker command,use CI after to renew"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5730\u7aef build \u5b8c\uff0c\u7136\u5f8c\u63a8\u5230 github container registry(\u9700\u8981\u7528 github ui \u5efa\u7acb token,\u4e26\u7d66 token)\n\uff0c\u7136\u5f8c\u628a token \u5b58\u5230 txt \u6a94")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7528 token \u767b\u5165 github"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cat token.txt | docker login ghcr.io -u suyuying --password-stdin\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-u")," \u63db\u6210\u81ea\u5df1\u7684 username"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"token.txt"),"\u628a token \u653e\u5728\u88e1\u9762"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u63a8 image \u5230 github container registry DONe")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker buildx build --platform=linux/arm64,linux/amd64 --push -t ghcr.io/suyuying/fastapi-backend:1.0 .\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u9019\u500b\u65b9\u6cd5\u7576\u4e0b\u6c92\u5565\u554f\u984c\uff0c\u6703\u6210\u529f\u5efa\u7acb\uff0c\u5982\u679c\u4ee5\u4e0a\u65b9\u6cd5\u8981\u63a5\uff23\uff29\uff0c\u9084\u6709 step 4.\nimage\uff0c\u4f46\u4e4b\u5f8c\u63a5 CI \u7684\u6642\u5019\u6703\n\u9047\u5230\u6b0a\u9650\u554f\u984c\uff0c\u8c8c\u4f3c\u7528 token \u5efa\u7acb\u4ee5\u5f8c\uff0c\u4f60 CI \u88e1\u9762\u4f7f\u7528 registry \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"password: ${{ secrets.GITHUB_TOKEN }} ")," \u7684 token \u6703\u5931\u6548\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/community/discussions/26274"},"\u539f\u672c issue \u4f4d\u7f6e")),(0,r.kt)("p",{parentName:"admonition"},'4.\u8acb\u524d\u5f80 $yourOrganization \u2192 Packages \u2192 $yourPackage \u2192 Package settings\uff08\u53f3\u5074/\u5e95\u90e8\uff09\uff0c\u4e26\u914d\u7f6e\u201c\u7ba1\u7406\u64cd\u4f5c\u8a2a\u554f"\u90e8\u5206\u4ee5\u5141\u8a31\u6709\u554f\u984c\u7684 git \u5b58\u5132\u5eab\u5c0d\u6b64\u5305 code \u5b58\u5132\u5eab\u6709 write \u6b0a\u9650')),(0,r.kt)("h3",{id:"way2-use-ci-to-create-and-push-image-first-and-afterwards"},"way2. use CI to create and push image first, and afterwards"),(0,r.kt)("p",null,"1.\u5728.github/workflows \u8cc7\u6599\u593e\u5efa\u7acb xxx.yml \u6a94\u6848\uff0c\u5167\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# This workflow uses actions that are not certified by GitHub.\n# They are provided by a third-party and are governed by\n# separate terms of service, privacy policy, and support\n# documentation.\n\n# GitHub recommends pinning actions to a commit SHA.\n# To get a newer version, you will need to update the SHA.\n# You can also reference a tag or branch, but the action may change without warning.\n\nname: Create and publish a Docker image\n\non:\n  push:\n    branches: ['main']\n\njobs:\n  build-and-push-image:\n  // \u9019\u500b\u662f\u4e4b\u5f8c\u793a\u7bc4import config environment variable ,optional\n    environment: prod\n    runs-on: ubuntu-latest\n    permissions:\n      contents: read\n      packages: write\n    // \u9019\u500b\u662f\u5efa\u7acb\u9019\u4efd\u6587\u4ef6\u7684env\u8b8a\u6578\n    env:\n      Greeting: Hello\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v3\n\n      - name: Log in to the Container registry\n        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9\n        with:\n          registry: ghcr.io\n          username: ${{ github.actor }}\n          password: ${{ secrets.GITHUB_TOKEN }}\n    //\u9019\u908a\u7684secrets\u8981\u7528Actions secrets and variables\u8a2d\u5b9a\n      - uses: mr-smithers-excellent/docker-build-push@v6\n        with:\n    // \u9019\u908a\u683c\u5f0f\u5c31\u8a18\u4e0b\u4f86\uff0c\u56e0\u70ba\u4ed6\u5b98\u7db2\u5beb\u7684\u4e5f\u4e0d\u6e05\u4e0d\u695a\u7684\uff0c\u9019\u6a23\u6703\u505a\u51faghcr.io/suyuying/fastapi-backend\n          image: fastapi-backend\n          registry: ghcr.io\n          username: ${{ secrets.GHCR_USERNAME }}\n          password: ${{ secrets.GHCR_TOKEN }}\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u653e\u8b8a\u6578\u503c\u5230 github repo \u4e0a",(0,r.kt)(i.Fragment,null,(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{src:n(6967).Z,style:{width:"100%"},alt:"malta_street png"}))))),(0,r.kt)("p",null,'GHCR_USERNAME="yourUserName"'),(0,r.kt)("p",null,'GHCR_TOKEN="classic token \u7522\u51fa\u7684 token"'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u7528 Environment secrets \u6216 Repository secrets\n\u5c0d workflow \u800c\u8a00\u4ed6\u5011\u90fd\u6703\u653e\u5728 secrets \u9019\u500b\u7269\u4ef6\u88e1\u9762\uff0c\n\u4f7f\u7528\u65b9\u5f0f\u5411\u662f\n",(0,r.kt)("inlineCode",{parentName:"p"},"${{ secrets.GHCR_TOKEN }}"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u56e0\u7232\u689d\u4ef6\u8a2d\u5b9a push main\uff0c\u6240\u4ee5\u78ba\u8a8d\u597d main branch \u76f4\u63a5\u63a8\u5c31\u6703\u767c\u73fe\u6709\u65b0\u4f5c image \u4e86")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)(i.Fragment,null,"  ",(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("img",{src:n(5915).Z,style:{width:"100%"},alt:"malta_street png"}))),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8981\u4f7f\u7528\u4e0a\u9762\u518d environment \u74b0\u5883\u8b8a\u6578\u53d6\u503c\uff0c\u8981\u4f7f\u7528\u9019\u7a2e\u683c\u5f0f\n",(0,r.kt)("inlineCode",{parentName:"p"},"${{ vars.READ_MY_NAME }}")," \u53bb\u53d6\u503c")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"github action \u63d0\u4f9b\u4e86\u4e00\u5927\u5806 context\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/contexts#vars-context"},"\u53c3\u8003\u8cc7\u6599")," \uff0c\u4e0d\u77e5\u9053\u70ba\u5565\u7db2\u8def\u8b1b\u5230\u9019\u500b\u8cc7\u6e90\u5f88\u5c11")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b98\u7db2\u6559\u5b78 CI build image \u63a8\u5230 container registry \u4f7f\u7528\u7684\u662f\u53e6\u4e00\u500b action\uff0c\u5169\u500b\u90fd\u7528\u904e\uff0c\u90fd\u53ef\u4ee5\u7528\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/publishing-packages/publishing-docker-images#publishing-images-to-github-packages"},"\u53c3\u8003 actions")))),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"# This workflow uses actions that are not certified by GitHub.\n# They are provided by a third-party and are governed by\n# separate terms of service, privacy policy, and support\n# documentation.\n\n# GitHub recommends pinning actions to a commit SHA.\n# To get a newer version, you will need to update the SHA.\n# You can also reference a tag or branch, but the action may change without warning.\n\nname: Publish Docker image\n\non:\n  release:\n    types: [published]\n\njobs:\n  push_to_registries:\n    name: Push Docker image to multiple registries\n    runs-on: ubuntu-latest\n    permissions:\n      packages: write\n      contents: read\n    steps:\n      - name: Check out the repo\n        uses: actions/checkout@v3\n\n      - name: Log in to Docker Hub\n        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9\n        with:\n          username: ${{ secrets.DOCKER_USERNAME }}\n          password: ${{ secrets.DOCKER_PASSWORD }}\n\n      - name: Log in to the Container registry\n        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9\n        with:\n          registry: ghcr.io\n          username: ${{ github.actor }}\n          password: ${{ secrets.GITHUB_TOKEN }}\n\n      - name: Extract metadata (tags, labels) for Docker\n        id: meta\n        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38\n        with:\n          images: |\n            my-docker-hub-namespace/my-docker-hub-repository\n            ghcr.io/${{ github.repository }}\n\n      - name: Build and push Docker images\n        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc\n        with:\n          context: .\n          push: true\n          tags: ${{ steps.meta.outputs.tags }}\n          labels: ${{ steps.meta.outputs.labels }}\n"))))}g.isMDXComponent=!0},6967:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/repo-secrect-3a35354eeda7b4df693c52a9e9e8e79a.png"},5915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vars-env-7f80c95e8356a4877a06290e615ef468.png"}}]);