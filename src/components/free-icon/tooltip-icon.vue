<!--github： https://github.com/YouAge-->
<template>
  <span :title="text" @click="change">
    <free-icon :name="name" />
  </span>
</template>

<script>
import FreeIcon from '@/components/free-icon/index'
export default {
  name: 'tooltip-icon',
  components: { FreeIcon },
  props: {
    name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    change () {
      this.$emit('change')
    }
  }
  // mounted() {
  //   window.addEventListener('change',this.change)
  // },
  // beforeDestroy() {
  //   window.addEventListener('change',this.change)
  // },
}
</script>

<style scoped lang="less">
  ::v-deep {
    .el-tooltip__popper {
      color: #000000;
    }
  }
</style>
