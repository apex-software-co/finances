import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import authMiddleware from "./middlewares/authMiddleware"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta : { layout : 'appLayout', name : 'Finance' },
    component: Home,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach(async (to, from, next) => {

//   // authMiddleware( to, from, next)

// });

export default router
