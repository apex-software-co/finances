import Vue from 'vue'

export default {

  namespaced: true,

  state: () => ({
    user: null
  }),

  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },

  getters: {
    isLoggedIn: state => {
      return (state.user !== null)
    }
  },

  actions: {

    login({ commit, state }, { url, params }) {
      return new Promise((resolve, reject) => {
        Vue.$http.$post(url, params)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          });
      })
    },

    loggout({ commit, state }) {
      commit('setUser', null)
    },

    getLoggedUser({ commit, state }, { url }) {
      return new Promise((resolve, reject) => {
        Vue.$http.$get(url)
          .then((response) => {
            commit('setUser', response)
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          });
      })
    }
  }
}