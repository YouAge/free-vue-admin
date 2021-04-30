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
            @click="handleCollapse"
          ></i>
          <free-breadcrumb />
        </div>
      </el-col>
      <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <div style="color: #2f3447">
            <!--            <Icon type="md-refresh" />-->
          </div>

          <!--          // user-hom-->
          <el-dropdown @command="handleCommand">
            <span class="avatar-dropdown">
              <el-avatar class="user-avatar" :src="avatar"></el-avatar>
              <!--      <img class="user-avatar" :src="avatar" alt="" />-->
              <div class="user-name">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </div>
            </span>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="github">个人信息</el-dropdown-item>
              <el-dropdown-item command="logout" divided>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import FreeBreadcrumb from '@/layout/components/navbar/freeBreadcrumb'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'navnar',
    components: { FreeBreadcrumb },
    data() {
      return {
        avatar: '',
        username: 'admin',
      }
    },
    computed: {
      ...mapGetters({
        isCollapse:'app/isCollapse'}),
    },
    methods: {
      ...mapActions({
        changeCollapse:'app/changeCollapse',
        logout:'user/logout'
      }),
      handleCollapse() {
        this.changeCollapse()
      },
      handleCommand(command) {
        switch (command) {
          case 'logout':
            this.logout()
            break
          case 'personalCenter':
            this.personalCenter()
            break
          case 'github':
            window.open('https://github.com/chuzhixin/vue-admin-beautiful')
            break
          case 'gitee':
            window.open('https://gitee.com/chu1204505056/vue-admin-beautiful')
            break
          case 'pro':
            window.open(
              'https://chu1204505056.gitee.io/admin-pro/?hmsr=homeAd&hmpl=&hmcu=&hmkw=&hmci='
            )
            break
          case 'plus':
            window.open(
              'https://chu1204505056.gitee.io/admin-plus/?hmsr=homeAd&hmpl=&hmcu=&hmkw=&hmci='
            )
        }
      },
      personalCenter() {
        this.$router.push('/personalCenter/personalCenter')
      },
    },
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
