<template>
<!-- 子组件 -->
    <div id="app">
        <h1>我是组件son <span>1</span></h1>
        <p>{{ good }}</p>
        <p>{{ nice }}</p>
    </div>
    
</template>

<script>
export default {
    // 定义属性
    props : ['good','nice'],
    
    
}
</script>

<style>

</style>
