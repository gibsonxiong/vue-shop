<style lang="scss" scoped>
@import "~@/css/var";
.popup {
  padding: 0.1rem;
  position: absolute;
  bottom: 0;
  z-index: 100;
  right: 0;
  left: 0;
  height: 100%;
  background: rgba(#000, 0.7);
}
.popup_con {
  background: #fff;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  height: 4rem;
}
.pay {
  display: flex;
  align-items: center;
}
.icon-weixin1 {
  font-size: 0.3rem;
  padding-right: 0.1rem;
  color: #09bb07;
}
.icon-zhifubao {
  font: size 0.18rem;
  padding-right: 0.1rem;
  color: #00a1e9;
}
.icon-xuanzhong {
  color: $color-primary;
}
.icon-weixuanzhong {
  color: #e7e7e7;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0;
}

li:last-of-type {
  border-top: 1px solid #f4f4f4;
}
.popup_label {
  text-align: center;
  padding: 0.1rem;
  font-size: 18px;
}
.popup_btn {
  color: #fff;
  background: $color-primary;
  text-align: center;
  padding: 0.15rem;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
}
ul {
  padding: 0.1rem;
}
</style>
<template>
  <div class="popup" v-show="popupShow">
    <div class="popup_con">
      <p class="popup_label">货物状态</p>
      <ul>
        <li class="pay" @click="weixin()">
          <p>未收到货</p>
          <p>
            <i class="iconfont icon-xuanzhong" v-show="isShowA"></i>
            <i class="iconfont icon-weixuanzhong" v-show="isShowB"></i>
          </p>
        </li>
        <li class="pay" @click="zhifubao()">
          <p>已收到货</p>
          <p>
            <i class="iconfont icon-weixuanzhong" v-show="isShowA"></i>
            <i class="iconfont icon-xuanzhong" v-show="isShowB"></i>
          </p>
        </li>
      </ul>
      <div class="popup_btn" @click="showpopup">
        <span>关闭</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
      popupShow:false
  },
  data() {
    return {
      isShowA: true,
      isShowB: false,
      popup: true
    };
  },
  methods: {
    showpopup: function() {
      this.$emit('popEvent',false);
    },
    weixin() {
      if (this.isShowA) {
        this.isShowA = true;
        this.isShowB = false;
      } else {
        this.isShowA = true;
        this.isShowB = false;
      }
    },
    zhifubao() {
      if (this.isShowA) {
        this.isShowA = false;
        this.isShowB = true;
      }
    }
  },
  created() {}
};
</script>

