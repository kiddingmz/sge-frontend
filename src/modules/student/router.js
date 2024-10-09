// const Module = () => import("./Module.vue");
const Login = () => import("./views/Login.vue");

const Layout = () => import('@/components/layout/Layout.vue');

export default router => {
  router.addRoute({
    name: 'student',
    path: '/student',
    component: Layout,
    children: [
      { name: '', path: '', component: Login},
    ],
  })
};
