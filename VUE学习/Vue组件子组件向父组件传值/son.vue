<template>
    <div class="navbar">
        <ul class="clearfix">
            <li v-for="(item, index) in arr" :key="index"><a href="#">{{ item.text }}</a></li>
        </ul>
        <div>
            <button  @click="button">向父组件传值</button>
            <p>{{ name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props : ['name'],
    data : function(){
        return {
            arr : [
                {text : '首页'},
                {text : '导航'},
                {text : '热点'},
                {text : '链接'},
            ],
        }
    },
    methods : {
        button : function(){
            // 使用$emit来触发一个自定义事件
           this.$emit('add','lijiaming');
        }
    }
}
</script>

<style scoped>
*{
    list-style: none;
    text-decoration: none;
}
.clearfix::before,.clearfix::after{
    content: "";
    display: table;
}
.clearfix::after{
    clear: both;
}
ul{
    width: 1200px;
    margin: 0 auto;
    background-color: #333;
}
li{
    float: left;
    padding: .66em 1.2em;
    margin: 0 .5em;
}
li:hover{
    background-color: rgba(0, 0, 0, .8);
}
a{
    color: white;
}
</style>
