<!--github： https://github.com/YouAge-->
<template>
  <div class="error-content">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="pic-error">

          <img
            alt="404"
            class="pic-error-child left"
            src="@/assets/imges/404.png"
          />

        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="bullshit">
          <div class="bullshit-oops">{{ oops }}</div>
          <div class="bullshit-headline">{{ headline }}</div>
          <div class="bullshit-info">{{ info }}</div>
          <a class="bullshit-return-home" href="/">
            {{ jumpTime }}s&nbsp;{{ btn }}
          </a>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: '404',
  data () {
    return {
      jumpTime: 5,
      oops: '抱歉!',
      headline: '当前页面不存在...',
      info: '请检查您输入的网址是否正确，或点击下面的按钮返回首页。',
      btn: '返回首页',
      timer: 0
    }
  }
}
</script>

<style scoped lang="less">
.error-content{
  //position: absolute;
  //display: flex;
   .pic-error{
      width: 400px;
      height: 200px;
      img{
        width: 100%;
        height: 100%;
      }
   }
}
</style>
