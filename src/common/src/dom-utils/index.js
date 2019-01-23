var styleHook = (function () {
  let hooks = {};
  let names = [
    "width",
    "height",
    "left",
    "top",
    "bottom",
    "right",
    "paddingLeft",
    "paddingTop",
    "paddingBottom",
    "paddingRight",
    "marginLeft",
    "marginTop",
    "marginBottom",
    "marginRight"
  ];

  var hook = {
    set(value) {
      return value + "px";
    },
    get(value) {
      return parseFloat(value) || 0;
    }
  };
  names.forEach(name => {
    hooks[name] = hook;
  });

  return {
    get(name, value) {
      let h = hooks[name];

      if (!h) return value;

      return h.get(value);
    },
    set(name, value) {
      let h = hooks[name];

      if (!h) return value;

      return h.set(value);
    }
  };
})();

function getStyle(dom, name) {
  let value = window.getComputedStyle(dom).getPropertyValue(name);

  return styleHook.get(name, value);
}


function setStyle(dom, name, value) {
  dom.style[name] = styleHook.set(name, value);
}


function setStyles(dom, css) {
  Object.keys(css).forEach(name => {
    setStyle(dom, name, css[name]);
  });
}

export default {
  getScrollLeft() {
    return document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
  },

  getScrollTop() {
    return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  },


  getScrollWidth() {
    return document.documentElement.scrollWidth || document.body.scrollWidth;
  },

  getScrollHeight() {
    return document.documentElement.scrollHeight || document.body.scrollHeight;
  },

  getClientWidth() {
    return window.innerWidth;
  },

  getClientHeight() {
    return window.innerHeight;
  },

  getOffset(elem) {
    let offsetLeft = 0;
    let offsetTop = 0;
    let offsetWidth = elem.offsetWidth;
    let offsetHeight = elem.offsetHeight;
    let parent = elem.offsetParent;
    //首先加自己本身的左偏移和上偏移
    offsetLeft += elem.offsetLeft;
    offsetTop += elem.offsetTop;

    //只要没有找到body，我们就把父级参照物的边框和偏移也进行累加
    while (parent) {
      if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
        //累加父级参照物的边框
        offsetLeft += parent.clientLeft;
        offsetTop += parent.clientTop
      }

      //累加父级参照物本身的偏移
      offsetLeft += parent.offsetLeft;
      offsetTop += parent.offsetTop
      parent = parent.offsetParent;
    }

    return {
      left: offsetLeft,
      top: offsetTop,
      width: offsetWidth,
      height: offsetHeight
    }
  },

  onImgLoad(el, callback) {
    let imgs = el.tagName === 'img' ? [el] : el.querySelectorAll("img");
    var imgNum = imgs.length;

    if (imgNum.length === 0) {
      callback();
    } else {
      [].forEach.call(imgs, function (img) {
        img.addEventListener(
          "load",
          function () {
            if (!--imgNum) {
              callback();
            }
          },
          false
        );
      });
    }

  },

  unifyHeight(container, selector, isMax = true) {
    let childrens = container.querySelectorAll(selector);

    Array.prototype.forEach.call(childrens, function (child) {
      child.style.height = "auto";
    });

    let height = (function () {
      let h = 0;

      Array.prototype.forEach.call(childrens, function (child) {
        let op = isMax ? Math.max : Math.min;
        h = op(child.offsetHeight, h);
      });

      return h;
    })();

    Array.prototype.forEach.call(childrens, function (child) {
      child.style.height = height + "px";
    });
  },

  getStyle,
  setStyle,
  setStyles,

  checkInBoundY(y1, y2) {
    let scrollTop = this.getScrollTop();
    let clientHeight = this.getClientHeight();

    if ((scrollTop <= y1 && scrollTop + clientHeight >= y1) ||
      (scrollTop <= y2 && scrollTop + clientHeight >= y2)) {

      return true;
    } else {
      return false;
    }
  },

  checkInElementY(el) {
    let {
      top,
      height
    } = this.getOffset(el);
    let y1 = top;
    let y2 = top + height;

    return this.checkInBoundY(y1, y2);
  },

  detectInBoundY(y1, y2, listener) {
    let onScroll = () => {

      if (this.checkInBoundY(y1, y2)) {
        listener && listener(scrollTop);

        window.removeEventListener('scroll', onScroll);
      }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
  },

  detectInElementY(el, listener) {
    let {
      top,
      height
    } = this.getOffset(el);
    let y1 = top;
    let y2 = top + height;

    this.detectInBoundY(y1, y2, listener);
  }

}
