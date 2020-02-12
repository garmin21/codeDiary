<template>
<!-- 必须要有一个根节点包裹 -->
  <div class="hello">
    <!-- app.vue是根组件，最终要把所有定义的组件在这里拼接 -->
    <!-- 这是全局组件 -->
      <app-sever></app-sever>
    <!-- 局部组件 -->
    <app-severrande></app-severrande>
  </div>
</template>

<script>
// 如果需要使用到局部组件，需要在这里引用并定义
import severrande from "./severrande.vue"
export default {
    components : {
      "app-severrande" : severrande,
    }
} 

</script>

<style>

</style>
