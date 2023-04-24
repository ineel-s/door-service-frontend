<template>
  <div>
  <div class="py-5 h-100 w-100" >
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white"
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;" >
              <div v-if="user.gender=='Female'">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
              </div>
              <div v-else>
                <img src="https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent-Image.png"
                alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
              </div>
              <h5>{{user.name}}</h5>
              <p>{{user.role}}</p>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Information</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{{user.email}}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Phone</h6>
                    <p class="text-muted">{{user.phoneNumber}}</p>
                  </div>
                </div>
                <h6>Services</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Address</h6>
                    <p class="text-muted">{{ user.address }}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Gender</h6>
                    <p class="text-muted">{{ user.gender }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getUserDetails } from '@/services/userdetails';
import{deleteUser} from '@/services/userdetails'
export default {
    name:'SingleUser',
    data(){
        return{
            id:'',
            user:{}
        }
    },
    async mounted(){
        console.log(this.$route);
        this.id=this.$route.params.id;

        try{
            const user = await getUserDetails(this.id);
            console.log(user);
            this.user=user
        }catch(error){
            Vue.$toast.open({
                type:'error',
                message:'No user find',
                position:'top'
            })
        }
    },
    methods:{
      async deleteUser(){
        this.id=this.$route.params.id;

        if(window.confirm("Do you want to delete this user?")){
          try {
            const user = await deleteUser(this.id);
            if(!user){
              Vue.$toast.open({
                type:'error',
                message:'User Not Deleted!',
                position:'top'
              })
            }
            Vue.$toast.open("User Deleted !")
            this.$router.push('/userdetails')
          } catch (error) {
            Vue.$toast.open({
              type:'error',
              message:error.message,
              position:"top"
            })
          }

        }
      }
    }
}
</script>

<style scoped>
.gradient-custom {

background: #657df6;

background: linear-gradient(to right bottom, rgb(101, 159, 246), rgba(253, 160, 133, 1))
}
</style>