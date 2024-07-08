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
    {
      path: '/define-slots',
      name: 'defineSlots',
      component: () => import('@/pages/DefineSlotsPage.vue')
    },
    {
      path: '/to-ref-to-value',
      name: 'toRefToValue',
      component: () => import('@/pages/ToRefToValuePage.vue')
    },
  ]
})

export default router
