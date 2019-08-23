import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from '@/router'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// main.js的作用是入口文件，具体的职责是：

// 1.负责依赖资源的全局导入
// 2.创建一个vue根实例，去管理index.html中App容器
