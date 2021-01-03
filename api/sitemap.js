module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}({"./src/app/Loading.js":
/*!****************************!*\
  !*** ./src/app/Loading.js ***!
  \****************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement("h1",null,"A module is loading")};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(/*! react */"react"));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}},"./src/app/common/components/LocalNavBar/LocalNavBar.js":
/*!**************************************************************!*\
  !*** ./src/app/common/components/LocalNavBar/LocalNavBar.js ***!
  \**************************************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=i(r(/*! react */"react")),o=((n=r(/*! prop-types */"prop-types"))&&n.__esModule,r(/*! react-router-dom */"react-router-dom"));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}r(/*! ../../../../utils/isBackend */"./src/utils/isBackend.js").isBackend||Promise.resolve().then(()=>i(r(/*! ./local_nav_bar.scss */"./src/app/common/components/LocalNavBar/local_nav_bar.scss")));const c="local_nav_bar";var u=({id:e,className:t,style:r,sticky:n,activeStory:s})=>{var i;return a.createElement("nav",{className:[c,t].filter(e=>e).join(" "),id:e,style:{position:n?"sticky":"fixed"}},a.createElement(o.Link,{to:"/"+(s?"#"+(null===(i=s.metadata)||void 0===i?void 0:i.id):"")},a.createElement("svg",{id:"logo",xmlns:"http://www.w3.org/2000/svg",version:"1.1",preserveAspectRatio:"xMinYMin meet",width:120,viewBox:"0 0 303 87"},a.createElement("use",{href:"/logo.svg#logo"}))))};t.default=u},"./src/app/common/components/LocalNavBar/index.js":
/*!********************************************************!*\
  !*** ./src/app/common/components/LocalNavBar/index.js ***!
  \********************************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LocalNavBar",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(/*! ./LocalNavBar */"./src/app/common/components/LocalNavBar/LocalNavBar.js"))&&n.__esModule?n:{default:n}},"./src/app/common/components/LocalNavBar/local_nav_bar.scss":
/*!******************************************************************!*\
  !*** ./src/app/common/components/LocalNavBar/local_nav_bar.scss ***!
  \******************************************************************/
/*! no static exports found */function(e,t){},"./src/app/common/components/index.js":
/*!********************************************!*\
  !*** ./src/app/common/components/index.js ***!
  \********************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LocalNavBar",{enumerable:!0,get:function(){return n.LocalNavBar}});var n=r(/*! ./LocalNavBar */"./src/app/common/components/LocalNavBar/index.js")},"./src/app/magazine/index.js":
/*!***********************************!*\
  !*** ./src/app/magazine/index.js ***!
  \***********************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"routes",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"URLS",{enumerable:!0,get:function(){return a.default}});var n=o(r(/*! ./routes */"./src/app/magazine/routes.js")),a=o(r(/*! ./urls */"./src/app/magazine/urls.js"));function o(e){return e&&e.__esModule?e:{default:e}}},"./src/app/magazine/issues/1/Card.js":
/*!*******************************************!*\
  !*** ./src/app/magazine/issues/1/Card.js ***!
  \*******************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=u(r(/*! react */"react")),o=((n=r(/*! prop-types */"prop-types"))&&n.__esModule,r(/*! @fwrlines/ds */"@fwrlines/ds")),s=r(/*! ./index */"./src/app/magazine/issues/1/index.js");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}r(/*! ../../../../utils/isBackend */"./src/utils/isBackend.js").isBackend||Promise.resolve().then(()=>u(r(/*! ./main.scss */"./src/app/magazine/issues/1/main.scss")));const l="issue1-card";var f=({id:e,className:t,style:r,children:n,...c})=>a.createElement(o.MagazineArticleCard,i({className:[l,t].filter(e=>e).join(" "),id:e,style:r,href:s.url},c),n,a.createElement("h2",null,"Welcome to the Card component"));t.default=f},"./src/app/magazine/issues/1/index.js":
