import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "../components/Layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
    //   {
    //     path: '/redirect',
    //     component: Layout,
    //     hidden: true,
    //     children: [
    //       {
    //         path: '/redirect/:path*',
    //         component: () => import('@/views/redirect/index')
    //       }
    //     ]
    //   },
    //   {
    //     path: '/login',
    //     component: () => import('@/views/login/index'),
    //     hidden: true
    //   },
    //   {
    //     path: '/401',
    //     component: () => import('@/views/error-page/401'),
    //     hidden: true
    //   },
    {
        path: "/",
        redirect: "/home",
        hidden: true
    },
    {
        path: "/home",
        component: Layout,
        // meta: { title: "home", icon: "home", affix: true },
        children: [
            {
                path: "/home",
                component: () => import("../pages/Home"),
                name: "home",
                meta: { title: "首页", icon: "home", affix: true }
            }
        ]
    },
    {
        path: "/copy",
        component: Layout,
        meta: { title: "copy", icon: "copy", affix: true },
        redirect: "noRedirect",
        children: [
            {
                path: "comment",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },
            {
                path: "groupbuy",
                component: () => import("../pages/operation/GroupBuy"),
                name: "groupbuy",
                meta: { title: "groupbuy", icon: "groupbuy", affix: true }
            },
            {
                path: "comment1",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },
            {
                path: "comment2",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },
            {
                path: "comment3",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },
            {
                path: "comment4",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },
            {
                path: "comment1123",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },
            {
                path: "comment124",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },
            {
                path: "comment5",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },
            {
                path: "comment6",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },
            {
                path: "comment7",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },
            {
                path: "comment55",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },
            {
                path: "comment8",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },
            {
                path: "comment9",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },
            {
                path: "comment11",
                component: () => import("../pages/operation/Comment"),
                name: "Comment",
                meta: { title: "Comment", icon: "Comment", affix: true }
            },

        ]
    },
    {
        path: "/about",
        component: Layout,
        children: [
            {
                path: "/about",
                component: () => import("../pages/About"),
                name: "about",
                meta: { title: "about", icon: "about", affix: true }
            }
        ]
    }
    // {
    //     path: "/",
    //     component: Layout,
    //     redirect: "/dashboard",
    //     children: [
    //         {
    //             path: "dashboard",
    //             component: () => import("@/views/dashboard/index"),
    //             name: "Dashboard",
    //             meta: { title: "Dashboard", icon: "dashboard", affix: true }
    //         }
    //     ]
    // },
    // {
    //     path: "/guide",
    //     component: Layout,
    //     redirect: "/guide/index",
    //     children: [
    //         {
    //             path: "index",
    //             component: () => import("@/views/guide/index"),
    //             name: "Guide",
    //             meta: { title: "Guide", icon: "guide", noCache: true }
    //         }
    //     ]
    // },
    // {
    //     path: "/profile",
    //     component: Layout,
    //     redirect: "/profile/index",
    //     hidden: true,
    //     children: [
    //         {
    //             path: "index",
    //             component: () => import("@/views/profile/index"),
    //             name: "Profile",
    //             meta: { title: "Profile", icon: "user", noCache: true }
    //         }
    //     ]
    // }
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
// export const asyncRoutes = [
//     {
//         path: "/permission",
//         component: Layout,
//         redirect: "/permission/page",
//         alwaysShow: true, // will always show the root menu
//         name: "Permission",
//         meta: {
//             title: "Permission",
//             icon: "lock",
//             roles: ["admin", "editor"] // you can set roles in root nav
//         },
//         children: [
//             {
//                 path: "page",
//                 component: () => import("@/views/permission/page"),
//                 name: "PagePermission",
//                 meta: {
//                     title: "Page Permission",
//                     roles: ["admin"] // or you can only set roles in sub nav
//                 }
//             },
//             {
//                 path: "directive",
//                 component: () => import("@/views/permission/directive"),
//                 name: "DirectivePermission",
//                 meta: {
//                     title: "Directive Permission"
//                     // if do not set roles, means: this page does not require permission
//                 }
//             },
//             {
//                 path: "role",
//                 component: () => import("@/views/permission/role"),
//                 name: "RolePermission",
//                 meta: {
//                     title: "Role Permission",
//                     roles: ["admin"]
//                 }
//             }
//         ]
//     },

//     {
//         path: "/icon",
//         component: Layout,
//         children: [
//             {
//                 path: "index",
//                 component: () => import("@/views/icons/index"),
//                 name: "Icons",
//                 meta: { title: "Icons", icon: "icon", noCache: true }
//             }
//         ]
//     },

//     /** when your routing map is too long, you can split it into small modules **/
//     //   componentsRouter,
//     //   chartsRouter,
//     //   nestedRouter,
//     //   tableRouter,

//     {
//         path: "/example",
//         component: Layout,
//         redirect: "/example/list",
//         name: "Example",
//         meta: {
//             title: "Example",
//             icon: "example"
//         },
//         children: [
//             {
//                 path: "create",
//                 component: () => import("@/views/example/create"),
//                 name: "CreateArticle",
//                 meta: { title: "Create Article", icon: "edit" }
//             },
//             {
//                 path: "edit/:id(\\d+)",
//                 component: () => import("@/views/example/edit"),
//                 name: "EditArticle",
//                 meta: {
//                     title: "Edit Article",
//                     noCache: true,
//                     activeMenu: "/example/list"
//                 },
//                 hidden: true
//             }
//         ]
//     },

//     {
//         path: "/error",
//         component: Layout,
//         redirect: "noRedirect",
//         name: "ErrorPages",
//         meta: {
//             title: "Error Pages",
//             icon: "404"
//         },
//         children: [
//             {
//                 path: "401",
//                 component: () => import("@/views/error-page/401"),
//                 name: "Page401",
//                 meta: { title: "401", noCache: true }
//             },
//             {
//                 path: "404",
//                 component: () => import("@/views/error-page/404"),
//                 name: "Page404",
//                 meta: { title: "404", noCache: true }
//             }
//         ]
//     },

//     // 404 page must be placed at the end !!!
//     { path: "*", redirect: "/404", hidden: true }
// ];

const createRouter = () =>
    new Router({
        mode: "history", // require service support
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes
    });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
}

router.beforeEach((to, from, next) => {
    console.log("router to ->", to.fullPath);
    next();
});

export default router;
