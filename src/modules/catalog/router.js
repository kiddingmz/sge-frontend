// import {authorities} from "@/global";
import Module from "./Module.vue";
import {authorities} from "@/global";
const List = () => import("./views/ListCatalogView.vue");
const Create = () => import("./views/CreateCatalogView.vue");
const Edit = () => import("./views/EditCatalogView.vue");

export default router => {
  router.addRoute({
    name: 'catalog',
    path: '/catalog',
    component: Module,
    meta: {
      requiresAuth: true, authority:  authorities.USER_VIEW
    },
    children: [
      { path: '', component: List ,meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
      { name: 'createCatalog', path: 'create', component: Create, meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
      { name: 'editCatalog', path: 'edit/:id', component: Edit , meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
    ],
  })
};
