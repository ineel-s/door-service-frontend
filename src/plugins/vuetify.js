import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify(
    {
        icons: {
            iconfont: 'md' || 'fa' 
          },
          theme: {
            themes: {
               
              dark: {
                background: colors.shades.grey, // If not using lighten/darken, use base to return hex
              },
            },
          },
    }
);