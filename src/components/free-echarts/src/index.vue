<!--github： https://github.com/YouAge-->
<template>
  <div :id="id" :class="className" :style="{height:height,width:`${width}`}" />
</template>

<script>
import echarts from '@/plugins/echtarts'

export default {
  name: 'FEcharts',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '100%'
    },
    options:{
      type:Object,
      required: true
    }
  },
  mounted () {
    const lineRefDom = document.getElementById(this.id);
    let brokenLine = echarts.init(lineRefDom);
    brokenLine.setOption(this.options)
    this.$emit('change',brokenLine)
    window.addEventListener('resize', () => {
      brokenLine.resize()
    }) // 响应式
  }

}
</script>

<style scoped>

</style>
