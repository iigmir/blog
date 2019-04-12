import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Test from "./views/Test.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Main",
            component: Main
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/article/:id",
            name: "Article",
            component: Test
        },
        {
            path: "/tags",
            name: "Tags",
            component: Test
        },
        {
            path: "/tag/:id",
            name: "Tag",
            component: Test
        },
    ]
})
