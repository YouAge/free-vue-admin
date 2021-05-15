/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
const {title} = require('./src/config/theme.config')

process.env.VUE_APP_TITLE = title || 'free-vue-admin'
console.log(process.env.NODE_ENV)

module.exports = {
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
  },
  css: {
    extract: false,
    sourceMap: true
  },
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
    // 配置 css url
    const miniCssExtractPlugin = new MiniCssExtractPlugin({
      filename: 'assets/[name].[hash:8].css',
      chunkFilename: 'assets/[name].[hash:8].css'
    })
    config.plugin('extract-css').use(miniCssExtractPlugin)

    // 移除prefetch插件，避免加载多余的资源
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')

    // key,value自行定义，比如.set('@@', resolve('src/components'))
    config.resolve.alias.set('@', resolve('src'))
    if (process.env.NODE_ENV !== 'development') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
      config.optimization.minimize(true) // 压缩带来
      /** 抽取公共代码 */
      config.optimization.splitChunks({
        chunks: 'all', // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
        cacheGroups: {
          // 公用模块抽离
          common: {
            chunks: 'initial',
            minSize: 0, // 大于0个字节
            minChunks: 2 // 抽离公共代码时，这个代码块最小被引用的次数
          },
          vendor: {
            name: 'vendor', // 打包名字
            test: /[\\/]node_modules[\\/]/,
            priority: 5, // 权重
            chunks: 'initial', // 只打包初始时依赖的第三方
            minSize: 0, // 大于0个字节
            minChunks: 2 // 在分割之前，这个代码块最小应该被引用的次数
          }
        }
      })
    }
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'development') {
      new TerserPlugin({
        // sourceMap: true,
        parallel: true, // 多进程
        terserOptions: {
          ecma: undefined,
          mangle: true, // 混淆，默认也是开的，mangle也是可以配置很多选项的
          compress: {
            drop_console: true, // true干掉所有的console.*这些函数的调用.
            drop_debugger: true, // 干掉那些debugger;
            pure_funcs: ['console.log'] // 如果你要干掉特定的函数比如console.info
          }
        }
      })
    }
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
