const Module = () => import("./Module.vue");
const Login = () => import("./views/Login.vue");

export default router => {
  router.addRoute({
    name: 'login',
    path: '/login',
    component: Module,
    children: [
      { path: '', component: Login },
    ],
  })
};
