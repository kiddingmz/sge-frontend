// import {authorities} from "@/global";
import Module from "./Module.vue";
import {authorities} from "@/global";
const List = () => import("./views/ListClassesView.vue");
const Create = () => import("./views/CreateClassView.vue");
const Edit = () => import("./views/EditClassView.vue");

export default router => {
  router.addRoute({
    name: 'class',
    path: '/class',
    component: Module,
    meta: {
      requiresAuth: true, authority:  authorities.USER_VIEW
    },
    children: [
      { path: '', component: List , meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
      { name: 'createClass', path: 'create', component: Create, meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
      { name: 'editClass', path: 'edit/:id', component: Edit , meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
    ],
  })
};
