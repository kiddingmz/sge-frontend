// import {authorities} from "@/global";
import Module from "./Module.vue";
import {authorities} from "@/global";
const ListRoles = () => import("./views/ListRolesView.vue");
const CreateRole = () => import("./views/CreateRoleView.vue");
const EditRole = () => import("./views/EditRoleView.vue");

export default router => {
  router.addRoute({
    name: 'role',
    path: '/role',
    component: Module,
    meta: {
      requiresAuth: true, authority:  authorities.USER_VIEW
    },
    children: [
      { path: '', component: ListRoles, meta: {requiresAuth: true, authority:  authorities.USER_VIEW} },
      { name: 'createRole', path: 'create', component: CreateRole, meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
      { name: 'editRole', path: 'edit/:id', component: EditRole , meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
    ],
  })
};
