<!--github： https://github.com/YouAge-->
<template>
  <div class="layout">
    <div
      v-if="layout === 'vertical'"
      :class="verticalMin ? 'vertical-min' : ''"
    >
      <!--    //左边菜单栏-->
      <div
        class="mask"
        v-if="verticalMin && !isCollapse"
        @click="hiddenCollapse"
      ></div>
      <siderbar :is-collapse="isCollapse"></siderbar>
      <!--    // 右边-->
      <div :class="isCollapse ? 'main-container' : 'max-container'">
        <!--        //顶部，导航栏和标签-->
        <div>
          <!--        // 顶部-->
          <navnar></navnar>
          <!--        // tag菜单-->
          <free-tab-bar />
        </div>
        <!--      // 内容-->
        <free-msg />
        <app-content />
      </div>
    </div>

    <template v-else>
      <!-- //横向菜单  -->

      <across-menus></across-menus>
      <!--          <navnar></navnar>-->
      <div class="tag-view-show">
        <div class="horizontal-width">
          <free-tab-bar />
        </div>
      </div>
      <div class="horizontal-width">
        <free-msg />
        <app-content />
      </div>
    </template>
  </div>
</template>

<script>
import siderbar from '@/layout/components/siderbar'
import Navnar from '@/layout/components/navbar'
import freeTabBar from './components/free-tag-bar'
import AppContent from '@/layout/components/app-content'
import { mapGetters, mapActions } from 'vuex'
import { visualBreadth } from '@/utils/tool'
import AcrossMenus from '@/layout/components/across-menus'
import FreeMsg from '@/layout/components/free-msg'
export default {
  name: 'index',
  components: {
    FreeMsg,
    AcrossMenus,
    AppContent,
    Navnar,
    siderbar,
    freeTabBar
  },

  data () {
    return {
      verticalMin: false
    }
  },
  computed: {
    ...mapGetters({
      isCollapse: 'app/isCollapse',
      layout: 'app/layout',
      oldLayout: 'app/oldLayout'
    })
  },
  methods: {
    ...mapActions({
      changeCollapse: 'app/changeCollapse',
      changeLayout: 'app/changeLayout'
    }),
    // 检查屏幕框架，低于999的改 改成纵向版
    handleResize () {
      // if (!document.hidden) {
        if (visualBreadth()) {
          // 手机模式
          this.verticalMin = true
          this.changeLayout({ layout: 'vertical' })
        } else {
          this.verticalMin = false
          // 变回原来的主题模式
          this.changeLayout({ layout: this.oldLayout })
        }
      // }
    },
    // 隐藏 菜单蓝
    hiddenCollapse () {
      this.changeCollapse()
    }
  },
  mounted () {
    // this.oldLayout = this.layout
    const userAgent = navigator.userAgent
    this.handleResize()
  },
  /** 监听响应屏幕宽度，实时css样式 */
  beforeMount () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped lang="less">
  .layout {
    position: relative;
    width: 100%;
    height: 100%;

    /** 横线布局*/
    .horizontal-width {
      width: 88%;
      margin: auto;
      .app-container {
        margin-top: @base-padding;
        margin-bottom: @base-padding;
        background: @base-color-white;
      }
    }
    .tag-view-show {
      background: @base-color-white;
      box-shadow: @base-box-shadow;
    }
  }

  .max-container {
    margin-left: @base-left-menu-width;
  }
  .main-container {
    margin-left: @base-left-menu-width-min;
  }

  .main-container,
  .max-container {
    .app-container {
      width: calc(100% - @base-padding - @base-padding);
      margin: @base-padding auto;
      background: @base-color-white;
      border-radius: @base-border-radius;
    }
  }

  .vertical-min {
    // 手机端
    .mask {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: @base-z-index - 1;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background: #000;
      opacity: 0.5;
    }
    .max-container {
      margin-left: 0;
    }
    ::v-deep {
      .el-pager,
      .el-scrollbar__wrap {
      }

      .scrollbar-wrapper.el-scrollbar.is-collapse {
        width: 0 !important;
      }

      .main-container {
        margin-left: 0;
      }
    }
  }
</style>
