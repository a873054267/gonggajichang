<template lang="html">
<div class="vtop">
  <el-row>
    <el-col :span="8"><div class="grid-content bg-purple "><canvas id="left"></canvas></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-light"> <p class="title">拉萨贡嘎国际机场应急管理系统</p></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple"><canvas id="right"></canvas></div></el-col>
  </el-row>
</div>
</template>
<script>
  import draw from './js/draw'
    export default {
      name:'top',
      mounted () {
        this.drawline("left"),
        this.drawlineReverse("right")
      },
      methods: {
        drawline:draw.drawLine,
        drawlineReverse:draw.drawLineReverse
      }
    }
</script>
<style lang="css" scoped>
.vtop{
  width: 100%;
  height: 100%;
}
  .vtop *{
    height: 100%;
  }
#left{
  width: 100%;
}
  #right{
    width: 100%;
  }
  .title{
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
    vertical-align: middle;
    font-size: large;
    letter-spacing: 10px;
    line-height: 67px;
  }
</style>
