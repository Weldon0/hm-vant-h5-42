import Vue from 'vue'
import App from './App.vue'
// 1、引入vant组件库
// import Vant from 'vant'
//
// // 2、样式文件
// import 'vant/lib/index.css'
import router from './router'
// 导入按需引入的js文件
import '@/utils/vant-ui'

// 3、使用vue.use进行注册
// Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 1、vant组件库是移动端的UI组件库
// 2、我们在vue2里面用的是vant v2的版本
// 3、vant是有赞团队开发的。
// 4、vue3的版本，小程序的版本，react的版本。

// 安装vant组件库，指定版本号latest-v2  yarn add vant@latest-v2 -S [信息保存到package.json]

// 目前的方式把所有的vant组件全部注册到项目里面去了
// 打包之后的体积就会比较大，【运行慢】【消耗性能】【第一次打开的时候比较慢】【首页白屏的问题】

// 预期的效果：用到什么组件就打包什么组件，打包之后的体积变小，用户看到网页的时间变快。

// npm install/npm i 下载package.json里面的所有的包    yarn: yarn
// npm i axios 安装单个的包   yarn add axios [yarn add 包名]

// 1、遇到有报错的时候，先要看这个报错的文件
// 2、然后再到这个文件里面按照对应的报错的行数进行问题的排查
