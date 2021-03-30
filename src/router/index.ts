import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../layout/Home.vue";
import Auth from "../layout/Auth.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "",
        name: "name",
        component: () => import("../views/home/Index.vue"),
        meta: {
          title: "Home",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Auth",
    component: Auth,
    redirect: "/login",
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("../views/auth/Login.vue"),
        meta: {
          title: "Login",
        },
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("../views/auth/Register.vue"),
        meta: {
          title: "Register",
        },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} | Leno`;
  }
});

export default router;
