import Module from "./Module.vue";
import {authorities} from "@/global";
const ListRoles = () => import("./views/ListUsersView.vue");
const CreateRole = () => import("./views/CreateUserView.vue");
const EditRole = () => import("./views/EditUserView.vue");

export default router => {
  router.addRoute({
    name: 'user',
    path: '/user',
    component: Module,
    meta: {
      requiresAuth: true, authority: [authorities.USER_VIEW, authorities.USER_EDIT, authorities.USER_CREATE, authorities.USER_DELETE]
    },
    children: [
      { path: '', component: ListRoles, meta: { requiresAuth: true, authority:  authorities.USER_VIEW} },
      { name: 'createUser', path: 'create', component: CreateRole, meta: { requiresAuth: true, authority:  authorities.USER_CREATE}},
      { name: 'editUser', path: 'edit/:id', component: EditRole, meta: { requiresAuth: true, authority:  authorities.USER_EDIT} },
    ],
  })
};
