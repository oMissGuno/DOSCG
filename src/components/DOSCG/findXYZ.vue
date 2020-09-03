<template>
  <div class="col-10 col-sm-10">
    <div class="row">
      <h6 class="title">Exercise 1 : Define X, Y, 5, 9, 15, 23, Z find X, Y, Z value</h6>
    </div>
    <div class="row">
      <p class="text">Result : X,Y,Z = {{data}}</p>
    </div>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'findXYZ',
  data () {
    return {
    }
  },
  mounted () {
    this.fetchXYZ()
  },
  methods: {
    ...mapActions({
      fetchXYZ: 'fetchXYZ'
    })
  },
  computed: {
    ...mapState({
      data: state => state.value_xyz
    })
  }
}
</script>

<style scoped>

</style>
