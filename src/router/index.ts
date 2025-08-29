import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DefaultLayout from "@/components/layout/DefaultLayout.vue";
import Login from "@/view/auth/Login.vue";
import Register from "@/view/auth/Register.vue";
const HonePage = () => import("@/view/index.vue");


const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: DefaultLayout,
    children: [{ path: "", component: HonePage }, {
      path: "/login",
      component: Login
    },
    {
      path: "/register",
      component: Register
    }
  ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
