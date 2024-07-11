/*! For license information please see remoteEntry.js.LICENSE.txt */
var chatCenter;(()=>{"use strict";var e,t,a,n,r,i,o,l,c={1211:(e,t,a)=>{var n={"./index":()=>Promise.all([a.e(39),a.e(152),a.e(85)]).then((()=>()=>a(1009))),".":()=>Promise.all([a.e(39),a.e(152),a.e(88)]).then((()=>()=>a(9087)))},r=(e,t)=>(a.R=t,t=a.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),a.R=void 0,t),i=(e,t)=>{if(a.S){var n="default",r=a.S[n];if(r&&r!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return a.S[n]=e,a.I(n,t)}};a.d(t,{get:()=>r,init:()=>i})},9493:(e,t,a)=>{var n=new Error;e.exports=new Promise(((e,t)=>{if(void 0!==chatCenter)return e();a.l("/agent/chat-center-app/remoteEntry.js?",(a=>{if(void 0!==chatCenter)return e();var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;n.message="Loading script failed.\n("+r+": "+i+")",n.name="ScriptExternalLoadError",n.type=r,n.request=i,t(n)}),"chatCenter")})).then((()=>chatCenter))}},d={};function u(e){var t=d[e];if(void 0!==t)return t.exports;var a=d[e]={exports:{}};return c[e](a,a.exports,u),a.exports}u.m=c,u.c=d,u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(a,n){if(1&n&&(a=this(a)),8&n)return a;if("object"==typeof a&&a){if(4&n&&a.__esModule)return a;if(16&n&&"function"==typeof a.then)return a}var r=Object.create(null);u.r(r);var i={};e=e||[null,t({}),t([]),t(t)];for(var o=2&n&&a;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((e=>i[e]=()=>a[e]));return i.default=()=>a,u.d(r,i),r},u.d=(e,t)=>{for(var a in t)u.o(t,a)&&!u.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,a)=>(u.f[a](e,t),t)),[])),u.u=e=>"static/js/"+e+"."+{39:"3df714bb",85:"aa78d4d2",88:"1cfd3504",152:"c56d0f4f",975:"ea5caed5"}[e]+".chunk.js",u.miniCssF=e=>"static/css/"+e+"."+{85:"fe8609a8",88:"c89cdafe"}[e]+".chunk.css",u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},n="@bpinc/web-chat-center-ui:",u.l=(e,t,r,i)=>{if(a[e])a[e].push(t);else{var o,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var s=c[d];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+r){o=s;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,u.nc&&o.setAttribute("nonce",u.nc),o.setAttribute("data-webpack",n+r),o.src=e),a[e]=[t];var f=(t,n)=>{o.onerror=o.onload=null,clearTimeout(p);var r=a[e];if(delete a[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),l&&document.head.appendChild(o)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r={975:[9975]},i={9975:["default",".",9493]},u.f.remotes=(e,t)=>{u.o(r,e)&&r[e].forEach((e=>{var a=u.R;a||(a=[]);var n=i[e];if(!(a.indexOf(n)>=0)){if(a.push(n),n.p)return t.push(n.p);var r=t=>{t||(t=new Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+n[1]+'" from '+n[2]),u.m[e]=()=>{throw t},n.p=0},o=(e,a,i,o,l,c)=>{try{var d=e(a,i);if(!d||!d.then)return l(d,o,c);var u=d.then((e=>l(e,o)),r);if(!c)return u;t.push(n.p=u)}catch(s){r(s)}},l=(e,t,r)=>o(t.get,n[1],a,0,c,r),c=t=>{n.p=1,u.m[e]=e=>{e.exports=t()}};o(u,n[2],0,0,((e,t,a)=>e?o(u.I,n[0],0,e,l,a):r()),1)}}))},(()=>{u.S={};var e={},t={};u.I=(a,n)=>{n||(n=[]);var r=t[a];if(r||(r=t[a]={}),!(n.indexOf(r)>=0)){if(n.push(r),e[a])return e[a];u.o(u.S,a)||(u.S[a]={});u.S[a];var i=[];if("default"===a)(e=>{var t=e=>{return t="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(t);var t};try{var r=u(e);if(!r)return;var o=e=>e&&e.init&&e.init(u.S[a],n);if(r.then)return i.push(r.then(o,t));var l=o(r);if(l&&l.then)i.push(l.catch(t))}catch(c){t(c)}})(9493);return i.length?e[a]=Promise.all(i).then((()=>e[a]=1)):e[a]=1}}})(),u.p="/agent/chat-center-app/",(()=>{var e=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),a=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=a[1]?t(a[1]):[];return a[2]&&(n.length++,n.push.apply(n,t(a[2]))),a[3]&&(n.push([]),n.push.apply(n,t(a[3]))),n},t=(t,a)=>{t=e(t),a=e(a);for(var n=0;;){if(n>=t.length)return n<a.length&&"u"!=(typeof a[n])[0];var r=t[n],i=(typeof r)[0];if(n>=a.length)return"u"==i;var o=a[n],l=(typeof o)[0];if(i!=l)return"o"==i&&"n"==l||"s"==l||"u"==i;if("o"!=i&&"u"!=i&&r!=o)return r<o;n++}},a=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var r=1,i=1;i<e.length;i++)r--,n+="u"==(typeof(l=e[i]))[0]?"-":(r>0?".":"")+(r=2,l);return n}var o=[];for(i=1;i<e.length;i++){var l=e[i];o.push(0===l?"not("+c()+")":1===l?"("+c()+" || "+c()+")":2===l?o.pop()+" "+o.pop():a(l))}return c();function c(){return o.pop().replace(/^\((.+)\)$/,"$1")}},n=(t,a)=>{if(0 in t){a=e(a);var r=t[0],i=r<0;i&&(r=-r-1);for(var o=0,l=1,c=!0;;l++,o++){var d,u,s=l<t.length?(typeof t[l])[0]:"";if(o>=a.length||"o"==(u=(typeof(d=a[o]))[0]))return!c||("u"==s?l>r&&!i:""==s!=i);if("u"==u){if(!c||"u"!=s)return!1}else if(c)if(s==u)if(l<=r){if(d!=t[l])return!1}else{if(i?d>t[l]:d<t[l])return!1;d!=t[l]&&(c=!1)}else if("s"!=s&&"n"!=s){if(i||l<=r)return!1;c=!1,l--}else{if(l<=r||u<s!=i)return!1;c=!1}else"s"!=s&&"n"!=s&&(c=!1,l--)}}var f=[],p=f.pop.bind(f);for(o=1;o<t.length;o++){var b=t[o];f.push(1==b?p()|p():2==b?p()&p():b?n(b,a):!p())}return!!p()},r=(e,t)=>{var a=u.S[e];if(!a||!u.o(a,t))throw new Error("Shared module "+t+" doesn't exist in shared scope "+e);return a},i=(e,a)=>{var n=e[a];return Object.keys(n).reduce(((e,a)=>!e||!n[e].loaded&&t(e,a)?a:e),0)},o=(e,t,n,r)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+a(r)+")",l=(e,t,a,r)=>{var l=i(e,a);return n(r,l)||"undefined"!=typeof console&&console.warn&&console.warn(o(e,a,l,r)),c(e[a][l])},c=e=>(e.loaded=1,e.get()),d=e=>function(t,a,n,r){var i=u.I(t);return i&&i.then?i.then(e.bind(e,t,u.S[t],a,n,r)):e(t,u.S[t],a,n,r)},s=d(((e,t,a,n)=>(r(e,a),l(t,0,a,n)))),f={},p={161:()=>s("default","@bpinc/lib-user-search-components",[4,0,1,0]),173:()=>s("default","@bpinc/lib-interaction-ui-hooks",[4,0,1,0]),533:()=>s("default","@bpinc/ad-services-dispositions-context",[4,0,1,0]),638:()=>s("default","@bpinc/ad-remote-assist-state-context",[4,0,1,0]),801:()=>s("default","@bpinc/lib-modals-ui",[4,0,1,0]),1360:()=>s("default","@radix-ui/react-popover",[1,1,0,7]),1365:()=>s("default","@bpinc/state-group-chat-types",[4,0,1,0]),1510:()=>s("default","@bpinc/ad-activities-state-context",[4,0,1,0]),1539:()=>s("default","@bpinc/lib-gsm-charset-utils",[4,0,1,0]),1554:()=>s("default","@bpinc/lib-audio-player",[4,0,1,0]),1839:()=>s("default","@bpinc/state-group-chat-ui-context",[4,0,1,0]),1960:()=>s("default","@bpinc/ad-persistent-logger",[4,0,1,0]),1980:()=>s("default","@bpinc/lib-jskit-ui",[4,0,1,0]),2107:()=>s("default","@bpinc/ad-constants",[4,0,1,0]),2122:()=>s("default","lodash-es",[1,4,17,21]),2234:()=>s("default","@bpinc/ad-upload-methods",[4,0,1,0]),2346:()=>s("default","@bpinc/ad-contacts-state-context",[4,0,1,0]),2443:()=>s("default","@bpinc/ad-local-settings-context",[4,0,1,0]),2506:()=>s("default","@bpinc/state-interaction-ui",[4,0,1,0]),2654:()=>s("default","@bpinc/lib-contact-list-item-ui",[4,0,1,0]),2952:()=>s("default","@bpinc/ad-did-context",[4,0,1,0]),2977:()=>s("default","@bpinc/ad-error-hooks",[4,0,1,0]),3156:()=>s("default","@bpinc/lib-predefined-messages-ui",[4,0,1,0]),3194:()=>s("default","@bpinc/ad-interaction-state-context",[4,0,1,0]),3295:()=>s("default","@bpinc/ad-directory-state-context",[4,0,1,0]),3346:()=>s("default","@bpinc/state-modals-context",[4,0,1,0]),3385:()=>s("default","@bpinc/ad-interaction-state-hooks",[4,0,1,0]),3650:()=>s("default","@bpinc/lib-helpers-ui",[4,0,1,0]),3711:()=>s("default","@bpinc/lib-avatar-ui",[4,0,1,0]),3764:()=>s("default","@bpinc/lib-notifications-context",[4,0,1,0]),3830:()=>s("default","immer",[1,9,0,21]),3941:()=>s("default","@bpinc/ad-interaction-chat-state-types",[4,0,1,0]),4031:()=>s("default","@bpinc/lib-communicator-ui-context",[4,0,1,0]),4171:()=>s("default","@bpinc/ad-interaction-state-types",[4,0,1,0]),4173:()=>s("default","@bpinc/lib-uuid",[4,0,1,0]),4432:()=>s("default","@bpinc/ad-app-config-state-context",[4,0,1,0]),4554:()=>s("default","@bpinc/state-group-chat-context",[4,0,1,0]),4593:()=>s("default","@bpinc/ad-interaction-state-methods",[4,0,1,0]),4692:()=>s("default","@bpinc/ad-contacts-state-types",[4,0,1,0]),4778:()=>s("default","@bpinc/lib-types-helpers",[4,0,1,0]),4915:()=>s("default","@bpinc/lib-html-utils",[4,0,1,0]),5100:()=>s("default","@bpinc/lib-login-ui",[4,0,1,0]),5319:()=>s("default","@bpinc/ad-did-number-context",[4,0,1,0]),5603:()=>s("default","@bpinc/ad-request-urls",[4,0,1,0]),5715:()=>s("default","react-dropzone",[1,14,2,3]),5770:()=>s("default","@bpinc/lib-communicator-navigation-state",[4,0,1,0]),5886:()=>s("default","@bpinc/ad-local-providers",[4,0,1,0]),5914:()=>s("default","@bpinc/ad-contacts-state-methods",[4,0,1,0]),5928:()=>s("default","@bpinc/ad-service-context",[4,0,1,0]),5977:()=>s("default","reselect",[4,4,1,8]),6029:()=>s("default","react",[1,18,2,0]),6070:()=>s("default","@bpinc/state-kb-bridge-provider",[4,0,1,0]),6441:()=>s("default","@bpinc/lib-ui-elements",[4,0,1,0]),6508:()=>s("default","@bpinc/ad-offline-state-context",[4,0,1,0]),6607:()=>s("default","@bpinc/ad-main-page-ui-context",[4,0,1,0]),6622:()=>s("default","@bpinc/ad-formatting-helpers",[4,0,1,0]),6702:()=>s("default","use-context-selector",[1,1,4,1]),7005:()=>s("default","jotai",[1,2,8,2]),7087:()=>s("default","@bpinc/ad-predefined-chat-message-state-context",[4,0,1,0]),7110:()=>s("default","@bpinc/ad-screen-pop-state-context",[4,0,1,0]),7176:()=>s("default","@bpinc/ad-state-context-factory",[4,0,1,0]),7282:()=>s("default","@bpinc/ad-formatting-context",[4,0,1,0]),7421:()=>s("default","@bpinc/ad-bpclient-state-context",[4,0,1,0]),7505:()=>s("default","@bpinc/lib-external-ui-elements",[4,0,1,0]),7773:()=>s("default","@bpinc/lib-interaction-context",[4,0,1,0]),7777:()=>s("default","@servicepattern/ui",[2,0,6,1]),7856:()=>s("default","@bpinc/ad-interaction-message-types",[4,0,1,0]),7914:()=>s("default","@radix-ui/react-tooltip",[1,1,0,7]),8202:()=>s("default","@bpinc/ad-interaction-chat-state-context",[4,0,1,0]),8269:()=>s("default","@bpinc/lib-icons",[4,0,1,0]),8715:()=>s("default","@bpinc/ad-build-and-platform-info",[4,0,1,0]),8770:()=>s("default","@bpinc/ad-contacts-state-hooks",[4,0,1,0]),9008:()=>s("default","@bpinc/ad-session-context",[4,0,1,0]),9022:()=>s("default","@bpinc/ad-platform-specific-web-impl",[4,0,1,0]),9190:()=>s("default","@bpinc/lib-sliding-modal-context",[4,0,1,0]),9327:()=>s("default","@bpinc/ad-user-details-state-context",[4,0,1,0]),9464:()=>s("default","@bpinc/ad-transport-types",[4,0,1,0]),9478:()=>s("default","classnames",[2,2,3,2]),9486:()=>s("default","@bpinc/state-localization-context",[4,0,1,0]),9552:()=>s("default","react-virtuoso",[1,4,6,3]),9572:()=>s("default","@bpinc/ad-current-tab-data-context",[4,0,1,0]),9717:()=>s("default","@bpinc/lib-helpers",[4,0,1,0]),2850:()=>s("default","@bpinc/ad-service-worker-reg",[4,0,1,0]),7445:()=>s("default","@bpinc/lib-css-config",[4,0,1,0]),7704:()=>s("default","react-dom",[1,18,2,0])},b={85:[2850,7445,7704],152:[161,173,533,638,801,1360,1365,1510,1539,1554,1839,1960,1980,2107,2122,2234,2346,2443,2506,2654,2952,2977,3156,3194,3295,3346,3385,3650,3711,3764,3830,3941,4031,4171,4173,4432,4554,4593,4692,4778,4915,5100,5319,5603,5715,5770,5886,5914,5928,5977,6029,6070,6441,6508,6607,6622,6702,7005,7087,7110,7176,7282,7421,7505,7773,7777,7856,7914,8202,8269,8715,8770,9008,9022,9190,9327,9464,9478,9486,9552,9572,9717]};u.f.consumes=(e,t)=>{u.o(b,e)&&b[e].forEach((e=>{if(u.o(f,e))return t.push(f[e]);var a=t=>{f[e]=0,u.m[e]=a=>{delete u.c[e],a.exports=t()}},n=t=>{delete f[e],u.m[e]=a=>{throw delete u.c[e],t}};try{var r=p[e]();r.then?t.push(f[e]=r.then(a).catch(n)):a(r)}catch(i){n(i)}}))}})(),o=e=>new Promise(((t,a)=>{var n=u.miniCssF(e),r=u.p+n;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=(o=a[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var o;if((r=(o=i[n]).getAttribute("data-href"))===e||r===t)return o}})(n,r))return t();((e,t,a,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=i=>{if(r.onerror=r.onload=null,"load"===i.type)a();else{var o=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=l,r.parentNode.removeChild(r),n(c)}},r.href=t,document.head.appendChild(r)})(e,r,t,a)})),l={370:0},u.f.miniCss=(e,t)=>{l[e]?t.push(l[e]):0!==l[e]&&{85:1,88:1}[e]&&t.push(l[e]=o(e).then((()=>{l[e]=0}),(t=>{throw delete l[e],t})))},(()=>{var e={370:0};u.f.j=(t,a)=>{var n=u.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else if(975!=t){var r=new Promise(((a,r)=>n=e[t]=[a,r]));a.push(n[2]=r);var i=u.p+u.u(t),o=new Error;u.l(i,(a=>{if(u.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,n[1](o)}}),"chunk-"+t,t)}else e[t]=0};var t=(t,a)=>{var n,r,i=a[0],o=a[1],l=a[2],c=0;if(i.some((t=>0!==e[t]))){for(n in o)u.o(o,n)&&(u.m[n]=o[n]);if(l)l(u)}for(t&&t(a);c<i.length;c++)r=i[c],u.o(e,r)&&e[r]&&e[r][0](),e[r]=0},a=self.webpackChunk_bpinc_web_chat_center_ui=self.webpackChunk_bpinc_web_chat_center_ui||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var s=u(1211);chatCenter=s})();
//# sourceMappingURL=remoteEntry.js.map