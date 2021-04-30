/** 公共显示*/
const free = {
  name: 'free',
  title: '组件库',
  children: [{name: 'table', title: '表格'}]
}

const meun2 = [
  {
    path: '/free',
    name: 'free',
    meta: {icon: 'el-icon-s-flag', title: 'FREE组件'},
    children: [
      {
        path: 'menu-one',
        name: 'menu-one',
        redirect: 'cnc_oee/topx',
        meta: {icon: 'ios-navigate', title: '菜单1-1'},
        children: [
          {
            path: 'menu-one-two',
            name: 'menu-one-two',
            meta: {icon: 'ios-navigate', title: '菜单1-1-2'},
            children: []
          },
          {
            path: 'menu-one-three',
            name: 'menu-one-three',
            meta: {icon: 'ios-navigate', title: '菜单1-1-3'},
            children: []
          }
        ]
      },
      {
        path: 'cnc_oee2',
        name: 'cnc_cutter',
        meta: {icon: 'ios-navigate', title: 'cnc_cutter'},
        children: []
      },
      {
        path: 'cnc_oee3',
        name: 'cnc_config',
        meta: {icon: 'ios-navigate', title: '配置信息'},
        children: []
      }
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
        meta: {title: '用户列表'},
        children: []
      }, //
      {
        path: 'role',
        name: 'role',
        meta: {title: '角色'},
        children: []
      }, //
      {
        path: 'menu',
        name: 'menu',
        meta: {title: '菜单'},
        children: []
      } //
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
    // free,
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
