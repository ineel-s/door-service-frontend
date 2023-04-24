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

        <tbody v-for=" (item, i) in items.slice().reverse()" :key="i">
          
          <tr>
            <td class="pt-3-half" contenteditable="false">{{ item.userdetails[0].name }}</td>
            <td class="pt-3-half" contenteditable="false">{{item.provider[0].name}}</td>
            <td class="pt-3-half" contenteditable="false">{{item.service[0].name}}</td>
            <td class="pt-3-half" contenteditable="false">{{ item.bookingDate }}</td>
            <td class="pt-3-half" contenteditable="false">{{ item.bookingTime }}</td>
            <td class="pt-3-half" contenteditable="false">{{ item.serviceAddress }}</td>
            <td class="pt-3-half" contenteditable="false">{{ item.serviceStatus }}</td>
            <td class="pt-3-half" contenteditable="false">{{ item.paymentStatus }}</td>
            <td>
              <span>
                <button type="button"
                        class="btn btn-danger btn-rounded btn-sm my-0"
                        v-on:click=" deleteDetails(item.id)"
                        >
                  Delete
                </button>
              </span>
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
import Vue from 'vue';
import {getBookings,deleteBookingDetailes} from '@/services/bookings';
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
    methods:{
      async deleteDetails(id){
        if(window.confirm("Do you want to delete this user?")){
          try {
            const deleteBooking = await deleteBookingDetailes(id);
            if(!deleteBooking){
              Vue.$toast.open({
                type:'error',
                message:'Booking Not Deleted!',
                position:'top'
              })
            }
            Vue.$toast.open("Booking Details Deleted !")
            window.location.reload();
          } catch (error) {
            Vue.$toast.open({
              type:'error',
              message:error.message,
              position:"top"
            })
          }

        }
      }
    },
};
</script>

<style scoped>
.pt-3-half {
  padding-top: 1.4rem;
}
</style>