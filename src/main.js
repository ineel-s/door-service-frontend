import './init'
import Vue from 'vue'
import '@/services/axiosconfig'
import store from './modules/store.index'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router/index';

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store,
  vuetify
}).$mount('#app')
