import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import auth from './plugins/auth'
import calc from './plugins/calc'
import filters from './plugins/filters'
import globalComponents from './plugins/globalComponents'
import http from './plugins/http'
import vueCurrencyInput from './plugins/vueCurrencyInput'
import vueDebounce from './plugins/vueDebounce'
import vuetify from './plugins/vuetify'


//import Filters from './plugins/Filters';
// Vue.mixin(Filters);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  auth,
  calc,
  filters,
  globalComponents,
  http,
  vueCurrencyInput,
  vueDebounce,
  vuetify,
  //Filters,
  render: h => h(App)
}).$mount('#app')
