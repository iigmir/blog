import Vue from "vue";
import Router from "vue-router";
import Main from "../views/Main.vue";
import Arta from "../views/Article/index.vue";
import Tags from "../views/Tags.vue";

Vue.use(Router);

export default new Router({
    mode: "hash",
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
            component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
        },
        {   // To prevent confuse between <article> (HTMLe element) and <Article> (The elemant), 
            // This component names Arta: <Arta>
            path: "/article/:id",
            name: "Article",
            component: Arta
        },
        {
            path: "/tags/:id?",
            name: "Tags",
            component: Tags
        }
    ]
})
