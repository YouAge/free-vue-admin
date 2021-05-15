<!--github： https://github.com/YouAge-->
<template>
  <div class="f-card">
     <div>
       <el-image class="card-image"
         :src="url"
         :preview-src-list="srcList">
       </el-image>
       <p class="card-name">{{ 'Free'}}</p>
     </div>
    <div>
      <el-input class="card-search" type="text" placeholder="search user..." v-model="search" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FCard',
  props:['search'],
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    }
  }
}
</script>

<style scoped lang="less">
.f-card{
  padding: 12px;
  border-bottom: solid 1px #24272C;


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
  .card-search{
    padding: 0 10px;
    width: 100%;
    font-size: 12px;
    color: #fff;
    height: 30px;
    line-height: 30px;
    border: solid 1px #3a3a3a;
    border-radius: 4px;
    outline: none;
    background-color: #26292E;
  }

}
</style>
