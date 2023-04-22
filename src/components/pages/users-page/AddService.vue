<template>
  <div class="container">
    <h2 align="center">Register New Service</h2>
    <v-app>

    <v-row >
      <v-col>
        <v-card ref="form" class="p-4">
          <form @submit.prevent="onsubmit" enctype="multipart/form-data">
            
          <validation-observer>
                            <validation-provider
                              v-slot="{ errors }"
                              name="Service Name"
                              rules="required|min:3"
                            >
                              <v-text-field
                                v-model="name"
                                :error-messages="errors"
                                label="Service Name"
                                type="text"
                              />
                            </validation-provider>
                            <validation-provider
                            v-slot="{ errors }"
                              name="Price"
                              rules="required"
                            >
                            <v-text-field
                            v-model="price"
                            :error-messages="errors"
                            type="double"
                            label="Price"
                            class="input-group--focused"
                            />
                          </validation-provider>
                         <v-select :items="options"
                            item-text ="name"
                            item-value="_id"
                            v-model="categoryID" 
                            :rules="[v => !!v || 'Item is required']" 
                            label="Category"
                            required></v-select>
                            <validation-provider
                            v-slot={errors}
                            name="Discription"
                            rules="required|max:140"
                            >
                              <v-text-field
                                  v-model="discription"
                                  :error-messages="errors"
                                  type="text"
                                  :counter="140"
                                  label="Discription"
                                />
                            </validation-provider>
                            <validation-provider
                            v-slot="{errors}"
                            name="duration"
                            rules="required"
                            >
                              <v-text-field
                                  v-model="serviceTime"
                                  :error-messages="errors"
                                  type="time"
                                  label="Service Duration"
                                />


                            </validation-provider>
                          </validation-observer>

      
      <div class="text-center text-color-white mt-4">
        <v-btn rounded color="deep-purple accent-3"  type="submit" dark>Register</v-btn>
      </div>
    </form>
    </v-card>
    </v-col>
    </v-row>
  </v-app>
  </div>
</template>

<script>
import { getAllCategory } from "@/services/category";
import { registerService } from "@/services/service";
import {extend, ValidationObserver, ValidationProvider , setInteractionMode} from "vee-validate";
import {min, max} from 'vee-validate/dist/rules'
import Vue from "vue";
setInteractionMode('eager')

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});
extend("min", {
  ...min,
  message: "{_field_} must have minimum {length} characters",
});
export default {
  name: "ProviderPage",
  components:{
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      name: "",
      price: "",
      categoryID: "",
      discription: "",
      options:[],
      serviceTime: "",
      providerID: "",
    };
  },
  async mounted() {
    const category = await getAllCategory();
    console.log(category.data);
    this.options = category.data;
  },
  methods: {
    async onsubmit() {
      const servicedetails = {
        name: this.name,
        price: this.price,
        categoryID: this.categoryID,
        discription: this.discription,
        serviceTime: this.serviceTime,
        providerID: this.$store.state.auth.id,
      };
      console.log(servicedetails);
      try {
        if(this.name==='' && 
        this.price==='' && 
        this.serviceTime==='' &&
        this.discription===''
        ){
          Vue.$toast.open({
            type:'error',
            message:'Please fill all required fields',
            position:'top'
          });
        }else{
        const response = await registerService(servicedetails);
        console.log(response);
        Vue.$toast.open({
          type: "success",
          message: "Service Registerd Successfully",
          position: "top-left",
        });
        this.$router.push("/services");
      }
      } catch (error) {
        Vue.$toast.open({
          type: "error",
          message: error.message,
          position: "top",
        });
      }
    },
  },
};
</script>

<style>
</style>