<template>
  <div>
    <div class="inner-block " >
          <b-overlay :show="cargando" rounded="sm">
            <b-form @submit.prevent="actualizarDatos" >

              <div class="mb-3" :aria-hidden="cargando ? 'true' : null">
                
              <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.nombre"
                  placeholder=""
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Apellidos:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.apellidos"
                  placeholder=""
                  required
                ></b-form-input>
              </b-form-group>
        
              <b-form-group id="input-group-3" label="Alias:" label-for="input-3">
                <b-form-input
                  id="input-3"
                  v-model="form.alias"
                  placeholder=""
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4" label="Rut:" label-for="input-4">
                <b-form-input
                  id="input-3"
                  v-model="form.rut"
                  placeholder=""
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-5" label="Email:" label-for="input-5">
                <b-form-input
                  id="input-3"
                  v-model="form.email"
                  placeholder=""
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-6" label="Telefono:" label-for="input-6">
                <b-form-input
                  id="input-3"
                  v-model="form.telefono"
                  placeholder="+56 9 .."
                  required
                ></b-form-input>
              </b-form-group>



              </div>

        
            
        
              <b-button type="submit" variant="primary">Actualizar</b-button>
              <b-button type="button" variant="light" @click="signOut"> 
                <b-icon icon="power" aria-hidden="true"></b-icon> Cerrar sesion
              </b-button>

            </b-form>
          </b-overlay >
        </div>
  </div>

</template>
  
  <script>
  import { auth, db} from '../firebase/init';
  import router from '../router'
  import { signOut } from "firebase/auth";
  import { doc, setDoc, getDoc  } from "firebase/firestore";

    export default {
      data() {
        return {
          cargando: true,
          form: {
            alias:'',
            apellidos: '',
            email: auth.currentUser.email,
            estado: true,
            nombre:auth.currentUser.name,
            rut:'',
            telefono:'',
          },
          id_user:auth.currentUser.uid,
          show: 'false'
        }
      },
      methods: {
        onSubmit(event) {
          event.preventDefault()
          //alert(JSON.stringify(this.form))
          router.push('/')

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
        async actualizarDatos(e){
          e.preventDefault()
         
          try {
            await setDoc(doc(db, "usuario", this.id_user), this.form);
            router.push('/')
   
          } catch (error) {
            console.log('Ha ocurrido un error '+ error )
          }
          
                 
        },
        signOut(){
                signOut(auth).then(() => {
                // Sign-out successful.
                console.log('cerrar sesion')
                router.push('/login')

                }).catch((error) => {
                    console.log(error)
                // An error happened.
                }); 
            },
        async completarCampos(){
              const docRef = doc(db, "usuario", this.id_user);
              const user = await getDoc(docRef);

              if (user.exists()) {
                
                console.log("USUARIO ENCONTRADO")
                
                this.form.alias = user.data().nombre,
                this.form.apellidos= user.data().apellidos,
                this.form.email= auth.currentUser.email,
                this.form.estado= true,
                this.form.nombre=user.data().nombre,
                this.form.rut=user.data().rut,
                this.form.telefono=user.data().telefono

                this.cargando = false
                  //this.show = true
                  return this.form; 
                
              } else {
                this.cargando = false
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
              }
            }
      },
      created(){
        this.completarCampos();
      }
    }
  </script>