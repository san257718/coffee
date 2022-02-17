import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Coffee_bag from '../views/Coffee_bag.vue'
import Coffee_items from '../views/Coffee_items.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Coffee_bag',
    name: 'Coffee_bag',
    component: Coffee_bag
  },
  {
    path: '/Coffee_items/:id',
    name: 'Coffee_items',
    component: Coffee_items
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router