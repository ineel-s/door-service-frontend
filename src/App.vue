<template>
  <div id="app">
    <v-app>
  <AppMenu />
    <router-view></router-view>
  <FooterPage></FooterPage>
  </v-app>
  </div>
  
</template>

<script>
import AppMenu from './components/AppMenu.vue';
import FooterPage from './components/pages/FooterPage.vue';
export default {
  name: 'App',
  components:{
    AppMenu,
    FooterPage
  }
}
</script>

<style>


</style>
