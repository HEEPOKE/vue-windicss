import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import router from './routes/routes'

createApp(App).use(router).mount('#app')
