<!--github： https://github.com/YouAge-->
<template>
  <div class="free-tag-bar-container">
    <el-tabs
      v-model="tabActive"
      type="card"
      class="tabs-content"
      @tab-click="handleTabClick"
      @tab-remove="handleTabRemove"
    >
      <el-tab-pane
        v-for="item in activeRouteTag"
        :key="item.path"
        :label="$t(item.meta.title)"
        :name="item.name"
        :closable="!isClingy(item)"
      ></el-tab-pane>
    </el-tabs>
    <el-dropdown @command="handleCommand">
      <span style="cursor: pointer">
        更多操作
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="tabs-more">

        <el-dropdown-item command="closeOtherstabs">
          <!--        <vab-icon :icon="['fas', 'times-circle']" />-->
          关闭其他
        </el-dropdown-item>
        <el-dropdown-item command="closeLefttabs">
          <!--        <vab-icon :icon="['fas', 'arrow-alt-circle-left']"></vab-icon>-->
          关闭左侧
        </el-dropdown-item>
        <el-dropdown-item command="closeRighttabs">
          <!--        <vab-icon :icon="['fas', 'arrow-alt-circle-right']"></vab-icon>-->
          关闭右侧
        </el-dropdown-item>
        <el-dropdown-item command="closeAlltabs">
          <!--        <vab-icon :icon="['fas', 'ban']"></vab-icon>-->
          关闭全部
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setRouterTag, getRouterTag } from '@/utils/handling'
import useRoute from '@/layout/components/useRoute'
export default {
  name: 'freeTagBar',
  data () {
    return {
      tabActive: 'home',
      activeRouteTag: getRouterTag()
    }
  },
  mixins:[useRoute],
  watch: {
    $route: {
      handler (newRoute) {
        // 初始化，固定url
        this.initRouterTag()
        const { name, query, params, meta, path } = newRoute
        this.addTagNavList({ name, query, params, meta, path })
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
      sidebarMenu: (state) => state.permission.sidebarMenu
      // activeRouteTag:state => state.permission.activeRouteTag
    })
  },
  methods: {
    initRouterTag () {},
    addTagNavList (item) {
      const oldItem = this.activeRouteTag.filter(
        (rest) => rest.name === item.name
      )
      if (oldItem.length > 0) {
        this.tagsChecked(item)
      } else {
        if (item.meta.clingy) {
          this.activeRouteTag.unshift({ ...item })
        } else {
          this.activeRouteTag.push({ ...item })
        }
        this.tagsChecked(item)
      }
    },
    tagsChecked (item) {
      this.tabActive = item.name
      setRouterTag(this.activeRouteTag)
      // 跳转页面 TODO
      this.dealRouter(item)
      // this.$router.push({ path: item.path, query: { iframe: item.meta.path  }});
    },
    isClingy (tag) {
      return tag.meta && tag.meta.clingy
    },
    handleCommand (command) {
      switch (command) {
        case 'closeOtherstabs':
          this.closeOtherstabs();
          break
        case 'closeLefttabs':
          this.closeLefttabs();
          break
        case 'closeRighttabs':
          this.closeRighttabs();
          break
        case 'closeAlltabs':
          this.closeAlltabs();
          break
      }
      setRouterTag(this.activeRouteTag)
    },

    handleTabClick (routerTag) {
      const route = this.activeRouteTag.filter((item, index) => {
        if (routerTag.index === index) return item
      })[0]
      const oldItem = this.activeRouteTag.filter(
        (rest) => rest.name === routerTag.name
      )
      this.tagsChecked(oldItem[0])
    },
    handleTabRemove (tagName) {
      /** 删除 菜单卡片  向后一个跳转，没有向前调整 */
      this.activeRouteTag.forEach((item, index) => {
        if (item.name === tagName) {
          this.activeRouteTag.del(index)
          let cutIndex = index
          if (this.activeRouteTag.length === index) {
            cutIndex -= 1
          }
          this.tagsChecked(this.activeRouteTag[cutIndex])
        }
      })
    },

    /** 菜单卡片操作*/
    closeOtherstabs(){
      this.activeRouteTag =  this.activeRouteTag.filter((item,index)=>item.name === this.tabActive || item.meta.clingy )
    },
    closeLefttabs(){
      let tagIndex = 0
      this.activeRouteTag.forEach((item,index)=> {
        if(item.name === this.tabActive)
      {tagIndex = index}})
      this.activeRouteTag = this.activeRouteTag.filter((item,index)=> tagIndex <= index || item.meta.clingy)
    },
    closeRighttabs(){
      let tagIndex = 0
      this.activeRouteTag.forEach((item,index)=> {
        if(item.name === this.tabActive)
      {tagIndex = index}})
      this.activeRouteTag = this.activeRouteTag.filter((item,index)=> tagIndex >= index || item.meta.clingy)
    },
    closeAlltabs(){
        // 关闭，并跳转到固定页面，如果只有一
      this.activeRouteTag =  this.activeRouteTag.filter(item=> item.meta.clingy)
      this.tabActive = this.activeRouteTag[0].name
      // 设置延迟几秒跳转
      this.$router.push(this.activeRouteTag[0].path)
    }


  }
}
</script>

<style scoped lang="less">
  .free-tag-bar-container {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    height: @base-tabs-bar-height;
    padding-right: @base-padding;
    padding-left: @base-padding;
    user-select: none;
    background: @base-color-white;
    border-top: 1px solid #ececec;
    ::v-deep {
      .fold-unfold {
        margin-right: @base-padding;
      }
    }

    .tabs-content {
      width: calc(100% - 90px);
      height: @base-tag-item-height;

      ::v-deep {
        .el-tabs__nav-next,
        .el-tabs__nav-prev {
          height: @base-tag-item-height;
          line-height: @base-tag-item-height;
        }

        .el-tabs__header {
          border-bottom: 0;

          .el-tabs__nav {
            border: 0;
          }

          .el-tabs__item {
            box-sizing: border-box;
            height: @base-tag-item-height;
            margin-right: 5px;
            line-height: @base-tag-item-height;
            border: 1px solid @base-border-color;
            border-radius: @base-border-radius;
            transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;

            &.is-active {
              border: 1px solid @base-color-blue;
            }
          }
        }
      }
    }

    .more {
      display: flex;
      align-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
</style>
