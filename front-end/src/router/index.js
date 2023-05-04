import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    }, 
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/product",
        name: "product",
        component: () => import("../views/Product.vue"),
    },

    {
        path: "/products/:id",
        name: "product-edit",
        component: () => import("../views/ProductEdit.vue"),
        props: true
    },
    {
        path: "/",
        name: "product-add",
        component: () => import("../views/ProductAdd.vue"),
    },
    {
        path: "/",
        name: "user",
        component: () => import("@/views/User.vue"),

    },
    {
        path: "/users/:id",
        name: "user-edit",
        component: () => import("@/views/UserEdit.vue"),
        props: true
    },
    {
        path: "/",
        name: "user-add",
        component: () => import("@/views/UserAdd.vue"),

    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/components/Login.vue"),

    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/components/Register.vue"),

    },
    {
        path: "/",
        name: "contact",
        component: () => import("@/views/Contact.vue"),

    },
    {
        path: "/",
        name: "about",
        component: () => import("@/views/About.vue"),

    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

