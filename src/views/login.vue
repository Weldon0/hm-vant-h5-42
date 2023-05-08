<template>
  <div class="login-page">
    <van-nav-bar title="面经登录" />
    <van-form @submit="onSubmit">
      <van-field :rules="[{required: true, message: '用户名必须填写'}, {pattern: /^\w{5,}$/, message: '用户名最少5位'}]"
                 placeholder="用户名"
                 name="username"
                 v-model="username"
                 label="用户名"/>
      <van-field :rules="[{required: true, message: '密码必须填写'}, { pattern: /^\w{6,}$/, message: '密码至少包含6个字符' }]"
                 placeholder="密码"
                 name="password"
                 label="密码"
                 v-model="password"
                 type="password"/>
      <div style="margin: 20px;">
        <van-button native-type="submit"
                    block
                    type="info">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>

// 1、通过submit事件收集表单数据，表单的输入框需要添加name属性，指定当前数据的key值
// 2、给输入框添加placeholder
// 3、登录按钮需要添加native-type属性为submit

// 通过rules校验表单数据
export default {
  name: 'login-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      // 可以收集到表单数据，但是对应的表单需要提供一个name值
      console.log(values)
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
