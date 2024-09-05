import { createMemoryHistory, createRouter } from "vue-router";

import IndexView from "./views/IndexView.vue";
import AboutView from "./views/AboutView.vue";
import CheatsheetView from "./views/CheatsheetView.vue";

const routes = [
  { path: "/", component: IndexView },
  { path: "/about", component: AboutView },
  { path: "/cheatsheet", component: CheatsheetView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
