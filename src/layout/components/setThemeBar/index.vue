<template>
<div>
<!--  // 主题设置-->
  <free-icon name="free-theme" @click="openThemeSet"/>
  <el-drawer
    title="主题配置"
    :visible.sync="drawer"
    direction="rtl"
    append-to-body
    size="400px"
    >
    <el-scrollbar style="height: 90vh;">
      <div style="color: #2f3447">
        主题设置
      </div>
    </el-scrollbar>
  </el-drawer>
</div>
</template>

<script>
import FreeIcon from "@/components/free-icon";
export default {
  name: "setThemeBar",
  components: {FreeIcon},
  data(){
    return{
      drawer:false,
      theme:{

      }
    }
  },
  methods:{
    openThemeSet(){
      this.drawer =true
    }
  }
}
</script>

<style scoped>

</style>
