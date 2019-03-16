import axios from 'axios';
import config from '@/config';
import router from '@/router';
import routerUtils from '@/utils/router-utils';

const request = axios.create({
  baseURL: config.hostUrl,
  timeout: 12000,
  method: 'get'
});


// 添加请求拦截器
function addInterceptors(_request) {
  let refreshing = false;   //是否在refreshToken中
  let arr = [];


  _request.interceptors.request.use(function (config) {
    //添加token
    let token = services.$getToken();

    config.headers['Authorization'] = token || '';

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  function createTask() {
    let resolve;
    let reject;
    let promise = new Promise((_resolve, _reject) => {
      resolve = _resolve;
      reject = _reject;
    });

    return {
      resolve,
      reject,
      promise
    }
  };

  let refreshTask;

  _request.interceptors.response.use(async function (response) {
    //token过期，需要刷新token
    if (response.data.code == 99) {
      //如果没有发起请求
      if (!refreshTask) {
        refreshTask = createTask();

        //刷新token
        let refreshToken = services.$getRefreshToken();
        services.refreshToken(refreshToken)
          .then(res => {
            if (res.code !== 0) throw new Error('刷新token失败');

            refreshTask.resolve();
          }).catch(err => {
            refreshTask.reject();
          }).finally(() => {
            refreshTask = null;
          });
      }

      try {
        await refreshTask.promise;

        console.log('刷新token成功,正在重新请求');
        return await _request(response.config);

      } catch (err) {
        console.log('刷新token失败');
        //把状态码改成认证失败
        response.data.code = 97;
      }

    }

    // let skipCheckToken = routerUtils.getQuery().skipCheckToken == '1';

    let needLoginCodes = [96, 97, 98];
    if ((needLoginCodes.indexOf(response.data.code) !== -1)) {

      //保存
      // if (!skipCheckToken) {
      //   routerUtils.setQuery({
      //     skipCheckToken: 1
      //   });

      //  router.push('/login');
      // }


      router.push('/login');
      services.$removeToken();
    }

    return response;
  }, function (error) {

    // 请求超时
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('网络不给力~'));
    } else if (error.message === 'Network Error') {
      return Promise.reject(new Error('服务器出了点小差错~'));
    }
    return Promise.reject(error);
  });
}

addInterceptors(request);


