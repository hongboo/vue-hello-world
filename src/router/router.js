import Vue from "vue";
import Router from "vue-router";
// import Home from "@/views/Home.vue";
import home from "@/views/pages/home";
import govPage from "@/views/pages/gov-page";
import page_1 from "@/views/pages/page_1";
import page_2 from "@/views/pages/page_2";
import page_3 from "@/views/pages/page_3";
import page_4 from "@/views/pages/page_4";

Vue.use(Router);

/* eslint-disable */
let router = new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
    },
    {
      path : "/",
      name : "home",
      component : home,
      children:[
        { path: '/gov-page', component: govPage },
        { path: '/page_1', component: page_1 },
        { path: '/page_2', component: page_2 },
        { path: '/page_3', component: page_3 },
        { path: '/page_4', component: page_4 },
      ]
    },
  ]
});
router.beforeEach((to,from,next) => {
  if(to.path === '/')
    next({
      path : '/gov-page'
    })
  else
    next()
})
export default router;
