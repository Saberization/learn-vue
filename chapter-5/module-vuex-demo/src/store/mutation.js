import { ADD, LESS } from './mutation-type';

const mutations = {
  [ADD](state) {
    state.count++;
  },

  [LESS](state) {
    state.count--;
  }
};

export default mutations;