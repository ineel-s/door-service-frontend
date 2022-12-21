<template>
  <div class="container my-5">
      <div class="d-flex justify-content-center align-items-center">
        <b-card class="card w-50 text-center b-radius bg-color ">
            <h2>LogIn</h2>
            <b-form @submit.prevent="onSubmit">
                <b-form-group class="mb-4 mt-4 ">
                    <b-form-input 
                      id="useremail"
                      type="email"
                      v-model="email"
                      placeholder="Enter your email "
                      required
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group class="mb-4">
                    <b-form-input 
                      id="userpassword"
                      type="password"
                      v-model.trim="password"
                      placeholder="Enter your password"
                      required
                    ></b-form-input>
                </b-form-group>
                <b-form-group class="mb-4">
                    <b-card-text class="text-justify">
                        <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">
                            Remember me
                        </b-form-checkbox>
                    </b-card-text>
                    <b-button type="submit" class="w-100 signin-btn" variant="primary">LogIn</b-button>
                </b-form-group>
                <b-form-group>
                    <b-card-text class="text-center text-muted">
                        Don't have an account? <b-link to="/sign-up">SignUp</b-link>
                    </b-card-text>
                </b-form-group>
            </b-form>
        </b-card>
    </div>
    </div>  
</template>

<script>
import Vue from 'vue';
export default {
    name: 'UserLogin',
    data(){
      return {
        email:'',
        password:''
      }
    },
    methods:{
      async onSubmit(){
        const loginDetails={
          email:this.email,
          password:this.password
        }
        const login = await this.$store.dispatch('loginUser',loginDetails);
        if(login){
          Vue.$toast.open({
            message:'logged In',
            type:'success'
          });
          this.$router.push('/home');
        }else{
          Vue.$toast.open({
            message:'You are not authorized',
            type:'error',
            position:'bottom'
          });
        }
      }
    }
}
</script>

<style scoped>
.bg-color{
  background: linear-gradient(to right, rgba(132,250,179,1),rgba(143,211,244,1))
}

.b-radius{
  border-radius: 15px;
}
</style>