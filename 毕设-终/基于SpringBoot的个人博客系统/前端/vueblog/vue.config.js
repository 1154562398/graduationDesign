module.exports = {


  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部,
  // 例如 https://www.my-app.com/
  // 如果你的应用部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如将你的应用部署在
  // https://www.foobar.com/my-app/
  // 那么将这个值改为 '/my-app/'
  publicPath: "/", //instead "baseUrl"
  outputDir: "dist", // where to put static assets (js/css/img/font/...) 
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  devServer: {
    port: 8081,
    proxy: {'/': {
      target: 'http://localhost:8769',
      changeOrigin: true,
      pathRewrite: {
        '^/': ''
      }
    }
  }
  },

  }