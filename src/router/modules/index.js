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
  },

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
    path: '/menus',
    name: 'menus',
    component: layout,
    meta: { icon: 'el-icon-s-flag', title: 'm.hierarchyMenu' },
    children: [
      {
        path: 'menu-one',
        name: 'menu-one',
        redirect: 'menu-one/menu-one-two',
        meta: { icon: 'ios-navigate', title: 'm.menuOne' },
        children: [
          {
            path: 'menu-one-two',
            name: 'menu-one-two',
            component: () => import('@/views/hierarchyMenu/menu'),
            meta: { icon: 'ios-navigate', title: 'm.menuOneTop' }
          },
          {
            path: 'menu-one-three',
            name: 'menu-one-three',
            component: () => import('@/views/hierarchyMenu/menu'),
            meta: { icon: 'ios-navigate', title: 'm.menuOneTopThree' }
          }
        ]
      },
      {
        path:'menu-two',
        name: 'menu-two',
        meta: { icon: 'ios-navigate', title: 'm.menuTwo' },
        component: () => import('@/views/hierarchyMenu/menu2'),
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
        path: 'table',
        name: 'table',
        component: () => import('@/views/free-compontents/free-table'),
        meta: { icon: 'ios-navigate', title: 'm.table' }
      },
      {
        path: 'config',
        name: 'video',
        component: () => import('@/views/free-compontents/free-video'),
        meta: { icon: 'ios-navigate', title: 'm.video' }
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
  },

  {
    path: '/iframe',
    name: 'iframe',
    component: layout,
    redirect: 'baidu',
    meta: { icon: 'el-icon-s-home',title: '内联地址' },
    children: [
      // 主页
      {
        path: 'baidu',
        name: 'baidu',
        component: () => import('@/views/iframe'),
        meta: {
          icon: 'el-icon-s-home',
          title: '百度',
          path: "https://www.baidu.com/",
        }
      }
      ,{
        path: 'antdv',
        name: 'antdv',
        component: () => import('@/views/iframe'),
        meta: {
          icon: 'el-icon-s-home',
          title: 'antdv',
          path: "https://2x.antdv.com/",
        }
      },
      {
        path: 'https://www.baidu.com/',
        name:'vue3',
        meta: {
          icon: 'el-icon-s-home',
          title: '外链接'
        }
      }
    ]
  }
]
