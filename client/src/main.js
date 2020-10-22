import Vue from 'vue';
import App from './App';
import { store } from './store';
import BootstrapVue from 'bootstrap-vue';
import '@/style/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
});
