<template>
    <div class="flex justify-center h-screen w-full bg-gradient-to-b from-[#101212]  to-[#08201D]">
      <div class="w-4/6">
        <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
          <v-card class="elevation-6 mt-10">
            <v-window v-model="step">
              <!-- Ventana de inicio de sesión -->
              <v-window-item  :value="1">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                     
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-text-field
                            label="Email"
                            variant="outlined"
                            dense
                            color="blue"
                            autocomplete="off"
                            class="mt-16"
                          />
                          <v-text-field
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
                                label="Remember Me"
                                color="blue"
                                class="mt-n1"
                              />
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption blue--text">Contraseña olvidada</span>
                            </v-col>
                          </v-row>
                          <v-btn color="#5BC0BE" dark block tile>Inicia session</v-btn>
  
                          <h5 class="text-center grey--text mt-4 mb-3">
                            O inicia sesión con
                          </h5>
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
                        <h3 class="text-center">¿Aún no tienes una cuenta?</h3>
                        <h6 class="text-center">
                          Vamos a configurarlo todo para que pueda comenzar a crear su
                          primera experiencia de incorporación
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++">Registrate</v-btn>
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
                        <h3 class="text-center">Ya te has registrado</h3>
                        <h6 class="text-center">
                          Inicie sesión en su cuenta para que pueda continuar construyendo y<br />
                          editar sus flujos de incorporación
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--">Inicia session</v-btn>
                      </div>
                    </div>
                  </v-col>
  
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                    
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="First Name"
                                variant="outlined"
                                dense
                                color="blue"
                                autocomplete="off"
                                class="mt-4"
                              />
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="Last Name"
                                variant="outlined"
                                dense
                                color="blue"
                                autocomplete="off"
                                class="mt-4"
                              />
                            </v-col>
                          </v-row>
                          <v-text-field
                            label="Email"
                            variant="outlined"
                            dense
                            color="blue"
                            autocomplete="off"
                          />
                          <v-text-field
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
                                label="Aceptar terminos"
                                color="blue"
                                class="mt-n1"
                              />
                            </v-col>
                 
                          </v-row>
                          <v-btn color="blue" dark block tile>Sign up</v-btn>
  
                          <h5 class="text-center grey--text mt-4 mb-3">
                            Or Sign up using
                          </h5>
                          <div class="d-flex justify-space-between align-center mx-10 mb-11">
                            <v-btn depressed outlined color="grey">
                              <v-icon color="red">mdi-google</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="blue">mdi-facebook</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="light-blue lighten-3">mdi-twitter</v-icon>
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
  export default {
    data() {
      return {
        step: 1,
        rememberMe: false,
        acceptTerms: false,
      };
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
  