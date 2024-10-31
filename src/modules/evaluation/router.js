// import {authorities} from "@/global";
import Module from "./Module.vue";
const List = () => import("./views/ListEvaluationsView.vue");
const Create = () => import("./views/CreateEvaluationView.vue");
const Edit = () => import("./views/EditEvaluationView.vue");

export default router => {
  router.addRoute({
    name: 'evaluation',
    path: '/evaluation',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: List },
      { name: 'createEvaluation', path: 'create', component: Create},
      { name: 'editEvaluation', path: 'edit/:id', component: Edit },
    ],
  })
};
