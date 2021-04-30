import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// export default new Vuex.Store({
//   modules: {
//     app,
//   },
// })

// 自动解析
const modules = {}
const require_module = require.context('./modulse', false, /.js$/)
require_module.keys().forEach((file_name) => {
  modules[file_name.slice(2, -3)] = require_module(file_name).default
})

Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true
})
export default new Vuex.Store({
  modules: modules
  // strict: process.env.NODE_ENV !== 'production'
})
