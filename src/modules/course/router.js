// import {authorities} from "@/global";
import Module from "./Module.vue";
const List = () => import("./views/ListCoursesView.vue");
const Create = () => import("./views/CreateCourseView.vue");
const Edit = () => import("./views/EditCourseView.vue");

export default router => {
  router.addRoute({
    name: 'course',
    path: '/course',
    component: Module,
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: '', component: List },
      { name: 'createCourse', path: 'create', component: Create},
      { name: 'editCourse', path: 'edit/:id', component: Edit },
    ],
  })
};
