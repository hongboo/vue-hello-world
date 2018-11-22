import Vue from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from "@/store/store";

/* eslint-disable */ 
require('./mock');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App) //vue2.0的新写法 h函数的实参是createElement
}).$mount("#app");


//render: h => h(App) 的完整写法：
//将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例
// function render(createElement) {
//   return createElement(App)
// }