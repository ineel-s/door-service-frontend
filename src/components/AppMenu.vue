<template>
  
  <div class="nav-css">
    <b-navbar toggleable="lg" type="dark" variant="info"
    class="ds-nav">
    <b-navbar-brand href="/">Door Service</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/services">Services</b-nav-item>

        <b-nav-item 
        v-if="this.$store.state.auth.role==='admin'"
        href="/userdetails">UserDetails</b-nav-item>
        <b-nav-item 
        v-if="this.$store.state.auth.role==='admin'"
        href="/bookings">Bookings</b-nav-item>
        <b-nav-item 
        v-if="this.$store.state.auth.role==='admin' || this.$store.state.auth.role==='provider'"
        href="/addservice">Add Service</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 button" type="submit">Search</b-button>
        </b-nav-form>
        <b-nav-item
          v-if="this.$store.state.auth.token==''"  
          href="/login">Login</b-nav-item>
          <b-nav-item-dropdown
          v-else
          right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <v-avatar color="indigo">
                <v-icon dark>
                  mdi-account-circle
                </v-icon>
              </v-avatar>
            </template>
            <b-dropdown-item @click.prevent="profile">Profile</b-dropdown-item>
            <b-dropdown-item @click.prevent="SignOut">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
    name:'AppMenu',
    methods:{
        SignOut(){
            this.$store.dispatch('logoutUser');
            this.$router.push('/home');
            Vue.$toast.open({
                message:'User Loged out successfully',
                type:'success',
                position:'top-right'
            });
        },
        profile(){
          if(this.$store.state.auth.role!==''){
            this.$router.push('/profile');
          }
        }
    }
}
</script>

<style scoped>

.bg-info.ds-nav{
  background-color: #6860a7 !important;
}

.button{
  background-color:#d7d3f3;
}
.nav-css{
  width:100%;  
}


</style>