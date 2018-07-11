/*
 module:
    main.ts
  author:
    lose_kl<https://github.com/NeverMore-KL>
  summary:
    2018-7-11:init
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./routers/router";
import store from "./store/index";
// import { getAppVersion } from "@/utils/index";
// import { stringify } from "qs";
import "./utils/polyfill";
import { Button, Message } from "element-ui";
Vue.use(Button);
//@ts-ignore
Vue.use(Message);
Vue.prototype.$message = Message;
Vue.config.productionTip = false;
if (process.env.NODE_ENV !== "production") {
  // 手机端vconsole调试
  // var c = require("vconsole");
  // new c();
}
const V = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

//涉及到ios分享才需要如此
/**
 function jump_router_ios(_location: any, isReplace: boolean): void {
  // 与window.location做去区分
  const type = typeof _location;
  let url: string = "";
  if (type === "string") {
    window.location.href = _location;
  } else {
    // 详细规则:https://router.vuejs.org/zh/guide/essentials/navigation.html
    if ("path" in _location) {
      if ("params" in _location) {
        throw new Error("`path` 不能使用 `params`");
      } else if ("query" in _location) {
        url = _location.path + "?" + stringify(_location.query);
      } else {
        url = _location.path;
      }
      isReplace ? window.location.replace(url) : (window.location.href = url);
    }
  }
}
 */

/**
 * example
 * 字符串模式(与官网一致) : router._push('home')
 * query模式(与官网一致) : router.push({ path: 'register', query: { plan: 'private' }})
 * params模式(无法使用命名路由) : router.push({ path: `/user/${userId}` })
 */
// @ts-ignore
/*
V.$router._push = (location: any, onComplete: Function, onAbort: Function) => {
  //暂不支持命名模式
  if ("name" in location) {
    throw new Error("暂不支持通过命名路由跳转,请使用path或者字符串模式");
  }
  if (getAppVersion() === "ios") {
    jump_router_ios(location, false);
  } else if (getAppVersion() === "android") {
    V.$router.push(location, onComplete, onAbort);
  }
};
// _replace方法与_push使用一致
// @ts-ignore
V.$router._replace = (
  location: any,
  onComplete: Function,
  onAbort: Function
) => {
  //暂不支持命名模式
  if ("name" in location) {
    throw new Error("暂不支持通过命名路由跳转,请使用path或者字符串模式");
  }
  if (getAppVersion() === "ios") {
    jump_router_ios(location, true);
  } else if (getAppVersion() === "android") {
    V.$router.replace(location, onComplete, onAbort);
  }
};
*/
