<template>
  <div>
    <cv-profile/>
    <cv-objective/>
    <cv-education/>
    <cv-skills/>
    <cv-activities/>
    <cv-experian/>
    <cv-reference/>
  </div>
</template>
<script>
import cvProfile from '../components/cv/cvProfile'
import cvObjective from '../components/cv/cvObjective'
import cvEducation from '../components/cv/cvEducation'
import cvSkills from '../components/cv/cvSkills'
import cvActivities from '../components/cv/cvActivities'
import cvExperian from '../components/cv/cvExperian'
import cvReference from '../components/cv/cvReference'
export default {
  name: 'CV',
  components: {
    cvProfile,
    cvObjective,
    cvEducation,
    cvSkills,
    cvActivities,
    cvExperian,
    cvReference
  },
  data () {
    return {
    }
  }
}
</script>
