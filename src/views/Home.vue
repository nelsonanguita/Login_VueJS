<template>
  <div >
    
      <button @click="signOut"></button>
      <h1>LOGUEADOOOOOOO</h1>    
  </div>
</template>

<script>

import router from '../router'

import { auth } from '../firebase/init';

import {  signOut  } from "firebase/auth";

export default {
  name: 'Home',
  return(){

  },
  methods:{
      signOut(){
              signOut(auth).then(() => {
              // Sign-out successful.
              router.push('/')

              }).catch((error) => {
                  console.log(error)
              // An error happened.
              }); 
          },
  }
  
}
</script>
