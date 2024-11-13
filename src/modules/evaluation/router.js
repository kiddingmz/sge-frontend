// import {authorities} from "@/global";
import Module from "./Module.vue";
import {authorities} from "@/global";
const List = () => import("./views/ListEvaluationsView.vue");
const Create = () => import("./views/CreateEvaluationView.vue");
const Edit = () => import("./views/EditEvaluationView.vue");

export default router => {
  router.addRoute({
    name: 'evaluation',
    path: '/evaluation',
    component: Module,
    meta: {
      requiresAuth: true, authority:  authorities.USER_VIEW
    },
    children: [
      { path: '', component: List, meta: {requiresAuth: true, authority:  authorities.USER_VIEW} },
      { name: 'createEvaluation', path: 'create', component: Create, meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
      { name: 'editEvaluation', path: 'edit/:id', component: Edit , meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
    ],
  })
};
