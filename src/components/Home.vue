<template>
    <div >
      
        <button @click="signOut"></button>
        <h1>LOGUEADOOOOOOO</h1>    
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Home',
    return(){

    },
    methods:{
        signOut(){
                signOut(auth).then(() => {
                // Sign-out successful.
                
                }).catch((error) => {
                    console.log(error)
                // An error happened.
                }); 
            },
    }
    
  }
  </script>
  