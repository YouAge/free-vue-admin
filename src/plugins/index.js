/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

// import Vue from 'vue'
import './element'

// 公共样式
import '@/assets/style/resources/variables.less'
import '@/assets/style/free.less'

// 加载图标
const req = require.context('../assets/icons', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
// 指令注册
