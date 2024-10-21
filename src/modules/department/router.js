// import {authorities} from "@/global";
import Module from "./Module.vue";
const ListRoles = () => import("./views/ListDepartmentsView.vue");
const CreateRole = () => import("./views/CreateDepartmentView.vue");
const EditRole = () => import("./views/EditDepartmentView.vue");

export default router => {
  router.addRoute({
    name: 'department',
    path: '/department',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: ListRoles },
      { name: 'createDepartment', path: 'create', component: CreateRole},
      { name: 'editDepartment', path: 'edit/:id', component: EditRole },
    ],
  })
};
