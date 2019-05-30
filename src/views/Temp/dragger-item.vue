<template>
  <div class="dragger-item" :style="{display:  display}">
    <slot></slot>
  </div>
</template>

<script>
import domUitls from "@c/dom-utils";
export default {
  data() {
    return {
      display: ""
    };
  },

  mounted() {
    //获取被包裹组件的display
    let elem = this.$slots.default[0].elm;

    let display = domUitls.getStyle(elem, "display");

    if (display.indexOf("inline") !== -1) {
      this.display = "inline-block";
    } else {
      this.display = "block";
    }
  }
};
</script>

<style lang="scss" scoped>
.dragger-item {
  position: relative;
  vertical-align: middle;
  // display: inline-block;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>
