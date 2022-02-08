import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "Home", component: Home }],
});

app.use(router);
app.mount("#app");
