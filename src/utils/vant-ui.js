
// 把按需引入的组件抽离到 src/utils/vant-ui.js里面去
import Vue from 'vue'
import {
  Button,
  Cell,
  CellGroup,
  Field,
  Form,
  Grid,
  GridItem,
  Icon,
  List,
  NavBar,
  Tabbar,
  TabbarItem,
  Toast
} from 'vant'

const vantComponents = [Button, NavBar, Tabbar, TabbarItem, Form, Field, Toast, List, Cell, Icon, Grid, GridItem, CellGroup]
// 进行集中的注册，优化代码
vantComponents.forEach(item => {
  Vue.use(item)
})

// Vue.use(Button)
// Vue.use(Tabbar)
// Vue.use(TabbarItem)
// Vue.use(NavBar)
// Vue.use(Form)
