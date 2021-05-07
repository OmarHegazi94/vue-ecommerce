import Vue from 'vue'
import Vuex from 'vuex'
import AdminModule from './Admin'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    admin: AdminModule
  }
})
