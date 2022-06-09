import Vue from "vue";
import VueRouter from "vue-router";
//导入自定义组件
import XstateTestOne from "../views/XstateTestOne.vue";
import Home from "../views/home.vue";
import NoPage from "../views/404.vue";
//安装路由，显示引用
Vue.use(VueRouter);

//配置导出路由
export default new VueRouter({
  routes: [
    {
      //路由路径
      path: "/",
      //自定义路由名称
      name: "home",
      //路由跳转的组件
      component: Home
    },
    {
      //路由路径
      path: "/test1",
      //自定义路由名称
      name: "XstateTestOne",
      //路由跳转的组件
      component: XstateTestOne
    },
    {
      path: "*",
      component: NoPage
    }
  ]
});
