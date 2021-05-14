/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

const Router = require('koa-router');


const {options} = require('../pubil/responseCode.js')
const control = require('../mock/menus')


const router = new Router()
router.get('/',function (ctx,next){
  ctx.body = {
    name:'欢迎来到, free-admin API',
    code: 200
  }
})






router.post('/login', async (ctx, next) => {
  const user = ctx.request.body.username || 'test'
  const password = ctx.request.body.password || '123456'
  const token = '12dshafhdlskahnglkdsnaoagndkos'
  ctx.response.body = options({token}, 1, '请求成功')
})

router.post('/user-info', async (ctx, next) => {
  const token = ctx.request.body.token || ''
  if (token) {
    // console.log(options(control['admin']))
    ctx.response.body = options(control['admin'], 1, '请求成功')
  } else {
    ctx.response.body = options({}, 0, '验证失败')
  }
})

module.exports = router










module.exports = router
