import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { auth } from "../firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import router from "../router";

export default new Vuex.Store({
  state: {
    usuario : null,
    error: null
  },

  mutations: {
    setUsuario(state, payload){
      state.usuario = payload
    },
    setError(state, payload){
      state.error = payload
    }

  },
  actions: {
    crearUsuario({commit} , usuario){
      createUserWithEmailAndPassword(auth, usuario.email, usuario.password)
        .then(res=>{
          console.log(res)
          const usuarioCreado = {
            email: res.user.email,
            uid: res.user.uid,
            photoURL: res.user.photoURL,
            displayName: res.user.displayName

          }

          commit('setUsuario',usuarioCreado)

          router.push("/");

        }).catch(error=>{
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode=='auth/email-already-in-use') {
            error.message ="El correo electronico ya existe en la BD"
          }

          commit('setError', error)
        })
    },    
    detectarUsuario({commit}, usuario){
      commit('setUsuario', usuario)
   }
  },
  
  getters: {

    existeUsuario(state){
      if (state.usuario === null) {
        return false;
      } else {
        return true;
      }
    },
    datosUsuario(){

    }
  },
  modules: {
  }
})
