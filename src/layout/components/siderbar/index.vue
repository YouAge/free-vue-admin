<!--github： https://github.com/YouAge-->
<template>
  <el-scrollbar  class="scrollbar-wrapper" :class="{ 'is-collapse': isCollapse }">
<!--    logo-->
    <free-logo :is-collapse="isCollapse" />
<!--    //菜单那-->
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      :background-color="variables['menu-background']"
      :text-color="variables['menu-color']"
      :active-text-color="variables['menu-color-active']"
      :collapse="isCollapse">
        <template  v-for="item in sidebarMenu">
          <sidebar-item :parent-item="item" :key="item.name" :base-path='item.path'/>
        </template>

    </el-menu>

  </el-scrollbar>
</template>

<script>
import SidebarItem from "@/layout/components/siderbar/sidebarItem";
import FreeLogo from "@/layout/components/free-logo";
import { menus } from "@/mock/menus";
import variabless from "@/assets/style/resources/variables.less"
import { mapState } from 'vuex'
import FreeMenuItem from '@/layout/components/siderbar/freeMenuItem'
export default {
  name: "siderbar",
  components: { FreeMenuItem, FreeLogo, SidebarItem },
  props:{
    isCollapse:{
      default:false,
      type:Boolean
    }
  },
  data(){
    return{
      activate: menus
    }
  },
  computed:{
    ...mapState({
      sidebarMenu: store=>store.permission.sidebarMenu
    }),

    activeMenu(){
      const route = this.$route
      const {meta,path} = route
      return path;
    },
    variables(){
      return variabless
    },

  },
  methods:{
    handleLink(){

    },
    handleOpen(){

    },
    handleClose(){

    }
  },
  created() {

  }
};
</script>

<style scoped lang="less">
.scrollbar-wrapper{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: @base-z-index;
  width: @base-left-menu-width;
  height: 100vh;
  overflow: hidden;
  background: @base-menu-background;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  transition: width @base-transition-time;
  // 折叠
  &.is-collapse{
    width: @base-left-menu-width-min;
    border-right: 0;
    ::v-deep{
      .el-menu{
        transition: width @base-transition-time;
      }
      .el-menu--collapse{
        border-right: 0;
        .el-submenu__icon-arrow{
          right: 10px;
          margin-top: -3px;
        }
      }
    }

  }


  ::v-deep{
    .el-menu-item.is-active,
    .el-menu-item:hover {
      background-color: @base-menu-background-active !important;
    }

    .el-scrollbar__wrap{
      overflow-x: auto;
    }
    .el-menu{
      border: 0;
    }
  }

}
</style>
