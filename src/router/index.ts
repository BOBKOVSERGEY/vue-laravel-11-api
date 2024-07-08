import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: '/define-model',
      name: 'defineModel',
      component: () => import('@/pages/DefineModelPage.vue')
    },
  ]
})

export default router
