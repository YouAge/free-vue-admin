<template>
  <div class="across-menus">
    <div class="horizontal-width">
      <el-row>
        <!--      <el-col :xl="5" :lg="7" :md="7" :sm="7" :xs="7">-->
        <el-col :xl="5" :lg="5" :md="5" :sm="5" :xs="5">
          <free-logo />
        </el-col>
        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <el-menu
            :background-color="variables['menu-background']"
            :text-color="variables['menu-color']"
            :active-text-color="variables['menu-color-active']"
            :default-active="activeMenu"
            mode="horizontal"
            menu-trigger="hover"
          >
            <template v-for="item in sidebarMenu">
              <sidebar-item
                :parent-item="item"
                :key="item.name"
                :base-path="item.path"
              />
            </template>
          </el-menu>
        </el-col>
        <el-col :xl="7" :lg="7" :md="7" :sm="7" :xs="7">
          <div class="right-panel">
            <free-top-icons />
            <user-navbar style="color: #ECECEC" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import FreeLogo from '@/layout/components/free-logo'
import FreeSubMenu from '@/layout/components/siderbar/freeSubMenu'
import { mapState } from 'vuex'
import variabless from '@/assets/style/resources/variables.less'
import SidebarItem from '@/layout/components/siderbar/sidebarItem'
import UserNavbar from '@/layout/components/navbar/user-navbar'
import SetThemeBar from '@/layout/components/setThemeBar'
import FreeIcon from '@/components/free-icon'
import TooltipIcon from '@/components/free-icon/tooltip-icon'
import FreeTopIcons from '@/layout/components/navbar/freeTopIcons'
export default {
  name: 'acrossMenus',
  components: {
    FreeTopIcons,
    TooltipIcon,
    FreeIcon,
    SetThemeBar,
    UserNavbar,
    FreeSubMenu,
    FreeLogo,
    SidebarItem
  },
  props: {},
  computed: {
    ...mapState({
      sidebarMenu: (store) => store.permission.sidebarMenu
    }),

    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      return path
    },
    variables () {
      return variabless
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
  .across-menus {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: @base-top-bar-height;
    background: @base-menu-background;
    .horizontal-width {
      background: @base-menu-background;
      width: 88%;
      margin: auto;
    }
    ::v-deep {
      .el-menu {
        &.el-menu--horizontal {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: @base-top-bar-height;
          border-bottom: 0 solid transparent;
        }
        .el-menu-item,
        .el-submenu__title {
          padding: 0 15px;
        }
        /** 媒体查询*/
        @media only screen and(max-width: 767px) {
          .el-menu-item,
          .el-submenu__title {
            padding: 0 8px;
          }
          li:nth-child(4),
          li:nth-child(5) {
            display: none !important;
          }
        }

        > .el-menu-item {
          height: @base-top-bar-height;
          line-height: @base-top-bar-height;
        }

        > .el-submenu {
          .el-submenu__title {
            height: @base-top-bar-height;
            line-height: @base-top-bar-height;
          }
        }
      }
    }

    // 右边图标
    .right-panel {
      display: flex;
      //flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
      height: @base-top-bar-height;
      ::v-deep {
      }
      > div {
        margin-left: 10px;
        font-weight: bolder;
      }
    }
  }
</style>
