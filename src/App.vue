<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  created () {
  // 可以获取到数据和方法，但是可以获取到dom吗
  },
  async mounted () {
  // 可以获取到真实的dom
  // 测试一下登录接口能不能用
    const res = await request({
      method: 'POST',
      url: '/user/login',
      data: {
        password: '123456',
        username: 'wuxiaohui'
      }
    })
    // 经过axios包装之后的数据
    console.log(res)
  }
}
</script>

<style lang="less">
//#app {
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
//  color: #2c3e50;
//}
//
//nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
</style>
