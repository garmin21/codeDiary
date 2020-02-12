<template>
    <div>
        <router-link to="/login" tag="span">登录</router-link>

        <router-link to="/register" tag="span">注册</router-link>

        <router-view></router-view>
        

        <!-- 
            min ui 按钮组件
         -->
         <h1>min ui</h1>
        <mt-button type="default" icon="back">default</mt-button>
        <mt-button type="primary" size="large">default</mt-button>
        <mt-button plain @click="show">plain</mt-button>

        <!-- mui -->
        <h1>mui</h1>

        <button type="button" class="mui-btn mui-btn-royal">紫色</button>

    </div>
</template>


<script>
// 导入min ui 按钮组件
import { Toast } from 'mint-ui';
export default {
    data () {
        return {
            
        }
    },
    methods : {
        show() {
            Toast({
                message: '提示',
                position: 'top',
                duration: 1000,
                iconClass: 'glyphicon glyphicon-music',
                className : 'myred'
            })
        }
    }
}
</script>


<style scoped>

</style>