/*!********************************************!*\
  !*** ./src/app/magazine/issues/1/index.js ***!
  \********************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Card",{enumerable:!0,get:function(){return n.default}}),t.Content=t.metadata=t.url=void 0;var n=s(r(/*! ./Card */"./src/app/magazine/issues/1/Card.js")),a=r(/*! react */"react"),o=r(/*! ../../../../utils */"./src/utils/index.js");function s(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}const u="/interview-paiting-the-apocalypse";t.url=u;const l={key:1,title:"Paiting",subtitle:"Entretien avec C.S",id:"issue-1"};t.metadata=l;const f=(0,o.loadable)({resolved:{},chunkName:()=>"cache-mdx-macro-content-c9301eb537-mdx",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.resolve().then(()=>c(r(/*! .cache/mdx.macro/content.c9301eb537.mdx.js */".cache/mdx.macro/content.c9301eb537.mdx.js"))),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){/*! .cache/mdx.macro/content.c9301eb537.mdx.js */
return".cache/mdx.macro/content.c9301eb537.mdx.js"}});t.Content=f},"./src/app/magazine/issues/1/main.scss":
/*!*********************************************!*\
  !*** ./src/app/magazine/issues/1/main.scss ***!
  \*********************************************/
/*! no static exports found */function(e,t){},"./src/app/magazine/issues/2/Card.js":
/*!*******************************************!*\
  !*** ./src/app/magazine/issues/2/Card.js ***!
  \*******************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=u(r(/*! react */"react")),o=((n=r(/*! prop-types */"prop-types"))&&n.__esModule,r(/*! @fwrlines/ds */"@fwrlines/ds")),s=r(/*! ./index */"./src/app/magazine/issues/2/index.js");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}r(/*! ../../../../utils/isBackend */"./src/utils/isBackend.js").isBackend||Promise.resolve().then(()=>u(r(/*! ./main.scss */"./src/app/magazine/issues/2/main.scss")));const l="card";var f=({id:e,className:t,style:r,children:n,...c})=>a.createElement(o.MagazineArticleCard,i({className:[l,t].filter(e=>e).join(" "),id:e,style:r,href:s.url},c),n,a.createElement("h2",null,"Po"));t.default=f},"./src/app/magazine/issues/2/index.js":
/*!********************************************!*\
  !*** ./src/app/magazine/issues/2/index.js ***!
  \********************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Card",{enumerable:!0,get:function(){return n.default}}),t.Content=t.metadata=t.url=void 0;var n=s(r(/*! ./Card */"./src/app/magazine/issues/2/Card.js")),a=r(/*! react */"react"),o=r(/*! ../../../../utils */"./src/utils/index.js");function s(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}const u="/another-test";t.url=u;const l={key:2,title:"Paiting",subtitle:"Entretien avec C.S",id:"issue-2"};t.metadata=l;const f=(0,o.loadable)({resolved:{},chunkName:()=>"cache-mdx-macro-content-e8664fdadb-mdx",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.resolve().then(()=>c(r(/*! .cache/mdx.macro/content.e8664fdadb.mdx.js */".cache/mdx.macro/content.e8664fdadb.mdx.js"))),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){/*! .cache/mdx.macro/content.e8664fdadb.mdx.js */
return".cache/mdx.macro/content.e8664fdadb.mdx.js"}});t.Content=f},"./src/app/magazine/issues/2/main.scss":
/*!*********************************************!*\
  !*** ./src/app/magazine/issues/2/main.scss ***!
  \*********************************************/
/*! no static exports found */function(e,t){},"./src/app/magazine/issues/index.js":
/*!******************************************!*\
  !*** ./src/app/magazine/issues/index.js ***!
  \******************************************/
