/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */
const weRouter = require('koa-router')()


let weObj = {}

weRouter.all('/web',(ctx)=>{
  const {id} = ctx.query
  weObj[id] = ctx
  // console.log( '查看你',ctx.query)
  ctx.websocket.send('连接成功')
  Object.keys(weObj).forEach(item=>{
    weObj[item].websocket.send(`${id}  上线啦`)
  })
  ctx.websocket.on('message', (msg)=>{
    const  uid = JSON.parse(msg)
    console.log('消息:', uid)
    if(!weObj[uid]){
      ctx.websocket.send(`${uid}未上线`)
    }else{
      weObj[uid].websocket.send(message)

    }
  })
})

weRouter.all('/bo',(ctx)=>{
  ctx.websocket.send('连接上上线')

})



module.exports = weRouter
