"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[1963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=p(n),h=a,b=g["".concat(u,".").concat(h)]||g[h]||c[h]||o;return n?i.createElement(b,r(r({ref:t},l),{},{components:n})):i.createElement(b,r({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[g]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>u,toc:()=>l});var i=n(87462),a=n(67294),o=n(3905);const r={title:"use react to build your own static website by github page",description:"\u8a18\u9304\u4e00\u4e0bgithub page\u914d\u5408git hub action\u7684\u90e8\u7f72react vite\u904e\u7a0b\uff0c\u4e26\u63d0\u4f9bgithub multiple repo\u7ba1\u7406\u8fa6\u6cd5\uff0c\u4e3b\u8981\u6b65\u9a5f1.\u5efa\u7acb\u4e00\u500brepo\u540d\u70bayour_github_username.github.io 2.\u5efa\u7acbgh-pages\u5206\u679d3.\u5730\u7aef\u5efa\u7acbCI yml\u6a94 4.\u8a2d\u5b9agithub page\u4f7f\u7528branch gh-pages 5.\u63a8\u5730\u7aef\u8cc7\u6599\u5230main branch 6.CI\u6703\u5e6b\u4f60\u57f7\u884cbuild\u4e26\u628a\u8cc7\u6e90\u653e\u5230gh-pages branch ,Done",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["git"]},s=void 0,u={permalink:"/blog/2023/03/02/github-action/git-hub-page-deploy-from-vite",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/github-action/2023-03-02-git-hub-page-deploy-from-vite.md",source:"@site/blog/github-action/2023-03-02-git-hub-page-deploy-from-vite.md",title:"use react to build your own static website by github page",description:"\u8a18\u9304\u4e00\u4e0bgithub page\u914d\u5408git hub action\u7684\u90e8\u7f72react vite\u904e\u7a0b\uff0c\u4e26\u63d0\u4f9bgithub multiple repo\u7ba1\u7406\u8fa6\u6cd5\uff0c\u4e3b\u8981\u6b65\u9a5f1.\u5efa\u7acb\u4e00\u500brepo\u540d\u70bayour_github_username.github.io 2.\u5efa\u7acbgh-pages\u5206\u679d3.\u5730\u7aef\u5efa\u7acbCI yml\u6a94 4.\u8a2d\u5b9agithub page\u4f7f\u7528branch gh-pages 5.\u63a8\u5730\u7aef\u8cc7\u6599\u5230main branch 6.CI\u6703\u5e6b\u4f60\u57f7\u884cbuild\u4e26\u628a\u8cc7\u6e90\u653e\u5230gh-pages branch ,Done",date:"2023-03-02T00:00:00.000Z",formattedDate:"March 2, 2023",tags:[{label:"git",permalink:"/blog/tags/git"}],readingTime:3.9,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"use react to build your own static website by github page",description:"\u8a18\u9304\u4e00\u4e0bgithub page\u914d\u5408git hub action\u7684\u90e8\u7f72react vite\u904e\u7a0b\uff0c\u4e26\u63d0\u4f9bgithub multiple repo\u7ba1\u7406\u8fa6\u6cd5\uff0c\u4e3b\u8981\u6b65\u9a5f1.\u5efa\u7acb\u4e00\u500brepo\u540d\u70bayour_github_username.github.io 2.\u5efa\u7acbgh-pages\u5206\u679d3.\u5730\u7aef\u5efa\u7acbCI yml\u6a94 4.\u8a2d\u5b9agithub page\u4f7f\u7528branch gh-pages 5.\u63a8\u5730\u7aef\u8cc7\u6599\u5230main branch 6.CI\u6703\u5e6b\u4f60\u57f7\u884cbuild\u4e26\u628a\u8cc7\u6e90\u653e\u5230gh-pages branch ,Done",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["git"]},prevItem:{title:"reset git remote origin branch",permalink:"/blog/2023/03/02/Git/reset-git-origin-branch"}},p={authorsImageUrls:[void 0]},l=[{value:"step1. \u5efa\u7acb repo",id:"step1-\u5efa\u7acb-repo",level:2},{value:"step2.\u5728\u4f60\u7684 github repo \u5efa\u7acb gh-pages \u5206\u679d",id:"step2\u5728\u4f60\u7684-github-repo-\u5efa\u7acb-gh-pages-\u5206\u679d",level:2},{value:"step3.\u5730\u7aef yml \u6a94",id:"step3\u5730\u7aef-yml-\u6a94",level:2},{value:"step4.\u8a2d\u5b9a\u9810\u8a2d\u5206\u679d\u70ba gh-pages",id:"step4\u8a2d\u5b9a\u9810\u8a2d\u5206\u679d\u70ba-gh-pages",level:2},{value:"step5. \u63a8\u6a94\u6848\u5230 github main branch",id:"step5-\u63a8\u6a94\u6848\u5230-github-main-branch",level:2},{value:"DONE",id:"done",level:2}],g={toc:l},c="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,i.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"step1-\u5efa\u7acb-repo"},"step1. \u5efa\u7acb repo"),(0,o.kt)("p",null,"\u5275\u5efa repo \u8cc7\u6599\uff0c\u7db2\u8def\u4e0a\u5f88\u591a\uff0c\u53ef\u4ee5 google \u4e00\u4e0b\uff0c\u8aaa\u4e00\u4e0b\u6211\u9047\u5230\u7684\u554f\u984c\u662f\u6211\u6709\u5169\u500b github repo\uff0c\u5728 mac m1 \u96fb\u8166\u4e0a\u63a8\u7b2c\u4e8c\u500b repo \u6703\u4e00\u76f4\u5831 403 \u932f\u8aa4\uff0c\u89e3\u6cd5\n\u53c3\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts"},"\u5b98\u7db2\uff1a\u7ba1\u7406\u591a\u500b\u5e33\u6236")),(0,o.kt)("p",null,"::: tip\n\u4f46\u662f\uff01\u6211\u5f8c\u4f86\u5207\u56de\u539f\u672c\u90a3\u500b repo \u4ed6\u53c8\u958b\u59cb 403 \u5831\u932f\u4e86\uff0c\u800c\u4e14\u540c\u6a23\u65b9\u5f0f\u518d\u64cd\u4f5c\u4e5f\u5931\u6557\uff0c\u4e4b\u5f8c\u5617\u8a66\u7528 ssh \u65b9\u5f0f\uff0c\u5c31\u6c92\u9047\u5230\u4e0a\u8ff0\u554f\u984c\uff0c\u6240\u4ee5\u5efa\u8b70\u7528 ssh \u4f86\u63a8 code \u5427\uff01\n:::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git config --get credential.helper\n# \u5982\u679c\u8f38\u51fa\u70baosxkeychain\uff0c\u5247\u60a8\u4f7f\u7528\u7684\u662f macOS \u9470\u5319\u4e32\u3002\u8981\u6e05\u9664\u6191\u64da\uff0c\u8acb\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4\n#\u6e05\u9664\u6191\u64da\ngit credential-osxkeychain erase https://github.com\n# \u5c07 Git \u914d\u7f6e\u70ba\u7de9\u5b58\u60a8\u514b\u9686\u5b58\u5132\u5eab\u7684\u6bcf\u500b\u672c\u5730\u76ee\u9304\u7684\u6191\u64da\ngit config --global credential.useHttpPath true\n")),(0,o.kt)("p",null,"\u5275\u7acb repo \u540d\u7a31\u9019\u908a\u5c31\u8b1b\u6bd4\u8f03\u7c21\u55ae\u505a\u6cd5\uff0c\u4e0d\u52a0\u8def\u7531\u7684\u7248\u672c\uff0crepo \u540d\u7a31\u662f\nusername.github.io (\u628a username \u63db\u6210\u4f60\u7684 git \u8a3b\u518a\u540d\u5b57)"),(0,o.kt)(a.Fragment,null,(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{src:n(24432).Z,alt:"git-repo name set yourusername.github.io"}))),(0,o.kt)("h2",{id:"step2\u5728\u4f60\u7684-github-repo-\u5efa\u7acb-gh-pages-\u5206\u679d"},"step2.\u5728\u4f60\u7684 github repo \u5efa\u7acb gh-pages \u5206\u679d"),(0,o.kt)("p",null,"\u9019\u500b\u5c31\u5728 github \u4e0a\u5efa\u7acb\u8a72\u5206\u679d\u5c31\u597d\uff0c\u88e1\u9762\u6a94\u6848\u9810\u8a2d\u6703 copy main \u5206\u679d\uff0c\u9019\u6c92\u95dc\u4fc2\u3002"),(0,o.kt)("h2",{id:"step3\u5730\u7aef-yml-\u6a94"},"step3.\u5730\u7aef yml \u6a94"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# \u5728git \u6839\u76ee\u9304\nmkdir -p ./github/workflows\n")),(0,o.kt)("p",null,"\u8907\u88fd\u4ee5\u4e0b\u9019\u6bb5\u5230\u540d\u70ba deploy.yml \u7684\u6a94\u6848\uff0c\u6ce8\u610f\u7684\u662f\u56e0\u70ba\u6211\u662f\u7528 vite\uff0c\u7136\u5f8c\u7ba1\u7406\u5305\u7528 yarn\uff0cvite build \u7684\u8cc7\u6599\u593e\u653e\u5728 dist \u5e95\u4e0b\uff0c\u5982\u679c\u4f60\u662f\u7528\u4e00\u822c\u5efa\u7acb react \u5305\u7684\u65b9\u6cd5\uff0c\u6703\u5728 build\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{35-36} title="./github/workflows/deploy.yml"',"{35-36}":!0,title:'"./github/workflows/deploy.yml"'},"name: Deploy to GitHub Pages\n\non:\n  push:\n    branches:\n      - main\n    # Review gh actions docs if you want to further define triggers, paths, etc\n    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on\npermissions:\n  contents: write\n  pull-requests: write\njobs:\n  deploy:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 18\n          cache: yarn\n\n      - name: Install dependencies\n        run: yarn install --frozen-lockfile\n      - name: Build website\n        run: yarn build\n\n      # Popular action to deploy to GitHub Pages:\n      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          # Build output to publish to the `gh-pages` branch:\n          # \u9019\u88e1\u8981\u6539\u6210\u4f60\u7684build\u51fa\u4f86\u7684\u8cc7\u6599\u593e\uff01\uff01\n          publish_dir: ./dist\n          # The following lines assign commit authorship to the official\n          # GH-Actions bot for deploys to `gh-pages` branch:\n          # https://github.com/actions/checkout/issues/13#issuecomment-724415212\n          # The GH actions bot is used by default if you didn't specify the two fields.\n          # You can swap them out with your own user credentials.\n          user_name: github-actions[bot]\n          user_email: 41898282+github-actions[bot]@users.noreply.github.com\n")),(0,o.kt)("h2",{id:"step4\u8a2d\u5b9a\u9810\u8a2d\u5206\u679d\u70ba-gh-pages"},"step4.\u8a2d\u5b9a\u9810\u8a2d\u5206\u679d\u70ba gh-pages"),(0,o.kt)("p",null,'\u9019\u5e03\u5f88\u91cd\u8981\uff0c\u56e0\u70ba\u6211\u6bcf\u6b21\u8a2d\u5b9a\u90fd\u5fd8\u8a18\u8981\u8a2d\u5b9a\u9019\u500b\uff01 \u5fd8\u8a18\u7684\u8a71\uff0c\u6700\u5f8c\u9023\u7dda\u5230\u7db2\u7ad9\u90fd\u6703 F12 \u5831\u932f\nFailed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/jsx". Strict MIME type checking is enforced for module scripts per HTML spec.'),(0,o.kt)("p",null,"!!!\u5f88\u91cd\u8981!!! \u4e0d\u7136\u7db2\u7ad9\u6703\u662f\u767d\u7684\uff31\uff21\uff31"),(0,o.kt)(a.Fragment,null,(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{src:n(70782).Z,alt:"how to set default branck of gh-pages"}))),(0,o.kt)("h2",{id:"step5-\u63a8\u6a94\u6848\u5230-github-main-branch"},"step5. \u63a8\u6a94\u6848\u5230 github main branch"),(0,o.kt)("p",null,"\u5c31 ",(0,o.kt)("inlineCode",{parentName:"p"},"git push")," \uff0c\u7136\u5f8c\u4f60\u53ef\u4ee5\u5230 action \u90a3\u908a\u78ba\u8a8d\u662f\u5426 CI \u6210\u529f\uff0c\u6210\u529f\u7684\u8a71\u8acb\u5230 gh-pages \u78ba\u8a8d\u8cc7\u6599\u593e\u7d50\u69cb\u662f\u4f60 build \u5b8c\u8cc7\u6599\u593e\u7684\u9577\u76f8\uff0c\u7576\u7136\uff0c\u5730\u7aef\u8acb\u78ba\u8a8d build \u5b8c\u8cc7\u6599\uff0c\u662f\u53ef\u4ee5\u6210\u529f\u63d0\u4f9b\u670d\u52d9\u7684\uff01"),(0,o.kt)("p",null,"\u6210\u529f\u756b\u9762\u8981\u9577\u9019\u6a23"),(0,o.kt)(a.Fragment,null,(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{src:n(74485).Z,alt:"picture of the success result of ci"}))),(0,o.kt)("h2",{id:"done"},"DONE"),(0,o.kt)("p",null,"\u8acb\u9023\u7dda ",(0,o.kt)("a",{parentName:"p",href:"https://yourusername.github.io/"},"https://yourusername.github.io/")," \u505a\u78ba\u8a8d"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u53c3\u8003\u8cc7\u6599"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/static-deploy.html#github-pages"},"Vite Official Documentation"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=yo2bMGnIKE8"},"Youtube Video - How to deploy Vite App on GitHub Pages"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/deployment#deploying-to-github-pages"},"Deployment Docusaurus"))))))}h.isMDXComponent=!0},70782:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gh-pages-01429e5af8a40496cac863a258a1b422.png"},24432:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/git-repo-git-page-82b098f93b830fa79a07aab4bf912077.png"},74485:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/github-ci-success-fe00ac4263bfc9497ce5880bd3c95187.png"}}]);