/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */



class FWebSocket{

  constructor (url) {
    this.url = url

    this.init()

  }

  init(){
    // 实例化socket
    this.socket = new WebSocket(this.url)
    // 监听socket连接
    this.socket.onopen = this.open
    // 监听socket错误信息
    this.socket.onerror = this.error
    // 监听socket消息
    this.socket.onmessage = this.getMessage
  }

}
