"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[1357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||v[g]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},92285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={title:".env file management  in github action",description:"\u56e0\u70ba\u662f\u4f7f\u7528.env file\u7ba1\u7406\u74b0\u5883\u8b8a\u6578\uff0c\u6240\u4ee5\u63a8\u5230github\u4e0a\u4e00\u5b9a\u6703\u6392\u9664.env\uff0c\u7136\u5f8c\u518d\u8a66CICD\u6642\u5019\u5c31\u60f3\u8aaa\u70ba\u5565\u672c\u5730build\u7684image\u8dd1\u8d77\u4f86\u6c92\u554f\u984c\uff0c\u4e00\u5230CI build\u51fa\u4f86\u7684image\u5c31\u639b\u4e86\uff0c\u8a66\u4e86\u534a\u5929\u624d\u60f3\u5230\u662f.evn\u6c92\u7d66\u3002\u9019\u908a\u6703demo\u5982\u4f55\u5728github action\u4f7f\u7528.env\u8cc7\u6599\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["github action","CICD",".env"]},o=void 0,c={unversionedId:"github-action/2023-03-11-github-action-env-file",id:"github-action/2023-03-11-github-action-env-file",title:".env file management  in github action",description:"\u56e0\u70ba\u662f\u4f7f\u7528.env file\u7ba1\u7406\u74b0\u5883\u8b8a\u6578\uff0c\u6240\u4ee5\u63a8\u5230github\u4e0a\u4e00\u5b9a\u6703\u6392\u9664.env\uff0c\u7136\u5f8c\u518d\u8a66CICD\u6642\u5019\u5c31\u60f3\u8aaa\u70ba\u5565\u672c\u5730build\u7684image\u8dd1\u8d77\u4f86\u6c92\u554f\u984c\uff0c\u4e00\u5230CI build\u51fa\u4f86\u7684image\u5c31\u639b\u4e86\uff0c\u8a66\u4e86\u534a\u5929\u624d\u60f3\u5230\u662f.evn\u6c92\u7d66\u3002\u9019\u908a\u6703demo\u5982\u4f55\u5728github action\u4f7f\u7528.env\u8cc7\u6599\u3002",source:"@site/docs/github-action/2023-03-11-github-action-env-file.md",sourceDirName:"github-action",slug:"/github-action/2023-03-11-github-action-env-file",permalink:"/docs/github-action/2023-03-11-github-action-env-file",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/github-action/2023-03-11-github-action-env-file.md",tags:[{label:"github action",permalink:"/docs/tags/github-action"},{label:"CICD",permalink:"/docs/tags/cicd"},{label:".env",permalink:"/docs/tags/env"}],version:"current",frontMatter:{title:".env file management  in github action",description:"\u56e0\u70ba\u662f\u4f7f\u7528.env file\u7ba1\u7406\u74b0\u5883\u8b8a\u6578\uff0c\u6240\u4ee5\u63a8\u5230github\u4e0a\u4e00\u5b9a\u6703\u6392\u9664.env\uff0c\u7136\u5f8c\u518d\u8a66CICD\u6642\u5019\u5c31\u60f3\u8aaa\u70ba\u5565\u672c\u5730build\u7684image\u8dd1\u8d77\u4f86\u6c92\u554f\u984c\uff0c\u4e00\u5230CI build\u51fa\u4f86\u7684image\u5c31\u639b\u4e86\uff0c\u8a66\u4e86\u534a\u5929\u624d\u60f3\u5230\u662f.evn\u6c92\u7d66\u3002\u9019\u908a\u6703demo\u5982\u4f55\u5728github action\u4f7f\u7528.env\u8cc7\u6599\u3002",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["github action","CICD",".env"]},sidebar:"tutorialSidebar",previous:{title:"CI:use github action to build image and push to git hub container registry",permalink:"/docs/github-action/2023-03-11-githib-action-CI-to-github-container"},next:{title:"s3 set iam permissions for Github Actions to achieve CIBuild an AWS s3 static website",permalink:"/docs/github-action/2023-03-15-s3-setting-for-ci"}},l={},s=[{value:".env \u50b3\u5165\u65b9\u6cd5",id:"env-\u50b3\u5165\u65b9\u6cd5",level:2},{value:"single vaiable",id:"single-vaiable",level:3},{value:"Better method for multiple variables",id:"better-method-for-multiple-variables",level:3}],u={toc:s},p="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"env-\u50b3\u5165\u65b9\u6cd5"},".env \u50b3\u5165\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/60176044/how-do-i-use-an-env-file-with-github-actions"},"\u53c3\u8003\u81ea\u9019\u7bc7 stack overflow")),(0,a.kt)("p",null,"\u5169\u7a2e\u65b9\u5f0f\uff0c\u9019\u4f9d\u64da\u4f60\u7684.env \u88e1\u9762\u5230\u5e95\u6709\u591a\u5c11\u500b\u8b8a\u6578\u3002\u4f46\u5171\u540c\u9ede\u90fd\u662f\u5728 github worlflow \u904e\u7a0b\u4f7f\u7528 secrets \u4e0a\u4e0b\u6587\uff0c\u4f8b\u5982${{ secrets.XXX }}\uff0c\u53bb\u628a\u5b58\u653e\u5728 github registry \u88e1\u9762\u7684\u74b0\u5883\u8b8a\u6578\uff0c\u5b58\u653e\u5230\u6307\u5b9a\u4f4d\u7f6e\u7684.env \u6a94\u3002"),(0,a.kt)("h3",{id:"single-vaiable"},"single vaiable"),(0,a.kt)("p",null,"\u5982\u679c\u53ea\u6709\u4e00\u500b\u8b8a\u6578\uff0c\u5c31\u628a\u8a72\u8b8a\u6578\u653e\u5230 github registry \u88e1\u9762\uff0c\u53d6\u4e0a\u4e0b\u6587\u4f86\u7528\u5c31\u597d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    - name: 'Create env file'\n    run: |\n        touch .env\n        echo API_ENDPOINT=\"https://xxx.execute-api.us-west-2.amazonaws.com\" >> .env\n        echo API_KEY=${{ secrets.API_KEY }} >> .env\n        cat .env\n")),(0,a.kt)("h3",{id:"better-method-for-multiple-variables"},"Better method for multiple variables"),(0,a.kt)("p",null,"\u5982\u679c\u6709\u5f88\u591a\u500b\u8b8a\u6578\u5728.env \u6a94\uff0c\u5c31\u628a.env \u6a94\u6574\u4efd copy \u5230 github registry \u88e1\u9762"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title=".env"',title:'".env"'},'ALGORITHM="HS256"\nACCESS_TOKEN_EXPIRE_MINUTES=60\n# \u5c0dpassword\u52a0\u9e7d\u7684\u7269\u4ef6\n# sql\u9023\u7dda\u7db2\u5740\nSQLALCHEMY_DATABASE_URL="sqlite:///./sql_app.db"\nTOKENURL="token"\nARTICLE_CATEGORY=\'[\\"PythonBasic\\",\\"Fastapi\\",\\"DataScience\\",\\"PythonModule\\",\\"LinuxShellScript\\",\\"JavaScriptBasic\\",\\"React\\"]\'\n')),(0,a.kt)("p",null,"\u5c31\u628a\u4ed6\u6574\u4efd\u88e1\u9762\u7684\u503c copy \u5230 config \u88e1\u9762\u5c31\u597d\uff0c\u5047\u8a2d key \u53eb\u505a ENV_FILE\uff0c\u7136\u5f8c yml \u6a94\u9019\u6a23\u5beb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"     - name: 'Create env file'\n        run: |\n          echo \"${{ secrets.ENV_FILE }}\" > .env\n")),(0,a.kt)("p",null,"\u4ed6\u5c31\u6703\u628a\u4f60\u6240\u6709 value \u9001\u5230.env \u6a94\u4e86\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8a18\u9304\u4e00\u4e0b\u6211\u9047\u5230\u7684\u72c0\u6cc1\uff0c\u56e0\u70ba\u9019\u500b\u771f\u7684\u5361\u9817\u4e45\uff0c\u4e5f\u8a66\u4e0d\u51fa\u4f86\u4e00\u500b\u65b9\u6cd5\uff0c\u6240\u4ee5\u5c31\u5148\u8a18\u9304\u5427\uff0c\u4e5f\u6b61\u8fce\u63d0\u4f9b\u89e3\u7b54\npython dotenv \u5728.env \u6a94\u88e1\u9762\u5beb\u5165 list \uff0c\u8981\u7528\u4ee5\u4e0b\u65b9\u6cd5\u8868\u8ff0\nARTICLE_CATEGORY='",'["PythonBasic","Fastapi","DataScience","PythonModule","LinuxShellScript","JavaScriptBasic","React"]',"'\uff0c\u914d\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"json.loads(os.environ.get('ARTICLE_CATEGORY'))"),"\u53bb\u62ff\u8cc7\u6599\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4f46\u662f\u5728\u4f7f\u7528 action \u9047\u5230\u4e00\u500b\u554f\u984c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"echo ${{ secrets.ENV_FILE }} > .env")," \u6703\u8f38\u5165\u7a7a\u503c\u9032\u53bb\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},'echo "${{ secrets.ENV_FILE }}" > .env'),' \u9019\u6a23\u624d\u6703\u6709\u503c\uff0c\u4f46\u554f\u984c\u5728\u4f7f\u7528""\u5305\u4f4f\u6703\u628a ARTICLE_CATEGORY=\'','["PythonBasic","Fastapi","DataScience","PythonModule","LinuxShellScript","JavaScriptBasic","React"]',"'\u8f49\u6210\n",(0,a.kt)("inlineCode",{parentName:"p"},"ARTICLE_CATEGORY='[PythonBasic,Fastapi,DataScience,PythonModule,LinuxShellScript,JavaScriptBasic,React]'\n")," \u9019\u500b\u683c\u5f0f\u5728\u8b80 json.loads(os.environ.get('ARTICLE_CATEGORY'))\u5c31\u6703\u9047\u5230\u554f\u984c\uff0c\u6703\u5831 error \u56e0\u70ba\u9019\u500b\u683c\u5f0f\u4ed6\u4e0d\u884c\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u5728\u8655\u7406 list \u90e8\u5206\uff0c\u90fd\u5148\u7528",(0,a.kt)("inlineCode",{parentName:"p"},'ARTICLE_CATEGORY=\'[\\"PythonBasic\\",\\"Fastapi\\",\\"DataScience\\",\\"PythonModule\\",\\"LinuxShellScript\\",\\"JavaScriptBasic\\",\\"React\\"]\'')," \u9001\u8cc7\u6599\u3002\u7136\u5f8c\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"json.loads(os.environ.get('ARTICLE_CATEGORY'))"),"\u53bb\u62ff\u8cc7\u6599")))}v.isMDXComponent=!0}}]);