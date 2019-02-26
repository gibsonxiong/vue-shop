<style scoped lang="scss">
@import "~@/css/mixin";
@import "~@/css/var";

.popup {
  .mask {
    @include mask;
  }
  .inner {
    z-index: 110;
    position: fixed;
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
        @include border-bottom(#f6f6f6);
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
      padding: 40% 10% 0%;
    }
  }
}
</style>

<template>
  <div class="cashier-page">
    <c-header :title="'收银台'"></c-header>
    <div class="c-page-body header-pd">
      <div class="cashier_wrap">
        <div class="cashier_money">
          需支付:
          <span>
            ￥
            <span>78.88</span>
          </span>
        </div>
        <div class="select_pay">
          <p class="pay_des">选择支付方式</p>
          <div class="select_item">
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
              <c-radio :showType="showType" :name="name" :radioValue="1" v-model="money"></c-radio>
            </div>
          </div>
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
              <c-radio :showType="showType" :name="name" :radioValue="2" v-model="money"></c-radio>
            </div>
          </div>
        </div>
        <div class="pay_btn">
          <c-button @click="pay">支付</c-button>
        </div>
      </div>
    </div>
    <div class="popup" v-show="popupVisible">
      <div class="mask"></div>
      <div class="inner">
        <div class="header">支付确认</div>
        <div>吧啦吧啦巴拉巴拉</div>
        <div>
          <button>取消</button>
          <button>确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";

export default {
  data() {
    return {
      orderId: "",
      popupVisible: false,
      showType: "radio",
      name: "pay",
      money: '1'    //1 微信  2 余额
    };
  },
  methods: {
    payClick(val) {
      this.paydata = val;
      console.log(val);
    },
    async pay() {
      try {
        let { orderId } = this;
        let res = await services.payOrder({
          orderId
        });

        if (services.$isError(res)) throw new Error(res.message);

        //查询支付结果
        this.getOrderPayStatus(0);
        //弹窗
        this.popupVisible = true;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    //查询支付结果
    async getOrderPayStatus(timer) {
      try {
        let { orderId } = this;
        let res = await services.getOrderPayStatus({
          orderId
        });

        if (services.$isError(res)) throw new Error(res.message);

        timer++;

        if (res.data.result) {
          this.$router.go(-(history.length - 1));
          setTimeout(() => {
            this.$router.replace({ path: "/", query: { tab: 3 } });
            this.$router.push("/pay-result");
          }, 0);

          //跳转支付成功页面
        } else if (timer <= 10) {
          setTimeout(() => {
            this.getOrderPayStatus(timer);
          }, 3000);
        }
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  },
  created() {
    this.orderId = this.$route.query.orderId;
  }
};
</script>
