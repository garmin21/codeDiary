import Vue from 'vue'
import App from './App.vue'
// 引入文件
import sever from './sever.vue'
// 这是定义我们全局组件的地方
Vue.config.productionTip = false
// 注册全局组件
Vue.component("app-sever",sever)

new Vue({
  render: h => h(App),
}).$mount('#app')
