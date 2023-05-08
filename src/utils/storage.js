// 封装一些快速操作本地存储的方法，方便调用
const KEY = 'my-token-vant-mobile' // 设置本地存储的键名

// 1、获取token的方法
export function getToken () {
  return localStorage.getItem(KEY)
}

// 2、设置token的方法
// 接收的参数就是需要存储到本地的token
export function setToken (token) {
  localStorage.setItem(KEY, token)
}

// 3、清除token的方法
export function delToken () {
  localStorage.removeItem(KEY)
}
