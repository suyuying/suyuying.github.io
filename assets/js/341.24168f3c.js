/*! For license information please see 341.24168f3c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsitev_1=self.webpackChunkwebsitev_1||[]).push([[341],{1746:(e,t)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const s=window,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let o=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(t,e))}return e}toString(){return this.cssText}};const a=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,n))(t)})(e):e;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},m=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:m};let g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,s)=>{const i=this._$Ep(s,t);void 0!==i&&(this._$Ev.set(i,s),e.push(i))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of t)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,s;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(s=e.hostConnected)||void 0===s||s.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{i?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),n=s.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=v){var i;const n=this.constructor._$Ep(e,s);if(void 0!==n&&!0===s.reflect){const r=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:p).toAttribute(t,s.type);this._$El=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(e,t){var s;const i=this.constructor,n=i._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=i.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(s=e.converter)||void 0===s?void 0:s.fromAttribute)?e.converter:p;this._$El=n,this[n]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,s){let i=!0;void 0!==e&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(s)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};var f;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.1");const _=window,b=_.trustedTypes,$=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,E=`lit$${(Math.random()+"").slice(9)}$`,y="?"+E,A=`<${y}>`,S=document,C=(e="")=>S.createComment(e),w=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,k=/>/g,x=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),L=/'/g,P=/"/g,M=/^(?:script|style|textarea|title)$/i,O=(B=1,(e,...t)=>({_$litType$:B,strings:e,values:t})),I=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Z=new WeakMap,H=S.createTreeWalker(S,129,null,!1);var B;class G{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,r=0;const o=e.length-1,a=this.parts,[l,c]=((e,t)=>{const s=e.length-1,i=[];let n,r=2===t?"<svg>":"",o=N;for(let l=0;l<s;l++){const t=e[l];let s,a,c=-1,d=0;for(;d<t.length&&(o.lastIndex=d,a=o.exec(t),null!==a);)d=o.lastIndex,o===N?"!--"===a[1]?o=T:void 0!==a[1]?o=k:void 0!==a[2]?(M.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=x):void 0!==a[3]&&(o=x):o===x?">"===a[0]?(o=n??N,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,s=a[1],o=void 0===a[3]?x:'"'===a[3]?P:L):o===P||o===L?o=x:o===T||o===k?o=N:(o=x,n=void 0);const h=o===x&&e[l+1].startsWith("/>")?" ":"";r+=o===N?t+A:c>=0?(i.push(s),t.slice(0,c)+"$lit$"+t.slice(c)+E+h):t+E+(-2===c?(i.push(void 0),l):h)}const a=r+(e[s]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(a):a,i]})(e,t);if(this.el=G.createElement(l,s),H.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=H.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(E)){const s=c[r++];if(e.push(t),void 0!==s){const e=i.getAttribute(s.toLowerCase()+"$lit$").split(E),t=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?V:"?"===t[1]?F:"@"===t[1]?K:j})}else a.push({type:6,index:n})}for(const t of e)i.removeAttribute(t)}if(M.test(i.tagName)){const e=i.textContent.split(E),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],C()),H.nextNode(),a.push({type:2,index:++n});i.append(e[t],C())}}}else if(8===i.nodeType)if(i.data===y)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(E,e+1));)a.push({type:7,index:n}),e+=E.length-1}n++}}static createElement(e,t){const s=S.createElement("template");return s.innerHTML=e,s}}function W(e,t,s=e,i){var n,r,o,a;if(t===I)return t;let l=void 0!==i?null===(n=s._$Co)||void 0===n?void 0:n[i]:s._$Cl;const c=w(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,s,i)),void 0!==i?(null!==(o=(a=s)._$Co)&&void 0!==o?o:a._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(t=W(e,l._$AS(e,t.values),l,i)),t}class D{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:s},parts:i}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(s,!0);H.currentNode=n;let r=H.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new z(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new q(r,this,e)),this.u.push(t),l=i[++a]}o!==(null==l?void 0:l.index)&&(r=H.nextNode(),o++)}return n}p(e){let t=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class z{constructor(e,t,s,i){var n;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cm=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),w(e)?e===R||null==e||""===e?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==I&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>U(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==R&&w(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=G.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.p(s);else{const e=new D(n,this),t=e.v(this.options);e.p(s),this.T(t),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new G(e)),t}k(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new z(this.O(C()),this.O(C()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}let j=class{constructor(e,t,s,i,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,i){const n=this.strings;let r=!1;if(void 0===n)e=W(this,e,t,0),r=!w(e)||e!==this._$AH&&e!==I,r&&(this._$AH=e);else{const i=e;let o,a;for(e=n[0],o=0;o<n.length-1;o++)a=W(this,i[s+o],t,o),a===I&&(a=this._$AH[o]),r||(r=!w(a)||a!==this._$AH[o]),a===R?e=R:e!==R&&(e+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class V extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}}const Y=b?b.emptyScript:"";class F extends j{constructor(){super(...arguments),this.type=4}j(e){e&&e!==R?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class K extends j{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){var s;if((e=null!==(s=W(this,e,t,0))&&void 0!==s?s:R)===I)return;const i=this._$AH,n=e===R&&i!==R||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==R&&(i===R||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==s?s:this.element,e):this._$AH.handleEvent(e)}}class q{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const J=_.litHtmlPolyfillSupport;null==J||J(G,z),(null!==(f=_.litHtmlVersions)&&void 0!==f?f:_.litHtmlVersions=[]).push("2.6.1");var Q,X;let ee=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:t;let o=r._$litPart$;if(void 0===o){const e=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new z(t.insertBefore(C(),e),e,void 0,s??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return I}};ee.finalized=!0,ee._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:ee});const te=globalThis.litElementPolyfillSupport;null==te||te({LitElement:ee}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");const se=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(s){s.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function ie(e){return(t,s)=>{return void 0!==s?(i=e,n=s,void t.constructor.createProperty(n,i)):se(e,t);var i,n}}var ne;null===(ne=window.HTMLSlotElement)||void 0===ne||ne.prototype.assignedElements;const re=2;class oe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ae=(e,t)=>{var s,i;const n=e._$AN;if(void 0===n)return!1;for(const r of n)null===(i=(s=r)._$AO)||void 0===i||i.call(s,t,!1),ae(r,t);return!0},le=e=>{let t,s;do{if(void 0===(t=e._$AM))break;s=t._$AN,s.delete(e),e=t}while(0===(null==s?void 0:s.size))},ce=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),ue(t)}};function de(e){void 0!==this._$AN?(le(this),this._$AM=e,ce(this)):this._$AM=e}function he(e,t=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(i))for(let r=s;r<i.length;r++)ae(i[r],!1),le(i[r]);else null!=i&&(ae(i,!1),le(i));else ae(this,e)}const ue=e=>{var t,s,i,n;e.type==re&&(null!==(t=(i=e)._$AP)&&void 0!==t||(i._$AP=he),null!==(s=(n=e)._$AQ)&&void 0!==s||(n._$AQ=de))};class pe extends oe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),ce(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),t&&(ae(this,e),le(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class me{}const ve=new WeakMap,ge=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends pe{render(e){return R}update(e,[t]){var s;const i=t!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.dt=null===(s=e.options)||void 0===s?void 0:s.host,this.rt(this.ct=e.element)),R}rt(e){var t;if("function"==typeof this.Y){const s=null!==(t=this.dt)&&void 0!==t?t:globalThis;let i=ve.get(s);void 0===i&&(i=new WeakMap,ve.set(s,i)),void 0!==i.get(this.Y)&&this.Y.call(this.dt,void 0),i.set(this.Y,e),void 0!==e&&this.Y.call(this.dt,e)}else this.Y.value=e}get lt(){var e,t,s;return"function"==typeof this.Y?null===(t=ve.get(null!==(e=this.dt)&&void 0!==e?e:globalThis))||void 0===t?void 0:t.get(this.Y):null===(s=this.Y)||void 0===s?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var fe=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,be=(e,t,s,i)=>{for(var n,r=i>1?void 0:i?_e(t,s):t,o=e.length-1;o>=0;o--)(n=e[o])&&(r=(i?n(t,s,r):n(r))||r);return i&&r&&fe(t,s,r),r};t.GiscusWidget=class extends ee{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new me,this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var e;return null==(e=this._iframeRef)?void 0:e.value}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(e){return`[giscus] An error occurred. Error message: "${e}".`}setupSession(){const e=location.href,t=new URL(e),s=localStorage.getItem(this.GISCUS_SESSION_KEY),i=t.searchParams.get("giscus")||"";if(this.__session="",i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,t.searchParams.delete("giscus"),t.hash="",void history.replaceState(void 0,document.title,t.toString());if(s)try{this.__session=JSON.parse(s)}catch(n){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==n?void 0:n.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(e){if(e.origin!==this.host)return;const{data:t}=e;if("object"!=typeof t||!t.giscus)return;if(this.iframeRef&&t.giscus.resizeHeight&&(this.iframeRef.style.height=`${t.giscus.resizeHeight}px`),t.giscus.signOut)return console.log("[giscus] User has logged out. Session has been cleared."),void this.signOut();if(!t.giscus.error)return;const s=t.giscus.error;if(s.includes("Bad credentials")||s.includes("Invalid state value")||s.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return console.warn(`${this._formatError(s)} Session has been cleared.`),void this.signOut();console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}s.includes("Discussion not found")?console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`)}sendMessage(e){!this.iframeRef||!this.iframeRef.contentWindow||!this.hasLoaded||this.iframeRef.contentWindow.postMessage({giscus:e},this.host)}updateConfig(){const e={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(e)}firstUpdated(){var e;null==(e=this.iframeRef)||e.addEventListener("load",(()=>{var e;null==(e=this.iframeRef)||e.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()}))}requestUpdate(e,t,s){this.hasUpdated&&"host"!==e?this.updateConfig():super.requestUpdate(e,t,s)}getMetaContent(e,t=!1){const s=t?`meta[property='og:${e}'],`:"",i=document.querySelector(s+`meta[name='${e}']`);return i?i.content:""}_getCleanedUrl(){const e=new URL(location.href);return e.searchParams.delete("giscus"),e.hash="",e}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){const e=this._getCleanedUrl().toString(),t=`${e}${this.id?"#"+this.id:""}`,s=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||e,n={origin:t,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:s,backLink:i};return`${this.host||this.GISCUS_DEFAULT_HOST}${this.lang?`/${this.lang}`:""}/widget?${new URLSearchParams(n)}`}render(){return O`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${ge(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},t.GiscusWidget.styles=((e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1]),e[0]);return new o(s,e,n)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,be([ie({reflect:!0})],t.GiscusWidget.prototype,"host",2),be([ie({reflect:!0})],t.GiscusWidget.prototype,"repo",2),be([ie({reflect:!0})],t.GiscusWidget.prototype,"repoId",2),be([ie({reflect:!0})],t.GiscusWidget.prototype,"category",2),be([ie({reflect:!0})],t.GiscusWidget.prototype,"categoryId",2),be([ie({reflect:!0})],t.GiscusWidget.prototype,"mapping",2),be([ie({reflect:!0})],t.GiscusWidget.prototype,"term",2),be([ie({reflect:!0})],t.GiscusWidget.prototype,"strict",2),be([ie({reflect:!0})],t.GiscusWidget.prototype,"reactionsEnabled",2),be([ie({reflect:!0})],t.GiscusWidget.prototype,"emitMetadata",2),be([ie({reflect:!0})],t.GiscusWidget.prototype,"inputPosition",2),be([ie({reflect:!0})],t.GiscusWidget.prototype,"theme",2),be([ie({reflect:!0})],t.GiscusWidget.prototype,"lang",2),be([ie({reflect:!0})],t.GiscusWidget.prototype,"loading",2),t.GiscusWidget=be([(e=>t=>{return"function"==typeof t?(s=e,i=t,customElements.define(s,i),i):((e,t)=>{const{kind:s,elements:i}=t;return{kind:s,elements:i,finisher(t){customElements.define(e,t)}}})(e,t);var s,i})("giscus-widget")],t.GiscusWidget)},8071:(e,t,s)=>{const i=s(5893),n=s(7294);e.exports=function({id:e,host:t,repo:r,repoId:o,category:a,categoryId:l,mapping:c,term:d,strict:h,reactionsEnabled:u,emitMetadata:p,inputPosition:m,theme:v,lang:g,loading:f}){const[_,b]=n.useState(!1);return n.useEffect((()=>{_||(Promise.resolve().then((()=>s(1746))),b(!0))}),[]),_?i.jsx("giscus-widget",{id:e,host:t,repo:r,repoid:o,category:a,categoryid:l,mapping:c,term:d,strict:h,reactionsenabled:u,emitmetadata:p,inputposition:m,theme:v,lang:g,loading:f}):null}},1310:(e,t,s)=>{s.d(t,{Z:()=>_});var i=s(7462),n=s(7294),r=s(6010),o=s(5281),a=s(2802),l=s(8596),c=s(9960),d=s(5999),h=s(4996);function u(e){return n.createElement("svg",(0,i.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const p={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function m(){const e=(0,h.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(c.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(u,{className:p.breadcrumbHomeIcon})))}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function g(e){let{children:t,href:s,isLast:i}=e;const r="breadcrumbs__link";return i?n.createElement("span",{className:r,itemProp:"name"},t):s?n.createElement(c.Z,{className:r,href:s,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function f(e){let{children:t,active:s,index:o,addMicrodata:a}=e;return n.createElement("li",(0,i.Z)({},a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s})}),t,n.createElement("meta",{itemProp:"position",content:String(o+1)}))}function _(){const e=(0,a.s1)(),t=(0,l.Ns)();return e?n.createElement("nav",{className:(0,r.Z)(o.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(m,null),e.map(((t,s)=>{const i=s===e.length-1;return n.createElement(f,{key:s,active:i,index:s,addMicrodata:!!t.href},n.createElement(g,{href:t.href,isLast:i},t.label))})))):null}},1419:(e,t,s)=>{s.d(t,{Z:()=>c});var i=s(7294),n=s(6010),r=s(5281),o=s(5130),a=s(2503),l=s(1017);function c(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=(0,o.k)();return t.hide_title||void 0!==s?null:e.title}();return i.createElement("div",{className:(0,n.Z)(r.k.docs.docMarkdown,"markdown")},s&&i.createElement("header",null,i.createElement(a.Z,{as:"h1"},s)),i.createElement(l.Z,null,t))}},7887:(e,t,s)=>{s.d(t,{Z:()=>A});var i=s(7294),n=s(6010),r=s(5281),o=s(5130),a=s(5999);function l(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s}=e;return i.createElement(a.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:i.createElement("b",null,i.createElement("time",{dateTime:new Date(1e3*t).toISOString()},s))}}," on {date}")}function c(e){let{lastUpdatedBy:t}=e;return i.createElement(a.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:i.createElement("b",null,t)}}," by {user}")}function d(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s,lastUpdatedBy:n}=e;return i.createElement("span",{className:r.k.common.lastUpdated},i.createElement(a.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&s?i.createElement(l,{lastUpdatedAt:t,formattedLastUpdatedAt:s}):"",byUser:n?i.createElement(c,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)}var h=s(7462);const u={iconEdit:"iconEdit_Z9Sw"};function p(e){let{className:t,...s}=e;return i.createElement("svg",(0,h.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.Z)(u.iconEdit,t),"aria-hidden":"true"},s),i.createElement("g",null,i.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return i.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},i.createElement(p,null),i.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var v=s(9960);const g={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function f(e){let{permalink:t,label:s,count:r}=e;return i.createElement(v.Z,{href:t,className:(0,n.Z)(g.tag,r?g.tagWithCount:g.tagRegular)},s,r&&i.createElement("span",null,r))}const _={tags:"tags_jXut",tag:"tag_QGVx"};function b(e){let{tags:t}=e;return i.createElement(i.Fragment,null,i.createElement("b",null,i.createElement(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),i.createElement("ul",{className:(0,n.Z)(_.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:s}=e;return i.createElement("li",{key:s,className:_.tag},i.createElement(f,{label:t,permalink:s}))}))))}const $={lastUpdated:"lastUpdated_vwxv"};function E(e){return i.createElement("div",{className:(0,n.Z)(r.k.docs.docFooterTagsRow,"row margin-bottom--sm")},i.createElement("div",{className:"col"},i.createElement(b,e)))}function y(e){let{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:o,formattedLastUpdatedAt:a}=e;return i.createElement("div",{className:(0,n.Z)(r.k.docs.docFooterEditMetaRow,"row")},i.createElement("div",{className:"col"},t&&i.createElement(m,{editUrl:t})),i.createElement("div",{className:(0,n.Z)("col",$.lastUpdated)},(s||o)&&i.createElement(d,{lastUpdatedAt:s,formattedLastUpdatedAt:a,lastUpdatedBy:o})))}function A(){const{metadata:e}=(0,o.k)(),{editUrl:t,lastUpdatedAt:s,formattedLastUpdatedAt:a,lastUpdatedBy:l,tags:c}=e,d=c.length>0,h=!!(t||s||l);return d||h?i.createElement("footer",{className:(0,n.Z)(r.k.docs.docFooter,"docusaurus-mt-lg")},d&&i.createElement(E,{tags:c}),h&&i.createElement(y,{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:l,formattedLastUpdatedAt:a})):null}},2894:(e,t,s)=>{s.d(t,{Z:()=>o});var i=s(7294),n=s(5130),r=s(4966);function o(){const{metadata:e}=(0,n.k)();return i.createElement(r.Z,{previous:e.previous,next:e.next})}},5938:(e,t,s)=>{s.d(t,{Z:()=>a});var i=s(7294),n=s(5281),r=s(5130),o=s(9407);function a(){const{toc:e,frontMatter:t}=(0,r.k)();return i.createElement(o.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:n.k.docs.docTocDesktop})}},6781:(e,t,s)=>{s.d(t,{Z:()=>g});var i=s(7294),n=s(6010),r=s(5281),o=s(5130),a=s(6043),l=s(3743),c=s(7462),d=s(5999);const h={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function u(e){let{collapsed:t,...s}=e;return i.createElement("button",(0,c.Z)({type:"button"},s,{className:(0,n.Z)("clean-btn",h.tocCollapsibleButton,!t&&h.tocCollapsibleButtonExpanded,s.className)}),i.createElement(d.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const p={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function m(e){let{toc:t,className:s,minHeadingLevel:r,maxHeadingLevel:o}=e;const{collapsed:c,toggleCollapsed:d}=(0,a.u)({initialState:!0});return i.createElement("div",{className:(0,n.Z)(p.tocCollapsible,!c&&p.tocCollapsibleExpanded,s)},i.createElement(u,{collapsed:c,onClick:d}),i.createElement(a.z,{lazy:!0,className:p.tocCollapsibleContent,collapsed:c},i.createElement(l.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:o})))}const v={tocMobile:"tocMobile_ITEo"};function g(){const{toc:e,frontMatter:t}=(0,o.k)();return i.createElement(m,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,n.Z)(r.k.docs.docTocMobile,v.tocMobile)})}},6176:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var i=s(7294),n=s(1944),r=s(5130);function o(){const{metadata:e,frontMatter:t,assets:s}=(0,r.k)();return i.createElement(n.d,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var a=s(9200);function l(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,s=e.content;return i.createElement(r.b,{content:e.content},i.createElement(n.FG,{className:t},i.createElement(o,null),i.createElement(a.Z,null,i.createElement(s,null))))}},4966:(e,t,s)=>{s.d(t,{Z:()=>c});var i=s(7462),n=s(7294),r=s(5999),o=s(6010),a=s(9960);function l(e){const{permalink:t,title:s,subLabel:i,isNext:r}=e;return n.createElement(a.Z,{className:(0,o.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},s))}function c(e){const{previous:t,next:s}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(l,(0,i.Z)({},t,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),s&&n.createElement(l,(0,i.Z)({},s,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,s)=>{s.d(t,{Z:()=>l});var i=s(7294),n=s(6010),r=s(5999),o=s(5281),a=s(4477);function l(e){let{className:t}=e;const s=(0,a.E)();return s.badge?i.createElement("span",{className:(0,n.Z)(t,o.k.docs.docVersionBadge,"badge badge--secondary")},i.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label}},"Version: {versionLabel}")):null}},3120:(e,t,s)=>{s.d(t,{Z:()=>g});var i=s(7294),n=s(6010),r=s(2263),o=s(9960),a=s(5999),l=s(143),c=s(5281),d=s(373),h=s(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return i.createElement(a.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:i.createElement("b",null,s.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return i.createElement(a.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:i.createElement("b",null,s.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return i.createElement(t,e)}function m(e){let{versionLabel:t,to:s,onClick:n}=e;return i.createElement(a.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:i.createElement("b",null,i.createElement(o.Z,{to:s,onClick:n},i.createElement(a.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:o}}=(0,r.Z)(),{pluginId:a}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:h}=(0,d.J)(a),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,l.Jo)(a),g=u??(f=v).docs.find((e=>e.id===f.mainDocId));var f;return i.createElement("div",{className:(0,n.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},i.createElement("div",null,i.createElement(p,{siteTitle:o,versionMetadata:s})),i.createElement("div",{className:"margin-top--md"},i.createElement(m,{versionLabel:v.label,to:g.path,onClick:()=>h(v.name)})))}function g(e){let{className:t}=e;const s=(0,h.E)();return s.banner?i.createElement(v,{className:t,versionMetadata:s}):null}},5130:(e,t,s)=>{s.d(t,{b:()=>o,k:()=>a});var i=s(7294),n=s(902);const r=i.createContext(null);function o(e){let{children:t,content:s}=e;const n=function(e){return(0,i.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return i.createElement(r.Provider,{value:n},t)}function a(){const e=(0,i.useContext)(r);if(null===e)throw new n.i6("DocProvider");return e}},5251:(e,t,s)=>{s(7418);var i=s(7294),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;n=r("react.element"),t.Fragment=r("react.fragment")}var o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var i,r={},c=null,d=null;for(i in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,i)&&!l.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:n,type:e,key:c,ref:d,props:r,_owner:o.current}}t.jsx=c,t.jsxs=c},5893:(e,t,s)=>{e.exports=s(5251)},9861:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s(8071)}}]);