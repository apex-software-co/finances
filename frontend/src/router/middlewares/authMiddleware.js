import Vue from 'vue';

export default async function authMiddleware(to, from, next) {

  if (to.meta.auth == 'guest') {
    next()
    return
  }

  if (!Vue.$auth.isBooted) {
    await Vue.$auth.boot()
  }

  if (!Vue.$auth.isLoggedIn()) {
    next('/login')
  }

  next()
}