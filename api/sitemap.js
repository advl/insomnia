module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}({"./src/app/Loading.js":
/*!****************************!*\
  !*** ./src/app/Loading.js ***!
  \****************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement("h1",null,"A module is loading")};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(r(/*! react */"react"));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}},"./src/app/common/components/LocalNavBar/LocalNavBar.js":
/*!**************************************************************!*\
  !*** ./src/app/common/components/LocalNavBar/LocalNavBar.js ***!
  \**************************************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=i(r(/*! react */"react")),s=(n=r(/*! prop-types */"prop-types"))&&n.__esModule?n:{default:n},o=r(/*! react-router-dom */"react-router-dom");function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}r(/*! ../../../../utils/isBackend */"./src/utils/isBackend.js").isBackend||Promise.resolve().then(()=>i(r(/*! ./local_nav_bar.scss */"./src/app/common/components/LocalNavBar/local_nav_bar.scss")));const c="local_nav_bar",l=({id:e,className:t,style:r,sticky:n})=>a.createElement("nav",{className:[c,t].filter(e=>e).join(" "),id:e,style:{position:n?"sticky":"fixed"}},a.createElement(o.Link,{to:"/"},a.createElement("svg",{id:"logo",xmlns:"http://www.w3.org/2000/svg",version:"1.1",preserveAspectRatio:"xMinYMin meet",width:120,viewBox:"0 0 303 87"},a.createElement("use",{href:"/logo.svg#logo"}))));l.propTypes={id:s.default.string,className:s.default.string,style:s.default.object,children:s.default.node,as:s.default.oneOfType([s.default.string,s.default.object])};var f=l;t.default=f},"./src/app/common/components/LocalNavBar/index.js":
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
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"routes",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"URLS",{enumerable:!0,get:function(){return a.default}});var n=s(r(/*! ./routes */"./src/app/magazine/routes.js")),a=s(r(/*! ./urls */"./src/app/magazine/urls.js"));function s(e){return e&&e.__esModule?e:{default:e}}},"./src/app/magazine/issues/Issue1/Card.js":
/*!************************************************!*\
  !*** ./src/app/magazine/issues/Issue1/Card.js ***!
  \************************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=l(r(/*! react */"react")),s=(n=r(/*! prop-types */"prop-types"))&&n.__esModule?n:{default:n},o=r(/*! @fwrlines/ds */"@fwrlines/ds"),u=r(/*! ./index */"./src/app/magazine/issues/Issue1/index.js");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}r(/*! ../../../../utils/isBackend */"./src/utils/isBackend.js").isBackend||Promise.resolve().then(()=>l(r(/*! ./main.scss */"./src/app/magazine/issues/Issue1/main.scss")));const f="card",p=({id:e,className:t,style:r,...n})=>a.createElement(o.MagazineArticleCard,i({className:[f,t].filter(e=>e).join(" "),id:e,style:r,href:u.url},n),a.createElement("h2",null,"Welcome to the Card component"));p.propTypes={id:s.default.string,className:s.default.string,style:s.default.object,children:s.default.node,as:s.default.oneOfType([s.default.string,s.default.object])};var d=p;t.default=d},"./src/app/magazine/issues/Issue1/index.js":
/*!*************************************************!*\
  !*** ./src/app/magazine/issues/Issue1/index.js ***!
  \*************************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Card",{enumerable:!0,get:function(){return a.default}}),t.metadata=t.url=void 0;var n,a=(n=r(/*! ./Card */"./src/app/magazine/issues/Issue1/Card.js"))&&n.__esModule?n:{default:n};t.url="/interview-paiting-the-apocalypse";t.metadata={title:"Paiting",subtitle:"Entretien avec C.S"}},"./src/app/magazine/issues/Issue1/main.scss":
/*!**************************************************!*\
  !*** ./src/app/magazine/issues/Issue1/main.scss ***!
  \**************************************************/
/*! no static exports found */function(e,t){},"./src/app/magazine/issues/Issue2/Card.js":
/*!************************************************!*\
  !*** ./src/app/magazine/issues/Issue2/Card.js ***!
  \************************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=l(r(/*! react */"react")),s=(n=r(/*! prop-types */"prop-types"))&&n.__esModule?n:{default:n},o=r(/*! @fwrlines/ds */"@fwrlines/ds"),u=r(/*! ./index */"./src/app/magazine/issues/Issue2/index.js");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}r(/*! ../../../../utils/isBackend */"./src/utils/isBackend.js").isBackend||Promise.resolve().then(()=>l(r(/*! ./main.scss */"./src/app/magazine/issues/Issue2/main.scss")));const f="card",p=({id:e,className:t,style:r,...n})=>a.createElement(o.MagazineArticleCard,i({className:[f,t].filter(e=>e).join(" "),id:e,style:r,href:u.url},n),a.createElement("h2",null,"Po"));p.propTypes={id:s.default.string,className:s.default.string,style:s.default.object,children:s.default.node,as:s.default.oneOfType([s.default.string,s.default.object])};var d=p;t.default=d},"./src/app/magazine/issues/Issue2/index.js":
