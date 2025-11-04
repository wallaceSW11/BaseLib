import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/HomeView.vue"),
  },
  {
    path: "/components",
    name: "Components",
    component: () => import("./views/ComponentsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
