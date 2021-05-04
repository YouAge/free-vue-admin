/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

import { hierarchy, recursionRouter } from '@/utils/recusionRouter'
import { asyncRoutes, lastRoute } from '@/router/modules'
import router from '@/router'
import { getRouterTag, setRouterTag } from '@/utils/handling'

/** 菜单权限 */

export default {
  namespaced: true,
  state: {
    permissionsList: null,
    sidebarMenu: [], // 导航菜单
    currentMenus: [], // //后端获取菜单权限

    activeRouteTag: getRouterTag() // // 菜单标签卡片,
  },
  getters: {
    // activeRouteTag:(state) => state.activeRouteTag
  },
  mutations: {
    SET_PERMISSION (state, routes) {
      state.permissionsList = routes
    },
    CLEAR_PERMISSION (state) {
      state.permissionsList = null
    },
    SET_MENU (state, menu) {
      state.sidebarMenu = menu
    },
    SET_CURRENT_MENUS (state, menu) {
      state.currentMenus = menu
    },

    SET_ACTIVE_ROUTER_TAG (state, menuTag) {
      state.activeRouteTag = menuTag
      setRouterTag()
    }
  },
  actions: {
    async FETCH_PERMISSION ({ commit, state }, currentMenus) {
      // const newMenus = hierarchy(currentMenus)
      // 对比路由保留可用路由
      console.log('路由', currentMenus)
      const menus = recursionRouter(currentMenus, asyncRoutes)
      commit('SET_MENU', menus)
      menus.push(lastRoute)
      console.log(menus)
      router.addRoutes(menus) // 动态添加可访问路由表
      // console.log(router)
    }
  }
}
