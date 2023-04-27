"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[6103],{65203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(67294),r=n(86010),l=n(10833),o=n(35281),i=n(9460),c=n(39058),s=n(857),m=n(87462),d=n(95999),u=n(32244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,m.Z)({},n,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,m.Z)({},t,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function p(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:r,date:o,tags:c,authors:s,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return a.createElement(l.d,{title:n,description:r,keywords:d,image:u},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var f=n(39407);function v(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:l}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:d}=r,{hide_table_of_contents:u,toc_min_heading_level:p,toc_max_heading_level:v}=d;return a.createElement(c.Z,{sidebar:t,toc:!u&&l.length>0?a.createElement(f.Z,{toc:l,minHeadingLevel:p,maxHeadingLevel:v}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function h(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(p,null),a.createElement(v,{sidebar:e.sidebar},a.createElement(t,null))))}},39407:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),o=n(93743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,l.Z)(i.tableOfContents,"thin-scrollbar",t)},r.createElement(o.Z,(0,a.Z)({},n,{linkClassName:c,linkActiveClassName:s})))}},93743:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),l=n(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),n=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=r.memo(u);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...p}=e;const f=(0,l.L)(),v=m??f.tableOfContents.minHeadingLevel,h=u??f.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:h});return d((0,r.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:h}}),[c,s,v,h])),r.createElement(g,(0,a.Z)({toc:E,className:n,linkClassName:c},p))}},70676:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{children:t,color:n}=e;return a.createElement("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"6px",cursor:"pointer"}},t)}},857:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(53944),l=n(9460),o=n(30390);function i(e){const{metadata:t}=(0,l.C)(),{frontMatter:n,slug:i,title:c}=t,{comments:s=!0}=n;return a.createElement(a.Fragment,null,a.createElement(o.Z,e),s&&a.createElement(r.qw,{shortname:"go2top",config:{url:i,identifier:i,title:c,language:"en_US"}}))}},71171:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(67294),l=n(35742);var o=n(74915);var i=n(39960);var c=n(34673);var s=n(92503);function m(e){return r.createElement(s.Z,e)}var d=n(86010);const u={containsTaskList:"containsTaskList_kggB"};const g={img:"img_CujE"};var p=n(23612),f=n(11875),v=n(70676);const h={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return r.createElement(e.props.originalType,a)}return e}(e):e));return r.createElement(l.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props?.mdxType)))?r.createElement("code",e):r.createElement(o.Z,e)},a:function(e){return r.createElement(i.Z,e)},pre:function(e){return r.createElement(o.Z,(0,r.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>r.isValidElement(e)&&"summary"===e.props?.mdxType)),l=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(c.Z,(0,a.Z)({},e,{summary:n}),l)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,d.Z)(t,t?.includes("contains-task-list")&&u.containsTaskList))}));var t},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,d.Z)(t,g.img))}));var t},h1:e=>r.createElement(m,(0,a.Z)({as:"h1"},e)),h2:e=>r.createElement(m,(0,a.Z)({as:"h2"},e)),h3:e=>r.createElement(m,(0,a.Z)({as:"h3"},e)),h4:e=>r.createElement(m,(0,a.Z)({as:"h4"},e)),h5:e=>r.createElement(m,(0,a.Z)({as:"h5"},e)),h6:e=>r.createElement(m,(0,a.Z)({as:"h6"},e)),admonition:p.Z,mermaid:f.Z,highlight:v.Z}}}]);