const Module = () => import("./Module.vue");
const Login = () => import("./views/Login.vue");

export default router => {
  router.addRoute({
    name: 'course',
    path: '/course',
    component: Module,
    meta: { requiresVisitor: true },
    children: [
      { path: '', component: Login, meta: { requiresVisitor: true }},
    ],
  })
};
