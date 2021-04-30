/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:  缓存数据交付处理
 */

import Cookies from 'js-cookie'
import {TOKEN_NAME, cookieExpires} from '@/config/setting'

/** 设置token*/

export function setAccessToken(token) {
  Cookies.set(TOKEN_NAME, token, {expires: cookieExpires || 3})
}

/**
 * @获取token
 * */
export function getAccessToken() {
  return Cookies.get(TOKEN_NAME) || ''
}

/** 删除token*/
export function delAccessToken() {
  return Cookies.remove(TOKEN_NAME)
}

/** routerTag 混存*/
export function setRouterTag(item) {
  sessionStorage.setItem('menusTags', JSON.stringify(item))
}
export function getRouterTag() {
  return JSON.parse(sessionStorage.getItem('menusTags') || '[]')
}
