import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutation'
import card from './modules/card'

Vue.use(Vuex);

const state = {
  count: 0
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    card: card
  }
});