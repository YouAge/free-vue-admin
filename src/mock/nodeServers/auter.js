/** 公共显示*/
const free = {
  name: 'free',
  title: '组件库',
  children: [{name: 'table', title: '表格'}]
}

const admin = {
  username: 'admin',
  action: ['show', 'add', 'del', 'edit'],
  // 一篇数据库存储的是自关联层级的菜单
  menus: [
    {
      name: 'admin',
      path: 'management',
      icon: '',
      title: '菜单配置',
      children: [
        {name: 'userAdmin', title: '用户管理', path: 'user-admin'},
        {name: 'roleAdmin', title: '角色管理', path: 'role-admin'},
        {name: 'menuAdmin', title: '菜单管理', path: 'menu-admin'}
      ]
    },
    free
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
