<template>
  <div>
    <!--  // 主题设置-->
    <tooltip-icon text="主题设置" name="free-theme" @change="openThemeSet" />
    <el-drawer
      title="主题配置"
      :visible.sync="drawer"
      direction="rtl"
      append-to-body
      size="330px"
      @close="setTheme"
    >
      <el-scrollbar style="height: 90vh">
        <div>
          <el-divider>主题</el-divider>
          <them-style @change="switchover" />
          <el-divider>界面设置</el-divider>
        </div>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script>
import FreeIcon from '@/components/free-icon'
import TooltipIcon from '@/components/free-icon/tooltip-icon'
import ThemStyle from '@/components/them-style'
import { mapActions } from 'vuex'
import { setThemeConfig } from '@/utils/handling'
export default {
  name: 'setThemeBar',
  components: {
    ThemStyle,
    TooltipIcon,
    FreeIcon
  },
  data () {
    return {
      drawer: false,
      theme: {}
    }
  },
  methods: {
    ...mapActions({
      changeLayout: 'app/changeLayout'
    }),
    setTheme () {
      setThemeConfig(this.$store.state.app)
    },
    openThemeSet () {
      this.drawer = true
    },
    /** 切换主题 */
    switchover (layout) {
      this.changeLayout({ layout, alter: true })
      this.setTheme()
    }
  }
}
</script>

<style scoped></style>
