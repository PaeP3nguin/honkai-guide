import Vue from 'vue'
import VueRouter from 'vue-router'
import GearCalc from '../views/GearCalc.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Search
  },
  {
    path: '/calc',
    name: 'calc',
    component: GearCalc
  }
]

const router = new VueRouter({
  routes
})

export default router
