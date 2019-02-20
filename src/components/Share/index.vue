
<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
// @import "~@/css/co";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.share {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  .share_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .share_model {
      width: 100%;
      height: 60%;
      background: rgba(0, 0, 0, 0.5);
    }
    .share_box {
      width: 100%;
      height: 40%;
      background: #fff;
      padding: pxTorem(40) pxTorem(60) pxTorem(30);
      position: relative;
      overflow: auto;
      
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
}
</style>
<style lang="scss">
// @import url("https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css");
@import "~@/css/mixin";
#share_component {
  .soshm-item {
    margin: pxTorem(14) pxTorem(10);
    width: pxTorem(160);
    display: flex;
    flex-direction: column;
    align-items: center;
    .soshm-item-icon {
      width: 40%;
      height: 40%;
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
  <transition name="fade">
    <div v-show="shareShow" class="share">
      <div class="share_wrap">
        <div class="share_model" @click="shareNone"></div>
        <div class="share_box">
          <p class="share_p">分享到</p>
          <div id="share_component"></div>
          <div class="share_line"></div>
        </div>
      </div>
    </div>
  </transition>
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
