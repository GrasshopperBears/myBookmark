import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userToken: undefined,
    authorized: false,
  },
  mutations: {
    authorizeUser() {
      this.state.authorized = true;
    },
    unauthorizeUser() {
      this.state.authorized = false;
    },
    setUserToken(token) {
      this.state.userToken = token;
    },
  },
});
