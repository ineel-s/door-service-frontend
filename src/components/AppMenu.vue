<template>
  <div>
    <b-navbar toggleable="lg" type="light"
    variant="info"
    class="meet-nav"
    >
      <b-navbar-brand href="/">Door Service</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto"  v-if="this.$store.state.auth.token!=''">
                <b-nav-text>
                    Hello <span class="text-primary">
                            {{this.$store.state.auth.name}}
                        </span>
                </b-nav-text>
            <b-nav-item  @click.prevent="SignOut">Sign Out</b-nav-item>
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
            this.$router.push('/');
            Vue.$toast.open({
                message:'User Loged out successfully',
                type:'success'
            });
        },
    }
}
</script>

<style scoped>
.bg-info.meet-nav{
  background-color:#2c4ef8 !important;
}
</style>