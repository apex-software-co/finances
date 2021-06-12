import Vue from "vue"

export default {

  namespaced: true,

  state: () => ({
    accounts: []
  }),

  mutations: {
    setAccounts(state, accounts) {
      state.accounts = accounts
    }
  },

  actions: {
    async index({ commit }) {
      await Vue.http.index('/account/account').then((response) => {
        commit('setAccounts', response.accounts);
      });
    }
  }

}
