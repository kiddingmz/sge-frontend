// import {authorities} from "@/global";
import Module from "./Module.vue";
const ListRoles = () => import("./views/ListCoursesView.vue");
const CreateRole = () => import("./views/CreateCourseView.vue");
const EditRole = () => import("./views/EditCourseView.vue");

export default router => {
  router.addRoute({
    name: 'course',
    path: '/course',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: ListRoles },
      { name: 'createCourse', path: 'create', component: CreateRole},
      { name: 'editCourse', path: 'edit/:id', component: EditRole },
    ],
  })
};
