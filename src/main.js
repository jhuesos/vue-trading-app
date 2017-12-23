// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App';
import router from './router';
import store from './store';

import('../node_modules/vuetify/dist/vuetify.min.css');

Vue.config.productionTip = false;
Vue.config.performance = false;

// Use Vuetify
Vue.use(Vuetify);

// Global filters
Vue.filter('currency', value => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
