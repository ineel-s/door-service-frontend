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
            <div v-if="!loading && !error && items.length !== 0">
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
                                        <p class="font-bold">
                                            {{ items.category[0].name }}
                                        </p>
                                        <div>
                                            <span class="h5"> Provider:</span>
                                            <hr>
                                            <div class="d-flex justify-content-between">
                                                <span><span class="h6">Name -</span>{{ items.provider[0].name }} </span>
                                                <span> <span class="h6">Address -</span> {{
                                                    items.provider[0].address
                                                }}</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                        <div class="d-flex flex-row align-items-center mb-1">
                                            <h4 class="mb-1 me-1">&#8377; {{ items.price }} &nbsp; </h4>
                                            <span class="text-danger"><s>&#8377; {{
                                                items.price * 1.5
                                            }}</s></span>&nbsp;
                                            <em class="text-secondary">exclusive gst</em>
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
                                <v-row justify="between">
                                    <v-col>
                                        <v-card ref="form">
                                            <v-card-text>
                                                <v-text-field ref="address" v-model="address" :rules="[
                                                    () => !!address || 'This field is required',
                                                    () => !!address && address.length <= 60 || 'Address must be less than 60 characters',
                                                    addressCheck
                                                ]" label="Address Line"  counter="60" required></v-text-field>
                                                <v-text-field  v-model="bookingDate"
                                                type="date"
                                                    label="Booking Date" required></v-text-field>
                                                    <v-text-field  v-model="bookingTime"
                                                type="time"
                                                    label="Booking Time" required></v-text-field>
                                            </v-card-text>
                                            <v-divider class="mt-12"></v-divider>
                                            <v-card-actions>
                                                <v-btn text>
                                                    Cancel
                                                </v-btn>
                                                <v-spacer></v-spacer>
                                                <v-slide-x-reverse-transition>
                                                    <v-tooltip v-if="formHasErrors" left>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-btn icon class="my-0" v-bind="attrs" @click="resetForm"
                                                                v-on="on">
                                                                <v-icon>mdi-refresh</v-icon>
                                                            </v-btn>
                                                        </template>
                                                        <span>Refresh form</span>
                                                    </v-tooltip>
                                                </v-slide-x-reverse-transition>
                                                <v-btn color="primary" text @click="submit">
                                                    Submit
                                                </v-btn>
                                            </v-card-actions>
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
export default {
    name: 'BookService',
    data() {
        return {
            id: '',
            items: [],
            errorMessages: '',
      address: null,
      formHasErrors: false,

        }
    },
    computed: {
      form () {
        return {
          address: this.address,
        }
      },
    },
    watch: {
      name () {
        this.errorMessages = ''
      },
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
                    console.log("inside if");
                }
            }
        } catch (error) {
            Vue.$toast.open({
                type: 'error',
                message: error.message,
                position: 'top'
            })
        }
    },
    methods: {
        
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false
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