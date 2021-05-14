/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */





/** 公共显示 */
const free = {
  name: 'free',
  title: '组件库',
  children: [
    { name: 'table', title: '表格' },
    { name: 'video', title: '视频' },
    { name: 'map', title: '地图' },
  ]
}

const meun2 = [
  {
    name: 'menus',
    children: [
      {
        path: 'menu-one',
        name: 'menu-one',
        redirect: 'cnc_oee/topx',
        meta: { icon: 'ios-navigate', title: '菜单1-1' },
        children: [
          {
            path: 'menu-one-two',
            name: 'menu-one-two',
            meta: { icon: 'ios-navigate', title: '菜单1-1-2' },
            children: []
          },
          {
            path: 'menu-one-three',
            name: 'menu-one-three',
            meta: { icon: 'ios-navigate', title: '菜单1-1-3' },
            children: []
          }
        ]
      },
      {
        name: 'menu-two',
        meta: { icon: 'ios-navigate', title: '菜单2-1' },
        children: []
      },

    ]
  },

  {
    path: '/admin',
    redirect: 'user',
    name: 'admin',
    title: '菜单配置',
    children: [
      {
        path: 'user',
        name: 'user',
        meta: { title: '用户列表' },
        children: []
      }, //
      {
        path: 'role',
        name: 'role',
        meta: { title: '角色' },
        children: []
      }, //
      {
        path: 'menu',
        name: 'menu',
        meta: { title: '菜单' },
        children: []
      } //
    ]
  },

  {
    path: '/error',
    name: 'error',
    children: [
      {
        path: '401',
        name: 'error401'
      },
      {
        path: 'error404',
        name: 'error404'
      }
    ]
  },


  {
    name: 'iframe',
    meta: { icon: 'el-icon-s-home',title: '内连接' },
    children: [
      // 主页
      { name: 'baidu', title: '百度' },
      { name: 'antdv', title: 'ant' },
      { name: 'vue3', title: '外链接' }
    ]
  }
]

const admin = {
  username: 'admin',
  action: ['show', 'add', 'del', 'edit'],
  // 一篇数据库存储的是自关联层级的菜单
  menus: [
    // {
    //   name: 'admin',
    //   path: 'management',
    //   icon: '',
    //   title: '菜单配置',
    //   children: [
    //     {name: 'userAdmin', title: '用户管理', path: 'user-admin'},
    //     {name: 'roleAdmin', title: '角色管理', path: 'role-admin'},
    //     {name: 'menuAdmin', title: '菜单管理', path: 'menu-admin'}
    //   ]
    // },
    free,
    ...meun2
  ]
}

const test = {
  username: 'admin',
  action: ['show', 'add'],
  menus: [free]
}

module.exports = {
  admin,
  test
}
