<template>
  <div class="position-relative  inner-block">
    <form @submit.prevent="register">
      <h1>Registro</h1>
      <div class="mb-3">
        <div class="form-group">
          <label>Nombres</label>
          <input
            type="text"
            v-model="name"
            class="form-control form-control-lg"
          />
        </div>
        <div class="form-group">
          <label>Apellidos</label>
          <input type="text" class="form-control form-control-lg" />
        </div>
        <div class="form-group">
          <label>Email </label>
          <input
            type="email"
            v-model="email"
            class="form-control form-control-lg"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control form-control-lg"
          />
        </div>
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Registrar
      </button>
      <p class="forgot-password text-right">
        Ya estás registrado?
        <router-link :to="{ name: 'login' }">Inicia sesion</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import router from "../router";

import { app, auth } from "../firebase/init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    register(e) {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          //console.log('user created ' + JSON.stringify(user))
          user.displayName = user.name;
          
          console.log("user created " + JSON.stringify(user));
          router.push("/Home");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode=='auth/email-already-in-use') {
            alert("El correo electronico ya existe en la BD")

          }
          
          // ..
        });
    },
  },
  watch: {},
};
</script>
