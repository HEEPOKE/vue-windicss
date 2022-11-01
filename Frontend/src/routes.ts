import { createRouter, createWebHistory } from 'vue-router';
import HomeVue from './pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'HomeVue',
    component: HomeVue
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
      
export default router;