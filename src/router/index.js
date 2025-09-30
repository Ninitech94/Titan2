import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Apartments from '../views/Apartments.vue'
import UnderConstruction from '../views/UnderConstruction.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/apartments',
      name: 'apartments',
      component: Apartments
    },
    {
      path: '/under-construction',
      name: 'under-construction',
      component: UnderConstruction
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router