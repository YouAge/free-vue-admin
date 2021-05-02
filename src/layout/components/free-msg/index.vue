<template>
<div class="free-msg">
  <el-carousel v-if="msgList && msgList.length>0"
    height="30px"
    direction="vertical"
    :interval="3000"
    indicator-position="none"
    :autoplay="true" loop
  >
    <el-carousel-item v-for="(item,index) in msgList" :key="index">
      <el-tag type="warning">Msg：</el-tag>
      <a target="_blank" :href="item.url">{{ item.title }}</a>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
  name: "freeMsg",
  data(){
    return{
      msgList:[
        {title:'free-vue-admin架子以搭建完成啦',url:'http://www.baidu.com'},
        {title:'free-vite-vue3-admin已经开始开发中啦',url:'http://www.baidu.com'},
        {title:'free-tool脚手架框架已经开发完成啦',url:'http://www.baidu.com'}
      ]
    }
  },
}
</script>

<style scoped lang="less">
.free-msg{
  height: 30px;
  padding-right: @base-padding;
  padding-left: @base-padding;
  margin-bottom: -20px;
  line-height: 30px;
  cursor: pointer;
  a{
    margin-left: 5px;
    color: #999999;
  }
}
</style>
