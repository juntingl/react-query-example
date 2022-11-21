const paths = require("./paths");
const { devServerHost, devServerPort, autoOpenBrowser, proxy } = require("../biu.config");

module.exports = {
  allowedHosts: "all",
  // 指定文件的路径就是 output 输出路径，
  // 如果 output 设置了 publicPath: '/public/',
  // 这里 historyApiFallback 也要设置下 为 index: '/public/index.html'
  historyApiFallback: {
    disableDotRule: true,
    index: paths.publicUrlOrPath,
    // rewrites: [{ from: /.*/, to: path.posix.join("/", "index.html") }],
  },
  static: {
    directory: paths.appPublic,
  },
  compress: true,
  host: devServerHost || "0.0.0.0",
  port: devServerPort || 9001,
  hot: true,
  open: autoOpenBrowser || true,
  client: {
    progress: true,
    overlay: { warnings: false, errors: true },
  },
  proxy: proxy || {},
};
