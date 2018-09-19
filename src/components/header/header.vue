<template lang="html">
  <div class="cs">
  <el-row>
    <el-col :span="8"><div class="grid-content bg-purple">车辆轨迹数据挖掘系统</div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="8" class="tools">
      <div class="grid-content bg-purple">
        <el-button type="primary" icon="el-icon-zoom-in">放大</el-button>
        <el-button type="primary" icon="el-icon-zoom-out">缩小</el-button>
        <el-button type="primary" icon="el-icon-rank">漫游</el-button>
        <el-button type="primary" icon="el-icon-edit-outline">编辑</el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary"><i class="el-icon-upload el-icon--right"></i>上传</el-button>
      </div></el-col>
  </el-row>
  </div>

</template>
<script>
export default {
  name: 'vheader'
}

</script>
<style lang="css" scoped>
  .grid-content{
    text-align: center;
    vertical-align: middle;
    line-height: 30px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
