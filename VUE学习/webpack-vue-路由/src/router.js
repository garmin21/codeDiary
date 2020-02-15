import VueRouter from "vue-router";

import login from "./login.vue";
import register from "./register.vue";

// 子路由
import son1 from "./subcom/son1.vue";
import son2 from "./subcom/son2.vue";

// 创建路由模块对象
var router = new VueRouter({
  mode: 'history',
  routes: [
    { path: "/", redirect: "/login" },

    {
      path: "/login",
      component: login,
      children: [
        { path: "son1", component: son1 },
        { path: "son2", component: son2 }
      ]
    },

    { path: "/register", component: register }
  ]
});

// 暴露router对象

export default router;
