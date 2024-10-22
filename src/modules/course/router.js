// import {authorities} from "@/global";
import Module from "./Module.vue";
const ListRoles = () => import("./views/ListClassesView.vue");
const CreateRole = () => import("./views/CreateClassView.vue");
const EditRole = () => import("./views/EditClassView.vue");

export default router => {
  router.addRoute({
    name: 'class',
    path: '/class',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: ListRoles },
      { name: 'createClass', path: 'create', component: CreateRole},
      { name: 'editClass', path: 'edit/:id', component: EditRole },
    ],
  })
};
