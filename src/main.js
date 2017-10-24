// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引用API文件
import api from './api/index.js'
// 在main.js 中引入新建的vuex文件
import stores from './store/store.js'
// 引用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// 加载公共组件
import loading from './components/loading'
// 引用axios
import axios from 'axios'

// 引用工具文件
import utils from './utils/index.js'

// 将工具方法绑定到全局
Vue.prototype.$utils = utils

Vue.config.productionTip = false

Vue.use(ElementUI)

// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.prototype.$axios = axios

// 加载公用组件
/* Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`v${name}`, components[key])
}) */

Vue.component('Loading', loading)

router.beforeEach(({meta, path}, from, next) => {
  var { auth = true } = meta
  var isLogin = Boolean(stores.state.user.id) // true用户已登录， false用户未登录

  // if (auth && !isLogin && path !== '/login') {
  if (auth && isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  next()
})

// 载入中图标加载
axios.interceptors.request.use(function (config) {
  stores.dispatch('SHOW_LOADING')
  return config
}, function (err) {
  return Promise.reject(err)
})
axios.interceptors.response.use(function (response) {
  stores.dispatch('HIDE_LOADING')
  return response
}, function (err) {
  return Promise.reject(err)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: stores,
  template: '<App/>',
  components: { App }
})
