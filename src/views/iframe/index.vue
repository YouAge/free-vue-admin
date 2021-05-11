<!--github： https://github.com/YouAge-->
<template>
  <div class="free-content">
<!--    <free-iframe :frame-src="'https://2x.antdv.com/'"></free-iframe>-->
    <iframe :src="iframeSrc" ref="frameRef" class="free-item"></iframe>
  </div>
</template>

<script>
// import freeIframe from '@/components/free-iframe'
export default {
  name: 'index',
  data(){
    return{
      iframeSrc:""
    }
  },
  watch:{
    $route: {
      handler (newRoute,oldRoute) {
        const { params, meta, path } = newRoute
         this.setIframeSrc(meta)
      },
      immediate: true
    }
  },
  created () {
    console.log('获取参数',this.$route)
  },
  methods:{
    setIframeSrc(meta){
      if(meta.path){
        this.iframeSrc = meta.path
      }

    }
  }
}
</script>

<style scoped lang="less">
.free-item{
  min-height: calc(100vh - 50px - 55px - 20px - 20px - 60px);
  width: 100%;
}
</style>
