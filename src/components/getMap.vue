<template>
  <div>
    <gmap-map
      v-show="showMap"
      ref="mapRef"
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
    <gmap-marker :position="this.direction.from">
    </gmap-marker>
    <gmap-marker :position="this.direction.to">
    </gmap-marker>
    </gmap-map>
  </div>
</template>
<script>

export default {
  name: 'getMap',
  props: ['getMap_Button'],
  data () {
    return {
      showMap: true,
      center: { lat: 13.75, lng: 100.517 },
      direction: {
        from: {lat: 13.806406, lng: 100.537681},
        to: {lat: 13.7416472, lng: 100.537164}
      }
    }
  },
  methods: {
    getDirection: function () {
      // eslint-disable-next-line
      var directionsService = new google.maps.DirectionsService()
      // eslint-disable-next-line
      var directionsDisplay = new google.maps.DirectionsRenderer()
      directionsDisplay.setMap(this.$refs.mapRef.$mapObject)
      function calculateAndDisplayRoute (directionsService, directionsDisplay, start, destination) {
        directionsService.route({
          origin: start,
          destination: destination,
          travelMode: 'DRIVING'
        }, function (response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response)
          } else {
            window.alert('Directions request failed due to ' + status)
          }
        })
      }
      calculateAndDisplayRoute(directionsService, directionsDisplay, this.direction.from, this.direction.to)
    }
  },
  mounted () {
    setTimeout(() => {
      this.getDirection()
    }, 1000)
  }
}
</script>

<style scoped>

</style>
