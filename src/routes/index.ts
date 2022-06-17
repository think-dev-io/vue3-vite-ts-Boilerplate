import { createRouter, createWebHistory } from 'vue-router'
import defaultRoutes from './defaultRoutes'

const router = createRouter({
  history: createWebHistory(),
  routes: defaultRoutes,
})

export default router
