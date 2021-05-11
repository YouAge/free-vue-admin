/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 登入接口
 */

const Koa = require('koa')
const app = new Koa()

const router = require('./routerApi')
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')

app.use(bodyparser()) // 解析body参数
app.use(cors()) // 所有

app.use(router.routes()).use(router.allowedMethods())

// 监听端口
app.listen(
  {
    host: '0.0.0.0',
    port: 6589
  },
  () => {
    console.log('服务器已启动，http://localhost:6589')
  }
)
