"use strict";(self["webpackChunkhoramedica"]=self["webpackChunkhoramedica"]||[]).push([[821],{4821:function(t,o,e){e.r(o),e.d(o,{default:function(){return d}});var s=function(){var t=this,o=t._self._c;return o("div",{staticClass:"divPadre"},[t._m(0),o("div",{staticClass:"inner-block login"},[o("form",{on:{submit:function(o){return o.preventDefault(),t.signIn.apply(null,arguments)}}},[o("h2",[t._v("Iniciar sesión ")]),o("div",{staticClass:"mb-3"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Correo electronico ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(o){o.target.composing||(t.email=o.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[t._v("Contraseña")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(o){o.target.composing||(t.password=o.target.value)}}})])]),o("button",{staticClass:"btn btn-dark btn-lg btn-block",attrs:{type:"submit"}},[t._v("Iniciar")]),o("p",{staticClass:"forgot-password text-right mt-2 mb-4"},[o("router-link",{attrs:{to:"/forgot-password"}},[t._v("¿Olvidaste tu contraseña?")])],1),o("div",{staticClass:"d-flex gap-5"},[o("b-button",{staticClass:"button-login btn-light",on:{click:t.popUpWithGoogle}},[o("img",{staticClass:"img-icon",attrs:{src:e(3984),alt:"",srcset:""}})]),o("b-button",{staticClass:"button-login",attrs:{variant:"primary"},on:{click:t.popUpWithFacebook}},[o("img",{staticClass:"img-icon",attrs:{src:e(3902),alt:"",srcset:""}})])],1)])])])},a=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"divHijo"},[o("img",{attrs:{src:e(4767)}})])}],r=(e(7658),e(1120)),i=e(2392),n=e(3854),c={data(){return{email:"",password:"",datos:"",user:"",provider:"",mobile:"",user:""}},methods:{async popUpWithGoogle(t){if(this.provider=new n.hJ,null!==this.mobile){const t=await(0,n.rh)(i.I,this.provider);t&&r.Z.push("/")}else(0,n.rh)(i.I,this.provider).then((t=>{const o=n.hJ.credentialFromResult(t);o.accessToken;this.user=t.user,console.log("sesion abierta con google"),r.Z.push("/")})).catch((t=>{t.code,t.message,t.customData.email,n.hJ.credentialFromError(t)}))},popUpWithFacebook(){this.provider=new n._O,(0,n.rh)(i.I,this.provider).then((t=>{const o=n._O.credentialFromResult(t);o.accessToken;console.log("logeado"),console.log(o),r.Z.push("/")})).catch((t=>{t.code;const o=t.message;t.customData.email,n._O.credentialFromError(t);console.log(o)}))},signOut(){(0,n.w7)(i.I).then((()=>{})).catch((t=>{console.log(t)}))},isMobile(){var t={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}};this.mobile=t.any()},existeSesion(){i.I.onAuthStateChanged((function(t){t?(r.Z.push("/"),console.log("Sesion activa")):console.log("Sesion cerrada")}))},signIn(t){t.preventDefault(),(0,n.e5)(i.I,this.email,this.password).then((t=>{t.user;console.log("ingreso"),r.Z.push("/")})).catch((t=>{const o=t.code;t.message;if("auth/user-not-found"==o)return alert("usuario no encontrado");alert(o)}))}},created(){this.isMobile()}},l=c,u=e(1001),p=(0,u.Z)(l,s,a,!1,null,null,null),d=p.exports},3902:function(t,o,e){t.exports=e.p+"img/facebook.d3111870.svg"},3984:function(t,o,e){t.exports=e.p+"img/google.562c9093.svg"},4767:function(t,o,e){t.exports=e.p+"img/LOGO.63afb51a.jpg"}}]);
//# sourceMappingURL=821.3a253991.js.map