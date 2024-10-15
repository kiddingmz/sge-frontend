import {authorities} from "@/global";

const Module = () => import("./Module.vue");

export default router => {
  router.addRoute({
    name: 'teacher',
    path: '/teacher',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: '', meta: { authority: authorities.TEACHER_VIEW, requiresAuth: true} },
    ],
  })
};
