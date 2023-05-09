<template>
  <div class="login-page">
    <van-nav-bar title="面经登录" />
    <van-form @submit="onSubmit">
      <van-field
        :rules="[{required: true, message: '用户名必须填写'}, {pattern: /^\w{5,}$/, message: '用户名最少5位'}]"
        placeholder="用户名"
        name="username"
        v-model="username"
        label="用户名"/>
      <van-field
        :rules="[{required: true, message: '密码必须填写'}, { pattern: /^\w{6,}$/, message: '密码至少包含6个字符' }]"
        placeholder="密码"
        name="password"
        label="密码"
        v-model="password"
        type="password"/>
      <div style="margin: 20px;">
        <van-button
          native-type="submit"
          block
          type="info">登录</van-button>
      </div>
    </van-form>
    <div class="link-container">
      <router-link
        class="link"
        to="/register"
      >去注册</router-link>
    </div>
  </div>
</template>

<script>

// 1、通过submit事件收集表单数据，表单的输入框需要添加name属性，指定当前数据的key值
// 2、给输入框添加placeholder
// 3、登录按钮需要添加native-type属性为submit

// 通过rules校验表单数据

// 1、封装一个登录的接口【接口文档】 api/user.js
// 2、用户点击登录的时候调用登录接口
// 3、把返回的token存储到本地存储【方法已经封装好了，直接调用】【自己到浏览器里面去看一下】
// 4、提示登录成功
// 5、跳转首页
import { handlerLogin } from '@/api/user'
import { setToken } from '@/utils/storage'

export default {
  name: 'login-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      // 可以收集到表单数据，但是对应的表单需要提供一个name值
      const { data } = await handlerLogin(values)
      setToken(data.token)
      this.$toast('登录成功')
      // 跳转首页
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.link-container {
  display: flex;
  justify-content: end;
  font-size: 12px;
  padding-right: 20px;
}

.link {
  color: #069;
}
//.link {
//  color: #069;
//  font-size: 12px;
//  padding-right: 20px;
//  float: right;
//}
</style>
