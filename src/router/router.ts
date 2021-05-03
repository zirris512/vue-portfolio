import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/about" },
        { path: "/about", component: About },
        { path: "/portfolio", component: () => import("../pages/Portfolio.vue") },
        { path: "/contact", component: () => import("../pages/Contact.vue") },
    ],
});
