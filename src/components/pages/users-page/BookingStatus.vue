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
                    <img :src="item.service[0].image"
                      class="w-100" />
                    <a href="#!">
                        <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <h5>{{ item.service[0].name }}</h5>
                  <small>ID {{ item._id }}</small>
                  <p class="text-primary mb-4 mb-md-0 ">
                    Service time : <span class="text-info"> {{ item.service[0].serviceTime }}</span><br>
                    Status :
                    <span v-if="item.serviceStatus==='Success'">
                        <span class="bg-success text-white"> {{ item.serviceStatus }}</span>
                    </span>
                    <span v-else-if="item.serviceStatus==='Cancelled'">
                        <span class="bg-danger text-white"> {{ item.serviceStatus }}</span>
                    </span>
                    <span v-else-if="item.serviceStatus==='Accepted'">
                        <span class="p-1 bg-warning text-white"> {{ item.serviceStatus }}</span>
                    </span>
                    <span v-else>
                        <span class="bg-info text-white"> {{ item.serviceStatus }}</span>
                    </span>
                  </p>
                  <div v-if="item.isCanceledBy">
                    <span>Cancelled By {{ item.isCanceledBy }}</span>
                  </div>
                  <span>Booking Date : {{ item.bookingDate | formatDate }}</span>
                  <div>

                    <span>Booking Time : {{ item.bookingTime }}</span>
                  </div>
                  <hr>
                  <p>
                    <span class="h6">Provider Name :</span> <span> {{ item.provider[0].name }}</span><br>
                    <span class="h6">Address: &nbsp;</span> {{ item.serviceAddress }}
                  </p>
                </div>
                <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div class="d-flex flex-row align-items-center mb-1">
                                            <h4 class="mb-1 me-1">Total = &#8377; {{ item.serviceCost }} &nbsp; </h4> 
                                        </div>
                                    <em class="text-secondary">( &#8377;{{ item.service[0].price }} + &#8377;{{ item.service[0].price*.18 }} gst )</em>
                  <div class="d-flex flex-column mt-4">
                    <button class="btn btn-outline-danger btn-sm mt-2"  
                    type="button"
                    v-on:click="cancelService(item._id)"
                    :disabled="item.isCanceledBy?'' :disabled"
                    >
                    Cancel Service
                    </button>
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
</section>
  </template>
  
  <script>
//   import Vue from 'vue';
import { getBookings } from '@/services/bookings';
import {updateBooking} from '@/services/bookings'
  export default {
      name:'BookingStatus',
      data(){
        return{
            loading:this.loading,
            error:this.error,
            id:'',
            items:[],
            btn:'',
            isCanceledBy:'',
            disabled:false
        }
      },
      async mounted(){
        this.id= this.$store.state.auth.id;
        
        console.log(this.id);
        this.loading=true;
        try {
            const userData = await getBookings();
            console.log("User Data",userData.bookings);
            for (let i = 0; i < userData.bookings.length; i++) {
                if (userData.bookings[i].userID === this.id) {
                    this.items.push(userData.bookings[i]);
                }
            }
            console.log(this.items);
        } catch (error) {
            this.error=error;
        }finally{
            this.loading=false;
        }

      },
      methods:{
       async cancelService(e){
        
        const _id = e;
        console.log(_id);

        const updatedetails ={
            isCanceledBy:this.$store.state.auth.role,
            serviceStatus:"Cancelled"
        }
        console.log(updatedetails);
           if( window.confirm("Do you really want to cancel service?")){
            console.log("service canceled");
            const cancel = await updateBooking(_id,updatedetails);
            console.log(cancel);
            window.location.reload();
            
           }   
        }
        
      }
  }
  </script>
  
  <style>
  
  </style>