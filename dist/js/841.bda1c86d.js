"use strict";(self["webpackChunkhoramedica"]=self["webpackChunkhoramedica"]||[]).push([[841],{1841:function(t,o,e){e.r(o),e.d(o,{default:function(){return d}});var r=function(){var t=this,o=t._self._c;return o("div",{staticClass:"vue-tempalte"},[o("button",{staticClass:"btn btn-dark",on:{click:t.signOut}},[t._v("Cerra sesion")]),o("form",[o("h3",[t._v("Inicia sesion "+t._s(t.datos))]),t._m(0),t._m(1),o("button",{staticClass:"btn btn-dark btn-lg btn-block",attrs:{type:"submit"}},[t._v("Iniciar")]),o("p",{staticClass:"forgot-password text-right mt-2 mb-4"},[o("router-link",{attrs:{to:"/forgot-password"}},[t._v("¿Olvidaste tu contraseña?")])],1),o("div",{staticClass:"social-icons"},[o("ul",[o("li",[o("a",{on:{click:t.popUpWithGoogle}},[o("i",{staticClass:"fa fa-google"})])]),o("li",[o("a",{on:{click:t.popUpWithFacebook}},[o("i",{staticClass:"fa fa-facebook"})])]),t._m(2)])])])])},a=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"form-group"},[o("label",[t._v("Email ")]),o("input",{staticClass:"form-control form-control-lg",attrs:{type:"email"}})])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"form-group"},[o("label",[t._v("Password")]),o("input",{staticClass:"form-control form-control-lg",attrs:{type:"password"}})])},function(){var t=this,o=t._self._c;return o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"fa fa-twitter"})])])}],s=e(3901),i=e(3854),n={data(){return{datos:"",user:"",provider:"",mobile:""}},methods:{popUpWithGoogle(){this.provider=new i.hJ,null!==this.mobile&&(console.log("MOBILE"),(0,i.F6)(s.I,this.provider),(0,i.cx)(s.I).then((t=>{const o=i.hJ.credentialFromResult(t);o.accessToken,t.user})).catch((t=>{t.code,t.message,t.customData.email,i.hJ.credentialFromError(t)}))),(0,i.rh)(s.I,this.provider).then((t=>{const o=i.hJ.credentialFromResult(t);o.accessToken;console.log("sesion abierta con google")})).catch((t=>{t.code,t.message,t.customData.email,i.hJ.credentialFromError(t)}))},popUpWithFacebook(){this.provider=new i._O,(0,i.rh)(s.I,this.provider).then((t=>{const o=i._O.credentialFromResult(t);o.accessToken;console.log("logeado"),console.log(o)})).catch((t=>{t.code;const o=t.message;t.customData.email,i._O.credentialFromError(t);console.log(o)}))},signOut(){(0,i.w7)(s.I).then((()=>{})).catch((t=>{console.log(t)}))},isMobile(){var t={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}};this.mobile=t.any()}},created(){this.isMobile()}},c=n,l=e(1001),u=(0,l.Z)(c,r,a,!1,null,null,null),d=u.exports}}]);
//# sourceMappingURL=841.bda1c86d.js.map