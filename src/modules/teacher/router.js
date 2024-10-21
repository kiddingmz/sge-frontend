// import {authorities} from "@/global";
import Module from "./Module.vue";
const ListRoles = () => import("./views/ListTeachersView.vue");
const CreateRole = () => import("./views/CreateTeacherView.vue");
const EditRole = () => import("./views/EditTeacherView.vue");

export default router => {
  router.addRoute({
    name: 'teacher',
    path: '/teacher',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: ListRoles },
      { name: 'createTeacher', path: 'create', component: CreateRole},
      { name: 'editTeacher', path: 'edit/:id', component: EditRole },
    ],
  })
};
