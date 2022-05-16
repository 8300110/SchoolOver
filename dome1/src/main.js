import Vue from 'vue'
import App from './App.vue'

// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

import filter from "./filters/index.js"
filter(Vue)
// 导入下载好的路由模块
import Router from "vue-router"

// 导入路由配置的脚本文件
import RouterConfig from "./router.config.js"

// 使用路由
Vue.use(Router)

// 关联路由和路由配置文件
const router = new Router(RouterConfig)

//1. 导入下下载好的axios模块
// import axios from "axios"
// 2.配置发送请求的信息
// axios.interceptors.request.use(function(config){
//   return config
// },function (error){
//   return Promise.reject(error)
// })
// 3.配置请求回来的信息
// axios.interceptors.response.use(function(response){
//   return response
// },function(error){
//   return Promise.reject(error)
// })

// Vue.prototype.$http = axios

import $ from 'jquery'

import ElementUI from 'element-ui';
// import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/theme.css'
import './assets/css/character.css'
// import { Button, Select } from 'element-ui';
Vue.use(ElementUI);

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta && route.meta.requiresAuth)) {
    if (!this.$storage.getStorage("userInfo")) {  // 没有登录信息跳转到登录页
      next({
        path: "/login",
        query: { redirect: to.fullPath }  // 'to.fullPath'跳转到登录之前页面的路径
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
new Vue({
  el: '#app',
  // 挂载路由
  router:router,
  // render: h => h(App),
  components: { App },
  template: '<App/>'

})
