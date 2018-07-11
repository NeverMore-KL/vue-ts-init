/*
 module:
   action
  author:
    lose_kl<https://github.com/NeverMore-KL>
  summary:
    2018-7-11:init 
 */

import types from "./types";
export default {
  changeIsLogin(state: types, payload: types["isLogin"]): void {
    state.isLogin = payload;
  }
};
