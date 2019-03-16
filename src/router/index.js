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
import ConfirmReceiveResult from '@/views/ConfirmReceiveResult';
import RateResult from '@/views/RateResult';
import MyEvaluation from '@/views/MyEvaluation';
import Evaluation_Detail from '@/views/Evaluation_Detail';
import VIP from '@/views/VIP';
import Sign from '@/views/Sign';
import Invite from '@/views/Invite';


import services from '../services';


Vue.use(Router);

const config = {
  title: '商城'
}

const router = new Router({
  routes: [{
    path: '/',
    component: Index,
    meta: {
      skipCheckToken: true
    }
  },
  {
    path: '/items',
    component: ItemList,
    meta: {
      title: '商品列表',
      skipCheckToken: true
    }
  },
  {
    path: '/items/:itemId',
    component: Item,
    meta: {
      skipCheckToken: true
    }
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
    component: Register,
    meta: {
      skipCheckToken: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      skipCheckToken: true
    }
  },
  {
    path: '/reset-password',
    component: ResetPassword,
    meta: {
      skipCheckToken: true
    }
  },
  {
    path: '/coupon',
    component: Coupon,
    meta: {
      skipCheckToken: true
    }
  },
  {
    path: '/myCoupon',
    component: MyCoupon
  },
  {
    path: '/shopcart',
    component: Shopcart,
    meta: {
      skipCheckToken: true
    }
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/setting',
    component: Setting,
    meta: {
      skipCheckToken: true
    }
  },
  {
    path: '/evaluate',
    component: Evaluate,
    meta: {
      skipCheckToken: true
    }
  },{
    path: '/my_ecaluation',
    component: MyEvaluation
  }, {
    path: '/evaluation_detail',
    component: Evaluation_Detail,
    meta: {
      skipCheckToken: true
    }
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
    component: PanicBuy,
    meta: {
      skipCheckToken: true
    }
  }, {
    path: '/cashier',
    component: Cashier
  }, {
    path: '/pay-result',
    component: PayResult,
    meta: {
      skipCheckToken: true
    }
  }, {
    path: '/confirm-receive-result',
    component: ConfirmReceiveResult,
    meta: {
      skipCheckToken: true
    }
  }, {
    path: '/rate-result',
    component: RateResult,
    meta: {
      skipCheckToken: true
    }
  },
  {
    path: '/sign',
    component: Sign,
    meta: {
      skipCheckToken: true
    }
  },
  {
    path: '/invite',
    component: Invite,
    meta: {
      skipCheckToken: true
    }
  }, {
    path: '/vip',
    component: VIP
  }
  ]
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  var title = config.title;
  to.meta.title = to.meta.title || title;
  document.title = to.meta.title;
  next();
});

//处理权限逻辑
router.beforeEach((to, from, next) => {
  if(from.path==='/login' && to.path === '/login'){
    return next(false);
  }


  let isLogin = services.$isLogin();

  //没有登录且需要登录的页面
  if (!isLogin && !to.meta.skipCheckToken) {
    next('/login');
  } else {
    next();
  }
});


export default router;
