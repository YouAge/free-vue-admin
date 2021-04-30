/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

module.exports = {
  // baseURL
  baseURL: 'http://10.128.19.168:8022',
  // 请求超时
  requestTimeout: 50000,
  // 请求成功状态码
  successCode: [1, 200, 0],
  // 默认请求头设置
  headers: {},

  // set-token 缓存Name
  TOKEN_NAME: 'token',
  // token过期时间（天数）
  cookieExpires: 3
}
