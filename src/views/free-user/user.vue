<!--github： https://github.com/YouAge-->
<template>
  <div class="user-content">

  <f-chart />
  </div>
</template>

<script>
import FChart from '@/components/free-chart/src'
export default {
  name: 'user',
  components: { FChart },
  data(){
    return{
      status:true,
      config:{
        expandTrigger:'hover'
      },
      ws:'',
      timeId:new Date().getTime(),
      content:{
        text:"这是一个消息"
      }
    }
  },
  methods:{
    select(item){
      console.log(item)
    },
    wsSend(){
      console.log('发送消息')
      this.content.uid = `${this.timeId}`
      this.content.text = `发送来消息： ${new Date()}`
      this.ws.send( JSON.stringify(this.content))
    },
    message(evt){
      console.log('获取服务器的消息',evt)
    },
    close(){
      console.log('关闭')
    },
    wsError(){
      console.log('连接错误')
    }

  },
  mounted () {
     this.ws = new WebSocket(`ws://localhost:8997/web?id=${this.timeId}`);
     this.ws.onopen =()=>{
       console.log('链接成功',JSON.stringify(this.content),this.content)
       this.content.uid =  `${this.timeId}`
       this.ws.send(JSON.stringify(this.content))
     }
     this.ws.onmessage =this.message
    this.ws.onerror = this.wsError
  },
  deactivated () {
    this.ws.close()
    this.ws.onclose = this.close

  }

}
</script>

<style scoped lang="less">
.free-panel{
  width: 200px;
  //background-color: #0e7dba;
}
::v-deep{
  .el-cascader-menu{
    background-color: #41B584;
  }
}


.fre-test{
  display: flex;
}
</style>
