<!--github： https://github.com/YouAge-->
<template>
  <div class="user-content">
    <el-button @click="wsSend">点击链接web</el-button>
  </div>
</template>

<script>
export default {
  name: 'user',
  data(){
    return{
      status:true,
      options:[
        {value:'1',label:"测试一",children:[
            {value:'1-1',label:"测试1-1"},
            {value:'1-2',label:"测试1-1"},
            {value:'1-3',label:"测试1-1",children:[
                {value:'1-3-1',label:"测试1-3-1"},
              ]}
          ]},
        {value:'2',label:"测试一"},
        {value:'3',label:"测试一"}
      ],
      config:{
        expandTrigger:'hover'
      },
      ws:'',
      content:{
        timeId:new Date().getTime(),
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
     this.ws = new WebSocket("ws://localhost:8997/web?id=23");
     this.ws.onopen =()=>{
       console.log('链接成功')
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
