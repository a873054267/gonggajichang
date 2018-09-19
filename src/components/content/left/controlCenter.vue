<template lang="html">
<div class="contentLeft">
  <div class="left_top">
    <div class="ccUp"><p>控制中心</p></div>
    <div class="ccMiddle">
      <div class="weather">
        <div class="weather_icon">
        </div>
        <div class="weather_font"><p>38℃</p></div>
        <div class="weather_bottom"><p>2018/8/28 多云转阵雨</p></div>
      </div>
      <div class="info">
        <template>
          <el-table
            :data="tableData"
            :show-header="false"
            strip
            :row-style="rowStyle"
            style="width: 100%;height: 100%;overflow: hidden;"
         >
            <el-table-column
              prop="name"
              label="姓名"
              width="180"
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
            >
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
    <div class="middleLine"></div>
    <div class="ccDown">
      <table >
        <tr>
          <td><div class="event" ><canvas id="circle1" width="171" height="146" ></canvas></div></td>
          <td><div class="event"><canvas id="circle2" width="171" height="146" ></canvas></div></td>
          <td><div class="event"><canvas id="circle3" width="171" height="146" ></canvas></div></td>
          <td><div class="event"><canvas id="circle4" width="171" height="146" ></canvas></div></td>
        </tr>
      </table>

    </div>
  </div>
  <div class=" left_bottom">
    <contentDown></contentDown>
  </div>
</div>
</template>
<script>
  import draw from './js/draw'
  import contentDown from './yjwztj.vue'
    export default {
      data() {
        return {
          tableData: [{
            name: '当前事件',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            name: '事件类型',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            name: '开始时间',
            address: '上海市普陀区金沙江路 1519 弄'
          }]
        }
      },
      mounted (){
        this.drawCircle("circle1","rgba(172,213,151)"),
         this.drawCircle("circle2","rgba(4,183,211)"),
         this.drawCircle("circle3","rgba(1,143,252)"),
          this.drawCircle("circle4","rgba(78,79,159)")
      },
      components:{
        contentDown
      },
      methods:{
        drawCircle:draw.drawCircle,
        rowStyle({ row, rowIndex}) {
            return 'color:white;background: linear-gradient(to right, rgb(23,50,69) ,rgb(15,31,44))'
          }
      }
    }
</script>
<style lang="css" scoped>
  .contentLeft{
    position: absolute;
    height: 100%;
    width: 36%;
    left: 2%;
    right: 2%;
  }
.left_top{
  width: 100%;
  height: 40%;
  border: black solid;
}
  .left_bottom {
    width: 100%;
    top: 40%;
    height: 60%;
  }
.ccUp{
  margin: 3px;
  height: 10%;
  background: linear-gradient(to right,rgb(10,84,103) ,rgb(23,50,69))
}
  .ccUp p{
    color: white;
    line-height: 33px;
    letter-spacing: 3px;
  }
  .ccMiddle {
    height: 44%;
  }
  .weather{
    width: 35%;
    height: 100%;
    float: left;
  }
  .weather_icon{
    margin: auto;
    height: 40%;
    width: 40%;
    float: left;
    margin-left: 10%;
    background-image: url(weather.svg);
    background-size: contain;
    background-repeat: no-repeat;
    padding-top: 12%;
  }
  .weather_font{
    height: 40%;
    width: 45%;
    float: right;
    padding-top: 12%;
  }
  .weather_font p{
    font-weight: bold;
    font-size: 40px;
    color: white;
  }
  .weather_bottom{
    height: 50%;
    width: 100%;
    padding-top: 35%;
  }
  .weather_bottom p{
    font-size: 20px;
    color: white;
    font-weight: bold;
    line-height: 72px;
    vertical-align:middle;
  }
  .info{
    height: 100%;
    width: 65%;
    float: right;
  }

  .middleLine{
    height: 1%;
    background: linear-gradient(to right,rgb(10,84,103) ,rgb(23,50,69))
  }
  .ccDown{
    height: 44%;
  }
  .ccDown table{
    width: 100%;
    height: 100%;
  }
  .ccDown table tr{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .ccDown table tr td{
    width: 25%;
    height: 100%;
  }
.event{
 width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
