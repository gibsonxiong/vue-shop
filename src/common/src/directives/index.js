import Vue from 'vue';
import utils from '../utils';
import domUtils from '../dom-utils';


Vue.directive('visible', function (el, binding) {
  el.style.visibility = binding.value ? null : 'hidden';
});


//出现动画
Vue.directive('appear', {
  inserted: function (el, binding) {
    let animationName = binding.value;
    el.style.visibility = 'hidden';

    let onScroll = () => {
      let scrollTop = domUtils.getScrollTop();
      let clientHeight = domUtils.getClientHeight();
      let offsetTop = domUtils.getOffset(el).top;
      let offsetHeight = el.offsetHeight;

      if ((scrollTop <= offsetTop && scrollTop + clientHeight >= offsetTop) ||
        (scrollTop <= offsetTop + offsetHeight && scrollTop + clientHeight >= offsetTop + offsetHeight)) {
        el.classList.add(animationName, 'animated-fast');
        el.style.visibility = '';
        window.removeEventListener('scroll', onScroll);
      }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
  }
});

//组出现动画
Vue.directive('appearGroup', {
  inserted: function (el, binding) {
    let arr = binding.value;
    let animationName = arr[0];
    let selector = arr[1];
    let interval = arr[2] || 250;
    let targets = el.querySelectorAll(selector);

    [].forEach.call(targets, target => {
      target.style.visibility = 'hidden';
    });

    let onScroll = () => {
      let scrollTop = domUtils.getScrollTop();
      let clientHeight = domUtils.getClientHeight();
      let offsetTop = domUtils.getOffset(el).top;
      let offsetHeight = el.offsetHeight;

      if ((scrollTop <= offsetTop && scrollTop + clientHeight >= offsetTop) ||
        (scrollTop <= offsetTop + offsetHeight && scrollTop + clientHeight >= offsetTop + offsetHeight)) {

        [].forEach.call(targets, (target, index) => {

          if (interval) {
            ((target) => {
              setTimeout(() => {
                target.style.visibility = '';
                target.classList.add(animationName, 'animated-fast');

              }, index * interval);
            })(target);
          } else {
            target.classList.add(animationName, 'animated-fast');
            target.style.visibility = '';
          }
        });

        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
  }
});

// 等高
Vue.directive('unifyHeight', {
  // 指令的定义
  inserted(el, binding) {
    let selector = binding.value;

    // onImgLoad(el, function () {
    // });
    domUtils.unifyHeight(el, selector);

    window.addEventListener(
      "resize",
      () => {
        domUtils.unifyHeight(el, selector);
      },
      false
    );
  },
  componentUpdated(el, binding) {
    let selector = binding.value;
    domUtils.unifyHeight(el, selector);
  }
});
