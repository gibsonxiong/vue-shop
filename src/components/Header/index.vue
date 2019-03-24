<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
$height: 0.44rem;
$color: #444;
$color_active: rgba(0, 0, 0, 0.2);
$bg-color: #f8f8f8;
.c-header {
  position: absolute;
  z-index: 90;
  top: 0;
  right: 0;
  left: 0;
  color: $color;
  background: $bg-color;
  @include border-bottom(1px, rgba(230, 230, 230, 0.5));
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

  &.primary {
    $bc: $color-primary-gradient;
    $fc: #f8f8f8;

    background: $bc;
    border: none;

    .header-title {
      color: $fc;
    }

    .header-left,
    .header-right {
      a {
        color: $fc;
      }
    }
  }

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
    padding-left: 0.1rem;
    padding-right: 0.1rem;
  }

  .header-title {
    // color: $color;
    text-align: center;
    font-size: 0.16rem;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    margin: 0 0.2rem;
  }

  .header-left,
  .header-right {
    z-index: 1;
    a {
      font-size: 0.14rem;
      font-weight: 400;
      color: $color;
      padding: 0 0.05rem;

      .iconfont {
        font-size: 0.22rem;
        width: 0.22rem;
      }

      &:active {
        opacity: 0.5;
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
          <i class="iconfont icon-back"></i>
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
    samePadding: {
      type: Boolean,
      default: true
    },
    centerStyle: {}
  },
  computed: {
    innerCenterStyle() {

      return {
        'padding-left':`${this.paddingLeft}px`,
        'padding-right':`${this.paddingRight}px`,
        ...this.centerStyle
      };
    }
  },
  data() {
    return {
      paddingLeft: 0,
      paddingRight: 0,
      centerPaddingX: 0
    };
  },
  methods: {
    resizeCenter() {
      let leftWdith = this.$refs.left.offsetWidth;
      let rightWdith = this.$refs.right.offsetWidth;

      if (this.samePadding) {
        let maxWidth = Math.max(leftWdith, rightWdith);
        this.paddingLeft = maxWidth;
        this.paddingRight = maxWidth;
      } else {
        this.paddingLeft = leftWdith;
        this.paddingRight = rightWdith;
      }
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
