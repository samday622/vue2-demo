// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引用API文件
import api from './api/index.js'
// 在main.js 中引入新建的vuex文件
import store from './store/index.js'
Vue.config.productionTip = false

// 将API方法绑定到全局
Vue.prototype.$api = api

router.beforeEach(({meta, path}, from, next) => {
  var { auth = true } = meta
  var isLogin = Boolean(store.state.user.id) // true用户已登录， false用户未登录

  if (auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
