(function(){"use strict";var e={9671:function(e,t,n){n.d(t,{Z:function(){return u}});n(7658);function r(){let e=JSON.parse(localStorage.getItem("token"));return e?{accessJwt:e.accessJwt}:{}}var o=n(6487),a=n(3490),i=n(2877);class c{async reissueRefreshJwt(){return await i.Z.post("/check-refreshToken",null,{headers:(0,a.Z)()}).then((e=>{const t=e.headers.get("accessJwt"),n=e.headers.get("refreshJwt"),r={accessJwt:t,refreshJwt:n};return localStorage.setItem("token",JSON.stringify(r)),!0})).catch((()=>(localStorage.removeItem("token"),!1)))}async initCheck(){return await i.Z.post("/check-token",null,{headers:r()}).then((()=>!0)).catch((()=>this.reissueRefreshJwt()))}async initTokenCheck(){const e=await this.initCheck();e?(i.Z.post("/myInfo/init",null,{headers:r()}).then((({data:e})=>{console.log(e)})),o.Z.push("/").then()):o.Z.push("/login").then()}async methodTokenCheck(){return await this.initCheck()}}var u=new c},8209:function(e,t,n){var r=n(4161);const o=r.Z.create({baseURL:"http://localhost:8090"});t.Z=o},6487:function(e,t,n){var r=n(2483),o=n(9671);const a=[{path:"/channel/",name:"baseURL",redirect:"/channel/lobby"},{path:"/",name:"baseURL",redirect:"/channel/lobby"},{path:"/login",name:"login",component:()=>n.e(535).then(n.bind(n,6476)),meta:{requiresAuth:!1}},{path:"/join",name:"join",component:()=>n.e(49).then(n.bind(n,457))},{path:"/channel/**",name:"main",component:()=>n.e(179).then(n.bind(n,9606)),meta:{requiresAuth:!0}},{path:"/channel/:channel_title",name:"main",component:()=>n.e(179).then(n.bind(n,9606)),meta:{requiresAuth:!0}},{path:"/channel/:channel_title/chat/room/enter/:roomId",name:"ChannelChat",component:()=>n.e(179).then(n.bind(n,9606)),meta:{requiresAuth:!0},props:!0},{path:"/channel/friend/",name:"FriendLobby",component:()=>n.e(179).then(n.bind(n,9606)),meta:{requiresAuth:!0}},{}],i=(0,r.p7)({history:(0,r.PO)(),routes:a});i.beforeEach((async(e,t,n)=>{const r=await o.Z.initCheck();e.meta.requiresAuth&&!r?n("/login"):!e.meta.requiresAuth&&r?n("/channel/lobby"):n(),console.log("beforeEach")})),t.Z=i},2877:function(e,t,n){var r=n(4161),o=n(3490),a=n(8209);const i=r.Z.create({baseURL:"http://localhost:8090/api/v1"});i.interceptors.request.use((function(e){const t=JSON.parse(localStorage.getItem("token"));return t.accessJwt||console.log("토큰이 없습니다."),e.headers&&t.accessJwt&&(e.headers.accessJwt=t.accessJwt),e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e}),(async e=>{console.log("Error object:",JSON.stringify(e));const{config:t,response:{status:n}}=e;if(401===n&&"TokenExpired"===e.response.data.message){const e=t;return await a.Z.post("/api/v1/check-refreshToken",null,{headers:(0,o.Z)()}).then((e=>{const t=e.headers.get("accessJwt"),n=e.headers.get("refreshJwt"),r={accessJwt:t,refreshJwt:n};localStorage.setItem("token",JSON.stringify(r))})).catch((()=>{localStorage.removeItem("token")})),i(e)}return Promise.reject(e)})),t.Z=i},3490:function(e,t,n){function r(){let e=JSON.parse(localStorage.getItem("token"));return e?{refreshJwt:e.refreshJwt}:{}}n.d(t,{Z:function(){return r}})},8304:function(e,t,n){var r=n(9242),o=n(3396);function a(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var i=n(89);const c={},u=(0,i.Z)(c,[["render",a]]);var s=u,f=n(6487),l=n(1020);n(7024);(0,r.ri)(s).use((0,l.WB)()).use(f.Z).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]}}(),function(){n.F={},n.E=function(e){Object.keys(n.F).map((function(t){n.F[t](e)}))}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{49:"join",179:"main",535:"login"}[e]+"."+{49:"88cdb016",179:"87e7a31f",535:"2d4b0bfc"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{49:"join",179:"main",535:"login"}[e]+"."+{49:"5666268e",179:"e5567416",535:"db256df8"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){c=l;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=r),e[r]=[o];var h=function(t,n){c.onerror=c.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=h.bind(null,c.onerror),c.onload=h.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="<Test2>/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,a.parentNode&&a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),c=n.p+i;if(t(i,c))return o();e(r,c,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={49:1,179:1,535:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),c=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,u,"chunk-"+t,t)}},n.F.j=function(t){if(!n.o(e,t)||void 0===e[t]){e[t]=null;var r=document.createElement("link");n.nc&&r.setAttribute("nonce",n.nc),r.rel="prefetch",r.as="script",r.href=n.p+n.u(t),document.head.appendChild(r)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],c=r[1],u=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var f=u(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),function(){n.O(0,[143],(function(){[535,49,179].map(n.E)}),5)}();var r=n.O(void 0,[998],(function(){return n(8304)}));r=n.O(r)})();
//# sourceMappingURL=app.0bbb46db.js.map