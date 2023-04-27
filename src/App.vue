<template>
  <div >
    <div  class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                    <!-- Navigation  -sm|-md|-lg|-xl|-xxl-->
                    <b-navbar  toggleable="xxxl" style="justify-content: space-between; padding: 20px;">
                      <b-navbar-brand v-if="existeUsuario" href="#">
                            <router-link to="/"> 
                              <button style="color: white; background: none; border: 0cap;">
                                <b-icon  icon="house" scale="1.5"> </b-icon>
                              </button>
                            </router-link>
                      </b-navbar-brand>

                      <b-navbar-nav class="ml-auto">
                        <router-link v-if="existeUsuario" to="/fichausuariocopy" style="color: #fff;">
                          <b-avatar  variant="info" :src="usuario.photoURL"> </b-avatar>
                        </router-link>
                        <!-- <button v-if="existeUsuario" type="button" @click="signOut" class="btn btn-outline-primary" style="color: white;">Salir</button> -->

                        <router-link to="/signup">
                          <button v-if="!existeUsuario"  type="button" class="btn btn-outline-primary" style="color: white; border-color: #fff; margin-right: 50px;">
                            Registrarse
                          </button>
                        </router-link>
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

<script>
import { auth } from './firebase/init';
import { mapGetters, mapState } from "vuex";

import router from '../src/router'

  export default {
        data() {
          return{
            //photo: "https://placekitten.com/300/300"
            //photo: auth.currentUser.photoURL!=='null' ? auth.currentUser.photoURL : "https://placekitten.com/300/300"
           //photo: auth.currentUser.photoURL==='null' ? "https://placekitten.com/300/300" 
            photo: "https://placekitten.com/300/300" 

          }
        },
        computed:{
          ...mapGetters(['existeUsuario']),
          ...mapState(['usuario'])
          
        },
        methods:{
          signOut(){
                signOut(auth).then(() => {
                // Sign-out successful.
                console.log('cerrar sesion')
                router.push('/login')

                }).catch((error) => {
                    console.log(error)
                // An error happened.
                }); 
            },
        },
        created(){
          //this.photo = auth.currentUser.photoURL
        }
      }
  
</script>