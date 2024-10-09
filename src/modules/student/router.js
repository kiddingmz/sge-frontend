const Module = () => import("./Module.vue");
const Login = () => import("./views/Login.vue");

export default router => {
  router.addRoute({
    name: 'student',
    path: '/student',
    component: Module,
    children: [
      { name: '', path: '', component: Login},
    ],
  })
};
