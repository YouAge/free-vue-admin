<!--github： https://github.com/YouAge-->
<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
export default {
  name: 'FEcharts',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data(){

  }
}
</script>

<style scoped>

</style>
