import { createRouter, createWebHistory } from "vue-router";
import LoginVue from "../pages/auth/Login.vue";
import RegisterVue from "../pages/auth/Register.vue";
import ForgotPasswordVue from "../pages/auth/ForgotPassword.vue";
import HomeVue from "../pages/Home.vue";
import StoreVue from "../pages/Store.vue";
import AddStoreVue from "../pages/AddStore.vue";
import AboutVue from "../pages/About.vue";
import NotFoundVue from "../pages/errors/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "HomeVue",
    component: HomeVue,
  },
  {
    path: "/login",
    name: "LoginVue",
    component: LoginVue,
  },
  {
    path: "/register",
    name: "RegisterVue",
    component: RegisterVue,
  },
  {
    path: "/forgotpassword",
    name: "ForgotPasswordVue",
    component: ForgotPasswordVue,
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
