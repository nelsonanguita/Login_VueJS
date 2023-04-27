<template>
    <div class="inner-block">
        <h1>Datos personales</h1> 
        <form action="">
            <div class="mb-3">

                <label for="exampleFormControlInput1" class="form-label">Nombre </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" >
                <label for="exampleFormControlInput1" class="form-label">Apellido Paterno </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" >

                <label for="exampleFormControlInput1" class="form-label">Apellido Materno </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" >


                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>

            <button type="submit"  class="btn btn-dark btn-lg btn-block">Actualizar</button>

        </form>
       
            
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
                router.push('/login')
  
                }).catch((error) => {
                    console.log(error)
                // An error happened.
                }); 
            },
    }
    
  }
  </script>
  