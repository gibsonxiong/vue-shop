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

  gender(val){
    return ({
      '0': '男',
      '1': '女'
    })[val];
  }
}

Vue.filter('date', filter.date);

Object.keys(filters).forEach(function (key) {
  Vue.filter(key, filters[key]);
});
