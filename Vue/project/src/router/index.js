import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/views/Home'
import Code from '@/components/views/Code'
import Music from '@/components/views/Music'
import Video from '@/components/views/Video'
import About from '@/components/views/About'
import Categories from '@/components/Categories'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: { Categories, Home },
    },
    {
      path: '/link',
      name: 'Code',
      components: { Categories, Code },
    },
    {
      path: '/think',
      name: 'Code',
      components: { Categories, Code }
    },
    {
      path: '/music',
      name: 'Music',
      components: { Music }
    },
    {
      path: '/vlog',
      name: 'Video',
      components: { Categories, Video }
    },
    {
      path: '/about',
      name: 'About',
      components: { Categories, About }
    },
    {//重定向路由
      path: '*',
      redirect: '/'
    }
  ]
})
