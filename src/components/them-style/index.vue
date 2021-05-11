<!--github： https://github.com/YouAge-->
<template>
  <ul class="them-style" @click="handleClick($event)">
    <el-tooltip content="左侧菜单模式" placement="bottom">
      <li class="item" :data-index="'1'" :name="'item'">
        <div></div>
        <div></div>
      </li>
    </el-tooltip>
    <el-tooltip content="顶部菜单模式" placement="bottom">
      <li class="is-select" :data-index="'2'" :name="'is-select'">
        <div></div>
        <div></div>
      </li>
    </el-tooltip>
  </ul>
</template>

<script>
export default {
  name: 'themStyle',
  data () {
    return {
      theme: [
        { name: 'vertical', index: 1 },
        { name: 'horizontal', index: 2 }
      ]
    }
  },
  methods: {
    handleClick (e) {
      if (e.target.nodeName.toLowerCase() === 'li') {
        const index = parseInt(e.target.dataset.index)
        // 获得引索后，只需要修改data数据就能改变UI了
        // console.log(index,typeof index)
        const themeName = this.theme.filter((item) => item.index === index)[0]
        this.$emit('change', themeName.name)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .them-style {
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-around;

    li {
      width: 30%;
      //height: 100%;
      background: #f0f2f5;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      border-radius: 4px;
      box-shadow: 0 1px 2.5px 0 rgb(0 0 0 / 18%);
      &:hover {
        border: 1px solid #0960bd;
      }
    }

    .item {
      > div:nth-child(1) {
        width: 30%;
        height: 100%;
        background: #1b2a47;
      }
      > div:nth-child(2) {
        width: 70%;
        height: 30%;
        top: 0;
        right: 0;
        background-color: #fff;
        box-shadow: 0 0 1px #888;
        position: absolute;
      }
    }
    .is-select {
      > div:nth-child(1) {
        height: 40%;
        box-shadow: 0 0 1px #888;
        background: #1b2a47;
        border-radius: 4px 0 0 4px;
      }
      > div:nth-child(2) {
        height: 60%;
        top: 0;
        right: 0;
        background-color: #fff;
        box-shadow: 0 0 1px #888;
        position: absolute;
      }
    }
  }
</style>
