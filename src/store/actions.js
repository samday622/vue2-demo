import * as types from './type.js'

export default{
  SHOW_LOADING: ({ commit }) => {
    commit(types.SHOW_LOADING)
  },
  HIDE_LOADING: ({ commit }) => {
    commit(types.HIDE_LOADING)
  },
  USER_SIGNIN: ({ commit }, user) => {
    commit(types.USER_SIGNIN, user)
  },
  USER_SIGNOUT: ({ commit }) => {
    commit(types.USER_SIGNOUT)
  }
}
