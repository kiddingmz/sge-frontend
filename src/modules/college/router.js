// import {authorities} from "@/global";
import Module from "./Module.vue";
import {authorities} from "@/global";
const List = () => import("./views/ListCollegesView.vue");
const Create = () => import("./views/CreateCollegeView.vue");
const Edit = () => import("./views/EditCollegeView.vue");

export default router => {
  router.addRoute({
    name: 'college',
    path: '/college',
    component: Module,
    meta: {
      requiresAuth: true, authority:  authorities.USER_VIEW
    },
    children: [
      { path: '', component: List, meta: {requiresAuth: true, authority:  authorities.USER_VIEW} },
      { name: 'createCollege', path: 'create', component: Create, meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
      { name: 'editCollege', path: 'edit/:id', component: Edit , meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
    ],
  })
};
