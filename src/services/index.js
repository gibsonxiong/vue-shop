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
    let data = [{
        name: '女装',
        id: 0,
      },
      {
        name: '手机数码',
        id: 1,
      },
      {
        name: '人群偏爱',
        id: 2,
      },
      {
        name: '男装',
        id: 3,
      },
      {
        name: '鞋靴',
        id: 4,
      },
      {
        name: '百货',
        id: 5,
      },
      {
        name: '食品',
        id: 6,
      },
      {
        name: '家电',
        id: 7,
      },
      {
        name: '内衣配饰',
        id: 8,
      },
      {
        name: '家装',
        id: 9,
      },
      {
        name: '生活服务',
        id: 10,
      },
    ];

    return await mock(data);
  }
};

export default services;
