<style scoped lang="scss">
@import '~@/css/mixin';
.popup{
  .mask{
    @include mask;
  }
  .inner{
    z-index:110;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width:3rem;
    background-color: #fff;
    height: 2rem;

    .header{
      text-align: center;
    }
  }
  position: absolute;
}
</style>

<template>
  <div class="cashier-page">
    <c-header :title="'收银台'"></c-header>
    <div class="c-page-body header-pd">
      <div style="text-align:center;">
        <c-button @click="pay">支付</c-button>
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
      popupVisible:false
    };
  },
  methods: {
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
        this.popupVisible=true;
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
          
          this.$router.go(-(history.length-1) );
          setTimeout(() => {
            this.$router.replace({path:'/',query:{tab:3}});
            this.$router.push('/pay-result');
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
