/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

const WebSocket = require('koa-websocket')
const weRouter = require('./demo.js')
// 实例化




function webSocketMar(app){
  const ws = WebSocket(app)
  ws.ws.use(weRouter.routes()).use(weRouter.allowedMethods())
  ws.listen(8997,()=>{
    console.log('websocket启动成功')})
}


module.exports = webSocketMar
