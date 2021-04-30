<!--github： https://github.com/YouAge-->
<template>
  <div class="layout">
    <div>
      <!--    //左边菜单栏-->
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
        <app-content />
      </div>
    </div>
  </div>
</template>

<script>
  import siderbar from '@/layout/components/siderbar'
  import Navnar from '@/layout/components/navbar'
  import freeTabBar from './components/free-tag-bar'
  import AppContent from '@/layout/components/app-content'
  import { mapGetters } from 'vuex'
  import { visualBreadth } from '@/utils/tool'

  export default {
    name: 'index',
    components: { AppContent, Navnar, siderbar, freeTabBar },

    data() {
      return {}
    },
    computed: {
      ...mapGetters(
        {isCollapse:'app/isCollapse'}),
    },
    methods:{
      handleResize(){
        console.log(document.body.getBoundingClientRect().width - 1,document.hidden)
        if(visualBreadth){
          console.log('手机端')
        }else {
          debugger
          console.log('电脑端')
        }
      }
    },
    mounted() {
      console.log(this.isCollapse)

      const userAgent = navigator.userAgent

      // 检查屏幕框架，低于999的改 改成纵向版
      if(visualBreadth){
        console.log('手机端')
      }else {
        console.log('电脑端')
      }

    },
    /** 监听响应屏幕宽度，实时css样式*/
    beforeMount() {
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize)
    },

  }
</script>

<style scoped lang="less">
  .max-container {
    margin-left: @base-left-menu-width;
  }
  .main-container {
    margin-left: @base-left-menu-width-min;
  }
</style>
