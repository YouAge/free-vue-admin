<!--github： https://github.com/YouAge-->

<template>
  <div class="menu-content">
<!--    <div id="tst" style="height: 300px;width: 600px"></div>-->
    <el-row>
      <el-col span="12">
        <f-echarts id="f-echart" :options="option" height="50" width="80" @change="echart"/>
      </el-col>
    </el-row>


  </div>
</template>

<script>

import FEcharts from '@/components/free-echarts/src'
  export default {
    name: 'menus',
    components: { FEcharts },
    data(){
      return{
        option:{
          title: {
            text: "上海 空气质量指数",
            left: "1%"
          },
          tooltip: {
            trigger: "axis"
          },
          grid: {
            left: "5%",
            right: "15%",
            bottom: "10%"
          },
          xAxis: {
            data: ['1','2','3','4','5','6']
          },
          yAxis: {},
          toolbox: {
            right: 10,
            feature: {
              saveAsImage: {}
            }
          },
          dataZoom: [
            {
              startValue: "2014-06-01"
            },
            {
              type: "inside"
            }
          ],
          visualMap: {
            top: 50,
            right: 10,
            pieces: [
              {
                gt: 0,
                lte: 50,
                color: "#93CE07"
              },
              {
                gt: 50,
                lte: 100,
                color: "#FBDB0F"
              },
              {
                gt: 100,
                lte: 150,
                color: "#FC7D02"
              },
              {
                gt: 150,
                lte: 200,
                color: "#FD0100"
              },
              {
                gt: 200,
                lte: 300,
                color: "#AA069F"
              },
              {
                gt: 300,
                color: "#AC3B2A"
              }
            ],
            outOfRange: {
              color: "#999"
            }
          },
          series: {
            name: "上海 空气质量指数",
            type: "line",
            data: [56,20,30,11,60,12],
            markLine: {
              silent: true,
              lineStyle: {
                color: "#333"
              },
              data: [
                {
                  yAxis: 50
                },
                {
                  yAxis: 100
                },
                {
                  yAxis: 150
                },
                {
                  yAxis: 200
                },
                {
                  yAxis: 300
                }
              ]
            }
          }
        }
      }
    },
    methods:{
      echart(item){
        console.log(item)
        item.on('click',function (item) {
          console.log(item)
        })
      }
    },
    mounted () {

      // brokenLine.setOption()
    }
  }
</script>

<style scoped>

</style>
