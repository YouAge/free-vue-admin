const Router = require('koa-router')
const router = new Router()

const control = require('./auter')

function options(data = {}, code = 1, msg = '请求数据') {
  return {
    code,
    data,
    msg
  }
}

router.post('/login', async (ctx, next) => {
  const user = ctx.request.body.username || 'test'
  const password = ctx.request.body.password || '123456'
  const token = '12dshafhdlskahnglkdsnaoagndkos'
  ctx.response.body = options({token}, 1, '请求成功')
})

router.post('/user-info', async (ctx, next) => {
  const token = ctx.request.body.freeToken || ''
  if (token) {
    ctx.response.body = options(control['admin'], 1, '请求成功')
  } else {
    ctx.response.body = options({}, 0, '验证失败')
  }
})

module.exports = router
