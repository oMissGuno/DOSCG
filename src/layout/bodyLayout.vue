<template>
  <div class="col-12 col-sm-12 explan-lg">
    <div class ="chartjs-size-monitor min">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bodyLayout'
}
</script>

<style scoped>
.min{
   min-height: 73vh;
}
</style>
