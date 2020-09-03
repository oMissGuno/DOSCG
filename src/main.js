// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/index'
import VueAxios from 'vue-axios'
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'
axios.defaults.baseURL = 'http://localhost:8081'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD9BQZJ1LCsB2brjIdO2PIpiJP7I9D29wM',
    libraries: 'places,drawing' // necessary for places input
  },
  installComponents: true
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
