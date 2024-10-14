import { createRouter, createWebHistory } from 'vue-router'
import {authorities} from "@/global";

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { requiresAuth: true, authority:  authorities.STUDENT_VIEW },
    component: () => import('@/components/layout/Layout.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
