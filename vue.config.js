module.exports = {
  lintOnSave: false,
  devServer: { // 实时保存、编译的配置段
    open: true, // 自动开启浏览器
    port: 12306 // 服务运行端口
  }
}
// 当前项目运行的时候会创建一个HTTP服务，上述12306就是服务器的端口号码
