import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

import { BootstrapVue, BootstrapVueIcons, AvatarPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(AvatarPlugin)


import { auth } from './firebase/init';

auth.onAuthStateChanged(function(user) {
   
  if (user) {
     const detectoUsuario = {
      email: user.email,
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName ?? user.email

     } 
     console.log(detectoUsuario)
     store.dispatch('detectarUsuario', detectoUsuario)
     console.log("arriba")
  } else {
    console.log("abajo")
    store.dispatch('detectarUsuario', user)

  }



  Vue.config.productionTip = false

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  


  });

