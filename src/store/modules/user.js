import { SIGN_UP, LOG_IN, LOAD_TOKEN_INFO_FROM_LOCAL, LOG_OUT } from '../actionTypes';
import { SET_USER_TOKEN_INFO, CLEAR_TOKEN_INFO } from '../mutationTypes';
import { signup, login } from '../../services/auth';
import { getTokenInfo, setTokenInfo, clearTokenInfo } from '../../services/localStorage';

const state = {
  idToken: null,
  refreshToken: null,
  idTokenExpireDate: null,
  email: null,
  userInfo: null,
};

const getters = {
  isUserLoggedIn(state) {
    return state.idToken !== null;
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  [SET_USER_TOKEN_INFO]: (state, { idToken, refreshToken, email, idTokenExpireDate }) => {
    state.idToken = idToken;
    state.refreshToken = refreshToken;
    state.email = email;
    state.idTokenExpireDate = idTokenExpireDate;

    setTokenInfo({ idToken, refreshToken, email, idTokenExpireDate });
  },
  [CLEAR_TOKEN_INFO]: (state) => {
    state.idToken = null;
    state.refreshToken = null;
    state.idTokenExpireDate = null;
    state.email = null;
    state.userInfo = null;
  },
};

const actions = {
  [SIGN_UP]: async function signUp({ commit }, userData) {
    const response = await signup({ ...userData, returnSecureToken: true });
    const idTokenExpireDate = new Date().getTime() + (response.data.expiresIn * 1000);

    commit(SET_USER_TOKEN_INFO, { ...response.data, idTokenExpireDate });
    return response;
  },
  [LOG_IN]: async function logIn({ commit }, userData) {
    const response = await login({ ...userData, returnSecureToken: true });
    const idTokenExpireDate = new Date().getTime() + (response.data.expiresIn * 1000);

    commit(SET_USER_TOKEN_INFO, { ...response.data, idTokenExpireDate });
    return response;
  },
  [LOAD_TOKEN_INFO_FROM_LOCAL]: ({ commit }) => {
    const tokenInfo = getTokenInfo();

    if (tokenInfo === null) {
      return;
    }

    commit(SET_USER_TOKEN_INFO, tokenInfo);
  },
  [LOG_OUT]: ({ commit }) => {
    commit(CLEAR_TOKEN_INFO);
    clearTokenInfo();
  },
};
/* eslint-enable no-param-reassign */

export default {
  state,
  getters,
  actions,
  mutations,
};
