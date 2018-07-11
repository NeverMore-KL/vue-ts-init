/*
 module:
   action
  author:
    lose_kl<https://github.com/NeverMore-KL>
  summary:
    2018-7-11:init 
 */
import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import types from "./types";
Vue.use(Vuex);

let state: types = {
  isLogin: false,
  testArray: [] //我可有可无
};
export default new Vuex.Store({
  state,
  mutations,
  actions
});
