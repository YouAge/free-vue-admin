<!--github： https://github.com/YouAge-->
<template>
  <div>
    <div class="bg-banner" />
    <div id="login-box">
      <div class="login-banner" />
      <el-form ref="form" :model="form" :rules="rules" class="login-form" auto-complete="on" label-position="left">
        <div class="title-container">
          <h3 class="title">{{ title }}管理后台</h3>
        </div>
        <div>
          <el-form-item prop="account">
            <el-input ref="name" v-model="form.username" placeholder="用户名" type="text" tabindex="1" auto-complete="on">
              <free-icon slot="prefix" name="username" />
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input ref="password" v-model="form.password" :type="passwordType" placeholder="密码"
                      tabindex="2" auto-complete="on" @keyup.enter.native="handleLogin">
              <free-icon slot="prefix" name="password" />
              <free-icon slot="suffix" :name="passwordType === 'password' ? 'eye' : 'eye-open'" @click="showPassword" />
            </el-input>
          </el-form-item>
        </div>
        <el-checkbox v-model="form.remember">记住我</el-checkbox>
        <el-button :loading="loading" type="primary" style="width: 100%;" @click.native.prevent="handleLogin">登 录</el-button>
<!--        <div style="margin-top: 20px; margin-bottom: -10px; color: #666; font-size: 14px; text-align: center; font-weight: bold;">-->
<!--          <span style="margin-right: 5px;">账号一键登录：</span>-->
<!--          <el-button type="danger" size="mini" @click="testAccount('admin')">admin</el-button>-->
<!--          <el-button type="danger" size="mini" plain @click="testAccount('test')">test</el-button>-->
<!--        </div>-->
      </el-form>
    </div>
<!--    <Copyright v-if="$store.state.settings.showCopyright" />-->
  </div>
</template>

<script>
  import '@/mock/index'
  import FreeIcon from '@/components/free-icon'
  export default {
    name: 'Login',
    components: { FreeIcon },
    data() {
      return {
        title: process.env.VUE_APP_TITLE,
        form: {
          username: localStorage.login_account || '2681781',
          password: '123456',
          remember: !!localStorage.login_account
        },
        rules: {
          username: [
            { required: true, trigger: 'blur', message: '请输入用户名' }
          ],
          password: [
            { required: true, trigger: 'blur', message: '请输入密码' },
            { min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' }
          ]
        },
        loading: false,
        passwordType: 'password',
        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    methods: {
      showPassword() {
        this.passwordType = this.passwordType === 'password' ? '' : 'password'
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
      },
      handleLogin() {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('user/login', this.form).then(() => {
              this.loading = false
              this.form.remember && localStorage.setItem('login_account', this.form.user)
              this.$router.push({ path: this.redirect || '/' })
            }).catch(() => {
              console.log( '失败')
              this.loading = false
            })
          }
        })
      },
      testAccount(account) {
        this.form.account = account
        this.form.password = '123456'
        this.handleLogin()
      }
    },
    mounted () {
        console.log(this.redirect)
    }
  }
</script>

<style lang="less" scoped>

  .el-form-item--small
  .el-form-item__content{
    line-height: 40px;
  }

  [data-mode=mobile] {
    #login-box {
      max-width: 80%;
      .login-banner {
        display: none;
      }
    }
  }
  ::v-deep input[type=password]::-ms-reveal {
    display: none;
  }
  .bg-banner {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    //background-image: url('~@/assets/imges/login/logo.png');
    background-color: #9DBBBD;
    background-size: cover;
    background-position: center center;
  }
  #login-box {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 5px #999;
    .login-banner {
      width: 300px;
      background-image: url(~@/assets/imges/login/login-banner.jpg);
      background-size: cover;
      background-position: center center;
    }
    .login-form {
      width: 450px;
      padding: 50px 35px 30px;
      overflow: hidden;
      .svg-icon {
        vertical-align: -0.35em;
      }
      .title-container {
        position: relative;
        .title {
          font-size: 22px;
          color: #666;
          margin: 0 auto 30px;
          text-align: center;
          font-weight: bold;
          .text-overflow();
        }
      }
    }
    ::v-deep .el-input {
      display: inline-block;
      height: 48px;
      width: 100%;
      input {
        height: 48px;
      }
      .el-input__prefix {
        left: 10px;
      }
      .el-input__suffix {
        right: 10px;
      }
    }
    .el-checkbox {
      margin: 20px 0;
    }
  }
  .copyright {
    position: absolute;
    bottom: 30px;
    width: 100%;
    margin: 0;
    mix-blend-mode: difference;
  }
</style>
