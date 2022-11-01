import { createRouter, createWebHistory } from 'vue-router';
import HomeVue from '../pages/Home.vue';
import StoreVue from '../pages/Store.vue'

const routes = [
  {
    path: '/',
    name: 'HomeVue',
    component: HomeVue
  },
 {
  path: '/store',
  name: 'StoreVue',
  component: StoreVue
 },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
      
export default router;