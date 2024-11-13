// import {authorities} from "@/global";
import Module from "./Module.vue";
import {authorities} from "@/global";
const List = () => import("./views/ListGradesView.vue");
const Create = () => import("./views/CreateGradeView.vue");
const Edit = () => import("./views/EditGradeView.vue");

export default router => {
  router.addRoute({
    name: 'grade',
    path: '/grade',
    component: Module,
    meta: {
      requiresAuth: true, authority:  authorities.USER_VIEW
    },
    children: [
      { path: '', component: List , meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
      { name: 'createGrade', path: 'create', component: Create, meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
      { name: 'editGrade', path: 'edit/:id', component: Edit , meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
    ],
  })
};
