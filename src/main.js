import Vue from 'vue'
import App from './App.vue'
import router from './routes/routes';
import http from './http/index';

Vue.config.productionTip = false;
Vue.prototype.$apiUri = 'http://localhost:8000';
Vue.prototype.$http = http;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
