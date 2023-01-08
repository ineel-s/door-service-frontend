<template>
    <section>
        <div class="container py-5">
            <div class="alert alert-danger" role="alert" v-if="error">
                {{ error.message }}
            </div>
            <div v-if="!error && items.length !== 0">
                <div class="row justify-content-center mb-3">
                    <div class="col-md-12 col-xl-10">
                        <div class="card shadow-0 border rounded-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                                            <img :src="items.image" class="w-100" />
                                            <a href="#!">
                                                <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);">
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <h5>{{ items.name }}</h5>
                                        <p class=" mb-4 mb-md-0 ">
                                            {{ items.description }}
                                        </p>
                                        <p class="text-primary mb-4 mb-md-0 ">
                                            Service time : <span class="text-info"> {{ items.serviceTime }}</span>
                                        </p>
                                        <p class="h6">
                                            {{ items.category[0].name }}
                                        </p>
                                        <div>
                                            <span class="h5"> Provider:</span>
                                            <hr>
                                            <div class="d-flex justify-content-between">
                                                <span><span class="h6">Name -</span>{{ items.provider[0].name }} </span>
                                                <span> <span class="h6">Address -</span> 
                                                {{items.provider[0].address}}
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                        <div class="d-flex flex-row align-items-center mb-1">
                                            <span class="mb-1 me-1">&#8377; {{ items.price }} &nbsp; </span>
                                            <span class="text-danger"><s>&#8377; {{
                                                items.price * 1.5
                                            }}</s></span>&nbsp;
                                        </div>
                                        <div class="d-flex flex-row align-items-center mb-1">
                                            <h4 class="mb-1 me-1">Total = &#8377; {{ items.price *1.18 }} &nbsp; </h4>
                                            <em class="text-secondary">&#8377;{{ items.price }} + &#8377;{{ items.price*.18 }} gst</em>
                                        </div>
                                        <div class="d-flex flex-column mt-4">
                                            <button class="btn bg-success text-white btn-sm mt-2" type="button"
                                                disabled>
                                                Added
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <template>
                                <div class="d-flex justify-content-center h3 ">Enter Details</div>
                                <v-row >
                                    <v-col>
                                        <v-card ref="form">
                                            <v-card-text>
                                            <v-form @submit.prevent="bookNow">
                                                <validation-observer>
                                                    <validation-provider v-slot="{ errors }" 
                                                    name="Address"
                                                    rules="required|max:60">
                                                <v-text-field  v-model="serviceAddress"
                                                :error-messages="errors"
                                                 label="Address"
                                                 counter="60"
                                                 required/>
                                                 </validation-provider>
                                                 <validation-provider 
                                                 v-slot="{ errors }"
                                                  name="bookingDate" 
                                                  rules="required">
                                                <v-text-field  
                                                    v-model="bookingDate"
                                                    :error-messages="errors"
                                                    type="date"
                                                    label="Booking Date"
                                                    required/>
                                                </validation-provider>
                                                <validation-provider 
                                                 v-slot="{ errors }"
                                                  name="bookingTime" 
                                                  rules="required">
                                                    <v-text-field  
                                                    v-model="bookingTime"
                                                    :error-messages="errors"
                                                    type="time"
                                                    label="Booking Time"
                                                    required/>
                                                    </validation-provider>
                                                    <validation-provider 
                                                 v-slot="{ errors }"
                                                  name="paymentStatus" 
                                                  rules="required">
                                                <b-form-select v-model="paymentStatus"
                                                :error-messages="errors"
                                                class="mb-3">
                                                    <b-form-select-option value="Pending" disabled>Please select payement mode</b-form-select-option>
                                                    <b-form-select-option value="C.O.D">Cash on delivery</b-form-select-option>
                                                    <b-form-select-option value=null disabled>Pay Now</b-form-select-option>
                                                </b-form-select>
                                                </validation-provider>
                                            </validation-observer>
                                            <v-divider class="mt-12"></v-divider>
                                            <v-btn color="primary" text type="submit">
                                                Book Now
                                            </v-btn>
                                        </v-form>
                                    </v-card-text>
                                    </v-card>
                                    </v-col>
                                </v-row>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from "vue";
import { getprebookingService } from '@/services/service';
import {bookService} from '@/services/bookings';
import {
  required,
  max
} from "vee-validate/dist/rules";
import {
  extend,
  ValidationProvider,
  ValidationObserver,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

export default {
    name: 'BookService',
    components:{
        ValidationObserver,
        ValidationProvider
    },
    data() {
        return {
            id: '',
            items: [],
            error:this.error,
            value:null,
            paymentStatus :'Pending',
            serviceAddress:'',
            bookingDate:'',
            bookingTime:'',
            providerID:'',
            serviceID:'',
            userID:this.$store.state.auth.id,
        }
    },
    async mounted() {
        console.log(this.$route);
        this.id = this.$route.params.id;
        try {
            const service = await getprebookingService();
            console.log(service);
            for (let i = 0; i < service.data.length; i++) {
                if (service.data[i]._id === this.id) {
                    this.items = service.data[i];
                    console.log(this.items);
                }
            }
        } catch (error) {
            this.error=error
        }
    }, 
    methods: {
     async bookNow(){
        this.providerID = this.items.providerID;
        console.log(this.providerID);
        console.log(this.userID);
        const bookingDetails={
            serviceID: this.id,
            providerID:this.items.providerID,
            bookingDate:this.bookingDate,
            bookingTime:this.bookingTime,
            serviceAddress:this.serviceAddress,
            paymentStatus:this.paymentStatus,
        };
        console.log(bookingDetails);
        try {
            console.log(this.userID);
            const booking = await bookService(this.userID, bookingDetails);
            console.log(booking.data);            
            Vue.$toast.open("Service booked");
            this.$router.push('/bookingstatus')
        } catch (error) {
            Vue.$toast.open({
                type: 'error',
                message: error.message,
                position:'top'
            })
        }
      },
    }
}
</script>

<style scoped>
@media (min-width: 1025px) {
    .h-custom {
        height: 100vh !important;
    }
}
</style>