/*! no static exports found */function(e,t,r){"use strict";function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=a?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=[a(r(/*! ./1 */"./src/app/magazine/issues/1/index.js")),a(r(/*! ./2 */"./src/app/magazine/issues/2/index.js"))];t.default=o},"./src/app/magazine/pages/Magazine.js":
/*!********************************************!*\
  !*** ./src/app/magazine/pages/Magazine.js ***!
  \********************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(r(/*! react */"react")),a=(p(r(/*! prop-types */"prop-types")),r(/*! @fwrlines/ds */"@fwrlines/ds")),o=r(/*! ../../common/components */"./src/app/common/components/index.js"),s=p(r(/*! ../issues */"./src/app/magazine/issues/index.js")),i=r(/*! ../../../utils/isBackend */"./src/utils/isBackend.js"),c=r(/*! react-router-dom */"react-router-dom"),u=r(/*! react-scroll */"react-scroll"),l=(r(/*! @fwrlines/utils */"@fwrlines/utils"),r(/*! react-intl */"react-intl")),f=p(r(/*! ./Magazine.messages */"./src/app/magazine/pages/Magazine.messages.js"));function p(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function m(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}i.isBackend||Promise.resolve().then(()=>m(r(/*! ./magazine.scss */"./src/app/magazine/pages/magazine.scss")));const y={robots:"noindex, nofollow",title:"test of the title",title_tag:"hello"},v=(l.FormattedMessage,f.default.title,l.FormattedMessage,f.default.subtitle,e=>s.default.find(t=>t.url===e));var j=({history:e,location:t,match:r})=>{const[l,f]=(0,n.useState)(v(t.pathname)),p=(null==l||l.Card,null==l?void 0:l.Content);return(0,n.useEffect)(()=>{if(!l){const e=t.hash.replace("#","");u.animateScroll.scrollTo(e)}},[l]),(0,n.useEffect)(()=>{t.pathname.length>1?f(v(t.pathname)):f(!1),i.isBackend||window.scrollTo(0,0)},[t.pathname]),n.createElement(a.Page,{id:"page_magazine",className:"u1 md-u2",HELMET:y},n.createElement(o.LocalNavBar,{sticky:!l,activeStory:l}),s.default.filter(e=>!l||l.url===e.url).map(({key:e,Card:t,metadata:r,url:a})=>n.createElement(t,{id:r.id,isClickable:!l,hasReadMore:l,isOpenDefault:!l},n.createElement(u.Element,{name:r.id}))),p&&n.createElement("main",null,n.createElement(p,null)),!l&&n.createElement("footer",{className:"p-u uc"},n.createElement("div",{className:"h3"},n.createElement(c.Link,{to:"/sauce"},"Secret Sauce"))))};t.default=j},"./src/app/magazine/pages/Magazine.messages.js":
/*!*****************************************************!*\
  !*** ./src/app/magazine/pages/Magazine.messages.js ***!
  \*****************************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(/*! react-intl */"react-intl").defineMessages)({title:{id:"ds.magazine.title"},subtitle:{id:"ds.magazine.subtitle"}});t.default=n},"./src/app/magazine/pages/Sauce.js":
/*!*****************************************!*\
  !*** ./src/app/magazine/pages/Sauce.js ***!
  \*****************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(/*! react */"react")),o=((n=r(/*! prop-types */"prop-types"))&&n.__esModule,r(/*! @fwrlines/ds */"@fwrlines/ds")),s=r(/*! ../../common/components */"./src/app/common/components/index.js");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}const c={robots:"noindex, nofollow",title:"test of the title",title_tag:"hello"},u={sectionProps:{id:"title",head:!0,className:""},headingProps:{className:"uc",heading:"hello",headingAs:"h1",label:"film",labelClassName:"x-red basic",subtitle:"Stanley Kubrick, 1960"}};var l=({history:e,location:t,match:r})=>a.createElement(o.Page,{id:"page_sauce",className:"u1 md-u2",HELMET:c},a.createElement(s.LocalNavBar,null),a.createElement(o.Page.Section,u.sectionProps,a.createElement(o.Heading,u.headingProps)),a.createElement(o.Page.Section,u.sectionProps,a.createElement(o.Heading,u.headingProps)),a.createElement(o.Page.Section,u.sectionProps,a.createElement(o.Heading,u.headingProps)));t.default=l},"./src/app/magazine/pages/index.js":
