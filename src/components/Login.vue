<template>
    <div class="vue-tempalte">
        <button @click="signOut"  class="btn btn-dark ">Cerra sesion</button>

        <form>
            <h3>Inicia sesion {{email }}</h3>
            <div class="form-group">
                <label>Email </label>
                <input type="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Iniciar</button>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">¿Olvidaste tu contraseña?</router-link>
            </p>
            <div class="social-icons">
                <ul>
                    <li><a @click="popUpWithGoogle"><i class="fa fa-google"></i></a></li>
                    <li><a @click="popUpWithFacebook"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
        </form>
    </div>
</template>
<script>
import router from '../router/index'

import { app, auth } from '../firebase/init';

import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut , signInWithRedirect , getRedirectResult } from "firebase/auth";

    export default {
        data() {
            return {
                email:'',
                datos:'',
                user:'',
                provider:'',
                mobile:''
            }
        },
        methods:{
           popUpWithGoogle(){
            this.provider = new GoogleAuthProvider();
            
            if (this.mobile!==null) {

                signInWithRedirect(auth, this.provider);

                getRedirectResult(auth)
                    .then((result) => {
                        // This gives you a Google Access Token. You can use it to access Google APIs.
                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        const token = credential.accessToken;

                        // The signed-in user info.
                        const user = result.user;
                        // IdP data available using getAdditionalUserInfo(result)
                        // ...
                        router.push('/home')
                        return;
                    }).catch((error) => {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // The email of the user's account used.
                        const email = error.customData.email;
                        // The AuthCredential type that was used.
                        const credential = GoogleAuthProvider.credentialFromError(error);
                        // ...
                    });

            
                
            }
            //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            signInWithPopup(auth, this.provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    //this.user = result.user;
                   // console.log(JSON.stringify(user))
                    //this.datos =JSON.stringify(user)
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                    console.log("sesion abierta con google")
                    router.push('/home')

                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });

           },
           popUpWithFacebook(){
            
            this.provider = new FacebookAuthProvider();
 
            signInWithPopup(auth, this.provider)
                .then((result) => {
                    // The signed-in user info.
                    //this.user = result.user;

                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    const credential = FacebookAuthProvider.credentialFromResult(result);
                    const accessToken = credential.accessToken;
                    console.log("logeado")
                    console.log(credential)
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                    router.push('/home')

                })
                .catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = FacebookAuthProvider.credentialFromError(error);
                    console.log(errorMessage)
                    // ...
                });

            },

            signOut(){
                signOut(auth).then(() => {
                // Sign-out successful.
                
                }).catch((error) => {
                    console.log(error)
                // An error happened.
                }); 
            },
            isMobile(){
                var mobile = {
                    Android: function() {
                        return navigator.userAgent.match(/Android/i);
                    },
                    BlackBerry: function() {
                        return navigator.userAgent.match(/BlackBerry/i);
                    },
                    iOS: function() {
                        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                    },
                    Opera: function() {
                        return navigator.userAgent.match(/Opera Mini/i);
                    },
                    Windows: function() {
                        return navigator.userAgent.match(/IEMobile/i);
                    },
                    any: function() {
                        return (mobile.Android() || mobile.BlackBerry() || mobile.iOS() || mobile.Opera() || mobile.Windows());
                    }
                    };
                   this.mobile = mobile.any(); 
                }
           
        },
        created(){
            ()=>{
               
            auth.onAuthStateChanged(function(user) {

            if (user) {
                console.log('Sesion activa')  
                console.log(user)  
            } else {
                console.log('Sesion cerrada')       
            }
            });
        },
        this.isMobile();

        },
        
        
    }
</script>