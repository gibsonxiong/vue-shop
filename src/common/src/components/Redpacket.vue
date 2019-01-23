<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.redpacket {
  z-index: 101;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -210px;
  margin-left: -144px;
  width: 288px;
  height: 420px;
  background: url("./redpacket/hongbao.png");
  background-size: 288px 420px;

  .title {
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #fff0aa;
    text-align: center;
    padding-top: 55px;
  }

  .open-btn {
    position: absolute;
    top: 120px;
    left: 102px;
    width: 88px;
    height: 88px;
    background: url("./redpacket/kai.png");
    background-size: 88px;

    &:hover,
    &:active {
      transform: scale(0.98);
    }
  }

  .amount {
    position: absolute;
    left: 0;
    top: 235px;
    width: 100%;
    font-family: PingFangSC-Semibold;
    font-size: 36px;
    color: #fff0aa;
    text-align: center;
  }

  .tip {
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 100%;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #ffffff;
    text-align: center;
  }
}
</style>

<template>
  <transition enter-active-class="zoomInDown animated" leave-active-class="zoomOutUp animated">
    <div class="redpacket" v-if="show">
      <div class="title">{{title}}</div>

      <a class="open-btn" @click="open">
      </a>

      <div class="amount" v-if="amount">{{amount}} MOL</div>

      <div class="tip">{{tip}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Redpacket",

  props: {
    title: String,
    amount: Number,
    tip: String,
    show: {
      type: Boolean
    }
  },

  data() {
    return {};
  },

  methods: {
    open() {
      this.$emit("open");
    },

    preload() {
      let img = new Image();
      img.src = require("./redpacket/hongbao.png");
    }
  },

  created(){
    this.preload();
  }
};
</script>


