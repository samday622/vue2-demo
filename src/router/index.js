import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/page/index'], resolve)
    },
    {
      path: '/login', // 登录
      meta: { auth: false },
      component: resolve => require(['@/page/login'], resolve)
    },
    {
      path: '/list',
      component: resolve => require(['@/page/list'], resolve)
    }
  ]
})
