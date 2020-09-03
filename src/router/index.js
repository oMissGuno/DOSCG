import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../layout/AppLayout.vue'
import DOSCG from '../page/DOSCG.vue'
import map from '../page/Map.vue'
import cv from '../page/CV.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppLayout',
      component: AppLayout,
      children: [
        {path: 'DOSCG', name: 'DOSCG', component: DOSCG},
        {path: 'map', name: 'map', component: map},
        {path: 'cv', name: 'cv', component: cv}
      ]
    }
  ]
})
