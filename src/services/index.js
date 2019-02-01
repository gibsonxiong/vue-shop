import axios from 'axios';
import core from '@/core';
import config from '@/config';

const request = axios.create({
  baseURL: config.hostUrl,
  timeout: 12000,
  method: 'get'
});

// 添加请求拦截器
function addInterceptors(_request) {
  _request.interceptors.request.use(function (config) {

    //添加token
    if (config.body && 'token' in config.body) {
      let token = services.$getToken();;
      if (!token) throw new Error('token失效');

      config.body.token = token;
    }

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  _request.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    return response;
  }, function (error) {
    // 请求超时
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('请求超时'));
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

  $isError(res) {
    return res.code !== 0;
  },

  //注册
  async register({
    phone,
    smsCode,
    password
  }) {
    console.log(arguments[0]);
    return mock(null, 0, '注册成功');
  },

  //获取验证码
  async getSmsCode({
    phone
  }) {
    console.log(arguments[0]);
    return mock(null, 0, '发送成功');
  },

  //登录
  async login({
    username,
    password
  }) {
    console.log(arguments[0]);
    return mock({
      token: userData[0].token
    }, 0, '登录成功');
  },

  //获取搜索关键字提示列表
  async fetchSearchTip({
    searchText
  }) {
    console.log(arguments[0]);
    return mock([
      searchText + '1',
      searchText + '11',
      searchText + '111',
      searchText + '1111',
    ]);
  },

  //获取搜索历史列表
  async fetchSearchHistory() {
    console.log(arguments[0]);
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
    let data = catalogData;

    return await mock(data);
  },

  async fetchItemTypeList({
    catalogId
  }) {
    let data = itemTypeData.filter(item => item.catalogId === catalogId);

    return await mock(data);
  },

  async fetchItemList({
    itemTypeId,
    searchText,
  }) {
    let data = itemData;

    if (itemTypeId) {
      data = data.filter(item => item.itemTypeId == itemTypeId);
    }

    if (searchText) {
      data = data.filter(item => item.name.indexOf(searchText) !== -1);
    }


    return await mock(data);
  },

  async fetchItem({
    itemId
  }) {
    let data = itemData.filter(item => item.id == itemId)[0];

    data = JSON.parse(JSON.stringify(data));

    data.propIds = data.propIds.split(',');
    data.props = data.propIds.map(id => propData.find(prop => prop.id == id));
    data.propValueIds = data.propValueIds.split(',');
    data.propValueIds = data.propValueIds.map(item => {
      return item.split('|');
    });
    data.propValues = data.propValueIds.map(item => {
      return item.map(id => propValueData.find(propValue => propValue.id == id));
    });
    data.skus = skuData.filter(item => item.itemId == itemId);

    return await mock(data);
  },


  //获取购物车列表
  async fetchShopcartList() {
    let data = shopcartData.filter(item => {
      return item.userId == 0;
    });

    data = JSON.parse(JSON.stringify(data));

    data.forEach(item=>{
      item.item = itemData.find(_item=>_item.id == item.itemId);
      item.sku = skuData.find(sku=>sku.id == item.skuId);
    });

    return await mock(data);
  },
};

export default services;
