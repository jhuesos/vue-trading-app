import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    funds: '10000',
    portfolio: [],
    stocks: [],
  },
});
