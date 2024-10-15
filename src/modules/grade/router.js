const Module = () => import("./Module.vue");
const Login = () => import("./views/Login.vue");

export default router => {
  router.addRoute({
    name: 'grade',
    path: '/grade',
    component: Module,
    meta: { requiresAuth: true },
    children: [
      { path: '', component: Login, meta: { requiresAuth: true }},
    ],
  })
};
