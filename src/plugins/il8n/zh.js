/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

const menu = {
  userList: '用户列表',
  userRight: '用户权限',
  role: '角色',
  menu: '菜单',
  home: '首页',
  config: '配置',
  fourZeroFour: '404',
  fourZeroOne: '401',
  components: '组件',
  error: '错误页面',
  menuOne: '菜单1-1',
  menuOneTop: '菜单1-2',
  menuOneTopThree: '菜单1-3'
}

const navbar = {
  sysManagement: '系统管理',
  baseInfo: '基础信息',
  Dict: '字典管理',
  editor: '编辑器',
  video: '视频组件',
  map: '地图组件',
  draggable: '拖拽组件',
  splitPane: '切割面板',
  button: '按钮组件',
  cropping: '图片裁剪',
  countTo: '数字动画',
  selector: '选择器组件',
  flowChart: '流程图',
  seamless: '无缝滚动',
  LoginOut: '退出系统',
  fullscreen: '全屏',
  exitfullscreen: '退出全屏',
  refreshRoute: '刷新路由',
  login: '登陆',
  register: '注册',
  add: '新增',
  mark: '标记/取消',
  save: '保存',
  search: '搜索',
  expendAll: '全部展开',
  collapseAll: '全部折叠',
  systemSet: '系统设置'
}

const localesList = [navbar, menu]
export const m = Object.assign({}, ...localesList.map((v) => v))
