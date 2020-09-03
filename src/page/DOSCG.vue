<template>
  <div class="row justify-content-center">
    <div class="col-10 col-sm-10 card">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="pills-xyz-tab" data-toggle="pill" href="#pills-xyz" role="tab" aria-controls="pills-xyz" aria-selected="true">Exercise 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-bc-tab" data-toggle="pill" href="#pills-bc" role="tab" aria-controls="pills-bc" aria-selected="false">Exercise 2</a>
        </li>
      </ul>
      <hr/>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-xyz" role="tabpanel" aria-labelledby="pills-xyz-tab"><find-xYZ/></div>
        <div class="tab-pane fade" id="pills-bc" role="tabpanel" aria-labelledby="pills-bc-tab"><find-bC/></div>
      </div>
    </div>
  </div>
</template>
<script>
import findXYZ from '../components/DOSCG/findXYZ'
import findBC from '../components/DOSCG/findBC'

export default {
  name: 'DOSCG',
  components: {
    findXYZ,
    findBC
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.card {
  padding: 20px 50px 20px 50px;
}
</style>
