import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
Vue.use(VueRouter)

import store from '@/store'
import {baseRoutes} from '@/router/modules'

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: baseRoutes
})

// 解决 再push/replace  重复点击路由的错误: Avoided redundant navigation to current location
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err)
}

/** 动态权限管控 */
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (!store.state.user.token) {
    if (
      to.matched.length > 0 &&
      !to.matched.some((record) => record.meta.requiresAuth)
    ) {
      next()
    } else {
      next({path: '/login'})
    }
  } else {
    console.log(to.matched)
    // 判断用户信息是否存在， 获取数据
    next()
    if (
      store.state.permission.sidebarMenu &&
      store.state.permission.sidebarMenu.length === 0
    ) {
      store.dispatch('user/requiresUserInfo').then((rest) => {
        next({...to, replace: true}) // 防止刷新 页面不存在
      })
    } else {
      console.log('111', store.state.permission.sidebarMenu)
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
