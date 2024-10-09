import { createRouter, createWebHistory } from 'vue-router'
import {authorities} from "@/global";


const routes = [
  {
    path: '/',
    component: () => import('@/components/layout/Layout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/DashboardView.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      requiresAuth: true,
      authority: authorities.STUDENT_VIEW
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
