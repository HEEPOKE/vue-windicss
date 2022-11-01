import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'
import router from './routes/routes'
import 'virtual:windi.css'

library.add(faBars)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
