<template>
    <div class="vue-tempalte">
        <form   @submit.prevent ="register"
>
            <h3>Registro {{ name }}</h3>
            <div class="form-group">
                <label>Nombres</label>
                <input type="text" v-model="name" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Apellidos</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Email </label>
                <input type="email"  v-model="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password"  v-model="password" class="form-control form-control-lg" />
            </div>
            
            <button type="submit" class="btn btn-dark btn-lg btn-block">Registrar</button>
            <p class="forgot-password text-right">
                Ya estás registrado? 
                <router-link :to="{name: 'login'}">Inicia sesion</router-link>
            </p>
        </form>
    </div>
</template>

<script>


import { app, auth } from '../firebase/init';
import { createUserWithEmailAndPassword, onAuthStateChanged  } from 'firebase/auth'

    export default {
        data() {
            return {
                email: '',
                password :'',
                name:''
            }
        },
        methods:{
            register(e){
                createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;

                        //console.log('user created ' + JSON.stringify(user))
                        user.displayName= user.name
                        // ...
                        onAuthStateChanged(auth, (user) => {
                        if (user) {
                            // User is signed in, see docs for a list of available properties
                            // https://firebase.google.com/docs/reference/js/firebase.User
                            const uid = user.uid;
                            // ...
                            console.log('user created ' + JSON.stringify(user))


                        } else {
                            // User is signed out
                            // ...
                        }
                        });

                    })
                    .catch((error) => {
                        e.preventDefault();

                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                    });
                       
                    e.preventDefault()
      


                    
                }    
       },
       watch:{

       }
            
        
    }
</script>