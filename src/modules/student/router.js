// import {authorities} from "@/global";
import Module from "./Module.vue";
const ListRoles = () => import("./views/ListStudentsView.vue");
const CreateRole = () => import("./views/CreateStudentView.vue");
const EditRole = () => import("./views/EditStudentView.vue");

export default router => {
  router.addRoute({
    name: 'student',
    path: '/student',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: ListRoles },
      { name: 'createStudent', path: 'create', component: CreateRole},
      { name: 'editStudent', path: 'edit/:id', component: EditRole },
    ],
  })
};
