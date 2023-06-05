import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false;
import router from './router/index.js'
import store from './store/index'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
