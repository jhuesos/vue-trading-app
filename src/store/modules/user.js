const state = {
  token: null,
  renewalToken: null,
};

const getters = {
  isUserLoggedIn(state) {
    return state.token !== null;
  },
};

export default {
  state,
  getters,
};
