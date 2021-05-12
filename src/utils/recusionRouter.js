/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

/**
 * @路由比对
 * @userRouter：用户
 * @allRouter
 * */
const fixedMenu = ['home', 'Home']
export function recursionRouter(userRouter = [], allRouter = []) {
  let realRoutes = []
  allRouter.forEach((v, i) => {
    // console.log(fixedMenu.includes(v.name), v.name)
    if (fixedMenu.includes(v.name)) {
      realRoutes.push(v)
    }
    userRouter.forEach((item, index) => {
      if (item.name === v.name) {
        if (item.children && item.children.length > 0) {
          v.children = recursionRouter(item.children, v.children)
        }
        // v = updateMeta(item, v)
        realRoutes.push(v)
        // console.log(v)
      }
    })
  })
  return realRoutes
}

/**
 * 更新为后端的配置数据
 * */

function updateMeta(userValue, allValue) {
  if (!Object.keys(allValue.meta).includes('sidebar')) {
    allValue.meta.sidebar = false
  }
  return allValue
}

/**
 * @ 菜单层级
 * @ parentMenuId: superID
 * @ superName:
 * */
export const hierarchy = (list, parentMenuId = null, superName = 'superId') => {
  if (list.length < 1) return []
  let menuObj = {}
  list.forEach((item) => {
    item.children = []
    menuObj[item.id] = item
  })
  return list.filter((item) => {
    if (item[superName] !== parentMenuId) {
      menuObj[item[superName]].children.push(item)
      return false
    }
    return true
  })
}
