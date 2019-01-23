<style lang="less" scoped>
.download-tip {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #ffffff;

  .arrow-wrap {
    text-align: right;
    padding-right: 35px;
  }

  .browser-img {
    margin-right: 10px;
  }
}
</style>

<template>
<transition enter-active-class="fadeIn animated" leave-active-class="fadeOut animated">
  <div class="download-tip">
    <div class="arrow-wrap"><img src="./download-tip/arrow.png" /></div>

    <div>请使用系统浏览器：<img class="browser-img" :src="require(type === 'ios' ? './download-tip/safari.png':'./download-tip/chrome.png')" />打开</div>
  </div>
</transition>
</template>

<script>
export default {
  name: "DownloadTip",

  props: {
    type: {
      type: String,
      default: "ios"
    }
  }
};
</script>



