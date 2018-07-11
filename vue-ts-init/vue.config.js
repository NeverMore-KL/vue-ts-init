/*
 module:
    自定义webpack
  author:
    lose_kl<https://github.com/NeverMore-KL>
  summary:
    2018-7-11:自定义webpack
 */
const path = require("path");
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
function resolve(dir) {
  return path.join(__dirname, dir);
}
function getPwd() {
  var pwd = isWin() ? path.resolve("./") + "\\" : path.resolve("./") + "/";
  return pwd;
}

function isWin() {
  return process.platform !== "darwin";
}

function getDirName() {
  const dirName = getPwd();
  let reg, tmpArr;
  isWin() ? (reg = /([^\\]+)/g) : (reg = /([^/]+)/g);
  tmpArr = dirName.match(reg);
  return tmpArr[tmpArr.length - 1];
}
module.exports = {
  productionSourceMap: false,
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@api", resolve("src/api/modules"))
      .set("@c", resolve("src/components"))
      .set("@style", resolve("src/style"))
      .set("@utils", resolve("src/utils"))
      .end();
  },
  outputDir: `dist_${getDirName()}`,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.plugins = [
        ...config.plugins,
        new ParallelUglifyPlugin({
          cacheDir: ".cache/",
          uglifyJS: {
            output: {
              comments: false
            },
            compress: {
              warnings: false,
              drop_console: true,
              // 内嵌定义了但是只用到一次的变量
              collapse_vars: true,
              // 提取出出现多次但是没有定义成变量去引用的静态值
              reduce_vars: true
            }
          }
        })
      ];
    }
  },

  // devServer:https://github.com/toBeTheLight/vue-cli-3.x-doc-cn/blob/dev/zh-cn/cli-service.md#configuring-proxy
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://10.163.126.142:8080/user",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
