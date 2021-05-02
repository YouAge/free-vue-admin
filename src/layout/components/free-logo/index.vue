<!--github： https://github.com/YouAge-->
<template>
  <div class="free-logo">
    <router-link to="/" class="sidebar-logo-link">
      <template v-if="isCollapse">
        <free-icon name="free-logo"/>
      </template>
      <template v-else>
          <free-icon name="free-logo"/>
          <h1>FreeAdmin</h1>
      </template>
    </router-link>
  </div>
</template>

<script>
  import FreeIcon from "@/components/free-icon";
  export default {
    name: 'freeLogo',
    components: {FreeIcon},
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
    text-align: center;
    img {
      height: 100%;
      width: 100%;
    }
  .sidebar-logo-link{
    //display: flex;
    color: #fff;
    align-items: center;
    line-height: @base-top-bar-height;

    svg{
      font-size: 38px;
      line-height: 65px;
      margin-top: 10px;
    }
    h1{
      display: inline-block;
      font-size: 22px;
      font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
      font-weight: 600;
      margin: 0;
      line-height: @base-top-bar-height;
    }

  }

  }
</style>
