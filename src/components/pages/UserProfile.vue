<template>
  <div>
  <section class="">
  <div class="py-5 h-100" id="padin">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white"
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;" >
              <div v-if="this.$store.state.auth.gender==='Female'">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
              </div>
              <div v-else>
                <img src="https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent-Image.png"
                alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
              </div>
              <h5>{{this.$store.state.auth.name}}</h5>
              <p>{{this.$store.state.auth.role}}</p>
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Information</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{{this.$store.state.auth.email}}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Phone</h6>
                    <p class="text-muted">{{this.$store.state.auth.name}}</p>
                  </div>
                </div>
                <h6>Services</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Recent</h6>
                    <p class="text-muted">Lorem ipsum</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Most Viewed</h6>
                    <p class="text-muted">Dolor sit amet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </div>
</template>

<script>
// import { getUserDetails } from '@/services/userdetails';
export default {
  name:'UserProfile',
  
}
</script>

<style scoped>


.gradient-custom {

background: #657df6;

background: linear-gradient(to right bottom, rgb(101, 159, 246), rgba(253, 160, 133, 1))
}

</style>