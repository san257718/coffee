import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Shopping from '../views/Shopping.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: Shopping
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router