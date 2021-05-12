<!--github： https://github.com/YouAge-->
<template>
  <div class="icon-fun">
    <tooltip-icon
      :name="screen ? 'full-screen' : 'quit-full-screen'"
      text="全屏"
      @change="full_screen"
    />
    <tooltip-icon
      :name="language === 'en' ? 'Chinese' : 'English'"
      :text="language === 'en' ? '中文切换' : '英文切换'"
      @change="switchoverLanguage"
    />
    <set-theme-bar />
  </div>
</template>

<script>
import TooltipIcon from '@/components/free-icon/tooltip-icon'
import SetThemeBar from '@/layout/components/setThemeBar'
import { exitFullScreen, fullscreenEnable, reqFullScreen } from '@/utils/tool'
import { setI18n } from '@/utils/handling'

export default {
  name: 'freeTopIcons',
  data () {
    return {
      screen: true,
      language: this.$i18n.locale
    }
  },
  components: {
    TooltipIcon,
    SetThemeBar
  },
  methods: {
    full_screen () {
      if (fullscreenEnable()) {
        exitFullScreen()
        this.screen = true
      } else {
        reqFullScreen()
        this.screen = false
      }
    },
    switchoverLanguage () {
      // console.log(this.$i18n.locale)

      if (this.language === 'en') {
        this.$i18n.locale = 'zh'
        this.language = 'zh'
      } else {
        this.$i18n.locale = 'en'
        this.language = 'en'
      }
      // 缓存
      setI18n(this.$i18n.locale)
    }
  }
}
</script>

<style scoped lang="less">
  .icon-fun {
    display: flex;
    > div,
    span,
    > svg {
      margin-right: 15px;
      font-size: 18px;
      cursor: pointer;
    }
  }
</style>
