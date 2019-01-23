<style scoped lang="scss">
.wx-alert__mask {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999998;
  font-family: -apple-system, BlinkMacSystemFont, PingFangSC-Regular,
    "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun,
    sans-serif;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
.wx-alert__popup {
  position: absolute;
  z-index: 999999;
  width: 75%;
  max-width: 280px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  text-align: center;
  border-radius: 6px;
  overflow: hidden;
}

.wx-dialog__hd {
  padding: 1.3em 1.6em 0.5em;
}
.wx-dialog__title {
  font-weight: 600;
  font-size: 13px;
  color: #777;
  display: inline-block;
}

.wx-dialog__bd {
  padding: 0 3.5em 2.5em;
  min-height: 40px;
  font-size: 15px;
  line-height: 1.7;
  word-wrap: break-word;
  word-break: break-all;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #161819;
}
.wx-dialog__ft {
  position: relative;
  line-height: 48px;
  font-size: 18px;
  display: flex;
}
.wx-dialog__btn {
  display: block;
  flex: 1;
  font-size: 17px;
  color: #2c8dff;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
}

.wx-dialog__ft:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #d5d5d6;
  color: #d5d5d6;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}

.wx-dialog__close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 19px;
  height: 19px;

  img{
      width: 100%;
  }
}
</style>
<template>
    <div class="wx-alert__mask" v-wc-mask>
        <div class="wx-alert__popup" v-wc-popup>
            <div class="wx-dialog__hd">
                <strong class="wx-dialog__title">{{w.title || "操作提示"}}</strong>
                <a class="wx-dialog__close-btn" v-wc-catch><img src="./close.png"/></a>
            </div> 
            <div class="wx-dialog__bd">{{w.content}}</div> 
            <div class="wx-dialog__ft" :style="w.style">
                <a href="javascript:;" class="wx-dialog__btn wx-dialog__btn_primary" v-wc-then>{{w.btnText || "确定"}}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["w"]
};
</script>