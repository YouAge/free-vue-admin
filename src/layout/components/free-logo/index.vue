<!--github： https://github.com/YouAge-->
<template>
  <div class="free-logo">
    <router-link to="/">
      <template v-if="isCollapse">
        <div class="mes-logo-font">FREE</div>
      </template>
      <template v-else>
<!--        <img src="../../../assets/imges/layot/logo-white.png" />-->
      </template>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'freeLogo',
    props: {
      isCollapse: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style scoped lang="less">
  .free-logo {
    position: relative;
    height: @base-top-bar-height;
    overflow: hidden;
    line-height: @base-top-bar-height;
    background: @base-menu-background;
    img {
      height: 100%;
      width: 100%;
    }
  }
</style>