const services = {
  $setToken(token) {
    localStorage.setItem('shop/token', token);
  },

  $getToken() {
    return localStorage.getItem('shop/token');
  },

  $removeToken() {
    return localStorage.removeItem('shop/token');
  },

  //refreshToken
  $setRefreshToken(refreshToken) {
    localStorage.setItem('shop/refreshToken', refreshToken);
  },

  $getRefreshToken() {
    return localStorage.getItem('shop/refreshToken');
  },

  $removeRefreshToken() {
    return localStorage.removeItem('shop/refreshToken');
  },

  $isLogin() {
    return this.$getToken() !== '' && this.$getToken() !== null;
  },

  $isError(res) {
    return res.code !== 0;
  },

  async refreshToken(refreshToken) {
    let res = (await request.post('/token/refresh', {
      refreshToken
    }, {
        skipCheckToken: true
      })).data;

    if (res.code === 0) {
      services.$setToken(res.data.token);
      services.$setRefreshToken(res.data.refreshToken);
    }

    return res;
  },

  //滑块验证
  async gtRegister() {
    return (await request.get('/gtregister', {
      skipCheckToken: true
    })).data;
  },

  //获取验证码
  async getSmsCode({
    phone,
    type,
    geetest_challenge,
    geetest_validate,
    geetest_seccode
  }) {

    return (await request.post('/getSmsCode', {
      phone,
      type,
      geetest_challenge,
      geetest_validate,
      geetest_seccode
    }, {
        skipCheckToken: true
      })).data;
  },

  //注册
  async register({
    phone,
    smsCode,
    password
  }) {

    return (await request.post('/register', {
      phone,
      smsCode,
      password
    }, {
        skipCheckToken: true
      })).data;
  },

  //登录
  async login({
    phone,
    password
  }) {
    let res = (await request.post('/login', {
      phone,
      password
    }, {
        skipCheckToken: true
      })).data;

    if (res.code === 0) {
      services.$setToken(res.data.token);
      services.$setRefreshToken(res.data.refreshToken);
    }

    return res;
  },

  //重置密码
  async resetPassword({
    phone,
    smsCode,
    password
  }) {

    return (await request.post('/resetPassword', {
      phone,
      smsCode,
      password
    }, {
        skipCheckToken: true
      })).data;
  },

  //获取搜索关键字提示列表
  async fetchSearchTip({
    searchText
  }) {
    return (await request.get('/suggest', {
      params: {
        q: searchText
      },
      skipCheckToken: true
    })).data;
  },

  //获取搜索历史列表
  async fetchSearchHistory() {
    return (await request.get('/searchs', {
      skipCheckToken: true
    })).data;
  },

  //删除搜索历史列表
  async deleteSearchHistory() {
    return (await request.delete('/searchs')).data;
  },

  async fetchCatalogList() {
    return (await request.get('/categorys', {
      skipCheckToken: true
    })).data;
  },

  async fetchItemTypeList({
    catalogId
  }) {
    return (await request.get(`/categorys/${catalogId}`, {
      skipCheckToken: true
    })).data;
  },

  async fetchItemList({
    pageIndex,
    pageSize,
    categoryId,
    searchText,
    order,
    minPrice,
    maxPrice
  }) {
    return (await request.get(`/items`, {
      params: {
        pageIndex,
        pageSize,
        categoryId,
        searchText,
        order,
        minPrice,
        maxPrice
      },
      skipCheckToken: true
    })).data;
  },

  async fetchItem({
    itemId
  }) {

    return (await request.get(`/items/${itemId}`, {
      skipCheckToken: true
    })).data;
  },

  //关注列表
  async listFavorite() {
    return (await request.get(`/favorites`)).data;
  },

  //添加关注
  async addFavorite({
    itemId
  }) {
    return (await request.put(`/favorites`, {
      itemId
    })).data;
  },

  //添加关注
  async removeFavorite({
    favoriteId
  }) {
    return (await request.delete(`/favorites/${favoriteId}`)).data;
  },

  //通过商品id获取用户关注信息
  async getFavoriteByItemId({
    itemId
  }) {
    return (await request.get(`/favorites/items/${itemId}`, {
      skipCheckToken: true
    })).data;
  },

  //获取购物车列表
  async fetchShopcartList() {
    return (await request.get(`/shopcarts`)).data;
  },

  //加入购物车
  async addShopcart({
    itemId,
    skuId,
    quantity
  }) {

    return (await request.put(`/shopcarts`, {
      itemId,
      skuId,
      quantity
    })).data;
  },

  //删除购物车
  async removeShopcart({
    shopcartId,
  }) {

    return (await request.delete(`/shopcarts/${shopcartId}`)).data;
  },

  //更新购物车
  async updateShopcart({
    shopcartId,
    quantity
  }) {

    return (await request.post(`/shopcarts/${shopcartId}`, {
      quantity
    })).data;
  },

  //订单列表
  async fetchOrderList({
    status
  }) {
    return (await request.get(`/orders`, {
      params: {
        status
      }
    })).data;
  },

  //订单列表
  async fetchOrderInfo({
    orderId
  }) {
    return (await request.get(`/orders/${orderId}`)).data;
  },

  //建立订单
  async buildOrder({
    params
  }) {
    return (await request.post(`/orders/build`, {
      params
    })).data;
  },

  //创建订单
  async createOrder({
    params
  }) {
    return (await request.post(`/orders/create`, {
      params
    })).data;
  },

  //支付订单
  async payOrder({
    orderId
  }) {
    return (await request.post(`/orders/${orderId}/pay`, {})).data;
  },

  //支付订单回调
  async payOrderCallback({
    orderId
  }) {
    return (await request.post(`/orders/${orderId}/payCallback`, {})).data;
  },

  //获取订单支付状态
  async getOrderPayStatus({
    orderId
  }) {
    return (await request.get(`/orders/${orderId}/orderPayStatus`)).data;
  },

  //物流查询
  async logistics({
    type,
    postid
  }) {
    return (await request({
      method: "GET", //请求方式
      url: "/deliver", //请求地址
      params: {
        type,
        postid
      }
    })).data;
  },

  //物流查询
  async getOrderDeliver({
    orderId
  }) {
    return (await request.get(`/orders/${orderId}/getDeliver`)).data;
  },

  //取消订单
  async cancelOrder({
    orderId,
    cancelReason
  }) {
    return (await request.post(`/orders/${orderId}/cancel`, {
      cancelReason
    })).data;
  },

  //删除订单
  async removeOrder({
    orderId
  }) {
    return (await request.delete(`/orders/${orderId}`)).data;
  },

  //提醒发货
  async remindDeliver({
    orderId
  }) {
    return (await request.post(`/orders/${orderId}/remindDeliver`, {})).data;
  },

  //确认收货
  async confirmReceive({
    orderId
  }) {
    return (await request.post(`/orders/${orderId}/confirmReceive`, {})).data;
  },

  //获取可领取优惠券列表
  async fetchCouponList() {
    return (await request.get(`/coupons`, {
      skipCheckToken: true
    })).data;
  },

  //领取优惠券
  async gainCoupon({
    couponId
  }) {
    return (await request.put(`/coupons/userCoupons`, {
      couponId
    })).data;
  },

  //用户优惠券列表
  async fetchUserCouponList({
    status
  }) {
    return (await request.get(`/coupons/userCoupons`, {
      params: {
        status
      }
    })).data;
  },

  //用户资料
  async fetchUserInfo() {
    return (await request.get(`/users/info`)).data;
  },

  async fetchOrderCount() {
    return (await request.get(`/users/orderCount`)).data;
  },

  //更新用户资料
  async updateUserInfo(info) {
    return (await request.post(`/users/info`, info)).data;
  },


  async fetchRegion() {
    return (await request.get(`/regions`)).data;
  },

  //获取地址列表
  async fetchAddressList() {
    return (await request.get(`/address`)).data;
  },

  //获取地址信息
  async fetchAddressInfo({
    addressId
  }) {
    return (await request.get(`/address/${addressId}`)).data;
  },

  //新增地址
  async addAddress(data) {
    return (await request.put(`/address`, data)).data;
  },

  //修改地址
  async updateAddress(addressId, data) {
    return (await request.post(`/address/${addressId}`, data)).data;
  },

  //删除地址
  async removeAddress({
    addressId
  }) {
    return (await request.delete(`/address/${addressId}`)).data;
  },

  //足迹
  async listFootprint() {
    return (await request.get(`/items/footprints`)).data;
  },

  //评价
  async rate({
    params
  }) {
    return (await request.put(`/rates`, params)).data;
  },

  //商品评价列表
  async fetchItemRateList({
    itemId,
    flag,
    pageSize
  }) {
    return (await request.get(`/rates/items/${itemId}`, {
      params: {
        flag,
        pageSize
      },
      skipCheckToken: true
    })).data;
  },

  //商品评价列表
  async fetchRateInfo({
    rateId
  }) {
    return (await request.get(`/rates/${rateId}`, {
      skipCheckToken: true
    })).data;
  },

  //评价点赞
  async rateLike({
    rateId,
    isLike
  }) {
    return (await request.post(`/rates/${rateId}/like`, {
      isLike
    })).data;
  },

  //上传图片
  async upload(formData, onUploadProgress) {
    return (await request.put(`/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress,
    })).data;
  },

  //退款/售后列表
  async fetchRefundList() {
    return (await request.get(`/refunds`)).data;
  },

  //退款/售后列表
  async fetchRefundInfo(refundId) {
    return (await request.get(`/refunds/${refundId}`)).data;
  },

  //退款申请信息
  async fetchRefundApplyInfo({
    orderId,
    orderItemId
  }) {
    return (await request.get(`/refunds/applyInfo`, {
      params: {
        orderId,
        orderItemId
      }
    })).data;
  },

  //申请退款
  async applyRefund(params) {
    return (await request.post(`/refunds/apply`, params)).data;
  },


  //抢购
  async fetchFlashbuyList() {
    return (await request.get(`/flashbuy`, {
      skipCheckToken: true
    })).data;
  },

  //某场抢购的商品
  async fetchFlashbuyItemList({
    flashbuyId
  }) {
    return (await request.get(`/flashbuy/items/${flashbuyId}`, {
      skipCheckToken: true
    })).data;
  },

  //获取当前抢购
  async fetchCurrentFlash() {
    return (await request.get(`/flashbuy/current`, {
      skipCheckToken: true
    })).data;
  },
};

export default services;
