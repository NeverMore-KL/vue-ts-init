declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
//一些第三方的库,挂载到window上的 在这里申明一下
declare var wx: any;
interface Promise<T> {
  finally: any;
}
