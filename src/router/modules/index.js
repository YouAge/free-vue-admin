import layout from '@/layout'
import Empty from '@/layout/empty'

/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 * @metal下参数简介
 * {
 *    requiresAuth: Boolean, true管控，false不用登入. 默认管控
 *    sidebar: false, // 是否作为菜单展示, 默认显示
 *    auth:[] //前端权限，
 * }
 * */
export const baseRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      title: 'm.login',
      requiresAuth: false,
      sidebar: true
    }
  }
]

export const lastRoute = {
  path: '*',
  component: () => import('@/views/error/404'),
  meta: {
    title: 'm.fourZeroFour',
    sidebar: true
  }
}

export const asyncRoutes = [
  {
    path: '/',
    name: 'home',
    component: layout,
    redirect: 'home',
    meta: { icon: 'el-icon-s-home' },
    children: [
      // 主页
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home'),
        meta: {
          icon: 'el-icon-s-home',
          title: 'm.home',
          clingy: true
        }
      }
    ]
  },
  {
    path: '/free',
    name: 'free',
    component: layout,
    meta: { icon: 'el-icon-s-flag', title: 'm.components' },
    children: [
      {
        path: 'menu-one',
        name: 'menu-one',
        redirect: 'cnc_oee/topx',
        meta: { icon: 'ios-navigate', title: 'm.menuOne' },
        children: [
          {
            path: 'menu-one-two',
            name: 'menu-one-two',
            component: () => import('@/views/cnc/top'),
            meta: { icon: 'ios-navigate', title: 'm.menuOneTop' }
          },
          {
            path: 'menu-one-three',
            name: 'menu-one-three',
            component: () => import('@/views/cnc/top'),
            meta: { icon: 'ios-navigate', title: 'm.menuOneTopThree' }
          }
        ]
      },
      {
        path: 'config',
        name: 'free_config',
        component: () => import('@/views/cnc/cnc_oee'),
        meta: { icon: 'ios-navigate', title: 'm.config' }
      }
    ]
  },

  {
    path: '/admin',
    component: layout,
    redirect: 'user',
    name: 'admin',
    meta: { title: 'm.userRight', icon: 'el-icon-s-flag' },
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/free-user/user'),
        meta: { title: 'm.userList' }
      }, //
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/free-user/menus'),
        meta: { title: 'm.role' }
      }, //
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/free-user/menus'),
        meta: { title: 'm.menu' }
      } //
    ]
  },
  {
    path: '/error',
    component: Empty,
    redirect: '401',
    name: 'error',
    meta: { title: 'm.error', icon: 'el-icon-s-flag' },
    children: [
      {
        path: '401',
        name: 'error401',
        meta: { icon: 'ios-home-outline', title: 'm.fourZeroOne' },
        component: () => import('@/views/error/401')
      },
      {
        path: '404',
        name: 'error404',
        meta: { icon: 'ios-home-outline', title: 'm.fourZeroFour' },
        component: () => import('@/views/error/404')
      }
    ]
  }
]
