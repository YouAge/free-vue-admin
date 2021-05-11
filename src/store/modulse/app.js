/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:  主题设置
 */
import { layout } from '@/config/theme.config'
import { setThemeConfig, getThemeConfig } from '@/utils/handling'
const theme = getThemeConfig()
export default {
  state: {
    collapse: false,
    layout: theme.layout || layout, // 主题设置
    oldLayout: theme.oldLayout || layout, //
    device: '' // 固定
  },
  getters: {
    isCollapse: (state) => state.collapse,
    layout: (state) => state.layout,
    oldLayout: (state) => state.oldLayout
  },
  mutations: {
    changeCollapse: (state) => {
      state.collapse = !state.collapse
    },
    changeLayout: (state, layout) => {
      state.layout = layout
    },
    changeOldLayout: (state, oldLayout) => {
      state.oldLayout = oldLayout
      console.log('修改后', state.oldLayout)
    },
    changeDevice: (state, device) => {
      state.device = device
    }
  },
  actions: {
    changeCollapse ({ commit }) {
      commit('changeCollapse')
    },
    changeLayout ({ commit, state }, { layout, alter = false }) {
      commit('changeLayout', layout)
      if (alter) {
        commit('changeOldLayout', layout)
      }
    },
    changeDevice: ({ commit }, device) => {
      commit('changeDevice', device)
    }
  }
}
