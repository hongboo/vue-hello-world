import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import first from "@/views/pages/fisrt";

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
        import(/* webpackChunkName: "about" */ "@/views/About.vue") //延迟加载
    },
    {
      path : "/views/pages/first",
      name : "first",
      component : first
    },
  ]
});
export default router;
