import Vue from 'vue'
import Vuex from 'vuex'
import test from './modules/test'

Vue.use(Vuex)

const mutations = {
  changeRouter: function (state, payload) {
    state.router = payload
  }
}

export default new Vuex.Store({
  state: {},
  getters: {},
  modules: {
    test
  },
  strict: true,
  namespaced: true
})
