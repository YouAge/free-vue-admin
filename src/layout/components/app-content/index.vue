<!--github： https://github.com/YouAge-->
<template>
  <div class="app-container">
    <transition mode="out-in" name="fade-transform">
      <keep-alive>
        <router-view class="free-app-height" />
      </keep-alive>
    </transition>
    <footer v-show="footerCopyright" class="footer-copyright">
      free-vue-admin 中后台管理系统
    </footer>
  </div>
</template>

<script>
export default {
  name: 'appContent',
  data () {
    return {
      footerCopyright: true
    }
  }
}
</script>

<style scoped lang="less">
  .app-container {
    width: 100%;
    color: rgba(0, 0, 0, 0.45);
    .free-app-height {
      min-height: @base-app-main-height;
    }
    .footer-copyright {
      min-height: 50px;
      line-height: 50px;
      color: rgba(0, 0, 0, 0.45);
      text-align: center;
      border-top: 1px dashed @base-border-color;
    }
  }
</style>
