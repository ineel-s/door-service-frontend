<template>
  <div class="container">
    <h1 align="center">On Your Door Service</h1>
    <hr>

    <!-- <img src="https://img.freepik.com/free-photo/checking-current-laptop-circuit-board_1098-13759.jpg?w=900&t=st=1672850800~exp=1672851400~hmac=5c15f6abb6e215b701c9f61ff42bdeec90d0772b524d47a0e0957f3498f769ad" alt=""> -->

    <hr>
    <h1 align="center">Our Services</h1>
    <ServiceDetaile/>
  </div>
</template>

<script>
import ServiceDetaile from '@/components/pages/ServiceDetaile.vue'
export default {
    name: 'HomePage',
    components:{
      ServiceDetaile
}
}
</script>

<style scoped>

</style>