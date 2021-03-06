// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/router.config.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 注册全局插件
import Login from './components/user/login';
import store from './store';  // 导入 store 对象

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
// 注册全局插件
Vue.use(Login)

Vue.prototype.$ajax = axios;
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store // 配置 sotre 选项，配置 store 对象，会自动的将 store 注入到子组件中，在子组件中用 this.$sotre 访问 store 对象
})
