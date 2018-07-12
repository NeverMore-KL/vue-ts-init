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
// 自定义主题颜色
import "./style/el-theme.scss";
import Element from "element-ui";
Vue.use(Element, { size: "small", zIndex: 3000 });
//@ts-ignore
// Vue.prototype.$message = Message;
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
