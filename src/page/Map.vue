<template>
  <div class="row justify-content-center">
    <div class="col-10 col-sm-10">
      <div class="card text-center">
        <div class="card-header">
          The best way to go to Central World from SCG Bangsue
        </div>
        <div class="card-body">
          <get-map/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getMap from '../components/getMap'
export default {
  name: 'Map',
  components: {
    getMap
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.margin {
  padding-top: 40px;
}
</style>
