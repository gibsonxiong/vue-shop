<style lang="less" scoped>

</style>

<template>
  <transition 
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot>
    </slot>
  </transition>
</template>

<script>
import Velocity from "velocity-animate";
export default {
  name: "SlideTranistion",
  data() {
    return {};
  },

  methods: {
    enter(el, done) {
      let style = window.getComputedStyle(el);
      let paddingTop = style.paddingTop;
      let paddingBottom = style.paddingBottom;
      let height = style.height;

      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
      el.style.height = 0;
      el.style.overflow = "hidden";

      Velocity(
        el,
        {
          height: height,
          paddingTop: paddingTop,
          paddingBottom: paddingBottom
        },
        {
          complete: done
        }
      );
    },
    afterEnter(el) {
      el.style.paddingTop = null;
      el.style.paddingBottom = null;
      el.style.height = null;
      el.style.overflow = null;
    },
    leave(el, done) {
      el.style.overflow = "hidden";

      Velocity(
        el,
        {
          height: 0,
          paddingTop: 0,
          paddingBottom: 0
        },
        { complete: done }
      );
    },
    afterLeave(el) {
      el.style.paddingTop = null;
      el.style.paddingBottom = null;
      el.style.height = null;
      el.style.overflow = null;
    }
  }
};
</script>


