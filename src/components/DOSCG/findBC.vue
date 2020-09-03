<template>
  <div class="col-10 col-sm-10">
    <div class="row">
      <h6 class="title">Exercise 2 : If A = 21, A + B = 23, A + C = -21 find B and C value.</h6>
    </div>
    <div class="row">
      <p class="text">Result : {{value_bc}}</p>
    </div>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'findBC',
  data () {
    return {
      value: []
    }
  },
  mounted () {
    this.fetchBC()
  },
  methods: {
    ...mapActions({
      fetchBC: 'fetchBC'
    })
  },
  computed: {
    ...mapState({
      value_bc: state => state.value_bc
    })
  }
}
</script>

<style scoped>

</style>
