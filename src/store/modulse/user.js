/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */
import {
  setAccessToken,
  getAccessToken,
  delAccessToken,
  setRouterTag
} from '@/utils/handling'
import {getUserInfo, login} from '@/api/user'
import {TOKEN_NAME} from '@/config/setting'
import {hierarchy} from '@/utils/recusionRouter'

export default {
  namespaced: true,
  state: {
    token: getAccessToken(),
    user: '',
    action: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setAccessToken(token)
    },
    delToken(state) {
      state.token = ''
      delAccessToken()
    }
  },
  actions: {
    logout({commit}) {
      commit('delToken')
      commit('permission/SET_MENU', [], {root: true})
      setRouterTag([])
      // console.log('退出')
      location.reload()
    },
    login({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then((data) => {
          const token = data.data[TOKEN_NAME]
          if (token) {
            commit('setToken', token)
            resolve()
          } else {
            // console.log('请求错误')
            reject('错误')
          }
        })
      })
    },
    async requiresUserInfo({commit, state, dispatch}) {
      const {data} = await getUserInfo(state.token)
      if (!data) {
        console.log('身份验证失败，请重新登入...')
        return false
      }
      // 处理数据
      // console.log(data)
      dispatch('permission/FETCH_PERMISSION', data.menus, {
        root: true
      })
    }
  }
}
