<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
  // 可以获取到数据和方法，但是可以获取到dom吗
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    // toggleShow () {
    //   this.show = true
    //   // 数据发生变化之后，dom更新的操作不是同步进行，异步任务，所以数据发生变化之后，并不能获取更新之后的最新dom
    //   // 所以要使用nextTick重新注册一个异步任务
    //   // 让输入框获取焦点，应该怎么做
    //   // code ... ==> this.$nextTick
    //   console.log(1)
    //   this.$nextTick(() => {
    //     // 获取焦点
    //     this.$refs.inputElement.focus()
    //     console.log(3)
    //   })
    //   console.log(2)
    // }
  },
  async mounted () {
    // 可以获取到真实的dom
    // 测试一下登录接口能不能用
    // const res = await request({
    //   method: 'POST',
    //   url: '/user/login',
    //   data: {
    //     password: '123456',
    //     username: 'wuxiaohui'
    //   }
    // })
    // // 经过axios包装之后的数据
    // console.log(res)
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
