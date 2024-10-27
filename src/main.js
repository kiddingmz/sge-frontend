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

// import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import '@fortawesome/fontawesome-free/js/all.min.js';

import PrimeVue from 'primevue/config';
import Noir from './presets/Noir.js';
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import 'primeicons/primeicons.css'

import Vue3Datatable from '@bhplugin/vue3-datatable'
import '@bhplugin/vue3-datatable/dist/style.css'

import authService from '@/modules/auth/service/AuthService';

import authModule from '@/modules/auth';
import studentModule from '@/modules/student';
import teacherModule from '@/modules/teacher';
import courseModule from '@/modules/course';
import classModule from '@/modules/class';
import departmentModule from "@/modules/department";
import evaluationModule from "@/modules/evaluation";
import gradeModule from "@/modules/grade";
import roleModule from "@/modules/role";
import userModule from "@/modules/user";
import registrationModule from "@/modules/registration";
import enrollmentModule from "@/modules/enrollment";

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
    role: roleModule,
    user: userModule,
    registration: registrationModule,
    enrollment: enrollmentModule
})

// router.beforeEach((to, from, next) => {
//     console.log('Logged In:', store.getters.loggedIn);
//     console.log('Authorities:', store.getters.getAuthorities);
//
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!store.getters.loggedIn) {
//             console.log('Rota atual NOAUTH:', to.name);
//             next({
//                 name: 'notAuth',
//             })
//         } else {
//             if (!AuthStore.state.authorities.includes(to.meta.authority)) {
//                 // next({ name: '403' })
//                 console.log('Rota atual 403:', to.name);
//                 next({ name: 'notAuth' })
//             } else {
//                 console.log('Rota atual A_403:', to.name);
//                 next()
//             }
//         }
//     } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//         if (store.getters.loggedIn) {
//             console.log('Rota atual STUDENT:', to.name);
//             next({
//                 name: 'Home',
//             })
//         } else {
//             console.log('Rota atual A_STUDENT:', to.name);
//             next()
//         }
//     } else {
//         console.log('Rota atual FORA:', to.name);
//         next()
//     }
// })

const app  = createApp(App);
app.use(store);
app.use(router);
app.use(Vue3Datatable);
app.use(VueSweetalert2);
// app.use(PrimeVue);
app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
});
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.config.globalProperties.$hasAnyAuthority = authService.hasAnyAuthority;
app.mount('#app');
