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
      { path: '', component: List , meta: {requiresAuth: true}},
      { name: 'createClass', path: 'create', component: Create, meta: {requiresAuth: true}},
      { name: 'editClass', path: 'edit/:id', component: Edit , meta: {requiresAuth: true}},
    ],
  })
};
