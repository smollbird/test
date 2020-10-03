// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/iconfont/iconfont.js'; //引入字体图标的js文件
import icon from '@/components/Icon'; // ;使用icon组件
Vue.component('icon', icon) //注册全局组件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
