import {
  ADD_TO_PORTFOLIO,
  REMOVE_FROM_PORTFOLIO,
  SAVE_PORTFOLIO,
  LOAD_PORTFOLIO,
} from '../mutationTypes';
import { savePortfolio, loadPortfolio } from '../../services/portfolioSync';
import { STORAGE_KEY } from '../../config';

const state = {
  id: localStorage.getItem(STORAGE_KEY),
  funds: 10000,
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

const actions = {
  [SAVE_PORTFOLIO]: async function save(context) {
    const { data } = await savePortfolio(context.state);
    const { name: id } = data;

    if (context.state.id === null) {
      context.state.id = id;
    }

    return data;
  },

  [LOAD_PORTFOLIO]: async function load(context) {
    const response = await loadPortfolio();
    const { data } = response;

    context.state.funds = data.funds;
    context.state.stocks = { ...data.stocks };

    return response;
  },
};
/* eslint-enable no-param-reassign */

export default {
  state,
  mutations,
  getters,
  actions,
};