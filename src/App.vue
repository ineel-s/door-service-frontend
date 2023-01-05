<template>
  <div id="app">
  <AppMenu />
    <router-view></router-view>
  </div>
  
</template>

<script>
import AppMenu from './components/AppMenu.vue';
export default {
  name: 'App',
  components:{
    AppMenu
  }
}
</script>

<style>


</style>
