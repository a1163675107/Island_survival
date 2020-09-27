import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vm:'vm',
  },
  mutations: {
    settingVm(state,that){
      state.vm=that;
    }
  },
  actions: {
  },
  modules: {
  }
})
