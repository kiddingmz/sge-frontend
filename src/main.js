import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'font-awesome/css/font-awesome.min.css';

import authModule from '@/modules/auth';
import studentModule from '@/modules/student';
import teacherModule from '@/modules/teacher';
import courseModule from '@/modules/course';
import classModule from '@/modules/class';
import departmentModule from "@/modules/department";
import evaluationModule from "@/modules/evaluation";
import gradeModule from "@/modules/grade";
import assistantModule from "@/modules/assistant";

import { registerModules } from "./register-modules";

registerModules({
    auth: authModule,
    student: studentModule,
    teacher: teacherModule,
    course: courseModule,
    class: classModule,
    department: departmentModule,
    evaluation: evaluationModule,
    grade: gradeModule,
    assistant: assistantModule
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters['auth/isAuthenticated']) {
            next({ name: 'notAuth' });
        } else {
            if (!store.state.authorities.includes(to.meta.authority)) {
                next({ name: '403' });
            } else {
                next();
            }
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters['auth/isAuthenticated']) {
            next({ name: 'dashboard' });
        } else {
            next();
        }
    } else {
        next();
    }
});

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
