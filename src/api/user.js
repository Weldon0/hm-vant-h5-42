// 存储的是用户相关的接口请求定义
// 注册的接口请求
import request from '@/utils/request'
// 我们自己分装的request使用方法和axios一模一样

/**
 * 注册接口
 * @param {{username: string, password: string}} data
 * @returns {*}
 */
export function handlerRegister (data) {
  return request({
    url: 'user/register',
    method: 'POST',
    data
  })
}

export function handlerLogin (data) {
  return request({
    method: 'POST',
    url: 'user/login',
    data
  })
}

// 获取用户信息
export function getUserInfo () {
  return request.get('user/currentUser')
}
