import { ADD_TO_PORTFOLIO, REMOVE_FROM_PORTFOLIO } from '../mutation-types';

const state = {
  funds: 1000,
  stocks: {},

};
const getters = {
  portfolio(state, getters, rootState) {
    return Object.keys(state.stocks).map(name => ({
      name,
      quantity: state.stocks[name],
      price: rootState.stocks.find(s => s.name === name).price,
    }));
  },
  total(state, getters, rootState) {
    return Object.keys(state.stocks)
      .map(name => ({
        price: rootState.stocks.find(s => s.name === name).price,
        quantity: state.stocks[name],
      }))
      .reduce((total, current) => total + (current.price * current.quantity), 0);
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  [ADD_TO_PORTFOLIO]: (state, { name, quantity, price }) => {
    state.stocks = { ...state.stocks, [name]: (state.stocks[name] || 0) + quantity };
    state.funds -= (price * quantity);
  },
  [REMOVE_FROM_PORTFOLIO]: (state, { name, quantity, price }) => {
    if (state.stocks[name] - quantity === 0) {
      const newStock = { ...state.stocks };
      delete newStock[name];
      state.stocks = newStock;
    } else {
      state.stocks = { ...state.stocks, [name]: state.stocks[name] - quantity };
    }

    state.funds += (price * quantity);
  },
};
/* eslint-enable no-param-reassign */

export default {
  state,
  mutations,
  getters,
};
