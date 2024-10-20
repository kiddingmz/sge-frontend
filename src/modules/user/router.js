// import {authorities} from "@/global";
import Module from "./Module.vue";
const ListRoles = () => import("./views/ListUsersView.vue");
const CreateRole = () => import("./views/CreateUserView.vue");
const EditRole = () => import("./views/EditUserView.vue");

export default router => {
  router.addRoute({
    name: 'user',
    path: '/user',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: ListRoles },
      { name: 'createUser', path: 'create', component: CreateRole},
      { name: 'editUser', path: 'edit/:id', component: EditRole },
    ],
  })
};
