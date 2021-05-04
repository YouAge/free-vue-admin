/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

import Vue from 'vue'
import { localesConfigs } from './config'

let _i18n = null

export function RewriteLocale (i18n) {
  _i18n = i18n
}

const PluginConstructor = Vue.extend(Plugin)

const plugin = function () {
  if (Vue.prototype.$isServer) return

  const instance = new PluginConstructor()
  instance.$mount()
  document.body.appendChild(instance.$el)

  return instance
}

const install = (Vue) => {
  Vue.prototype._i18n = _i18n
  Vue.prototype.$plugin = plugin
}

export default {
  install
}
