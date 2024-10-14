import {authorities} from "@/global";

const Module = () => import("./Module.vue");
const Login = () => import("./views/Login.vue");

export default router => {
  router.addRoute({
    name: 'teacher',
    path: '/teacher',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: Login, meta: { authority: authorities.TEACHER_VIEW } },
    ],
  })
};
