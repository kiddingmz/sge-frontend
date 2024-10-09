const Module = () => import("./Module.vue");
const Login = () => import("./views/Login.vue");

export default router => {
  router.addRoute({
    name: 'grade',
    path: '/grade',
    component: Module,
    meta: { requiresVisitor: true },
    children: [
      { name: '', path: '', component: Login, meta: { requiresVisitor: true }},
    ],
  })
};
