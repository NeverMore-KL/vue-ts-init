import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
Vue.use(Router);
const R = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});

// let token: string | null = null;
// R.beforeEach(async (to, from, next) => {
//   next();
// });
export default R;
