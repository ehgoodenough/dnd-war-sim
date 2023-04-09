!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=47)}([function(e,n,t){var o=t(1);e.exports=function(e){return this.func=e,this.fps=60,this.cap=1e3,new o(e=>{"number"==typeof this.cap&&(e=Math.min(e,this.cap)),e={ms:e,s:e/1e3,f:e/(1e3/this.fps)},this.func(e)})}},function(e,n){e.exports=function(e){!function n(t){e(Math.min(window.performance.now()-t,1e3)),window.requestAnimationFrame(n.bind(this,window.performance.now()))}(window.performance.now())}},function(e,n,t){var o=t(3),i=t(4);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},function(e,n,t){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},o=[],i=0;i<e.length;i++){var r=e[i],c=n.base?r[0]+n.base:r[0],u=t[c]||0,l="".concat(c," ").concat(u);t[c]=u+1;var f=s(l),d={css:r[1],media:r[2],sourceMap:r[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:m(d,n),references:1}),o.push(l)}return o}function u(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,f=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=f(n,i);else{var r=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(r,a[n]):e.appendChild(r)}}function p(e,n,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,_=0;function m(e,n){var t,o,i;if(n.singleton){var r=_++;t=h||(h=u(n)),o=d.bind(null,t,r,!1),i=d.bind(null,t,r,!0)}else t=u(n),o=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var i=s(t[o]);a[i].references--}for(var r=c(e,n),u=0;u<t.length;u++){var l=s(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=r}}}},function(e,n,t){var o=t(5),i=t(6),r=t(7),a=t(8),s=t(9),c=t(10),u=t(11),l=t(12),f=t(13);n=o(!1);var d=i(r),p=i(a),h=i(s),_=i(c),m=i(u),g=i(l),y=i(f);n.push([e.i,'* {\n  margin: 0px;\n  padding: 0px;\n  cursor: default;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  image-rendering: pixelated;\n}\nbody {\n  background-color: #111;\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@font-face {\n  font-weight: 400;\n  font-family: "alagard";\n  src: url('+d+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+p+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+h+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: normal;\n  font-family: "roboto";\n  src: url('+_+') format("truetype");\n}\n@font-face {\n  font-weight: 400;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+m+') format("truetype");\n}\n@font-face {\n  font-weight: 600;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+g+') format("truetype");\n}\n@font-face {\n  font-weight: 200;\n  font-stretch: condensed;\n  font-family: "roboto";\n  src: url('+y+') format("truetype");\n}\n.Mount {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  position: absolute;\n  font-family: Roboto, Helvetica, sans-serif;\n  color: #FBFEF9;\n}\n.MainScreen {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  width: 100%;\n  max-width: 64em;\n  margin: auto;\n  overflow: hidden;\n  position: absolute;\n  background-color: green;\n}\n.RerollButton {\n  top: 4em;\n  left: 0em;\n  right: 0em;\n  z-index: 10;\n  width: 10em;\n  margin: auto;\n  position: absolute;\n}\n.Background {\n  top: 0em;\n  left: 0em;\n  right: 0em;\n  bottom: 0em;\n  position: absolute;\n  background-size: cover;\n  background-position: center;\n}\n.Skirmish {\n  display: flex;\n}\n.Skirmish .Squad {\n  flex: 1;\n  position: relative;\n}\n.Skirmish .Squad:first-child {\n  margin-right: 0.25em;\n}\n.Skirmish .Squad:last-child {\n  margin-left: 0.25em;\n}\n.Skirmish .Squad .Status {\n  top: 8em;\n  left: 0em;\n  right: 0em;\n  text-align: center;\n  position: absolute;\n}\n.Skirmish .Squad .Status .Name {\n  font-size: 2em;\n  font-family: alagard;\n}\n.Skirmish .Squad .Status .Odds {\n  font-family: alagard;\n}\n.Skirmish .Squad .Units {\n  top: 16em;\n  left: 0em;\n  right: 0em;\n  position: absolute;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n@media (min-width: 720px) {\n  .Skirmish .Squad .Units {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n.Skirmish .Squad .Units .Unit {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.25);\n}\n.Skirmish .Squad .Units .Unit .Image {\n  width: 4em;\n  height: 4em;\n  background-size: contain;\n  background-repeat: no-repeat;\n  transform-origin: center;\n}\n.Skirmish .Squad .Units .Unit .Image[isFlipped] {\n  transform: scaleX(-1);\n}\n.Skirmish .Squad .Units .Unit .Image[isLocked] {\n  image-rendering: auto;\n  filter: brightness(0);\n  opacity: 1;\n}\n.Skirmish .Squad .Units .Unit .Text {\n  margin-right: 1em;\n}\n.Skirmish .Squad .Units .Unit .Text .Name {\n  font-size: 0.3em;\n  text-align: center;\n}\n.Skirmish .Squad .Units .Unit .Text .Count {\n  width: 2em;\n  height: 2em;\n  font: inherit;\n  -moz-appearance: textfield;\n}\n.Skirmish .Squad .Units .Unit .Text .Count::-webkit-outer-spin-button,\n.Skirmish .Squad .Units .Unit .Text .Count::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([i]).join("\n")}var a,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){e.exports=t.p+"6faad1789bcbd321a458c14d0735d976.ttf"},function(e,n,t){e.exports=t.p+"8a36205bd9b83e03af0591a004bc97f4.ttf"},function(e,n,t){e.exports=t.p+"b8e42971dec8d49207a8c8e2b919a6ac.ttf"},function(e,n,t){e.exports=t.p+"881e150ab929e26d1f812c4342c15a7c.ttf"},function(e,n,t){e.exports=t.p+"0134dd8fe6fe708de73909a71d842780.ttf"},function(e,n,t){e.exports=t.p+"e38804ae070b58fbf4fdd88fd6853929.ttf"},function(e,n,t){e.exports=t.p+"905c2728284a6b881d4e417b80f1e79d.ttf"},function(e,n,t){e.exports=t.p+"0c7e874fd84a53b69171215a41430678.png"},function(e,n,t){e.exports=t.p+"55196d89d70d65e77b0c35f729f63734.png"},function(e,n,t){e.exports=t.p+"bcc4b5fdb872285af50294be679e86d3.png"},function(e,n,t){e.exports=t.p+"369e181e432c08f52e62dcf45934a1f2.png"},function(e,n,t){e.exports=t.p+"e70e4e33f546d2e7de4411631e96e3ec.png"},function(e,n,t){e.exports=t.p+"41b052c3047a7384ac5c815d892928a2.png"},function(e,n,t){e.exports=t.p+"dd9279d822dcbb9b02fa8d4514891d63.png"},function(e,n,t){e.exports=t.p+"7db6a14544e81fb276209fedd356c387.png"},function(e,n,t){e.exports=t.p+"2d18fea09792f97ab718fbeadfd02149.png"},function(e,n,t){e.exports=t.p+"707ff0703534c4f49bc91afd890b8c8f.png"},function(e,n,t){e.exports=t.p+"3dbb14ce430a07d857558f67e930a3de.png"},function(e,n,t){e.exports=t.p+"03007308d0356f04ea0df30ca598d0a8.png"},function(e,n,t){e.exports=t.p+"e1a29e06d4b21d3442d717e5f7d659c4.png"},function(e,n,t){e.exports=t.p+"58496f842460ae517fdff2308c3d68b5.png"},function(e,n,t){e.exports=t.p+"31994eff0345379a768345be3779aacd.png"},function(e,n,t){e.exports=t.p+"94a4e5a8152a76558e4b4775c7647780.png"},function(e,n,t){e.exports=t.p+"48f6ca6ff964f4f0b806d0dd71bdaac2.png"},function(e,n,t){e.exports=t.p+"d575d1328fab2af25509d394d8f122f2.png"},function(e,n,t){e.exports=t.p+"c6d52576df52c3976be3b4d0a6649b92.png"},function(e,n,t){e.exports=t.p+"ae82b0d9bd271ebac381c9197850a382.png"},function(e,n,t){e.exports=t.p+"68b6eef6d62a60d48bf727ec186dee4c.png"},function(e,n,t){e.exports=t.p+"fb73503329e8b2a649ee0b82c25f721d.png"},function(e,n,t){e.exports=t.p+"f72dd72c72fea54731062627a0996027.png"},function(e,n,t){e.exports=t.p+"32fa4ed1a57fb1a862a869e8af7487d3.png"},function(e,n,t){e.exports=t.p+"0902707573a6215d65328755b270871c.png"},function(e,n,t){e.exports=t.p+"e7474b7f20c600d0ffa8ce90d3ce449a.png"},function(e,n,t){e.exports=t.p+"9af6c60c2931a73cfaee6abfd7a187f1.png"},function(e,n,t){e.exports=t.p+"6cf1814baa1065d027d428bdcee3eae0.png"},function(e,n,t){e.exports=t.p+"a5b6dc019f081e7c0034d7290c1c703b.png"},function(e,n,t){e.exports=t.p+"9a8f5136825b9c1f600583cf7fe7e884.png"},function(e,n,t){e.exports=t.p+"a833ae6a42def7246dde6b4172d2e8a4.png"},function(e,n,t){e.exports=t.p+"07b9331c6bf6d744fdc63fd0d2844444.png"},function(e,n,t){e.exports=t.p+"9a491df584a53d9a3d3c770bc0a085f4.png"},function(e,n,t){"use strict";t.r(n);var o,i,r,a,s,c,u={},l=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function d(e,n){for(var t in n)e[t]=n[t];return e}function p(e){var n=e.parentNode;n&&n.removeChild(e)}function h(e,n,t){var i,r,a,s={};for(a in n)"key"==a?i=n[a]:"ref"==a?r=n[a]:s[a]=n[a];if(arguments.length>2&&(s.children=arguments.length>3?o.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===s[a]&&(s[a]=e.defaultProps[a]);return _(e,s,i,r,null)}function _(e,n,t,o,a){var s={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==a?++r:a};return null==a&&null!=i.vnode&&i.vnode(s),s}function m(e){return e.children}function g(e,n){this.props=e,this.context=n}function y(e,n){if(null==n)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?y(e):null}function v(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return v(e)}}function b(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!k.__r++||s!==i.debounceRendering)&&((s=i.debounceRendering)||c)(k)}function k(){var e,n,t,o,i,r,s,c;for(a.sort((function(e,n){return e.__v.__b-n.__v.__b}));e=a.shift();)e.__d&&(n=a.length,o=void 0,i=void 0,s=(r=(t=e).__v).__e,(c=t.__P)&&(o=[],(i=d({},r)).__v=r.__v+1,L(c,r,i,t.__n,void 0!==c.ownerSVGElement,null!=r.__h?[s]:null,o,null==s?y(r):s,r.__h),E(o,r),r.__e!=s&&v(r)),a.length>n&&a.sort((function(e,n){return e.__v.__b-n.__v.__b})));k.__r=0}function x(e,n,t,o,i,r,a,s,c,f){var d,p,h,g,v,b,k,x=o&&o.__k||l,U=x.length;for(t.__k=[],d=0;d<n.length;d++)if(null!=(g=t.__k[d]=null==(g=n[d])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?_(null,g,null,null,g):Array.isArray(g)?_(m,{children:g},null,null,null):g.__b>0?_(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)){if(g.__=t,g.__b=t.__b+1,null===(h=x[d])||h&&g.key==h.key&&g.type===h.type)x[d]=void 0;else for(p=0;p<U;p++){if((h=x[p])&&g.key==h.key&&g.type===h.type){x[p]=void 0;break}h=null}L(e,g,h=h||u,i,r,a,s,c,f),v=g.__e,(p=g.ref)&&h.ref!=p&&(k||(k=[]),h.ref&&k.push(h.ref,null,g),k.push(p,g.__c||v,g)),null!=v?(null==b&&(b=v),"function"==typeof g.type&&g.__k===h.__k?g.__d=c=w(g,c,e):c=S(e,g,h,x,v,c),"function"==typeof t.type&&(t.__d=c)):c&&h.__e==c&&c.parentNode!=e&&(c=y(h))}for(t.__e=b,d=U;d--;)null!=x[d]&&("function"==typeof t.type&&null!=x[d].__e&&x[d].__e==t.__d&&(t.__d=q(o).nextSibling),j(x[d],x[d]));if(k)for(d=0;d<k.length;d++)N(k[d],k[++d],k[++d])}function w(e,n,t){for(var o,i=e.__k,r=0;i&&r<i.length;r++)(o=i[r])&&(o.__=e,n="function"==typeof o.type?w(o,n,t):S(t,o,o,i,o.__e,n));return n}function S(e,n,t,o,i,r){var a,s,c;if(void 0!==n.__d)a=n.__d,n.__d=void 0;else if(null==t||i!=r||null==i.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(i),a=null;else{for(s=r,c=0;(s=s.nextSibling)&&c<o.length;c+=1)if(s==i)break e;e.insertBefore(i,r),a=r}return void 0!==a?a:i.nextSibling}function q(e){var n,t,o;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(n=e.__k.length-1;n>=0;n--)if((t=e.__k[n])&&(o=q(t)))return o;return null}function U(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function C(e,n,t,o,i){var r;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||U(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||U(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])r=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?o||e.addEventListener(n,r?M:T,r):e.removeEventListener(n,r?M:T,r);else if("dangerouslySetInnerHTML"!==n){if(i)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&-1==n.indexOf("-")?e.removeAttribute(n):e.setAttribute(n,t))}}function T(e){return this.l[e.type+!1](i.event?i.event(e):e)}function M(e){return this.l[e.type+!0](i.event?i.event(e):e)}function L(e,n,t,o,r,a,s,c,u){var l,f,p,h,_,y,v,b,k,w,S,q,U,C,T,M=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(u=t.__h,c=n.__e=t.__e,n.__h=null,a=[c]),(l=i.__b)&&l(n);try{e:if("function"==typeof M){if(b=n.props,k=(l=M.contextType)&&o[l.__c],w=l?k?k.props.value:l.__:o,t.__c?v=(f=n.__c=t.__c).__=f.__E:("prototype"in M&&M.prototype.render?n.__c=f=new M(b,w):(n.__c=f=new g(b,w),f.constructor=M,f.render=O),k&&k.sub(f),f.props=b,f.state||(f.state={}),f.context=w,f.__n=o,p=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=M.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=d({},f.__s)),d(f.__s,M.getDerivedStateFromProps(b,f.__s))),h=f.props,_=f.state,f.__v=n,p)null==M.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==M.getDerivedStateFromProps&&b!==h&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,w)||n.__v===t.__v){for(n.__v!==t.__v&&(f.props=b,f.state=f.__s,f.__d=!1),f.__e=!1,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),S=0;S<f._sb.length;S++)f.__h.push(f._sb[S]);f._sb=[],f.__h.length&&s.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,w),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(h,_,y)}))}if(f.context=w,f.props=b,f.__P=e,q=i.__r,U=0,"prototype"in M&&M.prototype.render){for(f.state=f.__s,f.__d=!1,q&&q(n),l=f.render(f.props,f.state,f.context),C=0;C<f._sb.length;C++)f.__h.push(f._sb[C]);f._sb=[]}else do{f.__d=!1,q&&q(n),l=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++U<25);f.state=f.__s,null!=f.getChildContext&&(o=d(d({},o),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(h,_)),T=null!=l&&l.type===m&&null==l.key?l.props.children:l,x(e,Array.isArray(T)?T:[T],n,t,o,r,a,s,c,u),f.base=n.__e,n.__h=null,f.__h.length&&s.push(f),v&&(f.__E=f.__=null),f.__e=!1}else null==a&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=P(t.__e,n,t,o,r,a,s,u);(l=i.diffed)&&l(n)}catch(e){n.__v=null,(u||null!=a)&&(n.__e=c,n.__h=!!u,a[a.indexOf(c)]=null),i.__e(e,n,t)}}function E(e,n){i.__c&&i.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){i.__e(e,n.__v)}}))}function P(e,n,t,i,r,a,s,c){var l,f,d,h=t.props,_=n.props,m=n.type,g=0;if("svg"===m&&(r=!0),null!=a)for(;g<a.length;g++)if((l=a[g])&&"setAttribute"in l==!!m&&(m?l.localName===m:3===l.nodeType)){e=l,a[g]=null;break}if(null==e){if(null===m)return document.createTextNode(_);e=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,_.is&&_),a=null,c=!1}if(null===m)h===_||c&&e.data===_||(e.data=_);else{if(a=a&&o.call(e.childNodes),f=(h=t.props||u).dangerouslySetInnerHTML,d=_.dangerouslySetInnerHTML,!c){if(null!=a)for(h={},g=0;g<e.attributes.length;g++)h[e.attributes[g].name]=e.attributes[g].value;(d||f)&&(d&&(f&&d.__html==f.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if(function(e,n,t,o,i){var r;for(r in t)"children"===r||"key"===r||r in n||C(e,r,null,t[r],o);for(r in n)i&&"function"!=typeof n[r]||"children"===r||"key"===r||"value"===r||"checked"===r||t[r]===n[r]||C(e,r,n[r],t[r],o)}(e,_,h,r,c),d)n.__k=[];else if(g=n.props.children,x(e,Array.isArray(g)?g:[g],n,t,i,r&&"foreignObject"!==m,a,s,a?a[0]:t.__k&&y(t,0),c),null!=a)for(g=a.length;g--;)null!=a[g]&&p(a[g]);c||("value"in _&&void 0!==(g=_.value)&&(g!==e.value||"progress"===m&&!g||"option"===m&&g!==h.value)&&C(e,"value",g,h.value,!1),"checked"in _&&void 0!==(g=_.checked)&&g!==e.checked&&C(e,"checked",g,h.checked,!1))}return e}function N(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){i.__e(e,t)}}function j(e,n,t){var o,r;if(i.unmount&&i.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||N(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){i.__e(e,n)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&j(o[r],n,t||"function"!=typeof e.type);t||null==e.__e||p(e.__e),e.__=e.__e=e.__d=void 0}function O(e,n,t){return this.constructor(e,t)}function A(e,n,t){var r,a,s;i.__&&i.__(e,n),a=(r="function"==typeof t)?null:t&&t.__k||n.__k,s=[],L(n,e=(!r&&t||n).__k=h(m,null,[e]),a||u,u,void 0!==n.ownerSVGElement,!r&&t?[t]:a?null:n.firstChild?o.call(n.childNodes):null,s,!r&&t?t:a?a.__e:n.firstChild,r),E(s,e)}o=l.slice,i={__e:function(e,n,t,o){for(var i,r,a;n=n.__;)if((i=n.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(e)),a=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e,o||{}),a=i.__d),a)return i.__E=i}catch(n){e=n}throw e}},r=0,g.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(d({},t),this.props)),e&&d(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),b(this))},g.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},g.prototype.render=m,a=[],c="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k.__r=0;var D=t(0),B=t.n(D);t(2);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function F(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,r=void 0,r=function(e,n){if("object"!==I(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!==I(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(i,"string"),"symbol"===I(r)?r:String(r)),o)}var i,r}function H(e,n,t){return n&&F(e.prototype,n),t&&F(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var z=function(){function e(){R(this,e)}return H(e,[{key:"render",value:function(){return h("div",{className:"Mount"},h(W,null))}}]),e}(),W=function(){function e(){R(this,e)}return H(e,[{key:"render",value:function(){return null==window.skirmish.simulation&&(window.skirmish.simulation=K(window.skirmish.state)),h("div",{class:"MainScreen"},h($,null),h(V,null),h(G,null))}}]),e}(),$=function(){function e(){R(this,e)}return H(e,[{key:"render",value:function(){return h("button",{class:"RerollButton",onClick:this.onClick},"Reroll")}},{key:"onClick",value:function(){window.skirmish.simulation=K(window.skirmish.state)}}]),e}(),V=function(){function e(){R(this,e)}return H(e,[{key:"render",value:function(){return h("div",{class:"Background",style:{"background-image":"url("+this.art+")"}})}},{key:"art",get:function(){return t(14)}}]),e}(),G=function(){function e(){R(this,e)}return H(e,[{key:"render",value:function(){if(null!=window.skirmish.simulation)return h("div",{class:"Skirmish"},window.skirmish.simulation.squads.map((function(e,n){return h(J,{index:n})})))}}]),e}(),J=function(){function e(){R(this,e)}return H(e,[{key:"render",value:function(){var e=window.skirmish.simulation,n=window.skirmish.state,t=this.props.index;return h("div",{class:"Squad"},h("div",{class:"Status"},h("div",{class:"Name"},n.squads[t].name),h("div",{class:"Odds"},Math[e.squads[t].winrate<50?"floor":"ceil"](100*e.squads[t].winrate),"% victory")),h("div",{class:"Units"},n.squads[t].protounits.map((function(e){return h(Q,{protounit:e,squadIndex:t})}))))}}]),e}(),Q=function(){function e(){R(this,e)}return H(e,[{key:"render",value:function(){var e=ee[this.props.protounit.classkey];return this.props.protounit.isLocked?h("div",{class:"Unit"},h("div",{class:"Image",isLocked:!0,style:{"background-image":"url("+e.image+")"}})):h("div",{class:"Unit"},h("div",{class:"Image",style:{"background-image":"url("+e.image+")"}}),h("div",{class:"Text"},h("div",{class:"Name"},e.name),this.count))}},{key:"count",get:function(){var e=this.props.protounit;return ee[this.props.protounit.classkey].isSingleton?h("input",{class:"Count",type:"checkbox",onChange:this.onChange,checked:e.count>0}):h("input",{class:"Count",type:"number",onChange:this.onChange,defaultValue:e.count})}},{key:"onChange",get:function(){var e=this;return function(n){var t=0;ee[e.props.protounit.classkey].isSingleton?1==n.target.checked&&(t=1):0==isNaN(n.target.value)&&(t=parseInt(n.target.value),t=Math.min(t,1e3)),e.props.protounit.count=t,window.skirmish.simulation=K(window.skirmish.state)}}}]),e}(),X=function(){function e(){R(this,e)}return H(e,null,[{key:"sign",value:function(){return Math.random()<.5?-1:1}},{key:"range",value:function(e,n){var t=Math.min(e,n),o=Math.max(e,n);return t+Math.random()*(o-t)}},{key:"element",value:function(e){return e[Math.floor(Math.random()*e.length)]}}]),e}();function K(e){for(var n=[],t=0;t<200;t+=1)n.push(Y(e));var o={totalSkirmishes:0,squads:[{failedSkirmishes:0},{failedSkirmishes:0}]};return n.forEach((function(e){o.totalSkirmishes+=1,e.squads[0].survey.hasBeenDefeated&&(o.squads[0].failedSkirmishes+=1),e.squads[1].survey.hasBeenDefeated&&(o.squads[1].failedSkirmishes+=1)})),o.squads[0].winrate=1-o.squads[0].failedSkirmishes/o.totalSkirmishes,o.squads[1].winrate=1-o.squads[1].failedSkirmishes/o.totalSkirmishes,o}function Y(e){e=function(e){return{squads:e.squads.map((function(e){return{name:e.name,protounits:e.protounits.map((function(e){return{count:e.count,classkey:e.classkey}}))}}))}}(e);for(var n=0;n<30&&(Z(e),!e.squads[0].survey.hasBeenDefeated&&!e.squads[1].survey.hasBeenDefeated);n+=1);return e}function Z(e){e.round=e.round||0,e.round+=1,e.squads.forEach((function(e){null==e.units&&(e.units=[],e.protounits.forEach((function(n){for(var t=0;t<n.count;t+=1)e.units.push({class:ee[n.classkey],health:ee[n.classkey].health,maxhealth:ee[n.classkey].health})})))})),e.round>1&&e.squads.forEach((function(n,t){n.units.forEach((function(n){if(!(n.health<=0)){if(null!=n.class.heal)for(var o=function(){var o=e.squads[t],i=void 0;o.units.forEach((function(e){e.health<=0||(null==i&&(i=e),i.health>e.health&&(i=e))})),i.health+=n.class.heal.health,i.health>i.maxhealth&&(i.health=i.maxhealth)},i=0;i<n.class.heal.count;i+=1)o();if(null!=n.class.attack)for(var r=0;r<n.class.attack.count;r+=1){var a=e.squads[(t+1)%2],s=X.element(a.units.filter((function(e){return e.health>0})));if(null==s)return;var c=X.range(1,20);n.class.attack.hasAdvantage&&(c=Math.max(c,X.range(1,20)));var u=20==c,l=c+n.class.attack.accuracy>=s.class.armor||u,f=n.class.attack.damage,d=f;u&&(d+=f),1==l&&(s.health-=d)}}}))})),e.squads.forEach((function(e){e.survey={totalUnits:0,aliveUnits:0,deadUnits:0,totalHealth:0},e.units.forEach((function(n){e.survey.totalUnits+=1,n.health<=0?e.survey.deadUnits+=1:(e.survey.aliveUnits+=1,e.survey.totalHealth+=n.health)})),0==e.survey.aliveUnits&&(e.survey.hasBeenDefeated=!0)}))}var ee={hoplite:{name:"Hoplite",image:t(15),level:3,health:52,armor:18,speed:30,attack:{count:3,accuracy:5,damage:6,range:20,maxrange:60},abilities:{strength:3,dexterity:3,constitution:2,intelligence:0,wisdom:2,charisma:1}},myrmidon:{level:3,name:"Myrmidon",image:t(16),health:49,armor:18,speed:30,attack:{count:2,accuracy:5,damage:6},abilities:{strength:3,dexterity:2,constitution:1,intelligence:3,wisdom:1,charisma:0}},cavalier:{name:"Cavalier",image:t(17),level:3,health:52,armor:18,speed:30,attack:{count:3,accuracy:5,damage:6,range:20,maxrange:60},abilities:{strength:3,dexterity:3,constitution:2,intelligence:0,wisdom:2,charisma:1}},archer:{name:"Archer",image:t(18),health:36,armor:16,speed:30,attack:{count:2,accuracy:6,damage:8},abilities:{strength:0,dexterity:4,constitution:0,intelligence:0,wisdom:1,charisma:0}},cleric:{name:"Priest",image:t(19),level:4,health:44,armor:15,speed:30,heal:{count:5,health:5}},rogue:{name:"Rogue",image:t(20)},harpy:{name:"Harpy",image:t(21)},othertriton:{name:"Harpy",image:t(22)},ballista:{name:"Ballista",image:t(23)},wagon:{name:"",image:t(24)},balloon:{name:"",image:t(25)},iroas:{name:"",image:t(26)},archimedes:{name:"",image:t(27)},uther:{name:"",image:t(28)},zeross:{name:"",image:t(29)},champion:{name:"",image:t(30)},ranger:{name:"Ranger",image:t(31),level:4,health:58,armor:16,speed:30,attack:{count:2,accuracy:5,damage:7,minrange:5,range:150,maxrange:600},abilities:{strength:2,dexterity:3,constitution:2,intelligence:1,wisdom:3,charisma:0}},peasant:{name:"Peasant",image:t(32),health:10,armor:10,speed:30,attack:{count:1,accuracy:2,damage:2,hasAdvantage:!0}},witch:{name:"Witch",image:t(33),level:4,health:44,armor:15,speed:30,heal:{count:5,health:5}},cuthos:{name:"Cuthos",image:t(34),isSingleton:!0,level:11,health:58,armor:15,speed:30,heal:{count:10,health:100}},aquilla:{name:"Aquilla",image:t(35),isSingleton:!0,level:10,health:63,armor:17,speed:35,attack:{count:5,accuracy:100,damage:30}},ellis:{name:"Ellis",image:t(36),isSingleton:!0,level:10,health:52,armor:15,speed:30,attack:{count:7,accuracy:10,damage:32}},taliesin:{name:"Taliesin",image:t(37),isSingleton:!0,level:10,health:73,armor:14,speed:30,attack:{count:2,accuracy:6,damage:6},heal:{count:10,health:100}},iris:{name:"Iris",image:t(38),isSingleton:!0,level:10,health:73,armor:14,speed:30,attack:{count:8,accuracy:12,damage:19}},rhea:{name:"Rhea",image:t(39),isSingleton:!0,level:5,health:300,armor:21,speed:30,attack:{count:2,accuracy:12,damage:19}},owlbear:{name:"???",image:t(40)},apprentice:{name:"???",image:t(41)},goliath:{name:"???",image:t(42)},triton:{name:"???",image:t(43)},dragon:{name:"???",image:t(44)},trebuchet:{name:"???",image:t(45)},thing:{name:"???",image:t(46)}};window.skirmish={state:{squads:[{name:"Iroan Forces",protounits:[{count:50,classkey:"hoplite",isTutorial:!0},{count:0,classkey:"cavalier",isTutorial:!0},{count:0,classkey:"myrmidon",isTutorial:!0},{count:0,classkey:"archer",isTutorial:!0},{count:0,classkey:"cleric",isTutorial:!0},{count:0,classkey:"ballista",isLocked:!0},{count:0,classkey:"wagon",isLocked:!0},{count:0,classkey:"balloon",isLocked:!0},{count:0,classkey:"iroas",isLocked:!0},{count:0,classkey:"archimedes",isLocked:!0,isTeased:!0},{count:0,classkey:"uther",isLocked:!0,isTeased:!0},{count:0,classkey:"zeross",isLocked:!0,isTeased:!0},{count:0,classkey:"champion",isLocked:!0,isTeased:!0},{count:0,classkey:"harpy",isLocked:!0},{count:0,classkey:"othertriton",isLocked:!0},{count:0,classkey:"rogue",isLocked:!0}]},{name:"Nessian Forces",protounits:[{count:50,classkey:"ranger",isTutorial:!0},{count:0,classkey:"witch",isTutorial:!0},{count:0,classkey:"peasant",isTutorial:!0},{count:0,classkey:"cuthos"},{count:0,classkey:"aquilla"},{count:0,classkey:"taliesin"},{count:0,classkey:"ellis"},{count:0,classkey:"iris"},{count:0,classkey:"rhea",isLocked:!0},{count:0,classkey:"owlbear",isLocked:!0},{count:0,classkey:"apprentice",isLocked:!0},{count:0,classkey:"dragon",isLocked:!0},{count:0,classkey:"triton",isLocked:!0},{count:0,classkey:"goliath",isLocked:!0},{count:0,classkey:"trebuchet",isLocked:!0},{count:0,classkey:"thing",isLocked:!0}]}]}};new B.a((function(e){this.mount=A(h(z,null),document.body,this.mount)}))}]);
//# sourceMappingURL=index.js.map