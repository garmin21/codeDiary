#### 什么是vue事件机制

vue 事件机制，就是我们需要浏览器帮助我们执行哪项功能。。。


#### Vue事件具体操作

1. 使用 `v-on` 或 `@` 在HTML 标签结构上 使用，[指定所要绑定事件] = 事件处理函数

```
<button @click="Tips"></button>

 methods:{
            Tips : function(event){
                alert("hello")
            },
        }
```

2. 详细之vue 事件对象 $event,在第二个参数传入

```
<button @click="Tips(10,$event)"></button>

 methods:{
            Tips : function(number,event){
                alert(number)
            },
        }
```


