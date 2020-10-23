import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    authorized: false,
    currentPath: undefined,
  },
  getters: {
    currentPath(state) {
      return state.currentPath;
    },
  },
  mutations: {
    authorizeUser(state) {
      state.authorized = true;
    },
    unauthorizeUser(state) {
      state.authorized = false;
    },
    changeCurrentPath(state, newPath) {
      state.currentPath = newPath;
    },
  },
});
