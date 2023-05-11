<template>
  <div class="collect-page">
    <van-nav-bar
      title="收藏"
      fixed
    />
    <van-list
      @load="onLoad"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多数据了~"
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
import { getCollectArticleList } from '@/api/artilce'

export default {
  name: 'collect-page',
  components: { ArticleItem },
  data () {
    return {
      loading: false,
      finished: false,
      current: 1,
      list: []
    }
  },
  methods: {
    async onLoad () {
      const { data } = await getCollectArticleList({
        page: this.current
      })
      this.list = [
        ...this.list,
        ...data.rows
      ]
      this.current++
      this.loading = false
      // 数据请求完毕了，需要把finished变成true，onload事件就不会触发
      if (this.current > data.pageTotal) {
        this.finished = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.collect-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
