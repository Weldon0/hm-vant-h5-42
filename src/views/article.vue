<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a
        href="javascript:;"
        @click="changeSorterType('weight_desc')"
        :class="{active: sorter === 'weight_desc'}"
      >推荐</a
      >
      <a
        href="javascript:;"
        @click="changeSorterType(null)"
        :class="{active: sorter === null}"
      >最新</a>
      <div class="logo">
        <img
          src="http://weldon.net.cn/mj-m/img/logo.dbd40807.png"
          alt=""
        >
      </div>
    </nav>
    <van-list
      @load="onLoad"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多数据了~~"
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
import { getArticleList } from '@/api/artilce'

//

export default {
  name: 'article-page',

  // 异步组件
  components: { ArticleItem },
  data () {
    return {
      current: 1,
      sorter: 'weight_desc',
      list: [],
      finished: false,
      loading: false // 表示没有正在加载
    }
  },
  async created () {
    // 测试获取文章列表请求是否成功
  },
  methods: {
    changeSorterType (type) {
      this.sorter = type
      // 修改完类型以后，需要重新请求接口
      // 把之前所有的数据和状态清空掉/重置
      this.current = 1
      this.list = []
      this.finished = false
      // 因为是手动调用onLoad方法，所以需要把loading置为true，表示正在加载中
      this.loading = true
      this.onLoad()
    },
    async onLoad () {
      // 只要onLoad事件触发，会直接把loading修改为true，新的Load事件不会触发
      const { data } = await getArticleList({
        current: this.current,
        sorter: this.sorter
      })
      this.list = [
        ...this.list,
        ...data.rows
      ]
      // 获取完数据之后，手动把loading变为false
      this.loading = false
      // 每次获取完数据之后应该让current自增
      this.current++
      // 如果接口数据已经请求完了，就永远不能再触发load事件

      if (this.current > data.pageTotal) {
        this.finished = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;

  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;

    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }

      &.active {
        color: #222;

        &::after {
          width: 14px;
        }
      }
    }

    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;

      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}

</style>
