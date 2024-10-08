const Module = () => import("./Module.vue");
const Login = () => import("./views/Login.vue");

export default router => {
  router.addRoute({
    name: 'login',
    path: '/auth',
    component: Module,
    children: [
      { name: 'notAuth', path: 'login', component: Login },
    ],
  })
};
