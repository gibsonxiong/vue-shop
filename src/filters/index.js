import Vue from 'vue';
import filter from '@c/filter';


let filters = {
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

Object.keys(filters).forEach(function (key) {
  Vue.filter(key, filters[key]);
});
