const state = {
  price: 100
};

const getters = {
  price(state, getters, rootState) {
    return state.price + rootState.count;
  }
};

const actions = {
  addPrice({ commit }) {
    commit('add');
  }
};

const mutations = {
  add(state) {
    state.price++;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};