<template>
    <div class="inner-block ">
      <b-form  @submit="onSubmit" v-if="show">

        <div class="mb-3">
           
        <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder=""
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Apellido Paterno:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.lastname1"
            placeholder=""
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Apellido Materno:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.lastname2"
            placeholder=""
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-4"
          label="Correo electronico:"
          label-for="input-4"
          description=""
        >
          <b-form-input
            id="input-4"
            v-model="form.email"
            type="email"
            placeholder=""
            required
          ></b-form-input>
        </b-form-group>
        </div>

  
       
  
        <b-button type="submit" variant="primary">Actualizar</b-button>
        <b-button type="button" variant="dark" @click="signOut"> Cerrar sesion</b-button>

      </b-form>

    </div>
  </template>
  
  <script>
  import { auth } from '../firebase/init';
  import router from '../router'
  import { signOut } from "firebase/auth";

    export default {
      data() {
        return {
          form: {
            email: auth.currentUser.email,
            name: auth.currentUser.name,
            food: null,
            checked: []
          },
          show: true
        }
      },
      methods: {
        onSubmit(event) {
          event.preventDefault()
          //alert(JSON.stringify(this.form))
          router.push('/home')

        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.form.email = ''
          this.form.name = ''

          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        },
        actualizarDatos(){

        },
        signOut(){
                signOut(auth).then(() => {
                // Sign-out successful.
                console.log('cerrar sesion')
                router.push('/')

                }).catch((error) => {
                    console.log(error)
                // An error happened.
                }); 
            },
      }
    }
  </script>