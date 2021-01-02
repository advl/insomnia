(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){"use strict";var r=n(0),a=(n(1),n(32)),i=n(57),o=n(115),c=n(24);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=[{variables:["robots"],render:function(e){return r.createElement("meta",{name:"robots",key:"robots",content:e||'"index, follow"'})}},{variables:["title_tag","title"],render:function(e){return r.createElement("title",{key:"title_tag"},e)}},{variables:["meta_description"],render:function(e){return r.createElement("meta",{name:"description",content:e,key:"meta_description"})}},{variables:["canonical"],render:function(e,t){return t.SITE_CANONICAL?r.createElement("link",{rel:"canonical",href:"".concat(t.SITE_CANONICAL).concat(e),key:"canonical"}):r.createElement("link",{rel:"canonical",href:e,key:"canonical"})}},{variables:["twitter_title","title","title_tag"],render:function(e){return r.createElement("meta",{name:"twitter:title",content:e,key:"twitter_title"})}},{variables:["twitter_description","meta_description"],render:function(e){return r.createElement("meta",{name:"twitter:description",content:e,key:"twitter_description"})}},{test:!0,variables:["twitter_image, main_image"],render:function(e){return r.createElement("meta",{name:"twitter:image",content:e,key:"twitter_image"})}},{variables:["og_title","title","title_tag"],render:function(e){return r.createElement("meta",{property:"og:title",content:e,key:"og_title"})}},{variables:["og_description","meta_description"],render:function(e){return r.createElement("meta",{property:"og:description",content:e,key:"og_description"})}},{test:!0,variables:["og_image","main_image"],render:function(e){return r.createElement("meta",{property:"og:image",content:e,key:"og_image"})}},{test:!0,variables:["og_type"],render:function(e){return r.createElement("meta",{property:"og:type",content:e||"article",key:"og_type"})}},{variables:["og_url","canonical"],render:function(e,t){return t.SITE_CANONICAL?r.createElement("meta",{property:"og:url",content:"".concat(t.SITE_CANONICAL,"/").concat(e),key:"og_url"}):r.createElement("meta",{property:"og:url",content:e,key:"og_url"})}}],u=function(e){var t=l({},e),n=Object(o.a)(),a=function(e,t,n){return s.reduce((function(r,a){var i,o=a.variables,c=a.render,l=a.test,s="";for(var u in o)if(e[o[u]]){s=e[o[u]];break}(void 0===l||l&&s.length)&&(i=c("string"==typeof s?s:n.formatMessage(s),t));return i&&r.push(i),r}),[])}(t,Object(r.useContext)(c.a),n);return r.createElement(i.a,null,a)},m=r.createContext({}),d=n(19),f=n(61),p="caret_down",_=function(e){var t=e.id,n=e.className,a=e.style,i=e.destination,o=e.smooth,c=e.duration,l=e.icon,s=Object(r.useContext)(m);return r.createElement(f.Link,{className:[p,"row uc",n].filter((function(e){return e})).join(" "),id:t,style:a,to:i+(s.id?"_"+s.id:""),spy:!0,smooth:o,duration:c},r.createElement("i",{className:d.a.icon},l))};_.defaultProps={duration:900,animated:!1,icon:"j"};var y=_;a.a||n.e(0).then(n.t.bind(null,183,7));var E="section",g=function(e){var t=e.id,n=e.className,a=e.style,i=e.children,o=e.transparent,c=e.inverted,l=e.header,s=e.caretDown,u=e.caretDownDuration,f=e.caretDownSmooth,p=Object(r.useContext)(m),_=p.id,g=p.childrenClassName;return r.createElement("section",{id:t&&"".concat(_,"__").concat(t),className:[E,g,l&&d.a.headSection,c&&d.a.inverted,o&&d.a.transparent,n].filter((function(e){return e})).join(" "),style:a},i,s&&r.createElement(y,{destination:s,duration:u,smooth:f}))};g.defaultProps={status:"neutral",as:"section",header:!1,transparent:!1,inverted:!1,caretDownSmooth:!0};var v=g;a.a||n.e(0).then(n.t.bind(null,182,7));var b="page",w=function(e){var t=e.id,n=e.className,a=e.style,i=e.children,o=e.itemType,c=e.childrenClassName,l=e.HELMET;return Object(r.useEffect)((function(){"undefined"!=typeof window&&window.scrollTo(0,0)}),[]),r.createElement(m.Provider,{value:{id:t,childrenClassName:c}},r.createElement("div",{className:[b,n].filter((function(e){return e})).join(" "),id:t,style:a,itemType:o,itemScope:o&&" "},o&&r.createElement("meta",{itemProp:"mainEntityOfPage",content:l&&l.canonical}),l&&r.createElement(u,l),i))};w.defaultProps={HELMET:{}},w.Section=v;t.a=w}}]);