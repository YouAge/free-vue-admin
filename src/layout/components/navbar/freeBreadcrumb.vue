<!--github： https://github.com/YouAge-->
<template>
  <el-breadcrumb class="breadcrumb-container" separator="/">
    <el-breadcrumb-item v-for="item in list" :key="item.path">
      {{ $t(item.meta.title) }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'freeBreadcrumb',
  data () {
    return {
      list: this.getBreadcrumb()
    }
  },
  watch: {
    /** 监听路径 */
    $route () {
       console.log('导航',this.$route)
      this.list = this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb () {
      /** 路由层级 */
      return this.$route.matched.filter(
        (item) => item.name && item.meta.title
      )
    }
  }
}
</script>

<style scoped lang="less">
  .breadcrumb-container {
    height: @base-nav-bar-height;
    font-size: @base-font-size-default;
    line-height: @base-nav-bar-height;

    ::v-deep {
      .el-breadcrumb__item {
        .el-breadcrumb__inner {
          a {
            display: flex;
            float: left;
            font-weight: normal;
            color: #515a6e;

            i {
              margin-right: 3px;
            }
          }
        }

        &:last-child {
          .el-breadcrumb__inner {
            a {
              color: #999;
            }
          }
        }
      }
    }
  }
</style>
