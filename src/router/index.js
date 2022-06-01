import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/incomplete',
      name: 'incomplete',
      component: () => import('../views/IncompleteView.vue')
    },
    {
      path: '/complete',
      name: 'complete',
      component: () => import('../views/CompleteView.vue')
    }
  ]
})

export default router
