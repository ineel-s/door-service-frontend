<template>
  <div class="container">
    <form @submit.prevent="onsubmit" enctype="multipart/form-data">
      <v-text-field
        v-model="name"
        label="Service Name"
        type="text"
        color="deep-purple accent-3"
      />
      <v-text-field
        v-model="price"
        append-icon="fa-rupee-sign"
        type="number"
        label="Price"
        class="input-group--focused"
      />

      <div class="d-flex align-center">
        <span class="text-muted">Category</span>
        <b-form-select
          class="ml-5"
          v-model="categoryID"
          :options="options"
          value-field="_id"
          text-field="name"
        ></b-form-select>
      </div>
      <v-text-field
        v-model="discription"
        type="text"
        :counter="140"
        label="Discription"
      />
      <v-text-field
        v-model="serviceTime"
        type="text"
        label="Service Duration"
      />
      <div class="text-center mt-4">
        <v-btn rounded color="deep-purple accent-3" type="submit">Add</v-btn>
      </div>
    </form>
  </div>
</template>

<script>
import { getAllCategory } from "@/services/category";
import { registerService } from "@/services/service";
import Vue from "vue";
export default {
  name: "ProviderPage",
  data() {
    return {
      name: "",
      price: "",
      categoryID: "",
      discription: "",
      options: [],
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
        image: this.image,
        price: this.price,
        categoryID: this.categoryID,
        discription: this.discription,
        serviceTime: this.serviceTime,
        providerID: this.$store.state.auth.id,
      };
      console.log(servicedetails);
      try {
        const response = await registerService(servicedetails);
        console.log(response);
        Vue.$toast.open({
          type: "success",
          message: "Service Registerd Successfully",
          position: "top-left",
        });
        this.$router.push("/services");
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