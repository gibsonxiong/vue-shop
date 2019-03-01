
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
    padding: pxTorem(40) pxTorem(60) pxTorem(30);
    position: fixed;
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
      @include border-bottom(#ccc);
      margin-top: pxTorem(50);
    }
  }
}
</style>
<style lang="scss">
// @import url("https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css");
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
      width: 0.3rem;
      height: 0.3rem;
      img {
        object-fit: cover;
      }
    }
    .soshm-item-text {
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
  <div v-show="shareShow" class="share">
    <transition name="fade">
      <div class="share_model" @click="shareNone" v-show="shareShow"></div>
    </transition>
    <transition name="slide">
      <div class="share_box" v-show="shareShow">
        <p class="share_p">分享到</p>
        <div id="share_component"></div>
        <div class="share_line"></div>
      </div>
    </transition>
  </div>
</template>


<script>
import soshm from "soshm";
export default {
  props: {
    shareShow: false
  },
  data() {
    return {};
  },
  methods: {
    share() {
      // soshm.popIn({
      //     title: '弹窗分享',
      //     sites: ['weixin', 'weixintimeline', 'weibo', 'yixin', 'qzone', 'tqq', 'qq']
      //   });

      soshm("#share_component", {
        // url: "",
        // 分享的标题，默认使用document.title
        title: "此处为测试内容，请勿查看！",
        // 分享的摘要，默认使用<meta name="description" content="">content的值
        digest: "千万不要点！",
        // 分享的图片，默认获取本页面第一个img元素的src
        pic:
          "http://gw.alicdn.com/tps/TB14FbAb26H8KJjSspmSuv2WXXa.jpg_140x10000Q75.jpg",
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
