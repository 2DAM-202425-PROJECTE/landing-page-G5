<template>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
          <v-card class="elevation-6 mt-10">
            <v-window v-model="step">
              <!-- Ventana de inicio de sesión -->
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h4 class="text-center">Login in to Your Account</h4>
                      <h6 class="text-center grey--text">
                        Log in to your account so you can continue building <br />and
                        editing your onboarding flows
                      </h6>
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
                              <span class="caption blue--text">Forgot password</span>
                            </v-col>
                          </v-row>
                          <v-btn color="blue" dark block tile>Log in</v-btn>
  
                          <h5 class="text-center grey--text mt-4 mb-3">
                            Or Log in using
                          </h5>
                          <div class="d-flex justify-space-between align-center mx-10 mb-16">
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
                  <v-col cols="12" md="6" class="blue rounded-bl-xl">
                    <div style="text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text">
                        <h3 class="text-center">Don't Have an Account Yet?</h3>
                        <h6 class="text-center">
                          Let's get you all set up so you can start creating your
                          first onboarding experience
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
  
              <!-- Ventana de registro -->
              <v-window-item :value="2">
                <v-row>
                  <v-col cols="12" md="6" class="blue rounded-br-xl">
                    <div style="text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text">
                        <h3 class="text-center">Already Signed up?</h3>
                        <h6 class="text-center">
                          Log in to your account so you can continue building and<br />
                          editing your onboarding flows
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--">Log in</v-btn>
                      </div>
                    </div>
                  </v-col>
  
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h4 class="text-center">Sign Up for an Account</h4>
                      <h6 class="text-center grey--text">
                        Let's get you all set up so you can start creating your <br />
                        first onboarding experience
                      </h6>
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
                                label="I Accept AAE"
                                color="blue"
                                class="mt-n1"
                              />
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption blue--text ml-n4">Terms & Conditions</span>
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
    </v-container>
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
  