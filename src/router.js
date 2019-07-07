import Vue from "vue";
import Router from "vue-router";
const Home = () => import(/* webpackChunkName: "home" */ "./pages/Home.vue");
const About = () => import(/* webpackChunkName: "about" */ "./pages/About.vue");
const Copy = () => import(/* webpackChunkName: "copy" */ "./pages/Copy.vue");

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            name: "home",
            component: Home,
            meta: { title: "home" }
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: About,
            meta: { title: "about" }
        },
        {
            path: "/copy",
            name: "copy",
            children: [
                {
                    path: "/copy/1",
                    component: Copy,
                    meta: { title: "copy" }
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log("router to ->", to.fullPath);
    next();
});

export default router;
