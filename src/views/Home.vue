<template>
  <div class="home">
   <el-button type="primary">123123</el-button>
  </div>
</template>

<script lang="ts">
/*
 module:
    main.ts
  author:
    lose_kl<https://github.com/NeverMore-KL>
  summary:
    2018-7-11:init some demo
 */
//https://github.com/kaorun343/vue-property-decorator
import { Component, Vue } from "vue-property-decorator";
//https://github.com/ktsn/vuex-class
import { State, Mutation } from "vuex-class";
import TestRequest from "@api/test";
import types from "@/store/types";
@Component
export default class Home extends Vue {
  /**
   * 书写顺序 :1,props 2,data,3:计算属性,4,vuex,5:方法 6:生命周期 5:方法
   * 默认是public
   */
  // data
  listArr: object[] = [];
  pageNumber: number = 1;
  totalPage: number = 0;
  isShowList: boolean = true;
  // 计算属性
  get computedMsg(): string {
    return "computed " + this.pageNumber;
  }
  // vuex
  @State("isLogin") isLogin!: types["isLogin"];
  @Mutation("changeIsLogin") changeIsLogin: any;
  private _changeIsLogin(p: types["isLogin"]) {
    this.changeIsLogin(p);
  }
  getData(_pageNum?: number): Promise<any> {
    /**
     * 2种写法都可以 return new Promise  或者return TestReq
     */
    return new Promise((resolve, reject) => {
      let data = {
        pageNum: _pageNum || this.pageNumber,
        pageSize: 10
      };
      TestRequest.getList({ data })
        .then((res: any) => {
          // return Promise.resolve();
          resolve();
        })
        .catch((error: any) => {
          // return Promise.reject(error);
          reject(error);
        });
    });
  }
  // 生命周期
  created() {
    this.$message({
      message: "恭喜你，这是一条成功消息",
      type: "success"
    });
  }
}
</script>
<style lang="scss" scoped>
</style>
