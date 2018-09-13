/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginStatus : false,
  },
  getters: {
    loginStatus : state => state.loginStatus
  },
  mutations: {
    setLoginStatus(state, loginStatus) {
      state.loginStatus = loginStatus
    }
  },
  actions: {
    getLoginStatus({commit}, loginStatus) {
      commit('setLoginStatus', loginStatus);
    }
  }
});
