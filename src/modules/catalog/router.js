// import {authorities} from "@/global";
import Module from "./Module.vue";
const List = () => import("./views/ListCatalogView.vue");
const Create = () => import("./views/CreateCatalogView.vue");
const Edit = () => import("./views/EditCatalogView.vue");

export default router => {
  router.addRoute({
    name: 'catalog',
    path: '/catalog',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: List },
      { name: 'createCatalog', path: 'create', component: Create},
      { name: 'editCatalog', path: 'edit/:id', component: Edit },
    ],
  })
};
