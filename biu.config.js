/**
 * 用户自定义配置
 */
module.exports = {
  /**
   * 静态资源的路径
   * * 用于生产环境
   */
  publicPath: "",
  // 资源输出目录，默认为dist
  outputDir: "dist",
  /**
   * 配置代理
   **/
  proxy: {
    // "/api": {
    //   target: "",
    //   changeOrigin: true,
    //   rewrite: (p) => p.replace(/^\/api/, ""),
    // },
  },
  // 是否默认打开浏览器
  autoOpenBrowser: true,
  // 主机地址
  devServerHost: "",
  // devServer 默认端口号
  devServerPort: 8080,
  // mockServerPort: 8000,
};
