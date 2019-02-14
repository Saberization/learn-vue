/*
 * @Author: guotq
 * @Date: 2019-01-06 23:39:32
 * @Last Modified by: guotq
 * @Last Modified time: 2019-02-14 23:38:53
 * @Description: vuex 的配置文件
 */

import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex);

// 定义属性(数据)
const state = {
  count: 6
}

// 定义 getters 用来获取数据
const getters = {
  count(state) {
    return state.count;
  },

  isEvenOdd(state) {
    return state.count % 2 === 0 ? 'even' : 'odd';
  }
}

// 定义 actions、要执行的操作，如流程判断、异步请求等。
const actions = {
  increment({commit, state}) {
    // context 包含: commit、dispatch、state
    // console.log(context);

    if (state.count < 10) {
      commit('addCount');  // 提交一个名为 addCount 的变化，名称可以自定义，可以认为是类型名
    }
  },

  less({commit, state}) {
    if (state.count > 0) {
      commit('lessCount');
    }
  },

  incrementAsync({ commit, state }) {
    // 异步的操作
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve();
      }, 3000);
    });

    p.then(() => {
      commit('addCount');
    })
    .catch(() => {
      console.log('异步操作失败');
    });
  }
}

// 定义 mutations，处理状态（数据）的改变
const mutations = {
  addCount(state) {
    state.count++;
  },
  lessCount(state) {
    state.count--;
  }
}

// 创建 store 对象
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

// 导出 store 对象
export default store