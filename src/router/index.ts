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
      path: '/minecraft',
      name: 'minecraft',
      component: () => import('../views/MinecraftView.vue')
    },
    {
      path: '/hosting',
      name: 'hosting',
      component: () => import('../views/HostingView.vue')
    }
  ]
})

export default router