/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

import axios from 'axios'
import store from '@/store'
import {
  TOKEN_NAME,
  baseURL,
  requestTimeout,
  headers,
  successCode
} from '@/config/setting'

const api = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: headers || {}
})

/**
 * @ 请求相应前 拦截
 * */
api.interceptors.request.use(
  (config) => {
    if (store.state.user.token) {
      config.headers[TOKEN_NAME] = store.state.user.token
    }
    // 请求loading 开启
    console.log(config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * @ 结果相应
 * */

api.interceptors.response.use(
  (response) => {
    // 关闭 loading
    const {data, config} = response
    const {code, msg} = data
    if (successCode.includes(code)) {
      return data
    } else {
      // TODO  错误请求处理
      return Promise.reject(msg || data.message)
    }
  },
  (error) => {
    // 关闭 loading
    //TODO 请求异常处理
    return Promise.reject(error)
  }
)

export default api
