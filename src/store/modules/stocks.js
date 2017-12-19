import { RANDOMIZE_PORTFOLIO } from '../mutationTypes';
import { NEXT_DAY } from '../actionTypes';

const state = [
  { name: 'BMW', price: 110 },
  { name: 'Google', price: 200 },
  { name: 'Apple', price: 250 },
  { name: 'Twitter', price: 8 },
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

export default {
  state,
  mutations,
  actions,
};
