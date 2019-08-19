import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    login (state) {
      console.log('login')
      state.isLogin = true
    }
  },
  actions: {
    
  }
})
