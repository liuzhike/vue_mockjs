import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import test from './modules/test'

const router =  new Router({
  mode: 'hash',
  routes: [].concat(test)
})

export default router

