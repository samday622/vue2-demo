import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: mutations.state,
  strict: process.env.NODE_ENV !== 'production', // 在非生产环境下，使用严格模式
  modules: {
    mutations
  },
  actions
})
