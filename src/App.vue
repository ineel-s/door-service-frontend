<template>
  <div id="app">
  <AppMenu />
    <router-view></router-view>
  <FooterPage></FooterPage>
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
