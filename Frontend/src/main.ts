import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";
import router from "./routes/routes";
import "virtual:windi.css";
import "./assets/css/Navbar.css";
import "./assets/css/main.css";

library.add(faBars, faMoon, faSun);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
