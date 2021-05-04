<!--github： https://github.com/YouAge-->
<template>
  <el-dropdown @command="handleCommand">
    <span class="avatar-dropdown">
      <el-avatar class="user-avatar" :src="avatar"></el-avatar>
      <div class="user-name">
        {{ username }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
    </span>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="github">个人信息</el-dropdown-item>
      <el-dropdown-item command="logout" divided> 退出登录 </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'user-navbar',
  data () {
    return {
      avatar: require('@/assets/logo.png'),
      username: 'admin'
    }
  },
  methods: {
    ...mapActions({
      changeCollapse: 'app/changeCollapse',
      logout: 'user/logout'
    }),
    handleCommand (command) {
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
    handleCollapse () {
      this.changeCollapse()
    }
  }
}
</script>

<style scoped lang="less">
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
