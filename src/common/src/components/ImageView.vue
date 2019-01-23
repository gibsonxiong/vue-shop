<style lang="less" scoped>
.image-view {
}

.image-view-mask {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
}

.r-imagebox {
  z-index: 110;
  position: fixed !important;
}
</style>

<template>
  <div class="image-view" v-show="show" 
    @mousedown="start" @mousemove.prevent="move" @mouseup="end"
    @touchstart="start" @touchmove.prevent="move" @touchend="end"   
  >
    <div ref="mask" class="image-view-mask"
 
    ></div>

    <imagebox class="r-imagebox" ref="imgbox" :src="src">
    </imagebox>
  </div>
</template>

<script>
import domUtils from "../dom-utils";
import Velocity from "velocity-animate";
import Imagebox from "./Imagebox";

function setStyle(dom, name, value) {
  dom.style[name] = value;
}

function setStyles(dom, styles) {
  for (let name in styles) {
    setStyle(dom, name, styles[name]);
  }
}

function getStyle(dom, name) {
  let styles = window.getComputedStyle(dom);

  return styles[name];
}

function getPoint(e, isGetChangedTouches) {
  if (e.targetTouches) {
    if (isGetChangedTouches) {
      return {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY
      };
    } else {
      return {
        x: e.targetTouches[0].pageX,
        y: e.targetTouches[0].pageY
      };
    }
  } else {
    return {
      x: e.pageX,
      y: e.pageY
    };
  }
}

