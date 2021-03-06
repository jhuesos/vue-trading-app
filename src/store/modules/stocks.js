import { RANDOMIZE_PORTFOLIO } from '../mutationTypes';
import { NEXT_DAY } from '../actionTypes';

const state = [
  { name: 'BMW', price: 110 },
  { name: 'Google', price: 200 },
  { name: 'Apple', price: 250 },
  { name: 'Twitter', price: 8 },
  { name: 'Microsoft', price: 132 },
  { name: 'Amazon', price: 75 },
  { name: 'Santander', price: 80 },
  { name: 'Spotify', price: 15 },
  { name: 'Facebook', price: 100 },
];

/* eslint-disable no-param-reassign */
const mutations = {
  [RANDOMIZE_PORTFOLIO]: (state) => {
    const getNewStockValue = (price) => {
      // Max variation per day of 20%
      const difference = Math.random() * (0.20);
      const upOrDown = (Math.floor((Math.random() * 100) + 1)) % 2 === 0 ? +1 : -1;
      return price + (price * difference * difference * upOrDown);
    };

    state.forEach((stock) => {
      stock.price = getNewStockValue(stock.price);
    });
  },
};

const actions = {
  [NEXT_DAY]: ({ commit }) => {
    commit(RANDOMIZE_PORTFOLIO);
  },
};
/* eslint-enable no-param-reassign */

const getters = {
  stocks: state => state,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
