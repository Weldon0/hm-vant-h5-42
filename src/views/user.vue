<template>
  <div class="user-page">
    <div class="user">
      <img
        :src="avatar"
        alt="" />
      <h3>{{ username }}</h3>
    </div>
    <van-grid :column-num="3">
      <van-grid-item
        icon="clock-o"
        text="历史记录"
        to="/"
      ></van-grid-item>
      <van-grid-item
        icon="bookmark-o"
        text="我的收藏"
        to="/collect"
      ></van-grid-item>
      <van-grid-item
        icon="thumb-circle-o"
        text="我的点赞"
        to="/like"
      ></van-grid-item>
    </van-grid>

    <van-cell-group class="mt20">
      <van-cell
        title="推荐分享"
        is-link></van-cell>
      <van-cell
        title="意见反馈"
        is-link></van-cell>
      <van-cell
        title="关于我们"
        is-link>
      </van-cell>
      <van-cell
        title="退出登录"
        is-link></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'

export default {
  name: 'user-page',
  data () {
    return {
      username: '',
      avatar: ''
    }
  },
  async created () {
    const { data: { username, avatar } } = await getUserInfo()
    this.username = username
    this.avatar = avatar
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.user-page {
  padding: 0 10px;
  background: #f5f5f5;
  height: 100vh;
  .mt20 {
    margin-top: 20px;
  }
  .user {
    display: flex;
    padding: 20px 0;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
    }
    h3 {
      margin: 0;
      padding-left: 20px;
      font-size: 18px;
    }
  }
}
</style>
