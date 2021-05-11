<!--github： https://github.com/YouAge-->
<template>
  <div class="navbar">
    <el-row :gutter="15">
      <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left-panel">
          <i
            :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            :title="isCollapse ? '展开' : '收起'"
            class="fold-unfold"
            @click="changeCollapse"
          ></i>
          <free-breadcrumb />
        </div>
      </el-col>
      <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <free-top-icons style="color: #2f3447" />
          <!--          // user-hom-->
          <user-navbar />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import FreeBreadcrumb from '@/layout/components/navbar/freeBreadcrumb'
import { mapActions, mapGetters } from 'vuex'
import FreeIcon from '@/components/free-icon'
import SetThemeBar from '@/layout/components/setThemeBar'
import UserNavbar from '@/layout/components/navbar/user-navbar'
import FreeTopIcons from '@/layout/components/navbar/freeTopIcons'
export default {
  name: 'navnar',
  components: {
    FreeTopIcons,
    UserNavbar,
    SetThemeBar,
    FreeIcon,
    FreeBreadcrumb
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      isCollapse: 'app/isCollapse'
    })
  },
  methods: {
    ...mapActions({
      changeCollapse: 'app/changeCollapse',
      logout: 'user/logout'
    })
  }
}
</script>

<style scoped lang="less">
  .navbar {
    position: relative;
    height: @base-nav-bar-height;
    padding-right: @base-padding;
    padding-left: @base-padding;
    overflow: hidden;
    user-select: none;
    background: @base-color-white;
    box-shadow: @base-box-shadow;
    .left-panel {
      display: flex;
      align-self: center;
      //justify-content: center;
      height: @base-nav-bar-height;
      align-items: center;
      .fold-unfold {
        color: @base-color-gray;
        cursor: pointer;
      }

      ::v-deep {
        .breadcrumb-container {
          margin-left: 10px;
        }
      }
    }
    .right-panel {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
      height: @base-nav-bar-height;
      .icon-fun {
        display: flex;
        > div,
        > svg {
          margin-right: 15px;
          font-size: 18px;
          cursor: pointer;
        }
      }
      > div {
        margin-left: 10px;
        font-weight: bolder;
      }
    }
  }

  // 功能
  .avatar-dropdown {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    height: 50px;
    padding: 0;

    .user-avatar {
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-radius: 50%;
    }

    .user-name {
      position: relative;
      margin-left: 5px;
      cursor: pointer;
    }
  }
</style>
