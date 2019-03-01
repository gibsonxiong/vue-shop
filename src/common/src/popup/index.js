import Vue from 'vue';
import Modal from './Modal';
import modalManager from './modalManager';
import Select from './Select';

function mount(Component, props, container = document.body) {
  let VueElem = Vue.extend(Component);
  let vm = new VueElem({
    el: document.createElement('div'),
    propsData: props
  });
  container.appendChild(vm.$el);

  return vm;
}


let api = {
  install(Vue) {
    Vue.prototype.$popup = this;
  },

  modal(content, title, options = {}) {
    let vm = mount(Modal, {
      ...options,
      content,
      title,
      async beforeClose(type) {
        let result = options.beforeClose && (await options.beforeClose(type));

        if (result !== false) {
          modalManager.pop();
        } else {
          return false;
        }

      }
    });

    modalManager.push(vm);

    return vm.open();
  },

  alert(content, title, options = {}) {
    return this.modal(content, title, {
      ...options,
      actions: {
        confirm: '确定'
      }
    });
  },

  confirm(content, title, options = {}) {
    return this.modal(content, title, {
      ...options,
      actions: {
        cancel:'取消',
        confirm: '确定',
      }
    });
  },

  select(options = {}) {
    let vm = mount(Select, {
      ...options
    });

    return vm.open();
  },


}

export default api;
