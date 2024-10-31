// import {authorities} from "@/global";
import Module from "./Module.vue";
const List = () => import("./views/ListClassesView.vue");
const Create = () => import("./views/CreateClassView.vue");
const Edit = () => import("./views/EditClassView.vue");

export default router => {
  router.addRoute({
    name: 'class',
    path: '/class',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: List },
      { name: 'createClass', path: 'create', component: Create},
      { name: 'editClass', path: 'edit/:id', component: Edit },
    ],
  })
};
