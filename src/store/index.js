import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    value_xyz: [],
    value_bc: []
  },
  mutations: {
    fetchXYZ (state, { res }) {
      state.value_xyz = res.data
    },
    fetchBC (state, { res }) {
      state.value_bc = res.data
    }
  },
  actions: {
    async fetchXYZ ({commit}) {
      await Axios.get('/api/v1/find/xyz')
        .then(res => commit('fetchXYZ', { res }))
        .catch(err => alert(err))
    },
    async fetchBC ({commit}) {
      await Axios.post(`/api/v1/find/bc`, {a: 21})
        .then(res => commit('fetchBC', {res}))
        .catch(err => alert(err))
    },
    async lineMsg () {
      await Axios.post(`/api/v1/line/msg`, {message: 'Can not answer questions'})
        .then(res => console.log('Data: ', res.data))
        .catch(err => alert(err))
    }
  },
  getters: {
    value_xyz: state => state.value_xyz,
    value_bc: state => state.value_bc
  }
})
export default store
