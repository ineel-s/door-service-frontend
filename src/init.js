import Vue from "vue";
import Vuex from "vuex";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import Router from 'vue-router';
import VueToast from 'vue-toast-notification';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import moment from 'moment';

import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-toast-notification/dist/theme-default.css'



Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.use(Router);
Vue.use(VueToast);
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD/MMM/YYYY')
    }
});
Vue.component('font-awesome-icon', FontAwesomeIcon)