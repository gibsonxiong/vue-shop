<style lang="less" scoped>
.box {
  position: absolute;
  top: 250px;
  left: 250px;
  background: red;
  width: 100px;
  height: 100px;
}
</style>
<template>
<div>
    <div class="box" ref="box" @mousedown="start">
        
    </div>

</div>
</template>

<script>
import Velocity from "velocity-animate";

function getPoint(e) {
  return {
    x: e.pageX,
    y: e.pageY,
    timeStamp: e.timeStamp
  };
}

function getDetla(point1, point2) {
  return {
    x: point2.x - point1.x,
    y: point2.y - point1.y,
    timeStamp: point2.timeStamp - point1.timeStamp
  };
}

let styleHook = (function() {
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
    get(name,value) {
      let h = hooks[name];

      if (!h) return value;

      return h.get(value);
    },
    set(name,value) {
      let h = hooks[name];

      if (!h) return value;

      return h.set(value);
    }
  };
})();

function getStyle(dom, name) {
  let styles = window.getComputedStyle(dom);

  return styleHook.get(name, styles[name]);
}

function setStyle(dom, css) {
  Object.keys(css).forEach(name => {
    dom.style[name] = styleHook.set(name, css[name]);
  });
}

export default {
  name: "Touch",

  components: {},

  data() {
    return {};
  },

  starting: false,

  startPoint: null,

  currentPoint: null,

  mousemoveProxy: null,

  mouseupProxy: null,

  methods: {
    start(e) {
      if (this.starting) return;

      this.starting = true;

      this.mousemoveProxy = this.move.bind(this);
      this.mouseupProxy = this.end.bind(this);

      document.documentElement.addEventListener(
        "mousemove",
        this.mousemoveProxy,
        false
      );

      document.documentElement.addEventListener(
        "mouseup",
        this.mouseupProxy,
        false
      );

      let box = this.$refs.box;
      let point = getPoint(e);

      this.startPoint = point;

      this.currentPoint = point;
    },

    move(e) {
      if (!this.starting) return;

      let box = this.$refs.box;
      let point = getPoint(e);

      let delta = getDetla(this.currentPoint, point);

      //   let left = getStyle(box, "left");
      let top = getStyle(box, "top");

      setStyle(box, {
        // left: left + delta.x,
        top: top + delta.y
      });

      this.currentPoint = point;
    },

    end(e) {
      if (!this.starting) return;

      this.starting = false;

      document.documentElement.removeEventListener(
        "mousemove",
        this.mousemoveProxy
      );
      document.documentElement.removeEventListener(
        "mouseup",
        this.mouseupProxy
      );

      let box = this.$refs.box;
      let point = getPoint(e);
      let delta = getDetla(this.currentPoint, point);

      //   let left = getStyle(box, "left");
      let top = getStyle(box, "top");

      setStyle(box, {
        // left: left + delta.x,
        top: top + delta.y
      });

      let v = {
        y:
          (point.y - this.startPoint.y) /
          (point.timeStamp - this.startPoint.timeStamp)
      };

      let a = 0.016;
      let i = v.y / Math.abs(v.y);
      let s = {
        y: i * Math.abs(v.y * v.y) / (2 * a)
      };

      Velocity(box, {
        top: top + delta.y + s.y
      });
    }
  }
};
</script>

