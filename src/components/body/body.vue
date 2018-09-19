<template lang="html">
  <div id="map" class="map"></div>
</template>
<script>
import manager from './js/methods_manager'
export default {
  name: 'vbody',
  data () {
    return {
      maoObj: {}
    }
  },
  mounted () {
    this.loadArcgis()
  },
  methods: {
    loadArcgis: manager.loadArcgis,
    loading: manager.loading,
    initMap: manager.initMap
  }
}
</script>
<style lang="css" scoped>
#map{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
