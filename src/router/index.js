import { createRouter, createWebHistory } from 'vue-router'
import {authorities} from "@/global";
import PermissionDenied from '../components/404/404.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: { requiresAuth: true, authority:  authorities.USER_VIEW },
    component: () => import('@/components/layout/Layout.vue'),
  },
  {
    path: "/notAuth",
    name: "403",
    props: true,
    component: PermissionDenied,

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
