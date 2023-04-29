<template>
  <div class="position-relative">
      <div class="header">

        <div class="title">
          <h1>Bienvenid@</h1>    
          <h2 style="overflow: hidden; text-overflow: ellipsis;">
            {{ usuario.displayName}}
          </h2>
        </div>
       

      </div>

      <section class="body">


            <div class="agrupar">

            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="#727272" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
            </svg>
            <p>
              <br>
              ULTIMA HORA TOMADA CON:
              <br>
              <p>Doctor Jirafales <br>Obtetricia <br>Sábado 15 Abril 2022</p>
            </p>
            
            </div>


        
      </section>

 
      <section class="btn-agendar" >

        <router-link to="/tomarhora">
                          <button type="button" class="btn btn-outline-primary" style="color: white; border-color: #fff; min-width: 100%; height: 100%;">
                            AGENDA TU HORA
                          </button>
                        </router-link>

        </section>

        <section class="btn-agendar" >

        <router-link to="/tomarhora">
                  <button type="button" class="btn btn-outline-primary" style="color: white; border-color: #fff; min-width: 100%; height: 100%;">
                    CONFIRMA TU HORA
                  </button>
                </router-link>

</section>

<section class="btn-agendar" >

<router-link to="/tomarhora">
          <button type="button" class="btn btn-outline-primary" style="color: white; border-color: #fff; min-width: 100%; height: 100%;">
            CAMBIA TU HORA
          </button>
        </router-link>

</section>


      



  </div>
</template>

<script>

import router from '../router'

import { auth } from '../firebase/init';

import {  signOut  } from "firebase/auth";
import { mapState } from "vuex";

export default {
  name: 'Home',
  data(){
    return{
      displayName: '',
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],

    }
  },
  
  
  
  methods:{
      signOut(){
              signOut(auth).then(() => {
              // Sign-out successful.
              router.push('/login')

              }).catch((error) => {
                  console.log(error)
              // An error happened.
              }); 
          },

  },
  computed:{
    ...mapState(['usuario'])

  },
  created(){
    //this.displayName = usuario.displayName !== 'null' ? usuario.displayName : usuario.email
  }
  
}
</script>
