// import {authorities} from "@/global";
import Module from "./Module.vue";
import {authorities} from "@/global";
const List = () => import("./views/ListCoursesView.vue");
const Create = () => import("./views/CreateCourseView.vue");
const Edit = () => import("./views/EditCourseView.vue");

export default router => {
  router.addRoute({
    name: 'course',
    path: '/course',
    component: Module,
    meta: {
      requiresAuth: true, authority:  authorities.USER_VIEW
    },
    children: [
      { path: '', component: List , meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
      { name: 'createCourse', path: 'create', component: Create, meta: {requiresAuth: true, authority:  authorities.USER_VIEW}},
      { name: 'editCourse', path: 'edit/:id', component: Edit, meta: {requiresAuth: true, authority:  authorities.USER_VIEW} },
    ],
  })
};
