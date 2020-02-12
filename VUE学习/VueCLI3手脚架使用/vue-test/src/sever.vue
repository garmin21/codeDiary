<template>
    <!-- 全局组件 -->
    <div id="app">
        <p>我的名字叫:{{ name }}</p>

        <button @click="myname">点击</button>
    </div>

</template>


<script>
export default {
    data : function(){
        return {
            name : '李家明',
        }
    },
    methods : {
        myname : function(){
            this.name = 'lijiaming';
        }
    }
}

</script>



<style>



</style>