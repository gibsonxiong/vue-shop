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
import MyCoupon from '@/views/MyCoupon';
import Shopcart from '@/views/Shopcart';
import Personal from '@/views/Personal';
import Setting from '@/views/Setting';
import Evaluate from '@/views/Evaluate';
import ConfirmOrder from '@/views/ConfirmOrder';
import Remark from '@/views/Remark';
import RefundList from '@/views/RefundList';
import ResetPassword from '@/views/ResetPassword';
import RefundDetail from '@/views/RefundDetail';
import Refund from '@/views/Refund';
import Logistics from '@/views/Logistics';
import NickName from '@/views/NickName';
import PanicBuy from '@/views/PanicBuy';
import Cashier from '@/views/Cashier';
import PayResult from '@/views/PayResult';
import MyEvaluation from '@/views/MyEvaluation';
import Evaluation_Detail from '@/views/Evaluation_Detail';

Vue.use(Router);

const config = {
  title: '商城'
}

const router = new Router({
  routes: [{
      path: '/',
      component: Index
    },
    {
      path: '/items',
      component: ItemList,
      meta: {
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
      path: '/reset-password',
      component: ResetPassword
    },
    {
      path: '/coupon',
      component: Coupon
    },
    {
      path: '/myCoupon',
      component: MyCoupon
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: Evaluate
    },
    {
      path: '/confirmorder',
      component: ConfirmOrder
    },
    {
      path: '/remark',
      component: Remark
    }, {
      path: '/refundlist',
      component: RefundList
    }, {
      path: '/refund_detail',
      component: RefundDetail
    }, {
      path: '/refund',
      component: Refund
    }, {
      path: '/logistics',
      meta: {
        title: '物流查询'
      },
      component: Logistics
    }, {
      path: '/nickname',
      component: NickName
    }, {
      path: '/panic_buy',
      component: PanicBuy
    }, {
      path: '/cashier',
      component: Cashier
    }, {
      path: '/pay-result',
      component: PayResult
    }, {
      path: '/my_ecaluation',
      component: MyEvaluation
    }, {
      path: '/evaluation_detail',
      component: Evaluation_Detail
    }
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
