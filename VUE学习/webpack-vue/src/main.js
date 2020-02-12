// import $ from 'jquery'
// bootatrap
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf'

//样式表文件
// import './css/index.css'
// import './css/index.less'
// import './css/index.scss'



// vue
// import Vue from 'vue'

import Vue from '../node_modules/vue/dist/vue'


// 导入全局组件

import login from './login.vue'





// Vue.component('app-login',login)





var vm = new Vue({
    el : '#app',
    data : {
        msg : 'ok'
    },

    // render : function name(createElements) {
    //     return createElements(login)
    // }

    // render(h) {
    //     return h(login)
    // },
    render : h => h(login)
})
