import Vue from 'vue';
import Router from 'vue-router';

// 引入组件
import Layout from '../../views/layout';
// 引入语言包
import lang from '../lang';
Vue.use(Router);


let router = new Router({
  mode: 'history',
  fallback: false, // 匹配IE9及以下刷新页面后自动变更为Hash模式,默认值是true
  routes: [
    {
      path: '/',
      component:''
    }
  ]
});

export default router;
