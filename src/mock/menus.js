/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

/** 菜单结构*/
export const menus = [
  {
    title: '菜单一',
    path: '/index',
    icon: 'ios-alert',
    name: '1',
    children: [
      {
        title: '子菜单一',
        path: '/index1-2',
        name: '11',
        icon: 'ios-alert',
        children: [],
      },
    ],
  },
  {
    title: '菜单二',
    path: '/index2',
    name: '21',
    icon: 'ios-alert',
    children: [
      {
        title: '子菜单二-1',
        name: '23',
        path: '/index2-1',
        icon: 'ios-alert',
        children: [
          {
            title: '子菜单三-1',
            name: '24',
            path: '/index2-3',
            icon: 'ios-alert',
          },
        ],
      },
    ],
  },
  {
    title: '菜单三',
    name: '43',
    path: '/index3',
    icon: 'ios-alert',
  },
]
