<template>
  <div >
    <div  class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                    <!-- Navigation -->
                  <b-navbar  toggleable="lg">
                    <b-navbar-brand v-if="!existeUsuario" href="#">
                        
                        
                      </b-navbar-brand>
                      <b-navbar-brand v-if="existeUsuario" href="#">
                        <b-icon icon="house" scale="1">INICIO</b-icon>
                        INICIO
                      </b-navbar-brand>
                  
                  <b-navbar-nav class="ml-auto">
                    <b-avatar v-if="existeUsuario" variant="info" src="https://placekitten.com/300/300"></b-avatar>
                    <button v-if="existeUsuario" type="button" @click="signOut" class="btn btn-outline-primary">LogOUT</button>
                    <button v-if="!existeUsuario"  type="button" class="btn-logout btn-outline-primary  " >
                      <router-link v-if="existeUsuario"  to="/signup">Registrarse</router-link>
                    </button>
                    
                  </b-navbar-nav>


              </b-navbar>
    </div>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center flex-column flex-md-row">
        <div >
          <router-view />
        </div>
      </div>
    </div>

    
  </div>
</template>

<script lang="js">
import { signOut } from "firebase/auth";
import { auth } from './firebase/init';
import { mapGetters } from "vuex";
import router from '../src/router'

  export default {
        data() {
          return{

          }
        },
        computed:{
          ...mapGetters(['existeUsuario'])
        },
        methods:{
          signOut(){
                signOut(auth).then(() => {
                // Sign-out successful.
                console.log('cerrar sesion')
                router.push('/')

                }).catch((error) => {
                    console.log(error)
                // An error happened.
                }); 
            },
        }
      }
  
</script>