

#### 什么是render渲染函数

vue通过 template 来创建你的 HTML。
但是，在特殊情况下，这种写死的模式无法满足需求，必须需要js的编程能力。此时，需要用render来创建HTML。

#### render函数

1. render 是与el ,data 同级别的函数
```
// 具体写法：
render : function(creataElement){
    // 这里是一定要 返回出去一个东西
    return creataElement('div',['hi', creataElement('p',['文本节点'])])
}
```

2. 详细
render函数中的createElement(tag,data,children)方法有三个参数。
    1. 第一个参数接受[HTML标签名，字符串类型]，必须传入
    2. 第二个参数是一个[包含模板相关属性的数据对象]，可选传入
    3. 第三个参数是一个[子节点对象数组]，该数组的元素都是h函数生成的对象，可选传入

3. 创建组件

```
var dom = Vue.component('xx组件名',{
    template : "<div>组件</div>",
})

render : function(creataElement){
    return creataElement( dom )
}
```


#### 可以解决什么样的问题

???


#### 总结注意点

1. render 渲染的html结构 会全部覆盖掉容器
2. 子节点必须是唯一的







