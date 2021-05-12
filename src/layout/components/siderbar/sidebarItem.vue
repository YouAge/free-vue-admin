<!--github： https://github.com/YouAge-->
<template>
  <component
    :is="currentMenus"
    v-if="!parentItem.meta.sidebar"
    :parent-item="parentItem"
    :base-path="basePath"
    :route-children="routeChildren"
  >
    <template v-if="parentItem.children && parentItem.children.length">
      <sidebar-item
        v-for="item in parentItem.children"
        :parent-item="item"
        :key="item.name"
        :base-path="handlePath(item.path)"
      ></sidebar-item>
    </template>
  </component>
</template>

<script>
import FreeMenuItem from './freeMenuItem'
import freeSubMenu from './freeSubMenu'
import { isExternal } from '@/utils/tool'
import path from 'path'
export default {
  name: 'sidebarItem',
  components: { FreeMenuItem, freeSubMenu },
  props: {
    parentItem: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentMenus () {
      /**  判断层级关系（单个childre改成item， 添加个字段强制分组显示）， 是否显示， */
      if (
        this.handleChildren(this.parentItem.children, this.parentItem) &&
          this.routeChildren
      ) {
        return 'freeMenuItem'
      } else {
        return 'freeSubMenu'
      }
    }
  },
  methods: {
    handleChildren (children = [], parent) {
      /** 处理path 层级最后一断重复的问题, 还有层级关系， 和隐藏菜单 TODO bug待修复 */
      if (children === null) children = []
      const showChildren = children.filter((item) => {
        if (item.meta.sidebar) {
          return false
        } else {
          this.routeChildren = item
          return true
        }
      })
      if (showChildren.length === 1) {
        return true
      }
      if (showChildren.length === 0) {
        this.routeChildren = {
          ...parent,
          path: ''
        }
        return true
      }
      return false
    },
    handlePath (routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style scoped></style>
