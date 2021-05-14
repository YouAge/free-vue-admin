/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: websocket
 */


export default {

  state:{
    webUrl:'',
    socket:''
  },

  mutations:{

    createInit(state){
      // 实例化socket
      state.socket = new WebSocket(state.webUrl)
      // 监听socket
      state.socket.onopen = state.open
      // 监听错误消息
      // state.onerror = ''
      state.commit('webError')
    },
    webError(state){
      state.socket.onerror = ()=>{
        console.log('')
      }
    },
    send(state,msg){
      state.socket.send(msg)
    },
    close(){

    }

  }

}
