// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import { LOAD_PORTFOLIO } from './store/mutation-types';

Vue.config.productionTip = false;
Vue.config.performance = false;

// Global filters
Vue.filter('currency', value => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});

// Init app
// TODO: Where is the best place to add initialization code in Vue?
if (store.state.portfolio.id !== null) {
  store.dispatch(LOAD_PORTFOLIO);
}
