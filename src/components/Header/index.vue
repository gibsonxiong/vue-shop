<style lang="scss" scoped>
@import "~@/css/var";
$height: 0.44rem;
$color: #444;
$color-active: rgba(0, 0, 0, 0.2);
$bg-color: #f8f8f8;
.c-header {
  position: fixed;
  z-index: 90;
  top: 0;
  right: 0;
  left: 0;
  color: $color;
  background: $bg-color;
  border-bottom: 1px solid rgba(230, 230, 230, 0.5);
  height: $height;

  &.transparent {
    background: transparent;
    border: none;

    .icon-back {
      position: relative;
      &:after {
        content: "";
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        background-color: rgba(245, 245, 245, 1);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    }
  }

  // &.white {
  //   $color: #444;
  //   background: #fff;
  //   color: $color;

  //   .header-title {
  //     color: $color;
  //   }

  //   .header-left,
  //   .header-right {
  //     a {
  //       color: $color;

  //       &:active {
  //         text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  //       }
  //     }
  //   }
  // }

  .header-body {
    overflow: hidden;
    font-weight: 500;
    height: $height;
    line-height: $height;
    padding: 0;
    text-align: center;
    white-space: nowrap;
  }

  .header-center {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .header-title {
    // color: $color;
    text-align: center;
    font-size: 0.15rem;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    margin: 0;
  }

  .header-left,
  .header-right {
    a {
      font-size: 0.14rem;
      font-weight: 400;
      color: $color;
      margin: 0 5px;

      &:active {
        opacity: 0.5;
        // text-shadow: 0px 0px 5px $color-active;
      }
    }
  }

  .header-left {
    position: absolute;
    text-align: left;
    left: 0;
    top: 0;
    padding-left: 0.1rem;
    padding-right: 0.05rem;
  }

  .header-right {
    position: absolute;
    text-align: right;
    right: 0;
    top: 0;
    padding-right: 0.1rem;
    padding-left: 0.05rem;
  }

  .header-back {
    display: flex;
  }
}
</style>

<template>
  <header class="c-header" :class="[theme]">
    <div class="header-body">
      <div class="header-left" ref="left">
        <a class="header-back" v-if="backType !== 0" @click="backType === 1 ? toBack(): toRoot()">
          <i class="iconfont icon-back" style="padding-right: 0.02rem;font-size: 0.22rem;"></i>
          <span style="margin-left: -0.04rem;">{{backText}}</span>
        </a>
        <slot name="left"></slot>
      </div>
      <div class="header-center" :style="innerCenterStyle">
        <slot name="center">
          <h2 class="header-title">{{title}}</h2>
        </slot>
      </div>
      <div class="header-right" ref="right">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  props: {
    title: String,
    // 0-没返回 1-返回上一页 2-退出webview
    backType: {
      type: Number,
      default: 1
    },
    backText: {
      type: String,
      default: ""
    },
    theme: String,
    centerStyle: {}
  },
  computed: {
    innerCenterStyle() {
      return {
        "padding-left": `${this.centerPaddingX}px`,
        "padding-right": `${this.centerPaddingX}px`,
        ...this.centerStyle
      };
    }
  },
  data() {
    return {
      centerPaddingX: 0
    };
  },
  methods: {
    resizeCenter() {
      let leftWdith = this.$refs.left.offsetWidth;
      let rightWdith = this.$refs.right.offsetWidth;
      let maxWidth = Math.max(leftWdith, rightWdith);
      console.log(maxWidth);
      this.centerPaddingX = maxWidth;
    },
    toBack() {
      history.back();
    },
    toRoot() {
      history.back();
    }
  },
  mounted() {
    this.resizeCenter();
  }
};
</script>
