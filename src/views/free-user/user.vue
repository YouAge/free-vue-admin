<!--github： https://github.com/YouAge-->
<template>
  <div class="user-content">
    <el-cascader-panel options="" v-model="status" :props="config">
    </el-cascader-panel>
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
            {value:'1-3',label:"测试1-1"}
          ]},
        {value:'2',label:"测试一"},
        {value:'3',label:"测试一"}
      ],
      config:{
        expandTrigger:'click'
      }
    }
  }
}
</script>

<style scoped>

</style>
