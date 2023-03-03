"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[2794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=k({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var h=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},676:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){let{children:t,color:n}=e;return a.createElement("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"6px",cursor:"pointer"}},t)}},6655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var a=n(7462),r=n(7294),o=n(3905),l=n(4866),i=n(5162),s=n(676);const u={title:"markdown\u8a9e\u6cd5\u7d00\u9304",description:"demo\u5728Docusaurus\u5b98\u7db2\u770b\u5230\u7684md\u683c\u5f0f\u4f7f\u7528\u7bc4\u4f8b\uff0c\u7d66\u4e0d\u719f\u6089md\u8a9e\u6cd5\u7684\u4f7f\u7528\u8005\u67e5\u8a62\u683c\u5f0f\u7528",authors:"suyuying",tags:["Markdown manual"],comments:!0},c=void 0,p={permalink:"/blog/2023/03/02/work-record/md-form",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-02-work-record/md-form.md",source:"@site/blog/2023-03-02-work-record/md-form.md",title:"markdown\u8a9e\u6cd5\u7d00\u9304",description:"demo\u5728Docusaurus\u5b98\u7db2\u770b\u5230\u7684md\u683c\u5f0f\u4f7f\u7528\u7bc4\u4f8b\uff0c\u7d66\u4e0d\u719f\u6089md\u8a9e\u6cd5\u7684\u4f7f\u7528\u8005\u67e5\u8a62\u683c\u5f0f\u7528",date:"2023-03-02T00:00:00.000Z",formattedDate:"March 2, 2023",tags:[{label:"Markdown manual",permalink:"/blog/tags/markdown-manual"}],readingTime:3.4,hasTruncateMarker:!1,authors:[{name:"zaxro",title:"Life is too short to live someone else's dream",url:"https://github.com/suyuying",imageURL:"https://github.com/suyuying.png",key:"suyuying"}],frontMatter:{title:"markdown\u8a9e\u6cd5\u7d00\u9304",description:"demo\u5728Docusaurus\u5b98\u7db2\u770b\u5230\u7684md\u683c\u5f0f\u4f7f\u7528\u7bc4\u4f8b\uff0c\u7d66\u4e0d\u719f\u6089md\u8a9e\u6cd5\u7684\u4f7f\u7528\u8005\u67e5\u8a62\u683c\u5f0f\u7528",authors:"suyuying",tags:["Markdown manual"],comments:!0},prevItem:{title:"linux\u4e09\u5927\u795e\u5668\u4e4b\u4e00 sed\u8907\u7fd2\u7b46\u8a18",permalink:"/blog/2023/03/03/work-record/sed-repratice"},nextItem:{title:"\u5c07\u9060\u7aef\u5206\u679d\u9000\u7248\u65b9\u6cd5",permalink:"/blog/2023/03/02/work-record/reset-git-origin-branch"}},m={authorsImageUrls:[void 0]},d=[{value:"Details element example",id:"details-element-example",level:3},{value:"My Doc Section",id:"my-doc-section",level:3}],k={toc:d},b="wrapper";function h(e){let{components:t,...c}=e;return(0,o.kt)(b,(0,a.Z)({},k,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// how to import\nimport Tabs from "@theme/Tabs";\nimport TabItem from "@theme/TabItem";\nimport Highlight from "@site/src/components/Highlight";\n')),(0,o.kt)(s.Z,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",(0,o.kt)(s.Z,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",(0,o.kt)("p",null,"I can write ",(0,o.kt)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,o.kt)("em",{parentName:"p"},"JSX"),"!"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Easy to maintain open source documentation websites."),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 Docusaurus")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u4ee5\u4e0b\u70ba\u4e0a\u8ff0\u7528\u6cd5\u7684\u7a0b\u5f0f\u78bc\u3002\n<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">\nFacebook blue\n</Highlight> are my favorite colors.\n\nI can write **Markdown** alongside my _JSX_!\n\n> Easy to maintain open source documentation websites.\n>\n> \u2014 Docusaurus\n')),(0,o.kt)("h3",{id:"details-element-example"},"Details element example"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Toggle me!"),(0,o.kt)("div",null,(0,o.kt)("div",null,"This is the detailed content"),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Nested toggle! Some surprise inside..."),(0,o.kt)("div",null,"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<details>\n  <summary>Toggle me!</summary>\n  <div>\n    <div>This is the detailed content</div>\n    <br />\n    <details>\n      <summary>Nested toggle! Some surprise inside...</summary>\n      <div>\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32</div>\n    </details>\n  </div>\n</details>\n")),(0,o.kt)(r.Fragment,null,(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{src:n(1841).Z,style:{width:"50%"},alt:"malta_street png"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'how to import img\n<>\n  <div style={{ display: "flex", justifyContent: "center" }}>\n    <img\n      src={require("./malta_street.jpeg").default}\n      style={{ width: "50%" }}\n      alt="malta_street png"\n    />\n  </div>\n</>\n')),(0,o.kt)("h3",{id:"my-doc-section"},"My Doc Section"),(0,o.kt)("p",null,"Hello world message with some ",(0,o.kt)("strong",{parentName:"p"},"bold")," text, some ",(0,o.kt)("em",{parentName:"p"},"italic")," text, and a ",(0,o.kt)("a",{parentName:"p",href:"https://www.yahoo.com"},"link")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//demo bold text ,italic style and superlink\nHello world message with some **bold** text, some _italic_ text, and a [link](https://www.yahoo.com)\n")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,o.kt)(i.Z,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,o.kt)(i.Z,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,o.kt)(l.Z,{groupId:"current-os",queryString:!0,mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"android",label:"Android",mdxType:"TabItem"},"Android"),(0,o.kt)(i.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},"iOS")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'demo tabs and tabs bring query string\n// here are just tabs\n<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n\n//here bring query string\n<Tabs groupId="current-os" queryString>\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/HelloCodeTitle.js"',title:'"/src/components/HelloCodeTitle.js"'},"function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```jsx title="/src/components/HelloCodeTitle.js"\nfunction HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n```\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,4-6,11}","{1,4-6,11}":!0},'import React from "react";\n\nconst MyComponent = (props) => {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n};\n\nexport default MyComponent;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```jsx {1,4-6,11}\nimport React from "react";\n\nconst MyComponent = (props) => {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n};\n\nexport default MyComponent;\n```\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// need install jsx live\nfunction Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```jsx live\n// need install jsx live\nfunction Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n```\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n:::note\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::tip\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::info\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::caution\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::danger\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n")),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(8774).Z},"Download this docx using Markdown")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Download this docx using Markdown](./DONe.json)\n")),(0,o.kt)("ul",null,Object.entries(u).map((e=>{let[t,n]=e;return(0,o.kt)("li",{key:t},(0,o.kt)("b",null,t),": ",n)}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// how to get build in object attributes\n<ul>\n  {Object.entries(frontMatter).map(([key, value]) => (\n    <li key={key}>\n      <b>{key}</b>: {value}\n    </li>\n  ))}\n</ul>\n")))}h.isMDXComponent=!0},8774:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/DONe-5d595c68c8a1502cdcc9a36280bcc412.json"},1841:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/malta_street-e4f6aff8d369f995fe829a9c92330f9d.jpeg"}}]);