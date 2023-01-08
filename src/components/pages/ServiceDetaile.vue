<template>
    <section>
  <div class="container py-5">
    <div class="d-flex justify-content-center" v-if="loading">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error.message }}
    </div>
    <div v-if="!loading && !error && items.length !==0">
      <div v-for="item in items" :key="item.id">
      <div class="row justify-content-center mb-3">
        <div class="col-md-12 col-xl-10">
          <div class="card shadow-0 border rounded-3">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div class="bg-image hover-zoom ripple rounded ripple-surface">
                    <img :src="item.image"
                      class="w-100" />
                    <a href="#!">
                        <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <h5>{{ item.name }}</h5>
                  <p class=" mb-4 mb-md-0 ">
                    {{ item.description }}
                  </p>
                  <p class="text-primary mb-4 mb-md-0 ">
                    Service time : <span class="text-info"> {{ item.serviceTime }}</span>
                  </p>
                  <p>
                    {{ item.cat[0].name }}
                  </p>
                </div>
                <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div class="d-flex flex-row align-items-center mb-1">
                    <h4 class="mb-1 me-1">&#8377; {{ item.price }} &nbsp; </h4>
                    <span class="text-danger"><s>&#8377; {{ item.price * 1.5 }}</s></span>&nbsp;
                    <em class="text-secondary">exclusive gst</em>
                  </div>
                  <router-link
                  :to="{name:'bookservice', path:'/bookservice',params:{id:item._id}}"
                  >
                  <div class="d-flex flex-column mt-4">
                    <button class="btn btn-outline-primary btn-sm mt-2"  
                    type="button"
                    >
                      Book Service
                    </button>
                  </div>
                </router-link>
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
</template>

<script>
import {getAllService} from '@/services/service';
export default {
    name:'ServiceDetaile',
    data(){
      return {
        loading: this.loading,
        error:this.error,
        items:[],
        serviceID:''
      }
    },
    async mounted(){
      this.loading=true;
      try {
        const service = await getAllService();
        console.log(service.data);
        this.items = service.data
        
      } catch (error) {
        this.error=error;
      }finally{
        this.loading = false;
      }
    },
    methods:{
      async bookService(){
        // this.$router.push({name:'/bookservice', params:`${id}`} )
        console.log();
      }
    }
}
</script>

<style scoped>
@media (max-width: 767.98px) {
   .border-sm-start-none { 
    border-left: none !important; 
    }
}
</style>