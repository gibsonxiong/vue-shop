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
    //添加userId
    if (config.params && 'userId' in config.params) {
      if (!core.getUserId()) throw new Error('token失效');
      config.params.userId = core.getUserId();

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

function mock(data, code = 0, msg = '') {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data,
        code,
        msg
      });
    }, 100);
  });
}

const services = {

  //查询积分比例
  async fetchCatalogList(cash = 1) {
    let data = [{
        name: '大家电1',
        id: 0,
      },
      {
        name: '大家电2',
        id: 1,
      },
      {
        name: '大家电3',
        id: 2,
      },
      {
        name: '生活家电4',
        id: 3,
      },
      {
        name: '生活家电5',
        id: 4,
      },
      {
        name: '生活家电6',
        id: 5,
      },
      {
        name: '生活家电7',
        id: 6,
      },
      {
        name: '生活家电8',
        id: 7,
      },
      {
        name: '生活家电9',
        id: 8,
      },
      {
        name: '生活家电10',
        id: 9,
      },
      {
        name: '生活家电11',
        id: 10,
      },
      {
        name: '生活家电12',
        id: 11,
      }, {
        name: '生活家电13',
        id: 12,
      }, {
        name: '生活家电14',
        id: 13,
      }
    ];

    return await mock(data);
  }
};

export default services;
