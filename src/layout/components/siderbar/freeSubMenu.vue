<!--github： https://github.com/YouAge-->
<template>
  <el-submenu
    ref="subMenu"
    :index="handlePath(parentItem.path)"
    :popper-append-to-body="false"
  >
    <template slot="title">
      <i :class="parentItem.meta.icon"></i>
      <span slot="title">{{ $t(parentItem.meta.title) }}</span>
    </template>
    <slot />
  </el-submenu>
</template>

<script>
import { isExternal } from '@/utils/tool'
import path from 'path'
export default {
  name: 'freeSubMenu',
  props: {
    parentItem: {
      type: Object,
      default () {
        return null
      }
    },
    basePath: {
      type: String,
      default: ''
    },
    routeChildren: {
      type: Object,
      default () {
        return null
      }
    }
  },
  methods: {
    handlePath (routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  },
  mounted () {}
}
</script>

<style scoped></style>
