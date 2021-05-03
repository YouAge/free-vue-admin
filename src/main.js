import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'

import ElementLocale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
import { getI18n } from './utils/handling'

Vue.config.productionTip = false

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: getI18n(),
  messages: {
    zh: require('@/plugins/il8n/zh'),
    en: require('@/plugins/il8n/en')
  }
})

ElementLocale.i18n((key, value) => i18n.t(key, value))
// Vue.config.$i18n= i18n

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
