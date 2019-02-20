<style lang="scss" scoped>
@import "~@/css/var";
.c-page-body {
  // background: #f3f3f3;
}
input {
  border: 0;
  color: #000;
}
ul {
  background: #fff;
  padding: 0 0.1rem;
}
li {
  padding: 0.1rem 0;
  border-bottom: 1px solid #f4f4f4;
}
li span:first-of-type {
  width: 20%;
  display: inline-block;
  color: #666;
}
input:disabled {
  background-color: #fff;
}
/*复选框*/
.gcs-checkbox {
  display: none;
}
label {
  margin-right: 0.05rem;
}
.gcs-checkbox + label {
  background-color: white;
  border-radius: 50%;
  border: 1px solid #e7e7e7;
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  vertical-align: bottom;
  line-height: 20px;
}
.gcs-checkbox:checked + label {
  background-color: #eee;
  background: $color-primary;
}
.gcs-checkbox:checked + label:after {
  content: "\2714";
  color: white;
}
.pay {
  background: #fff;
  // margin-top: 0.1rem;
  padding: 0.1rem;
  display: flex;
  align-items: center;
}
.icon-weixin1 {
  font-size: 0.3rem;
  padding-right: 0.1rem;
  color: #09bb07;
}
.icon-zhifubao {
  font-size: 0.17rem;
  padding-right: 0.1rem;
  color: #00a1e9;
}
.icon-xuanzhong {
  color: $color-primary;
}
.icon-weixuanzhong {
  color: #e7e7e7;
}
</style>
<template>
  <div class="recharge-page">
    <c-header :title="'账户充值'"></c-header>
    <div class="c-page-body header-pd">
      <ul>
        <li>
          <span>当前余额</span>
          <span>￥{{userInfo.balance}}</span>
        </li>
        <li>
          <span>充值金额</span>
          <span>￥</span>
          <input class="recharge_num" type="number" v-model="amount">
        </li>
      </ul>
      <!--微信支付  -->
      <div class="pay" @click="payType = 'weixin'" style="margin-top: 0.1rem;">
        <i class="iconfont icon-weixin1" style></i>
        <div style="width:85%">
          <p>微信充值</p>
          <p style="color:#999">微信安全支付</p>
        </div>
        <i class="iconfont icon-xuanzhong" v-if="payType === 'weixin'"></i>
        <i class="iconfont icon-weixuanzhong" v-else></i>
      </div>
      <!-- 微信支付  end -->
      <!-- 支付宝支付 -->
      <div class="pay" @click="payType = 'zhifubao'">
        <i class="iconfont icon-zhifubao"></i>
        <div style="width:85%">
          <p>支付宝充值</p>
          <p style="color:#999">支付宝安全支付</p>
        </div>
        <i class="iconfont icon-xuanzhong" v-if="payType === 'zhifubao'"></i>
        <i class="iconfont icon-weixuanzhong" v-else></i>
      </div>
      <!--支付宝支付  end  -->
      <c-button @click="recharge">下一步</c-button>
    </div>
  </div>
</template>
<script>
import services from '@/services';

export default {
  data() {
    return {
      userInfo: {},
      amount: "",
      payType: "weixin"
    };
  },
  methods: {
    async fetchUserInfo() {
      try {
        let res = await services.fetchUserInfo();

        if (services.$isError(res)) throw new Error(res.message);

        this.userInfo = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    async recharge(){

    }
  },
  created() {
    this.fetchUserInfo();
  }
};
</script>
