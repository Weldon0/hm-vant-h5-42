// axios的配置
import axios from 'axios'
import { Toast } from 'vant'
import { delToken, getToken } from '@/utils/storage'
import router from '@/router'
// import { Toast } from 'vant'
// 创建一个axios实例，集成进去一个baseUrl,集成一个timeout超时时间
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000 // 超时时间，响应超过5s报错，提高用户体验【怎么做到的】
})

// 请求拦截器: 一般情况下做的就是token的统一注入
request.interceptors.request.use((config) => {
  // config是什么，请求的配置
  // console.log(config)
  // 请求之前可以进行通用的配置
  // config return回去
  // token注入的操作
  const token = getToken() // 从本地存储获取token
  // 判断token是否存在，如果存在的情况下，注入到请求头里面
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截器

request.interceptors.response.use((response) => {
//   接口拿到数据之后，如果想要进行一些通用的逻辑处理，可以放在响应拦截器
//   console.log(response) // 响应回来的数据
  //
  return response.data
}, err => {
// 什么时候触发
// 除了200以外的状态码的时候就会走错误处理
// 怎么处理？

  // 进行token失效的处理
  // 判断是不是token失效的错误信息
  if (err.response.status === 401) {
  //   token失效了
  //   删除token
    delToken()
    // 跳转登录页面
    router.push('/login')
  }
  Toast(err?.response?.data?.message || '系统出错，请联系管理员')
  return Promise.reject(err)
})
// 默认导出
// 导出之后其他地方才能使用我们配置好的request进行请求
export default request

// const obj = {}
//
// // 可选链运算符
// // 如果某一个属性不存在，原地返回undefined,而不会报错
// if (obj?.message?.name?.age) {
//   console.log(obj.message.name.age)
// }
