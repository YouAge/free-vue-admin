<!--github： https://github.com/YouAge-->
<template>
  <el-row :gutter="10" class="panel-group">
    <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
<!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
          <el-tag type="success"  effect="plain">人数</el-tag>
        </div>
        <div class="free-number">
          <div class="card-panel-icon-wrapper icon-people">
            <free-icon name="user" style="height: 40px;width: 40px"/>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              New Visits
            </div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
          <el-tag type="success"  effect="plain">人数</el-tag>
        </div>
        <div class="free-number">
          <div class="card-panel-icon-wrapper icon-people">
            <free-icon name="user" style="height: 40px;width: 40px"/>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              New Visits
            </div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
          <el-tag type="success"  effect="plain">人数</el-tag>
        </div>
        <div class="free-number">
          <div class="card-panel-icon-wrapper icon-people">
            <free-icon name="user" style="height: 40px;width: 40px"/>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              New Visits
            </div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
          <el-tag type="success"  effect="plain">人数</el-tag>
        </div>
        <div class="free-number">
          <div class="card-panel-icon-wrapper icon-people">
            <free-icon name="user" style="height: 40px;width: 40px"/>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              New Visits
            </div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import FreeIcon from '@/components/free-icon'
import countTo from 'vue-count-to'
export default {
name: "PanelGroup",
  components: { FreeIcon ,countTo}
}
</script>

<style scoped lang="less">
.free-number{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #41B584;

  .card-panel-description{
      .card-panel-text{
        font-size: 16px;
        margin-bottom: 10px;
      }
    .card-panel-num{
      font-size: 20px;
      font-weight: bold;
    }
  }
}
.clearfix{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
