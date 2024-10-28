<template>
  <div class="flex justify-center h-screen w-full bg-gradient-to-b from-[#101212]  to-[#08201D]">
    <div class="w-4/6">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
          <v-card class="elevation-6 mt-10">
            <v-window v-model="step" class="shadow-md shadow-black">
              <!-- Ventana de inicio de sesión -->
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <div class="w-full flex justify-center">
                        <h2 class="text-center text-4xl font-bold">Inicia sesión</h2>
                      </div>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-text-field
                            v-model="loginEmail"
                            label="Email"
                            variant="outlined"
                            dense
                            color="blue"
                            autocomplete="off"
                            class="mt-16"
                          />
                          <v-text-field
                            v-model="loginPassword"
                            label="Password"
                            variant="outlined"
                            dense
                            color="blue"
                            autocomplete="off"
                            type="password"
                          />
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                v-model="rememberMe"
                                label="Recordarme"
                                color="blue"
                                class="mt-n1"
                              />
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption blue--text">¿Olvidaste tu contraseña?</span>
                            </v-col>
                          </v-row>
                          <v-btn color="#5BC0BE" dark block tile @click="loginUser">Inicia sesión</v-btn>
  
                          <h5 class="text-center grey--text mt-4 mb-3">O inicia sesión con</h5>
                          <div class="flex justify-center align-center ">
                            <v-btn depressed outlined color="#5BC0BE">
                              <v-icon color="white">mdi-google</v-icon>
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="6" class="blue rounded-bl-xl">
                    <div style="background-color: #5BC0BE; border-bottom-left-radius: 20% ; text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text">
                        <h3 class="text-center font-poppins mb-5 text-3xl font-bold">¿Aún no tienes una cuenta?</h3>
                        <h6 class="text-center font-poppins">
                          Vamos a configurarlo todo para que puedas comenzar a crear tu primera experiencia de incorporación
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++">Regístrate</v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
  
              <!-- Ventana de registro -->
              <v-window-item :value="2">
                <v-row>
                  <v-col cols="12" md="6" class="blue rounded-br-xl">
                    <div style="background-color: #5BC0BE; border-right: 1 #5BC0BE ; border-bottom-right-radius: 20%; text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text">
                        <h3 class="mb-5 text-3xl font-bold font-poppins text-center">¿Ya te has registrado?</h3>
                        <h6 class="text-center font-poppins">
                          Inicia sesión en tu cuenta para que puedas continuar construyendo y editando tus flujos de incorporación
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--">Inicia sesión</v-btn>
                      </div>
                    </div>
                  </v-col>
  
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <div class="w-full flex justify-center">
                        <h2 class="text-center text-4xl font-bold">Regístrate</h2>
                      </div>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                v-model="firstName"
                                label="Nombre"
                                variant="outlined"
                                dense
                                color="blue"
                                autocomplete="off"
                                class="mt-4"
                              />
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                v-model="lastName"
                                label="Apellido"
                                variant="outlined"
                                dense
                                color="blue"
                                autocomplete="off"
                                class="mt-4"
                              />
                            </v-col>
                          </v-row>
                          <v-text-field
                            v-model="registerEmail"
                            label="Email"
                            variant="outlined"
                            dense
                            color="blue"
                            autocomplete="off"
                          />
                          <v-text-field
                            v-model="registerPassword"
                            label="Password"
                            variant="outlined"
                            dense
                            color="blue"
                            autocomplete="off"
                            type="password"
                          />
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                v-model="acceptTerms"
                                label="Aceptar términos"
                                color="blue"
                                class="mt-n1"
                              />
                            </v-col>
                          </v-row>
                          <v-btn color="#5BC0BE" dark block tile @click="registerUser">Regístrate</v-btn>
  
                          <h5 class="text-center grey--text mt-4 mb-3">O regístrate usando</h5>
                          <div class="flex justify-center">
                            <v-btn depressed outlined color="#5BC0BE">
                              <v-icon color="white">mdi-google</v-icon>
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import router from '../router';

const firebaseConfig = {
  apiKey: "AIzaSyDt1udCTnpVHgCqCPqMvpFLfR9ZCtPgJ4w",
  authDomain: "sdadsasd-ea882sda.firebaseapp.com",
  projectId: "sdadsasd-ea882sda",
  storageBucket: "sdadsasd-ea882sda.appspot.com",
  messagingSenderId: "944012620508",
  appId: "1:944012620508:web:cc587d2bc90ba2169ffa19",
  measurementId: "G-8HSMJQ4W45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default {
  data() {
    return {
      step: 1,
      rememberMe: false,
      acceptTerms: false,
      // Datos para inicio de sesión
      loginEmail: '',
      loginPassword: '',
      // Datos para registro
      firstName: '',
      lastName: '',
      registerEmail: '',
      registerPassword: '',
    };
  },
  methods: {
    async registerUser() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.registerEmail,
          this.registerPassword
        );
        alert('Usuario registrado con éxito');
      } catch (error) {
        console.error('Error registrando usuario:', error.message);
      }
    },
    async loginUser() {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.loginEmail,
          this.loginPassword
        ); 
        router.push('/');
 
      } catch (error) {
        alert("Credencials invalidas");
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    },
  },
};
</script>

<style scoped>
.rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
