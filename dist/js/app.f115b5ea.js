(function(){"use strict";var e={2392:function(e,t,n){n.d(t,{I:function(){return u}});var r=n(7795),o=n(3854);const a={apiKey:"AIzaSyC-PQvY9sqUqsM9D_PboIiRIYpWQS0oxok",authDomain:"toma-de-horas-3bc43.firebaseapp.com",projectId:"toma-de-horas-3bc43",storageBucket:"toma-de-horas-3bc43.appspot.com",messagingSenderId:"53739028161",appId:"1:53739028161:web:116705ee3fdde069449e40"},i=(0,r.ZF)(a),u=(0,o.v0)(i)},5023:function(e,t,n){var r=n(6369),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-tempalte"},[t("nav",{staticClass:"navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"},[t("div",{staticClass:"container"},[t("a",{staticClass:"navbar-brand float-left",attrs:{href:"#",target:"_blank"}},[e._v(" NAAN ")]),t("ul",{staticClass:"nav navbar-nav flex-row float-right"},[t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:"/signup"}},[e._v("Registrate")])],1)])])]),t("div",{staticClass:"App"},[t("div",{staticClass:"vertical-center"},[t("div",{staticClass:"inner-block"},[t("router-view")],1)])])])},a=[],i=n(1001),u={},s=(0,i.Z)(u,o,a,!1,null,null,null),c=s.exports,f=n(1120),l=n(3822);r.ZP.use(l.ZP);var d=new l.ZP.Store({state:{},getters:{},mutations:{},actions:{detectarUsuario({commit:e},t){e("setUsuario",t)}},modules:{}});r.ZP.config.productionTip=!1,new r.ZP({router:f.Z,store:d,render:e=>e(c)}).$mount("#app")},1120:function(e,t,n){var r=n(6369),o=n(2631),a=n(2392);r.ZP.use(o.ZP);const i=[{path:"/",name:"login",component:()=>n.e(25).then(n.bind(n,9025))},{path:"/signup",name:"signup",component:()=>n.e(205).then(n.bind(n,2205))},{path:"/forgot-password",name:"forgot-password",component:()=>n.e(31).then(n.bind(n,1031))},{path:"/home",name:"home",component:()=>n.e(163).then(n.bind(n,6163)),meta:{requiresAuth:!0}}],u=new o.ZP({mode:"history",base:"/",routes:i});u.beforeEach(((e,t,n)=>{if(e.matched.some((e=>e.meta.requiresAuth))){const e=a.I.currentUser;console.log(e),e?(console.log("ssdsadasds"),n()):n({path:"/"})}else n()})),t["Z"]=u}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{25:"99cbc936",31:"7647e5fe",163:"ece2de01",205:"85ff8400"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="horamedica:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var f=s(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},r=self["webpackChunkhoramedica"]=self["webpackChunkhoramedica"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5023)}));r=n.O(r)})();
//# sourceMappingURL=app.f115b5ea.js.map