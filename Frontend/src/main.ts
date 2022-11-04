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

const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(vue3GoogleLogin, {
    clientId:
      "909732484180-0rpp0i38rvsriordprhrhfvnflaiods1.apps.googleusercontent.com",
    // clientId: process.env.GOOGLE_CLIENT_ID,
  })
  .use(router);

app.mount("#app");
