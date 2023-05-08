import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'
import Article from '@/views/article.vue'
import Layout from '@/views/layout.vue'
import Like from '@/views/like.vue'
import Collect from '@/views/collect.vue'
import User from '@/views/user.vue'
import Detail from '@/views/detail.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/article/:id', // 获取这个参数 $route.params.id  $route.query.xxx 用到了查询字符串 www.baidu.com?name=23
    component: Detail
  },
  {
    path: '/',
    component: Layout,
    // 重定向到article，当访问了/路径的时候，会默认跳转到/article，把article页面做默认展示功能
    redirect: '/article',
    children: [
      {
        path: '/article',
        component: Article
      },
      {
        path: '/like',
        component: Like
      },
      {
        path: '/collect',
        component: Collect
      },
      {
        path: '/user',
        component: User
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
