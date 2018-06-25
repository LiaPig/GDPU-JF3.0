import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import leftMenu from './modules/leftMenu'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    leftMenu
  },
  getters
})

export default store
