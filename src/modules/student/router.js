// import {authorities} from "@/global";

const Layout = () => import('@/components/layout/Layout.vue');
const ListStudents = () => import('./views/ListStudents.vue');

export default router => {
  router.addRoute({
    name: 'student',
    path: '/student',
    component: Layout,

    children: [
      { path: '', component: ListStudents,  },
    ],
  })
};