/*!*****************************************!*\
  !*** ./src/app/magazine/pages/index.js ***!
  \*****************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Magazine",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Sauce",{enumerable:!0,get:function(){return a.default}});var n=o(r(/*! ./Magazine */"./src/app/magazine/pages/Magazine.js")),a=o(r(/*! ./Sauce */"./src/app/magazine/pages/Sauce.js"));function o(e){return e&&e.__esModule?e:{default:e}}},"./src/app/magazine/pages/magazine.scss":
/*!**********************************************!*\
  !*** ./src/app/magazine/pages/magazine.scss ***!
  \**********************************************/
/*! no static exports found */function(e,t){},"./src/app/magazine/routes.js":
/*!************************************!*\
  !*** ./src/app/magazine/routes.js ***!
  \************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(/*! ../../utils */"./src/utils/index.js"),a=i(r(/*! ./urls */"./src/app/magazine/urls.js")),o=i(r(/*! ./issues */"./src/app/magazine/issues/index.js")),s=r(/*! ./pages */"./src/app/magazine/pages/index.js");function i(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}const l="app.magazine";var f=[{path:[a.default.HOME,...o.default.map(e=>e.url)],component:s.Magazine,exact:!0},{path:a.default.SAUCE,component:(0,n.loadable)({resolved:{},chunkName:()=>"app.magazine",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.resolve().then(()=>u(r(/*! ./pages/Sauce.js */"./src/app/magazine/pages/Sauce.js"))),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){/*! ./pages/Sauce.js */
return"./src/app/magazine/pages/Sauce.js"}}),exact:!0}];t.default=f},"./src/app/magazine/urls.js":
/*!**********************************!*\
  !*** ./src/app/magazine/urls.js ***!
  \**********************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(/*! ../../utils */"./src/utils/index.js");var n,a=(n=r(/*! ./issues */"./src/app/magazine/issues/index.js"))&&n.__esModule?n:{default:n};const o={HOME:"/",SAUCE:"/secret-sauce"};a.default.forEach((e,t)=>{o["ISSUE"+(t+1)]=a.default[t].url});var s=o;t.default=s},"./src/app/urls.js":
/*!*************************!*\
  !*** ./src/app/urls.js ***!
  \*************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MAGAZINE",{enumerable:!0,get:function(){return n.URLS}}),t.STATIC=void 0;var n=r(/*! ./magazine */"./src/app/magazine/index.js");t.STATIC={HOME:"",ANOTHERPAGE:"longer/url/for/sitemap"}},"./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={SITE:{NAME:"",CANONICAL:"http://site.com",GA:""},BUSINESS:{NAME:"",ADDRESS:"",ADDRESS_2:"",CITY:"",POSTCODE:""},SOCIAL_MEDIA:{FACEBOOK:"",TWITTER:"",INSTAGRAM:""}}},"./src/sitemap/renderer.js":
