import Vue from "vue"

export default {

  namespaced: true,

  state: () => ({
    companies : []
  }),

  mutations: {
    setCompanies(state, companies) {
      state.companies = companies
    }
  },

  actions: {
    async index({ commit }) {
      await Vue.http.index('/company/company').then((response) => {
        commit('setCompanies', response.companies);
      });
    }
  }

}
