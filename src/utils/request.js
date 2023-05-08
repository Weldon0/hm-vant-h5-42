// axios的配置
import axios from 'axios'

// 创建一个axios实例，集成进去一个baseUrl,集成一个timeout超时时间
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000 // 超时时间，响应超过5s报错，提高用户体验【怎么做到的】
})

// 请求拦截器: 一般情况下做的就是token的统一注入
request.interceptors.request.use((config) => {
  // 请求之前可以进行通用的配置
  // config return回去
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截器

request.interceptors.response.use((response) => {
//   接口拿到数据之后，如果想要进行一些通用的逻辑处理，可以放在响应拦截器
  return response
}, err => {
//   什么时候触发
//   除了200以外的状态码的时候就会走错误处理
  return Promise.reject(err)
})
// 默认导出

// 导出之后其他地方才能使用我们配置好的request进行请求
export default request
