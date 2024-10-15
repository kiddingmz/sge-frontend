const Module = () => import("./Module.vue");
const Login = () => import("./views/Login.vue");
import store from '@/store'

export default router => {
  router.addRoute({
    name: 'login',
    path: '/auth',
    component: Module,
    meta: { requiresVisitor: true },
    children: [
      { name: 'notAuth', path: 'login', component: Login, meta: { requiresVisitor: true }},
    ],
  },
  router.addRoute({
      name: 'logout',
      path: '/auth/logout',
      component: Module,
      beforeEnter: (to, from, next) => {
          store.dispatch('logout').then(() => {
              next({ name: 'notAuth' });
          });
      }
  }),
  )
};
