<!--github： https://github.com/YouAge-->
<template>
  <div class="fre-test">
    <el-cascader-panel
      ref="panel"
      v-show="!filtering"
      v-model="checkedValue"
      :options="options"
      :props="config"
      :border="false"
      :render-label="$scopedSlots.default"
    ></el-cascader-panel>
  </div>
</template>

<script>
export default {
  name: 'FCascader',
  props:{
    options:{
      type:Array,
    },
    config:{
      type:Object,
      default:{}
    }
  }
}
</script>

<style scoped>

</style>
