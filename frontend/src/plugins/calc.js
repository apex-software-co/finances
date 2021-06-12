
import calc from './../utils/calc.js'
import Vue from 'vue';

Vue.use({
  install (Vue) {
    Vue.prototype.$calc = calc
  }
})
