import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 需要把他自带的路由配置选项进行删除
const routes = []

const router = new VueRouter({
  routes
})

export default router
