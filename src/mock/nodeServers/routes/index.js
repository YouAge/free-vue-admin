/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */




const router = require('koa-router')()

const home = require('./home')

const bodyParser = require('koa-bodyparser')
router.use(bodyParser()) // 解析post 请求参数
// 路由整合
router.use('',home.routes(), home.allowedMethods())




module.exports = router
