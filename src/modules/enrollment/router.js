import Module from "./Module.vue";
import {authorities} from "@/global";
const List = () => import("./views/ListEnrollmentsView.vue");
const Create = () => import("./views/CreateEnrollmentView.vue");
const Edit = () => import("./views/EditEnrollmentView.vue");

export default router => {
  router.addRoute({
    name: 'enrollment',
    path: '/enrollment',
    component: Module,
    meta: {
      requiresAuth: true, authority: [authorities.USER_VIEW, authorities.USER_EDIT, authorities.USER_CREATE, authorities.USER_DELETE]
    },
    children: [
      { path: '', component: List, meta: { requiresAuth: true, authority:  authorities.USER_VIEW} },
      { name: 'createUser', path: 'create', component: Create, meta: { requiresAuth: true, authority:  authorities.USER_CREATE}},
      { name: 'editUser', path: 'edit/:id', component: Edit, meta: { requiresAuth: true, authority:  authorities.USER_EDIT} },
    ],
  })
};
