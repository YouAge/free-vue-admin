<!--github： https://github.com/YouAge-->
<template>
  <div class="f-list">
      <el-image class="card-image"
                :src="url"  :alt="'im'"
                :preview-src-list="srcList">
      </el-image>
    <div>
      <p class="card-name">{{'Free'}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FList',
  props: {
    height:{

    }
  },
  data(){
    return{
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    }
  },
  methods: {
    select (value) {
      this.sessionIndex = this.userList.indexOf(value);
    }
  },


}
</script>

<style scoped lang="less">
.f-list{
  display: flex;
  align-items: center;
  padding: 12px;
  //border-bottom: solid 1px #24272C;
  .card-image,
  .card-name {
    vertical-align: middle;
  }
  .card-image{
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  .card-name{
    display: inline-block;
    margin: 0 0 0 15px;
    font-size: 16px;
  }
}
</style>
