<template>
  <div class="like-page">
    <van-nav-bar
      title="喜欢"
      fixed/>
    <van-list
      @load="onLoad"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
    >
      <article-item
        v-for="item in list"
        :key="item.id"
        :item="item"
      />
    </van-list>
  </div>
</template>

<script>
import ArticleItem from '@/components/article-item.vue'
import { getLikeArticleList } from '@/api/artilce'

export default {
  name: 'like-page',
  components: { ArticleItem },
  data () {
    return {
      loading: false,
      finished: false,
      list: [],
      current: 1 // 表示获取第几页的数据
    }
  },
  methods: {
    async onLoad () {
      const { data } = await getLikeArticleList({
        page: this.current
      })
      this.list = [
        ...this.list,
        ...data.rows
      ]
      this.loading = false
      //   页码自增
      this.current++
      //   判断数据是否请求完毕
      if (this.current > data.pageTotal) {
        this.finished = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.like-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
