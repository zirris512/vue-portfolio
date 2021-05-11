import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Portfolio from "../pages/Portfolio.vue";
import Contact from "../pages/Contact.vue";
import SingleProject from "../pages/SingleProject.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/about" },
        { path: "/about", component: About },
        { path: "/portfolio", component: Portfolio },
        { path: "/contact", component: Contact },
        { path: "/portfolio/:id", component: SingleProject, props: true },
    ],
});
