// import {authorities} from "@/global";
import Module from "./Module.vue";
import {authorities} from "@/global";
const List = () => import("./views/ListTeachersView.vue");
const Create = () => import("./views/CreateTeacherView.vue");
const Edit = () => import("./views/EditTeacherView.vue");

export default router => {
  router.addRoute({
    name: 'teacher',
    path: '/teacher',
    component: Module,
    meta: {
      requiresAuth: true, authority: [authorities.TEACHER_VIEW, authorities.TEACHER_EDIT, authorities.TEACHER_CREATE, authorities.TEACHER_DELETE]
    },
    children: [
      { path: '', component: List, meta: { requiresAuth: true, authority:  authorities.TEACHER_VIEW} },
      { name: 'createTeacher', path: 'create', component: Create, meta: { requiresAuth: true, authority:  authorities.TEACHER_CREATE}},
      { name: 'editTeacher', path: 'edit/:id', component: Edit, meta: { requiresAuth: true, authority:  authorities.TEACHER_EDIT} },
    ],
  })
};
