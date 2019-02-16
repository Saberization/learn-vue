const actions = {
  addCount({ commit, state }) {
    commit('add')
  },

  lessCount({ commit, state }) {
    commit('less')
  }
};

export default actions;