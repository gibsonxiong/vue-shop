import axios from 'axios';
import core from '@/core';
import config from '@/config';
import router from '@/router';

const request = axios.create({
  baseURL: 'http://192.168.3.31:3001/',
  timeout: 12000,
  method: 'get'
});

// 添加请求拦截器
function addInterceptors(_request) {
  _request.interceptors.request.use(function (config) {
    //添加token
    if (config.token) {
      let token = services.$getToken();
      if (!token && !config.skipCheckToken) {
        router.push('/login');
        throw new Error('请先登录');
      }

      config.headers['x-access-token'] = token || '';
    }

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  _request.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    if (response.data.code === -99 || response.data.code === -98) {
      services.$removeToken();
      router.push('/login');
    }

    return response;
  }, function (error) {

    // 请求超时
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('请求超时'));
    }else if(error.message === 'Network Error'){
      return Promise.reject(new Error('服务器出了点小差错'));
    }
    return Promise.reject(error);
  });
}

addInterceptors(request);

let userData = require('./data/user').default;
let catalogData = require('./data/catalog').default;
let itemTypeData = require('./data/item-type').default;
let itemData = require('./data/item').default;
let propData = require('./data/prop').default;
let propValueData = require('./data/prop-value').default;
let skuData = require('./data/sku').default;
let shopcartData = require('./data/shopcart').default;
let {
  Shopcart
} = require('./data/shopcart');

let testUserId = 0;

