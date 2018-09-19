<template lang="html">
<div class="content_right">
  <div class="right_top right2">
    <div class="title"><p>应急人员统计</p></div>
    <div id="myCharts" class="myCharts"></div>
  </div>
  <div class="right_middle right2">
    <div class="title"><p>应急演练培训记录</p></div>
    <div class="myCharts" id="myCharts2"></div>
  </div>
  <div class="right_down right2">
    <div class="sub_right_down_left">
      <div class="title"><p>应急专家统计</p></div>
      <div class="myCharts" id="myCharts3"></div>
    </div>
    <div class="sub_right_down_right">
      <div class="title"><p>协议单位管理</p></div>
      <div class="xydw">
        <el-table
          :show-header="false"
          :row-style="rowStyle"
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="time"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</div>
</template>
<script>
 // import echarts from 'echarts'//使用下面一种引入方式会导致折线图不显示
  let echarts = require('echarts/lib/echarts')
 require('echarts/lib/chart/line')
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/pie')
  require('echarts/lib/component/tooltip')
 require('echarts/lib/component/legend')
  require('echarts/lib/component/title')
    export default {
      data() {
          return {
            tableData: [{
              date: '医救',
              name: '西藏军区总医院',
              address: '指挥中心',
              time:'70分钟'
            }, {
              date: '医救',
              name: '山南地区贡嘎县人民医院',
              address: '指挥中心',
              time:'20分钟'
            }, {
              date: '消防中心',
              name: '西藏自治区公安消防总队',
              address: '护卫部',
               time:'60分钟'
            }, {
              date: '护卫',
              name: '西藏自治区民政厅',
              address: '护卫部',
              time:'72分钟'
            }, {
              date: '测试',
              name: '西藏自治区民政厅',
              address: '护卫部',
              time:'72分钟'
            }]
          }

      },
      mounted() {
        this.drawLine();
        this.drawQxt();
        this.drawCharts()
      },
      methods: {
        //绘制右上角第一张图的函数
        rowStyle({ row, rowIndex}) {
          return 'color:white;background: linear-gradient(to right, rgb(23,50,69) ,rgb(15,31,44));'
        },
        drawLine() {
          let myChart = echarts.init(document.getElementById('myCharts'))
          // 绘制图表
          myChart.setOption({
            tooltip: {},
            xAxis: {
              axisLine: {
                lineStyle: {
                  type: 'solid',
                  color: 'rgb(46,214,233)'//左边线的颜色
                }
              },
              axisLabel:{
                interval: 0,
                rotate:30
              },
              data: ["航油", "要客中心", "机务部", "公安局", "综服部", "网信部","指挥中心","特车部","地服部","安检站","机场部","运行办","党办","办公室","航气处","局领导","空港公司","通导处","护卫部"]
            },
           yAxis: {
              splitLine:{show: false},//去除网格线
              axisLine: {
                lineStyle: {
                  type: 'solid',
                  color: 'rgb(46,214,233)',//左边线的颜色
                }
              },
            },
            series: [{
              name: '销量',
              type: 'bar',
              barWidth: 15,//固定柱子宽度
              data: [3,6,7,35,0,4,49,82,19,22,29,16,2,5,8,8,19,13,45],
              color:"rgb(46,214,233)"//设置柱子颜色,

            }],
            textStyle:{
              color:"rgb(46,214,233)"
            }
          });
        },
        //绘制折线图
        drawQxt(){
    // 基于准备好的dom，初始化echarts实例
          var data2yespv=[];
          var data2yesuv=[];
          var data2todpv=[];
          var data2toduv=[];
          for(var i=0;i<25;i++){
            data2yespv.push(Math.random()*20);
            data2todpv.push(Math.random()*30);
            data2yesuv.push(Math.random()*15);
            data2toduv.push(Math.random()*9);
          }
          console.log(data2yespv);
    var echartsWarppv = echarts.init(document.getElementById('myCharts2'));
   var option = {
      title: {
        textStyle:{
          color: 'blue',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 12,
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {

      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        axisLine: {
          lineStyle: {
            type: 'solid',
            color: 'rgb(46,214,233)',//左边线的颜色
          }
        },
        boundaryGap: false,
        data: ['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','21:00','22:00','23:00']
      },
      yAxis: {

        axisLine: {
          lineStyle: {
            type: 'solid',
            color: 'rgb(46,214,233)',//左边线的颜色
          }
        },
        splitLine:{show: false},//去除网格线
        type: 'value'
      },
      series: [
        {
          name:'昨日pv',
          type:'line',
          smooth:true,
          stack: '总量',
          itemStyle : {
            normal : {
              lineStyle:{
                color:'red'
              }
            }
          },
          data:data2yespv
        },
        {
          name:'今日pv',
          type:'line',
          smooth:true,
          stack: '总量',
          data:data2todpv
        }
      ]
    };
    echartsWarppv.setOption(option,true);
    //-----------------------------------------------------------------
    var echartsWarpuv = echarts.init(document.getElementById('myCharts2'));
    option = {
      title: {
        textStyle:{
          color: 'blue',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 12,
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {

      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        axisLine: {
          lineStyle: {
            type: 'solid',
            color: 'rgb(46,214,233)',//左边线的颜色
          }
        },
        type: 'category',
        boundaryGap: false,
        data: ['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','21:00','22:00','23:00']
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            type: 'solid',
            color: 'rgb(46,214,233)',//左边线的颜色
          }
        },
        splitLine:{show: false},//去除网格线
        type: 'value'
      },
      series: [
        {
          name:'昨日uv',
          type:'line',
          smooth:true,
          stack: '总量',
          itemStyle : {
            normal : {
              lineStyle:{
                color:'rgb(46,214,233)'
              }
            }
          },
          data:data2yesuv
        },
        {
          name:'今日uv',
          type:'line',
          smooth:true,
          stack: '总量',
          data:data2toduv
        }
      ]
    };
    echartsWarpuv.setOption(option,true);
  },
        //绘制饼图
        drawCharts(){
          var myChart = echarts.init(document.getElementById('myCharts3'));
          var option = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend:{
              left:'0',
              align:'left',
              orient:'vertical',
              textStyle: {
                color: 'white',
              },
              itemHeight:'20'
            },
            color:['rgb(78,79,159)', 'green','yellow','blueviolet','cyan','blue','rgb(226,237,239)','rgb(1,143,252)'],
            series: [
              {
                name:"类型",
                type:'pie',
                center:['70%','50%'],
                radius: ['60%', '70%'],
                data:[
                  {value:1,name:'机务'},
                  {value:1,name:'场务'},
                  {value:1,name:'航务'},
                  {value:1,name:'应急指挥'},
                  {value:1,name:'航油'},
                  {value:1,name:'消防'},
                  {value:1,name:'医救'},
                  {value:1,name:'其它'}
                ]
              },
              {
                name:'部门',
                type:'pie',
                center:['70%','50%'],
                radius: ['0%', '45%'],
                color:['rgb(238,221,120)','rgb(141,193,169)'],
                label: {
                  normal: {
                    position: 'inside',
                    fontSize: 16,
                    fontFamily:'Microsoft YaHei',
                    color:['white','white'],
                  }
                },

                data:[
                  {value:44, name:'外单位专家'},
                  {value:22, name:'区局专家',}
                ],
              },
              {
                type:'pie',
                radius: ['45%', '60%'],
                data:[

                ]
              }
            ]
          };
          myChart.setOption(option);
        }
  }
    }
</script>
<style lang="css" scoped>
  .content_right{
    position: absolute;
    left: 40%;
    height: 100%;
    width: 60%;
  }
  .right2{
    width: 100%;
    height: 33%;

  }
.title{
  height: 12%;
  width: 100%;
  margin: 3px;
  background: linear-gradient(to right,rgb(10,84,103) ,rgb(23,50,69))
}
  .title p{
    color: white;
    letter-spacing: 3px;
    line-height: 32px;
  }
  .myCharts{
    height: 88%;
    width: 100%;
  }
  .sub_right_down_left{
    float: left;
    width: 50%;
    height: 100%;


  }
  .sub_right_down_right{
    float: right;
    width: 50%;
    height: 100%;

  }
</style>
