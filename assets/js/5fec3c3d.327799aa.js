"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[5843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,k=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),s=n(16550),i=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=k({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=i??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var f=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function x(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(x,(0,a.Z)({key:String(t)},e))}},70676:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{children:t,color:n}=e;return a.createElement("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"6px",cursor:"pointer"}},t)}},86017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(67294),l=n(3905),o=n(74866),s=n(85162),i=n(70676);const u={title:"Markdown syntax reference",description:"demo\u5728Docusaurus\u5b98\u7db2\u770b\u5230\u7684md\u683c\u5f0f\u4f7f\u7528\u7bc4\u4f8b\uff0c\u7d66\u4e0d\u719f\u6089md\u8a9e\u6cd5\u7684\u4f7f\u7528\u8005\u67e5\u8a62\u683c\u5f0f\u7528",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["docusaurus","Markdown manual"],comments:!0},c=void 0,p={unversionedId:"Docusaurus/2023-03-03-md-form",id:"Docusaurus/2023-03-03-md-form",title:"Markdown syntax reference",description:"demo\u5728Docusaurus\u5b98\u7db2\u770b\u5230\u7684md\u683c\u5f0f\u4f7f\u7528\u7bc4\u4f8b\uff0c\u7d66\u4e0d\u719f\u6089md\u8a9e\u6cd5\u7684\u4f7f\u7528\u8005\u67e5\u8a62\u683c\u5f0f\u7528",source:"@site/docs/Docusaurus/2023-03-03-md-form.md",sourceDirName:"Docusaurus",slug:"/Docusaurus/2023-03-03-md-form",permalink:"/docs/Docusaurus/2023-03-03-md-form",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docusaurus/2023-03-03-md-form.md",tags:[{label:"docusaurus",permalink:"/docs/tags/docusaurus"},{label:"Markdown manual",permalink:"/docs/tags/markdown-manual"}],version:"current",frontMatter:{title:"Markdown syntax reference",description:"demo\u5728Docusaurus\u5b98\u7db2\u770b\u5230\u7684md\u683c\u5f0f\u4f7f\u7528\u7bc4\u4f8b\uff0c\u7d66\u4e0d\u719f\u6089md\u8a9e\u6cd5\u7684\u4f7f\u7528\u8005\u67e5\u8a62\u683c\u5f0f\u7528",authors:"suyuying",image:"https://github.com/suyuying.png",tags:["docusaurus","Markdown manual"],comments:!0},sidebar:"tutorialSidebar",previous:{title:"gitcus comment system add to docusaurus but meet giscus.app refused to connect.",permalink:"/docs/Docusaurus/2023-03-03-gitcus-comment-in-docusaurus"},next:{title:"Use Google Fonts in Docusaurus",permalink:"/docs/Docusaurus/2023-03-03-use-google-font"}},m={},d=[{value:"Details element example",id:"details-element-example",level:3},{value:"My Doc Section",id:"my-doc-section",level:3}],k={toc:d},b="wrapper";function f(e){let{components:t,...c}=e;return(0,l.kt)(b,(0,a.Z)({},k,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'// how to import\nimport Tabs from "@theme/Tabs";\nimport TabItem from "@theme/TabItem";\nimport Highlight from "@site/src/components/Highlight";\n')),(0,l.kt)(i.Z,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",(0,l.kt)(i.Z,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",(0,l.kt)("p",null,"I can write ",(0,l.kt)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,l.kt)("em",{parentName:"p"},"JSX"),"!"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Easy to maintain open source documentation websites."),(0,l.kt)("p",{parentName:"blockquote"},"\u2014 Docusaurus")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\u4ee5\u4e0b\u70ba\u4e0a\u8ff0\u7528\u6cd5\u7684\u7a0b\u5f0f\u78bc\u3002\n<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">\nFacebook blue\n</Highlight> are my favorite colors.\n\nI can write **Markdown** alongside my _JSX_!\n\n> Easy to maintain open source documentation websites.\n>\n> \u2014 Docusaurus\n')),(0,l.kt)("h3",{id:"details-element-example"},"Details element example"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Toggle me!"),(0,l.kt)("div",null,(0,l.kt)("div",null,"This is the detailed content"),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Nested toggle! Some surprise inside..."),(0,l.kt)("div",null,"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<details>\n  <summary>Toggle me!</summary>\n  <div>\n    <div>This is the detailed content</div>\n    <br />\n    <details>\n      <summary>Nested toggle! Some surprise inside...</summary>\n      <div>\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32</div>\n    </details>\n  </div>\n</details>\n")),(0,l.kt)(r.Fragment,null,(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)("img",{src:n(45066).Z,style:{width:"50%"},alt:"malta_street png"}))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'how to import img\n<>\n  <div style={{ display: "flex", justifyContent: "center" }}>\n    <img\n      src={require("./malta_street.jpeg").default}\n      style={{ width: "50%" }}\n      alt="malta_street png"\n    />\n  </div>\n</>\n')),(0,l.kt)("h3",{id:"my-doc-section"},"My Doc Section"),(0,l.kt)("p",null,"Hello world message with some ",(0,l.kt)("strong",{parentName:"p"},"bold")," text, some ",(0,l.kt)("em",{parentName:"p"},"italic")," text, and a ",(0,l.kt)("a",{parentName:"p",href:"https://www.yahoo.com"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"//demo bold text ,italic style and superlink\nHello world message with some **bold** text, some _italic_ text, and a [link](https://www.yahoo.com)\n")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,l.kt)(s.Z,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,l.kt)(s.Z,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,l.kt)(o.Z,{groupId:"current-os",queryString:!0,mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"android",label:"Android",mdxType:"TabItem"},"Android"),(0,l.kt)(s.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},"iOS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'demo tabs and tabs bring query string\n// here are just tabs\n<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n\n//here bring query string\n<Tabs groupId="current-os" queryString>\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/HelloCodeTitle.js"',title:'"/src/components/HelloCodeTitle.js"'},"function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'```jsx title="/src/components/HelloCodeTitle.js"\nfunction HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n```\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,4-6,11}","{1,4-6,11}":!0},'import React from "react";\n\nconst MyComponent = (props) => {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n};\n\nexport default MyComponent;\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'```jsx {1,4-6,11}\nimport React from "react";\n\nconst MyComponent = (props) => {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n};\n\nexport default MyComponent;\n```\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// need install jsx live\nfunction Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"```jsx live\n// need install jsx live\nfunction Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n```\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Some ",(0,l.kt)("strong",{parentName:"p"},"content")," with ",(0,l.kt)("em",{parentName:"p"},"Markdown")," ",(0,l.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,l.kt)("a",{parentName:"p",href:"#"},"this ",(0,l.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Some ",(0,l.kt)("strong",{parentName:"p"},"content")," with ",(0,l.kt)("em",{parentName:"p"},"Markdown")," ",(0,l.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,l.kt)("a",{parentName:"p",href:"#"},"this ",(0,l.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Some ",(0,l.kt)("strong",{parentName:"p"},"content")," with ",(0,l.kt)("em",{parentName:"p"},"Markdown")," ",(0,l.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,l.kt)("a",{parentName:"p",href:"#"},"this ",(0,l.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Some ",(0,l.kt)("strong",{parentName:"p"},"content")," with ",(0,l.kt)("em",{parentName:"p"},"Markdown")," ",(0,l.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,l.kt)("a",{parentName:"p",href:"#"},"this ",(0,l.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"Some ",(0,l.kt)("strong",{parentName:"p"},"content")," with ",(0,l.kt)("em",{parentName:"p"},"Markdown")," ",(0,l.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,l.kt)("a",{parentName:"p",href:"#"},"this ",(0,l.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n:::note\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::tip\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::info\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::caution\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::danger\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n")),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:n(31519).Z},"Download this docx using Markdown")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[Download this docx using Markdown](./DONe.json)\n")),(0,l.kt)("ul",null,Object.entries(u).map((e=>{let[t,n]=e;return(0,l.kt)("li",{key:t},(0,l.kt)("b",null,t),": ",n)}))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// how to get build in object attributes\n<ul>\n  {Object.entries(frontMatter).map(([key, value]) => (\n    <li key={key}>\n      <b>{key}</b>: {value}\n    </li>\n  ))}\n</ul>\n")),(0,l.kt)(r.Fragment,null,(0,l.kt)("ol",null,(0,l.kt)("li",{class:"text-body-color mb-4 flex text-base"},(0,l.kt)("span",{class:"bg-primary mr-2 flex max-h-[24px]  w-full max-w-[24px]  items-center justify-center rounded-full text-base  text-white"},"1"),"Lorem ipsum dolor sit amet"),(0,l.kt)("li",{class:"text-body-color mb-4 flex text-base"},(0,l.kt)("span",{class:"bg-primary mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white"},"2"),"It is a long established fact reader"),(0,l.kt)("li",{class:"text-body-color mb-4 flex text-base"},(0,l.kt)("span",{class:"bg-primary mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white"},"3"),"The point of using Lorem Ipsum"),(0,l.kt)("li",{class:"text-body-color mb-4 flex text-base"},(0,l.kt)("span",{class:"bg-primary mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white"},"4"),"There are many variations of passages"),(0,l.kt)("li",{class:"text-body-color mb-4 flex text-base"},(0,l.kt)("span",{class:"bg-primary mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white"},"5"),"If you are going to use a of Lorem"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<>\n\n<ol>\n  <li class="text-body-color mb-4 flex text-base">\n    <span\n      class="bg-primary mr-2 flex max-h-[24px]  w-full max-w-[24px]  items-center justify-center rounded-full text-base  text-white"\n    >\n      1\n    </span>\n    Lorem ipsum dolor sit amet\n  </li>\n  <li class="text-body-color mb-4 flex text-base">\n    <span\n      class="bg-primary mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white"\n    >\n      2\n    </span>\n    It is a long established fact reader\n  </li>\n  <li class="text-body-color mb-4 flex text-base">\n    <span\n      class="bg-primary mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white"\n    >\n      3\n    </span>\n    The point of using Lorem Ipsum\n  </li>\n  <li class="text-body-color mb-4 flex text-base">\n    <span\n      class="bg-primary mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white"\n    >\n      4\n    </span>\n    There are many variations of passages\n  </li>\n  <li class="text-body-color mb-4 flex text-base">\n    <span\n      class="bg-primary mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full text-base text-white"\n    >\n      5\n    </span>\n    If you are going to use a of Lorem\n  </li>\n</ol>\n</>\n')),(0,l.kt)("p",null,"actions/checkout@v3 \u53c3\u6578\u7bc7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ref"),"\uff1a\u8981\u6aa2\u51fa\u7684\u5206\u652f\u3001\u6a19\u7c64\u6216\u63d0\u4ea4 ID\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"repository"),"\uff1a\u8981\u6aa2\u51fa\u7684\u5132\u5b58\u5eab\u540d\u7a31\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"submodules"),"\uff1a\u662f\u5426\u6aa2\u51fa\u5b50\u6a21\u7d44\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ssh-key"),"\uff1a\u7528\u65bc\u5f9e\u5132\u5b58\u5eab\u7372\u53d6\u7a0b\u5f0f\u78bc\u7684 SSH \u91d1\u9470\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"persist-credentials"),"\uff1a\u662f\u5426\u5728\u6301\u4e45\u5316\u5de5\u4f5c\u5340\u6642\u4fdd\u5b58 GITHUB_TOKEN \u548c SSH_AUTH_SOCK \u74b0\u5883\u8b8a\u6578\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fetch-depth"),"\uff1a\u8981\u6aa2\u51fa\u7684\u63d0\u4ea4\u6578\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lfs"),"\uff1a\u662f\u5426\u4e0b\u8f09 Git LFS \u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clean"),"\uff1a\u662f\u5426\u5728\u6aa2\u51fa\u524d\u904b\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"git clean"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"workspace"),"\uff1a\u6aa2\u51fa\u7684\u5132\u5b58\u5eab\u7684\u76ee\u9304\u3002")),(0,l.kt)("kbd",null,"F1")," ",(0,l.kt)("kbd",null,"F2")," ",(0,l.kt)("kbd",null,"F3")," ",(0,l.kt)("kbd",null,"F4"),(0,l.kt)("kbd",null,"Ctrl")," + ",(0,l.kt)("kbd",null,"C"),(0,l.kt)("kbd",null,"\ud83e\udc44")," ",(0,l.kt)("kbd",null,"\ud83e\udc46")," ",(0,l.kt)("kbd",null,"\ud83e\udc45")," ",(0,l.kt)("kbd",null,"\ud83e\udc47"),(0,l.kt)("kbd",null,"PrtScn")," ",(0,l.kt)("kbd",null,"Tab \u21b9"),(0,l.kt)("kbd",null,"Enter"),(0,l.kt)("kbd",null,"\u229e Win"),(0,l.kt)("kbd",null,"\ud83d\ude06"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<kbd>F1</kbd> <kbd>F2</kbd> <kbd>F3</kbd> <kbd>F4</kbd>\n\n<kbd>Ctrl</kbd> + <kbd>C</kbd>\n\n<kbd>\ud83e\udc44</kbd> <kbd>\ud83e\udc46</kbd> <kbd>\ud83e\udc45</kbd> <kbd>\ud83e\udc47</kbd>\n\n<kbd>PrtScn</kbd> <kbd>Tab \u21b9</kbd>\n\n<kbd>Enter</kbd>\n\n<kbd>\u229e Win</kbd>\n\n<kbd>\ud83d\ude06</kbd>\n")),(0,l.kt)("p",null,"\u4e26\u8a2d\u5b9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/css/custom.css"',title:'"src/css/custom.css"'},'kbd {\n  margin: 0px 0.2em;\n  padding: 0.1em 0.6em;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  color: rgb(51, 51, 51);\n  font-family: "Arial Black", Impact;\n  display: inline-block;\n  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;\n  background-color: rgb(247, 247, 247);\n  -moz-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;\n  -webkit-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n}\n')))}f.isMDXComponent=!0},31519:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/DONe-5d595c68c8a1502cdcc9a36280bcc412.json"},45066:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/malta_street-e4f6aff8d369f995fe829a9c92330f9d.jpeg"}}]);