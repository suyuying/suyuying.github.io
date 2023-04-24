"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[4383],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>c});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var _=r.createContext({}),m=function(e){var n=r.useContext(_),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=m(e.components);return r.createElement(_.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,_=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),s=m(t),d=i,c=s["".concat(_,".").concat(d)]||s[d]||u[d]||a;return t?r.createElement(c,o(o({ref:n},g),{},{components:t})):r.createElement(c,o({ref:n},g))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var _ in n)hasOwnProperty.call(n,_)&&(l[_]=n[_]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>_,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=t(7462),i=(t(7294),t(3905));const a={title:"Quick sort algorithm in Python",description:"\u9019\u500b\u7a0b\u5f0f\u78bc\u4e3b\u8981\u62ff\u4f86\u6392\u5e8f\u5e8f\u5217,\u76ee\u524d\u7406\u89e3\u5c31\u662f\u5e8f\u5217 ex.[1, 2, 4, 6, 6, 7] \u6703\u88ab\u5148\u9032\u884c\u4e8c\u5206(mid=n//2),\u4e26\u53d6[:mid]\u8ddf[mid:]\u505a\u8655\u7406,\u800c\u9996\u5148,[:mid]\u905e\u8ff4\u591a\u6b21\u9019\u500b\u904e\u7a0b,\u76f4\u5230\u62c6\u89e3\u5230\u7121\u6cd5\u62c6\u89e3,\u6240\u4ee5\u53ef\u4ee5\u60f3\u898b\u9019\u6642\u5019\u62c6\u6210\u5f88\u591a\u500b\u5c0f list,\u4e4b\u5f8c\u4ed6\u6703\u4f7f\u7528 merge \u4e00\u5c64\u5c64\u5f80\u4e0a\u7d44,\u76f4\u5230[:mid]\u6392\u5e8f\u5b8c\u6210.",image:"https://github.com/suyuying.png",authors:"suyuying",tags:["Python","algorithm"]},o=void 0,l={permalink:"/blog/2023/04/23/Python/algorithm/Quick-sort",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Python/algorithm/2023-04-23-Quick-sort.md",source:"@site/blog/Python/algorithm/2023-04-23-Quick-sort.md",title:"Quick sort algorithm in Python",description:"\u9019\u500b\u7a0b\u5f0f\u78bc\u4e3b\u8981\u62ff\u4f86\u6392\u5e8f\u5e8f\u5217,\u76ee\u524d\u7406\u89e3\u5c31\u662f\u5e8f\u5217 ex.[1, 2, 4, 6, 6, 7] \u6703\u88ab\u5148\u9032\u884c\u4e8c\u5206(mid=n//2),\u4e26\u53d6[:mid]\u8ddf[mid:]\u505a\u8655\u7406,\u800c\u9996\u5148,[:mid]\u905e\u8ff4\u591a\u6b21\u9019\u500b\u904e\u7a0b,\u76f4\u5230\u62c6\u89e3\u5230\u7121\u6cd5\u62c6\u89e3,\u6240\u4ee5\u53ef\u4ee5\u60f3\u898b\u9019\u6642\u5019\u62c6\u6210\u5f88\u591a\u500b\u5c0f list,\u4e4b\u5f8c\u4ed6\u6703\u4f7f\u7528 merge \u4e00\u5c64\u5c64\u5f80\u4e0a\u7d44,\u76f4\u5230[:mid]\u6392\u5e8f\u5b8c\u6210.",date:"2023-04-23T00:00:00.000Z",formattedDate:"April 23, 2023",tags:[{label:"Python",permalink:"/blog/tags/python"},{label:"algorithm",permalink:"/blog/tags/algorithm"}],readingTime:6.78,hasTruncateMarker:!0,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"Quick sort algorithm in Python",description:"\u9019\u500b\u7a0b\u5f0f\u78bc\u4e3b\u8981\u62ff\u4f86\u6392\u5e8f\u5e8f\u5217,\u76ee\u524d\u7406\u89e3\u5c31\u662f\u5e8f\u5217 ex.[1, 2, 4, 6, 6, 7] \u6703\u88ab\u5148\u9032\u884c\u4e8c\u5206(mid=n//2),\u4e26\u53d6[:mid]\u8ddf[mid:]\u505a\u8655\u7406,\u800c\u9996\u5148,[:mid]\u905e\u8ff4\u591a\u6b21\u9019\u500b\u904e\u7a0b,\u76f4\u5230\u62c6\u89e3\u5230\u7121\u6cd5\u62c6\u89e3,\u6240\u4ee5\u53ef\u4ee5\u60f3\u898b\u9019\u6642\u5019\u62c6\u6210\u5f88\u591a\u500b\u5c0f list,\u4e4b\u5f8c\u4ed6\u6703\u4f7f\u7528 merge \u4e00\u5c64\u5c64\u5f80\u4e0a\u7d44,\u76f4\u5230[:mid]\u6392\u5e8f\u5b8c\u6210.",image:"https://github.com/suyuying.png",authors:"suyuying",tags:["Python","algorithm"]},prevItem:{title:"use git submodule in gitlab CI to do ssl-check",permalink:"/blog/2023/04/24/gitlab-action/use-git-submodule-in-gitlab-ci"},nextItem:{title:"introduction of pandas",permalink:"/blog/2023/04/18/Data Analysis/pandas/intro-of-pandas"}},_={authorsImageUrls:[void 0]},m=[{value:"code",id:"code",level:2},{value:"result",id:"result",level:2},{value:"understanding",id:"understanding",level:2}],g={toc:m},s="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"code"},"code"),(0,i.kt)("p",null,"\u5e73\u5e38\u5beb code \u6642\u5019,\u4e0d\u6703\u53bb\u60f3\u5e8f\u5217\u6392\u5217\u5e95\u5c64\u7684\u4e8b\u60c5,\u56e0\u7de3\u969b\u6703\u4e0b,\u5c31\u5b78\u4e00\u5b78\u5427,\u4ee5\u4e0b code \u662f\u8ddf AI \u5b78\u7fd2\u7684,\u80fd\u7528 python \u9019\u6a23\u5728\u540c\u4e00\u500b function \u5167\u57f7\u884c\u540c\u4e00\u500b function,\u9019\u500b\u4e8b\u60c5\u662f\u771f\u7684\u6c92\u60f3\u904e,\u53e6\u5916\u6574\u500b\u7a0b\u5f0f\u57f7\u884c\u904e\u7a0b,\u4ed6\u57f7\u884c\u7684\u9806\u5e8f,\u4e5f\u662f\u5f88\u5927\u5b78\u7fd2\u91cd\u9ede!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'## \u5feb\u901f\u6392\u5217\u6f14\u7b97\u6cd5\u7df4\u7fd2\nimport logging\n\n# \u8a2d\u5b9a logger \u7269\u4ef6\u7684\u540d\u7a31\u3001\u7b49\u7d1a\u3001\u8a0a\u606f\u683c\u5f0f\nlogger = logging.getLogger(__name__)\nlogger.setLevel(logging.DEBUG)\nformatter = logging.Formatter(\'%(asctime)s - %(name)s - %(levelname)s - %(message)s\')\n\n\n# \u8a2d\u5b9a\u8f38\u51fa\u5230\u63a7\u5236\u53f0\u7684 handler\nconsole_handler = logging.StreamHandler()\nconsole_handler.setLevel(logging.INFO)\nconsole_handler.setFormatter(formatter)\nlogger.addHandler(console_handler)\n\n#\u4e8c\u5206\u6cd5\u5f80\u4e0b\u6392\u5e8f\ndef merge_sort(arr):\n    logger.info(f"\u6b64\u6b21\u8655\u7406\u9663\u5217\u70ba{arr}")\n    n = len(arr)\n    if n == 1:\n        return arr, 0\n    else:\n        mid = n // 2\n        logger.info("left \u89e3\u6790\u958b\u59cb")\n        left, inv_left = merge_sort(arr[:mid])\n        logger.info(f"{left}{inv_left}\u5de6\u908a\u7d50\u679c")\n        logger.info("right \u89e3\u6790\u958b\u59cb")\n        right, inv_right = merge_sort(arr[mid:])\n        logger.info(f"{arr[mid:]}\u5207\u5272\u53f3\u5074,\u5408\u4f75,\u53cd\u8f49{inv_right}\u6b21\u53f3\u908a\u7d50\u679c{right}")\n        logger.info(f"{left} {right} \u5de6\u53f3\u5408\u4f75\u958b\u59cb")\n        merged, inv_merge = merge(left, right)\n        logger.info(f"\u5408\u4f75\u5b8c\u6210,{left}{right}\u5408\u6210{merged}\u7d93\u904e {inv_merge}\u6b21\u53cd\u8f49\u5408\u4f75,\u4e2d\u9593\u7d93\u904e{inv_left + inv_right}\u6b21\u53cd\u8f49")\n        return merged, (inv_left + inv_right + inv_merge)\n\n# \u5de6\u53f3\u5408\u4f75\u5e95\u5c64\ndef merge(left, right):\n    i, j, inversions = 0, 0, 0\n    merged = []\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            merged.append(left[i])\n            i += 1\n        else:\n            merged.append(right[j])\n            j += 1\n            inversions += len(left) - i\n    merged += left[i:]\n    merged += right[j:]\n    return merged, inversions\n#\ndef solution(A):\n    merged, inversions = merge_sort(A)\n    if inversions > 1000000000:\n        return -1\n    return merged\n\nprint(solution([1, 4,6,6,7,2]))\n')),(0,i.kt)("h2",{id:"result"},"result"),(0,i.kt)("p",null,"\u904b\u7b97\u7d50\u679c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2023-04-23 10:31:15,067 - __main__ - INFO - \u6b64\u6b21\u8655\u7406\u9663\u5217\u70ba[1, 4, 6, 6, 7, 2]\n2023-04-23 10:31:15,068 - __main__ - INFO - left \u89e3\u6790\u958b\u59cb\n2023-04-23 10:31:15,068 - __main__ - INFO - \u6b64\u6b21\u8655\u7406\u9663\u5217\u70ba[1, 4, 6]\n2023-04-23 10:31:15,068 - __main__ - INFO - left \u89e3\u6790\u958b\u59cb\n2023-04-23 10:31:15,068 - __main__ - INFO - \u6b64\u6b21\u8655\u7406\u9663\u5217\u70ba[1]\n2023-04-23 10:31:15,068 - __main__ - INFO - [1]0\u5de6\u908a\u7d50\u679c\n2023-04-23 10:31:15,068 - __main__ - INFO - right \u89e3\u6790\u958b\u59cb\n2023-04-23 10:31:15,068 - __main__ - INFO - \u6b64\u6b21\u8655\u7406\u9663\u5217\u70ba[4, 6]\n2023-04-23 10:31:15,068 - __main__ - INFO - left \u89e3\u6790\u958b\u59cb\n2023-04-23 10:31:15,068 - __main__ - INFO - \u6b64\u6b21\u8655\u7406\u9663\u5217\u70ba[4]\n2023-04-23 10:31:15,068 - __main__ - INFO - [4]0\u5de6\u908a\u7d50\u679c\n2023-04-23 10:31:15,068 - __main__ - INFO - right \u89e3\u6790\u958b\u59cb\n2023-04-23 10:31:15,068 - __main__ - INFO - \u6b64\u6b21\u8655\u7406\u9663\u5217\u70ba[6]\n2023-04-23 10:31:15,068 - __main__ - INFO - [6]\u5207\u5272\u53f3\u5074,\u5408\u4f75,\u53cd\u8f490\u6b21\u53f3\u908a\u7d50\u679c[6]\n2023-04-23 10:31:15,068 - __main__ - INFO - [4] [6] \u5de6\u53f3\u5408\u4f75\u958b\u59cb\n2023-04-23 10:31:15,068 - __main__ - INFO - \u5408\u4f75\u5b8c\u6210,[4][6]\u5408\u6210[4, 6]\u7d93\u904e 0\u6b21\u53cd\u8f49\u5408\u4f75,\u4e2d\u9593\u7d93\u904e0\u6b21\u53cd\u8f49\n2023-04-23 10:31:15,068 - __main__ - INFO - [4, 6]\u5207\u5272\u53f3\u5074,\u5408\u4f75,\u53cd\u8f490\u6b21\u53f3\u908a\u7d50\u679c[4, 6]\n2023-04-23 10:31:15,068 - __main__ - INFO - [1] [4, 6] \u5de6\u53f3\u5408\u4f75\u958b\u59cb\n2023-04-23 10:31:15,068 - __main__ - INFO - \u5408\u4f75\u5b8c\u6210,[1][4, 6]\u5408\u6210[1, 4, 6]\u7d93\u904e 0\u6b21\u53cd\u8f49\u5408\u4f75,\u4e2d\u9593\u7d93\u904e0\u6b21\u53cd\u8f49\n2023-04-23 10:31:15,068 - __main__ - INFO - [1, 4, 6]0\u5de6\u908a\u7d50\u679c\n2023-04-23 10:31:15,068 - __main__ - INFO - right \u89e3\u6790\u958b\u59cb\n2023-04-23 10:31:15,068 - __main__ - INFO - \u6b64\u6b21\u8655\u7406\u9663\u5217\u70ba[6, 7, 2]\n2023-04-23 10:31:15,068 - __main__ - INFO - left \u89e3\u6790\u958b\u59cb\n2023-04-23 10:31:15,068 - __main__ - INFO - \u6b64\u6b21\u8655\u7406\u9663\u5217\u70ba[6]\n2023-04-23 10:31:15,068 - __main__ - INFO - [6]0\u5de6\u908a\u7d50\u679c\n2023-04-23 10:31:15,068 - __main__ - INFO - right \u89e3\u6790\u958b\u59cb\n2023-04-23 10:31:15,068 - __main__ - INFO - \u6b64\u6b21\u8655\u7406\u9663\u5217\u70ba[7, 2]\n2023-04-23 10:31:15,068 - __main__ - INFO - left \u89e3\u6790\u958b\u59cb\n2023-04-23 10:31:15,068 - __main__ - INFO - \u6b64\u6b21\u8655\u7406\u9663\u5217\u70ba[7]\n2023-04-23 10:31:15,068 - __main__ - INFO - [7]0\u5de6\u908a\u7d50\u679c\n2023-04-23 10:31:15,068 - __main__ - INFO - right \u89e3\u6790\u958b\u59cb\n2023-04-23 10:31:15,069 - __main__ - INFO - \u6b64\u6b21\u8655\u7406\u9663\u5217\u70ba[2]\n2023-04-23 10:31:15,069 - __main__ - INFO - [2]\u5207\u5272\u53f3\u5074,\u5408\u4f75,\u53cd\u8f490\u6b21\u53f3\u908a\u7d50\u679c[2]\n2023-04-23 10:31:15,069 - __main__ - INFO - [7] [2] \u5de6\u53f3\u5408\u4f75\u958b\u59cb\n2023-04-23 10:31:15,069 - __main__ - INFO - \u5408\u4f75\u5b8c\u6210,[7][2]\u5408\u6210[2, 7]\u7d93\u904e 1\u6b21\u53cd\u8f49\u5408\u4f75,\u4e2d\u9593\u7d93\u904e0\u6b21\u53cd\u8f49\n2023-04-23 10:31:15,069 - __main__ - INFO - [7, 2]\u5207\u5272\u53f3\u5074,\u5408\u4f75,\u53cd\u8f491\u6b21\u53f3\u908a\u7d50\u679c[2, 7]\n2023-04-23 10:31:15,069 - __main__ - INFO - [6] [2, 7] \u5de6\u53f3\u5408\u4f75\u958b\u59cb\n2023-04-23 10:31:15,069 - __main__ - INFO - \u5408\u4f75\u5b8c\u6210,[6][2, 7]\u5408\u6210[2, 6, 7]\u7d93\u904e 1\u6b21\u53cd\u8f49\u5408\u4f75,\u4e2d\u9593\u7d93\u904e1\u6b21\u53cd\u8f49\n2023-04-23 10:31:15,069 - __main__ - INFO - [6, 7, 2]\u5207\u5272\u53f3\u5074,\u5408\u4f75,\u53cd\u8f492\u6b21\u53f3\u908a\u7d50\u679c[2, 6, 7]\n2023-04-23 10:31:15,069 - __main__ - INFO - [1, 4, 6] [2, 6, 7] \u5de6\u53f3\u5408\u4f75\u958b\u59cb\n2023-04-23 10:31:15,069 - __main__ - INFO - \u5408\u4f75\u5b8c\u6210,[1, 4, 6][2, 6, 7]\u5408\u6210[1, 2, 4, 6, 6, 7]\u7d93\u904e 2\u6b21\u53cd\u8f49\u5408\u4f75,\u4e2d\u9593\u7d93\u904e2\u6b21\u53cd\u8f49\n[1, 2, 4, 6, 6, 7]\n\n")),(0,i.kt)("h2",{id:"understanding"},"understanding"),(0,i.kt)("p",null,"\u9019\u500b\u7a0b\u5f0f\u78bc\u4e3b\u8981\u62ff\u4f86\u6392\u5e8f\u5e8f\u5217,\u76ee\u524d\u7406\u89e3\u5c31\u662f\u5e8f\u5217 ex.","[1, 2, 4, 6, 6, 7]"," \u6703\u88ab\u5148\u9032\u884c\u4e8c\u5206(mid=n//2),\u4e26\u53d6","[:mid]","\u8ddf","[mid:]","\u505a\u8655\u7406,\u800c\u9996\u5148,","[:mid]","\u905e\u8ff4\u591a\u6b21\u9019\u500b\u904e\u7a0b,\u76f4\u5230\u62c6\u89e3\u5230\u7121\u6cd5\u62c6\u89e3,\u6240\u4ee5\u53ef\u4ee5\u60f3\u898b\u9019\u6642\u5019\u62c6\u6210\u5f88\u591a\u500b\u5c0f list,\u4e4b\u5f8c\u4ed6\u6703\u4f7f\u7528 merge \u4e00\u5c64\u5c64\u5f80\u4e0a\u7d44,\u76f4\u5230","[:mid]","\u6392\u5e8f\u5b8c\u6210."),(0,i.kt)("p",null,"merge \u904e\u7a0b,\u662f\u8981\u6578\u5b57\u7531\u5c0f\u5230\u5927.\u6240\u4ee5\u5b83\u4f7f\u7528\u5169\u500b\u6307\u91dd i \u548c j \u5206\u5225\u904d\u6b77\u5de6\u53f3\u5169\u500b\u5b50\u6578\u7d44\u3002\u5982\u679c\u5de6\u5b50\u6578\u7d44\u7684\u7576\u524d\u5143\u7d20\u5c0f\u65bc\u6216\u7b49\u65bc\u53f3\u5b50\u6578\u7d44\u7684\u7576\u524d\u5143\u7d20\uff0c\u5b83\u5c31\u5c07\u5de6\u5b50\u6578\u7d44\u7684\u7576\u524d\u5143\u7d20\u6dfb\u52a0\u5230\u65b0\u6578\u7d44\u4e2d\uff0c\u4e26\u5c07\u6307\u91dd i \u5411\u53f3\u79fb\u52d5\u4e00\u4f4d\uff1b\u5426\u5247\uff0c\u5b83\u5c07\u53f3\u5b50\u6578\u7d44\u7684\u7576\u524d\u5143\u7d20\u6dfb\u52a0\u5230\u65b0\u6578\u7d44\u4e2d\uff0c\u4e26\u5c07\u6307\u91dd j \u5411\u53f3\u79fb\u52d5\u4e00\u4f4d\uff0c\u4e26\u4e14\u5c07\u9006\u5e8f\u5c0d\u7684\u8a08\u6578\u589e\u52a0\u5de6\u5b50\u6578\u7d44\u4e2d\u5269\u9918\u5143\u7d20\u7684\u6578\u91cf\u3002\u6700\u7d42\uff0c\u5b83\u5c07\u5269\u9918\u7684\u5143\u7d20\u6dfb\u52a0\u5230\u65b0\u6578\u7d44\u4e2d\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/"},"hackerearth algorithm"))))}u.isMDXComponent=!0}}]);