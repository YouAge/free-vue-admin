<!--github： https://github.com/YouAge-->
<template>
  <el-menu-item :index="handlePath(routeChildren.path)" @click="handleLink">
    <div>
      <i :class="routeChildren.meta.icon"></i>
      <span slot="title">{{ $t(routeChildren.meta.title) }}</span>
    </div>

    <el-tag type="danger" effect="dark" v-if="routeChildren.meta.msg">
      {{ routeChildren.meta.msg }}
    </el-tag>
  </el-menu-item>
</template>

<script>
import { isExternal } from '@/utils/tool'
import path from 'path'
import useRoute from '@/layout/components/useRoute'
export default {
  name: 'freeMenuItem',
  props: {
    routeChildren: {
      type: Object,
      default () {
        return null
      }
    },
    parentItem: {
      type: Object,
      default: null
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  mixins:[useRoute],
  methods: {
    /** 处理，判断path */
    handlePath (routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    },
    /** 菜单页面path 统一跳转 */
    handleLink () {
      const routePath = this.routeChildren.path
      let url = this.basePath
      if(!isExternal(this.basePath)){
        url = path.resolve(this.basePath, routePath)
      }
      this.dealRouter({path:url,name:this.routeChildren.name,meta:this.routeChildren.meta})
    }
  },
  mounted () {}
}
</script>

<style scoped lang="less">
  .el-menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    //text-align: center;
  }
</style>
