import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$bus = new Vue();
Vue.use(VueAxios,axios)
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

