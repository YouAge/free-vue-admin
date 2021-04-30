import layout from '@/layout'

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
  // {
  //   path: '/',
  //   name: 'home',
  //   component: layout,
  //   redirect: 'home',
  //   children: [
  //     // 主页
  //     {
  //       path: 'home',
  //       meta: {icon: 'ios-home-outline', title: '首页', requiresAuth: true},
  //       name: 'Home',
  //       component: () => import('@/views/Home')
  //     }
  //   ]
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      title: '登录',
      requiresAuth: false,
      sidebar: true
    }
  }
]

export const lastRoute = {
  path: '*',
  component: () => import('@/views/404'),
  meta: {
    title: '404',
    sidebar: true
  }
}

export const asyncRoutes = [
  {
    path: '/',
    name: 'home',
    component: layout,
    redirect: 'home',
    meta: {icon: 'el-icon-s-home'},
    children: [
      // 主页
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home'),
        meta: {
          icon: 'el-icon-s-home',
          title: '首页',
          clingy: true
        }
      }
    ]
  },
  {
    path: '/cnc',
    name: 'oee',
    component: layout,
    meta: {icon: 'el-icon-s-flag', title: 'OEE'},
    children: [
      {
        path: 'cnc_oee',
        name: 'cnc_oee',
        redirect: 'cnc_oee/topx',
        meta: {icon: 'ios-navigate', title: 'cnc_oee'},
        children: [
          {
            path: 'topx',
            name: 'topx',
            component: () => import('@/views/cnc/top'),
            meta: {icon: 'ios-navigate', title: 'topx'}
          },
          {
            path: 'topx2',
            name: 'topx2',
            component: () => import('@/views/cnc/top'),
            meta: {icon: 'ios-navigate', title: 'topx2'}
          },
          {
            path: 'topx3',
            name: 'topx3',
            component: () => import('@/views/cnc/top'),
            meta: {icon: 'ios-navigate', title: 'topx3'}
          },
          {
            path: 'topx4',
            name: 'topx4',
            component: () => import('@/views/cnc/top'),
            meta: {icon: 'ios-navigate', title: 'topx4'}
          },
          {
            path: 'topx5',
            name: 'topx5',
            component: () => import('@/views/cnc/top'),
            meta: {icon: 'ios-navigate', title: 'topx5'}
          },
          {
            path: 'topx6',
            name: 'topx6',
            component: () => import('@/views/cnc/top'),
            meta: {icon: 'ios-navigate', title: 'topx6'}
          }
        ]
      },
      {
        path: 'cnc_oee2',
        name: 'cnc_cutter',
        component: () => import('@/views/cnc/cnc_oee'),
        meta: {icon: 'ios-navigate', title: 'cnc_cutter'}
      },
      {
        path: 'cnc_oee3',
        name: 'cnc_config',
        component: () => import('@/views/cnc/cnc_oee'),
        meta: {icon: 'ios-navigate', title: '配置信息'}
      }
    ]
  },

  {
    path: '/admin',
    component: layout,
    redirect: 'user',
    name: 'admin',
    meta: {title: '用户权限', icon: 'el-icon-s-flag'},
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/free-user/user'),
        meta: {title: '用户列表'}
      }, //
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/free-user/menus'),
        meta: {title: '角色'}
      }, //
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/free-user/menus'),
        meta: {title: '菜单'}
      } //
    ]
  },
  {
    path: '/material',
    component: layout,
    name: 'material',
    meta: {title: '样品管理', icon: 'el-icon-s-flag'},
    children: [
      {
        path: 'material-view',
        name: 'material',
        meta: {icon: 'ios-home-outline', title: '样品管理'},
        component: () => import('@/views/material/index')
      },
      {
        path: 'material-config',
        name: 'materialConfig',
        meta: {icon: 'ios-home-outline', title: '样品管理配置'},
        component: () => import('@/views/material/material_config')
      }
    ]
  }
]
