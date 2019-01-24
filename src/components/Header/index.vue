<style lang="scss" scoped>
@import "~@/css/var";
$height: 0.44rem;
.c-header {
  position: fixed;
  z-index: 90;
  top: 0;
  right: 0;
  left: 0;
  // padding-right: 0.1rem;
  // padding-left: 0.1rem;
  border-bottom: 0;
  background: $color-primary;
  height: $height;

  &.transparent {
    background: transparent;
  }

  &.white {
    $color: #444;
    background: #fff;
    color: $color;
    border-bottom: 1px solid rgba(230, 230, 230, 0.5);;

    .header-title {
      color: $color;
    }

    .header-left,
    .header-right {
      a {
        color: $color;

        &:active {
          text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
        }
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
  }

  .header-title {
    color: #fff;
    text-align: center;
    font-size: 0.17rem;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    margin: 0;
  }

  .header-left,
  .header-right {
    a {
      font-size: 0.14rem;
      font-weight: 100;
      color: #fff;
      margin: 0 5px;

      &:active {
        text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.8);
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
          <span>{{backText}}</span>
        </a>
        <slot name="left"></slot>
      </div>
      <div
        class="header-center"
        :style="{'padding-left':`${centerPaddingX}px`, 'padding-right':`${centerPaddingX}px` }"
      >
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
    theme: String
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
      if (typeof Square != "undefined") {
        Square.goback();
      } else if (
        window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.GOBACK
      ) {
        window.webkit.messageHandlers.GOBACK.postMessage(0);
      } else {
        history.back();
      }
    },

    toRoot() {
      if (typeof Square != "undefined") {
        Square.closeActivity();
      } else if (
        window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.GOROOT
      ) {
        window.webkit.messageHandlers.GOROOT.postMessage(0);
      } else {
        history.back();
      }
    }
  },
  mounted() {
    this.resizeCenter();
  }
};
</script>
