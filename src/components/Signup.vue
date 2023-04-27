<template>
  <div class="position-relative  inner-block">
    <form @submit.prevent="crearUsuario({email: email, password: password})">
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
      <p>{{ error }}</p>
      <p class="forgot-password text-right">
        Ya estás registrado?
        <router-link :to="{ name: 'login' }">Inicia sesion</router-link>
      </p>
    </form>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    ...mapActions(['crearUsuario']),
  },
  computed:{
    ...mapState(['error'])
  }
};
</script>
