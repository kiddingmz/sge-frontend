const Module = () => import("./Module.vue");
const Login = () => import("./views/Login.vue");

export default router => {
  router.addRoute({
    name: 'login',
    path: '/auth',
    component: Module,
    meta: { requiresVisitor: true },
    children: [
      { name: 'notAuth', path: 'login', component: Login, meta: { requiresVisitor: true }},
    ],
  })
};
