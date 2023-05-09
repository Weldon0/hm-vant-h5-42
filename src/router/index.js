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
import { getToken } from '@/utils/storage'

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

// 【路由导航守卫概念定义】
// 全局前置导航守卫beforeEach
// 任何路由跳转之前都会先走beforeEach，处理完逻辑之后再进行跳转

// 【代码思路】
// 1、如果有token，直接放行 next()
// 2、没有token
//     1、判断你是不是要去login或者register，next放行
//     2、如果你要去其他页面，不行，让你去login

const whiteList = ['/login', '/register'] // 白名单页面：所有人都可以去，不需要权限

router.beforeEach((to, from, next) => {
  // to: 去哪里 to.path可以获取到跳转的路径
  // from：从哪里来 from.path可以获取到跳转的路径
  // next：让不让去
  //   如果想要让路由正常跳转，必须手动调用一下next()函数

  const token = getToken()

  if (token) {
    next()
  } else {
  //   一定没有token
    if (whiteList.includes(to.path)) {
      next() // 不加参数，直接放行
    } else {
      next('/login') // 路径参数，重定向到这个路劲
    }
  }
})

export default router
