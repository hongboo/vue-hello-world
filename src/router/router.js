import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import first from "@/views/pages/fisrt";
import page_1 from "@/views/pages/page_1";
import page_2 from "@/views/pages/page_2";
import page_3 from "@/views/pages/page_3";
import page_4 from "@/views/pages/page_4";

Vue.use(Router);

/* eslint-disable */
let router = new Router({
  routes: [
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
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
    },
    {
      path : "/pages/first",
      name : "first",
      component : first,
      children:[
        { path: '/first/page_1', component: page_1 },
        { path: '/first/page_2', component: page_2 },
        { path: '/first/page_3', component: page_3 },
        { path: '/first/page_4', component: page_4 },
      ]
    },
  ]
});
export default router;
