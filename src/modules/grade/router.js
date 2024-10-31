// import {authorities} from "@/global";
import Module from "./Module.vue";
const List = () => import("./views/ListGradesView.vue");
const Create = () => import("./views/CreateGradeView.vue");
const Edit = () => import("./views/EditGradeView.vue");

export default router => {
  router.addRoute({
    name: 'grade',
    path: '/grade',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: List },
      { name: 'createGrade', path: 'create', component: Create},
      { name: 'editGrade', path: 'edit/:id', component: Edit },
    ],
  })
};
