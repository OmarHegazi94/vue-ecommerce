import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminRoutes from '@/router/Admin/index.js'

Vue.use(VueRouter)


const baseRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const routes = [...baseRoutes, ...AdminRoutes]

const router = new VueRouter({
  routes
})

export default router
