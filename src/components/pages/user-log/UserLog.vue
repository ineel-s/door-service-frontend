<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height m-auto" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 deep-purple--text text--accent-3">Sign in</h1>
                        <v-form @submit.prevent="onSignin">
                          <validation-provider v-slot="{ errors }" name="email" rules="required|email">
                            <v-text-field v-model="email" :error-messages="errors" label="Email" prepend-icon="email"
                              type="text" color="input-group--focused" />
                          </validation-provider>
                          <validation-provider v-slot="{ errors }" name="password" rules="required|min:8">
                            <v-text-field :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" v-model="password"
                              :error-messages="errors" :type="show ? 'text' : 'password'" prepend-icon="lock"
                              label="Password" class="input-group--focused" @click:append="show = !show"></v-text-field>
                          </validation-provider>
                          <a class="text-left m-4">Forgot password</a>
                          <div class="text-center mt-3">
                            <v-btn rounded color="deep-purple accent-3" type="submit" dark>SIGN IN</v-btn>
                          </div>
                        </v-form>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" class="deep-purple accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hey!</h1>
                        <h5 class="text-center">Enter your personal details and start journay with us</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>

                <!-- signup form  -->

                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="deep-purple accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Already Registerd!</h1>
                        <h5 class="text-center">To Keep connected with us please login with your personnel info</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">Sign in</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 deep-purple--text text--accent-3">Create Account</h1>
                        <v-form @submit.prevent="onSignup">
                          <validation-observer>

                            <validation-provider v-slot="{ errors }" name="Name" rules="required|min:3">
                              <v-text-field v-model="name" :error-messages="errors" label="Name" prepend-icon="person"
                                type="text" color="deep-purple accent-3" />
                            </validation-provider>
                            <validation-provider v-slot="{ errors }" name="Email" rules="required|email">
                              <v-text-field v-model="email" :error-messages="errors" label="Email" prepend-icon="email"
                                type="text" color="input-group--focused" />
                            </validation-provider>
                            <validation-provider v-slot="{ errors }" name="password" :rules="{
                              required: true,
                              regex: '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$'
                            }">
                              <v-text-field :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" v-model="password"
                                :error-messages="errors" :type="show ? 'text' : 'password'" prepend-icon="lock"
                                label="Password" class="input-group--focused" @click:append="show = !show" />
                            </validation-provider>
                            <validation-provider v-slot="{ errors }" name="Phone Number" :rules="{
                              required: true,
                              digits: 10,
                              regex: '^(6|7|8|9)\\d{9}$'
                            }">
                              <v-text-field v-model="phoneNumber" :error-messages="errors" prepend-icon="phone"
                                type="number" :counter=10 label="Phone Number" class="input-group--focused" />
                            </validation-provider>
                            <v-select :items="items" v-model="gender" prepend-icon="fa-venus-mars" label="Gender"
                              required></v-select>
                            <validation-provider v-slot="{ errors }" name="Address" rules="required|max:140">
                              <v-text-field v-model="address" :error-messages="errors" prepend-icon="fa-address-card"
                                type="text" :counter=140 label="Address" class="input-group--focused" />
                            </validation-provider>
                            <v-container fluid>
                            <v-radio-group
                              v-model="role"
                              row
                            >
                              <v-radio
                                label="customer"
                                value="customer"
                              ></v-radio>
                              <v-radio
                                label="provider"
                                value="provider"
                              ></v-radio>
                            </v-radio-group>
                            </v-container>
                          </validation-observer>

                          <div class="text-center mt-4">
                            <v-btn rounded color="deep-purple accent-3" type="submit" dark>SIGN UP</v-btn>
                          </div>
                        </v-form>
                      </v-card-text>

                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Config from '@/config';
import axios from 'axios';
import { required, digits, email, max, min, regex } from 'vee-validate/dist/rules'
import { extend, ValidationProvider, ValidationObserver, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits.',

})

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})
extend('min', {
  ...min,
  message: '{_field_} must have minimum {length} characters',
})

extend('regex', {
  ...regex,
  message: 'Enter Valid {_field_}',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})
export default {
  name: 'UserLog',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {

    return {
      show: false,
      step: 1,
      items: ['Male', 'Female', 'Others'],
      name: '',
      email: '',
      password: '',
      phoneNumber: '',
      gender: '',
      address: '',
      role:''
    }
  },
  props: {
    source: String
  },
  methods: {
    async onSignin() {

      const loginDetails = {
        email: this.email,
        password: this.password
      }
      if (this.email == '' && this.password == '') {
        Vue.$toast.open({
          type: 'error',
          message: 'Please fill Entries',
          position: 'top'
        });
      }

      const login = await this.$store.dispatch('loginUser', loginDetails);
      if (login){
        Vue.$toast.open({
          message: 'logged In',
          type: 'success'
        });
        this.$router.push('/');
      } else {
        Vue.$toast.open({
          message: 'You are not authorized',
          type: 'error',
          position: 'top'
        });
      }


    },
    async onSignup() {

      const signupDetails = {
        name: this.name,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        gender: this.gender,
        address: this.address,
        role:this.role
      }
      console.log(signupDetails);
      const baseUrl = Config.baseUrl;

      const response = await axios.post(`${baseUrl}/auth/register`, signupDetails);
      console.log(response.data);

      if (response) {
        Vue.$toast.open({
          message: 'Signed up Successfully',
          type: 'succcess',
          position: 'bottom'
        })
        this.$router.push('/')
      } else {
        Vue.$toast.open({
          message: 'Something Went wrong please try again',
          type: 'error',
          position: 'top'
        })
      }
      return response;
    }
  }

}
</script>

<style scoped>
.bg-color {
  background: linear-gradient(to right, rgba(132, 250, 179, 1), rgba(143, 211, 244, 1))
}

.b-radius {
  border-radius: 15px;
}
</style>