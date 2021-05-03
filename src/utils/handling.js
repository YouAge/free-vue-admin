/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:  缓存数据交付处理
 */

import Cookies from 'js-cookie'
import { TOKEN_NAME, cookieExpires } from '@/config/setting'

/** 设置token */

export function setAccessToken (token) {
  Cookies.set(TOKEN_NAME, token, { expires: cookieExpires || 3 })
}

/**
 * @获取token
 * */
export function getAccessToken () {
  return Cookies.get(TOKEN_NAME) || ''
}

/** 删除token */
export function delAccessToken () {
  return Cookies.remove(TOKEN_NAME)
}

/** routerTag 混存 */
export function setRouterTag (item) {
  sessionStorage.setItem('menusTags', JSON.stringify(item))
}
export function getRouterTag () {
  return JSON.parse(sessionStorage.getItem('menusTags') || '[]')
}

/**
 * @ 封装三个函数，分别存去，
 * @localStorage
 * @sessionStorage
 * @Cookies
 * */

/** 缓存主题设置配置 */
export function setThemeConfig (item) {
  localStorage.setItem('freeTheme', JSON.stringify(item))
}
export function getThemeConfig (item) {
  return JSON.parse(localStorage.getItem('freeTheme') || '{}')
}

/** language 缓存 */
export function setI18n (item) {
  localStorage.setItem('language', item)
}
export function getI18n () {
  return localStorage.getItem('language') || 'zh'
}