/*!*************************************************!*\
  !*** ./src/app/magazine/issues/Issue2/index.js ***!
  \*************************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Card",{enumerable:!0,get:function(){return a.default}}),t.metadata=t.url=void 0;var n,a=(n=r(/*! ./Card */"./src/app/magazine/issues/Issue2/Card.js"))&&n.__esModule?n:{default:n};t.url="/another-test";t.metadata={title:"Paiting",subtitle:"Entretien avec C.S"}},"./src/app/magazine/issues/Issue2/main.scss":
/*!**************************************************!*\
  !*** ./src/app/magazine/issues/Issue2/main.scss ***!
  \**************************************************/
/*! no static exports found */function(e,t){},"./src/app/magazine/issues/index.js":
/*!******************************************!*\
  !*** ./src/app/magazine/issues/index.js ***!
  \******************************************/
/*! no static exports found */function(e,t,r){"use strict";function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=a?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=[a(r(/*! ./Issue1 */"./src/app/magazine/issues/Issue1/index.js")),a(r(/*! ./Issue2 */"./src/app/magazine/issues/Issue2/index.js"))];t.default=s},"./src/app/magazine/pages/Magazine.js":
/*!********************************************!*\
  !*** ./src/app/magazine/pages/Magazine.js ***!
  \********************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(r(/*! react */"react")),a=p(r(/*! prop-types */"prop-types")),s=r(/*! @fwrlines/ds */"@fwrlines/ds"),o=r(/*! ../../common/components */"./src/app/common/components/index.js"),u=p(r(/*! ../issues */"./src/app/magazine/issues/index.js")),i=r(/*! ../../../utils/isBackend */"./src/utils/isBackend.js"),c=r(/*! react-router-dom */"react-router-dom"),l=r(/*! react-intl */"react-intl"),f=p(r(/*! ./Magazine.messages */"./src/app/magazine/pages/Magazine.messages.js"));function p(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function m(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}i.isBackend||Promise.resolve().then(()=>m(r(/*! ./magazine.scss */"./src/app/magazine/pages/magazine.scss")));const y={robots:"noindex, nofollow",title:"test of the title",title_tag:"hello"},v=(l.FormattedMessage,f.default.title,l.FormattedMessage,f.default.subtitle,e=>u.default.find(t=>t.url===e)),j=({history:e,location:t,match:r})=>{const[a,l]=(0,n.useState)(v(t.pathname));null==a||a.Card;return(0,n.useEffect)(()=>{t.pathname.length>1?l(v(t.pathname)):l(!1),i.isBackend||window.scrollTo(0,0)},[t.pathname]),n.createElement(s.Page,{id:"page_magazine",className:"u1 md-u2",HELMET:y},n.createElement(o.LocalNavBar,{sticky:!a}),u.default.filter(e=>!a||a.url===e.url).map(({Card:e,url:t,metadata:r})=>n.createElement(n.Fragment,null,n.createElement(e,{isClickable:!a,isOpenDefault:!a}))),!a&&n.createElement("footer",{className:"p-u uc"},n.createElement("div",{className:"h3"},n.createElement(c.Link,{to:"/sauce"},"Secret Sauce"))))};j.propTypes={someprop:a.default.node};var g=j;t.default=g},"./src/app/magazine/pages/Magazine.messages.js":
/*!*****************************************************!*\
  !*** ./src/app/magazine/pages/Magazine.messages.js ***!
  \*****************************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(/*! react-intl */"react-intl").defineMessages)({title:{id:"ds.magazine.title"},subtitle:{id:"ds.magazine.subtitle"}});t.default=n},"./src/app/magazine/pages/magazine.scss":
/*!**********************************************!*\
  !*** ./src/app/magazine/pages/magazine.scss ***!
  \**********************************************/
