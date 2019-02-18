import { ADD, LESS } from './mutation-type';

const actions = {
  addCount({ commit, state }) {
    commit(ADD)
  },

  lessCount({ commit, state }) {
    commit(LESS)
  }
};

export default actions;