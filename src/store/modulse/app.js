/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

export default {
  state: {
    collapse: false
  },
  getters: {
    isCollapse: (state) => state.collapse
  },
  mutations: {
    changeCollapse: (state) => {
      state.collapse = !state.collapse
    }
  },
  actions: {
    changeCollapse({commit}) {
      commit('changeCollapse')
    }
  }
}
