// 写的是文章相关的接口定义
import request from '@/utils/request'

/**
 * 获取文章列表数据
 * @param {{current: number, sorter: 'weight_desc' | null}} obj
 * @returns {*}
 */
export function getArticleList (obj) {
  return request({
    method: 'GET',
    url: 'interview/query',
    params: {
      current: obj.current, // 当前页码数
      pageSize: 10, // 每页多少条数
      sorter: obj.sorter // 排序方式
    } // 用于get类型的请求参数 ==> 查询字符串参数
    // 可以在headers配置项里面携带请求头数据
    // Bearer和具体的token之间必须要有一个空格
  })
}

// 获取收藏文章列表数据
export function getCollectArticleList (obj) {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page,
      pageSize: 10,
      optType: 2 // 表示收藏
    }
  })
}

// 获取喜欢页面的数据
export function getLikeArticleList (obj) {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page,
      pageSize: 10,
      optType: 1 // 表示喜欢
    }
  })
}

// 获取文章详情数据
export function getArticleDetail (id) {
  return request.get('interview/show', {
    params: {
      id
    }
  })
}

// 点赞的接口
export function updateLike (id) {
  return request.post('interview/opt', { id, optType: 1 })
}

// 收藏接口
export function updateCollect (id) {
  return request({
    method: 'POST',
    url: 'interview/opt',
    data: {
      id,
      optType: 2 // 如果为2表示收藏
    }
  })
}
