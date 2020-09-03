<template>
  <div class="row justify-content-start">
    <div class="col-12 col-sm-12">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">HOME</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link active" href="/map">MAP</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/cv">CV</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/DOSCG">DOSCG</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="tab-content margin" id="myTabContent">
        <body-layout/>
      </div>
    </div>
  </div>
</template>

<script>
import bodyLayout from './bodyLayout'

export default {
  name: 'headerLayout',
  components: {
    bodyLayout
  }
}
</script>
<style scoped>
.margin {
  padding-top: 40px;
}
</style>
