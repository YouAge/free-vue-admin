/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 登入接口
 */

const Koa = require('koa')
const app = new Koa()

const router = require()

const cors = require('koa2-cors')

app.use(cors()) // 所有

app.use(router.routes()).use(router.allowedMethods())

// 监听端口
app.listen(
  {
    host: '0.0.0.0',
    port: 6589
  },
  () => {
    console.log('服务器已启动，http://10.128.212.64:6589')
  }
)
