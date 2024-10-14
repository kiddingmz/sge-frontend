/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import AuthStore from '@/modules/auth/store';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'font-awesome/css/font-awesome.min.css';
import Vue3Datatable from '@bhplugin/vue3-datatable'
import '@bhplugin/vue3-datatable/dist/style.css'

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
        if (!store.getters.loggedIn) {
            next({
                name: 'notAuth',
            })
        } else {
            if (!AuthStore.state.authorities.includes(to.meta.authority)) {
                // next({ name: '403' })
                next({ name: 'notAuth' })
            } else {
                next()
            }
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.loggedIn) {
            next({
                name: 'student',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

createApp(App)
    .use(store)
    .use(router)
    .use(Vue3Datatable)
    .use(VueSweetalert2)
    .mount('#app')
