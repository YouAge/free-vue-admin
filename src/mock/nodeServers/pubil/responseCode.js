/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */



function options(data = {}, code = 1, msg = '请求数据') {
  return {
    code,
    data,
    msg
  }
}



module.exports  ={
  options
}
