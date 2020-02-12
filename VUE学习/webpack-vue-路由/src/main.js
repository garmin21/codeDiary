import Vue from 'vue'

// 导入路由模块
import VueRouter from 'vue-router'

// 安装路由模块
Vue.use(VueRouter)


// 导入 router 模块
import router from './router.js'

import app from './App.vue'




var vm = new Vue({
    el : '#app',
    data : {

    },
    render : h => h(app),
    // 将 router 模块挂载到 vm 实例上
    router 
})


// console.log('ok')