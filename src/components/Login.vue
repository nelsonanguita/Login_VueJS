<template>

    <div class="divPadre">

        <div class="divHijo">
            <img  src="../assets/LOGO.jpg" >
        </div>
        
    <div class="inner-block login">
        <form @submit="signIn">
            <h2>Iniciar sesión </h2>
            <div class="mb-3">
                <div class="form-group">
                <label>Correo electronico </label>
                <input type="email" v-model="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Iniciar</button>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">¿Olvidaste tu contraseña?</router-link>
            </p>
          

        </form>
        <div class="d-flex gap-5">
                        <b-button  @click="popUpWithGoogle" class="button-login btn-light ">
                            <img class="img-icon" src="../assets/icons/google.svg" alt="" srcset="">

                        </b-button>
                        <b-button @click="popUpWithFacebook" class="button-login" variant="primary">
                            <img class="img-icon" src="../assets/icons/facebook.svg" alt="" srcset="">
                        </b-button>
                        

            </div>
    </div>
</div>

</template>
<script>
import router from '../router/index'

import { auth } from '../firebase/init';

import { signInWithPopup,
     signInWithEmailAndPassword, 
     GoogleAuthProvider, 
     FacebookAuthProvider,
     signOut } from "firebase/auth";

    export default {
        data() {
            return {
                email:'',
                password:'',
                datos:'',
                user:'',
                provider:'',
                mobile:'',
                user:''
            }
        },
        methods:{
            async popUpWithGoogle(e){
          
           
             this.provider = new GoogleAuthProvider();

            if ((this.mobile!==null)) {

                const userCred = await signInWithPopup(auth, this.provider);
                if (userCred) {
                    //this.existeSesion()
                }
                
            }else{
                            //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            signInWithPopup(auth, this.provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    this.user = result.user;
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
            }


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
                },
            existeSesion(){
               
               auth.onAuthStateChanged(function(user) {
   
                    if (user) {
                        //this.user = user;
                        router.push("/home");
                        console.log('Sesion activa')  
                    } else {
                        console.log('Sesion cerrada')  
                    }
                    });
           },
           signIn(e){
  
            e.preventDefault()

            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {

                    // Signed in
                    const user = userCredential.user;

                    console.log("ingreso")
                    router.push("/Home");

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorCode=='auth/user-not-found') {
                        return alert("usuario no encontrado")    
                    }
               
                    alert(errorCode);
                });
           }
           
        },
        created(){
            this.isMobile();
        },
        
        
    }
</script>