export default {
  name: "ImageView",

  components: {
    Imagebox
  },

  props: {
    duration: {
      type: Number,
      default: 180
    }
  },

  data() {
    return {
      show: false,
      src: null
    };
  },

  mounted() {
    this.imgbox = this.$refs.imgbox.$el;
    this.mask = this.$refs.mask;
  },

  starting: false,

  startTimestamp: null,
  startPoint: {
    x: null,
    y: null
  },
  currentPoint: {
    x: null,
    y: null
  },

  methods: {
    start(e) {
      this.starting = true;

      this.startTimeStamp = +new Date();
      this.startPoint = this.currentPoint = getPoint(e);
    },

    move(e) {
      if (this.starting !== true) return;

      let point = getPoint(e);
      let delta = {
        x: point.x - this.currentPoint.x,
        y: point.y - this.currentPoint.y
      };

      let left = parseFloat(getStyle(this.imgbox, "left"));
      let top = parseFloat(getStyle(this.imgbox, "top"));
      let width = parseFloat(getStyle(this.imgbox, "width"));
      let height = parseFloat(getStyle(this.imgbox, "height"));
      let opacity = getStyle(this.mask, "opacity");
      let detailWidth = delta.y / 3;
      let detailHeight = detailWidth / (width / height);

      setStyles(this.imgbox, {
        top: top + delta.y + "px",
        left: left + delta.x + "px",
        width: Math.min(width - detailWidth, this.react.width) + "px",
        height: Math.min(height - detailHeight, this.react.height) + "px"
      });
      setStyles(this.mask, {
        opacity: opacity - delta.y * 0.001
      });

      this.currentPoint = point;
    },

    end(e) {
      if (this.starting !== true) return;

      this.starting = false;

      let point = getPoint(e, true);
      let threshold = 10;
      let isTap =
        Math.abs(point.x - this.startPoint.x) <= threshold &&
        Math.abs(point.y - this.startPoint.y) <= threshold &&
        e.timeStamp - this.startTimeStamp <= 300;

      if (isTap) {
        this.hideImage();
      } else if (point.y - this.startPoint.y >= 60) {
        this.hideImage();
      } else {
        Velocity(
          this.imgbox,
          {
            ...this.react
          },
          {
            duration: this.duration,
            easing: "easeOut"
          }
        );
        Velocity(
          this.mask,
          {
            opacity: 1
          },
          {
            duration: this.duration,
            easing: "easeOut"
          }
        );
      }
    },

    showImage(distImg) {
      var mode = "fit"; //fit, fill
      var naturalWidth = distImg.naturalWidth;
      var naturalHeight = distImg.naturalHeight;
      var radio = naturalWidth / naturalHeight;
      var clientWidth = domUtils.getClientWidth();
      var clientHeight = domUtils.getClientHeight();
      var clientRadio = clientWidth / clientHeight;
      var scrollTop = domUtils.getScrollTop();
      var width = distImg.offsetWidth;
      var height = distImg.offsetHeight;
      var top = distImg.offsetTop - scrollTop;
      var left = distImg.offsetLeft;
      var distWidth;
      var distHeight;
      var distTop;
      var distLeft;

      //"图片长宽比" 比  "屏幕长宽比"  大
      if (radio > clientRadio) {
        //图片全部显示
        if (mode === "fit") {
          distWidth = clientWidth;
          distHeight = clientWidth / radio;
        } else {
          //屏幕全部显示
          distWidth = clientHeight * radio;
          distHeight = clientHeight;
        }
      } else {
        //图片全部显示
        if (mode === "fit") {
          distHeight = clientHeight;
          distWidth = clientHeight * radio;
        } else {
          //屏幕全部显示
          distWidth = clientWidth;
          distHeight = clientWidth / radio;
        }
      }

      distTop = (clientHeight - distHeight) / 2;
      distLeft = (clientWidth - distWidth) / 2;

      this.src = distImg.src;
      this.show = true;
      this.originReact = {
        left,
        top,
        width,
        height
      };
      this.react = {
        width: distWidth,
        height: distHeight,
        top: distTop,
        left: distLeft
      };

      setStyles(this.imgbox, {
        top: top + "px",
        left: left + "px",
        width: width + "px",
        height: height + "px"
      });
      setStyles(this.mask, {
        opacity: 0
      });

      Velocity(
        this.imgbox,
        {
          top: distTop,
          left: distLeft,
          width: distWidth,
          height: distHeight
        },
        {
          duration: this.duration,
          easing: "easeOut"
        }
      );

      Velocity(
        this.mask,
        {
          opacity: 1
        },
        {
          duration: this.duration,
          easing: "easeOut"
        }
      );
    },

    showImageByImgbox(destImgbox) {
      var mode = "fit"; //fit, fill
      var distImg = destImgbox.querySelector("img");
      var naturalWidth = distImg.naturalWidth;
      var naturalHeight = distImg.naturalHeight;
      var radio = naturalWidth / naturalHeight;
      var clientWidth = domUtils.getClientWidth();
      var clientHeight = domUtils.getClientHeight();
      var clientRadio = clientWidth / clientHeight;
      var scrollTop = domUtils.getScrollTop();
      var width = destImgbox.offsetWidth;
      var height = destImgbox.offsetHeight;
      var top = destImgbox.offsetTop - scrollTop;
      var left = destImgbox.offsetLeft;
      var distWidth;
      var distHeight;
      var distTop;
      var distLeft;

      //"图片长宽比" 比  "屏幕长宽比"  大
      if (radio > clientRadio) {
        //图片全部显示
        if (mode === "fit") {
          distWidth = clientWidth;
          distHeight = clientWidth / radio;
        } else {
          //屏幕全部显示
          distWidth = clientHeight * radio;
          distHeight = clientHeight;
        }
      } else {
        //图片全部显示
        if (mode === "fit") {
          distHeight = clientHeight;
          distWidth = clientHeight * radio;
        } else {
          //屏幕全部显示
          distWidth = clientWidth;
          distHeight = clientWidth / radio;
        }
      }

      distTop = (clientHeight - distHeight) / 2;
      distLeft = (clientWidth - distWidth) / 2;

      this.src = distImg.src;
      this.show = true;
      this.originReact = {
        left,
        top,
        width,
        height
      };
      this.react = {
        width: distWidth,
        height: distHeight,
        top: distTop,
        left: distLeft
      };

      setStyles(this.imgbox, {
        top: top + "px",
        left: left + "px",
        width: width + "px",
        height: height + "px"
      });
      setStyles(this.mask, {
        opacity: 0
      });

      Velocity(
        this.imgbox,
        {
          top: distTop,
          left: distLeft,
          width: distWidth,
          height: distHeight
        },
        {
          duration: this.duration,
          easing: "easeOut"
        }
      );

      Velocity(
        this.mask,
        {
          opacity: 1
        },
        {
          duration: this.duration,
          easing: "easeOut"
        }
      );
    },

    hideImage() {
      Velocity(
        this.imgbox,
        {
          ...this.originReact
        },
        {
          duration: this.duration,
          easing: "easeOut"
        }
      );

      Velocity(
        this.mask,
        {
          opacity: 0
        },
        {
          duration: this.duration,
          easing: "easeOut",
          complete: () => {
            this.show = false;
          }
        }
      );
    }
  }
};
</script>



