import Vue from 'vue'
import ToastComponent, {
    defaultOptions
} from './tpl'
import {
    mount
} from '../utils';


let loadingInstance;
let loadingCount = 0;

function toast(options) {
    let vm = mount(ToastComponent);

    return vm.show(options);
}

function createToast(options) {
    let vm = mount(ToastComponent);

    vm.show(options);

    return vm;
}

function showLoading(options = {}) {
    if (loadingCount === 0) {
        loadingInstance = mount(ToastComponent);
    }

    Object.assign(options, {
        duration: 0,
        imgUrl: require('./loading.svg'),
        imgStyle: {
            width: '40px',
            margin: '0px 0px 0'
        }
    });

    loadingInstance.show(options);
    loadingCount++;
}

function hideLoading() {
    if (loadingCount <= 0) return;

    loadingCount--;

    if (loadingCount === 0) {
        loadingInstance.hide();
    }
}

export default {
    install(Vue, config = {}) {
        Object.assign(defaultOptions, config);

        Vue.toast = toast;
        Vue.prototype.$toast = toast;

        Vue.createToast = createToast;
        Vue.prototype.$createToast = createToast;

        Vue.showLoading = showLoading;
        Vue.prototype.$showLoading = showLoading;

        Vue.hideLoading = hideLoading;
        Vue.prototype.$hideLoading = hideLoading;
    }
};