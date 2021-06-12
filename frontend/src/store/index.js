import Vue from 'vue'
import Vuex from 'vuex'

import app from '@/store/modules/app/app'
import auth from '@/store/modules/app/auth'
import company from '@/store/modules/company/company'
import pdv from '@/store/modules/order/pdv'
import accounts from '@/store/modules/accounts/accounts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    auth,
    company,
    pdv,
    accounts
  }
})
