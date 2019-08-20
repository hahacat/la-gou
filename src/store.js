import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    login (state) {
      console.log('login')
      state.isLogin = true
    },
    logout (state) {
      state.isLogin = false
    }
  },
  actions: {
    
  }
})
