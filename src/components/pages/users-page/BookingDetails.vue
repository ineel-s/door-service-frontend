<template>
    <div class="container">
        <div class="d-flex justify-content-center" v-if="loading">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error.message }}
        </div>
        <!-- {{ bookings.bookings[0].userID }} -->
        <div v-if="!loading && !error && items.length !==0">
            <!-- Editable table -->
<div class="card">
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4">
    Booking Details
  </h3>
  <div class="card-body">
    <div id="table" class="table-editable">
      
      
      <table class="table table-bordered table-responsive table-striped text-center">

        <thead>
          <tr>
            <th class="text-center">User</th>
            <th class="text-center">Provider</th>
            <th class="text-center">Service Name</th>
            <th class="text-center">Booking Date</th>
            <th class="text-center">Booking Time</th>
            <th class="text-center">Address </th>
            <th class="text-center">Service Status</th>
            <th class="text-center">Payment Status</th>
            <th class="text-center">Remove</th>
          </tr>
        </thead>

        <tbody v-for="item in items" :key="item.id">
          <tr>
            <td class="pt-3-half" contenteditable="false">{{ item.userdetails[0].name }}</td>
            <td class="pt-3-half" contenteditable="true">{{item.provider[0].name}}</td>
            <td class="pt-3-half" contenteditable="false">{{item.service[0].name}}</td>
            <td class="pt-3-half" contenteditable="false">{{ item.bookingDate }}</td>
            <td class="pt-3-half" contenteditable="false">{{ item.bookingTime }}</td>
            <td class="pt-3-half" contenteditable="false">{{ item.serviceAddress }}</td>
            <td class="pt-3-half" contenteditable="true">{{ item.serviceStatus }}</td>
            <td class="pt-3-half" contenteditable="true">{{ item.paymentStatus }}</td>
            <td>
              <span class="table-remove"
                ><button type="button" class="btn btn-danger btn-rounded btn-sm my-0">
                  Remove
                </button></span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<!-- Editable table -->
        </div>
    </div>
</template>

<script>
// import Vue from 'vue';
import {getBookings} from '@/services/bookings';





export default {
    name : 'BookingDetails',
    data(){
        return{
            sortBy:'bookingDate',
            sortDesc:false,
            items:[],
            loading:this.loading,
            error:this.error,
        }
    },
    methods:{
       
    },
    async mounted(){
        this.loading = true;
        try{
            const bookings = await getBookings();
            
            this.items = bookings.bookings;
            console.log(this.items);
        }catch(error){
            this.error = error;
        }finally{
            this.loading = false;
        }
    },
};
</script>

<style scoped>
.pt-3-half {
  padding-top: 1.4rem;
}
</style>