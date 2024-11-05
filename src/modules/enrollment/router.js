// import {authorities} from "@/global";
import Module from "./Module.vue";
const List = () => import("./views/ListEnrollmentsView.vue");
const Create = () => import("./views/CreateEnrollmentView.vue");
const Edit = () => import("./views/EditEnrollmentView.vue");

export default router => {
  router.addRoute({
    name: 'enrollment',
    path: '/enrollment',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: List },
      { name: 'createEnrollment', path: 'create', component: Create},
      { name: 'editEnrollment', path: 'edit/:id', component: Edit },
    ],
  })
};
