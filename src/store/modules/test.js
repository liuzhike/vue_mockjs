import { getAxios, postAxios } from '../util'
import { queryApi, queryApiTwo } from '../api'

const state = {
  loading: true,
  data: []
}

const getters = {
  loading: function (state) {
    return state.loading
  },
  getListData: function (state) {
    return state.data
  },
}

const mutations = {
  changStatus (state, payload) {
    state.loading = payload
  },
  changListData (state, payload) {
    state.data = payload.data
  }
}

const actions = {
  queryListPost: function ({state, commit}, reqData = {}) {
    console.log('查询reqData' + JSON.stringify(reqData))
    let params = {
      id: reqData.id
    }
    console.log('params' + JSON.stringify(params))
    postAxios(commit, queryApi, params, function (data) {
      console.log('data' + JSON.stringify(data))
      commit('changListData', {data})
    })
  },
  queryListGet: function ({state, commit}, reqData = {}) {
    let params = {}
    console.log('查询reqData' + JSON.stringify(reqData))
    getAxios(commit, queryApi, params, function (data) {
      console.log('data' + JSON.stringify(data))
      commit('changListData', {data})
    })

  },
  queryListPostTwo: function ({state, commit}, reqData = {}) {
    console.log('查询reqData' + JSON.stringify(reqData))
    let params = {
      id: reqData.id
    }
    console.log('params' + JSON.stringify(params))
    postAxios(commit, queryApiTwo, params, function (data) {
      console.log('data' + JSON.stringify(data))
      commit('changListData', {data})
    })
  },
  queryListGetTwo: function ({state, commit}, reqData = {}) {
    let params = {}
    console.log('查询reqData' + JSON.stringify(reqData))
    getAxios(commit, queryApiTwo, params, function (data) {
      console.log('data' + JSON.stringify(data))
      commit('changListData', {data})
    })

  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
