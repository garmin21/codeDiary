<template>
<!-- 这是我们的父组件 -->
  <div id="warpper">
    <app-son :good="hello" nice="今天的天气真好"></app-son>
    <app-cat></app-cat>
  </div>
</template>

<script>
import son from './son'
import cat from './components/cat'
export default {
  name: 'warpper',
  components : {
        'app-son' : son,
        'app-cat' : cat,
    },
  data : function(){
      return {
        hello : '哈喽',
      }
  }
    
  
}
</script>

<style>

</style>
