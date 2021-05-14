/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 登入接口
 */

const Koa = require('koa')
const app = new Koa()

const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')


const router = require('./routes/index')

app.use(bodyparser()) // 解析body参数
app.use(cors()) // 所有

const webSocketMar = require('./webSocketRoute/index.js')
webSocketMar(app)
/** 内置ws 通信
const WebSocket = require('ws')
const ws = new WebSocket.Server({port:8997})
ws.on('connection',ws=>{
  console.log('websocket 启动',ws)

  ws.on('message',msg=>{
    console.log('获取客服端消息，',msg)
    ws.send('89979')
  })
  ws.send('来之服务器的消息发送')
})
 */


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
