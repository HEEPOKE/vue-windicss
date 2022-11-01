import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../pages/Home.vue";
import StoreVue from "../pages/Store.vue";
import AddStoreVue from "../pages/AddStore.vue";
import AboutVue from "../pages/About.vue";

const routes = [
  {
    path: "/",
    name: "HomeVue",
    component: HomeVue,
  },
  {
    path: "/store",
    name: "StoreVue",
    component: StoreVue,
  },
  {
    path: "/about",
    name: "AboutVue",
    component: AboutVue,
  },
  {
    path: "/add",
    name: "AddStoreVue",
    component: AddStoreVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
