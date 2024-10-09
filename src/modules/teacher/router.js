const Module = () => import("./Module.vue");
const Login = () => import("./views/Login.vue");

export default router => {
  router.addRoute({
    name: 'teacher',
    path: '/teacher',
    component: Module,
    meta: { requiresVisitor: true },
    children: [
      { name: '', path: '', component: Login, meta: { requiresVisitor: true }},
    ],
  })
};
