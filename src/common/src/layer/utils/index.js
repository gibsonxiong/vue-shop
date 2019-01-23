import Vue from 'vue';

export function mount(Component) {
    let VueElem = Vue.extend(Component);
    let vm = new VueElem({
        el: document.createElement('div')
    });
    document.body.appendChild(vm.$el);

    return vm;
}