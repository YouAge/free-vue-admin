<!--github： https://github.com/YouAge-->
<template>
  <div class="free-content">
    <iframe :src="frameSrc" ref="frameRef" class="free-content"></iframe>
  </div>
</template>

<script>
export default {
  name: 'freeIframe',
  props:{
    frameSrc:{
      type:String
    }
  }
}
</script>

<style scoped>

</style>
