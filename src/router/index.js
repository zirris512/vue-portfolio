import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
   {
      path: "/",
      redirect: "/about",
   },
   {
      path: "/about",
      name: "About",
      component: About,
   },
   {
      path: "/portfolio",
      name: "Portfolio",
      component: () => import("../views/Portfolio.vue"),
   },
   {
      path: "/portfolio/:projectId",
      name: "Project",
      component: () => import("../views/Project.vue"),
      props: true,
   },
   {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/Contact.vue"),
   },
   {
      path: "/:notFound(.*)",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
   },
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
});

export default router;
