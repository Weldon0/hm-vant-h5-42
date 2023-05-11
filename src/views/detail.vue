<template>
  <div class="detail-page">
    <van-nav-bar
      title="面经详情"
      fixed
      left-text="返回"
      @click-left="$router.back()"
    />
    <header class="header">
      <h1>{{ article.stem }}</h1>
      <p>
        {{ article.createdAt }} | {{ article.views }} 浏览量 |
        {{ article.likeCount }} 点赞数
      </p>
      <p>
        <img
          :src="article.avatar"
          alt=""
        />
        <span>{{ article.creator }}</span>
      </p>
    </header>
    <main
      class="body"
      v-html="article.content"></main>
    <div class="opt">
      <van-icon
        :class="{active: article.likeFlag}"
        name="like-o"
        @click="toggleLike"
      ></van-icon>
      <van-icon
        :class="{active: article.collectFlag}"
        name="star-o"
        @click="toggleCollect"
      ></van-icon>
    </div>
  </div>
</template>

<script>
import { getArticleDetail, updateCollect, updateLike } from '@/api/artilce'

export default {
  name: 'detail-page',
  data () {
    return {
      article: {}
    }
  },
  async created () {
    this.getArticle()
  },
  methods: {
    // 获取文章详情数据方法
    async getArticle () {
      const res = await getArticleDetail(this.$route.params.id)
      this.article = res.data
    },
    // 切换收藏
    async toggleCollect () {
      await updateCollect(this.$route.params.id)
      //   收藏的状态取反即可
      this.article.collectFlag = !this.article.collectFlag
      if (this.article.collectFlag) {
        this.$toast('收藏成功')
      } else {
        this.$toast('取消收藏')
      }
    },
    // 切换点赞
    async toggleLike () {
      await updateLike(this.$route.params.id)
      //   请求成功之后切换当前点赞的状态
      this.article.likeFlag = !this.article.likeFlag
      if (this.article.likeFlag) {
        // 点赞数自增一下
        this.article.likeCount++
        this.$toast('点赞成功')
      } else {
        this.article.likeCount--
        this.$toast('取消点赞')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #FEC635;
        color: #fff;
      }
    }
  }
}
</style>
