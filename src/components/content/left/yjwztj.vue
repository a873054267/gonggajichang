<template lang="html">
<div class="contentDown">
  <div class="yj_top"><p>应急物资统计</p></div>
  <div class="yj_middle">
  <table>
    <tr>
      <td>
        <div class="num"><p>93</p><p>种</p></div>
        <div class="name"> <p>应急物资总数</p></div></td>
      <td> <div class="num"><p>100</p><p>%</p></div>
        <div class="name"> <p>物资完备率</p></div></td>
      </td>
      <td>
        <div class="num"><p>100</p><p>%</p></div>
        <div class="name"> <p>物资检查率</p></div></td>
      </td>
      <td>
        <div class="num"><p>100</p><p>%</p></div>
        <div class="name"> <p>物资完好率</p></div></td>
      </td>
    </tr>
  </table>
  </div>
  <div class="yj_down" id="charts">

  </div>
</div>
</template>
<script>
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/bar')
    export default {
      mounted(){
        this.drawBar()
      },
      methods:{
        drawBar(){
          var myChart = echarts.init(document.getElementById('charts'));
          //初始化数据
          var category = ['小王', '小李', '小赵', '小马', '小刘', '小张', '小齐'];
          var barData = [3100, 2142, 1218, 581, 431, 383, 163];

          var option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            xAxis: {
              splitLine:{show: false},//去除网格线
              type: 'value',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              }
            },
            yAxis: {
              type: 'category',
              data: category,
              splitLine: {show: false},
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              offset: 10,
              nameTextStyle: {
                fontSize: 15
              }
            },
            color:['#fff'],
            series: [
              {
                name: '数量',
                type: 'bar',
                data: barData,
                barWidth: 14,
                barGap: 10,
                smooth: true,
                label: {
                  normal: {
                    show: true,
                    position: 'top',
                    offset: [0, -0.5],
                    textStyle: {
                      color: '#F68300',
                      fontSize: 11
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 1, 0,
                      [
                        {offset: 0, color: '#3977E6'},
                        {offset: 0.5, color: '#37BBF8'}
                      ]
                    )
                  }
                }
              }
            ]
          };
          myChart.setOption(option);
        }
      }
    }
</script>
<style lang="css" scoped>
.contentDown{
  width: 100%;
  height: 100%;
  border: black solid;
}
  .yj_top{
    width: 100%;
    padding: 3px;
    height: 7%;
    background: linear-gradient(to right,rgb(10,84,103) ,rgb(23,50,69))
  }
  .yj_top p{
    color: white;
    line-height: 40px;
    letter-spacing: 3px;
  }
  .yj_middle{
    height: 20%;
    width: 100%;
  }
  .yj_down{
    height: 73%;
    width: 100%;
  }
  .yj_middle table{
    width: 100%;
    height: 100%;
  }
  .yj_middle table tr {
    width: 100%;
    height: 100%;
  }
  .num{
    height: 70%;
    width: 100%;
  }
  .num p{
    color: rgb(96,185,206);
  }
  .num :first-child{
    float: left;
    width: 60%;
    text-align: right;
    line-height: 66px;
    vertical-align: middle;
    font-family: digital-clock-font;
    font-size: 40px;
    font-weight: bold;
  }
  .num :nth-child(2){
    float: right;
    width: 40%;
    text-align: left;
    line-height: 66px;
    vertical-align: bottom;
    font-size: 40px;
  }
  .name p{
    color: white;
    font-size: 20px;
    text-align: center;
  }
</style>
