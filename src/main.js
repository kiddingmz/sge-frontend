import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { registerModules } from "./register-modules";

registerModules({

})

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
