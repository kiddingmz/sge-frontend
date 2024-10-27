import Module from "./Module.vue";
import {authorities} from "@/global";
import List from "./views/ListRegistrationsView.vue";
import Create from "./views/CreateRegistrationView.vue";
import Edit from "./views/EditRegistrationView.vue";

export default router => {
  router.addRoute({
    name: 'registration',
    path: '/registration',
    component: Module,
    meta: {
      requiresAuth: true, authority: [authorities.USER_VIEW, authorities.USER_EDIT, authorities.USER_CREATE, authorities.USER_DELETE]
    },
    children: [
      { path: '', component: List, meta: { requiresAuth: true, authority:  authorities.USER_VIEW} },
      { name: 'createRegistration', path: 'create', component: Create, meta: { requiresAuth: true, authority:  authorities.USER_CREATE}},
      { name: 'editRegistration', path: 'edit/:id', component: Edit, meta: { requiresAuth: true, authority:  authorities.USER_EDIT} },
    ],
  })
};
