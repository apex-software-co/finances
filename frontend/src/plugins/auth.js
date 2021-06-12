
import Auth from './../auth/Auth.js'
import Vue from 'vue';

Vue.use({
  install (Vue) {
    
    const options = {
      urls : {
        login : 'auth/login',
        logout : 'auth/logout',
        loggedUser : 'auth/loggedUser'
      },
      redirect : {
        home : '/',
        login : '/login',
      }
    }

    let auth = new Auth(options)

    Vue.prototype.$auth = auth
    Vue.$auth = auth;
  }
})

export default (_) => { }