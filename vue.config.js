/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

const {title} = require('./src/config/theme.config')

process.env.VUE_APP_TITLE = title || 'free-vue-admin'

module.exports = {
  chainWebpack: (config) => {
    // 配置全局的less 变量使用、
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach((type) =>
      addStyleResource(config.module.rule('less').oneOf(type))
    )
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, 'src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.resolve.alias.set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    // .set('_c', resolve('src/components'))
    // .set('Board', resolve('./Board'))
  },
  devServer: {
    // before: require('./src/mock/index'),
    // host:'localhost',
    // host: '0.0.0.0',
    port: 9897
    // proxy: {
    //   '/api': {
    //     target: 'http://10.128.212.64',
    //     changeOrigin: true,
    //   },
    // },
  }
}

// 配置全局的less的变量使用， 先安装 npm install style-resources-loader -D
function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/style/**.less')]
    })
}
