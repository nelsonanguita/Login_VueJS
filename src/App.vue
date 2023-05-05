<template>
  <div >
    <!-- navbar navbar-dark flex-column flex-md-row bd-navbar -->
    <div  class="navbar-dark flex-column flex-md-row bd-navbar">
                    <!-- Navigation  -sm|-md|-lg|-xl|-xxl-->
                                          

                    <b-navbar  toggleable="xxxl" style="align-items:center; padding: 0px;" class="d-flex justify-content-between">
                    
                      <b-navbar-brand v-if="!existeUsuario" href="#"  style="margin-left: 10PX; " >
                            <router-link to="/singup"> 
                              <button style=" color: white; background: none; border: 0cap; margin-left: 10PX">
                                Registrate
                              </button>
                            </router-link>
                      </b-navbar-brand>
                    
                      <b-navbar-brand v-if="existeUsuario" href="#"  style="margin-left: 10PX; " >
                            <router-link to="/"> 
                              <button style=" color: white; background: none; border: 0cap; margin-left: 10PX">
                                <b-icon  icon="house" scale="1.5"> </b-icon>
                              </button>
                            </router-link>
                      </b-navbar-brand>


                      <b-navbar-brand v-if="existeUsuario" href="#"  >
                        <b-dropdown  variant="link" block no-caret class="d-flex flex-row-reverse" style="color: blue;">
                            <template #button-content >
                              <!-- <router-link to="/fichausuariocopy">  -->
                                <b-avatar size="3rem"  :src="usuario.photoURL"> </b-avatar>

                            </template>
                            <section >
                              <b-dropdown-item :to="{ path: '/fichausuariocopy' }" >Perfil</b-dropdown-item>
                              <b-dropdown-item :to="{ path: '/calendar' }">Calendario</b-dropdown-item>
                              <b-dropdown-item  @show="prueba">Salir</b-dropdown-item>
                            </section>
                              
                                  
                          </b-dropdown>
                      </b-navbar-brand>


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
            photo: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown" ,
            items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],

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
            prueba(){
              console.log("kkakkakakak")
            }
        },
        created(){
          //this.photo = auth.currentUser.photoURL
        }
      }
  
</script>