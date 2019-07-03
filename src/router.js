import Vue from "vue";
import Router from "vue-router";
const Home = () => import(/* webpackChunkName: "home" */ "./pages/Home.vue");
const About = () => import(/* webpackChunkName: "about" */ "./pages/About.vue");

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: About
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log("router to ->", to.fullPath);
    next();
});

export default router;
