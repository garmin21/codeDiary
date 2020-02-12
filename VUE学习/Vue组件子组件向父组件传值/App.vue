<template>
  <div class="warpper">
    <app-son v-on:add="button"></app-son>
  </div>
</template>

<script>
import son from './son'
export default {
  name: 'warpper',
  components: {
    'app-son' : son,
  },
  methods : {
        button : function(data){
          console.log(data);
        }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

</style>
