"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[1941],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(b,i(i({ref:n},u),{},{components:t})):a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={title:"learn github action from github docs",description:"github action\u5728\u8a2d\u8a08\u4e0a\u63d0\u4f9b\u8a31\u591a\u8868\u793a\u5f0f\uff0c\u8ddf\u5167\u5efa\u51fd\u793a\uff0c\u4e0a\u4e0b\u6587\uff0c\u9019\u908a\u5c07\u6574\u7406\u5b98\u7db2\u6559\u5b78\u77e5\u8b58\uff0c\u4ee5\u53ca\u4f7f\u7528\u5fc3\u5f97\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["github action","CICD"],sidebar_position:2},i=void 0,l={permalink:"/blog/2023/03/10/github-action/githubaction-learing",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/github-action/2023-03-10-githubaction-learing.md",source:"@site/blog/github-action/2023-03-10-githubaction-learing.md",title:"learn github action from github docs",description:"github action\u5728\u8a2d\u8a08\u4e0a\u63d0\u4f9b\u8a31\u591a\u8868\u793a\u5f0f\uff0c\u8ddf\u5167\u5efa\u51fd\u793a\uff0c\u4e0a\u4e0b\u6587\uff0c\u9019\u908a\u5c07\u6574\u7406\u5b98\u7db2\u6559\u5b78\u77e5\u8b58\uff0c\u4ee5\u53ca\u4f7f\u7528\u5fc3\u5f97\u3002",date:"2023-03-10T00:00:00.000Z",formattedDate:"March 10, 2023",tags:[{label:"github action",permalink:"/blog/tags/github-action"},{label:"CICD",permalink:"/blog/tags/cicd"}],readingTime:10.97,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"learn github action from github docs",description:"github action\u5728\u8a2d\u8a08\u4e0a\u63d0\u4f9b\u8a31\u591a\u8868\u793a\u5f0f\uff0c\u8ddf\u5167\u5efa\u51fd\u793a\uff0c\u4e0a\u4e0b\u6587\uff0c\u9019\u908a\u5c07\u6574\u7406\u5b98\u7db2\u6559\u5b78\u77e5\u8b58\uff0c\u4ee5\u53ca\u4f7f\u7528\u5fc3\u5f97\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["github action","CICD"],sidebar_position:2},prevItem:{title:"dockermultiplatform build - docker buildx\u6307\u4ee4",permalink:"/blog/2023/03/10/Docker/docker-muiltiplatform"},nextItem:{title:"linux command(sed grep awk)",permalink:"/blog/2023/03/08/linux-server/linux-command-repratice"}},s={authorsImageUrls:[void 0]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u57fa\u672c\u529f",id:"\u57fa\u672c\u529f",level:2},{value:"Expressions",id:"expressions",level:3},{value:"Contexts",id:"contexts",level:3},{value:"Variables",id:"variables",level:3},{value:"Default environment variables",id:"default-environment-variables",level:3}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u4e00\u958b\u59cb\u662f\u8df3\u8457\u5b78\uff0c\u76f4\u63a5 google \u600e\u9ebc\u7528 github action \u505a\u5230 CI \u5efa\u7acb image \u4e26\u63a8\u5230 github container\uff0c\u4e0d\u904e\u9019\u95dc\u904e\u5b8c\u5f8c\uff0c\u5728 deploy \u5230 azure web container \u5c31\u5361\u95dc\u4e86\uff0c\u9019\u908a\u8cbc\u5361\u95dc\u7684",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/deployment/deploying-to-your-cloud-provider/deploying-to-azure/deploying-docker-to-azure-app-service"},"\u90e8\u5206")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  deploy:\n    runs-on: ubuntu-latest\n\n    needs: build\n\n    environment:\n      name: 'production'\n      url: ${{ steps.deploy-to-webapp.outputs.webapp-url }}\n\n    steps:\n      - name: Lowercase the repo name\n        run: echo \"REPO=${GITHUB_REPOSITORY,,}\" >>${GITHUB_ENV}\n\n      - name: Deploy to Azure Web App\n        id: deploy-to-webapp\n        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e\n        with:\n          app-name: ${{ env.AZURE_WEBAPP_NAME }}\n          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}\n          images: 'ghcr.io/${{ env.REPO }}:${{ github.sha }}'\n")),(0,o.kt)("p",null,"\u5982\u679c\u6c92\u770b\u904e\u5b98\u7db2\u6559\u5b78\uff0c\u770b\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"${{ steps.deploy-to-webapp.outputs.webapp-url }}")," ",(0,o.kt)("inlineCode",{parentName:"p"},"${{ env.AZURE_WEBAPP_NAME }}")," ",(0,o.kt)("inlineCode",{parentName:"p"},"${{ github.sha }}")," ",(0,o.kt)("inlineCode",{parentName:"p"},"${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}"),"\n\u9019\u4e9b\u6771\u897f\u81ea\u7136\u6703\u50bb\u4f4f\uff0c\u7136\u5f8c\u56de\u53bb google\uff0c\u6703\u767c\u73fe\u5b98\u7db2\u7d66\u4e86\u4e00\u5927\u5806 context \u4ecb\u7d39\uff0c\u7c21\u8a00\u4e4b\uff0c\u9084\u662f\u8173\u8e0f\u5be6\u5730\u4f86\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"},"Understanding GitHub Actions"),"\u5427\uff01"),(0,o.kt)("p",null,"\u4e0b\u9762\u8cc7\u8a0a\u518d\u56de\u4f86\u770b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"${{ steps.deploy-to-webapp.outputs.webapp-url }}")," \u9019\u6bb5\u610f\u601d\u6703 refer \u5230 id: deploy-to-webapp \u7684\u9019\u500b step\uff0c\u81f3\u65bc webapp-url \u662f\u5565\uff1f\u9019\u662f action \u7684 azure/webapps-deploy \u7684 output\u3002\n\u81f3\u65bc output \u8ddf input \u662f\u5565\uff0c\u9019\u6703\u7559\u5230\u4e4b\u5f8c\u4e86\u89e3 actions \u6642\u5728\u4f86\u4e86\u89e3\uff5e\n${GITHUB_REPOSITORY} \u662f\u5167\u5efa\u8b8a\u6578\uff0c${{ github.sha }}\u662f github \u4e0a\u4e0b\u6587\u7684\u5167\u5efa\u8b8a\u6578\uff0c${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}\u4f7f\u7528\u8a2d\u5b9a\u5728 configuration \u7684\u503c\uff0c\u4f7f\u7528\u7684\u662f sercrets \u4e0a\u4e0b\u6587\u3002"),(0,o.kt)("details",null,(0,o.kt)("summary",null," Create and publish a Docker image to github container registry and deploy to azure web container"),(0,o.kt)("a",{href:"https://docs.github.com/en/actions/deployment/deploying-to-your-cloud-provider/deploying-to-azure/deploying-docker-to-azure-app-service"},"github : Deploying Docker to Azure App Service"),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nname: Create and publish a Docker image to github container registry and deploy to azure web container\n\nenv:\n  AZURE_WEBAPP_NAME: ford-amd   # set this to your application's name\non:\n  push:\n    branches: ['main']\npermissions:\n  contents: 'read'\n  packages: 'write'\n\njobs:\n  build:\n    environment:\n      name: prod\n    runs-on: ubuntu-latest\n    permissions:\n      contents: read\n      packages: write\n    env:\n      Greeting: Hello\n\n    steps:\n\n      - name: Checkout repository\n        uses: actions/checkout@v3\n      - name: 'Create env file'\n        run: |\n          touch sql_app/.env\n          echo \"${{ secrets.ENV_FILE }}\" > sql_app/.env\n      - name: Set up QEMU\n        uses: docker/setup-qemu-action@v2\n      - name: Set up Docker Buildx\n        uses: docker/setup-buildx-action@v2\n\n      - name: Log in to the Container registry\n        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9\n        with:\n          registry: ghcr.io\n          username: ${{ github.actor }}\n          password: ${{ secrets.GITHUB_TOKEN }}\n      - name: Lowercase the repo name\n        run: echo \"REPO=${GITHUB_REPOSITORY,,}\" >>${GITHUB_ENV}\n      - name: Build and push container image to registry\n        uses: docker/build-push-action@v4\n        with:\n          push: true\n          context: .\n          platforms: linux/amd64,linux/arm64\n          tags: ghcr.io/${{ env.REPO }}:${{ github.sha }}\n          file: ./Dockerfile\n  deploy:\n    runs-on: ubuntu-latest\n\n    needs: build\n\n    environment:\n      name: prod\n      url: ${{ steps.deploy-to-webapp.outputs.webapp-url }}\n\n    steps:\n      - name: Lowercase the repo name\n        run: echo \"REPO=${GITHUB_REPOSITORY,,}\" >>${GITHUB_ENV}\n\n      - name: Deploy to Azure Web App\n        id: deploy-to-webapp\n        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e\n        with:\n          app-name: ${{ env.AZURE_WEBAPP_NAME }}\n          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}\n          images: 'ghcr.io/${{ env.REPO }}:${{ github.sha }}'\n\n\n\n\n")))),(0,o.kt)("h2",{id:"\u57fa\u672c\u529f"},"\u57fa\u672c\u529f"),(0,o.kt)("p",null,"\u56de\u9867\u4e00\u4e0b github action basic demo\uff0cgithub action \u662f\u7531 git \u6839\u76ee\u9304\u540c\u5c64\u7684\n.github/workflows \u4e2d\u7684 xxxx.yml \u7d44\u6210\uff0cworkflow \u7684\u7d50\u69cb\u901a\u5e38\u662f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nEvent \u89f8\u767c -> Job -> steps\n\n")),(0,o.kt)("p",null,"Event: \u63cf\u8ff0\u89f8\u767c\u8a72 pipline \u689d\u4ef6"),(0,o.kt)("p",null,"Job: \u5b9a\u7fa9 runner, \u74b0\u5883\u8b8a\u6578\u5f8c\uff0c\u5728\u9019\u500b\u689d\u4ef6\u4e0b\u57f7\u884c\u591a\u500b step \uff0c\u8209\u4f8b\uff1a \u7de8\u8b6f\u6a94\u6848 \u53ef\u4ee5\u7576\u4e00\u500b job\uff0c\u55ae\u5143\u6e2c\u8a66\u4e5f\u53ef\u4ee5\u7576\u4e00\u500b job\u3002 \u8981\u6ce8\u610f\u7684\u662f\uff0cjob \u9593\u662f\u5e73\u884c\u57f7\u884c\uff0c\u6240\u4ee5\u8981\u5728\u55ae\u5143\u6e2c\u8a66\u904e\u95dc\u5728\u57f7\u884c\u7de8\u8b6f\u7684\u8a71\uff0c\u8981\u984d\u5916\u5beb depends\u3002job \u9593\u53ef\u4ee5\u900f\u904e artifacts \u628a job \u7522\u51fa\u6a94\u6848\uff0c\u50b3\u7d66\u5225\u7684 job \u7528\u3002"),(0,o.kt)("p",null,"steps: \u5b9a\u7fa9\u591a\u500b\u6307\u4ee4\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5225\u4eba\u63d0\u4f9b\u7684\u5957\u4ef6 actions\uff0c\u4e5f\u53ef\u4ee5\u662f\u67d0\u96bb shell script"),(0,o.kt)("h3",{id:"expressions"},"Expressions"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u500b job \u8981\u57f7\u884c\uff0c\u4f46\u60f3\u8a2d\u5b9a\u57f7\u884c\u524d\u63d0\u662f\u67d0\u500b\u74b0\u5883\u53c3\u6578 \u70ba true\uff0c\u8981\u600e\u9ebc\u57f7\u884c\uff1f\n\u9019\u908a\u6709\u5e7e\u500b\u89c0\u5ff5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u74b0\u5883\u53c3\u6578:")),(0,o.kt)("p",null,"\u5728 github action \u6240\u6709\u7cfb\u7d71\u5167\u5efa\u8b8a\u6578\uff0c\u74b0\u5883\u8b8a\u6578\uff0c\u52a0\u5bc6\u7684\u8b8a\u6578\uff0c\u8a2d\u5b9a\u5728 configuration \u7684\u8b8a\u6578\u9019\u4e9b\u6771\u897f\u90fd\u88ab\u7576\u4f5c",(0,o.kt)("highlight",{color:"blue"},"Contexts")," \u7ba1\u7406\u3002"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u8868\u9054\u5f0f")),(0,o.kt)("p",null,"\u7d50\u69cb\u90fd\u9577\u9019\u6a23",(0,o.kt)("inlineCode",{parentName:"p"},"${{ <expression> }}"),","),(0,o.kt)("p",null,"\u652f\u63f4\u7684\u6578\u64da\u985e\u578b ",(0,o.kt)("inlineCode",{parentName:"p"},"boolen")," ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"\uff0c\u5beb\u6cd5\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nenv:\nmyNull: ${{ null }}\nmyBoolean: ${{ false }}\nmyIntegerNumber: ${{ 711 }}\nmyFloatNumber: ${{ -9.2 }}\nmyHexNumber: ${{ 0xff }}\nmyExponentialNumber: ${{ -2.99e-2 }}\nmyString: Mona the Octocat\nmyStringInBraces: ${{ 'It''s open source!' }}\n\n")),(0,o.kt)("p",null,"\u904b\u7b97\u5b50\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n( ) Logical grouping\n[ ] Index\n. Property de-reference\n! Not\n< Less than\n<= Less than or equal\n\n>     Greater than\n>\n> = Greater than or equal\n> == Equal\n> != Not equal\n> && And\n> || Or\n\n")),(0,o.kt)("p",null,"if \u5224\u65b7\u5beb\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nprod-check:\nif: ${{ github.ref == 'refs/heads/main' }}\nruns-on: ubuntu-latest\nsteps:\n\n")),(0,o.kt)("p",null,"\u6b64\u5916 github action \u4e5f\u63d0\u4f9b\u5f88\u591a\u5167\u5efa function\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"contains( search, item )")," \uff0c\u5982\u679c search \u542b\u6709 item\uff0c\u9019\u500b\u51fd\u6578\u5c07\u8fd4\u56de true\u3002\u5982\u679c search \u662f\u6578\u7d44\u4e2d\u3002\u5982\u679c item \u662f\u4e00\u500b search \u7684\u5143\u7d20\uff0c\u9019\u500b\u51fd\u6578\u5c07\u8fd4\u56de true\uff0c\u5982\u679c\u9805\u76ee\u662f\u641c\u7d22\u7684\u5b50\u5b57\u7b26\u4e32\u3002\u9019\u500b\u51fd\u6578\u4e0d\u5340\u5206\u5927\u5c0f\u5beb\u3002\u5b83\u5c07\u503c\u8f49\u63db\u70ba\u5b57\u7b26\u4e32\u9032\u884c\u6bd4\u8f03\u3002"),(0,o.kt)("p",null,"contains('Hello world', 'llo') returns true."),(0,o.kt)("p",null,"contains(github.event.issue.labels.","*",".name, 'bug') returns true if the issue related to the event has a label \"bug\"."),(0,o.kt)("p",null,"\u9084\u6709\u5f88\u591a\u5167\u5efa\u65b9\u6cd5\uff0c\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/expressions"},"\u53c3\u8003\u5b98\u7db2")),(0,o.kt)("h3",{id:"contexts"},"Contexts"),(0,o.kt)("p",null,"\u4f60\u904b\u884c\u7684 workflow \u4e2d\u7684\u8cc7\u8a0a\uff0c\u53ef\u4ee5\u900f\u904e Contexts \u53d6\u7684\uff0c\u6bcf\u500b Context \u90fd\u662f\u4e00\u500b\u7269\u4ef6\uff0c\u5b83\u5e36\u6709\u7684\u5c6c\u6027\u53ef\u4ee5\u662f strings \u6216 \u7269\u4ef6\u3002"),(0,o.kt)("p",null,"\u8981\u4f7f\u7528 contexts \u9700\u8981\u6309\u7167\u9019\u500b\u683c\u5f0f",(0,o.kt)("inlineCode",{parentName:"p"},"${{ <context> }}")),(0,o.kt)("p",null,"Context \u7a2e\u985e\u8d85\u591a\uff0c\u9019\u908a\u6703\u5927\u81f4\u8b1b\u4ed6\u7684\u4f5c\u7528"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"github"),"- \u7576\u524d workflow \u7684 branch,\u89f8\u767c\u6a21\u5f0f\uff0crepo \u540d\u5b57\uff0cowner \u540d\u5b57\u7b49\u7b49\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"env")," - \u5728 workflow or job or steps \u88e1\u9762\u8a2d\u5b9a\u5f97\u74b0\u5883\u8b8a\u6578"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vars")," - \u5728 repo \u6216 \u7d44\u7e54 \u6216 environment \u968e\u6bb5\uff0c\u8a2d\u5b9a\u5728 Variable \u7684 key value(\u5c31\u662f setting \u7684 variable \u76f8\u95dc\u6771\u897f)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"job")," - \u8ddf\u73fe\u5728\u6b63\u5728 run \u7684 job \u6709\u95dc\u4e8b\u9805\uff0c\u4f8b\u5982\u73fe\u5728\u8dd1\u7684 runner \u7684 id,\u8dd1\u6210\u529f\u6216\u5931\u6557\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jobs")," - \u50c5\u5728\u53ef\u91cd\u7528\u5de5\u4f5c\u6d41\u4e2d\u53ef\u7528\uff0c\u4e26\u4e14\u53ea\u80fd\u7528\u65bc\u8a2d\u7f6e\u53ef\u91cd\u7528\u5de5\u4f5c\u6d41\u7684\u8f38\u51fa\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"steps")," - \u5b9a\u7fa9 steps \u968e\u6bb5\u8f38\u51fa\u7684\u6210\u54c1\uff0c\u4ee5\u53ca\u6b64 steps \u904b\u4f5c\u7d50\u679c\uff08\u6210\u529f \u5931\u6557 \u53d6\u6d88 \u8df3\u904e\uff09"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"runner")," - Information about the runner that is running the current job"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sercets")," - \u5728 repo \u6216 \u7d44\u7e54 \u6216 environment \u968e\u6bb5\u8a2d\u5b9a\u5728 secrect \u7684 key value"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"strategy")," - \u7b56\u7565\uff0c\u4e3b\u8981\u7528\u65bc\u5728 matrix \u77e9\u9663\u60c5\u6cc1\u74b0\u5883\u4e0b\u7684 job \u72c0\u614b\u63cf\u8ff0"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"matrix")," - \u77e9\u9663\u8f38\u5165\uff0c\u5982\u679c\u4f60\u7684 job \u88e1\u9762\u7684\u6e2c\u8a66\u7cfb\u7d71\u8981\u6e2c\u8a66\u4f60\u7684 code \u5728 mac \u8ddf windows \u57f7\u884c\u90fd\u6c92\u554f\u984c\uff0c\u723e\u4e14\u4e5f\u8981\u78ba\u4fdd\u5728 node 14 \u8ddf node16 \u904b\u884c\u90fd\u6b63\u5e38\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nname: Test matrix\non: push\n\njobs:\n  build:\n    runs-on: ${{ matrix.os }}\n    strategy:\n      matrix:\n        os: [ubuntu-latest, windows-latest]\n        node: [14, 16]\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: ${{ matrix.node }}\n      - name: Install dependencies\n        run: npm ci\n      - name: Run tests\n        run: npm test\n\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"needs"),"- \u7576\u524d\u4f5c\u696d\u7684\u4f9d\u8cf4\u9805\uff0c\u8981\u7528 id \u6307\u5b9a"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"needs demo"),(0,o.kt)("div",null,(0,o.kt)("div",null,"This is the detailed content"),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\nname: Build and deploy\non: push\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    outputs:\n      build_id: ${{ steps.build_step.outputs.build_id }}\n    steps:\n      - uses: actions/checkout@v3\n      - name: Build\n        id: build_step\n        run: |\n          ./build\n          echo "build_id=$BUILD_ID" >> $GITHUB_OUTPUT\n  deploy:\n    needs: build\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: ./deploy --build ${{ needs.build.outputs.build_id }}\n  debug:\n    needs: [build, deploy]\n    runs-on: ubuntu-latest\n    if: ${{ failure() }}\n    steps:\n      - uses: actions/checkout@v3\n      - run: ./debug\n\n')))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"inputs"),"- \u770b\u4e0d\u61c2\uff0c\u4e4b\u5f8c\u6709\u7528\u5230\u518d\u88dc"),(0,o.kt)("h3",{id:"variables"},"Variables"),(0,o.kt)("p",null,"\u57fa\u672c\u4e0a\u662f Contexts \u7684\u5ef6\u4f38\uff0c\u8b8a\u91cf\u4ee5\u662f\u5426\u8de8 workflow \u505a\u5340\u5206\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6c92\u6709\u8de8 workflow \u7684 Variable \u5b9a\u7fa9\u65b9\u6cd5\uff0c\u5728 workflow,job,step \u5b9a\u7fa9 key value")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"demo"),(0,o.kt)("div",null,(0,o.kt)("div",null,"This is the detailed content"),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'name: Greeting on variable day\n\non:\n  workflow_dispatch\n\nenv:\n  DAY_OF_WEEK: Monday\n\njobs:\n  greeting_job:\n    runs-on: ubuntu-latest\n    env:\n      Greeting: Hello\n    steps:\n      - name: "Say Hello Mona it\'s Monday"\n        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"\n        env:\n          First_Name: Mona\n\n')))),(0,o.kt)("p",null,"run: env\uff1a\u60a8\u53ef\u4ee5\u901a\u904e\u5728\u6b65\u9a5f\u4e2d\u4f7f\u7528\u7136\u5f8c\u6aa2\u67e5\u6b65\u9a5f\u7684\u8f38\u51fa\u4f86\u5217\u51fa\u53ef\u7528\u65bc\u5de5\u4f5c\u6d41\u6b65\u9a5f\u7684\u6574\u7d44\u74b0\u5883\u8b8a\u91cf\u3002"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u8de8 workflow \u7684 variable \u5b9a\u7fa9\u65b9\u6cd5")),(0,o.kt)("p",null,"\u5728\u4e0a\u4e0b\u6587\u4e2d\u81ea\u52d5\u53ef\u7528 vars\uff0c\u4f7f\u7528\u65b9\u5f0f${{ vars.\uff38\uff38\uff38\uff38 }}\uff0c\u6709\u591a\u7a2e\u5b9a\u7fa9\u65b9\u5f0f\n\u5b58\u5132\u5eab\u3001\u74b0\u5883\u5275\u5efa\u914d\u7f6e\u8b8a\u91cf\u3001\u7d44\u7e54\u5275\u5efa\u914d\u7f6e\u8b8a\u91cf"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"demo"),(0,o.kt)("div",null,(0,o.kt)("div",null,"This is the detailed content"),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'on:\n  workflow_dispatch:\nenv:\n  # Setting an environment variable with the value of a configuration variable\n  env_var: ${{ vars.ENV_CONTEXT_VAR }}\n\njobs:\n  display-variables:\n    name: ${{ vars.JOB_NAME }}\n    # You can use configuration variables with the `vars` context for dynamic jobs\n    if: ${{ vars.USE_VARIABLES == \'true\' }}\n    runs-on: ${{ vars.RUNNER }}\n    environment: ${{ vars.ENVIRONMENT_STAGE }}\n    steps:\n    - name: Use variables\n      run: |\n        echo "repository variable : ${{ vars.REPOSITORY_VAR }}"\n        echo "organization variable : ${{ vars.ORGANIZATION_VAR }}"\n        echo "overridden variable : ${{ vars.OVERRIDE_VAR }}"\n        echo "variable from shell environment : $env_var"\n\n    - name: ${{ vars.HELLO_WORLD_STEP }}\n      if: ${{ vars.HELLO_WORLD_ENABLED == \'true\' }}\n      uses: actions/hello-world-javascript-action@main\n      with:\n        who-to-greet: ${{ vars.GREET_NAME }}\n\n\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5728 github action \u4f7f\u7528\u8b8a\u91cf\u6642\uff0c\u8981\u8003\u616e\u9019\u500b\u8b8a\u91cf\u57f7\u884c\u6642\u662f\u5426\u5728 runner \u5167\u57f7\u884c\uff01"),(0,o.kt)("p",{parentName:"admonition"},"\u5728 runner \u5167\u57f7\u884c\u9810\u8a2d\u662f\u53ef\u4ee5\u7528$Greeting(linux) or $env:NAME(windows)\u53bb\u53d6\u5f97\u8b8a\u91cf\uff0c"),(0,o.kt)("p",{parentName:"admonition"},"\u5728 runner \u5916\u57f7\u884c\u7684\u4f8b\u5b50\uff0c\u8981\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"${{ env.DAY_OF_WEEK == 'Monday' }}"),"\u9019\u6a23\u7684\u8868\u9054\u5f0f\uff0c\u4f7f\u7528\u60c5\u5883\u4f8b\u5982\u8981\u5148\u5224\u65b7 workflow \u74b0\u5883\u8b8a\u91cf\uff0c\u518d\u6c7a\u5b9a\u662f\u5426\u8dd1\u9019\u500b step \u7684\u904e\u7a0b\u3002\n\u7bc4\u4f8b\uff1a"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"demo"),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},'env:\n  DAY_OF_WEEK: Monday\n\njobs:\n  greeting_job:\n    runs-on: ubuntu-latest\n    env:\n      Greeting: Hello\n    steps:\n      - name: "Say Hello Mona it\'s Monday"\n        if: ${{ env.DAY_OF_WEEK == \'Monday\' }}\n        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"\n        env:\n          First_Name: Mona\n\n')),"  "))),(0,o.kt)("h3",{id:"default-environment-variables"},"Default environment variables"),(0,o.kt)("p",null,"The default environment variables that GitHub sets are available to every step in a workflow.\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables"},"\u5167\u5efa\u74b0\u5883\u8b8a\u91cf")),(0,o.kt)("p",null,"\u56e0\u70ba\u5f88\u591a\uff0c\u6240\u4ee5\u6311\u5e7e\u500b\u8a18\u9304\u4e00\u4e0b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"GITHUB_SHA - The commit SHA that triggered the workflow.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"RUNNER_ARCH - \u5e95\u5c64\u67b6\u69cb\uff0cThe architecture of the runner executing the job. Possible values are X86, X64, ARM, or ARM64.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"GITHUB_REPOSITORY_OWNER - The repository owner's name. For example, octocat.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"GITHUB_REF_TYPE- The type of ref that triggered the workflow run. Valid values are branch or tag.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"GITHUB_REF- The fully-formed ref of the branch or tag that triggered the workflow run.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"GITHUB_JOB - The job_id of the current job. For example, greeting_job.\n\u4ee5\u4e0b job_id \u5206\u5225\u70ba My first job \u3001My second job"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\njobs:\n  my_first_job:\n    name: My first job\n  my_second_job:\n    name: My second job\n\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"GITHUB_EVENT_NAME- The name of the event that triggered the workflow. For example, workflow_dispatch.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"GITHUB_ACTOR - The name of the person or app that initiated the workflow. For example, octocat.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"GITHUB_ACTION_REPOSITORY - For a step executing an action, this is the owner and repository name of the action. For example, actions/checkout.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"GITHUB_ACTION - \u7576\u524d\u904b\u884c\u7684\u64cd\u4f5c\u7684\u540d\u7a31\uff0c\u6216 id \u6b65\u9a5f\u7684\u540d\u7a31,id \u662f A unique identifier for the step. You can use the id to reference the step in contexts.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"GITHUB_REPOSITORY - The owner and repository name. For example, octocat/Hello-World."))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/contexts#matrix-context"},"\u53c3\u8003\u7684\u7ba1\u7db2\u8cc7\u6599-contexts"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/expressions"},"\u53c3\u8003\u7684\u7ba1\u7db2\u8cc7\u6599-expression")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/variables"},"\u53c3\u8003\u7684\u7ba1\u7db2\u8cc7\u6599-variables"))))}d.isMDXComponent=!0}}]);