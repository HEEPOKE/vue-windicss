import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faMoon,
  faSun,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import vue3GoogleLogin from "vue3-google-login";
import App from "./App.vue";
import router from "./routes/routes";
import "virtual:windi.css";
import "./assets/css/Navbar.css";
import "./assets/css/Main.css";

library.add(faBars, faMoon, faSun, faMagnifyingGlass);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(vue3GoogleLogin, {
    clientId: "1036357928807-arjrpr6cm3bci4601n784put6linm1ot.apps.googleusercontent.com",
    // clientId: process.env.GOOGLE_CLIENT_ID,
  })
  .use(router)
  .mount("#app");
