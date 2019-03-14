<style scoped lang="scss">
@import "~@/css/mixin";
@import "~@/css/var";

.popup {
  .mask {
    @include mask;
  }
  .inner {
    z-index: 110;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    background-color: #fff;
    height: 2rem;
    .header {
      text-align: center;
    }
  }
  position: absolute;
}
.cashier-page {
  height: 100%;
  box-sizing: border-box;
  .cashier_wrap {
    min-height: 100%;
    .cashier_money {
      text-align: right;
      padding: 0.13rem 0.16rem;
      background: #fff;
      margin-bottom: 0.2rem;
      span {
        font-size: 0.18rem;
        color: $color-primary-active;
      }
    }
    .select_pay {
      background: #fff;
      .pay_des {
        padding: 0.1rem 0.16rem;
        font-size: 0.16rem;
        color: #949698;
      }
      .select_item {
        padding: 0.1rem 0.16rem;
        @include flexbox(space-between, center);
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.7);
        @include border-bottom();
        .des_box {
          @include flexbox(center, center);
          .weixin_i {
            padding-right: 0.15rem;
            i {
              font-size: 0.22rem;
              color: #00c715;
            }
            .now_i {
              color: #ff8d31;
            }
          }
          .weichat {
            p:nth-child(2) {
              font-size: 0.12rem;
              color: #949698;
            }
            .now_money {
              color: $color-primary-active;
            }
          }
        }
      }
    }
    .pay_btn {
      padding: 0.15rem;
    }
  }

  .COMM_MSGBOX {
    background-color: #fff;
    position: absolute;
    z-index: 110;
    top: 50%;
    left: 50%;
    width: 316px;
    transform: translate(-50%, -50%);
    overflow: hidden;
    border-radius: 7px;

    .COMM_MSGBOX_FORM {
      padding: 27px 10px 0;
      overflow: hidden;
      color: #232326;
    }

    .COMM_MSGBOX_TIP {
      display: block;
      font-size: 16px;
      line-height: 1em;
      text-align: center;
      margin-bottom: 10px;
    }

    .COMM_MSGBOX_CONTENT {
      display: block;
      font-size: 14px;
      line-height: 1.5em;
      text-align: left;
      margin: 18px 10px;
    }

    .COMM_MSGBOX_ACTION_WRAPPER {
      overflow: hidden;
      padding-top: 17px;
      text-align: center;
    }

    .COMM_MSGBOX_CANCEL,
    .COMM_MSGBOX_OK {
      display: inline-block;
      float: left;
      line-height: 44px;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      // border-top: 1px solid #e3e5e9;
      @include border-top();
      width: 158px;
      height: 44px;
      color: #777;
    }

    .COMM_MSGBOX_OK {
      width: 158px;
      height: 44px;
      background: $color-primary-gradient;
      color: #fff;
    }
  }
}
</style>

<template>
  <div class="cashier-page page">
    <c-header :title="'收银台'"></c-header>
    <div class="c-page-body header-pd">
      <div class="cashier_wrap">
        <div class="cashier_money">
          需支付:
          <span>￥{{orderInfo.orderFee}}</span>
        </div>
        <div class="select_pay">
          <p class="pay_des">选择支付方式</p>
          <!-- <div class="select_item">
            <div class="des_box">
              <div class="weixin_i">
                <i class="iconfont icon-refund now_i"></i>
              </div>
              <div class="weichat">
                <p>余额支付</p>
                <p>当前余额:
                  <span class="now_money">￥
                    <span>88.33</span>
                  </span>
                </p>
              </div>
            </div>
            <div class="check">
              <c-radio :showType="showType" name="payType" radioValue="balance" v-model="payType"></c-radio>
            </div>
          </div>-->
          <div class="select_item">
            <div class="des_box">
              <div class="weixin_i">
                <i class="iconfont icon-weixin"></i>
              </div>
              <div class="weichat">
                <p>微信支付</p>
                <p>微信安全支付</p>
              </div>
            </div>
            <div class="check">
              <c-radio name="payType" radioValue="weixin" v-model="payType"></c-radio>
            </div>
          </div>
        </div>
        <div class="pay_btn">
          <c-button @click="pay">支付</c-button>
          <p style="font-size:0.12rem;color:#777;padding-top:0.05rem;">剩余时间 {{hh}}:{{mm}}:{{ss}}</p>
        </div>
      </div>
    </div>
    <div class="popup">
      <div class="mask" v-show="popupVisible"></div>
      <div class="COMM_MSGBOX" v-show="popupVisible">
        <div class="COMM_MSGBOX_FORM">
          <span class="COMM_MSGBOX_TIP">支付确认</span>
          <div>
            <span class="COMM_MSGBOX_CONTENT">1、请在微信内完成支付，如果您已支付成功，请点击“已完成支付”按钮</span>
            <span class="COMM_MSGBOX_CONTENT">2、如果您还未安装微信6.0.2 及以上版本客户端，请点击"取消"并选择其它支付方式付款</span>
          </div>
        </div>
        <div class="COMM_MSGBOX_ACTION_WRAPPER">
          <a href="javascript:void(0);" class="COMM_MSGBOX_CANCEL" @click="popupVisible = false;">取消</a>
          <a href="javascript:void(0);" class="COMM_MSGBOX_OK" @click="getOrderPayStatus(0);popupVisible = false;">已完成支付</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";
