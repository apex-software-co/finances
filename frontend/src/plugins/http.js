
import Http from './../api/Http.js'
import Vue from 'vue';

Vue.use({
  install (Vue) {
    
    let http = new Http({
      baseURL: 'http://app.pos.com.br/api/'
    })

    Vue.prototype.$http = http
    Vue.$http = http;
  }
})
