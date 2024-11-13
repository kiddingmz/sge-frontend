// import {authorities} from "@/global";
import Module from "./Module.vue";
const ListRoles = () => import("./views/ListRolesView.vue");
const CreateRole = () => import("./views/CreateRoleView.vue");
const EditRole = () => import("./views/EditRoleView.vue");

export default router => {
  router.addRoute({
    name: 'role',
    path: '/role',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: ListRoles, meta: {requiresAuth: true} },
      { name: 'createRole', path: 'create', component: CreateRole, meta: {requiresAuth: true}},
      { name: 'editRole', path: 'edit/:id', component: EditRole , meta: {requiresAuth: true}},
    ],
  })
};
