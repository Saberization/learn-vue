import { ADD } from '../mutation-type';

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
    commit(ADD);
  }
};

const mutations = {
  // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
  [ADD](state) {
    state.price++;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};