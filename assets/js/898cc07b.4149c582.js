"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[9066],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),k=o,s=p["".concat(d,".").concat(k)]||p[k]||m[k]||i;return r?n.createElement(s,a(a({ref:t},u),{},{components:r})):n.createElement(s,a({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},2608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"docker buildx\u6307\u4ee4",description:"docker \u652f\u63f4\u591a\u5e73\u53f0image\u7684build\u6307\u4ee4",authors:"suyuying",tags:["docker"]},a=void 0,l={permalink:"/blog/2023/03/08/docker-muiltiplatform copy",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-08-docker-muiltiplatform copy.md",source:"@site/blog/2023-03-08-docker-muiltiplatform copy.md",title:"docker buildx\u6307\u4ee4",description:"docker \u652f\u63f4\u591a\u5e73\u53f0image\u7684build\u6307\u4ee4",date:"2023-03-08T00:00:00.000Z",formattedDate:"March 8, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"}],readingTime:4.93,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"docker buildx\u6307\u4ee4",description:"docker \u652f\u63f4\u591a\u5e73\u53f0image\u7684build\u6307\u4ee4",authors:"suyuying",tags:["docker"]},prevItem:{title:"docker context\u6307\u4ee4",permalink:"/blog/2023/03/08/docker-create-context"},nextItem:{title:"Introduction and demo Azure container service",permalink:"/blog/2023/03/06/azure-cloud-container"}},d={authorsImageUrls:[void 0]},c=[{value:"\u57fa\u672c\u4ecb\u7d39",id:"\u57fa\u672c\u4ecb\u7d39",level:2},{value:"1. \u555f\u7528 multi-arch \u652f\u63f4",id:"1-\u555f\u7528-multi-arch-\u652f\u63f4",level:2},{value:"2. \u5efa\u7acb builder(node)",id:"2-\u5efa\u7acb-buildernode",level:2},{value:"3. \u8a2d\u5b9a builder",id:"3-\u8a2d\u5b9a-builder",level:2},{value:"4. \u5efa\u7acb Dockerfile",id:"4-\u5efa\u7acb-dockerfile",level:2},{value:"5. \u5efa\u7acb multi-arch Docker image",id:"5-\u5efa\u7acb-multi-arch-docker-image",level:2},{value:"docker buildx create --name my-node \u662f\u5efa\u7acb\u7bc0\u9ede\u55ce\uff1f",id:"docker-buildx-create---name-my-node-\u662f\u5efa\u7acb\u7bc0\u9ede\u55ce",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u57fa\u672c\u4ecb\u7d39"},"\u57fa\u672c\u4ecb\u7d39"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0d\u652f\u63f4\u591a\u5e73\u53f0\uff0c\u5c31\u6703\u51fa\u73fe\u5728 arm build\uff0c\u7136\u5f8c\u5728 amd deploy \u5931\u6557\uff0c\u4e0a\u7db2\u67e5\u4e0d\u5230\u539f\u56e0\u7684\u554f\u984c\u3002")),(0,o.kt)("p",null,"Docker Buildx \u662f Docker \u5b98\u65b9\u63d0\u4f9b\u7684\u4e00\u500b\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u65bc\u901a\u904e Dockerfile \u6784\u5efa Docker \u6620\u50cf\u3002\u5b83\u7684\u4e3b\u8981\u7279\u9ede\u662f\u53ef\u4ee5\u8de8\u5e73\u81fa\u69cb\u5efa Docker \u6620\u50cf\uff0c\u4e26\u652f\u6301\u591a\u7a2e CPU \u67b6\u69cb\uff08\u5982 x86\u3001ARM\u3001IBM Power \u7b49\uff09\uff0c\u662f\u4e00\u500b\u7528\u4f86\u5efa\u7acb\u548c\u7ba1\u7406 multi-arch Docker image \u7684\u5de5\u5177\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"docker buildx \u7684\u55ae\u4f4d\u662f node\uff0c\u8ddf docker context \u4e0d\u540c\uff0c\u524d\u8005\u662f\u5efa\u7acb\u5f71\u50cf\u7684\u4e3b\u6a5f\uff0c\u53ef\u4ee5\u4f7f\u7528\u591a\u500b\u7bc0\u9ede\u4f86\u52a0\u901f Docker \u6620\u50cf\u7684\u5efa\u7acb\u904e\u7a0b\uff0c\u5f8c\u8005\u5247\u662f\u7528\u4f86\u7ba1\u7406 Docker \u4e3b\u6a5f\u548c Docker registry \u7684\u6a5f\u5236\uff0c\u5b9a\u7fa9\u4e86\u4e00\u500b\u6216\u591a\u500b Docker \u4e3b\u6a5f\u548c Docker registry \u7684\u8a2d\u5b9a\u3002")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u4f7f\u7528 Docker Buildx \u69cb\u5efa Docker \u6620\u50cf\u7684\u57fa\u672c\u6b65\u9a5f\uff1a"),(0,o.kt)("h2",{id:"1-\u555f\u7528-multi-arch-\u652f\u63f4"},"1. \u555f\u7528 multi-arch \u652f\u63f4"),(0,o.kt)("p",null,"\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker buildx")," \u5efa\u7acb multi-arch Docker image\uff0c\u5fc5\u9808\u5148\u555f\u7528 multi-arch \u652f\u63f4(Docker Desktop \u9810\u914d\u7f6e\u4e86 binfmt_misc \u5c0d\u5176\u4ed6\u5e73\u53f0\u7684\u652f\u6301\uff0c\u53ef\u4ee5\u5ffd\u7565\u6b64\u6307\u4ee4)\u3002\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u555f\u7528 multi-arch \u652f\u63f4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --rm --privileged multiarch/qemu-user-static --reset -p yes\n")),(0,o.kt)("h2",{id:"2-\u5efa\u7acb-buildernode"},"2. \u5efa\u7acb builder(node)"),(0,o.kt)("p",null,"\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker buildx")," \u5efa\u7acb multi-arch Docker image\uff0c\u5fc5\u9808\u5148\u5efa\u7acb\u4e00\u500b builder\u3002\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u5efa\u7acb builder\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker buildx create --name mybuilder\n")),(0,o.kt)("h2",{id:"3-\u8a2d\u5b9a-builder"},"3. \u8a2d\u5b9a builder"),(0,o.kt)("p",null,"\u5efa\u7acb builder \u5f8c\uff0c\u5fc5\u9808\u5c07 builder \u8a2d\u5b9a\u70ba\u76ee\u524d\u4f7f\u7528\u7684 builder\u3002\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u8a2d\u5b9a builder\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker buildx use mybuilder\n")),(0,o.kt)("h2",{id:"4-\u5efa\u7acb-dockerfile"},"4. \u5efa\u7acb Dockerfile"),(0,o.kt)("p",null,"\u63a5\u4e0b\u4f86\uff0c\u5efa\u7acb\u4e00\u500b Dockerfile\uff0c\u4e26\u5728\u5176\u4e2d\u6307\u5b9a\u8981\u5efa\u7acb\u7684 Docker image\u3002\u4f8b\u5982\uff0c\u5728 Dockerfile \u4e2d\u53ef\u4ee5\u6307\u5b9a\u8981\u5efa\u7acb\u7684 image \u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu:latest"),"\uff0c\u4e26\u5728\u5176\u4e2d\u5b89\u88dd\u4e00\u4e9b\u8edf\u9ad4\u5957\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FROM --platform=$TARGETPLATFORM ubuntu:latest\n\nRUN apt-get update && \\\\\n    apt-get install -y software-properties-common && \\\\\n    add-apt-repository -y ppa:nginx/stable && \\\\\n    apt-get update && \\\\\n    apt-get install -y nginx\n")),(0,o.kt)("h2",{id:"5-\u5efa\u7acb-multi-arch-docker-image"},"5. \u5efa\u7acb multi-arch Docker image"),(0,o.kt)("p",null,"\u5efa\u7acb Dockerfile \u5f8c\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u5efa\u7acb multi-arch Docker image\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker buildx build --platform linux/arm/v7 -t myimage:latest --load .\n")),(0,o.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u547d\u4ee4\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"--platform")," \u53c3\u6578\u6307\u5b9a\u4e86\u8981\u69cb\u5efa\u7684 CPU \u67b6\u69cb\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"-t")," \u53c3\u6578\u6307\u5b9a\u4e86\u6620\u50cf\u7684\u6a19\u7c64\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},".")," \u8868\u793a\u7576\u524d\u76ee\u9304\u662f Dockerfile \u6240\u5728\u7684\u76ee\u9304\u3002"),(0,o.kt)("p",null,"--load \u76f8\u7576\u65bc",(0,o.kt)("inlineCode",{parentName:"p"},"--output=type=docker")," \u6c92\u6709\u6307\u5b9a\u6703\u51fa\u73fe warning"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WARN[0000] No output specified for docker-container driver. Build result will only remain in the build cache. To push result image into registry use --push or to load image into docker use --load\n")),(0,o.kt)("p",null,"--push \u9060\u7aef registry \u76f8\u7576\u65bc",(0,o.kt)("inlineCode",{parentName:"p"},"--output=type=registry")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/docker/buildx/issues/59"},"https://github.com/docker/buildx/issues/59"),"\n2023/3/9 \u4f7f\u7528--platform \u914d\u5408--load\uff0c\u4e0d\u80fd\u652f\u63f4\u591a\u5e73\u53f0\uff0c\u4e00\u6b21\u4e00\u500b\u5e73\u53f0\uff0c\u5426\u5247\u6703\u5831\u932f\n--push \u652f\u63f4\u4e00\u6b21\u591a\u5e73\u53f0 image"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"error: docker exporter does not currently support exporting manifest lists\n"))),(0,o.kt)("p",null,"\u5efa\u7acb\u5b8c\u6210\u5f8c\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u67e5\u770b\u5efa\u7acb\u7684 Docker image\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker images myimage\n")),(0,o.kt)("p",null,"\u63a8\u9001 Docker \u6620\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker push myimage:latest\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u4f7f\u7528 Docker Buildx \u69cb\u5efa Docker \u6620\u50cf\u7684\u57fa\u672c\u6b65\u9a5f\u3002\u4f7f\u7528 Docker Buildx \u53ef\u4ee5\u8b93\u6211\u5011\u66f4\u65b9\u4fbf\u5730\u69cb\u5efa\u8de8\u5e73\u81fa\u7684 Docker \u6620\u50cf\uff0c\u63d0\u9ad8\u4e86\u958b\u767c\u6548\u7387\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"docker buildx rm docker-test")," \u522a\u9664"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"docker buildx use docker-test"),"\u5207\u63db")),(0,o.kt)("h2",{id:"docker-buildx-create---name-my-node-\u662f\u5efa\u7acb\u7bc0\u9ede\u55ce"},"docker buildx create --name my-node \u662f\u5efa\u7acb\u7bc0\u9ede\u55ce\uff1f"),(0,o.kt)("p",null,"\u662f\u7684\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"docker buildx create --name my-node")," \u6307\u4ee4\u6703\u5efa\u7acb\u4e00\u500b\u540d\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"my-node")," \u7684\u7bc0\u9ede\u3002\u7bc0\u9ede\u662f\u7528\u4f86\u5efa\u7acb Docker \u6620\u50cf\u7684\u4e3b\u6a5f\uff0c\u53ef\u4ee5\u4f7f\u7528\u591a\u500b\u7bc0\u9ede\u4f86\u52a0\u901f Docker \u6620\u50cf\u7684\u5efa\u7acb\u904e\u7a0b\uff0c\u6216\u8005\u5efa\u7acb\u4e0d\u540c\u5e73\u53f0\u7684 Docker \u6620\u50cf\u3002"),(0,o.kt)("p",null,"\u5efa\u7acb\u7bc0\u9ede\u6642\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--driver")," \u9078\u9805\u6307\u5b9a\u7bc0\u9ede\u7684\u9a45\u52d5\u7a0b\u5f0f\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-container")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),"\u3002\u9a45\u52d5\u7a0b\u5f0f\u9084\u53ef\u4ee5\u662f\u5176\u4ed6\u7b2c\u4e09\u65b9\u5e73\u53f0\uff0c\u4f8b\u5982 AWS\u3001Azure \u6216 Google Cloud\u3002"),(0,o.kt)("p",null,"\u5728\u5efa\u7acb\u7bc0\u9ede\u6642\uff0c\u53ef\u4ee5\u6307\u5b9a\u7bc0\u9ede\u7684\u540d\u7a31\u3001\u9a45\u52d5\u7a0b\u5f0f\u3001\u9a45\u52d5\u7a0b\u5f0f\u9078\u9805\u3001Docker \u6620\u50cf\u7b49\u8cc7\u8a0a\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u662f\u5efa\u7acb\u4e00\u500b\u540d\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"my-node")," \u7684\u7bc0\u9ede\uff0c\u4f7f\u7528 Docker \u5bb9\u5668\u4f5c\u70ba\u9a45\u52d5\u7a0b\u5f0f\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"moby/buildkit:v0.8.1")," \u4f5c\u70ba Docker \u6620\u50cf\u7684\u793a\u7bc4\u6307\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker buildx create --name my-node --driver docker-container --driver-opt image=moby/buildkit:v0.8.1\n\n")),(0,o.kt)("p",null,"\u5efa\u7acb\u7bc0\u9ede\u5f8c\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker buildx ls")," \u6307\u4ee4\u5217\u51fa\u6240\u6709\u7bc0\u9ede\u3002\u5efa\u7acb Docker \u6620\u50cf\u6642\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--builder")," \u9078\u9805\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u7bc0\u9ede\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker buildx build --builder my-node --platform linux/amd64 -t myimage:latest .\n\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u540d\u70ba my-node \u7684\u7bc0\u9ede\u5efa\u7acb Docker \u6620\u50cf\uff0c\u4e26\u6307\u5b9a\u8981\u5efa\u7acb\u7684\u5e73\u53f0\u70ba linux/amd64\u3002"))}m.isMDXComponent=!0}}]);