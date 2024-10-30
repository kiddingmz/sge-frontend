import AvaliacaoView from "./views/AvaliacaoView.vue";

const Module = () => import("./Module.vue");
const Login = () => import("./views/Login.vue");
const Avaliacao = () => import("./views/Avaliacao.vue")
export default router => {
  router.addRoute({
    name: 'evaluation',
    path: '/evaluation',
    component: Module,AvaliacaoView, Avaliacao,
    meta: { requiresAuth: true },
    children: [
      { path: '', component: AvaliacaoView, },
      { path:'/avaliacoes', component:Login}
    ],
  })
};
