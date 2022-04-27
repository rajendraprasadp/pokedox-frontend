import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "virtual:windi.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faArrowLeftLong,
  faArrowRightLong,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
library.add(faArrowLeftLong, faBars, faArrowRightLong);

const app = createApp(App);
app.component("Icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
