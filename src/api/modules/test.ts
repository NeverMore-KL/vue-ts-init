/*
 module:
   集成ZxHttp 测试
  author:
    lose_kl<https://github.com/NeverMore-KL>
  summary:
    2018-7-4: 测试ZxHttp类
 */
import ZxHttp from "../base";
import Page from "../types/common";
interface TestRequestType extends Page {}
class TestRequest extends ZxHttp {
  constructor() {
    super();
  }
  public getList(data: TestRequestType) {
    return this.post(`/course/course_list_guest`, data)
      .then((res: any) => Promise.resolve(res))
      .catch((e: any) => Promise.reject(e));
  }
}
export default new TestRequest();
