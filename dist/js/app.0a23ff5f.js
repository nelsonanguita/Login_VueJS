(function(){"use strict";var e={2392:function(e,t,n){n.d(t,{I:function(){return u}});var o=n(7795),r=n(3854);const a={apiKey:"AIzaSyC-PQvY9sqUqsM9D_PboIiRIYpWQS0oxok",authDomain:"toma-de-horas-3bc43.firebaseapp.com",projectId:"toma-de-horas-3bc43",storageBucket:"toma-de-horas-3bc43.appspot.com",messagingSenderId:"53739028161",appId:"1:53739028161:web:116705ee3fdde069449e40"},i=(0,o.ZF)(a),u=(0,r.v0)(i)},9245:function(e,t,n){var o=n(6369),r=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar"},[t("b-navbar",{attrs:{toggleable:"lg"}},[e.existeUsuario?e._e():t("b-navbar-brand",{attrs:{href:"#"}}),e.existeUsuario?t("b-navbar-brand",{attrs:{href:"#"}},[t("b-icon",{attrs:{icon:"house",scale:"1"}},[e._v("INICIO")]),e._v(" INICIO ")],1):e._e(),t("b-navbar-nav",{staticClass:"ml-auto"},[e.existeUsuario?t("b-avatar",{attrs:{variant:"info",src:"https://placekitten.com/300/300"}}):e._e(),e.existeUsuario?t("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:e.signOut}},[e._v("LogOUT")]):e._e(),e.existeUsuario?e._e():t("button",{staticClass:"btn-logout btn-outline-primary",attrs:{type:"button"}},[e.existeUsuario?t("router-link",{attrs:{to:"/signup"}},[e._v("Registrarse")]):e._e()],1)],1)],1)],1),t("div",{staticClass:"App"},[t("div",{staticClass:"vertical-center flex-column flex-md-row"},[t("div",[t("router-view")],1)])])])},a=[],i=(n(7658),n(3854)),u=n(2392),s=n(3822),c=n(1120),f={data(){return{}},computed:{...(0,s.Se)(["existeUsuario"])},methods:{signOut(){(0,i.w7)(u.I).then((()=>{console.log("cerrar sesion"),c.Z.push("/")})).catch((e=>{console.log(e)}))}}},l=f,d=n(1001),p=(0,d.Z)(l,r,a,!1,null,null,null),b=p.exports;o["default"].use(s.ZP);var h=new s.ZP.Store({state:{usuario:null},mutations:{setUsuario(e,t){e.usuario=t}},actions:{detectarUsuario({commit:e},t){e("setUsuario",t)}},getters:{existeUsuario(e){return null!==e.usuario}},modules:{}}),m=n(4465),v=n(9425),g=n(2726);n(7024);o["default"].use(m.XG7),o["default"].use(v.X),o["default"].use(g.Zg),u.I.onAuthStateChanged((function(e){if(e){const t={email:e.email};h.dispatch("detectarUsuario",t),console.log("arriba")}else console.log("abajo"),h.dispatch("detectarUsuario",e)})),o["default"].config.productionTip=!1,new o["default"]({router:c.Z,store:h,render:e=>e(b)}).$mount("#app")},1120:function(e,t,n){var o=n(6369),r=n(2631),a=n(2392);o["default"].use(r.ZP);const i=[{path:"/",name:"login",component:()=>n.e(875).then(n.bind(n,3875))},{path:"/signup",name:"signup",component:()=>n.e(369).then(n.bind(n,5369))},{path:"/forgot-password",name:"forgot-password",component:()=>n.e(546).then(n.bind(n,1546))},{path:"/home",name:"home",component:()=>n.e(257).then(n.bind(n,9257)),meta:{requiresAuth:!0}},{path:"/fichausuario",name:"fichausuario",component:()=>n.e(850).then(n.bind(n,8998)),meta:{requiresAuth:!0}},{path:"/fichausuariocopy",name:"fichausuariocopy",component:()=>n.e(594).then(n.bind(n,5594)),meta:{requiresAuth:!1}}],u=new r.ZP({mode:"history",base:"/",routes:i});u.beforeEach(((e,t,n)=>{if(e.matched.some((e=>e.meta.requiresAuth))){const e=a.I.currentUser;console.log(e),e?(console.log("HOME"),n()):n({path:"/"})}else n()})),t["Z"]=u}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],a=e[f][2];for(var u=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(f--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{257:"55efddc8",369:"70eec574",546:"b2267f10",594:"b747fdef",850:"a8481d1f",875:"1eddbe30"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="horamedica:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+a){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=o),e[o]=[r];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),u=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],u=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var f=s(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},o=self["webpackChunkhoramedica"]=self["webpackChunkhoramedica"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9245)}));o=n.O(o)})();
//# sourceMappingURL=app.0a23ff5f.js.map