import utils from "@/utils";

export default {
  data() {
    return {
      payed: false,
      from: "",
      orderId: "",
      orderInfo: {},
      timeId: null,
      popupVisible: false,
      payType: "weixin",
      hh: "0",
      mm: "0",
      ss: "0"
    };
  },
  methods: {
    async fetchOrderInfo() {
      try {
        let { orderId } = this;
        let res = await services.fetchOrderInfo({
          orderId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.orderInfo = res.data;

        if (this.orderInfo.status != "1") {
          this.payed = true;
          this.$toast("订单已支付");

          return this.$router.back();
        }

        let endTime = new Date(
          new Date(this.orderInfo.createTime).getTime() + 24 * 60 * 60 * 1000
        );
        this.countdown(endTime);
      } catch (err) {
        return this.$toast(err.message);
      }
    },

    // async pay() {
    //   try {
    //     let { orderId } = this;
    //     let res = await services.payOrder({
    //       orderId
    //     });

    //     if (services.$isError(res)) throw new Error(res.message);

    //     //查询支付结果
    //     this.getOrderPayStatus(10);
    //     //弹窗
    //     this.popupVisible = true;
    //   } catch (err) {
    //     return this.$toast(err.message);
    //   }
    // },

    async pay() {
      try {
        let { orderId } = this;
        let res = await services.payOrderCallback({
          orderId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.payed = true;
        this.$router.replace("/pay-result");
      } catch (err) {
        return this.$toast(err.message);
      }
    },

    //查询支付结果
    async getOrderPayStatus(timer) {
      try {
        clearTimeout(this.timeId);

        let { orderId } = this;
        let res = await services.getOrderPayStatus({
          orderId
        });

        if (services.$isError(res)) throw new Error(res.message);

        timer--;

        if (res.data.result) {
          this.payed = true;
          this.$router.replace("/pay-result");

          //跳转支付成功页面
        } else if (timer >= 0) {
          this.timeId = setTimeout(() => {
            this.getOrderPayStatus(timer);
          }, 3000);
        }
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    countdown(endTime) {
      let { d, h, m, s } = utils.countdown(endTime, "d");

      this.hh = h;
      this.mm = m;
      this.ss = s;

      setTimeout(() => {
        this.countdown(endTime);
      }, 1000);
    }
  },
  created() {
    this.orderId = this.$route.query.orderId;
    this.from = this.$route.query.from;

    this.fetchOrderInfo();
  },
  async beforeRouteLeave(to, from, next) {
    if (!this.payed) {
      let res = await this.$popup.confirm("订单还没支付完成，确定要退出吗？");

      if (res === "confirm") {
        next();

        if (this.from == "confirmOrder") {
          //跳转到未付款页面
          setTimeout(() => {
            this.$router.push({ path: "/order", query: { status: "1" } });
          }, 0);
        }
      } else {
        next(false);
      }
    } else {
      next();
    }
  }
};
</script>
