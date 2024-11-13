// import {authorities} from "@/global";
import Module from "./Module.vue";
const List = () => import("./views/ListDepartmentsView.vue");
const Create = () => import("./views/CreateDepartmentView.vue");
const Edit = () => import("./views/EditDepartmentView.vue");

export default router => {
  router.addRoute({
    name: 'department',
    path: '/department',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: List, meta: {requiresAuth: true} },
      { name: 'createDepartment', path: 'create', component: Create, meta: {requiresAuth: true}},
      { name: 'editDepartment', path: 'edit/:id', component: Edit , meta: {requiresAuth: true}},
    ],
  })
};
