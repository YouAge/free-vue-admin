/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

const Mock = require('mockjs')

Mock.mock('/login', 'post', () => {
  return {
    code: 1,
    message: '登入成功',
    data: {
      token: 'sfdsfsdafshagkdsnglkankl;nlkaga'
    }
  }
})

Mock.mock('/admin/user_info', 'get', () => {
  console.log('huoqu qingqiu')
})

console.log(Mock)
export default Mock
