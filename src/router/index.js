import Vue from 'vue'
import Router from 'vue-router';

import Index from '@/views/Index';
import ItemList from '@/views/ItemList';
import Item from '@/views/Item';
import Order from '@/views/Order';

Vue.use(Router);

const config = {
  title:'商城'
}

const router = new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/items',
      component: ItemList
    },
    {
      path: '/items/:itemId',
      component: Item
    },
    {
      path: '/order',
      component: Order
    },
  ]
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  var title = config.title;
  to.meta.title = to.meta.title || title;

  document.title = to.meta.title;

  next();
})

export default router;

