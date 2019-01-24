import 'babel-polyfill';

import '@/css/main.scss';

import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import router from './router';
import store from './store';

import layer from '@c/layer';
import '@/components';
import MintUI from 'mint-ui'
Vue.use(layer);
Vue.use(MintUI);

if ( !(process.env.NODE_ENV === 'production' && process.env.ENV === 'prod') ) {
  let VConsole = require('vconsole');
  let vConsole = new VConsole();
}

window.webViewRefresh = function(){};

document.addEventListener('touchstart',()=>{});

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
