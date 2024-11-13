// import {authorities} from "@/global";
import Module from "./Module.vue";
const List = () => import("./views/ListCollegesView.vue");
const Create = () => import("./views/CreateCollegeView.vue");
const Edit = () => import("./views/EditCollegeView.vue");

export default router => {
  router.addRoute({
    name: 'college',
    path: '/college',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: List, meta: {requiresAuth: true} },
      { name: 'createCollege', path: 'create', component: Create, meta: {requiresAuth: true}},
      { name: 'editCollege', path: 'edit/:id', component: Edit , meta: {requiresAuth: true}},
    ],
  })
};
