import {
  ADD_TO_PORTFOLIO,
  REMOVE_FROM_PORTFOLIO,
  SET_PORFOLIO,
} from '../mutationTypes';
import {
  SAVE_PORTFOLIO,
  LOAD_PORTFOLIO,
  BUY_STOCK,
  SELL_STOCK,
} from '../actionTypes';
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
  portfolioId(state) {
    return state.id;
  },
  funds(state) {
    return state.funds;
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  [ADD_TO_PORTFOLIO]: (state, { name, quantity, price }) => {
    // TODO: use getters to get stuff from others
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
  [SET_PORFOLIO]: (state, portfolio) => {
    state.funds = portfolio.funds;
    state.stocks = { ...portfolio.stocks };
  },
};

const actions = {
  [BUY_STOCK]: function buyStock({ commit }, stock) {
    commit(ADD_TO_PORTFOLIO, stock);
  },
  [SELL_STOCK]: function sellStock({ commit }, stock) {
    commit(REMOVE_FROM_PORTFOLIO, stock);
  },
  [SAVE_PORTFOLIO]: async function save({ state }) {
    const { data } = await savePortfolio(state);
    const { name: id } = data;

    if (state.id === null) {
      state.id = id;
    }

    return data;
  },

  [LOAD_PORTFOLIO]: async function load({ commit }) {
    const response = await loadPortfolio();
    const { data } = response;

    commit(SET_PORFOLIO, data);

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
