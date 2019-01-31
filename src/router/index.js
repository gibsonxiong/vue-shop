import Vue from 'vue'
import Router from 'vue-router';

import Index from '@/views/Index';
import ItemList from '@/views/ItemList';
import Item from '@/views/Item';
import Order from '@/views/Order';
import OrderDetail from '@/views/OrderDetail';
import Footprint from '@/views/Footprint';
import MyLove from '@/views/MyLove';
import MyAddress from '@/views/MyAddress';
import AddressDetail from '@/views/AddressDetail';
import Recharge from '@/views/Recharge';
import RechargeRecord from '@/views/RechargeRecord';
import Register from '@/views/Register';
import Login from '@/views/Login';
import Coupon from '@/views/Coupon';
import Shopcart from '@/views/Shopcart';

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
      component: ItemList,
      meta:{
        title: '商品分类'
      }
    },
    {
      path: '/items/:itemId',
      component: Item
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/orderDetail',
      component: OrderDetail
    },
    {
      path: '/footprint',
      component: Footprint
    },
    {
      path: '/mylove',
      component: MyLove
    },
    {
      path: '/myAddress',
      component: MyAddress
    },
    {
      path: '/addressdetail',
      component: AddressDetail
    },
    {
      path: '/recharge',
      component: Recharge
    },
    {
      path: '/rechargerecord',
      component: RechargeRecord
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/coupon',
      component: Coupon
    },
    {
      path: '/shopcart',
      component: Shopcart
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

