import { SHOW_LOADING, HIDE_LOADING, USER_SIGNIN, USER_SIGNOUT } from './type.js'
import Vue from 'vue'
const state = {
  showLoading: false,
  user: JSON.parse(sessionStorage.getItem('user')) || {}
}

const mutations = {
  [SHOW_LOADING] (state) {
    state.showLoading = true
  },
  [HIDE_LOADING] (state) {
    state.showLoading = false
  },
  [USER_SIGNIN] (state, user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    Object.assign(state, user)
  },
  [USER_SIGNOUT] (state) {
    sessionStorage.removeItem('user')
    Object.keys(state).forEach(k => Vue.delete(state, k))
  }
}

const getters = {
  showLoading (state) {
    return state.showLoading
  }
}

export default {
  state, mutations, getters
}
