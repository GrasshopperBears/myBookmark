import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import { store } from './store';
import BootstrapVue from 'bootstrap-vue';
import '@/style/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.userToken || ''}`;

new Vue({
  store,
  router,
  components: { App },
  template: '<App/>',
  created() {
    axios
      .get('/auth/is-auth')
      .then((res) => {
        if (res.data.authorized) store.state.authorized = true;
        else store.state.authorized = false;
      })
      .catch((e) => alert('오류가 발생했습니다'));
  },
  render: (h) => h(App),
}).$mount('#app');
