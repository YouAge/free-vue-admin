/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 功能
 */

/**
 * @ 判断是否是外连接
 * */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:|http)/.test(path)
}

/**
 *
 * @ list 根据索引删除元素
 * */
Array.prototype.del = function(index) {
  if (isNaN(index) || index > this.length) return false
  this.splice(index, 1)
}

/** 判断屏幕宽度*/
export function visualBreadth() {
  return document.body.getBoundingClientRect().width - 1 < 992
}
