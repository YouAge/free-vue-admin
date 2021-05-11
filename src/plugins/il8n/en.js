/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

const menu = {
  home: 'Home',
  fourZeroFour: '404',
  fourZeroOne: '401',
  userList: 'user list',
  userRight: 'user right',
  role: 'user role',
  menu: 'user menu',
  config: 'config',
  components: 'free components',
  error: 'error pager',
  menuOne: 'menu-1-1',
  menuOneTop: 'menu-1-2',
  menuOneTopThree: 'menu-1-3'
}

const navbar = {
  sysManagement: 'System Manage',
  baseInfo: 'Base Info',
  Dict: 'Dict Manage',
  editor: 'Editor',
  error: 'Error Page',
  components: 'Components',
  video: 'Video Components',
  map: 'Map Components',
  draggable: 'Draggable Components',
  splitPane: 'Split Pane',
  button: 'Button Components',
  cropping: 'Picture Cropping',
  countTo: 'Digital Animation',
  selector: 'Selector Components',
  flowChart: 'Flow Chart',
  seamless: 'Seamless Scroll'
}

const localesList = [navbar, menu]
export const m = Object.assign({}, ...localesList.map((v) => v))
