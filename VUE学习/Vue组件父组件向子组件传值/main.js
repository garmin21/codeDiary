import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


/* 
render方法的作用是 ： 用来创建 html
h : 表示 creataElement(),会默认传入一个这样的方法
render 方法调用结束后会返回一个 完整的 DOM树,
最后通过 vm 实例的 $mount('#app),挂载到页面上，并替换 #app 
*/
new Vue({
  render: h => h(App),
}).$mount('#app')
