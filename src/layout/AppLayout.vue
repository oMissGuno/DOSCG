<template>
  <div>
    <header-layout/>
    <footer-layout/>
  </div>
</template>

<script>
import headerLayout from './headerLayout'
import footerLayout from './footerLayout'

export default {
  name: 'AppLayout',
  components: {
    headerLayout,
    footerLayout
  }
}
</script>
