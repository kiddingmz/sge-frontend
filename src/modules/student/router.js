const Layout = () => import('@/components/layout/Layout.vue');
const ListStudents = () => import('./views/ListStudents.vue');

export default router => {
  router.addRoute({
    name: 'student',
    path: '/student',
    component: Layout,
    children: [
      { name: '', path: '', component: ListStudents},
    ],
  })
};
