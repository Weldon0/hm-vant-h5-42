<template>
  <div class="login-page">
    <van-nav-bar title="面经注册" />
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
          type="primary">注册</van-button>
      </div>
    </van-form>
    <div class="link-container">
      <router-link
        class="link"
        to="/login"
      >已有账号，去登录？</router-link>
    </div>
  </div>
</template>

<script>

// 1、通过submit事件收集表单数据，表单的输入框需要添加name属性，指定当前数据的key值
// 2、给输入框添加placeholder
// 3、登录按钮需要添加native-type属性为submit

// 通过rules校验表单数据

import { handlerRegister } from '@/api/user'

export default {
  name: 'login-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    // this.$toast('你好') // 测试代码，测试完毕之后可以删除
  },
  methods: {
    async onSubmit (values) {
      // 什么时候会走onSubmit,点击提交同时表单校验通过的时候
      // 可以收集到表单数据，但是对应的表单需要提供一个name值
      await handlerRegister(values)
      this.$toast('注册成功')
      // 跳转登录页面
      this.$router.push('/login')
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
