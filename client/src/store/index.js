import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    authorized: false,
    currentPath: undefined,
    ocrResult: '',
  },
  getters: {
    currentPath(state) {
      return state.currentPath;
    },
    ocrResult(state) {
      return state.ocrResult;
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
    setOcrResult(state, newText) {
      state.ocrResult = newText;
    },
  },
});