function mock(data, code = 0, message = '') {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data,
        code,
        message
      });
    }, 100);
  });
}

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

  $isLogin() {
    return this.$getToken() !== '' && this.$getToken() !== null;
  },

  $isError(res) {
    return res.code !== 0;
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
    })).data;
  },

  //获取验证码
  async getSmsCode({
    phone
  }) {

    return (await request.post('/getSmsCode', {
      phone
    })).data;
  },

  //登录
  async login({
    phone,
    password
  }) {
    return (await request.post('/login', {
      phone,
      password
    })).data;
  },

  //获取搜索关键字提示列表
  async fetchSearchTip({
    searchText
  }) {
    return mock([
      searchText + '一',
      searchText + '二',
      searchText + '三',
      searchText + '切',
    ]);
  },

  //获取搜索历史列表
  async fetchSearchHistory() {
    return mock([
      '面膜',
      '飞机大炮',
      '无敌帅气的衣服',
      '农药',
      '全钛眼睛框 纯钛',
      'lush',
      'lush洗发水'
    ]);
  },


  async fetchCatalogList() {
    return (await request.get('/categorys')).data;
  },

  async fetchItemTypeList({
    catalogId
  }) {
    return (await request.get(`/categorys/${catalogId}`)).data;
  },

  async fetchItemList({
    categoryId,
    searchText,
  }) {
    return (await request.get(`/items`, {
      params: {
        categoryId,
        searchText
      }
    })).data;
  },

  async fetchItem({
    itemId
  }) {


    return (await request.get(`/items/${itemId}`,{
      token:true,
      skipCheckToken:true
    })).data;
  },

  //关注列表
  async listFavorite() {
    return (await request.get(`/favorites`, {
      token: true
    })).data;
  },

  //添加关注
  async addFavorite({
    itemId
  }) {
    return (await request.put(`/favorites`, {
      itemId
    }, {
      token: true
    })).data;
  },

  //添加关注
  async removeFavorite({
    favoriteId
  }) {
    return (await request.delete(`/favorites/${favoriteId}`, {
      token: true
    })).data;
  },

  //通过商品id获取用户关注信息
  async getFavoriteByItemId({
    itemId
  }) {
    return (await request.get(`/favorites/items/${itemId}`, {
      token: true
    })).data;
  },

  //获取购物车列表
  async fetchShopcartList() {
    return (await request.get(`/shopcarts`, {
      token: true
    })).data;
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
    }, {
      token: true
    })).data;
  },

  //删除购物车
  async removeShopcart({
    shopcartId,
  }) {

    return (await request.delete(`/shopcarts/${shopcartId}`, {
      token: true
    })).data;
  },

  //更新购物车
  async updateShopcart({
    shopcartId,
    quantity
  }) {

    return (await request.post(`/shopcarts/${shopcartId}`, {
      quantity
    }, {
      token: true
    })).data;
  },

  //订单列表
  async fetchOrderList({
    status
  }) {
    return (await request.get(`/orders`, {
      params: {
        status
      },
      token: true
    })).data;
  },

  //订单列表
  async fetchOrderInfo({
    orderId
  }) {
    return (await request.get(`/orders/${orderId}`, {
      token: true
    })).data;
  },

  //建立订单
  async buildOrder({
    params
  }) {
    return (await request.post(`/orders/build`, {
      params
    }, {
      token: true
    })).data;
  },

  //创建订单
  async createOrder({
    params
  }) {
    return (await request.post(`/orders/create`, {
      params
    }, {
      token: true
    })).data;
  },

  //支付订单
  async payOrder({
    orderId
  }) {
    return (await request.post(`/orders/${orderId}/pay`, {}, {
      token: true
    })).data;
  },

  //获取订单支付状态
  async getOrderPayStatus({
    orderId
  }) {
    return (await request.get(`/orders/${orderId}/orderPayStatus`, {
      token: true
    })).data;
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

  //取消订单
  async cancelOrder({
    orderId,
    cancelReason
  }) {
    return (await request.post(`/orders/${orderId}/cancel`, {
      cancelReason
    }, {
      token: true
    })).data;
  },

  //删除订单
  async removeOrder({
    orderId
  }) {
    return (await request.delete(`/orders/${orderId}`, {
      token: true
    })).data;
  },

  //提醒发货
  async remindDeliver({
    orderId
  }) {
    return (await request.post(`/orders/${orderId}/remindDeliver`, {}, {
      token: true
    })).data;
  },

  //确认收货
  async confirmReceive({
    orderId
  }) {
    return (await request.post(`/orders/${orderId}/confirmReceive`, {}, {
      token: true
    })).data;
  },

  //获取可领取优惠券列表
  async fetchCouponList() {
    return (await request.get(`/coupons`)).data;
  },

  //领取优惠券
  async gainCoupon({
    couponId
  }) {
    return (await request.put(`/coupons/userCoupons`, {
      couponId
    }, {
      token: true
    })).data;
  },

  //用户优惠券列表
  async fetchUserCouponList({
    status
  }) {
    return (await request.get(`/coupons/userCoupons`, {
      params: {
        status
      },
      token: true
    })).data;
  },

  //用户资料
  async fetchUserInfo() {
    return (await request.get(`/users/info`, {
      token: true
    })).data;
  },

  //用户资料
  async updateUserInfo(info) {
    return (await request.post(`/users/info`, info, {
      token: true
    })).data;
  },


  async fetchRegion() {
    return (await request.get(`/regions`)).data;
  },

  //获取地址列表
  async fetchAddressList() {
    return (await request.get(`/address`, {
      token: true
    })).data;
  },

  //获取地址信息
  async fetchAddressInfo({
    addressId
  }) {
    return (await request.get(`/address/${addressId}`, {
      token: true
    })).data;
  },

  //新增地址
  async addAddress(data) {
    return (await request.put(`/address`, data, {
      token: true
    })).data;
  },

  //修改地址
  async updateAddress(addressId, data) {
    return (await request.post(`/address/${addressId}`, data, {
      token: true
    })).data;
  },

  //删除地址
  async removeAddress({
    addressId
  }) {
    return (await request.delete(`/address/${addressId}`, {
      token: true
    })).data;
  },

  async listFootprint(){
    return (await request.get(`/items/footprints`, {
      token: true
    })).data;
  }
};

export default services;
