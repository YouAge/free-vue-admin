/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 功能
 */

/**
 * @ 判断是否是外连接
 * */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:|http)/.test(path)
}

/**
 *
 * @ list 根据索引删除元素
 * */
Array.prototype.del = function (index) {
  if (isNaN(index) || index > this.length) return false
  this.splice(index, 1)
}

/** 判断屏幕宽度 */
export function visualBreadth () {
  return document.body.getBoundingClientRect().width - 1 < 992
}

/**
 * 浏览器判断是否全屏
 */
export const fullscreenEnable = () => {
  return (
    document.isFullScreen ||
    document.mozIsFullScreen ||
    document.webkitIsFullScreen
  )
}
/** treat
 * 浏览器全屏
 */
export const reqFullScreen = () => {
  if (document.documentElement.requestFullScreen) {
    document.documentElement.requestFullScreen()
  } else if (document.documentElement.webkitRequestFullScreen) {
    document.documentElement.webkitRequestFullScreen()
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen()
  }
}
/**
 * 浏览器退出全屏
 */
export const exitFullScreen = () => {
  if (document.documentElement.requestFullScreen) {
    document.exitFullScreen()
  } else if (document.documentElement.webkitRequestFullScreen) {
    document.webkitCancelFullScreen()
  } else if (document.documentElement.mozRequestFullScreen) {
    document.mozCancelFullScreen()
  }
}
