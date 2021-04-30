/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

import api from '@/utils/request'
import {TOKEN_NAME} from '@/config/setting'

export async function login(user) {
  console.log(typeof user)
  return api.post('/login', {...user})
}

export async function getUserInfo(token) {
  return api.get('/admin/user_info', {params: {[TOKEN_NAME]: token}})
}
