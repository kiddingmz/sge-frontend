// import {authorities} from "@/global";
import Module from "./Module.vue";
import {authorities} from "@/global";
const List = () => import("./views/ListDepartmentsView.vue");
const Create = () => import("./views/CreateDepartmentView.vue");
const Edit = () => import("./views/EditDepartmentView.vue");

export default router => {
  router.addRoute({
    name: 'department',
    path: '/department',
    component: Module,
    meta: {
      requiresAuth: true, authority:  authorities.USER_VIEW
    },
    children: [
      { path: '', component: List, meta: {requiresAuth: true, authority:  authorities.USER_VIEW} },
      { name: 'createDepartment', path: 'create', component: Create, meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
      { name: 'editDepartment', path: 'edit/:id', component: Edit , meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
    ],
  })
};
