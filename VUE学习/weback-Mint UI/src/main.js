import Vue from 'vue'

// 导入路由模块
import VueRouter from 'vue-router'
// 安装路由模块
Vue.use(VueRouter)

// 全部导入mint ui
// import MintUI from 'mint-ui'// 将min ui上的所有组件都注册为全局组件
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 按需导入mint ui
import { Button } from 'mint-ui'
Vue.component(Button.name, Button)


// 导入 mui
import '../lib/mui/css/mui.css'


//导入bootatrap样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/index.css'

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