/*! no static exports found */function(e,t){},"./src/app/magazine/routes.js":
/*!************************************!*\
  !*** ./src/app/magazine/routes.js ***!
  \************************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(/*! ../../utils */"./src/utils/index.js"),a=o(r(/*! ./urls */"./src/app/magazine/urls.js")),s=o(r(/*! ./issues */"./src/app/magazine/issues/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}const c="app.magazine";var l=[{path:[a.default.HOME,...s.default.map(e=>e.url)],component:(0,n.loadable)({resolved:{},chunkName:()=>"app.magazine",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.resolve().then(()=>i(r(/*! ./pages/Magazine.js */"./src/app/magazine/pages/Magazine.js"))),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){/*! ./pages/Magazine.js */
return"./src/app/magazine/pages/Magazine.js"}}),exact:!0}];t.default=l},"./src/app/magazine/urls.js":
/*!**********************************!*\
  !*** ./src/app/magazine/urls.js ***!
  \**********************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(/*! ../../utils */"./src/utils/index.js");var n,a=(n=r(/*! ./issues */"./src/app/magazine/issues/index.js"))&&n.__esModule?n:{default:n};const s={HOME:"/"};a.default.forEach((e,t)=>{s["ISSUE"+(t+1)]=a.default[t].url});var o=s;t.default=o},"./src/app/urls.js":
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
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(/*! ../config */"./src/config/index.js"))&&n.__esModule?n:{default:n},s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(/*! ../app/urls */"./src/app/urls.js")),o=r(/*! date-fns */"date-fns"),u=r(/*! ../utils */"./src/utils/index.js");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}console.log("RDR");const c={HOME:{changefreq:"yearly",priority:.5,lastmod:new Date("2019-10-02")},ANOTHERPAGE:{changefreq:"daily",priority:.5,lastmod:new Date("2019-09-12")}};t.default=async(e,t)=>{new Date;const r=[];return Object.keys(s.STATIC).forEach(e=>{const{changefreq:t,priority:n,lastmod:a}=c[e],o=s.STATIC[e];r.push({loc:o,lastmod:a,changefreq:t,priority:n})}),t.setHeader("Content-Type","text/xml"),t.send('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset> \n'.replace("</urlset>",r.reduce((e,{loc:t,lastmod:r,changefreq:n,priority:s})=>(process&&process.env&&process.env.COMPILE,e+`\n    <url>\n      <loc>${t.length?(0,u.urljoin)(a.default.SITE.CANONICAL,t):a.default.SITE.CANONICAL}</loc>\n      <lastmod>${(0,o.format)(r,"yyyy-MM-dd")}</lastmod>\n      ${n?"<changefreq>"+n+"</changefreq>":""}\n      <priority>${s}</priority>\n   </url>`),"")+"</urlset>"))}},"./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"loadable",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"urljoin",{enumerable:!0,get:function(){return a.default}});var n=s(r(/*! ./loadable */"./src/utils/loadable.js")),a=s(r(/*! ./urljoin */"./src/utils/urljoin.js"));function s(e){return e&&e.__esModule?e:{default:e}}},"./src/utils/isBackend.js":
/*!********************************!*\
  !*** ./src/utils/isBackend.js ***!
  \********************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isBackend=void 0;const n="true"===(process&&process.env&&process.env.BACKEND||"true");t.isBackend=n},"./src/utils/loadable.js":
/*!*******************************!*\
  !*** ./src/utils/loadable.js ***!
  \*******************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,a.default)(e,{fallback:n.default.createElement(s.default,null)})};var n=o(r(/*! react */"react")),a=o(r(/*! @loadable/component */"@loadable/component")),s=o(r(/*! ../app/Loading */"./src/app/Loading.js"));function o(e){return e&&e.__esModule?e:{default:e}}},"./src/utils/urljoin.js":
/*!******************************!*\
  !*** ./src/utils/urljoin.js ***!
  \******************************/
/*! no static exports found */function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(...e){return e.filter(e=>e).reduce((t,r,n)=>{let a=r;return r.startsWith("/")&&n>0&&(a=r.substring(1)),r.endsWith("/")&&n<e.length-1&&(a=r.substring(0,r.length-1)),t.push(a),t},[]).join("/")};t.default=n},0:
/*!***************************************!*\
  !*** multi ./src/sitemap/renderer.js ***!
  \***************************************/
/*! no static exports found */function(e,t,r){e.exports=r(/*! /home/adrian_villa/code/advl/insomnia/src/sitemap/renderer.js */"./src/sitemap/renderer.js")},"@fwrlines/ds":
/*!*******************************!*\
  !*** external "@fwrlines/ds" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("@fwrlines/ds")},"@loadable/component":
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
/*! no static exports found */function(e,t){e.exports=require("react-router-dom")}});