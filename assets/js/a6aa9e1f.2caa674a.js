"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[3089],{46:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(7294),r=n(6010),l=n(2263),i=n(833),o=n(5281),s=n(9058),c=n(9703),m=n(197),u=n(9985);function p(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,l.Z)(),{blogDescription:r,blogTitle:o,permalink:s}=t,c="/"===s?n:o;return a.createElement(a.Fragment,null,a.createElement(i.d,{title:c,description:r}),a.createElement(m.Z,{tag:"blog_posts_list"}))}function d(e){const{metadata:t,items:n,sidebar:r}=e;return a.createElement(s.Z,{sidebar:r},a.createElement(u.Z,{items:n}),a.createElement(c.Z,{metadata:t}))}function g(e){return a.createElement(i.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},a.createElement(p,e),a.createElement(d,e))}},9703:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(5999),l=n(2244);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(l.Z,{permalink:n,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&a.createElement(l.Z,{permalink:i,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(9460),l=n(857);function i(e){let{items:t,component:n=l.Z}=e;return a.createElement(a.Fragment,null,t.map((e=>{let{content:t}=e;return a.createElement(r.n,{key:t.metadata.permalink,content:t},a.createElement(n,null,a.createElement(t,null)))})))}},676:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){let{children:t,color:n}=e;return a.createElement("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"6px",cursor:"pointer"}},t)}},857:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(3944),l=n(9460),i=n(390);function o(e){const{metadata:t}=(0,l.C)(),{frontMatter:n,slug:o,title:s}=t,{comments:c=!0}=n;return a.createElement(a.Fragment,null,a.createElement(i.Z,e),c&&a.createElement(r.qw,{shortname:"go2top",config:{url:o,identifier:o,title:s,language:"en_US"}}))}},1171:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(7462),r=n(7294),l=n(5742);var i=n(4915);var o=n(9960);var s=n(4673);var c=n(2503);function m(e){return r.createElement(c.Z,e)}var u=n(6010);const p={containsTaskList:"containsTaskList_kggB"};const d={img:"img_CujE"};var g=n(3612),E=n(1875),h=n(676);const Z={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return r.createElement(e.props.originalType,a)}return e}(e):e));return r.createElement(l.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props?.mdxType)))?r.createElement("code",e):r.createElement(i.Z,e)},a:function(e){return r.createElement(o.Z,e)},pre:function(e){return r.createElement(i.Z,(0,r.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>r.isValidElement(e)&&"summary"===e.props?.mdxType)),l=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(s.Z,(0,a.Z)({},e,{summary:n}),l)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,u.Z)(t,t?.includes("contains-task-list")&&p.containsTaskList))}));var t},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,d.img))}));var t},h1:e=>r.createElement(m,(0,a.Z)({as:"h1"},e)),h2:e=>r.createElement(m,(0,a.Z)({as:"h2"},e)),h3:e=>r.createElement(m,(0,a.Z)({as:"h3"},e)),h4:e=>r.createElement(m,(0,a.Z)({as:"h4"},e)),h5:e=>r.createElement(m,(0,a.Z)({as:"h5"},e)),h6:e=>r.createElement(m,(0,a.Z)({as:"h6"},e)),admonition:g.Z,mermaid:E.Z,highlight:h.Z}}}]);