/*!*********************************!*\
  !*** ./src/sitemap/renderer.js ***!
  \*********************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(/*! ../config */"./src/config/index.js"))&&n.__esModule?n:{default:n},o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(/*! ../app/urls */"./src/app/urls.js")),s=r(/*! date-fns */"date-fns"),i=r(/*! ../utils */"./src/utils/index.js");function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}console.log("RDR");const u={HOME:{changefreq:"yearly",priority:.5,lastmod:new Date("2019-10-02")},ANOTHERPAGE:{changefreq:"daily",priority:.5,lastmod:new Date("2019-09-12")}};t.default=async(e,t)=>{new Date;const r=[];return Object.keys(o.STATIC).forEach(e=>{const{changefreq:t,priority:n,lastmod:a}=u[e],s=o.STATIC[e];r.push({loc:s,lastmod:a,changefreq:t,priority:n})}),t.setHeader("Content-Type","text/xml"),t.send('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset> \n'.replace("</urlset>",r.reduce((e,{loc:t,lastmod:r,changefreq:n,priority:o})=>(process&&process.env&&process.env.COMPILE,e+`\n    <url>\n      <loc>${t.length?(0,i.urljoin)(a.default.SITE.CANONICAL,t):a.default.SITE.CANONICAL}</loc>\n      <lastmod>${(0,s.format)(r,"yyyy-MM-dd")}</lastmod>\n      ${n?"<changefreq>"+n+"</changefreq>":""}\n      <priority>${o}</priority>\n   </url>`),"")+"</urlset>"))}},"./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"loadable",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"urljoin",{enumerable:!0,get:function(){return a.default}});var n=o(r(/*! ./loadable */"./src/utils/loadable.js")),a=o(r(/*! ./urljoin */"./src/utils/urljoin.js"));function o(e){return e&&e.__esModule?e:{default:e}}},"./src/utils/isBackend.js":
/*!********************************!*\
  !*** ./src/utils/isBackend.js ***!
  \********************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isBackend=void 0;const n="true"===(process&&process.env&&process.env.BACKEND||"true");t.isBackend=n},"./src/utils/loadable.js":
/*!*******************************!*\
  !*** ./src/utils/loadable.js ***!
  \*******************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,a.default)(e,{fallback:n.default.createElement(o.default,null)})};var n=s(r(/*! react */"react")),a=s(r(/*! @loadable/component */"@loadable/component")),o=s(r(/*! ../app/Loading */"./src/app/Loading.js"));function s(e){return e&&e.__esModule?e:{default:e}}},"./src/utils/urljoin.js":
/*!******************************!*\
  !*** ./src/utils/urljoin.js ***!
  \******************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(...e){return e.filter(e=>e).reduce((t,r,n)=>{let a=r;return r.startsWith("/")&&n>0&&(a=r.substring(1)),r.endsWith("/")&&n<e.length-1&&(a=r.substring(0,r.length-1)),t.push(a),t},[]).join("/")};t.default=n},".cache/mdx.macro/content.c9301eb537.mdx.js":
/*!*************************************************************!*\
  !*** external ".cache/mdx.macro/content.c9301eb537.mdx.js" ***!
  \*************************************************************/
/*! no static exports found */function(e,t){e.exports=require(".cache/mdx.macro/content.c9301eb537.mdx.js")},".cache/mdx.macro/content.e8664fdadb.mdx.js":
/*!*************************************************************!*\
  !*** external ".cache/mdx.macro/content.e8664fdadb.mdx.js" ***!
  \*************************************************************/
/*! no static exports found */function(e,t){e.exports=require(".cache/mdx.macro/content.e8664fdadb.mdx.js")},0:
/*!***************************************!*\
  !*** multi ./src/sitemap/renderer.js ***!
  \***************************************/
/*! no static exports found */function(e,t,r){e.exports=r(/*! /home/adrian_villa/code/advl/insomnia/src/sitemap/renderer.js */"./src/sitemap/renderer.js")},"@fwrlines/ds":
/*!*******************************!*\
  !*** external "@fwrlines/ds" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("@fwrlines/ds")},"@fwrlines/utils":
/*!**********************************!*\
  !*** external "@fwrlines/utils" ***!
  \**********************************/
/*! no static exports found */function(e,t){e.exports=require("@fwrlines/utils")},"@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */function(e,t){e.exports=require("@loadable/component")},"date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */function(e,t){e.exports=require("date-fns")},"prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=require("prop-types")},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */function(e,t){e.exports=require("react")},"react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=require("react-intl")},"react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */function(e,t){e.exports=require("react-router-dom")},"react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("react-scroll")}});