import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App) //vue2.0的新写法 h函数的实参是createElement
}).$mount("#app");
