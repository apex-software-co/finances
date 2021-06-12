import Vue from 'vue'
import store from '../store'

class Auth {

  constructor(options) {
    this.isBooted = false
    this.options = options
  }

  async boot() {
    this.loadToken()

    if (this.token) {
      await this.getLoggedUser().catch(error => {

      })
    }

    this.isBooted = true
  }

  login(params) {
    return new Promise((resolve, reject) => {
      store.dispatch('auth/login', { url: this.options.urls.login, params: params })
        .then(response => {
          this.processToken(response)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
    })
  }

  logout() {

  }

  getLoggedUser() {
    return new Promise((resolve, reject) => {
      store.dispatch('auth/getLoggedUser', { url: this.options.urls.loggedUser })
        .then(response => {
          this.user = response
          this.isBooted = true
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  isLoggedIn() {
    return store.getters['auth/isLoggedIn']
  }

  processToken(token) {
    this.token = token
    this.setToken(token)
    this.setHttpHeaders(token)
  }

  loadToken() {
    this.token = JSON.parse(localStorage.getItem('token'));

    if (this.token) {
      this.setHttpHeaders(this.token)
    }
  }

  setToken(token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  setHttpHeaders(token) {
    Vue.$http.setAuthorizationToken('bearer ' + token.access_token)
  }

  deleteToken() {

  }

}

export default Auth;