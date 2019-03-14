
<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0.8;
  transform: translate3d(0, 100%, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.share {
  .share_model {
    @include mask;
  }
  .share_box {
    z-index: 110;
    padding: 0.2rem 0.3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: auto;
    width: 100%;
    background: #fff;

    .share_p {
      font-size: pxTorem(36);
      text-align: center;
      padding-bottom: pxTorem(20);
    }
    .share_line {
      @include border-bottom();
      margin-top: pxTorem(50);
    }
  }
}
</style>
<style lang="scss">
@import "~@/css/mixin";
#share_component {
  display: flex;
  flex-wrap: wrap;
  .soshm-item {
    margin: 0.1rem 0;
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .soshm-item-icon {
      width: 0.35rem;
      height: 0.35rem;
      img {
        object-fit: cover;
      }
    }
    .soshm-item-text {
      color:#999;
      font-size:0.12rem;
          padding-top: 0.08rem;
      display: block;
    }
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>
<template>
  <div class="share">
    <transition name="fade">
      <div class="share_model" @click="shareNone" v-show="shareShow"></div>
    </transition>
    <transition name="slide">
      <div class="share_box" v-show="shareShow">
        <p class="share_p">分享到</p>
        <div id="share_component"></div>
        <!-- <div class="share_line"></div> -->
      </div>
    </transition>
  </div>
</template>


<script>
import soshm from "soshm";
export default {
  props: {
    shareShow: {
      type: Boolean,
      default: false
    },
    pic: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "分享标题"
    },
    digest: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    share() {
      soshm("#share_component", {
        // url: "",
        // 分享的标题，默认使用document.title
        title: this.title,
        // 分享的摘要，默认使用<meta name="description" content="">content的值
        digest: this.digest,
        // 分享的图片，默认获取本页面第一个img元素的src
        pic: this.pic,
        sites: ["weixin", "weixintimeline", "qq", "qzone", "weibo"]
      });
    },
    shareNone() {
      this.$emit("shareClose", false);
    }
  },
  created() {},
  mounted() {
    this.share();
  }
};
</script>
