import Vue from 'vue';
import config from '@/config';
import filter from '@c/filter';
import utils from '@/utils';

function isAbsoluteUrl(url){
  return /^http:\/\/|^https:\/\/|^\/\//i.test(url);
}

let filters = {
  hostUrl(val){
    if(isAbsoluteUrl(val)) {
      return val;
    }else{
      return config.hostUrl + val;
    }
  },

  //退款类型
  refundType(val) {
    return ({
      '1': '仅退款'
    })[val];
  },

  //退款状态
  refundStatus(val) {
    return ({
      '1': '退款中'
    })[val];
  },

  gender(val) {
    return ({
      '0': '男',
      '1': '女'
    })[val];
  },

  orderStatus(val) {
    return (
      {
        "1": "等待买家付款",
        "2": "买家已付款",
        "3": "卖家已发货",
        "4": "交易成功",
        '5': "交易成功",
        "9": "交易关闭"
      }
    )[val];
  }
}

Vue.filter('date', filter.date);

Vue.filter('padZero', utils.padZero);

Object.keys(filters).forEach(function (key) {
  Vue.filter(key, filters[key]);
});
