// import {authorities} from "@/global";
import Module from "./Module.vue";
import {authorities} from "@/global";
const ListRoles = () => import("./views/ListStudentsView.vue");
const CreateRole = () => import("./views/CreateStudentView.vue");
const EditRole = () => import("./views/EditStudentView.vue");

export default router => {
  router.addRoute({
    name: 'student',
    path: '/student',
    component: Module,
    meta: {
      requiresAuth: true, authority:  authorities.USER_VIEW
    },
    children: [
      { path: '', component: ListRoles, meta: {requiresAuth: true, authority:  authorities.USER_VIEW} },
      { name: 'createStudent', path: 'create', component: CreateRole, meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
      { name: 'editStudent', path: 'edit/:id', component: EditRole , meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
    ],
  })
};
