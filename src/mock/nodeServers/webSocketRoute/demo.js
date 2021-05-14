/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */
const weRouter = require('koa-router')()


let weObj = {}

weRouter.all('/web',(ctx)=>{
  const {id} = ctx.query
  weObj[id] = ctx
  console.log( '查看你',ctx.query)
  ctx.websocket.send('连接成功')
  ctx.websocket.on('message', (msg)=>{
    const  uid = JSON.parse(msg)
    console.log('消息:', uid)

    // if(!wsObj[uid]){
    //   ctx.websocket.send(`${uid}未上线`)
    // }else{
    //   wsObj[uid].websocket.send(message)
    // }
  })
})




module.exports = weRouter
