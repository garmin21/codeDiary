// /***
//  * .subscribe(msg,subscriber)---订阅消息
//  * .publish(msg,data)----发布消息---异步
//  * .publishSync(msg,data)---发布消息---同步
//  * .unsubscribe(token)---取消消息订阅
//  */

// /*
//     首先先需要分析回调函数存储的数据结构
//     1. 订阅可以订阅多次，所以使用数组来存储回调函数
//     2. 但是可以通过 token 来解除消息订阅，所以还以需要使用键值对的方式存储
//     所以最终的数据结构长这样
//     {aaa : {token1 : fun, token2 : fn ....}}
// */

(function(w) {
  function PubSub() {}
  let Bigwarehouse = {};
  let id = 0;

  PubSub.subscribe = function(eventName, callback) {
    // 首先判断一下 事件 是否绑定过
    let Minwarehouse = Bigwarehouse[eventName];
    // 判断小容器是否存在的
    if (!Minwarehouse) {
      // 没有这个容器
      Minwarehouse = {};
      // 消息名字和小容器以键值对的方式存储到大的容器中
      // {'add':{}}
      Bigwarehouse[eventName] = Minwarehouse;
    }
    // {'add':{'id_1':f1,'id_2':f2,'id_3':f3}--小容器,'del':{token4:f4}}
    // 创建token
    const token = "id_" + ++id;
    // token和回调以键值对的方式存储到小的容器中
    Minwarehouse[token] = callback;
    // {'add':{'id_1':回调}}
    return token; // 返回token标识
  };
  PubSub.publish = function(eventName, data) {
    // 拿到 小容器 判断小容器是否存在， 存在执行里面的回调函数
    let subscribers = Bigwarehouse[eventName];
    setTimeout(() => {
      if (subscribers) {
        Object.values(subscribers).forEach(fn => fn(data));
      }
    }, 1000);
  };
  PubSub.publishSync = function(eventName, data) {
    let subscribers = Bigwarehouse[eventName];
    if (subscribers) {
      Object.values(subscribers).forEach(fn => fn(data));
    }
  };
  PubSub.unsubscribe = function(token) {
    // 1. 传入的token ,干掉某个指定函数， 没传 token 干掉全部

    // 首先需要判断token 是否正规的 token
    if (token && token.indexOf("_id") !== -1) {
      let arrs = Object.values(Bigwarehouse);
      // [{token1: fn,....}]
      let fn = arrs.find(item => item[token]);
      fn && delete Minwarehouse[token];
      return;
    }
    //全部干掉
    Bigwarehouse = {};
  };

  w.PubSub = PubSub;
})(window);

// (function (window) {
//   // 创建消息订阅对象PubSub
//   const PubSub = {}
//   // 定义一个容器对象,用来存储消息名字及对应的一个对象(这个对象中是以键值对象的方式存储token和回调函数)
//   let subscribersContainer = {} // 大容器
//   // id标识
//   let id = 0
//   // {'add':{token1:f1,token2:f2,token3:f3}--小容器,'del':{token4:f4}}
//   // 订阅消息
//   PubSub.subscribe = function (msg, subscriber) {
//     // 根据订阅消息的名字获取对应的所有回调函数的容器
//     let subscribers = subscribersContainer[msg]
//     // 判断小容器是否存在的
//     if (!subscribers) {
//       // 没有这个容器
//       subscribers = {}
//       // 消息名字和小容器以键值对的方式存储到大的容器中
//       // {'add':{}}
//       subscribersContainer[msg] = subscribers
//     }
//     // {'add':{'id_1':f1,'id_2':f2,'id_3':f3}--小容器,'del':{token4:f4}}
//     // 创建token
//     const token = 'id_' + ++id
//     // token和回调以键值对的方式存储到小的容器中
//     subscribers[token] = subscriber
//     // {'add':{'id_1':回调}}
//     return token // 返回token标识
//   }
//   // PubSub.publisSync('add',12345)
//   // 同步发布消息
//   PubSub.publishSync = function (msg, data) {
//     // {'add':{'id_1':f1,'id_2':f2,'id_3':f3}--小容器,'del':{token4:f4}}
//     let subscribers = subscribersContainer[msg]
//     // 判断这个小容器对象是否存在
//     if (subscribers) {
//       // 对象转数组---[f1,f2,f3]
//       Object.values(subscribers).forEach(subscriber => {
//         subscriber(data)
//       })
//     }
//   }

//   // 异步发布消息
//   PubSub.publish = function (msg, data) {
//     // {'add':{'id_1':f1,'id_2':f2,'id_3':f3}--小容器,'del':{token4:f4}}
//     let subscribers = subscribersContainer[msg]
//     setTimeout(() => {
//       // 判断这个小容器对象是否存在
//       if (subscribers) {
//         // 对象转数组---[f1,f2,f3]
//         Object.values(subscribers).forEach(subscriber => {
//           subscriber(data)
//         })
//       }
//     }, 1000)

//   }

//   // 取消消息订阅----- token啥也没有  token--> 'id_1' token ='add'
//   PubSub.unsubscribe = function (token) {
//     // 判断token是否传进来
//     if (typeof token === 'undefined') {
//       // 什么也没传
//       subscribersContainer = {}
//     } else if (token.indexOf('id_') !== -1) {
//       // 根据token标识---[{'id_1':f1,'id_2':f2,'id_3':f3},{token4:f4}]
//       const subscribers = Object.values(subscribersContainer).find(subscribers => subscribers[token])
//       subscribers && delete subscribers[token]

//     } else {
//       // 根据消息名字取消消息订阅
//       delete subscribersContainer[token]
//     }
//     // {'add':{'id_1':f1,'id_2':f2,'id_3':f3}--小容器,'del':{token4:f4}}
//   }

//   // 暴露出去
//   window.PubSub = PubSub

// })(window)
