import "./assets/reset.css";
import "./assets/style.css";

import { createApp } from "vue";
import App from "./App.vue";

import router from "./Router";

createApp(App).use(router).mount("#app");
