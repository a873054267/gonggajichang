<template>
  <div class="back">
  <div class="top">
    <top></top>
  </div>
<div class="toolList">
  <toolList></toolList>
</div>
    <div class="content">
      <contentLeft></contentLeft>
      <contentRight></contentRight>
    </div>
  </div>
</template>

<script>
import top from 'components/header/top'
import toolList from 'components/body/toolList.vue'
import contentLeft from 'components/content/left/controlCenter.vue'
import contentRight from 'components/content/right/contentRight.vue'
export default {
  name: 'App',
  components: {
   top,
    toolList,
    contentLeft,
    contentRight
  },
  methods:{

  }
}
</script>
<style>
  *{
    padding: 0;
    margin: 0;
  }
  .back{
    height: 1080px;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(to right, rgb(23,50,69) ,rgb(15,31,44)); /* 标准的语法 */
  }
  .top{
    position: absolute;
    top: 1%;
    left: 15%;
    right: 15%;
    height: 7%;
    width: 70%;
  }
  .toolList
  {
    position: absolute;
    top: 8%;
    height: 4%;
    width: 60%;
    right: 20%;
    left: 20%;
  }
  .content{
    position: absolute;
    height: 88%;
    width: 100%;
    top: 12%;

  }

</style>
