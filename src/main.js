if ( !(process.env.NODE_ENV === 'production' && process.env.ENV === 'prod') ) {
  let VConsole = require('vconsole');
  let vConsole = new VConsole();
}

import 'babel-polyfill';

import '@/css/main.scss';

import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import router from './router';
import store from './store';

import config from '@/config';

import layer from '@c/layer';
import popup from '@c/popup';
import '@/components';
import '@/filters';
import MintUI from 'mint-ui';
const {VueLazyload} = require('@/js/vue-lazyload.js');
import 'vue-photo-preview/dist/skin.css';
import preview from 'vue-photo-preview' //图片预览

//处理低版本JSON对dom序列化失败问题
HTMLElement.prototype.toJSON = function(){
  return {};
}

Vue.use(MintUI);
Vue.use(VueLazyload)
Vue.use(preview, {
  fullscreenEl: false,
  zoomEl: false,
  arrowEl: false,
  tapToClose: true,
})

Vue.use(config);
Vue.use(layer);
Vue.use(popup);





window.webViewRefresh = function () { };

document.addEventListener('touchstart', () => { });

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
