
import axios from 'axios'

class Http {

  constructor (options) {
    this.httpClient = axios.create(options)
  }

  setAuthorizationToken(token) {
    this.httpClient.defaults.headers.common['Authorization'] = token;
  }

  $get(url, params) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(url, { params })
        .then((response) => {
          resolve(response.data)
        }).catch(error => {
          reject(error)
        });
    })
  }

  $post(url, params) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(url, params)
        .then((response) => {
          resolve(response.data)
        }).catch(error => {
          reject(error)
        });
    })
  }

  $put(url, params) {
    return new Promise((resolve, reject) => {
      this.httpClient.put(url, params)
        .then((response) => {
          resolve(response.data)
        }).catch(error => {
          reject(error)
        });
    })
  }

  index(url, params = null) {
    return this.$get(url, params)
  }

  show(url, id, params = null) {
    return this.$get(url + '/' + id, params)
  }

  store(url, params) {
    return this.$post(url, params)
  }

  update(url, id, params) {
    return this.$put(url + '/' + id, params)
  }

  destroy(id) {
    this.httpClient.delete('/api/test')
  }
}

export default Http;