/*
 module:
    封装axios
  author:
    lose_kl<https://github.com/NeverMore-KL>
  summary:
    2018-7-4: 封装axios
 */
import axios from "axios";
import { stringify } from "qs";
const BASE_URL = process.env.NODE_ENV === "production" ? `/api` : `/api`;
//`http://10.163.126.142:8080/user`;
interface Data {
  data: object;
}
class ZxHttp {
  $http: any;
  constructor() {
    this.$http = axios.create({
      baseURL: BASE_URL
    });
    // 因为transformResponse不能处理get的数据,所以统一在拦截器里处理
    this.$http.interceptors.request.use(
      (config: any) => {
        config.data.data.siteHierarchy = "A";
        if (config.method === "get") {
          config.url = config.url + "?" + stringify(config.data);
        } else {
          config.data = stringify(config.data.data);
        }
        return config;
      },
      (err: any) => Promise.reject(err)
    );
    this.$http.interceptors.response.use(
      (res: any) => res.data,
      (error: any) => Promise.reject(error)
    );
  }
  public get(
    url: string,
    data: Data = { data: {} },
    config: object = {}
  ): Promise<any> {
    return this.$http
      .get(url, data, config)
      .then((res: any) => Promise.resolve(res))
      .catch((e: any) => Promise.reject(e));
  }
  public post(
    url: string,
    data: Data = { data: {} },
    config: object = {}
  ): Promise<any> {
    return this.$http
      .post(url, data, config)
      .then((res: any) => Promise.resolve(res))
      .catch((e: any) => Promise.reject(e));
  }
}
export default ZxHttp;
